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

/** Parse "September 21, 2026" (and ISO) to a Date for <lastmod>. */
function parseBlogDate(raw: string | undefined): Date | undefined {
  if (!raw) return undefined;
  const iso = Date.parse(raw);
  if (!Number.isNaN(iso)) return new Date(iso);
  return undefined;
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
      lastModified: entry.publishedTime ? new Date(entry.publishedTime) : undefined,
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
    const published = parseBlogDate(contentMap[slug]?.date);
    entries.push({
      url: absoluteUrl(`/blogs/${slug}`),
      lastModified: published,
      changeFrequency: "weekly",
      priority: 0.7,
    });
  }

  return entries;
}
