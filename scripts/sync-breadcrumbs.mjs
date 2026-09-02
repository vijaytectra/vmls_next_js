// Reads each page's VISIBLE breadcrumb trail from the rendered HTML and
// writes it into the registry, so BreadcrumbList markup always matches what
// a reader can see. Tiers without a URL are dropped except the last one,
// which Google allows to omit `item`.
//
// Usage: npm start &   then: node scripts/sync-breadcrumbs.mjs [--dry]
import fs from "node:fs";

const BASE = process.env.SEO_AUDIT_BASE ?? "http://localhost:3000";
const DRY = process.argv.includes("--dry");
const FILE = "src/lib/seo-pages.ts";

let registry = fs.readFileSync(FILE, "utf8");
const body = registry.slice(registry.indexOf("export const PAGES = {"));
const keys = [...body.matchAll(/^  "(\/[^"]*)":\s*\{$/gm)];

const decode = (s) =>
  s
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/** The visible trail, as [{name, path?}]. */
function trailFrom(html) {
  // Breadcrumbs are styled differently per section (grey bar on most pages,
  // amber-on-dark inside the news hero), so identify the trail by structure:
  // the first <nav> containing a link to the homepage labelled "Home".
  // Some Home links wrap an icon before the label, so test the nav's text
  // content rather than the markup immediately after the href.
  const nav = [...html.matchAll(/<nav[^>]*>([\s\S]*?)<\/nav>/g)].find(
    (m) =>
      /href="\/"/.test(m[1]) &&
      /\bHome\b/.test(m[1].replace(/<[^>]*>/g, " "))
  );
  if (!nav) return null;
  const items = [];
  // Links and spans in document order. The current page is a span, but its
  // colour class varies by section (#a31f34 on most, #800000 on the centre
  // pages), so match any span and drop the "/" separators instead.
  for (const m of nav[1].matchAll(
    /<a[^>]+href="([^"]+)"[^>]*>([\s\S]*?)<\/a>|<span[^>]*>([\s\S]*?)<\/span>/g
  )) {
    const [, href, linkText, spanText] = m;
    const name = decode((linkText ?? spanText ?? "").replace(/<[^>]*>/g, ""));
    if (!name || name === "/" || name === "›" || name === ">") continue;
    if (href) items.push({ name, path: href });
    else items.push({ name });
  }
  // A single "Home" crumb describes nothing - treat it as no trail at all.
  return items.length >= 2 ? items : null;
}

const serialise = (trail) =>
  `[\n${trail
    .map(
      (t) =>
        `      { name: ${JSON.stringify(t.name)}${
          t.path ? `, path: ${JSON.stringify(t.path)}` : ""
        } },`
    )
    .join("\n")}\n    ]`;

const added = [];
const mismatched = [];
const skipped = [];

for (let i = keys.length - 1; i >= 0; i--) {
  const route = keys[i][1];
  const start = registry.indexOf(keys[i][0]);
  const end =
    i + 1 < keys.length
      ? registry.indexOf(keys[i + 1][0])
      : registry.indexOf("} satisfies");
  const block = registry.slice(start, end);

  if (/noindex: true/.test(block)) {
    skipped.push(`${route} (noindex)`);
    continue;
  }

  const res = await fetch(BASE + route);
  if (!res.ok) {
    skipped.push(`${route} (HTTP ${res.status})`);
    continue;
  }
  const trail = trailFrom(await res.text());
  if (!trail) {
    skipped.push(`${route} (no visible breadcrumb)`);
    continue;
  }
  // Intermediate tiers must have a URL; only the final item may omit one.
  const usable = trail.filter((t, idx) => t.path || idx === trail.length - 1);

  if (/breadcrumb: \[/.test(block)) {
    const declaredNames = [...block.matchAll(/name: "([^"]+)"/g)].map((m) => m[1]);
    const visibleNames = usable.map((t) => t.name);
    if (declaredNames.join(" > ") === visibleNames.join(" > ")) continue;

    // Structured data must describe what the page shows, so the visible
    // wording wins over anything written by hand earlier.
    const replaced = block.replace(
      /\n    breadcrumb: \[[\s\S]*?\n    \],/,
      `\n    breadcrumb: ${serialise(usable)},`
    );
    mismatched.push(
      `${route}\n      was:  ${declaredNames.join(" > ")}\n      now:  ${visibleNames.join(" > ")}`
    );
    if (!DRY && replaced !== block) {
      registry = registry.slice(0, start) + replaced + registry.slice(end);
    }
    continue;
  }

  // Insert before the entry's closing brace, wherever it sits - some blocks
  // are followed by a section comment, so anchoring to the end of the string
  // is not reliable.
  const closeAt = block.lastIndexOf("\n  },");
  if (closeAt === -1) {
    skipped.push(`${route} (could not place breadcrumb)`);
    continue;
  }
  const updated =
    block.slice(0, closeAt) +
    `\n    breadcrumb: ${serialise(usable)},` +
    block.slice(closeAt);
  added.push(`${route}  ->  ${usable.map((t) => t.name).join(" > ")}`);
  if (!DRY) registry = registry.slice(0, start) + updated + registry.slice(end);
}

if (!DRY) fs.writeFileSync(FILE, registry);

console.log(`${DRY ? "DRY RUN - " : ""}breadcrumbs added to ${added.length} routes\n`);
added.reverse().forEach((a) => console.log("  " + a));
if (mismatched.length) {
  console.log(`\nDECLARED TRAIL DIFFERS FROM THE VISIBLE ONE (${mismatched.length}):`);
  mismatched.forEach((m) => console.log("  - " + m));
}
if (skipped.length) {
  console.log(`\nskipped (${skipped.length}):`);
  skipped.forEach((s) => console.log("  - " + s));
}
