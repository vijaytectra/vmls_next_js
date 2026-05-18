"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

type WPPost = {
  id: number;
  title: { rendered: string };
  link: string;
  date: string;
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string }>;
  };
};

const blogPosts = [
  {
    title: "CLE in Healthcare Laws & Patient Rights",
    date: "July 03, 2025",
    image: "/images/blogs/cle-in-healthcare.webp",
    slug: "cle-impact-on-healthcare-laws-and-patients-rights-in-india"
  },
  {
    title: "Global Perspectives on Clinical Legal Education",
    date: "July 02, 2025",
    image: "/images/blogs/global.webp",
    slug: "global-perspective-clinical-legal-education"
  },
  {
    title: "Shaping Legal Futures CLE & Constitutional Law",
    date: "July 01, 2025",
    image: "/images/blogs/shaping-legal.webp",
    slug: "shaping-legal-futures-cle-and-constitutional-law"
  },
  {
    title: "Law and Economics in Clinical Legal Education",
    date: "June 30, 2025",
    image: "/images/blogs/law-and-economics-in-clinical-legal-education.webp",
    slug: "law-and-economics-in-clinical-legal-education-recasting-experiential-learning-in-the-5-year-llb-program"
  },
  {
    title: "How CLE Enhances Legal Skills & Social Justice",
    date: "July 06, 2025",
    image: "/images/blogs/how-cle-enhances-legal-skills-and-social-justice.webp",
    slug: "fostering-legal-skills-and-advancing-social-justice-through-cle"
  },
  {
    title: "Justice at the Grassroots: CLE & Family Law",
    date: "July 05, 2025",
    image: "/images/blogs/justice-at-glassdoors.webp",
    slug: "justice-at-the-grassroots-clinical-legal-education-and-family-law-practice-in-india"
  },
  {
    title: "Decoding Competition Law: The CLE Approach",
    date: "July 04, 2025",
    image: "/images/blogs/understanding-competition-law-via-cle.webp",
    slug: "decoding-competition-law-the-cle-approach"
  },
  {
    title: "Empowering Women through Clinical Legal Education in India",
    date: "June 30, 2025",
    image: "/images/blogs/empowering-woman.webp",
    slug: "empowering-women-through-clinical-legal-education-in-india"
  },
  {
    title: "Why Clinical Legal Education and ADR Are Crucial for Indian Justice",
    date: "June 29, 2025",
    image: "/images/blogs/cle-and-adr.webp",
    slug: "why-clinical-legal-education-and-adr-are-crucial-for-indian-justice"
  },
  {
    title: "Teaching Criminal Law and Forensic Science with Clinical Legal Education",
    date: "June 28, 2025",
    image: "/images/blogs/criminal-law-and-forensics.webp",
    slug: "criminal-law-and-forensics-how-cle-shapes-legal-practice"
  },
  {
    title: "The lack of Clinical Legal Education in India and its implications",
    date: "June 27, 2025",
    image: "/images/blogs/20.webp",
    slug: "lack-of-clinical-legal-education-in-india"
  },
  {
    title: "LL.M. In Artificial Intelligence, Emerging Technologies and Intellectual Property Rights",
    date: "June 27, 2025",
    image: "/images/blogs/34.webp",
    slug: "llm-in-artificial-intelligence-emerging-technologies-and-intellectual-property-rights"
  },
  {
    title: "LLM in Criminal Law and Practice",
    date: "June 27, 2025",
    image: "/images/blogs/35.webp",
    slug: "llm-in-criminal-law-and-practice"
  },
  {
    title: "What is an LL.M.? Full Form, Programme, Course Duration, Admission 2025",
    date: "June 26, 2025",
    image: "/images/blogs/ll.m-full-form.webp",
    slug: "what-is-llm-master-of-law-degree"
  },
  {
    title: "Bringing Indian Contracts II to Life by Means of Clinical Legal Education for Law Students",
    date: "June 25, 2025",
    image: "/images/blogs/19.webp",
    slug: "bringing-indian-contracts-ii-to-life-clinical-legal-education-vmls"
  },
  {
    title: "Clinical Legal Education in India",
    date: "June 24, 2025",
    image: "/images/blogs/12.webp",
    slug: "clinical-legal-education-in-india"
  },
  {
    title: "Black Carbon and the Law's Response",
    date: "June 20, 2025",
    image: "/images/blogs/carbon.webp",
    slug: "black-carbon-and-the-law-response"
  },
  {
    title: "Empowering Future Advocates: The Clinical Legal Education Initiative at VMLS",
    date: "June 11, 2025",
    image: "/images/blogs/21.webp",
    slug: "empowering-future-advocates-clinical-legal-education-initiative-at-vmls"
  },
  {
    title: "How Clinical Legal Education Enhances Management Disciplines",
    date: "June 10, 2025",
    image: "/images/blogs/11.webp",
    slug: "how-clinical-legal-education-enhances-management-disciplines"
  },
  {
    title: "Important Component Of Clinical Legal Education",
    date: "June 09, 2025",
    image: "/images/blogs/18.webp",
    slug: "important-component-of-clinical-legal-education"
  },
  {
    title: "Empowering Future Human Rights Advocates",
    date: "June 06, 2025",
    image: "/images/blogs/13.webp",
    slug: "future-human-rights-advocates-clinical-legal-education"
  },
  {
    title: "Clinical Education In Financial Frauds",
    date: "June 05, 2025",
    image: "/images/blogs/14.webp",
    slug: "clinical-education-in-financial-frauds-white-collar-crimes"
  },
  {
    title: "Transforming Civil Procedure Learning in Chennai through Clinical Legal Education",
    date: "June 02, 2025",
    image: "/images/blogs/civil-procedure.webp",
    slug: "law-in-practice-civil-procedure-learning-in-chennai-through-clinical-legal-education"
  },
  {
    title: "Need for Environmental Law Clinics in India",
    date: "June 02, 2025",
    image: "/images/blogs/environmental.webp",
    slug: "need-for-environmental-law-clinics-in-india"
  },
  {
    title: "Top Bilingual Law Schools in Chennai",
    date: "May 27, 2025",
    image: "/images/blogs/bilingual.webp",
    slug: "top-bilingual-law-schools-in-chennai"
  },
  {
    title: "Beyond The Classroom Clinical Legal Education Promise",
    date: "May 23, 2025",
    image: "/images/blogs/beyond-class.webp",
    slug: "beyond-the-classroom-clinical-legal-education-promise"
  },
  {
    title: "Clinical Legal Education Justice for Marginalized",
    date: "May 22, 2025",
    image: "/images/blogs/marginalized.webp",
    slug: "clinical-legal-education-justice-for-marginalized"
  },
  {
    title: "Why Sharing Your Child's Exam Results Online Can Impact Their Future",
    date: "May 17, 2025",
    image: "/images/blogs/1.webp",
    slug: "why-sharing-your-childs-exam-results-online-can-impact-their-future"
  },
  {
    title: "Theory and Practice: CLE and Evidence Law Training",
    date: "May 17, 2025",
    image: "/images/blogs/2.webp",
    slug: "clinical-legal-education-and-evidence-law-training-in-india"
  },
  {
    title: "Clinical Legal Education in India",
    date: "May 14, 2025",
    image: "/images/blogs/clinical-legal.webp",
    slug: "why-clinical-legal-education-in-india-is-struggling"
  },
  {
    title: "Top 5 Legal Careers in India",
    date: "May 13, 2025",
    image: "/images/blogs/top-5-legal-careers.webp",
    slug: "top-5-legal-careers-in-india-2025"
  },
  {
    title: "How DeepSeek's AI is Shaping Litigation Support",
    date: "May 2, 2025",
    image: "/images/blogs/deepseek.webp",
    slug: "how-deepseeks-ai-is-shaping-litigation-support"
  },
  {
    title: "What is Financial Law?",
    date: "April 30, 2025",
    image: "/images/blogs/financial.webp",
    slug: "what-is-financial-law"
  },
  {
    title: "What is Corporate Law?",
    date: "April 29, 2025",
    image: "/images/blogs/corporate.webp",
    slug: "what-is-corporate-law"
  },
  {
    title: "Water Wars and International Law",
    date: "April 24, 2025",
    image: "/images/blogs/indus-water.webp",
    slug: "indus-waters-treaty-suspension-lessons-for-law-students"
  },
  {
    title: "LLM in Corporate & Financial Laws",
    date: "March 13, 2025",
    image: "/images/blogs/32.webp",
    slug: "llm-in-corporate-financial-laws"
  },
  {
    title: "LLM in Commercial Dispute Resolution",
    date: "March 12, 2025",
    image: "/images/blogs/33.webp",
    slug: "llm-in-commercial-dispute-resolution"
  },
  {
    title: "Ex Ante Regulation",
    date: "February 4, 2025",
    image: "/images/blogs/ex-ante.webp",
    slug: "ex-ante-regulation"
  },
  {
    title: "Merger Regulations Expansion Competition Developing Economies",
    date: "February 03, 2025",
    image: "/images/blogs/role-merger.webp",
    slug: "merger-regulations-expansion-competition-developing-economies"
  },
  {
    title: "Network Effects in Competition Law and Digital Markets",
    date: "January 31, 2025",
    image: "/images/blogs/network-effect.webp",
    slug: "network-effects-competition-law-digital-markets"
  },
  {
    title: "Mediation for Operational Creditors",
    date: "January 30, 2025",
    image: "/images/blogs/meditation.webp",
    slug: "mediation-for-operational-creditors"
  },
  {
    title: "SEBI Tightens Rules for Futures and Options Trading",
    date: "January 27, 2025",
    image: "/images/blogs/sebi.webp",
    slug: "sebi-tightens-rules-for-futures-options-trading"
  },
  {
    title: "Climate Finance Development in India",
    date: "January 24, 2025",
    image: "/images/blogs/cop29.webp",
    slug: "climate-finance-development-in-india-cop29"
  },
  {
    title: "One Year LLM Programme at VMLS",
    date: "January 21, 2025",
    image: "/images/blogs/1-year.webp",
    slug: "one-year-llm-programme-vmls"
  },
  {
    title: "5-Year Law Programme at VMLS",
    date: "January 08, 2025",
    image: "/images/blogs/5-Year.webp",
    slug: "5-year-llb-programme"
  },
  {
    title: "3-Year LLB Programme at VMLS",
    date: "January 07, 2025",
    image: "/images/blogs/3-Year.webp",
    slug: "3-year-llb-programme"
  },
  {
    title: "Vinayaka Mission's Law Admission Test (VLAT): A Complete Guide",
    date: "December 30, 2024",
    image: "/images/blogs/VLAT.png",
    slug: "vinayaka-missions-law-admission-test-VLAT"
  },
  {
    title: "Best Law Courses after 12th in India",
    date: "December 15, 2024",
    image: "/images/blogs/best-law-courses-after-12th.webp",
    slug: "best-law-courses-after-12th"
  },
  {
    title: "CLAT Exam: Everything You Need to Know",
    date: "December 10, 2024",
    image: "/images/blogs/clat-exam.webp",
    slug: "clat-exam-importance-eligibility-criteria-syllabus"
  },
  {
    title: "LL.B. Degree: Your Gateway to a Legal Career",
    date: "December 05, 2024",
    image: "/images/blogs/llb-degree.webp",
    slug: "llb-degree-your-gateway-to-a-legal-career"
  },
  {
    title: "LL.B. Course: Curriculum and Opportunities",
    date: "December 01, 2024",
    image: "/images/blogs/llb.webp",
    slug: "explore-diverse-career-opportunities-in-law-in-india-roles-necessary-skills-and-top-employers"
  },
  {
    title: "Subjects in Law Courses: A Comprehensive Overview",
    date: "November 25, 2024",
    image: "/images/blogs/subject-in-law-course.webp",
    slug: "types-of-law-courses-in-india"
  },
  {
    title: "Best Law Colleges in India: How to Choose the Right One",
    date: "December 23, 2024",
    image: "/images/blogs/best-law-colleges-india.webp",
    slug: "best-law-colleges-in-india-how-to-choose-the-right-one"
  }
];

