import Image from "next/image";
import Link from "next/link";
import { Calendar, User, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import BlogArticleContent from "@/components/BlogArticleContent";
import blogContent from "@/data/blogs/content.json";

import { blogPosts } from "@/data/blogs/posts";

const topArticles = [
  {
    title: "5-Year Law Programme at VMLS",
    date: "Jan 08, 2025",
    image: "/images/blogs/5-Year.webp",
    slug: "5-year-llb-programme",
    excerpt: "Several students across India are choosing law as a career due to the various benefits it offers."
  },
  {
    title: "3-Year LLB Programme at VMLS",
    date: "Jan 07, 2025",
    image: "/images/blogs/3-Year.webp",
    slug: "3-year-llb-programme",
    excerpt: "The 3-year LLB (Bachelor of Legislative Law) programme is an undergraduate programme designed to cater..."
  },
  {
    title: "Vinayaka Mission's Law Admission Test (VLAT): A Complete Guide",
    date: "Dec 30, 2024",
    image: "/images/blogs/VLAT.png",
    slug: "vinayaka-missions-law-admission-test-VLAT",
    excerpt: "Vinayaka Mission's Law School (VMLS) is one of the best law schools in India and is being mentored by O. P. Jindal Global..."
  },
  {
    title: "Top Law Colleges in India",
    date: "Dec 23, 2024",
    image: "/images/blogs/best-law-colleges-india.webp",
    slug: "best-law-colleges-in-india-how-to-choose-the-right-one",
    excerpt: "In India, law is seen as a noble career option, and the number of students interested in pursuing law is increasing."
  },
  {
    title: "Subjects in Law Courses",
    date: "Dec 18, 2024",
    image: "/images/blogs/subject-in-law-course.webp",
    slug: "types-of-law-courses-in-india",
    excerpt: "If you are willing to work in a legal advisory firm, judiciary, or as a lawyer, then pursuing a law degree plays..."
  },
  {
    title: "CLAT Exam Importance, Eligibility Criteria and Syllabus",
    date: "Dec 17, 2024",
    image: "/images/blogs/clat-exam.webp",
    slug: "clat-exam-importance-eligibility-criteria-syllabus",
    excerpt: "CLAT is a national-level entrance exam, and it stands for Common Law Entrance Test. Many top law universities in India."
  }
];

const blogData = blogContent as Record<
  string,
  {
    title: string;
    date: string;
    image: string;
    author?: string;
    category?: string | null;
    html: string;
    faqs?: { question: string; answerHtml: string }[];
    tags?: string[];
    lastUpdated?: string | null;
  }
>;

// Server component: content.json is read at build time and never reaches
// the browser. It previously shipped as a 1.4 MB client chunk on every
// blog page.
export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const slugStr = slug;
  const listing = blogPosts.find((p) => p.slug === slugStr);
  const record = slugStr ? blogData[slugStr] : undefined;
  const post = record
    ? {
        title: record.title,
        date: record.date,
        image: record.image,
        author: record.author || "VMLS Editorial",
        category: record.category,
        html: record.html,
        faqs: record.faqs || [],
        tags: record.tags || [],
        lastUpdated: record.lastUpdated || null,
      }
    : {
        title: listing?.title || "Blog Post",
        date: listing?.date || "Coming Soon",
        image: listing?.image || "/images/blogs/default.webp",
        author: "VMLS Editorial",
        category: null as string | null,
        html: "<p>Full content for this blog post is coming soon. Please check back later.</p>",
        faqs: [] as { question: string; answerHtml: string }[],
        tags: [] as string[],
        lastUpdated: null as string | null,
      };

  const currentIndex = blogPosts.findIndex((p) => p.slug === slugStr);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : null;

  const displayTags =
    post.tags.length > 0
      ? post.tags
      : post.category
        ? [post.category]
        : [];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#800000] text-white py-12 sm:py-16 md:py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[#fbb03b] mb-6 sm:mb-8 font-bold uppercase tracking-widest text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link>
            <span className="text-white/30">/</span>
            <span className="truncate max-w-[45vw] sm:max-w-[200px] md:max-w-none">{post.title}</span>
          </nav>
          <h1 className="font-playfair text-2xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium">By {post.author || "VMLS Editorial"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium">{post.date}</span>
            </div>
            {post.category && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#fbb03b]">{post.category}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16">
          
          {/* Main Content Area */}
          <article className="flex-grow lg:max-w-[55%] min-w-0">
            <header className="mb-8 hidden">
              <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-500 border-y border-gray-100 py-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#a31f34]" />
                  <span className="text-sm font-medium">By {post.author || "VMLS Editorial"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#a31f34]" />
                  <span className="text-sm font-medium">{post.date}</span>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  <Share2 className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#a31f34] transition-colors" />
                  <div className="flex items-center gap-3">
                    <Link href="#" className="hover:text-[#0077b5] transition-colors">
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </Link>
                    <Link href="#" className="hover:text-[#e4405f] transition-colors">
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    </Link>
                    <Link href="#" className="hover:text-[#1da1f2] transition-colors">
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                    </Link>
                    <Link href="#" className="hover:text-[#1877f2] transition-colors">
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </header>

            <div className="relative aspect-[1.91/1] mb-10 rounded-2xl rounded-tr-none overflow-hidden shadow-lg group">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>

            <div className="font-inter text-gray-700 text-lg leading-relaxed blog-content-container">
              <BlogArticleContent html={post.html} faqs={post.faqs} />
            </div>

            {/* Tags + last updated — our design, live content */}
            {(displayTags.length > 0 || post.lastUpdated) && (
              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {displayTags.map((tag) => (
                    <Link key={tag} href="/blogs" className="blog-tag-pill">
                      {tag}
                    </Link>
                  ))}
                </div>
                {post.lastUpdated && (
                  <p className="text-sm text-gray-500 font-inter whitespace-normal sm:whitespace-nowrap">
                    Last updated on {post.lastUpdated}
                  </p>
                )}
              </div>
            )}

            {/* Previous / Next post navigation */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blogs/${prevPost.slug}`}
                  className="group flex gap-3 items-start rounded-xl border border-gray-100 p-4 hover:border-[#a31f34]/30 hover:bg-[#fcfbf9] transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-[#a31f34] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="blog-post-nav-label">Previous Post</div>
                    <div className="font-inter font-semibold text-[#1a1a1a] group-hover:text-[#a31f34] line-clamp-2 leading-snug">
                      {prevPost.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  href={`/blogs/${nextPost.slug}`}
                  className="group flex gap-3 items-start justify-end text-right rounded-xl border border-gray-100 p-4 hover:border-[#a31f34]/30 hover:bg-[#fcfbf9] transition-all md:ml-auto"
                >
                  <div>
                    <div className="blog-post-nav-label">Next Post</div>
                    <div className="font-inter font-semibold text-[#1a1a1a] group-hover:text-[#a31f34] line-clamp-2 leading-snug">
                      {nextPost.title}
                    </div>
                  </div>
                  <div className="relative w-[75px] h-[75px] rounded-lg overflow-hidden flex-shrink-0 hidden sm:block">
                    <Image
                      src={nextPost.image}
                      alt={nextPost.title}
                      fill
                      className="object-cover"
                      sizes="75px"
                    />
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#a31f34] mt-0.5 flex-shrink-0 sm:hidden" />
                </Link>
              )}
            </div>
          </article>

          {/* Sidebar - Top Articles */}
          <aside className="lg:w-[45%]">
            <div className="sticky top-24 bg-[#fcfbf9] rounded-2xl border border-gray-100 p-5 sm:p-8">
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-6 sm:mb-8 relative inline-block">
                Our Top <span className="text-[#a31f34]">Articles</span>
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#a31f34]"></span>
              </h2>

              <div className="space-y-8">
                {topArticles.map((article, idx) => (
                  <Link
                    key={idx}
                    href={`/blogs/${article.slug}`}
                    className="group flex flex-col gap-4 border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-inter font-bold text-[#1a1a1a] group-hover:text-[#a31f34] transition-colors line-clamp-2 leading-snug">
                          {article.title}
                        </h4>
                        <span className="text-xs text-gray-400 mt-1 font-medium">{article.date}</span>
                      </div>
                    </div>
                    {article.excerpt && (
                      <p className="text-sm text-gray-600 line-clamp-2 font-inter leading-relaxed">
                        {article.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          </div>
        </div>
      </section>
    </main>
  );
}
