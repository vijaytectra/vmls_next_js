// Reports which routes emit JSON-LD and which emit none, grouped by page
// type, so gaps in schema coverage are visible rather than assumed.
//
// Usage: npm start &   then: node scripts/schema-coverage.mjs
import fs from "node:fs";

const BASE = process.env.SEO_AUDIT_BASE ?? "http://localhost:3000";

const registry = fs.readFileSync("src/lib/seo-pages.ts", "utf8");
const body = registry.slice(registry.indexOf("export const PAGES = {"));
const keys = [...body.matchAll(/^  "(\/[^"]*)":\s*\{$/gm)];

const routes = keys.map((k, i) => {
  const block = body.slice(
    k.index,
    i + 1 < keys.length ? keys[i + 1].index : body.length
  );
  return {
    path: k[1],
    pageType: (block.match(/pageType: "([^"]+)"/) || [])[1],
    noindex: /noindex: true/.test(block),
    hasBreadcrumb: /breadcrumb: \[/.test(block),
    hasVisibleBreadcrumb: false,
  };
});

const withSchema = [];
const without = [];

for (const route of routes) {
  const res = await fetch(BASE + route.path);
  if (!res.ok) {
    without.push({ ...route, types: [`HTTP ${res.status}`] });
    continue;
  }
  const html = await res.text();
  const types = [
    ...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g),
  ].flatMap((m) => {
    try {
      const parsed = JSON.parse(m[1]);
      return (Array.isArray(parsed) ? parsed : [parsed]).map((s) => s["@type"]);
    } catch {
      return ["UNPARSEABLE"];
    }
  });
  // Does the page render a visible breadcrumb trail?
  route.hasVisibleBreadcrumb = /<nav[^>]*>[\s\S]{0,400}?>Home</.test(html);
  if (types.length) withSchema.push({ ...route, types });
  else without.push({ ...route, types: [] });
}

const byType = {};
for (const r of without) (byType[r.pageType] ??= []).push(r);

console.log(`${routes.length} registered routes: ${withSchema.length} carry JSON-LD, ${without.length} carry none\n`);
console.log("ROUTES WITH NO JSON-LD, by page type:");
for (const [type, list] of Object.entries(byType).sort()) {
  console.log(`\n  ${type} (${list.length})`);
  for (const r of list) {
    const flags = [
      r.noindex ? "noindex" : "",
      r.hasVisibleBreadcrumb ? "has visible breadcrumb" : "no visible breadcrumb",
    ]
      .filter(Boolean)
      .join(", ");
    console.log(`    ${r.path.padEnd(46)} ${flags}`);
  }
}

const counts = {};
for (const r of withSchema) for (const t of r.types) counts[t] = (counts[t] ?? 0) + 1;
console.log("\nSCHEMA TYPES IN USE:");
Object.entries(counts)
  .sort((a, b) => b[1] - a[1])
  .forEach(([t, n]) => console.log(`  ${String(n).padStart(4)}  ${t}`));