export default function BlogsPage() {
  const [wpPosts, setWpPosts] = useState<WPPost[]>([]);
  const [wpLoading, setWpLoading] = useState(true);

  useEffect(() => {
    const fetchAllPosts = async () => {
      setWpLoading(true);
      try {
        let allPosts: WPPost[] = [];
        let page = 1;
        let totalPages = 1;

        // Fetch the first page to get total pages and initial data
        const response = await fetch(`https://vmls.edu.in/blog/wp-json/wp/v2/posts?per_page=100&_embed&page=${page}`);
        if (!response.ok) throw new Error("Failed to fetch posts");
        
        const data = await response.json();
        if (Array.isArray(data)) {
          allPosts = data;
          
          // Get total pages from headers if available
          const totalPagesHeader = response.headers.get("X-WP-TotalPages");
          if (totalPagesHeader) {
            totalPages = parseInt(totalPagesHeader);
          }

          // If more pages exist, fetch them
          if (totalPages > 1) {
            const pagePromises = [];
            for (let p = 2; p <= totalPages; p++) {
              pagePromises.push(
                fetch(`https://vmls.edu.in/blog/wp-json/wp/v2/posts?per_page=100&_embed&page=${p}`)
                  .then(res => res.ok ? res.json() : [])
              );
            }
            
            const extraPagesData = await Promise.all(pagePromises);
            extraPagesData.forEach(pData => {
              if (Array.isArray(pData)) {
                allPosts = [...allPosts, ...pData];
              }
            });
          }
        }
        
        setWpPosts(allPosts);
        setWpLoading(false);
      } catch (error) {
        console.error("Error fetching WP posts:", error);
        setWpLoading(false);
      }
    };

    fetchAllPosts();
  }, []);

  return (
    <main className="min-h-screen bg-[#f5f3ef]">
      {/* Header Section */}
      <section className="bg-[#800000] text-white py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[#fbb03b] mb-8 font-bold uppercase tracking-widest text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span>Blogs</span>
          </nav>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-tight">
            VMLS <span className="text-[#fbb03b]">Blogs</span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl font-inter leading-relaxed">
            Insights, academic perspectives, and legal discourse from the Vinayaka Mission&apos;s Law School community.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="py-12 px-[5%]">
        <div className="max-w-7xl mx-auto">

          {/* ── Latest from WordPress ── */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-inter font-bold text-[#a31f34] text-xs uppercase tracking-widest">Latest Posts</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mb-12">
            {wpLoading
              ? Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 animate-pulse">
                    <div className="aspect-[16/9] bg-gray-200" />
                    <div className="p-3 md:p-6 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-100 rounded w-1/2" />
                    </div>
                  </div>
                ))
              : wpPosts.map((post) => {
                  const imageUrl =
                    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ?? null;
                  
                  // Clean up titles more thoroughly
                  const title = post.title.rendered
                    .replace(/&amp;/g, "&")
                    .replace(/&#8211;/g, "–")
                    .replace(/&#8212;/g, "—")
                    .replace(/&#8217;/g, "'")
                    .replace(/&#8216;/g, "'")
                    .replace(/&quot;/g, '"')
                    .replace(/&#8220;/g, '"')
                    .replace(/&#8221;/g, '"')
                    .replace(/&#038;/g, "&");

                  const date = new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  });
                  return (
                    <a
                      key={post.id}
                      href={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
                    >
                      {/* Image */}
                      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                        {imageUrl ? (
                          <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 33vw"
                            unoptimized
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gradient-to-br from-[#a31f34]/10 to-[#800000]/20 flex items-center justify-center">
                            <span className="text-[#a31f34]/40 font-inter text-xs font-medium">VMLS Blog</span>
                          </div>
                        )}
                        {/* Latest badge */}
                        <span className="absolute top-2 left-2 bg-[#a31f34] text-white font-inter font-bold text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm">
                          Latest
                        </span>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                      </div>

                      {/* Content */}
                      <div className="p-3 md:p-6 flex flex-col flex-grow">
                        <h3
                          className="font-inter md:text-lg font-semibold text-[#1a1a1a] mb-2 md:mb-4 leading-tight min-h-[2.5rem] md:min-h-[3rem] group-hover:text-[#a31f34] transition-colors line-clamp-2"
                          dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                          <span className="font-medium text-gray-400">{date}</span>
                          <span className="text-[10px] font-inter text-[#a31f34] font-semibold uppercase tracking-wide">Read →</span>
                        </div>
                      </div>
                    </a>
                  );
                })}
          </div>


          {/* Existing static blogs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href={`/blogs/${post.slug}`}
                className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/9] overflow-hidden bg-white">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={index < 4}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500"></div>
                </div>

                {/* Content */}
                <div className="p-3 md:p-6 flex flex-col flex-grow">
                  <h3 className="font-inter md:text-lg font-semibold text-[#1a1a1a] mb-2 md:mb-4 leading-tight min-h-[2.5rem] md:min-h-[3rem] group-hover:text-[#a31f34] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <span className="font-medium text-gray-400">
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

