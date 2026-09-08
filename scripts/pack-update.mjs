// Packs a code-only update: everything except images, video and PDFs.
//
// A full deploy is ~400 MB, almost all of it media that rarely changes. When a
// release only touches components, CSS or .htaccess, the changed set is the
// hashed bundles under _next/, every .html file (they reference those hashes),
// and the config files - a few megabytes.
//
// Extracting this over an existing deployment is safe: it overwrites the files
// it carries and leaves media untouched. Old hashed bundles stay behind as
// harmless orphans; a full pack-deploy clears them out.
//
// Run:  node scripts/pack-update.mjs
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const SRC = "out";
const DEST = "deploy";
const ARCHIVE = "update.tar.gz";

// Media is excluded - it is the bulk of the export and changes rarely.
const MEDIA = /\.(webp|png|jpe?g|gif|svg|ico|mp4|webm|pdf|woff2?|ttf|eot)$/i;
// Development-only routes are never shipped.
const EXCLUDE_DIRS = new Set(["debug", "test-route"]);

const files = [];
const walk = (dir, rel = "") => {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (rel === "" && EXCLUDE_DIRS.has(entry.name)) continue;
      walk(path.join(dir, entry.name), relPath);
    } else if (!MEDIA.test(entry.name)) {
      files.push(relPath);
    }
  }
};

if (!fs.existsSync(SRC)) throw new Error(`${SRC}/ not found - run npm run build first`);
walk(SRC);

// Fonts are hashed and already on the server; only ship them if _next changed
// names, which the walk above cannot know. They are excluded as media, so a
// font change needs a full pack-deploy. Flag that rather than silently miss it.
const fontsInBuild = fs
  .readdirSync(path.join(SRC, "_next/static/media"), { withFileTypes: true })
  .filter((e) => /\.woff2?$/i.test(e.name)).length;

fs.mkdirSync(DEST, { recursive: true });
const listFile = path.join(DEST, "update.files");
// NUL-separated: some paths contain spaces. Paths stay POSIX-separated and
// relative because GNU tar on Windows reads "C:\..." as a remote host and a
// backslash as an escape.
fs.writeFileSync(listFile, `${files.join("\0")}\0`);

const archive = path.join(DEST, ARCHIVE);
execFileSync(
  "tar",
  ["-czf", `../${DEST}/${ARCHIVE}`, "--null", "-T", `../${DEST}/update.files`],
  { cwd: SRC, stdio: "inherit" }
);
fs.unlinkSync(listFile);

const bytes = fs.statSync(archive).size;
const html = files.filter((f) => f.endsWith(".html")).length;
console.log(`${archive}  ${(bytes / 1048576).toFixed(1)} MB`);
console.log(`  ${files.length} files: ${html} HTML, plus _next bundles, .htaccess, sitemap.xml, robots.txt`);
console.log(`  media excluded (${fontsInBuild} font files left in place - if fonts changed, use pack-deploy.mjs)`);
console.log(`\nUpload to public_html, Extract, delete the .tar.gz.`);
