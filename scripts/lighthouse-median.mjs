// Final verification: every representative template, both form factors,
// mobile measured three times and reported as the median.
//
// Lighthouse varies by several points run to run on a machine that is also
// doing other work, so a single mobile number cannot be trusted near the
// pass mark.
//
//   node scripts/serve-export.mjs 4300 &
//   node scripts/lighthouse-median.mjs [label]
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const BASE = process.env.LH_BASE ?? "http://localhost:4300";
const LABEL = process.argv[2] ?? "final";
const MOBILE_RUNS = Number(process.env.LH_RUNS ?? 3);

const PAGES = [
  ["homepage", "/"],
  ["admissions", "/admissions/llb"],
  ["centre", "/global-tamil-law-centre"],
  ["faculty profile", "/faculty/gaurav-shukla"],
  ["blog post", "/blogs/what-is-a-moot-court"],
];
const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "lh-"));

const median = (values) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];

function runOnce(route, formFactor, index) {
  const out = path.join(tmp, `${Math.random().toString(36).slice(2)}.json`);
  const args = [
    "-y", "lighthouse", BASE + route,
    "--quiet", "--output=json", `--output-path=${out}`,
    '--chrome-flags=--headless=new --no-sandbox --disable-gpu',
    `--only-categories=${CATEGORIES.join(",")}`,
    "--throttling-method=simulate",
  ];
  if (formFactor === "desktop") args.push("--preset=desktop");
  execFileSync("npx", args, { stdio: "pipe", shell: true, timeout: 240000 });
  const report = JSON.parse(fs.readFileSync(out, "utf8"));
  void index;
  return Object.fromEntries(
    CATEGORIES.map((c) => [c, Math.round((report.categories[c]?.score ?? 0) * 100)])
  );
}

const rows = [];
for (const [name, route] of PAGES) {
  for (const formFactor of ["mobile", "desktop"]) {
    const runs = formFactor === "mobile" ? MOBILE_RUNS : 1;
    const samples = [];
    for (let i = 0; i < runs; i++) {
      try {
        samples.push(runOnce(route, formFactor, i));
      } catch (error) {
        console.log(`  ${name} ${formFactor} run ${i + 1} failed: ${String(error.message).split("\n")[0]}`);
      }
    }
    if (!samples.length) continue;
    const row = { name, route, formFactor, runs: samples.length };
    for (const c of CATEGORIES) row[c] = median(samples.map((s) => s[c]));
    row.spread = `${Math.min(...samples.map((s) => s.performance))}-${Math.max(...samples.map((s) => s.performance))}`;
    rows.push(row);
    console.log(
      `${name.padEnd(16)} ${formFactor.padEnd(8)} perf ${String(row.performance).padStart(3)} (${row.spread})` +
        `  a11y ${row.accessibility}  bp ${row["best-practices"]}  seo ${row.seo}`
    );
  }
}

fs.writeFileSync(`lighthouse-${LABEL}.json`, JSON.stringify(rows, null, 2));

const failing = rows.filter(
  (r) => r.performance < 90 || r.accessibility < 95 || r["best-practices"] < 95 || r.seo < 95
);
console.log(
  `\ntarget: performance >= 90, others >= 95\n` +
    `${rows.length - failing.length}/${rows.length} rows pass`
);
failing.forEach((f) =>
  console.log(
    `  BELOW: ${f.name} ${f.formFactor} - perf ${f.performance}, a11y ${f.accessibility}, bp ${f["best-practices"]}, seo ${f.seo}`
  )
);
