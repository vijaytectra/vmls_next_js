// Checks every redirect rule against a running build: the source must redirect
// permanently, to the declared destination, and that destination must itself
// return 200.
//
// Both rule files are read, in the same precedence the .htaccess generator
// uses - src/data/redirects.manual.ts wins over the generated
// src/data/redirects.ts on any duplicated source. Reading only the generated
// file made every manual override look like a failure: the server correctly
// followed the manual rule while this script expected the generated one.
//
// Usage: npm run build && npm start &   then: node scripts/verify-redirects.mjs
import fs from "node:fs";

const BASE = process.env.SEO_AUDIT_BASE ?? "http://localhost:3000";

// Slice the array literal itself - "Redirect[]" in the type annotation would
// otherwise be mistaken for the start of the data.
function readRules(file, exportName) {
  const src = fs.readFileSync(file, "utf8");
  const start = src.indexOf("= [", src.indexOf(exportName)) + 2;
  return JSON.parse(src.slice(start, src.lastIndexOf("]") + 1));
}

// Manual first, so its entries claim each source before the generated ones.
const bySource = new Map();
for (const rule of [
  ...readRules("src/data/redirects.manual.ts", "MANUAL_REDIRECTS"),
  ...readRules("src/data/redirects.ts", "export const REDIRECTS"),
]) {
  if (!bySource.has(rule.source)) bySource.set(rule.source, rule);
}
const rules = [...bySource.values()];

const errors = [];
const statuses = new Map();
const targetCache = new Map();

async function targetStatus(path) {
  if (targetCache.has(path)) return targetCache.get(path);
  const res = await fetch(BASE + path, { redirect: "manual" });
  let status = res.status;
  // A destination that itself redirects is a chain - follow one hop so the
  // report says where it actually ends up.
  if (status >= 300 && status < 400) {
    const next = res.headers.get("location");
    status = `${status} -> ${next}`;
  }
  targetCache.set(path, status);
  return status;
}

for (const rule of rules) {
  const res = await fetch(BASE + rule.source, { redirect: "manual" });
  statuses.set(res.status, (statuses.get(res.status) ?? 0) + 1);

  if (res.status !== 301 && res.status !== 308) {
    errors.push(`${rule.source} -> HTTP ${res.status}, expected a permanent redirect`);
    continue;
  }
  const location = res.headers.get("location") ?? "";
  const got = location.replace(BASE, "");
  if (got !== rule.destination) {
    errors.push(`${rule.source} -> redirects to ${got}, expected ${rule.destination}`);
    continue;
  }
  const dest = await targetStatus(rule.destination);
  if (dest !== 200) {
    errors.push(`${rule.source} -> ${rule.destination} returns ${dest}`);
  }
}

console.log(`checked ${rules.length} redirects at ${BASE}`);
console.log(
  "status codes: " +
    [...statuses.entries()].map(([s, n]) => `${s}x${n}`).join(", ")
);
console.log(`distinct destinations: ${targetCache.size}\n`);
if (!errors.length) {
  console.log("all redirects resolve to a live page");
} else {
  console.log(`PROBLEMS (${errors.length}):`);
  errors.forEach((e) => console.log("  - " + e));
}
process.exit(errors.length ? 1 : 0);
