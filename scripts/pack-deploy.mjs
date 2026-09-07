// Packs ./out into upload-sized .tar.gz parts for cPanel File Manager.
//
// Why parts: the export is ~440 MB across ~4,600 files. A browser upload of a
// single archive that size has no resume - one dropped connection and the whole
// transfer restarts. Each part here stands alone, so a failed part is re-tried
// on its own. cPanel's File Manager extracts .tar.gz natively (Extract button).
//
// Why .htaccess is last: until it is in place, extensionless URLs 404. Keeping
// it in its own final part means the site only switches over once every asset
// it references has already landed.
//
// Run:  node scripts/pack-deploy.mjs [maxPartMB]
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { STAGING_ROBOTS, stagingHtaccess } from "./staging-overlay.mjs";

const SRC = "out";
const DEST = "deploy";
const MAX_PART = Number(process.argv[2] ?? 90) * 1024 * 1024;

// Development-only routes. They are already noindex + robots-blocked
// (src/lib/indexing.ts), so they are simply not shipped.
const EXCLUDE_DIRS = new Set(["debug", "test-route", "out"]);

/* --------------------------------------------------------------- collect */

/** @returns {{rel: string, size: number}[]} */
function walk(dir, rel = "") {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const childRel = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (!rel && EXCLUDE_DIRS.has(entry.name)) continue;
      found.push(...walk(path.join(dir, entry.name), childRel));
    } else if (entry.isFile()) {
      found.push({ rel: childRel, size: fs.statSync(path.join(dir, entry.name)).size });
    }
  }
  return found;
}

if (!fs.existsSync(SRC)) {
  console.error(`${SRC}/ not found - run \`npm run build\` first.`);
  process.exit(1);
}

const all = walk(SRC);
const htaccess = all.filter((f) => f.rel === ".htaccess");
const payload = all.filter((f) => f.rel !== ".htaccess");

if (!htaccess.length) {
  console.error("out/.htaccess is missing - run `node scripts/generate-htaccess.mjs` then rebuild.");
  process.exit(1);
}

/* ----------------------------------------------------------------- split */

// Largest first, then first-fit: keeps the big PDFs and videos from being
// stranded in a part of their own and evens the parts out.
payload.sort((a, b) => b.size - a.size);

/** @type {{files: {rel: string, size: number}[], size: number}[]} */
const parts = [];
for (const file of payload) {
  let target = parts.find((p) => p.size + file.size <= MAX_PART);
  if (!target) parts.push((target = { files: [], size: 0 }));
  target.files.push(file);
  target.size += file.size;
}

/* ------------------------------------------------------------------ pack */

fs.rmSync(DEST, { recursive: true, force: true });
fs.mkdirSync(DEST, { recursive: true });

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1).padStart(6);

/** Writes a NUL-separated list so names with spaces and brackets survive. */
function writeArchive(name, files) {
  const listPath = path.join(DEST, `${name}.files`);
  fs.writeFileSync(listPath, files.map((f) => f.rel).join("\0") + "\0");
  // tar is run from inside out/ so the archive holds site-relative paths, and
  // the two arguments below stay POSIX-separated because GNU tar reads a
  // backslash as an escape, not as a directory separator.
  execFileSync(
    "tar",
    ["-czf", `../${DEST}/${name}.tar.gz`, "--null", "-T", `../${DEST}/${name}.files`],
    { cwd: SRC, stdio: "inherit" }
  );
  fs.unlinkSync(listPath);
  const archived = fs.statSync(path.join(DEST, `${name}.tar.gz`)).size;
  console.log(`  ${name}.tar.gz  ${mb(archived)} MB  ${String(files.length).padStart(5)} files`);
  return { name, files: files.length, raw: files.reduce((n, f) => n + f.size, 0), archived };
}

const width = String(parts.length).length;
console.log(`Packing ${payload.length + 1} files into ${parts.length + 1} parts (max ${MAX_PART / 1024 / 1024} MB raw)\n`);

const written = parts.map((part, i) =>
  writeArchive(`part-${String(i + 1).padStart(width, "0")}`, part.files)
);
written.push(writeArchive("part-99-htaccess", htaccess));

/* --------------------------------------------------------- staging only */

// The staging subdomain serves the same pages as the live site. Left alone it
// would be crawled as duplicate content, so this overlay replaces robots.txt
// and prepends a noindex header to .htaccess. A Disallow on its own is not
// enough - it stops crawling, not indexing - hence X-Robots-Tag as well.
//
// Extract this INSTEAD OF part-99 on staging, and NEVER on production.
const STAGE = path.join(DEST, "staging-overlay");
fs.rmSync(STAGE, { recursive: true, force: true });
fs.mkdirSync(STAGE, { recursive: true });

fs.writeFileSync(path.join(STAGE, "robots.txt"), STAGING_ROBOTS);
fs.writeFileSync(
  path.join(STAGE, ".htaccess"),
  stagingHtaccess(fs.readFileSync(path.join(SRC, ".htaccess"), "utf8"))
);

execFileSync(
  "tar",
  ["-czf", "../staging-overlay.tar.gz", "--null", "-T", "-"],
  { cwd: STAGE, input: "robots.txt\0.htaccess\0", stdio: ["pipe", "inherit", "inherit"] }
);
fs.rmSync(STAGE, { recursive: true, force: true });
console.log(`  staging-overlay.tar.gz          2 files  (staging only - use instead of part-99)`);

/* -------------------------------------------------------------- manifest */

const totalArchived = written.reduce((n, p) => n + p.archived, 0);
const manifest = [
  "VMLS static export - cPanel upload manifest",
  `Generated ${new Date().toISOString()}`,
  "",
  `Files:  ${payload.length + 1}`,
  `Parts:  ${written.length}`,
  `Upload: ${(totalArchived / 1024 / 1024).toFixed(1)} MB compressed`,
  "",
  "Upload every part to the target directory, Extract each one, then delete",
  "the .tar.gz files.",
  "",
  "  Production: extract part-99-htaccess LAST.",
  "  Staging:    extract staging-overlay LAST, and NOT part-99-htaccess.",
  "              (It carries a noindex robots.txt and header so the staging",
  "               subdomain is never crawled as duplicate content.)",
  "",
  ...written.map((p) => `  ${p.name}.tar.gz  ${mb(p.archived)} MB  ${String(p.files).padStart(5)} files`),
  "",
  `After extracting everything, this must report ${payload.length + 1}:`,
  "  find . -type f | wc -l",
].join("\n");

fs.writeFileSync(path.join(DEST, "MANIFEST.txt"), manifest + "\n");
console.log(`\n${(totalArchived / 1024 / 1024).toFixed(1)} MB total in ${DEST}/  (see ${DEST}/MANIFEST.txt)`);
