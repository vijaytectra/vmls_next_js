// Cross-checks every blog slug linked anywhere in the app against the posts
// that actually have article bodies (BLOG_SEO / blogData).
import fs from "node:fs";

const detail = fs.readFileSync("src/app/blogs/[slug]/page.tsx", "utf8");
const index = fs.readFileSync("src/app/blogs/page.tsx", "utf8");
const seo = fs.readFileSync("src/data/blog-seo.ts", "utf8");

const withBody = new Set(
  [...seo.matchAll(/^    "slug": "([^"]+)",$/gm)].map((m) => m[1])
);
const linked = new Set([
  ...[...index.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]),
  ...[...detail.slice(0, detail.indexOf("const blogData = {")).matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]),
]);

const orphans = [...linked].filter((s) => !withBody.has(s));
const unlinked = [...withBody].filter((s) => !linked.has(s));

console.log(`posts with article bodies : ${withBody.size}`);
console.log(`slugs linked in the UI    : ${linked.size}`);
console.log(`\nlinked but no body (${orphans.length}):`);
orphans.forEach((s) => console.log(`  - /blogs/${s}`));
console.log(`\nbody but never linked (${unlinked.length}):`);
unlinked.forEach((s) => console.log(`  - /blogs/${s}`));
