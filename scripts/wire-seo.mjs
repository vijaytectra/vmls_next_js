// One-off codemod: wires every registered route to the SEO registry.
//
//  - server pages get   export const metadata = pageMetadata("<path>")
//  - client pages get a sibling layout.tsx carrying the metadata export
//  - pages entitled to JSON-LD get <PageSchema path="<path>" /> injected as
//    the first child of their root element
//
// Re-running is safe: it skips work that is already in place.
import fs from "node:fs";
import path from "node:path";

const ROOT = "src/app";

/** Routes that are wired, read straight out of the registry source. */
function registeredPaths() {
  const src = fs.readFileSync("src/lib/seo-pages.ts", "utf8");
  const body = src.slice(src.indexOf("export const PAGES = {"));
  return [...body.matchAll(/^  "(\/[^"]*)":\s*\{$|^  "(\/)":\s*\{$/gm)].map(
    (m) => m[1] ?? m[2]
  );
}

/**
 * Which registered routes are entitled to JSON-LD (mirrors page-schema.ts).
 * Every page type now maps to an entity or at least a breadcrumb; only the
 * noindex development routes are left without.
 */
function needsSchema(entryBlock) {
  return !/pageType: "dev-artifact"/.test(entryBlock);
}

function entryBlocks() {
  const src = fs.readFileSync("src/lib/seo-pages.ts", "utf8");
  const body = src.slice(src.indexOf("export const PAGES = {"));
  const keys = [...body.matchAll(/^  "(\/[^"]*)":\s*\{$/gm)];
  const out = {};
  keys.forEach((k, i) => {
    const from = k.index;
    const to = i + 1 < keys.length ? keys[i + 1].index : body.length;
    out[k[1]] = body.slice(from, to);
  });
  return out;
}

const fileFor = (route) =>
  path.join(ROOT, route === "/" ? "page.tsx" : `${route.slice(1)}/page.tsx`);

const isClient = (src) => /^\s*["']use client["']/.test(src);

/**
 * Strip an existing `export const metadata = { ... };` object literal.
 *
 * Only an object literal: a file already wired to `pageMetadata("/x")` has no
 * braces of its own, and walking forward to the next `{` would swallow the
 * component that follows it.
 */
function stripMetadata(src) {
  const at = src.indexOf("export const metadata");
  if (at === -1) return src;
  const open = src.indexOf("{", at);
  if (open === -1) return src;
  // Everything between the declaration and that brace must be type
  // annotation and assignment - otherwise the brace belongs to something else.
  if (!/^export const metadata(\s*:\s*Metadata)?\s*=\s*$/.test(src.slice(at, open)))
    return src;
  let depth = 0;
  let i = open;
  for (; i < src.length; i++) {
    if (src[i] === "{") depth++;
    else if (src[i] === "}") {
      depth--;
      if (depth === 0) break;
    }
  }
  const end = src.indexOf(";", i) + 1;
  return src.slice(0, at) + src.slice(end).replace(/^\n+/, "\n");
}

/** Insert after the final top-level import statement. */
function addImport(src, line) {
  if (src.includes(line)) return src;
  const imports = [...src.matchAll(/^import .*?;$/gm)];
  if (!imports.length) {
    const useClient = src.match(/^\s*["']use client["'];?\n/);
    const at = useClient ? useClient[0].length : 0;
    return src.slice(0, at) + line + "\n" + src.slice(at);
  }
  const last = imports[imports.length - 1];
  const at = last.index + last[0].length;
  return src.slice(0, at) + "\n" + line + src.slice(at);
}

/**
 * Find the end of the first JSX opening tag inside the default export's
 * return, so a child can be inserted immediately after it.
 */
function firstChildOffset(src) {
  const ret = src.search(/return \(\s*\n?\s*</);
  if (ret === -1) return -1;
  const tagStart = src.indexOf("<", ret);
  if (src.startsWith("<>", tagStart)) return tagStart + 2; // fragment
  let i = tagStart;
  let depth = 0; // {} nesting inside the tag
  let quote = null;
  for (; i < src.length; i++) {
    const c = src[i];
    if (quote) {
      if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") quote = c;
    else if (c === "{") depth++;
    else if (c === "}") depth--;
    else if (c === ">" && depth === 0) return i + 1;
  }
  return -1;
}

const blocks = entryBlocks();
const routes = registeredPaths();
const report = [];

for (const route of routes) {
  const file = fileFor(route);
  if (!fs.existsSync(file)) {
    report.push([route, "MISSING FILE", file]);
    continue;
  }
  let src = fs.readFileSync(file, "utf8");
  const client = isClient(src);
  const schema = needsSchema(blocks[route] ?? "");
  const actions = [];

  src = stripMetadata(src);

  if (client) {
    // metadata cannot be exported from a client component - use a layout.
    const layout = path.join(path.dirname(file), "layout.tsx");
    if (!fs.existsSync(layout)) {
      fs.writeFileSync(
        layout,
        `import type { ReactNode } from "react";\n` +
          `import { pageMetadata } from "@/lib/seo-pages";\n\n` +
          `// ${file} is a client component and cannot export metadata itself.\n` +
          `export const metadata = pageMetadata("${route}");\n\n` +
          `export default function Layout({ children }: { children: ReactNode }) {\n` +
          `  return children;\n}\n`
      );
      actions.push("layout.tsx created");
    }
  } else if (!src.includes(`pageMetadata("${route}")`)) {
    src = addImport(src, `import { pageMetadata } from "@/lib/seo-pages";`);
    const imports = [...src.matchAll(/^import .*?;$/gm)];
    const at = imports[imports.length - 1].index + imports[imports.length - 1][0].length;
    src =
      src.slice(0, at) +
      `\n\nexport const metadata = pageMetadata("${route}");` +
      src.slice(at);
    actions.push("metadata");
  }

  if (schema && !src.includes("<PageSchema")) {
    const at = firstChildOffset(src);
    if (at === -1) {
      report.push([route, "SCHEMA INSERT FAILED", file]);
    } else {
      src = addImport(src, `import PageSchema from "@/components/seo/PageSchema";`);
      const insertAt = firstChildOffset(src);
      src =
        src.slice(0, insertAt) +
        `\n      <PageSchema path="${route}" />` +
        src.slice(insertAt);
      actions.push("schema");
    }
  }

  fs.writeFileSync(file, src);
  report.push([route, actions.join(" + ") || "already wired", file]);
}

for (const [route, action] of report) {
  console.log(`${route.padEnd(58)} ${action}`);
}
console.log(`\n${routes.length} routes processed`);
