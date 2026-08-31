"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blogs/posts";

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef]">
      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[450px]">
          <div className="lg:w-[45%] p-6 sm:p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <nav className="flex items-center gap-2 text-[#fbb03b] mb-8 font-bold uppercase tracking-widest text-xs">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span className="text-white/30">/</span>
              <span>Blogs</span>
            </nav>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              VMLS <span className="text-[#fbb03b]">Blogs</span>
            </h1>
            <p className="font-inter text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Insights, academic perspectives, and legal discourse from the Vinayaka Mission&apos;s Law School community.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[200px] sm:min-h-[240px] lg:min-h-[300px]">
            <Image
              src="/images/career-about-img.webp"
              alt="VMLS Blogs"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/15"></div>
          </div>
        </div>
      </section>

      {/* Blogs Grid — single continuous 4-col layout, no empty gaps */}
      <section className="py-12 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-[#1a1a1a] mb-8 md:mb-10">
            Top Stories
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 auto-rows-fr">
            {blogPosts.map((post, index) => (
              <Link
                key={`${post.slug}-${index}`}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 8}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                </div>

                <div className="p-3 md:p-6 flex flex-col flex-grow">
                  <h3 className="font-inter text-sm md:text-lg font-semibold text-[#1a1a1a] mb-2 md:mb-4 leading-tight min-h-[2.5rem] md:min-h-[3rem] group-hover:text-[#a31f34] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <span className="text-sm font-medium text-gray-400">
                      {post.date}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

