import type { MetadataRoute } from "next";
import { getAdvisorsWithProfiles } from "@/data/boardOfAdvisors";
import { BLOG_SEO } from "@/data/blog-seo";
import { mentoringMembers } from "@/data/mentoringCommittee";
import { facultySlugs } from "@/data/faculty-slugs";
import { BLOCKED_BLOG_SLUGS, isBlocked } from "@/lib/indexing";
import { PAGES, type PageEntry, type PagePath } from "@/lib/seo-pages";
import { absoluteUrl } from "@/lib/seo";

// Served at /sitemap.xml. Everything indexable, nothing that is noindex or
// blocked in robots.txt - the two must agree, so both read src/lib/indexing.
//
// The VLAT portal (vmls.edu.in/vlat/*) is a separate application and is
// deliberately absent.
export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

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

  for (const post of Object.values(BLOG_SEO)) {
    if (BLOCKED_BLOG_SLUGS.has(post.slug)) continue;
    const published = new Date(post.date);
    entries.push({
      url: absoluteUrl(`/blogs/${post.slug}`),
      lastModified: Number.isNaN(published.getTime()) ? undefined : published,
      changeFrequency: "yearly",
      priority: 0.7,
    });
  }

  return entries;
}
