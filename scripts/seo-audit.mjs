// SEO validation pass. Fetches every URL from a running build and checks the
// rendered <head>, not the source. Usage:
//   npm run build && npm start &   then:  node scripts/seo-audit.mjs
import fs from "node:fs";

const BASE = process.env.SEO_AUDIT_BASE ?? "http://localhost:3000";
const SITE = "https://vmls.edu.in";
const GTM_ID = "GTM-TDRKCK4P";
const VERIFICATION = "fTOXULz5Ai5hqyJnmpmUmyTZx25xhWb37guU-iToiHU";

/* ---------------------------------------------------------------- routes */

const registry = fs.readFileSync("src/lib/seo-pages.ts", "utf8");
const registryBody = registry.slice(registry.indexOf("export const PAGES = {"));
const staticRoutes = [...registryBody.matchAll(/^  "(\/[^"]*)":\s*\{$/gm)].map(
  (m) => m[1]
);

const facultySrc = fs.readFileSync("src/app/faculty/[slug]/page.tsx", "utf8");
const facultySlugs = [...facultySrc.matchAll(/^    slug: "([^"]+)",$/gm)].map(
  (m) => m[1]
);

const blogSeo = fs.readFileSync("src/data/blog-seo.ts", "utf8");
const blogSlugs = [...blogSeo.matchAll(/^    "slug": "([^"]+)",$/gm)].map(
  (m) => m[1]
);

// Slugs the blog listing knows about, so links with no article body show up.
const blogPostsSrc = fs.readFileSync("src/data/blogs/posts.ts", "utf8");
const listedSlugs = [
  ...blogPostsSrc
    .slice(blogPostsSrc.indexOf("ALL_BLOG_SLUGS"))
    .matchAll(/"([a-z0-9-]+)"/g),
].map((m) => m[1]);

// Profile routes added by the origin/main merge. Only advisors and members
// with a written profile render a page; the rest are noindex placeholders.
const advisorSrc = fs.readFileSync("src/data/boardOfAdvisors.ts", "utf8");
const advisorSlugs = [...advisorSrc.matchAll(/slug: "([^"]+)",\n\s+name:/g)]
  .map((m) => m[1])
  .filter((slug) => {
    const block = advisorSrc.slice(advisorSrc.indexOf(`slug: "${slug}"`));
    const paragraphs = block.match(/paragraphs: \[([\s\S]*?)\n {2}\]/);
    return paragraphs ? paragraphs[1].trim().length > 0 : false;
  });

const mentorSrc = fs.readFileSync("src/data/mentoringCommittee.ts", "utf8");
const mentorSlugs = [...mentorSrc.matchAll(/slug: '([^']+)',/g)].map((m) => m[1]);

const urls = [
  ...staticRoutes,
  ...facultySlugs.map((s) => `/faculty/${s}`),
  ...blogSlugs.map((s) => `/blogs/${s}`),
  ...advisorSlugs.map((s) => `/board-of-advisors/${s}`),
  ...mentorSlugs.map((s) => `/mentoring-committee/${s}`),
];

/* ---------------------------------------------------------------- parsing */

const meta = (html, name) => {
  const re = new RegExp(
    `<meta[^>]+name="${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"[^>]*>`,
    "gi"
  );
  return [...html.matchAll(re)].map(
    (m) => (m[0].match(/content="([^"]*)"/) || [])[1] ?? ""
  );
};
const prop = (html, p) => {
  const re = new RegExp(`<meta[^>]+property="${p}"[^>]*>`, "gi");
  return [...html.matchAll(re)].map(
    (m) => (m[0].match(/content="([^"]*)"/) || [])[1] ?? ""
  );
};
const canonicalOf = (html) =>
  (html.match(/<link[^>]+rel="canonical"[^>]+href="([^"]*)"/i) || [])[1];
const titleOf = (html) =>
  (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1]?.trim();
const jsonLdOf = (html) =>
  [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((m) => {
      try {
        return JSON.parse(m[1]);
      } catch {
        return { "@type": "UNPARSEABLE" };
      }
    })
    .flat();
const visibleText = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]*>/g, " ")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/\s+/g, " ");

const decodeEntities = (s = "") =>
  s
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#x2013;|&ndash;/g, "–");

/* ------------------------------------------------- expected schema by type */

const pageTypes = {};
{
  const keys = [...registryBody.matchAll(/^  "(\/[^"]*)":\s*\{$/gm)];
  keys.forEach((k, i) => {
    const block = registryBody.slice(
      k.index,
      i + 1 < keys.length ? keys[i + 1].index : registryBody.length
    );
    pageTypes[k[1]] = (block.match(/pageType: "([^"]+)"/) || [])[1];
    if (/ogType: "article"/.test(block)) pageTypes[k[1]] += "+article";
  });
}

