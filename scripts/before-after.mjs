// Builds the audit inventory: the pre-existing <title>/description for each
// route (read from git HEAD) next to the new ones, plus the keywords column.
import { execSync } from "node:child_process";
import fs from "node:fs";

const ROOT_LAYOUT = execSync("git show HEAD:src/app/layout.tsx").toString();
const INHERITED_TITLE = (ROOT_LAYOUT.match(/title: "([^"]*)"/) || [])[1];
const INHERITED_DESC = (ROOT_LAYOUT.match(/description: "([^"]*)"/) || [])[1];

const registry = fs.readFileSync("src/lib/seo-pages.ts", "utf8");
const body = registry.slice(registry.indexOf("export const PAGES = {"));
const keys = [...body.matchAll(/^  "(\/[^"]*)":\s*\{$/gm)];

const rows = [];
keys.forEach((k, i) => {
  const route = k[1];
  const block = body.slice(
    k.index,
    i + 1 < keys.length ? keys[i + 1].index : body.length
  );
  const file = route === "/" ? "src/app/page.tsx" : `src/app${route}/page.tsx`;
  let old = "";
  try {
    old = execSync(`git show HEAD:${file}`, { stdio: ["ignore", "pipe", "ignore"] }).toString();
  } catch {
    old = "";
  }
  const hadOwn = /export const metadata/.test(old);
  const oldTitle = hadOwn ? (old.match(/title: "([^"]*)"/) || [])[1] : INHERITED_TITLE;
  const oldDesc = hadOwn ? (old.match(/description: "([^"]*)"/) || [])[1] : INHERITED_DESC;
  rows.push({
    route,
    pageType: (block.match(/pageType: "([^"]+)"/) || [])[1],
    hadOwn,
    oldTitle,
    oldDesc,
    keywords: /keywords/.test(old),
    newTitle: (block.match(/\n    title:\s*\n?\s*"([^"]*)"/) || [])[1],
    schema: /breadcrumb: \[/.test(block),
  });
});

const inheritedCount = rows.filter((r) => !r.hadOwn).length;
console.log(`routes: ${rows.length}`);
console.log(`had their own title/description before: ${rows.length - inheritedCount}`);
console.log(`inherited the root layout title before: ${inheritedCount}`);
console.log(`had meta keywords before: ${rows.filter((r) => r.keywords).length}`);
console.log(`\nInherited-title routes (all shared one identical title+description):`);
rows.filter((r) => !r.hadOwn).forEach((r) => console.log(`  ${r.route}`));

fs.writeFileSync(
  "seo-inventory.json",
  JSON.stringify({ inherited: { title: INHERITED_TITLE, description: INHERITED_DESC }, rows }, null, 2)
);
console.log("\nwrote seo-inventory.json");
