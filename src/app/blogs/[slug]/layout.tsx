import type { Metadata } from "next";
import type { ReactNode } from "react";
import JsonLd from "@/components/seo/JsonLd";
import { BLOG_SEO } from "@/data/blog-seo";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// src/app/blogs/[slug]/page.tsx is a client component and cannot export
// metadata, so the per-post head and JSON-LD are declared here. Both read
// BLOG_SEO, which is generated from the post data the page renders.

const BLOG_TRAIL = [
  { name: "Home", path: "/" },
  { name: "Blogs", path: "/blogs" },
];

const isoDate = (date: string) => {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime())
    ? undefined
    : parsed.toISOString().slice(0, 10);
};

const blogTitle = (title: string) =>
  `${title} | VMLS`.length <= 60 ? `${title} | VMLS` : title;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_SEO[slug];
  const path = `/blogs/${slug}`;

  // The blog index links a few slugs that have no article body yet; those
  // render an empty shell, so they stay out of the index.
  if (!post) {
    return buildMetadata({
      path,
      title: "Law Blog Article – VMLS Chennai",
      description:
        "This article is not available yet. Browse legal insights from Vinayaka Mission's Law School faculty and students on the VMLS law blog.",
      noindex: true,
    });
  }

  return buildMetadata({
    path,
    title: blogTitle(post.title),
    description: post.description,
    ogTitle: post.title,
    // Social-tuned: byline and date lead, so a shared card reads as an
    // article rather than repeating the meta description verbatim.
    ogDescription: `${post.author ? `By ${post.author} · ` : ""}${post.date} · ${post.description}`.slice(0, 200),
    image: post.image,
    imageAlt: post.title,
    ogType: "article",
    dcType: "Text.Article",
    publishedTime: isoDate(post.date),
    author: post.author,
  });
}

export default async function BlogPostLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_SEO[slug];
  if (!post) return children;

  return (
    <>
      <JsonLd
        schema={[
          articleSchema({
            headline: post.title,
            description: post.description,
            path: `/blogs/${slug}`,
            image: post.image,
            datePublished: isoDate(post.date),
            author: post.author,
            type: "BlogPosting",
          }),
          breadcrumbSchema([...BLOG_TRAIL, { name: post.title }]),
        ]}
      />
      {children}
    </>
  );
}
