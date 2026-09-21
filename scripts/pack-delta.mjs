// Packs only what changed since the last deploy, for cPanel File Manager.
//
// pack-deploy.mjs splits the whole export by size, so a one-word text edit
// lands in a 90 MB part that has to be uploaded again. This compares the build
// against deploy-manifest.json - a record of what is on the server right now -
// and writes a single archive holding just the new and changed files, which is
// usually a few hundred KB.
//
// Deletions cannot be done by extracting an archive, so files that vanished
// from the build are listed in deploy/DELTA.txt to remove by hand.
//
// Run:
//   node scripts/pack-delta.mjs            after `npm run build` - writes the delta
//   node scripts/pack-delta.mjs --commit   after uploading it - updates the manifest
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

const SRC = "out";
const DEST = "deploy";
const MANIFEST = "deploy-manifest.json";

// Same development-only routes pack-deploy.mjs holds back.
const EXCLUDE_DIRS = new Set(["debug", "test-route", "out"]);

const sha1 = (file) => crypto.createHash("sha1").update(fs.readFileSync(file)).digest("hex");

/** @returns {Record<string, string>} site-relative path -> content hash */
function hashTree(dir, rel = "", acc = {}) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const childRel = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (!rel && EXCLUDE_DIRS.has(entry.name)) continue;
      hashTree(path.join(dir, entry.name), childRel, acc);
    } else if (entry.isFile()) {
      if (entry.name === ".DS_Store") continue;
      acc[childRel] = sha1(path.join(dir, entry.name));
    }
  }
  return acc;
}

if (!fs.existsSync(SRC)) {
  console.error(`${SRC}/ not found - run \`npm run build\` first.`);
  process.exit(1);
}

const current = hashTree(SRC);

if (process.argv.includes("--commit")) {
  fs.writeFileSync(MANIFEST, JSON.stringify(current, null, 0) + "\n");
  console.log(`${MANIFEST} now records ${Object.keys(current).length} deployed files`);
  process.exit(0);
}

if (!fs.existsSync(MANIFEST)) {
  console.error(
    `${MANIFEST} not found. It records what is already on the server.\n` +
      `If the current build is what is live, run:  node scripts/pack-delta.mjs --commit`
  );
  process.exit(1);
}

const deployed = JSON.parse(fs.readFileSync(MANIFEST, "utf8"));

const added = Object.keys(current).filter((f) => !(f in deployed));
const changed = Object.keys(current).filter((f) => f in deployed && deployed[f] !== current[f]);
const removed = Object.keys(deployed).filter((f) => !(f in current));
// Drop empties — Windows bsdtar treats a trailing NUL from `--null -T` as an
// empty path and aborts with "Couldn't visit directory".
const upload = [...added, ...changed].filter(Boolean).sort();

fs.mkdirSync(DEST, { recursive: true });
const archive = path.join(DEST, "delta.tar.gz");
fs.rmSync(archive, { force: true });

if (upload.length) {
  const list = path.join(DEST, "delta.files");
  // Newline-separated list. Avoid `--null` + trailing NUL (breaks Windows bsdtar).
  // Also skip blank lines. Filenames must be UTF-8 without NBSP — those make
  // bsdtar report "Couldn't visit directory" with an empty path.
  const safe = upload.filter((f) => f && !/[\u00a0\r\n\0]/.test(f));
  const skipped = upload.filter((f) => f && /[\u00a0\r\n\0]/.test(f));
  if (skipped.length) {
    console.warn(
      `WARNING: skipping ${skipped.length} path(s) with unsafe characters (rename the files):\n` +
        skipped.map((f) => `  ${JSON.stringify(f)}`).join("\n")
    );
  }
  fs.writeFileSync(list, safe.join("\n") + "\n");
  const listAbs = path.resolve(list);
  const archiveAbs = path.resolve(archive);
  // macOS bsdtar: skip AppleDouble / provenance xattrs. Without this, tar can
  // emit `tar: (null)` and exit 1 after writing, and the archive gains ._ twins
  // that break Linux/cPanel extraction.
  execFileSync(
    "tar",
    [
      "--no-xattrs",
      "--no-mac-metadata",
      "--no-acls",
      "--no-fflags",
      "-czf",
      archiveAbs,
      "-T",
      listAbs,
    ],
    {
      cwd: SRC,
      stdio: "inherit",
      env: { ...process.env, COPYFILE_DISABLE: "1" },
    }
  );
  fs.unlinkSync(list);
}

const size = upload.length ? (fs.statSync(archive).size / 1024).toFixed(1) + " KB" : "-";
const report = [
  "VMLS static export - delta since the last deploy",
  `Generated ${new Date().toISOString()}`,
  "",
  `  new:      ${added.length}`,
  `  changed:  ${changed.length}`,
  `  removed:  ${removed.length}`,
  `  archive:  ${size}`,
  "",
  upload.length
    ? "Upload deploy/delta.tar.gz to public_html and Extract it, then delete the .tar.gz."
    : "Nothing to upload.",
  "",
  ...(removed.length
    ? [
        "Extracting cannot delete anything, so remove these by hand in File Manager:",
        ...removed.map((f) => `  ${f}`),
        "",
      ]
    : []),
  "Once the server matches this build, record it:",
  "  node scripts/pack-delta.mjs --commit",
].join("\n");

fs.writeFileSync(path.join(DEST, "DELTA.txt"), report + "\n");
console.log(report);
