// Keeps src/data/llm-faq.ts and the LL.M. page's rendered FAQ as one array.
// The merge reintroduced an inline faqData on the page; this lifts it back
// into the data module (page content wins) and re-points the page at it, so
// the FAQPage JSON-LD can only ever describe visible Q&As.
//
// Re-run if the page's FAQ is edited inline again:
//   node scripts/sync-llm-faq.mjs
import fs from "node:fs";

const PAGE = "src/app/admissions/llm/page.tsx";
const DATA = "src/data/llm-faq.ts";

let page = fs.readFileSync(PAGE, "utf8");

if (page.includes("const faqData = LLM_FAQ;")) {
  console.log("already sourced from LLM_FAQ - nothing to do");
  process.exit(0);
}

const start = page.indexOf("  const faqData = [");
if (start === -1) throw new Error("inline faqData not found in " + PAGE);
const end = page.indexOf("\n  ];", start) + "\n  ];".length;
const array = page.slice(page.indexOf("[", start), end - 1).trim();

const count = (array.match(/^\s{6}q: "/gm) || []).length;

fs.writeFileSync(
  DATA,
  `// The single source of truth for the LL.M. FAQ.\n` +
    `// The page renders this array visibly AND the FAQPage JSON-LD is built from\n` +
    `// it, so the structured data can never describe Q&A the page does not show.\n` +
    `export type FaqItem = { q: string; a: string };\n\n` +
    `export const LLM_FAQ: FaqItem[] = ${array};\n`
);

page = page.slice(0, start) + "  const faqData = LLM_FAQ;" + page.slice(end);
if (!page.includes('from "@/data/llm-faq"')) {
  page = page.replace(
    /(import .*?;\n)(?![\s\S]*import )/,
    `$1import { LLM_FAQ } from "@/data/llm-faq";\n`
  );
}
fs.writeFileSync(PAGE, page);
console.log(`lifted ${count} Q&As into ${DATA} and re-pointed the page at it`);
