// Two posts link to blog slugs that do not exist in this content set. Both
// have an exact equivalent under the current slug, so the links are
// repointed rather than removed.
//
//   node scripts/repoint-dead-blog-links.mjs [--dry]
import fs from "node:fs";

const FILE = "src/data/blogs/content.json";
const DRY = process.argv.includes("--dry");

const SWAPS = {
  "/blogs/five-year-bba-llb-hons-chennai-course": "/blogs/5-year-bba-llb-hons",
  "/blogs/five-year-b-com-ll-b-hons-at-vmls-understand-the-programme-overview-eligibility-criteria-and-different-career-opportunities":
    "/blogs/5-year-bcom-llb-hons",
};

const posts = JSON.parse(fs.readFileSync(FILE, "utf8"));

// Every destination must be a real post before anything is rewritten.
for (const target of Object.values(SWAPS)) {
  const slug = target.replace("/blogs/", "");
  if (!posts[slug]) throw new Error(`target post does not exist: ${target}`);
}

let count = 0;
const touched = new Set();

for (const [slug, post] of Object.entries(posts)) {
  let html = String(post.html ?? "");
  const before = html;
  for (const [from, to] of Object.entries(SWAPS)) {
    const parts = html.split(`href="${from}"`);
    if (parts.length > 1) {
      count += parts.length - 1;
      touched.add(slug);
      html = parts.join(`href="${to}"`);
    }
  }
  if (html !== before && !DRY) posts[slug].html = html;
}

if (!DRY) fs.writeFileSync(FILE, `${JSON.stringify(posts, null, 2)}\n`);
console.log(
  `${DRY ? "DRY RUN - " : ""}repointed ${count} link(s) across ${touched.size} post(s)`
);
touched.forEach((t) => console.log("  " + t));