function pageTypeOf(route) {
  if (route.startsWith("/faculty/")) return "faculty-profile";
  if (route.startsWith("/board-of-advisors/")) return "person-profile";
  if (route.startsWith("/mentoring-committee/")) return "person-profile";
  if (route.startsWith("/blogs/")) return "blog-post";
  return pageTypes[route] ?? "unknown";
}

/** The schema types a page of this kind must carry, per the mapping table. */
function expectedTypes(route) {
  const type = pageTypeOf(route);
  if (type === "faculty-profile" || type === "person-profile") return ["Person"];
  if (type === "blog-post") return ["BlogPosting"];
  const base = type.replace("+article", "");
  const extra = type.endsWith("+article")
    ? [base === "news" ? "NewsArticle" : "BlogPosting"]
    : [];
  // Page-level entities. Some types differ by route within the same page
  // type, so those are resolved by path first.
  const byPath = {
    "/library": ["Library"],
    "/library-membership": ["WebPage"],
    "/library-rules": ["WebPage"],
    "/library-useful-links": ["WebPage"],
    "/infrastructure": ["CollectionPage"],
    "/campus-life": ["WebPage"],
    "/international-conference-on-rivers": ["Event"],
    "/iqac/workshops": ["CollectionPage"],
  };
  if (byPath[route]) return [...byPath[route], ...extra];

  const map = {
    homepage: ["CollegeOrUniversity"],
    programme: ["Course"],
    centre: ["EducationalOrganization"],
    person: ["Person"],
    contact: ["ContactPage"],
    about: ["AboutPage"],
    "faculty-index": ["CollectionPage"],
    governance: ["CollectionPage"],
    "news-index": ["CollectionPage"],
    "blog-index": ["Blog"],
    committee: ["Organization"],
    campus: ["Place"],
    admissions: ["WebPage"],
    "student-life": ["WebPage"],
    legal: ["WebPage"],
    tool: ["WebPage"],
  };
  return [...(map[base] ?? []), ...extra];
}

/* ---------------------------------------------------------------- checks */

const findings = { errors: [], warnings: [], info: [] };
const err = (m) => findings.errors.push(m);
const warn = (m) => findings.warnings.push(m);
const info = (m) => findings.info.push(m);

const pages = [];

