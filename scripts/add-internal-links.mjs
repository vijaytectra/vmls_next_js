// Adds internal links to blog posts that have none, or almost none.
//
//   - 2-3 contextual links in the body, on phrases the post already uses,
//     pointing at the admissions / programme / scholarship pages
//   - a "Related reading" block at the foot linking topically close posts
//
// Safe to re-run: a target already linked from a post is never linked again,
// and the related block is replaced rather than appended twice.
//
//   node scripts/add-internal-links.mjs --dry     report only
//   node scripts/add-internal-links.mjs           write content.json
import fs from "node:fs";

const FILE = "src/data/blogs/content.json";
const DRY = process.argv.includes("--dry");
const MAX_INLINE = 3;
const RELATED_COUNT = 3;
const MARKER_START = "<!-- related-reading:start -->";
const MARKER_END = "<!-- related-reading:end -->";

// Blocked in robots.txt - never link to these.
const BLOCKED = new Set([
  "part-time-phd-in-law-and-interdisciplinary-studies",
  "full-time-phd-in-law-and-interdisciplinary-studies",
]);

/**
 * Phrases worth linking, in priority order. Each phrase is matched against
 * the text the post already contains - nothing is inserted or reworded.
 */
const TARGETS = [
  {
    href: "/admissions/process",
    patterns: [
      /\bVLAT\b/,
      /\bVinayaka Mission'?s Law Admission Test\b/i,
      /\badmission process\b/i,
    ],
  },
  {
    href: "/admissions/llm",
    patterns: [
      /\bLL\.?M\.? programme?\b/i,
      /\bMaster of Laws\b/i,
      /\bLL\.?M\.? course\b/i,
    ],
  },
  {
    href: "/admissions/llb",
    patterns: [
      /\b(?:five|5)[- ]year integrated (?:LL\.?B\.?|law) programme?\b/i,
      /\bintegrated LL\.?B\.?\b/i,
      /\b(?:three|3)[- ]year LL\.?B\.?\b/i,
      /\bB\.?A\.? LL\.?B\.?\b/,
      /\bLL\.?B\.? programme?\b/i,
    ],
  },
  {
    href: "/scholarships",
    patterns: [/\bscholarships?\b/i, /\bfinancial aid\b/i],
  },
];

// Grammar words only. Domain terms are NOT listed here: how much "llb" or
// "admission" should count is decided by how rare they are in this corpus
// (see the IDF weighting below), not by a hand-made list.
const STOP = new Set(
  ("the a an and or for of in to on with why what how is are be your you it its this that " +
    "at from as by vs after before more can should does do about into through their there here new " +
    "which when where who whom will would been being have has had not but than then them")
    .split(" ")
);

const posts = JSON.parse(fs.readFileSync(FILE, "utf8"));
const all = Object.values(posts);

const keywords = (post) =>
  new Set(
    `${post.title} ${post.category ?? ""}`
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, " ")
      .split(/\s+/)
      .filter((w) => w.length > 3 && !STOP.has(w))
  );

const keywordIndex = new Map(all.map((p) => [p.slug, keywords(p)]));

// Inverse document frequency over title terms: a word in most titles ("law")
// says almost nothing about relatedness, a rare one ("competition",
// "maritime") says a lot. This replaces guessing at a domain stop list.
const titleDf = new Map();
for (const words of keywordIndex.values())
  for (const w of words) titleDf.set(w, (titleDf.get(w) ?? 0) + 1);
const idf = (word) => Math.log(all.length / (titleDf.get(word) ?? 1));

/**
 * Distinctive body vocabulary per post, for niche articles whose titles share
 * nothing with anything else. Words common across the corpus ("students",
 * "course", "college") are dropped - they match everything and so mean
 * nothing, which is what made a SEBI piece look related to an LLB explainer.
 */
const bodyWords = (post) => {
  const counts = new Map();
  for (const word of String(post.html ?? "")
    .replace(/<[^>]*>/g, " ")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)) {
    if (word.length <= 4 || STOP.has(word)) continue;
    counts.set(word, (counts.get(word) ?? 0) + 1);
  }
  return counts;
};

const rawBodies = new Map(all.map((p) => [p.slug, bodyWords(p)]));
const documentFrequency = new Map();
for (const counts of rawBodies.values())
  for (const word of counts.keys())
    documentFrequency.set(word, (documentFrequency.get(word) ?? 0) + 1);

const COMMON_LIMIT = all.length * 0.25;
const bodyIndex = new Map(
  [...rawBodies.entries()].map(([slug, counts]) => [
    slug,
    new Set(
      [...counts.entries()]
        .filter(([w]) => documentFrequency.get(w) <= COMMON_LIMIT)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 15)
        .map(([w]) => w)
    ),
  ])
);

const internalLinksIn = (html) =>
  [...String(html).matchAll(/<a[^>]+href="([^"]+)"/g)]
    .map((m) => m[1])
    .filter((h) => h.startsWith("/") || h.includes("vmls.edu.in"));

