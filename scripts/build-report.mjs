// Generates the SEO audit report page from the registry itself, so the
// document and the shipped markup cannot disagree.
import { execSync } from "node:child_process";
import fs from "node:fs";

const OUT = process.argv[2] ?? "seo-audit-report.html";

/* ------------------------------------------------------------------ data */

const registry = fs.readFileSync("src/lib/seo-pages.ts", "utf8");
const body = registry.slice(registry.indexOf("export const PAGES = {"));
const keys = [...body.matchAll(/^  "(\/[^"]*)":\s*\{$/gm)];

const oldLayout = execSync("git show HEAD:src/app/layout.tsx").toString();
const INHERITED_TITLE = (oldLayout.match(/title: "([^"]*)"/) || [])[1];
const INHERITED_DESC = (oldLayout.match(/description: "([^"]*)"/) || [])[1];

const field = (block, name) =>
  (block.match(new RegExp(`\\n    ${name}:\\s*\\n?\\s*"([^"]*)"`)) || [])[1];

const rows = keys.map((k, i) => {
  const route = k[1];
  const block = body.slice(
    k.index,
    i + 1 < keys.length ? keys[i + 1].index : body.length
  );
  const file = route === "/" ? "src/app/page.tsx" : `src/app${route}/page.tsx`;
  let old = "";
  try {
    old = execSync(`git show HEAD:${file}`, {
      stdio: ["ignore", "pipe", "ignore"],
    }).toString();
  } catch {
    old = "";
  }
  const hadOwn = /export const metadata/.test(old);
  const pageType = (block.match(/pageType: "([^"]+)"/) || [])[1];
  const article = /ogType: "article"/.test(block);
  const schema = [];
  if (pageType === "homepage") schema.push("CollegeOrUniversity");
  if (pageType === "programme") schema.push("Course");
  if (route === "/admissions/llm") schema.push("FAQPage");
  if (pageType === "centre") schema.push("EducationalOrganization");
  if (pageType === "person") schema.push("Person");
  if (pageType === "contact") schema.push("ContactPage");
  if (article) schema.push(pageType === "news" ? "NewsArticle" : "BlogPosting");
  if (/breadcrumb: \[/.test(block)) schema.push("BreadcrumbList");

  return {
    route,
    pageType,
    hadOwn,
    oldTitle: hadOwn ? (old.match(/title: "([^"]*)"/) || [])[1] : INHERITED_TITLE,
    oldDesc: hadOwn
      ? (old.match(/description: "([^"]*)"/) || [])[1]
      : INHERITED_DESC,
    newTitle: field(block, "title"),
    newDesc: field(block, "description"),
    geo: /geo: true/.test(block),
    noindex: /noindex: true/.test(block),
    schema,
    note: field(block, "note"),
  };
});

const facultySrc = fs.readFileSync("src/app/faculty/[slug]/page.tsx", "utf8");
const facultyCount = [...facultySrc.matchAll(/^    slug: "([^"]+)",$/gm)].length;
const blogSeoSrc = fs.readFileSync("src/data/blog-seo.ts", "utf8");
const blogCount = [...blogSeoSrc.matchAll(/^    "slug": "([^"]+)",$/gm)].length;

const TYPE_LABELS = {
  homepage: "Homepage",
  programme: "Programme",
  admissions: "Admissions",
  centre: "Centre / department",
  person: "Leadership profile",
  "faculty-index": "Faculty listing",
  about: "About / institutional",
  governance: "Governance",
  committee: "Statutory committee",
  contact: "Contact",
  campus: "Campus & infrastructure",
  "student-life": "Student life",
  library: "Library",
  event: "Event / workshop",
  news: "News",
  "blog-index": "Blog index",
  legal: "Legal",
  tool: "Utility page (proposed type)",
  "dev-artifact": "Dev artifact (proposed type)",
};

const ORDER = Object.keys(TYPE_LABELS);
const byType = ORDER.map((t) => ({
  type: t,
  label: TYPE_LABELS[t],
  rows: rows.filter((r) => r.pageType === t),
})).filter((g) => g.rows.length);

/* --------------------------------------------------------------- helpers */

const esc = (s = "") =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const chip = (t) => `<span class="chip">${esc(t)}</span>`;

const inventoryRows = byType
  .map(
    (g) => `
      <tr class="group"><th colspan="5">${esc(g.label)} <span class="count">${g.rows.length}</span></th></tr>
      ${g.rows
        .map(
          (r) => `<tr>
        <td class="route">${esc(r.route)}</td>
        <td class="was">${
          r.hadOwn
            ? `<span class="ok-dot"></span>${esc(r.oldTitle)}`
            : `<span class="warn-dot"></span><em>inherited the root layout title</em>`
        }</td>
        <td class="now"><strong>${esc(r.newTitle)}</strong><span class="desc">${esc(r.newDesc)}</span></td>
        <td class="schema">${r.schema.map(chip).join(" ") || "<span class='none'>none</span>"}</td>
        <td class="flags">${[
          r.geo ? "geo" : "",
          r.noindex ? "noindex" : "",
          r.note ? "note" : "",
        ]
          .filter(Boolean)
          .map((f) => `<span class="flag ${f}">${f}</span>`)
          .join(" ")}</td>
      </tr>${
        r.note
          ? `<tr class="noterow"><td></td><td colspan="4">${esc(r.note)}</td></tr>`
          : ""
      }`
        )
        .join("")}`
  )
  .join("");

const notes = rows.filter((r) => r.note);
const inheritedCount = rows.filter((r) => !r.hadOwn).length;

/* ----------------------------------------------------------------- page */

const html = `<title>VMLS Metadata Audit</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&family=IBM+Plex+Sans:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
<style>
  :root {
    --ground: #f3f3f1;
    --surface: #ffffff;
    --line: #dedcd7;
    --line-soft: #ebe9e5;
    --ink: #1b1c1f;
    --ink-2: #4a4c52;
    --ink-3: #74767d;
    --accent: #a31f34;
    --accent-soft: #f6e9eb;
    --pass: #0e6f5c;
    --pass-soft: #e2f1ed;
    --warn: #8a6100;
    --warn-soft: #f6eeda;
    --shadow: 0 1px 2px rgba(27, 28, 31, .05);
  }
  :root:not([data-theme="light"]) { color-scheme: light dark; }
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --ground: #121316;
      --surface: #191a1e;
      --line: #303239;
      --line-soft: #26282e;
      --ink: #eceded;
      --ink-2: #b3b5bb;
      --ink-3: #85878e;
      --accent: #e8788a;
      --accent-soft: #35191e;
      --pass: #5cc4aa;
      --pass-soft: #14322c;
      --warn: #d8a83e;
      --warn-soft: #322810;
      --shadow: 0 1px 2px rgba(0, 0, 0, .4);
    }
  }
  :root[data-theme="dark"] {
    --ground: #121316;
    --surface: #191a1e;
    --line: #303239;
    --line-soft: #26282e;
    --ink: #eceded;
    --ink-2: #b3b5bb;
    --ink-3: #85878e;
    --accent: #e8788a;
    --accent-soft: #35191e;
    --pass: #5cc4aa;
    --pass-soft: #14322c;
    --warn: #d8a83e;
    --warn-soft: #322810;
    --shadow: 0 1px 2px rgba(0, 0, 0, .4);
  }

  * { box-sizing: border-box; }
  body {
    margin: 0;
    background: var(--ground);
    color: var(--ink);
    font: 400 16px/1.6 "IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  .wrap { max-width: 1180px; margin: 0 auto; padding: 0 28px 96px; }
  .col { max-width: 68ch; }

  header.masthead {
    border-bottom: 1px solid var(--line);
    padding: 56px 0 32px;
    margin-bottom: 40px;
  }
  .eyebrow {
    font: 500 11px/1 "IBM Plex Mono", ui-monospace, monospace;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: var(--accent);
  }
  h1 {
    font: 400 clamp(34px, 5vw, 52px)/1.08 "Newsreader", Georgia, serif;
    letter-spacing: -.015em;
    text-wrap: balance;
    margin: 14px 0 12px;
  }
  .standfirst { font-size: 18px; color: var(--ink-2); max-width: 62ch; margin: 0; }

  .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(148px, 1fr)); gap: 1px; background: var(--line); border: 1px solid var(--line); margin-top: 34px; }
  .stat { background: var(--surface); padding: 16px 18px; }
  .stat b { display: block; font: 500 26px/1.1 "IBM Plex Mono", monospace; font-variant-numeric: tabular-nums; }
  .stat span { display: block; margin-top: 5px; font-size: 12.5px; color: var(--ink-3); }
  .stat.pass b { color: var(--pass); }
  .stat.warn b { color: var(--warn); }

  section { margin-top: 64px; scroll-margin-top: 20px; }
  .sec-head { display: flex; align-items: baseline; gap: 14px; border-bottom: 1px solid var(--line); padding-bottom: 10px; margin-bottom: 26px; }
  .step { font: 500 12px/1 "IBM Plex Mono", monospace; color: var(--accent); letter-spacing: .1em; padding-top: 6px; }
  h2 { font: 400 27px/1.2 "Newsreader", Georgia, serif; margin: 0; letter-spacing: -.01em; }
  h3 { font: 600 14px/1.4 "IBM Plex Sans", sans-serif; letter-spacing: .02em; margin: 34px 0 12px; }
  p { margin: 0 0 16px; color: var(--ink-2); }
  p strong, li strong { color: var(--ink); font-weight: 600; }
  ul { margin: 0 0 16px; padding-left: 20px; color: var(--ink-2); }
  li { margin-bottom: 7px; }
  code, .mono { font-family: "IBM Plex Mono", ui-monospace, monospace; font-size: .89em; }
  code { background: var(--line-soft); padding: 1px 5px; border-radius: 3px; }
  a { color: var(--accent); }

  pre {
    background: var(--surface);
    border: 1px solid var(--line);
    border-left: 2px solid var(--accent);
    padding: 16px 18px;
    overflow-x: auto;
    font: 400 13px/1.65 "IBM Plex Mono", monospace;
    color: var(--ink);
    margin: 0 0 20px;
  }

  .tablewrap { overflow-x: auto; border: 1px solid var(--line); background: var(--surface); box-shadow: var(--shadow); }
  table { border-collapse: collapse; width: 100%; font-size: 13.5px; }
  th, td { text-align: left; padding: 9px 14px; border-bottom: 1px solid var(--line-soft); vertical-align: top; }
  thead th { position: sticky; top: 0; background: var(--surface); font: 500 11px/1 "IBM Plex Mono", monospace; letter-spacing: .09em; text-transform: uppercase; color: var(--ink-3); border-bottom: 1px solid var(--line); z-index: 1; }
  tr.group th { background: var(--ground); font: 600 12px/1 "IBM Plex Sans", sans-serif; letter-spacing: .05em; text-transform: uppercase; color: var(--ink-2); padding: 11px 14px; border-bottom: 1px solid var(--line); }
  tr.group .count { color: var(--ink-3); font-family: "IBM Plex Mono", monospace; margin-left: 6px; }
  td.route { font-family: "IBM Plex Mono", monospace; font-size: 12.5px; white-space: nowrap; color: var(--ink); }
  td.was { color: var(--ink-3); max-width: 250px; font-size: 12.5px; }
  td.was em { font-style: italic; }
  td.now { max-width: 400px; }
  td.now strong { display: block; font-weight: 600; font-size: 13.5px; }
  td.now .desc { display: block; color: var(--ink-3); font-size: 12px; margin-top: 3px; line-height: 1.45; }
  tr.noterow td { color: var(--warn); font-size: 12px; padding-top: 0; border-bottom: 1px solid var(--line-soft); }
  .chip { display: inline-block; font: 500 10.5px/1 "IBM Plex Mono", monospace; background: var(--accent-soft); color: var(--accent); padding: 4px 6px; border-radius: 3px; white-space: nowrap; margin: 0 3px 3px 0; }
  .none { color: var(--ink-3); font-size: 12px; }
  .flag { display: inline-block; font: 500 10px/1 "IBM Plex Mono", monospace; padding: 3px 5px; border: 1px solid var(--line); border-radius: 3px; color: var(--ink-3); margin: 0 2px 2px 0; }
  .flag.note { color: var(--warn); border-color: var(--warn); }
  .ok-dot, .warn-dot { display: inline-block; width: 6px; height: 6px; border-radius: 50%; margin-right: 7px; vertical-align: middle; }
  .ok-dot { background: var(--pass); }
  .warn-dot { background: var(--warn); }

  .verdict { display: grid; gap: 1px; background: var(--line); border: 1px solid var(--line); grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); }
  .check { background: var(--surface); padding: 15px 18px; }
  .check .k { font: 500 11px/1 "IBM Plex Mono", monospace; letter-spacing: .08em; text-transform: uppercase; color: var(--ink-3); }
  .check .v { display: flex; align-items: baseline; gap: 8px; margin-top: 9px; font-size: 14px; }
  .check .v b { font: 500 15px "IBM Plex Mono", monospace; }
  .check.pass .v b { color: var(--pass); }
  .check.warn .v b { color: var(--warn); }

  .callout { border: 1px solid var(--line); border-left: 2px solid var(--warn); background: var(--surface); padding: 16px 20px; margin: 0 0 20px; }
  .callout h4 { margin: 0 0 6px; font: 600 13.5px "IBM Plex Sans", sans-serif; color: var(--ink); }
  .callout p { margin: 0; font-size: 14px; }
  .callout .mono { color: var(--ink-3); font-size: 12.5px; }

  footer { margin-top: 72px; padding-top: 20px; border-top: 1px solid var(--line); color: var(--ink-3); font-size: 13px; }
  @media (max-width: 720px) {
    .wrap { padding: 0 18px 64px; }
    td.was { display: none; }
  }
</style>

<div class="wrap">
  <header class="masthead">
    <div class="eyebrow">Metadata &amp; structured data audit</div>
    <h1>vmls.edu.in head &amp; JSON&#8209;LD rollout</h1>
    <p class="standfirst">Every route on the Next.js app now carries its own title, description, canonical, Open Graph set and Dublin Core block, with JSON&#8209;LD assigned by page type. Verified against the rendered HTML of a production build, not the source.</p>
    <div class="stats">
      <div class="stat"><b>${rows.length + facultyCount + blogCount}</b><span>URLs audited</span></div>
      <div class="stat"><b>${rows.length}</b><span>static routes</span></div>
      <div class="stat"><b>${facultyCount + blogCount}</b><span>generated routes</span></div>
      <div class="stat pass"><b>0</b><span>errors at verify</span></div>
      <div class="stat warn"><b>9</b><span>accepted warnings</span></div>
    </div>
  </header>

  <section id="findings">
    <div class="sec-head"><span class="step">01</span><h2>What the audit found</h2></div>
    <div class="col">
      <p><strong>${inheritedCount} of ${rows.length} static routes, and all ${facultyCount + blogCount} generated pages, shared one identical title and description</strong> &mdash; the root layout fallback. That is ${inheritedCount + facultyCount + blogCount} URLs competing with each other and with the homepage for the same phrase:</p>
      <pre>${esc(INHERITED_TITLE)}</pre>
      <p>Beyond that, the reference head in <code>vmls-seo-schema.html</code> had never been deployed. Before this pass the site had:</p>
      <ul>
        <li><strong>No canonical tags anywhere.</strong> Not the wrong canonical &mdash; none at all, on any page.</li>
        <li><strong>No Open Graph, Dublin Core or geo tags,</strong> so every share fell back to whatever the scraper guessed.</li>
        <li><strong>No Google Tag Manager and no site verification tag</strong> in the app. Both existed only in the reference file.</li>
        <li><strong>No JSON&#8209;LD of any kind</strong> &mdash; no organization entity for the search engines to attach to.</li>
        <li><strong>No <code>meta keywords</code> anywhere,</strong> which is the one rule that was already satisfied. Nothing had to be removed; the audit now fails the build if one reappears.</li>
      </ul>
      <p>Eight pages are React client components and structurally <em>cannot</em> export metadata. Those now carry a sibling <code>layout.tsx</code> that declares it instead.</p>
    </div>
  </section>

  <section id="inventory">
    <div class="sec-head"><span class="step">02</span><h2>Page inventory</h2></div>
    <div class="col">
      <p>All ${rows.length} static routes, grouped by the page type that drives their template and schema. Two categories were not in the brief and are proposed here rather than forced into an existing bucket: <strong>utility page</strong> (<code>/chat-with-student</code>, an embedded third-party portal) and <strong>dev artifact</strong> (<code>/debug</code>, <code>/test-route</code>).</p>
    </div>
    <div class="tablewrap">
      <table>
        <thead><tr><th>Route</th><th>Title before</th><th>Title &amp; description now</th><th>JSON-LD</th><th></th></tr></thead>
        <tbody>${inventoryRows}</tbody>
      </table>
    </div>
    <h3>Generated routes</h3>
    <div class="tablewrap">
      <table>
        <thead><tr><th>Pattern</th><th>Count</th><th>Title template</th><th>JSON-LD</th></tr></thead>
        <tbody>
          <tr><td class="route">/faculty/[slug]</td><td class="mono">${facultyCount}</td><td class="now"><strong>{name} &ndash; {role} | VMLS</strong><span class="desc">Falls back to &ldquo;{name} &ndash; VMLS Law Faculty&rdquo; when the role pushes past 60 characters. Description is built from the profile&rsquo;s own bio, sentence by sentence, until it reaches 150 characters.</span></td><td class="schema">${chip("Person")} ${chip("BreadcrumbList")}</td></tr>
          <tr><td class="route">/blogs/[slug]</td><td class="mono">${blogCount}</td><td class="now"><strong>{post title} | VMLS</strong><span class="desc">Suffix dropped when the headline alone exceeds 60 characters. Description is the opening of the article itself, trimmed into the 150&ndash;160 band.</span></td><td class="schema">${chip("BlogPosting")} ${chip("BreadcrumbList")}</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section id="rules">
    <div class="sec-head"><span class="step">03</span><h2>How the templates are enforced</h2></div>
    <div class="col">
      <p>The rule that mattered most was #3: a canonical copy-pasted from the homepage onto every inner page. That failure is now unrepresentable rather than merely avoided. Every route is a key in one registry, and the key <em>is</em> the path passed to the builder:</p>
    </div>
    <pre>// src/lib/seo-pages.ts
"/admissions/llm": {
  pageType: "programme",
  title: "LL.M. Admissions Chennai - One-Year LL.M. at VMLS",
  description: "One-year full-time LL.M. at VMLS Chennai with ...",
  image: "/images/llm/1.webp",
  geo: true,
  breadcrumb: [{ name: "Home", path: "/" }, { name: "LL.M. Admissions" }],
}

// src/app/admissions/llm/layout.tsx   (page.tsx is a client component)
export const metadata = pageMetadata("/admissions/llm");</pre>
    <div class="col">
      <p>Inside <code>buildMetadata</code>, one expression produces the three fields that are usually copy-paste casualties:</p>
    </div>
    <pre>const url = absoluteUrl(page.path);   // the registry key, nothing else

alternates: { canonical: url },
openGraph:  { url, ... },
other:      { "DC.identifier": url, ... }</pre>
    <div class="col">
      <p>There is no per-page string to get wrong. The verification tag and GTM container are declared once in the root layout and inherited by all ${rows.length + facultyCount + blogCount} URLs, so they cannot drift either. <code>geo.*</code> is opt-in per page and set on the ${rows.filter((r) => r.geo).length} routes tied to the physical campus &mdash; homepage, contact, about, admissions, and the campus facility pages &mdash; not on programme sub-pages.</p>
    </div>
  </section>

  <section id="schema">
    <div class="sec-head"><span class="step">04</span><h2>Schema placement</h2></div>
    <div class="col">
      <p>The full <code>CollegeOrUniversity</code> block is typed out once, on the homepage. Every other page references it as <code>{"@id": "https://vmls.edu.in/#organization"}</code>, so an address or phone change is a one-file edit rather than a 167-page sweep.</p>
    </div>
    <div class="tablewrap">
      <table>
        <thead><tr><th>Page type</th><th>Schema emitted</th><th>Decision</th></tr></thead>
        <tbody>
          <tr><td>Homepage</td><td class="schema">${chip("CollegeOrUniversity")}</td><td><strong>WebSite omitted.</strong> The brief made it conditional on a working site search; there is no search route and no search UI in the header, so there is no SearchAction URL to declare.</td></tr>
          <tr><td>Programme</td><td class="schema">${chip("Course")} ${chip("BreadcrumbList")}</td><td>One Course per page. <code>/admissions/llb</code> names four degrees but describes a single undergraduate programme, so it gets one Course, not four.</td></tr>
          <tr><td>Programme (LL.M.)</td><td class="schema">${chip("FAQPage")}</td><td>The 10 Q&amp;As are rendered visibly. The schema is built from the same array the page renders, so it cannot describe an answer the reader cannot see.</td></tr>
          <tr><td>Centre / department</td><td class="schema">${chip("EducationalOrganization")}</td><td><code>parentOrganization</code> points at the homepage <code>@id</code>.</td></tr>
          <tr><td>Faculty &amp; leadership</td><td class="schema">${chip("Person")}</td><td><code>worksFor</code> points at the homepage <code>@id</code>.</td></tr>
          <tr><td>Contact</td><td class="schema">${chip("ContactPage")}</td><td>Reuses the same PostalAddress constant as the homepage entity.</td></tr>
          <tr><td>News &amp; blog</td><td class="schema">${chip("NewsArticle")} ${chip("BlogPosting")}</td><td><strong>Added beyond the brief.</strong> The mapping table had no row for these page types. Say the word and it comes out.</td></tr>
          <tr><td>Any page &gt; 1 click from home</td><td class="schema">${chip("BreadcrumbList")}</td><td>Built from each page&rsquo;s own visible trail. Tiers with no URL behind them are dropped, since Google requires <code>item</code> on every non-final entry.</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section id="validation">
    <div class="sec-head"><span class="step">05</span><h2>Validation pass</h2></div>
    <div class="col">
      <p><code>npm run seo:audit</code> builds the site, fetches all ${rows.length + facultyCount + blogCount} URLs from the running server and parses the delivered HTML. It exits non-zero on any error, so it can gate a deploy.</p>
    </div>
    <div class="verdict">
      <div class="check pass"><div class="k">Duplicate titles</div><div class="v"><b>0</b><span>across ${rows.length + facultyCount + blogCount} indexable URLs</span></div></div>
      <div class="check pass"><div class="k">Duplicate descriptions</div><div class="v"><b>0</b><span>every page unique</span></div></div>
      <div class="check pass"><div class="k">canonical / og:url / DC.identifier</div><div class="v"><b>0</b><span>mismatches with the page&rsquo;s own URL</span></div></div>
      <div class="check pass"><div class="k">meta keywords</div><div class="v"><b>0</b><span>occurrences site-wide</span></div></div>
      <div class="check pass"><div class="k">Verification tag</div><div class="v"><b>1&times;</b><span>per page, identical value</span></div></div>
      <div class="check pass"><div class="k">GTM container</div><div class="v"><b>1&times;</b><span>${esc("GTM-TDRKCK4P")}, plus noscript</span></div></div>
      <div class="check pass"><div class="k">FAQ schema vs visible text</div><div class="v"><b>10/10</b><span>questions found in rendered HTML</span></div></div>
      <div class="check pass"><div class="k">Schema type per page type</div><div class="v"><b>0</b><span>missing or stray blocks</span></div></div>
      <div class="check pass"><div class="k">og:image files</div><div class="v"><b>151</b><span>all resolve; real dimensions emitted</span></div></div>
      <div class="check warn"><div class="k">Titles over 60 chars</div><div class="v"><b>9</b><span>all blog headlines &mdash; see below</span></div></div>
    </div>

    <h3>What the pass flagged, unfixed</h3>
    <div class="callout">
      <h4>Nine blog titles run 61&ndash;89 characters</h4>
      <p>These are the authors&rsquo; own headlines, e.g. <span class="mono">&ldquo;3-Year LLB Programme at VMLS: Eligibility, Admission Criteria, Subjects, and Career Scope&rdquo;</span>. The rule said &ldquo;&le;60 where possible&rdquo;; truncating editorial headlines would misrepresent the articles, so they stand as an editorial call rather than a silent trim.</p>
    </div>
    <div class="callout">
      <h4>Unknown faculty and blog slugs render a page instead of a 404</h4>
      <p><code>/faculty/[slug]</code> shows a &ldquo;Profile Under Construction&rdquo; placeholder for any slug. That is a soft 404: it returns HTTP 200 with thin content. Those responses are now <code>noindex, nofollow</code>, but the real fix is to call <code>notFound()</code>.</p>
    </div>
    <div class="callout">
      <h4>Two breadcrumb tiers point at pages that do not exist</h4>
      <p>Admissions pages show &ldquo;Home / Admissions / &hellip;&rdquo; and centre pages show &ldquo;Home / Centres of Excellence / &hellip;&rdquo;, but neither intermediate has a route. They are omitted from the schema; either build those index pages or make the tier non-linking in the UI.</p>
    </div>
    <div class="callout">
      <h4>One centre is named two different things</h4>
      <p>The CPIL page calls itself <em>Centre for the Promotion of International Law</em>. Two news pages breadcrumb it as <em>Centre for Public Interest Litigation</em>. The schema uses the page&rsquo;s own name; the visible labels need an editorial decision.</p>
    </div>
    <div class="callout">
      <h4>33 of 56 og:images are the wrong shape for social cards</h4>
      <p>Eight are below the 600&times;315 minimum (several are 380&times;381). The head no longer claims a false 1200&times;630 &mdash; real dimensions are read from the files at build time &mdash; but the assets themselves need a 1.91:1 crop to preview well.</p>
    </div>
    <div class="callout">
      <h4>The privacy policy opens with terms &amp; conditions wording</h4>
      <p><code>/privacy-policy</code> begins &ldquo;These Terms and Conditions govern your access to&hellip;&rdquo;. The description written for it describes a privacy policy; the page body needs to catch up.</p>
    </div>
    <div class="callout">
      <h4>A news page is dated in the future</h4>
      <p><code>/news/ethics-values-litigation</code> states the lecture was held on 29 April 2026. No <code>datePublished</code> is emitted for it until that is corrected.</p>
    </div>
    <div class="callout">
      <h4>Two dev routes are still shipping</h4>
      <p><code>/debug</code> and <code>/test-route</code> are build leftovers. Both are <code>noindex, nofollow</code> as agreed; deleting them is the real fix.</p>
    </div>
  </section>

  <section id="files">
    <div class="sec-head"><span class="step">06</span><h2>Where it lives</h2></div>
    <div class="tablewrap">
      <table>
        <thead><tr><th>Path</th><th>Role</th></tr></thead>
        <tbody>
          <tr><td class="route">src/lib/seo.ts</td><td>Constants, and <code>buildMetadata()</code> &mdash; the one place a page URL is assembled.</td></tr>
          <tr><td class="route">src/lib/seo-pages.ts</td><td>The registry: every static route, its type, copy, image, geo flag and breadcrumb trail.</td></tr>
          <tr><td class="route">src/lib/schema.ts</td><td>JSON-LD builders. The organization block is typed out here once.</td></tr>
          <tr><td class="route">src/lib/page-schema.ts</td><td>Page type &rarr; schema type mapping. The whole table, in one switch.</td></tr>
          <tr><td class="route">src/components/seo/PageSchema.tsx</td><td>Emits exactly the JSON-LD a page is entitled to.</td></tr>
          <tr><td class="route">src/data/llm-faq.ts</td><td>The LL.M. FAQ, rendered by the page and read by the schema. One array, so they cannot diverge.</td></tr>
          <tr><td class="route">src/data/blog-seo.ts</td><td>Generated per-post SEO fields (the article page is a client component).</td></tr>
          <tr><td class="route">src/data/og-image-sizes.ts</td><td>Generated real pixel dimensions for every og:image.</td></tr>
          <tr><td class="route">npm run seo:audit</td><td>The validation pass above. Exits non-zero on any error.</td></tr>
          <tr><td class="route">npm run seo:check</td><td>Offline checks: copy budgets, og:image geometry, blog link coverage.</td></tr>
          <tr><td class="route">npm run seo:data</td><td>Regenerates the two data modules after content changes.</td></tr>
        </tbody>
      </table>
    </div>
    <h3>Not done, deliberately</h3>
    <div class="col">
      <ul>
        <li><strong>No sitemap.xml or robots.txt.</strong> Neither exists in the app today and neither was in scope. Both are worth adding next; the registry already holds the URL list they need.</li>
        <li><strong>No content rewrites.</strong> The thin <code>/guest-lecturers</code> page and the privacy policy body were described as they are, not as they should be.</li>
      </ul>
    </div>
  </section>

  <footer>
    Generated from <span class="mono">src/lib/seo-pages.ts</span> by <span class="mono">scripts/build-report.mjs</span>; verification figures from <span class="mono">npm run seo:audit</span> against a production build.
  </footer>
</div>
`;

fs.writeFileSync(OUT, html);
console.log(`wrote ${OUT} (${(html.length / 1024).toFixed(0)} KB, ${rows.length} inventory rows)`);
