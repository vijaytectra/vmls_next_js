// Builds the 301 map from the OLD static site's sitemap to the new app's
// routes, and writes it to src/data/redirects.ts (imported by next.config.ts).
//
// Policy, as agreed:
//   - /vlat/*            left alone entirely (separate application, still live)
//   - exact slug match   /x.html            -> /x
//   - legacy /blog/*     posts 1:1 where the article exists, else -> /blogs
//   - orphan news items  -> /news  (the index this run also relies on)
//   - orphan profiles    -> the person's new page, else the relevant index
//   - renamed assets     -> their new path
//   - hand-written rules already in next.config.ts always win
//
// Usage: node scripts/generate-redirects.mjs <live-urls.txt>
import fs from "node:fs";

const LIVE = process.argv[2];
const OUT = "src/data/redirects.ts";

const live = fs
  .readFileSync(LIVE, "utf8")
  .trim()
  .split("\n")
  .map((u) => u.trim().replace(/^https?:\/\/vmls\.edu\.in/, ""))
  .filter(Boolean);

/* ------------------------------------------------ what the new app serves */

const walk = (dir, out = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = `${dir}/${e.name}`;
    if (e.isDirectory()) walk(p, out);
    else if (e.name === "page.tsx") out.push(p);
  }
  return out;
};
const routes = new Set(
  walk("src/app")
    .map((f) => f.replace(/^src\/app/, "").replace(/\/page\.tsx$/, "") || "/")
    .filter((r) => !r.includes("["))
);

const read = (f) => fs.readFileSync(f, "utf8");
const blogSlugs = [...read("src/data/blog-seo.ts").matchAll(/^    "slug": "([^"]+)",$/gm)].map((m) => m[1]);
const facultySlugs = [...read("src/app/faculty/[slug]/page.tsx").matchAll(/^    slug: "([^"]+)",$/gm)].map((m) => m[1]);
const advisorSlugs = [...read("src/data/boardOfAdvisors.ts").matchAll(/slug: "([^"]+)",/g)].map((m) => m[1]);
const mentorSlugs = [...read("src/data/mentoringCommittee.ts").matchAll(/slug: '([^']+)',/g)].map((m) => m[1]);

blogSlugs.forEach((s) => routes.add(`/blogs/${s}`));
facultySlugs.forEach((s) => routes.add(`/faculty/${s}`));
advisorSlugs.forEach((s) => routes.add(`/board-of-advisors/${s}`));
mentorSlugs.forEach((s) => routes.add(`/mentoring-committee/${s}`));

/* ------------------------------------------------------- manual overrides */

// Hand-maintained rules win on any source collision. They live in their own
// file so regenerating this map can never drop them.
const manualSrc = read("src/data/redirects.manual.ts");
const manual = JSON.parse(
  manualSrc.slice(
    manualSrc.indexOf("= [", manualSrc.indexOf("MANUAL_REDIRECTS")) + 2,
    manualSrc.lastIndexOf("]") + 1
  )
);

// People whose old page has no direct equivalent, mapped by who they are.
const PEOPLE_OVERRIDES = {
  "/Mr_Siddharth_raja.html": "/dean",
  "/deans-desk.html": "/dean",
  "/Dr.A.S.Ganesan.html": "/chancellor",
  "/Dr.A.Shanmugasundaram.html": "/founder",
  "/Dr.Padmanabha-Ramanunjam.html": "/mentoring-committee/dr-padmanabha-ramanujam",
  "/Prof.Dr.C.Raj%20Kumar.html": "/mentoring-committee/prof-dr-c-raj-kumar",
  "/Prof.Dr.Sreejith-S.G.html": "/mentoring-committee/prof-dr-sreejith-sg",
  "/Prof.Anand-Prakash-Mishra.html": "/mentoring-committee/prof-anand-prakash-mishra",
  "/Mr.Antony-R.Julian.html": "/mentoring-committee/mr-antony-r-julian",
  "/Dr.A.Francis-Julian.html": "/mentoring-committee/dr-a-francis-julian",
  "/Mr.J.Suresh-Samuel.html": "/mentoring-committee/mr-j-suresh-samuel",
  "/Mr.Vivek-Dhokalia.html": "/mentoring-committee/mr-vivek-dhokalia",
  // People with no page anywhere in the new app -> the relevant index.
  "/Dr.Anuradha-Ganesan.html": "/about-vmrf",
  "/Mr.Ananyo-Mitra.html": "/faculty-profiles",
  "/Mr.Saravanan-R.html": "/faculty-profiles",
  "/dr-kannan-kunnathully.html": "/faculty-profiles",
  "/ms-rudra-chandran-l.html": "/faculty-profiles",
  "/dr-s-suganya.html": "/faculty-profiles",
  "/ms-kiran-jenifer.html": "/faculty-profiles",
  "/tathagat-sharma.html": "/faculty-profiles",
};

