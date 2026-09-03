// Runs Lighthouse over the representative templates on both form factors and
// prints a score table. Measures ./out through scripts/serve-export.mjs, i.e.
// the artifact that will be uploaded, not the dev server.
//
//   node scripts/serve-export.mjs 4300 &
//   node scripts/lighthouse-run.mjs [baseline|after]
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const BASE = process.env.LH_BASE ?? "http://localhost:4300";
const LABEL = process.argv[2] ?? "run";

// One page per template - fixing a template fixes every page built from it.
const PAGES = [
  ["homepage", "/"],
  ["admissions", "/admissions/llb"],
  ["centre", "/global-tamil-law-centre"],
  ["faculty profile", "/faculty/gaurav-shukla"],
  ["blog post", "/blogs/what-is-a-moot-court"],
];

const CATEGORIES = ["performance", "accessibility", "best-practices", "seo"];
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "lh-"));
const results = [];

for (const [name, route] of PAGES) {
  for (const formFactor of ["mobile", "desktop"]) {
    const out = path.join(tmp, `${name.replace(/\s/g, "-")}-${formFactor}.json`);
    const args = [
      "-y",
      "lighthouse",
      BASE + route,
      "--quiet",
      "--output=json",
      `--output-path=${out}`,
      '--chrome-flags=--headless=new --no-sandbox --disable-gpu',
      `--only-categories=${CATEGORIES.join(",")}`,
      "--throttling-method=simulate",
    ];
    if (formFactor === "desktop") args.push("--preset=desktop");
    try {
      execFileSync("npx", args, { stdio: "pipe", shell: true, timeout: 180000 });
      const report = JSON.parse(fs.readFileSync(out, "utf8"));
      const scores = Object.fromEntries(
        CATEGORIES.map((c) => [c, Math.round((report.categories[c]?.score ?? 0) * 100)])
      );
      const audits = report.audits ?? {};
      results.push({
        name,
        route,
        formFactor,
        ...scores,
        lcp: audits["largest-contentful-paint"]?.displayValue ?? "",
        cls: audits["cumulative-layout-shift"]?.displayValue ?? "",
        tbt: audits["total-blocking-time"]?.displayValue ?? "",
        opportunities: Object.values(audits)
          .filter((a) => a.details?.type === "opportunity" && (a.score ?? 1) < 0.9)
          .sort((a, b) => (b.numericValue ?? 0) - (a.numericValue ?? 0))
          .slice(0, 3)
          .map((a) => `${a.title} (${a.displayValue ?? ""})`),
        failed: CATEGORIES.flatMap((c) =>
          (report.categories[c]?.auditRefs ?? [])
            .filter((r) => r.weight > 0 && (audits[r.id]?.score ?? 1) < 1 && audits[r.id]?.scoreDisplayMode !== "informative")
            .map((r) => `${c}: ${audits[r.id].title}`)
        ),
      });
      console.log(
        `${name.padEnd(16)} ${formFactor.padEnd(8)} perf ${String(scores.performance).padStart(3)}  a11y ${String(scores.accessibility).padStart(3)}  bp ${String(scores["best-practices"]).padStart(3)}  seo ${String(scores.seo).padStart(3)}`
      );
    } catch (error) {
      console.log(`${name.padEnd(16)} ${formFactor.padEnd(8)} FAILED: ${String(error.message).split("\n")[0]}`);
    }
  }
}

fs.writeFileSync(`lighthouse-${LABEL}.json`, JSON.stringify(results, null, 2));

const below = results.filter((r) =>
  CATEGORIES.some((c) => r[c] < 95)
);
console.log(`\n${results.length} runs, ${below.length} below 95 in at least one category`);
console.log(`full results: lighthouse-${LABEL}.json`);
