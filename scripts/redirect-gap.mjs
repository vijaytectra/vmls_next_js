// Compares the live (old, static) site's sitemap against the routes the new
// app serves and the redirects already configured, so the 301 work can be
// scoped exactly. Read-only: writes a report, changes nothing.
import fs from "node:fs";

const URLS = process.argv[2];
const live = fs
  .readFileSync(URLS, "utf8")
  .trim()
  .split("\n")
  .map((u) => u.trim().replace(/^https?:\/\/vmls\.edu\.in/, ""))
  .filter(Boolean);

// Routes the new app actually serves.
const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = `${dir}/${e.name}`;
    if (e.isDirectory()) walk(p, out);
    else if (e.name === "page.tsx") out.push(p);
  }
  return out;
};
const newRoutes = new Set(
  walk("src/app").map((f) =>
    f.replace(/^src\/app/, "").replace(/\/page\.tsx$/, "") || "/"
  )
);

// Dynamic route slugs.
const blogSeo = fs.readFileSync("src/data/blog-seo.ts", "utf8");
for (const m of blogSeo.matchAll(/^    "slug": "([^"]+)",$/gm))
  newRoutes.add(`/blogs/${m[1]}`);
const facultySrc = fs.readFileSync("src/app/faculty/[slug]/page.tsx", "utf8");
for (const m of facultySrc.matchAll(/^    slug: "([^"]+)",$/gm))
  newRoutes.add(`/faculty/${m[1]}`);
const advisors = fs.readFileSync("src/data/boardOfAdvisors.ts", "utf8");
for (const m of advisors.matchAll(/slug: "([^"]+)",/g))
  newRoutes.add(`/board-of-advisors/${m[1]}`);
const mentors = fs.readFileSync("src/data/mentoringCommittee.ts", "utf8");
for (const m of mentors.matchAll(/slug: '([^']+)',/g))
  newRoutes.add(`/mentoring-committee/${m[1]}`);

// Redirects already declared.
const cfg = fs.readFileSync("next.config.ts", "utf8");
const existing = new Set(
  [...cfg.matchAll(/source: "([^"]+)"/g)].map((m) => m[1])
);

const strip = (u) => u.replace(/\.html$/, "").replace(/\/$/, "") || "/";

const buckets = {
  alreadyRedirected: [],
  exactSlugMatch: [],
  needsDecision: [],
  nonHtmlAsset: [],
};

for (const url of live) {
  if (existing.has(url)) {
    buckets.alreadyRedirected.push(url);
    continue;
  }
  if (/\.(pdf|jpe?g|png|webp|docx?|xlsx?)$/i.test(url)) {
    buckets.nonHtmlAsset.push(url);
    continue;
  }
  const target = strip(url);
  if (newRoutes.has(target)) buckets.exactSlugMatch.push([url, target]);
  else buckets.needsDecision.push(url);
}

const out = {
  liveUrls: live.length,
  newRoutes: newRoutes.size,
  alreadyRedirected: buckets.alreadyRedirected.length,
  exactSlugMatch: buckets.exactSlugMatch.length,
  nonHtmlAsset: buckets.nonHtmlAsset.length,
  needsDecision: buckets.needsDecision.length,
};
console.log(JSON.stringify(out, null, 2));
console.log("\n--- NEEDS A DECISION (no matching route in the new app) ---");
buckets.needsDecision.forEach((u) => console.log("  " + u));
console.log("\n--- NON-HTML ASSETS IN THE SITEMAP ---");
buckets.nonHtmlAsset.forEach((u) => console.log("  " + u));

fs.writeFileSync(
  process.argv[3] ?? "redirect-gap.json",
  JSON.stringify(buckets, null, 2)
);
