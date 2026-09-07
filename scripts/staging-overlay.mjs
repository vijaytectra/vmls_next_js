// The two files that make a staging copy safe to publish.
//
// Staging serves byte-identical pages to production, so left alone Google
// would index it as duplicate content against vmls.edu.in. A Disallow is not
// enough on its own - it stops crawling, not indexing, and a URL that is only
// linked to can still be listed. The X-Robots-Tag header is what actually
// keeps it out of the index.
//
// Both scripts/pack-deploy.mjs and the CI deploy use this, so the staging
// rules can never drift between the two paths to the server.
//
// Run:  node scripts/staging-overlay.mjs [dir]   (default: out)
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const STAGING_ROBOTS = `# Staging. Not for indexing.
User-Agent: *
Disallow: /
`;

/** @param {string} productionHtaccess contents of the generated .htaccess */
export const stagingHtaccess = (productionHtaccess) =>
  [
    "# STAGING COPY - production deploys the generated .htaccess unchanged.",
    "<IfModule mod_headers.c>",
    '  Header always set X-Robots-Tag "noindex, nofollow"',
    "</IfModule>",
    "",
    productionHtaccess,
  ].join("\n");

/** Rewrites robots.txt and .htaccess inside `dir` in place. */
export function applyStagingOverlay(dir) {
  const htaccess = path.join(dir, ".htaccess");
  if (!fs.existsSync(htaccess)) {
    throw new Error(`${htaccess} not found - run \`node scripts/generate-htaccess.mjs\` and rebuild.`);
  }
  fs.writeFileSync(path.join(dir, "robots.txt"), STAGING_ROBOTS);
  fs.writeFileSync(htaccess, stagingHtaccess(fs.readFileSync(htaccess, "utf8")));
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const dir = process.argv[2] ?? "out";
  applyStagingOverlay(dir);
  console.log(`staging overlay applied to ${dir}/ - robots.txt now disallows all, .htaccess sends noindex`);
}
