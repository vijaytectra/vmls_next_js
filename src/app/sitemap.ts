import type { MetadataRoute } from "next";
import { getAdvisorsWithProfiles } from "@/data/boardOfAdvisors";
import blogContent from "@/data/blogs/content.json";
import { ALL_BLOG_SLUGS } from "@/data/blogs/posts";
import { mentoringMembers } from "@/data/mentoringCommittee";
import { facultySlugs } from "@/data/faculty-slugs";
import { BLOCKED_BLOG_SLUGS, isBlocked } from "@/lib/indexing";
import { PAGES, type PageEntry, type PagePath } from "@/lib/seo-pages";
import { absoluteUrl } from "@/lib/seo";

// Emitted as a static file by `output: "export"`.
export const dynamic = "force-static";

/**
 * Parse blog dates to a calendar YYYY-MM-DD for <lastmod>.
 * Google Search Console is happiest with date-only lastmod; invalid calendar
 * dates (e.g. "June 31") and unparseable strings are omitted rather than
 * emitting Invalid Date / timezone-shifted ISO strings.
 */
function parseBlogDate(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const trimmed = raw.trim();

  const isoDay = trimmed.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (isoDay) {
    const y = Number(isoDay[1]);
    const m = Number(isoDay[2]);
    const d = Number(isoDay[3]);
    if (isValidYmd(y, m, d)) return `${isoDay[1]}-${isoDay[2]}-${isoDay[3]}`;
    return undefined;
  }

  const named = trimmed.match(/^([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})$/);
  if (named) {
    const months: Record<string, number> = {
      january: 1,
      february: 2,
      march: 3,
      april: 4,
      may: 5,
      june: 6,
      july: 7,
      august: 8,
      september: 9,
      october: 10,
      november: 11,
      december: 12,
    };
    const m = months[named[1].toLowerCase()];
    const d = Number(named[2]);
    const y = Number(named[3]);
    if (!m || !isValidYmd(y, m, d)) return undefined;
    return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
  }

  const ms = Date.parse(trimmed);
  if (Number.isNaN(ms)) return undefined;
  const dt = new Date(ms);
  const y = dt.getUTCFullYear();
  const m = dt.getUTCMonth() + 1;
  const d = dt.getUTCDate();
  if (!isValidYmd(y, m, d)) return undefined;
  return `${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

function isValidYmd(y: number, m: number, d: number): boolean {
  if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d)) return false;
  if (m < 1 || m > 12 || d < 1 || d > 31) return false;
  const dt = new Date(Date.UTC(y, m - 1, d));
  return dt.getUTCFullYear() === y && dt.getUTCMonth() === m - 1 && dt.getUTCDate() === d;
}

function lastmodFromIso(raw: string | undefined): string | undefined {
  if (!raw) return undefined;
  const m = raw.match(/^(\d{4}-\d{2}-\d{2})/);
  return m?.[1];
}

// Served at /sitemap.xml. Everything indexable, nothing that is noindex or
// blocked in robots.txt - the two must agree, so both read src/lib/indexing.
//
// Blog URLs come from ALL_BLOG_SLUGS + content.json (same source as the blog
// listing), so new posts appear in the sitemap as soon as they are added —
// without depending on a stale blog-seo.ts regenerate.
//
// The VLAT portal (vmls.edu.in/vlat/*) is a separate application and is
// deliberately absent.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const contentMap = blogContent as Record<string, { date?: string }>;

  const priorityFor = (type: PageEntry["pageType"]) => {
    if (type === "homepage") return 1;
    if (type === "programme" || type === "admissions") return 0.9;
    if (type === "centre" || type === "about" || type === "contact") return 0.8;
    if (type === "news" || type === "news-index" || type === "blog-index") return 0.7;
    return 0.6;
  };

  for (const [path, entry] of Object.entries(PAGES) as [PagePath, PageEntry][]) {
    if (entry.noindex || isBlocked(path)) continue;
    entries.push({
      url: absoluteUrl(path),
      lastModified: lastmodFromIso(entry.publishedTime),
      changeFrequency: entry.pageType === "news" ? "monthly" : "yearly",
      priority: priorityFor(entry.pageType),
    });
  }

  for (const slug of facultySlugs) {
    entries.push({
      url: absoluteUrl(`/faculty/${slug}`),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }

  for (const advisor of getAdvisorsWithProfiles()) {
    entries.push({
      url: absoluteUrl(`/board-of-advisors/${advisor.slug}`),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }

  for (const member of mentoringMembers) {
    entries.push({
      url: absoluteUrl(`/mentoring-committee/${member.slug}`),
      changeFrequency: "yearly",
      priority: 0.5,
    });
  }

  for (const slug of ALL_BLOG_SLUGS) {
    if (BLOCKED_BLOG_SLUGS.has(slug)) continue;
    entries.push({
      url: absoluteUrl(`/blogs/${slug}`),
      lastModified: parseBlogDate(contentMap[slug]?.date),
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return entries;
}
