// Quick offline check of the registry's title/description budgets, so the
// copy can be tuned without a full build + HTTP audit round trip.
import fs from "node:fs";

const src = fs.readFileSync("src/lib/seo-pages.ts", "utf8");
const body = src.slice(src.indexOf("export const PAGES = {"));
const keys = [...body.matchAll(/^  "(\/[^"]*)":\s*\{$/gm)];

let bad = 0;
keys.forEach((k, i) => {
  const block = body.slice(
    k.index,
    i + 1 < keys.length ? keys[i + 1].index : body.length
  );
  const noindex = /noindex: true/.test(block);
  const title = (block.match(/\n    title:\s*\n?\s*"([^"]*)"/) || [])[1];
  const desc = (block.match(/\n    description:\s*\n?\s*"([^"]*)"/) || [])[1];
  const issues = [];
  if (!title) issues.push("no title");
  else if (title.length > 60) issues.push(`title ${title.length}`);
  if (!desc) issues.push("no description");
  else if (!noindex && (desc.length < 150 || desc.length > 160))
    issues.push(`description ${desc.length}`);
  if (issues.length) {
    bad++;
    console.log(`${k[1].padEnd(56)} ${issues.join(", ")}`);
  }
});
console.log(`\n${keys.length} routes, ${bad} outside budget`);