// Section pages whose slug changed between the two sites.
const SECTION_OVERRIDES = {
  "/about.html": "/about-vmls",
  "/About-VMRF.html": "/about-vmrf",
  "/Scholarships.html": "/scholarships",
  "/Campus.html": "/campus-life",
  "/Contact-Us.html": "/contact-us",
  "/how-to-apply.html": "/admissions/process",
  "/llb-programme.html": "/admissions/llb",
  "/llm-programme.html": "/admissions/llm",
  "/seminar-halls.html": "/seminar-hall",
  "/centre-for-maritime-law.html": "/maritime-law",
  "/centre-for-the-promotion-of-international-law.html": "/cpil",
  "/vmls-open-day-2026.html": "/blogs/vmls-open-day-2026",
};

// Newsletter PDFs were renamed when they moved into the new public/ tree.
// Their old paths contain spaces and parentheses, which path-to-regexp reads
// as pattern syntax, so those are handled in src/middleware.ts instead - see
// LEGACY_ASSETS there. Only the clean path is a config rule.
const ASSET_OVERRIDES = {
  "/assets/images/Newsletter-feb-march-2026.pdf":
    "/images/newsletter/Newsletter-feb-march-2026.pdf",
};

/* --------------------------------------------------------------- building */

const manualSources = new Set(manual.map((r) => r.source));
const generated = [];
const unresolved = [];
const skipped = [];

const add = (source, destination, why) => {
  // Next normalises a trailing slash away BEFORE matching redirects, so a
  // rule whose source ends in "/" can never fire. Declare the bare form.
  const src = source.length > 1 ? source.replace(/\/$/, "") : source;
  if (manualSources.has(src)) return;
  if (src === destination) return;
  generated.push({ source: src, destination, why });
};