/** Replace the first match inside text nodes only, never inside a tag. */
function linkFirstMatch(html, pattern, href) {
  const paragraphs = [...html.matchAll(/<p\b[^>]*>[\s\S]*?<\/p>/gi)];
  for (const para of paragraphs) {
    const block = para[0];
    if (/<a\b/i.test(block)) continue; // leave paragraphs that already link

    // Walk tags and text separately so a match can never land in an attribute.
    let cursor = 0;
    let replaced = null;
    const rebuilt = block.replace(/<[^>]+>|[^<]+/g, (chunk) => {
      if (replaced || chunk.startsWith("<")) return chunk;
      const m = chunk.match(pattern);
      if (!m) return chunk;
      replaced = m[0];
      return chunk.replace(
        pattern,
        `<a href="${href}">${m[0]}</a>`
      );
    });
    void cursor;
    if (replaced) {
      return { html: html.replace(block, rebuilt), anchor: replaced };
    }
  }
  return null;
}

/**
 * Three specialist pieces share no vocabulary with anything else in the
 * corpus, but a human can see what they belong with. Curated rather than
 * left unlinked or matched to something irrelevant.
 */
const CURATED_RELATED = {
  "black-carbon-and-the-law-response": [
    "climate-finance-development-in-india-cop29",
    "need-for-environmental-law-clinics-in-india",
  ],
  "ex-ante-regulation": [
    "merger-regulations-expansion-competition-developing-economies",
    "network-effects-competition-law-digital-markets",
    "decoding-competition-law-the-cle-approach",
  ],
  "sebi-tightens-rules-for-futures-options-trading": [
    "what-is-financial-law",
    "llm-in-corporate-financial-laws",
    "mediation-for-operational-creditors",
  ],
};

function relatedFor(post) {
  const curated = CURATED_RELATED[post.slug];
  if (curated) return curated.map((slug) => posts[slug]).filter(Boolean);

  const mine = keywordIndex.get(post.slug);
  const linked = new Set(internalLinksIn(post.html));
  const candidates = all
    .filter((p) => p.slug !== post.slug && !BLOCKED.has(p.slug))
    .filter((p) => !linked.has(`/blogs/${p.slug}`))
    .map((p) => {
      const theirs = keywordIndex.get(p.slug);
      let score = 0;
      for (const w of mine) if (theirs.has(w)) score += idf(w);
      // A shared category is a weaker signal than shared title terms, but it
      // is a real one - it keeps single-subject posts from being orphaned.
      if (post.category && p.category === post.category) score += 1.5;
      // Weakest signal, used only when nothing above fires: shared subject
      // vocabulary in the article bodies.
      const myBody = bodyIndex.get(post.slug);
      const theirBody = bodyIndex.get(p.slug);
      let bodyOverlap = 0;
      for (const w of myBody) if (theirBody.has(w)) bodyOverlap++;
      score += bodyOverlap * 0.25;
      return { post: p, score };
    })
    .sort((a, b) => b.score - a.score || a.post.slug.localeCompare(b.post.slug));

  // Prefer strong matches, accept moderate ones, and link nothing rather
  // than something unrelated: a "related" link to an unrelated article is
  // worse for a reader than no link, and dilutes the topic signal.
  const strong = candidates.filter((r) => r.score >= 2);
  const chosen = strong.length >= 2 ? strong : candidates.filter((r) => r.score >= 1);
  return chosen.slice(0, RELATED_COUNT).map((r) => r.post);
}

function relatedBlock(related) {
  const items = related
    .map(
      (p) =>
        `<li><a href="/blogs/${p.slug}">${p.title.replace(/&/g, "&amp;")}</a></li>`
    )
    .join("");
  return `${MARKER_START}<section class="blog-related"><h2>Related reading</h2><ul>${items}</ul></section>${MARKER_END}`;
}

/* ------------------------------------------------------------------ run */

const report = [];
let inlineTotal = 0;
let relatedTotal = 0;

for (const post of all) {
  const existing = internalLinksIn(post.html);
  if (existing.length > 2) continue; // already well connected

  let html = String(post.html ?? "");
  const already = new Set(existing);
  const added = [];

  for (const target of TARGETS) {
    if (added.length >= MAX_INLINE) break;
    if (already.has(target.href)) continue;
    for (const pattern of target.patterns) {
      const result = linkFirstMatch(html, pattern, target.href);
      if (result) {
        html = result.html;
        added.push(`${result.anchor} -> ${target.href}`);
        already.add(target.href);
        break;
      }
    }
  }

  const related = relatedFor({ ...post, html });
  html = html.replace(
    new RegExp(`${MARKER_START}[\\s\\S]*?${MARKER_END}`),
    ""
  );
  if (related.length) html += relatedBlock(related);

  inlineTotal += added.length;
  relatedTotal += related.length ? 1 : 0;
  report.push({
    slug: post.slug,
    before: existing.length,
    inline: added,
    related: related.map((p) => p.slug),
  });

  if (!DRY) posts[post.slug].html = html;
}

if (!DRY) {
  fs.writeFileSync(FILE, `${JSON.stringify(posts, null, 2)}\n`);
}

console.log(
  `${DRY ? "DRY RUN - " : ""}${report.length} posts touched, ` +
    `${inlineTotal} inline links, ${relatedTotal} related blocks\n`
);
for (const r of report) {
  console.log(`${r.slug}  (had ${r.before})`);
  r.inline.forEach((i) => console.log(`    inline: ${i}`));
  if (r.related.length) console.log(`    related: ${r.related.join(", ")}`);
}
