// Rejects an .htaccess Apache would refuse to parse.
//
// Why this exists: a RewriteCond pattern was written as
//
//   RewriteCond %{HTTP:Accept-Encoding} (^|,) *br( *[,;]|$)
//
// Apache splits directive arguments on whitespace, so it read "(^|,)" as the
// pattern and "*br(" as the flags block, rejected the file, and returned 500
// for every request in the vhost - static images included. The site was down
// until the file was replaced. Nothing in the build caught it, because the
// generator only ever produced text and no one could run Apache locally.
//
// This is not a full Apache parser. It checks the one class of mistake that
// takes a site down silently: a directive whose arguments do not tokenise into
// the shape Apache expects.
//
//   node scripts/check-htaccess.mjs [path]
import fs from "node:fs";

const FILE = process.argv[2] ?? "public/.htaccess";

/** Tokenise a directive line the way Apache does: whitespace, honouring quotes. */
function args(line) {
  const out = [];
  let cur = "";
  let quoted = false;
  let had = false;
  for (const ch of line.trim()) {
    if (ch === '"') { quoted = !quoted; had = true; continue; }
    if (!quoted && /\s/.test(ch)) {
      if (cur || had) { out.push(cur); cur = ""; had = false; }
      continue;
    }
    cur += ch;
  }
  if (cur || had) out.push(cur);
  return out;
}

const lines = fs.readFileSync(FILE, "utf8").split(/\r?\n/);
const problems = [];
const add = (n, why, line) => problems.push({ n, why, line });

lines.forEach((raw, i) => {
  const line = raw.trim();
  if (!line || line.startsWith("#")) return;
  const a = args(line);
  const directive = a[0];
  const n = a.length - 1;

  if (directive === "RewriteCond" && (n < 2 || n > 3))
    add(i + 1, `RewriteCond takes 2-3 arguments, this tokenises into ${n} - unquoted whitespace in the pattern?`, line);
  if (directive === "RewriteRule" && (n < 2 || n > 3))
    add(i + 1, `RewriteRule takes 2-3 arguments, this tokenises into ${n} - unquoted whitespace in the pattern?`, line);
  if ((directive === "RewriteCond" || directive === "RewriteRule") && n === 3 && !/^\[.*\]$/.test(a[3]))
    add(i + 1, `third argument "${a[3]}" is not a [flags] block`, line);
  if (directive === "SetOutputFilter" && n !== 1) add(i + 1, "SetOutputFilter takes exactly 1 argument", line);
  if (directive === "ForceType" && n !== 1) add(i + 1, "ForceType takes exactly 1 argument", line);
  if (directive === "Header" && n < 2) add(i + 1, "Header needs at least an action and a header name", line);
  if (directive === "SetEnv" && (n < 1 || n > 2)) add(i + 1, "SetEnv takes 1-2 arguments", line);
});

// <IfModule>/<FilesMatch> nesting must balance or Apache refuses the file.
let depth = 0;
lines.forEach((raw, i) => {
  const t = raw.trim();
  if (t.startsWith("#")) return;
  if (/^<\/[A-Za-z]/.test(t)) { depth--; if (depth < 0) add(i + 1, "closing tag with no opening tag", t); }
  else if (/^<[A-Za-z][^>]*>\s*$/.test(t)) depth++;
});
if (depth !== 0) add(lines.length, `containers left unbalanced (depth ${depth})`, "");

if (problems.length) {
  console.error(`${FILE}: ${problems.length} problem(s) Apache would reject:\n`);
  for (const p of problems) console.error(`  line ${p.n}: ${p.why}\n    ${p.line}\n`);
  process.exit(1);
}
console.log(`${FILE}: ${lines.length} lines, no directive-shape problems`);