for (const route of urls) {
  const res = await fetch(BASE + route, { redirect: "manual" });
  if (res.status >= 300 && res.status < 400) {
    info(`${route} -> HTTP ${res.status} redirect, skipped`);
    continue;
  }
  if (!res.ok) {
    err(`${route} -> HTTP ${res.status}`);
    continue;
  }
  const html = await res.text();
  const expected = route === "/" ? SITE : SITE + route;

  const page = {
    route,
    expected,
    title: decodeEntities(titleOf(html)),
    description: decodeEntities(meta(html, "description")[0] ?? ""),
    canonical: canonicalOf(html),
    ogUrl: prop(html, "og:url")[0],
    ogTitle: decodeEntities(prop(html, "og:title")[0] ?? ""),
    ogDescription: decodeEntities(prop(html, "og:description")[0] ?? ""),
    ogImage: decodeEntities(prop(html, "og:image")[0] ?? ""),
    dcIdentifier: meta(html, "DC.identifier")[0],
    keywords: meta(html, "keywords"),
    verification: meta(html, "google-site-verification"),
    robots: meta(html, "robots")[0] ?? "",
    geo: meta(html, "geo.region").length > 0,
    gtm: [...html.matchAll(/GTM-[A-Z0-9]+/g)].map((m) => m[0]),
    noscriptGtm: /googletagmanager\.com\/ns\.html\?id=GTM-/.test(html),
    schemas: jsonLdOf(html),
    text: visibleText(html),
  };
  pages.push(page);

  const noindex = /noindex/.test(page.robots);

  // 3 / 4 / 7 - URL fields must describe this page.
  if (page.canonical !== expected)
    err(`${route}: canonical is ${page.canonical ?? "MISSING"}, expected ${expected}`);
  if (page.ogUrl !== expected)
    err(`${route}: og:url is ${page.ogUrl ?? "MISSING"}, expected ${expected}`);
  if (page.dcIdentifier !== expected)
    err(`${route}: DC.identifier is ${page.dcIdentifier ?? "MISSING"}, expected ${expected}`);

  // 8 - keywords must not exist anywhere.
  if (page.keywords.length) err(`${route}: meta keywords present (${page.keywords[0]})`);

  // 10 - one verification tag, one GTM container, noscript present.
  if (page.verification.length !== 1)
    err(`${route}: ${page.verification.length} google-site-verification tags`);
  else if (page.verification[0] !== VERIFICATION)
    err(`${route}: verification code differs from the homepage reference`);
  const gtmIds = [...new Set(page.gtm)];
  if (gtmIds.length !== 1 || gtmIds[0] !== GTM_ID)
    err(`${route}: GTM ids ${JSON.stringify(gtmIds)}, expected ["${GTM_ID}"]`);
  if (!page.noscriptGtm) err(`${route}: GTM noscript iframe missing`);

  // 1 / 2 - length budgets.
  if (!noindex) {
    if (page.title.length > 60)
      warn(`${route}: title ${page.title.length} chars (>60): "${page.title}"`);
    if (page.description.length < 150 || page.description.length > 160)
      warn(`${route}: description ${page.description.length} chars (want 150-160)`);
    if (!page.ogImage) warn(`${route}: no og:image`);
  }

  // 5 - og fields should be tuned, not identical by default.
  if (!noindex && page.ogTitle === page.title && page.ogDescription === page.description)
    info(`${route}: og:title and og:description identical to title/description`);

  // Schema placement.
  const types = page.schemas.map((s) => s?.["@type"]).filter(Boolean);
  const wantTypes = expectedTypes(route);
  for (const t of wantTypes) {
    if (!types.includes(t))
      err(`${route}: expected ${t} schema, found [${types.join(", ")}]`);
  }
  const allowed = new Set([...wantTypes, "BreadcrumbList", "FAQPage"]);
  for (const t of types) {
    if (!allowed.has(t))
      err(`${route}: unexpected ${t} schema for a ${pageTypeOf(route)} page`);
  }
  if (route !== "/" && types.includes("CollegeOrUniversity"))
    err(`${route}: full CollegeOrUniversity block outside the homepage`);
  if (types.includes("WebSite"))
    err(`${route}: WebSite schema present but the site has no internal search`);

  // FAQ schema must match visible content.
  for (const s of page.schemas) {
    if (s?.["@type"] !== "FAQPage") continue;
    const questions = (s.mainEntity ?? []).map((q) => q.name);
    const missing = questions.filter(
      (q) => !page.text.includes(q.slice(0, 40))
    );
    if (missing.length)
      err(`${route}: FAQPage has ${missing.length} question(s) not visible on the page`);
    else info(`${route}: FAQPage verified - all ${questions.length} Q&As visible in HTML`);
  }

  // Breadcrumb entries must resolve.
  for (const s of page.schemas) {
    if (s?.["@type"] !== "BreadcrumbList") continue;
    for (const item of s.itemListElement ?? []) {
      if (!item.item) continue;
      const p = item.item.replace(SITE, "") || "/";
      const known =
        p === "/" || staticRoutes.includes(p) || urls.includes(p);
      if (!known) err(`${route}: breadcrumb points at unknown URL ${item.item}`);
    }
  }
}

/* --------------------------------------------- cross-page duplicate checks */

const indexable = pages.filter((p) => !/noindex/.test(p.robots));
const group = (key) => {
  const map = new Map();
  for (const p of indexable) {
    const v = p[key];
    if (!v) continue;
    map.set(v, [...(map.get(v) ?? []), p.route]);
  }
  return [...map.entries()].filter(([, routes]) => routes.length > 1);
};
for (const [value, routes] of group("title"))
  err(`duplicate <title> "${value}" on: ${routes.join(", ")}`);
for (const [value, routes] of group("description"))
  err(`duplicate meta description on: ${routes.join(", ")}\n    "${value}"`);
for (const [value, routes] of group("canonical"))
  err(`duplicate canonical ${value} on: ${routes.join(", ")}`);

// Every og:image must actually resolve.
const ogImages = [...new Set(pages.map((p) => p.ogImage).filter(Boolean))];
for (const img of ogImages) {
  const local = img.replace(SITE, "");
  const res = await fetch(BASE + local, { method: "HEAD" });
  if (!res.ok) {
    const routes = pages.filter((p) => p.ogImage === img).map((p) => p.route);
    err(`og:image ${local} -> HTTP ${res.status} (used on ${routes.join(", ")})`);
  }
}
info(`${ogImages.length} distinct og:image files referenced, all fetched`);

const orphans = listedSlugs.filter((s) => !blogSlugs.includes(s));
if (orphans.length)
  warn(
    `blog index links ${orphans.length} slug(s) with no article body: ${orphans.join(", ")}`
  );

/* ---------------------------------------------------------------- report */

const geoPages = pages.filter((p) => p.geo).map((p) => p.route);
console.log(`\nAudited ${pages.length} URLs at ${BASE}\n`);
console.log(`geo.* tags on ${geoPages.length} campus pages: ${geoPages.join(", ")}\n`);

const section = (name, items) => {
  console.log(`${name} (${items.length})`);
  for (const i of items) console.log(`  - ${i}`);
  console.log();
};
section("ERRORS", findings.errors);
section("WARNINGS", findings.warnings);
section("NOTES", findings.info);

process.exit(findings.errors.length ? 1 : 0);