for (const url of live) {
  // The VLAT portal is a separate live application - never touch it.
  if (url === "/vlat/" || url.startsWith("/vlat/")) {
    skipped.push([url, "separate VLAT application"]);
    continue;
  }
  if (url === "/" || url === "") continue;

  if (ASSET_OVERRIDES[url]) {
    add(url, ASSET_OVERRIDES[url], "renamed asset");
    continue;
  }
  if (/\.(pdf|jpe?g|png|webp|docx?|xlsx?)$/i.test(url)) {
    skipped.push([url, "asset still served at the same path"]);
    continue;
  }
  if (SECTION_OVERRIDES[url]) {
    add(url, SECTION_OVERRIDES[url], "renamed section");
    continue;
  }
  if (PEOPLE_OVERRIDES[url]) {
    add(url, PEOPLE_OVERRIDES[url], "profile moved");
    continue;
  }

  // Legacy WordPress blog.
  if (url.startsWith("/blog/")) {
    const slug = url.replace(/^\/blog\//, "").replace(/\/$/, "");
    if (!slug || slug.startsWith("category/") || /^page\/\d+$/.test(slug)) {
      add(url, "/blogs", "legacy blog listing");
    } else if (blogSlugs.includes(slug)) {
      add(url, `/blogs/${slug}`, "legacy blog post");
    } else {
      add(url, "/blogs", "legacy blog post with no article in the new set");
    }
    continue;
  }

  const bare = url.replace(/\.html$/, "").replace(/\/$/, "");

  if (routes.has(bare)) {
    add(url, bare, "same slug, extension dropped");
    continue;
  }

  // Old flat profile pages: /dr-gaurav-shukla.html -> /faculty/gaurav-shukla
  const norm = bare
    .replace(/^\//, "")
    .toLowerCase()
    .replace(/^(dr|mr|ms|prof)[._-]+/, "")
    .replace(/[^a-z]/g, "");
  // Old and new slugs spell names differently (initials, middle names,
  // "Sachinkumar" vs "sachinkumar-p-p"), so fall back to containment on
  // names long enough that a partial match cannot be a coincidence.
  const nameMatch = (slugs) => {
    const flat = slugs.map((s) => [s, s.replace(/-/g, "")]);
    const exact = flat.find(([, f]) => f === norm);
    if (exact) return exact[0];
    if (norm.length < 8) return undefined;
    const contained = flat.find(
      ([, f]) => f.length >= 8 && (f.startsWith(norm) || norm.startsWith(f) || f.includes(norm) || norm.includes(f))
    );
    return contained?.[0];
  };

  const faculty = nameMatch(facultySlugs);
  if (faculty) {
    add(url, `/faculty/${faculty}`, "faculty profile moved");
    continue;
  }
  const advisor = nameMatch(advisorSlugs);
  if (advisor) {
    add(url, `/board-of-advisors/${advisor}`, "advisor profile moved");
    continue;
  }
  const mentor = nameMatch(mentorSlugs);
  if (mentor) {
    add(url, `/mentoring-committee/${mentor}`, "mentoring profile moved");
    continue;
  }

  // Orphan news items -> the news index.
  if (url.startsWith("/news/")) {
    add(url, "/news", "news item not carried over");
    continue;
  }

  if (!manualSources.has(url)) unresolved.push(url);
}

/* ----------------------------------------------------------------- output */

const all = [...manual.map((r) => ({ ...r, why: "hand-written, preserved" })), ...generated];
const seen = new Set();
const deduped = all.filter((r) => {
  if (seen.has(r.source)) return false;
  seen.add(r.source);
  return true;
});

// Collapse chains: if a destination is itself redirected, point at the end of
// the chain. A hop costs crawl budget and dilutes the signal.
const bySource = new Map(deduped.map((r) => [r.source, r]));
// /faculty is a page-level redirect to /faculty-profiles, not a config rule,
// so the generator cannot see it - declare it here.
const KNOWN_HOPS = { "/faculty": "/faculty-profiles" };
for (const rule of deduped) {
  const hops = new Set([rule.source]);
  let dest = rule.destination;
  while (true) {
    const next = bySource.get(dest)?.destination ?? KNOWN_HOPS[dest];
    if (!next || hops.has(dest)) break;
    hops.add(dest);
    dest = next;
  }
  if (dest !== rule.destination) rule.destination = dest;
}

fs.writeFileSync(
  OUT,
  `// AUTO-GENERATED by scripts/generate-redirects.mjs - do not edit by hand.
// 301 map from the previous static site (vmls.edu.in/*.html) to this app.
// Regenerate:  node scripts/generate-redirects.mjs <live-urls.txt>
export type Redirect = { source: string; destination: string; permanent: boolean };

export const REDIRECTS: Redirect[] = ${JSON.stringify(
    deduped.map(({ source, destination, permanent }) => ({
      source,
      destination,
      permanent: permanent ?? true,
    })),
    null,
    2
  )};
`
);

const byReason = {};
for (const r of deduped) byReason[r.why] = (byReason[r.why] ?? 0) + 1;
console.log(`wrote ${OUT}: ${deduped.length} redirects\n`);
Object.entries(byReason).forEach(([w, n]) => console.log(`  ${String(n).padStart(4)}  ${w}`));
console.log(`\n  ${String(skipped.length).padStart(4)}  skipped (left alone)`);
if (unresolved.length) {
  console.log(`\nUNRESOLVED - no rule produced (${unresolved.length}):`);
  unresolved.forEach((u) => console.log("  " + u));
}
