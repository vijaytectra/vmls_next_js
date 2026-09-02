/**
 * What search engines are kept away from, in one place, so robots.txt and
 * the sitemap can never disagree with each other.
 */

/**
 * Paths disallowed in robots.txt.
 *
 * The two PhD posts were disallowed on the previous site and stay blocked
 * here, on both their old (.html) and new URLs. Note the trade-off: a
 * Disallow stops crawling, not indexing - if either URL is already in the
 * index, switching to a noindex tag is the way to get it removed.
 */
export const BLOCKED_FROM_SEARCH = [
  "/blogs/part-time-phd-in-law-and-interdisciplinary-studies",
  "/blogs/full-time-phd-in-law-and-interdisciplinary-studies",
  "/blogs/part-time-phd-in-law-and-interdisciplinary-studies.html",
  "/blogs/full-time-phd-in-law-and-interdisciplinary-studies.html",
  // Development leftovers, also noindex at the page level.
  "/debug",
  "/test-route",
] as const;

/** Blog slugs that must not appear in the sitemap either. */
export const BLOCKED_BLOG_SLUGS = new Set([
  "part-time-phd-in-law-and-interdisciplinary-studies",
  "full-time-phd-in-law-and-interdisciplinary-studies",
]);

export const isBlocked = (path: string) =>
  (BLOCKED_FROM_SEARCH as readonly string[]).includes(path);
