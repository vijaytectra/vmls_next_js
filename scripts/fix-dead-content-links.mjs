// Removes links left over from the WordPress import that point at routes
// this site has never had: /blogs/tag, /blogs/category, /blogs/post.
//
// The visible label is kept; only the anchor is unwrapped, because these were
// tag chips with no destination to send a reader to. Sending them all to
// /blogs would be a guess dressed up as a link.
//
//   node scripts/fix-dead-content-links.mjs [--dry]
import fs from "node:fs";

const FILE = "src/data/blogs/content.json";
const DRY = process.argv.includes("--dry");
const DEAD = /<a[^>]+href="\/blogs\/(?:tag|category|post)(?:\/[^"]*)?"[^>]*>([\s\S]*?)<\/a>/g;

const posts = JSON.parse(fs.readFileSync(FILE, "utf8"));
let unwrapped = 0;
const touched = [];

for (const [slug, post] of Object.entries(posts)) {
  const html = String(post.html ?? "");
  const matches = html.match(DEAD);
  if (!matches) continue;
  const fixed = html.replace(DEAD, "$1");
  unwrapped += matches.length;
  touched.push(`${slug} (${matches.length})`);
  if (!DRY) posts[slug].html = fixed;
}

if (!DRY) fs.writeFileSync(FILE, `${JSON.stringify(posts, null, 2)}\n`);
console.log(
  `${DRY ? "DRY RUN - " : ""}unwrapped ${unwrapped} dead link(s) in ${touched.length} post(s)`
);
touched.forEach((t) => console.log("  " + t));
