// Every internal link inside a blog article must resolve to a live page.
// Catches a mistyped slug or a link to a post that no longer exists.
//
// Usage: npm start &   then: node scripts/check-internal-links.mjs
import fs from "node:fs";

const BASE = process.env.SEO_AUDIT_BASE ?? "http://localhost:3000";
const posts = JSON.parse(fs.readFileSync("src/data/blogs/content.json", "utf8"));

const targets = new Map(); // path -> [slugs linking to it]
for (const post of Object.values(posts)) {
  for (const m of String(post.html ?? "").matchAll(/<a[^>]+href="(\/[^"#?]*)"/g)) {
    const path = m[1].replace(/\/$/, "") || "/";
    targets.set(path, [...(targets.get(path) ?? []), post.slug]);
  }
}

const broken = [];
const redirected = [];
for (const [path, from] of targets) {
  const res = await fetch(BASE + path, { redirect: "manual" });
  if (res.status === 200) continue;
  if (res.status >= 300 && res.status < 400) {
    redirected.push(`${path} -> ${res.status} ${res.headers.get("location")} (from ${from.length} post(s))`);
  } else {
    broken.push(`${path} -> HTTP ${res.status} (linked from: ${from.join(", ")})`);
  }
}

console.log(`checked ${targets.size} distinct internal link targets across ${Object.keys(posts).length} posts`);
if (redirected.length) {
  console.log(`\nlinks that hop through a redirect (${redirected.length}) - worth pointing straight at the target:`);
  redirected.forEach((r) => console.log("  - " + r));
}
if (broken.length) {
  console.log(`\nBROKEN (${broken.length}):`);
  broken.forEach((b) => console.log("  - " + b));
} else {
  console.log("\nno broken internal links");
}
process.exit(broken.length ? 1 : 0);
