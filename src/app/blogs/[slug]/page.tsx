"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, User, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import BlogArticleContent from "@/components/BlogArticleContent";
import blogContent from "@/data/blogs/content.json";

const blogPosts = [
  {
    "title": "Corporate Law Courses in India: Best Law Degrees, Eligibility & Salary Insights",
    "date": "August 26, 2026",
    "image": "/images/blogs/corporate-law-courses-in-india-degrees-eligibility-salary__corporate-law-courses-in-india-degrees-eligibility-salary.png",
    "slug": "corporate-law-courses-in-india-degrees-eligibility-salary"
  },
  {
    "title": "Pursuing Criminal Law in Chennai: Curriculum, Degrees & Career Opportunities",
    "date": "August 25, 2026",
    "image": "/images/blogs/criminal-law-in-chennai-curriculum-degrees-careers__criminal-law-in-chennai-curriculum-degrees-careers.png",
    "slug": "criminal-law-in-chennai-curriculum-degrees-careers"
  },
  {
    "title": "SC's Handbook on Judgments and Gender: Explained",
    "date": "August 24, 2026",
    "image": "/images/blogs/supreme-court-handbook-judgments-gender-explained__supreme-court-handbook-judgments-gender-explained.png",
    "slug": "supreme-court-handbook-judgments-gender-explained"
  },
  {
    "title": "Personality Rights in India: The Law Behind AI Cases",
    "date": "August 23, 2026",
    "image": "/images/blogs/personality-rights-india-ai-deepfakes-law__personality-rights-india-ai-deepfakes-law.png",
    "slug": "personality-rights-india-ai-deepfakes-law"
  },
  {
    "title": "Tribunals Reforms Bill 2026: What It Means for India",
    "date": "August 22, 2026",
    "image": "/images/blogs/tribunals-reforms-bill-2026-national-tribunals-commission__tribunals-reforms-bill-2026-national-tribunals-commission.png",
    "slug": "tribunals-reforms-bill-2026-national-tribunals-commission"
  },
  {
    "title": "Third-Party Litigation Funding in India: A Guide",
    "date": "August 21, 2026",
    "image": "/images/blogs/third-party-litigation-funding-india-guide__third-party-litigation-funding-india-guide.png",
    "slug": "third-party-litigation-funding-india-guide"
  },
  {
    "title": "India's New Anti-Paper Leak Law: What It Means",
    "date": "August 20, 2026",
    "image": "/images/blogs/india-anti-paper-leak-law-2026-explained__india-anti-paper-leak-law-2026-explained.png",
    "slug": "india-anti-paper-leak-law-2026-explained"
  },
  {
    "title": "AIBE Guide: Eligibility, Pattern & Prep After Your LLB",
    "date": "August 17, 2026",
    "image": "/images/blogs/aibe-all-india-bar-exam-guide__AIBE Guide_ Eligibility, Pattern & Prep After Your LLB.png",
    "slug": "aibe-all-india-bar-exam-guide"
  },
  {
    "title": "What Does BCI Approval Mean for a Law College?",
    "date": "August 17, 2026",
    "image": "/images/blogs/what-does-bci-approval-mean-law-college__What Does BCI Approval Mean for a Law College.png",
    "slug": "what-does-bci-approval-mean-law-college"
  },
  {
    "title": "Moot Court in Law School: Why It Matters & How to Start",
    "date": "August 17, 2026",
    "image": "/images/blogs/moot-court-law-school-why-it-matters__Moot Court in Law School_ Why It Matters & How to Start.png",
    "slug": "moot-court-law-school-why-it-matters"
  },
  {
    "title": "Law School Internships: A Year-by-Year Guide",
    "date": "August 17, 2026",
    "image": "/images/blogs/law-school-internships-year-by-year-guide__Law School Internships_ A Year-by-Year Guide.png",
    "slug": "law-school-internships-year-by-year-guide"
  },
  {
    "title": "Global Exposure in Indian Law Schools: Why It Matters",
    "date": "August 17, 2026",
    "image": "/images/blogs/global-exposure-indian-law-schools-mentorship__Global Exposure in Indian Law Schools_ Why It Matters.png",
    "slug": "global-exposure-indian-law-schools-mentorship"
  },
  {
    "title": "CLAT 2027: Exam Dates, Eligibility, Syllabus & Admission Pathways to Top Law Colleges in India",
    "date": "August 14, 2026",
    "image": "/images/blogs/clat-2027-exam-dates-eligibility-syllabus-and-admission__clat-2027.png",
    "slug": "clat-2027-exam-dates-eligibility-syllabus-and-admission"
  },
  {
    "title": "Scholarships for Law Students in India: Merit, Need-Based & Women-Focused Aid Explained",
    "date": "July 25, 2026",
    "image": "/images/blogs/scholarships-for-law-students-in-india__Scholarships for Law Students in India Explained.png",
    "slug": "scholarships-for-law-students-in-india"
  },
  {
    "title": "How to Become a Judge in India After LLB: Judicial Services Exam Guide",
    "date": "July 24, 2026",
    "image": "/images/blogs/how-to-become-a-judge-in-india-after-llb__How to Become a Judge in India After LLB.png",
    "slug": "how-to-become-a-judge-in-india-after-llb"
  },
  {
    "title": "Career After LLB: Litigation vs Corporate Law vs Judiciary — Which Should You Choose?",
    "date": "July 23, 2026",
    "image": "/images/blogs/career-after-llb-litigation-vs-corporate-vs-judiciary__Career After LLB.png",
    "slug": "career-after-llb-litigation-vs-corporate-vs-judiciary"
  },
  {
    "title": "How to Prepare for VLAT: Syllabus, Study Plan & Mock Test Strategy",
    "date": "July 22, 2026",
    "image": "/images/blogs/how-to-prepare-for-vlat-study-plan__How to Prepare for VLAT.png",
    "slug": "how-to-prepare-for-vlat-study-plan"
  },
  {
    "title": "LLB Fees in India: Complete Cost Breakdown for 3-Year, 5-Year, BA/BBA/BCom LLB",
    "date": "July 21, 2026",
    "image": "/images/blogs/llb-fees-in-india-complete-cost-breakdown__LLB Fees in India.png",
    "slug": "llb-fees-in-india-complete-cost-breakdown"
  },
  {
    "title": "Law Entrance Exams in India: CLAT vs VLAT vs State Law Exams",
    "date": "July 16, 2026",
    "image": "/images/blogs/law-entrance-exams-clat-vs-vlat-comparison__law-entrance-exams-in-india.png",
    "slug": "law-entrance-exams-clat-vs-vlat-comparison"
  },
  {
    "title": "BA LLB vs BBA LLB vs BCom LLB: Which 5-Year Law Degree Should You Pick?",
    "date": "July 15, 2026",
    "image": "/images/blogs/ba-llb-vs-bba-llb-vs-bcom-llb-comparison__ba-llb-vs-bba-llb-vs-bcom-llb.png",
    "slug": "ba-llb-vs-bba-llb-vs-bcom-llb-comparison"
  },
  {
    "title": "LLM in India: Specialisations, Eligibility & Top LLM Colleges in Chennai",
    "date": "July 14, 2026",
    "image": "/images/blogs/llm-specializations-guide-colleges-chennai__llm-in-india.png",
    "slug": "llm-specializations-guide-colleges-chennai"
  },
  {
    "title": "3-Year LLB Admission in Chennai & Tamil Nadu: Eligibility, Fees & Private Colleges",
    "date": "July 13, 2026",
    "image": "/images/blogs/3-year-llb-admission-chennai-tamilnadu__3yearllbadmissioninchennai.png",
    "slug": "3-year-llb-admission-chennai-tamilnadu"
  },
  {
    "title": "3-Year LLB vs 5-Year LLB: Which Law Programme Should You Choose?",
    "date": "July 12, 2026",
    "image": "/images/blogs/3-year-llb-vs-5-year-llb-comparison__3yearllbvs5yearllb.png",
    "slug": "3-year-llb-vs-5-year-llb-comparison"
  },
  {
    "title": "LLB Admission Dates 2026-27: Deadlines, Process, Documents & Step-by-Step Checklist",
    "date": "June 23, 2026",
    "image": "/images/blogs/llb-admission-dates-process-checklist-2026-27__LLB Fees in India 2026-27 & Admission Last Dates (1).png",
    "slug": "llb-admission-dates-process-checklist-2026-27"
  },
  {
    "title": "How to Choose the Right Law University in India: A 7-Point Framework",
    "date": "June 22, 2026",
    "image": "/images/blogs/how-to-choose-the-right-law-university-india__How to Choose the Right Law University in India.png",
    "slug": "how-to-choose-the-right-law-university-india"
  },
  {
    "title": "LLM in Corporate Law: Scope, Salary, Specialisations & Why 2026-27 Is the Best Time to Enrol",
    "date": "June 21, 2026",
    "image": "/images/blogs/llm-corporate-law-career-scope-2026-27__LLM in Corporate Law.png",
    "slug": "llm-corporate-law-career-scope-2026-27"
  },
  {
    "title": "BCom LLB Colleges in India 2026-27: Course Details, Career Scope & How to Choose",
    "date": "June 20, 2026",
    "image": "/images/blogs/bcom-llb-colleges-india-2026-27__BCom LLB Colleges in India 2026-27.png",
    "slug": "bcom-llb-colleges-india-2026-27"
  },
  {
    "title": "LLB Fees in India 2026-27: What You Actually Pay — and What You Get",
    "date": "June 19, 2026",
    "image": "/images/blogs/llb-fees-india-2026-27__LLB Fees in India 2026-27.png",
    "slug": "llb-fees-india-2026-27"
  },
  {
    "title": "LLM Entrance Exam in India 2026-27: CLAT PG, AILET PG, VLAT & Preparation Guide",
    "date": "June 12, 2026",
    "image": "/images/blogs/llm-entrance-exam-india-2026-27__llm-entrance-exam-india-2026-27.png",
    "slug": "llm-entrance-exam-india-2026-27"
  },
  {
    "title": "Top LLM Colleges in India 2026-27: Rankings, Specialisations & Admission Guide",
    "date": "June 12, 2026",
    "image": "/images/blogs/top-llm-colleges-in-india-2026-27__top-llm-colleges-in-india-2026-27.png",
    "slug": "top-llm-colleges-in-india-2026-27"
  },
  {
    "title": "LLM Programme in India 2026-27: Everything You Need to Know Before You Enrol",
    "date": "June 12, 2026",
    "image": "/images/blogs/llm-programme-in-india-2026-27__llm-programme-in-india-2026-27.png",
    "slug": "llm-programme-in-india-2026-27"
  },
  {
    "title": "LL.M. in AI, Emerging Technologies & IPR: The Law Degree for the Future",
    "date": "May 26, 2026",
    "image": "/images/blogs/llm-in-artificial-intelligence-emerging-technologies-and-intellectual-property-rights__LL.M. AI Emerging Technologies and IPR.png",
    "slug": "llm-in-artificial-intelligence-emerging-technologies-and-intellectual-property-rights"
  },
  {
    "title": "LL.M. in Criminal Law and Practice at VMLS: Scope, Syllabus & Careers",
    "date": "May 25, 2026",
    "image": "/images/blogs/llm-in-criminal-law-and-practice__LL.M. Criminal Law and Practice at VMLS.png",
    "slug": "llm-in-criminal-law-and-practice"
  },
  {
    "title": "LL.M. in Commercial Dispute Resolution: Arbitration, Mediation & Careers",
    "date": "May 22, 2026",
    "image": "/images/blogs/llm-in-commercial-dispute-resolution__LL.M. Commercial Dispute Resolution.png",
    "slug": "llm-in-commercial-dispute-resolution"
  },
  {
    "title": "LL.M. in Corporate and Financial Laws: Scope, Syllabus & Careers",
    "date": "May 21, 2026",
    "image": "/images/blogs/llm-in-corporate-financial-laws__LL.M. Corporate and Financial Laws.png",
    "slug": "llm-in-corporate-financial-laws"
  },
  {
    "title": "LLB Admission 2026: Eligibility, Dates, Process & How to Apply",
    "date": "May 20, 2026",
    "image": "/images/blogs/llb-admission-2026__LLB Admission 2026 India.png",
    "slug": "llb-admission-2026"
  },
  {
    "title": "BBA LLB Colleges in India — Course, Eligibility, Scope & Admission 2026",
    "date": "May 19, 2026",
    "image": "/images/blogs/bba-llb-colleges-in-india-2026__BBA  LLB  Colleges in India 2026.png",
    "slug": "bba-llb-colleges-in-india-2026"
  },
  {
    "title": "Bilingual Law School in Chennai: Why Studying Law in Tamil and English Changes Everything",
    "date": "May 16, 2026",
    "image": "/images/blogs/bilingual-law-school-chennai-2026__Bilingual Law School in Chennai.png",
    "slug": "bilingual-law-school-chennai-2026"
  },
  {
    "title": "Best Law Colleges in India 2026: Top Law Schools, Rankings & How to Choose",
    "date": "May 15, 2026",
    "image": "/images/blogs/best-law-colleges-in-india-2026__Best Law Colleges in India 2026.png",
    "slug": "best-law-colleges-in-india-2026"
  },
  {
    "title": "5-Year Integrated LLB Programme in India: Course Details, Eligibility & Admission 2026",
    "date": "May 14, 2026",
    "image": "/images/blogs/5-year-integrated-llb-programme-india-2026__5-Year-Integrated-LLB-Programme-India-2026.png",
    "slug": "5-year-integrated-llb-programme-india-2026"
  },
  {
    "title": "BA LLB (Hons.) Programme: Course Details, Eligibility, Fees & Career Scope 2026",
    "date": "May 13, 2026",
    "image": "/images/blogs/ba-llb-hons-programme-2026__BA LLB hons 2026.png",
    "slug": "ba-llb-hons-programme-2026"
  },
  {
    "title": "3-Year LLB Programme in India: Eligibility, Admission, Top Colleges & Career Scope (2026)",
    "date": "May 11, 2026",
    "image": "/images/blogs/what-is-llb-degree__3yearllb-in-india.png",
    "slug": "what-is-llb-degree"
  },
  {
    "title": "LLM Eligibility: Requirements for Master of Laws Admission",
    "date": "April 17, 2026",
    "image": "/images/blogs/vmls-open-day-2026__llm-eligibility-requirements.png",
    "slug": "vmls-open-day-2026"
  },
  {
    "title": "Law Courses After Graduation: Build Your Legal Career",
    "date": "April 3, 2026",
    "image": "/images/blogs/law-courses-after-graduation-2026__law-courses-after-graduation-build-your-legal-career.png",
    "slug": "law-courses-after-graduation-2026"
  },
  {
    "title": "Law Entrance Exams in India 2026: Complete Guide",
    "date": "March 10, 2026",
    "image": "/images/blogs/law-entrance-exams-in-india-2026-complete-guide__law-entrance-exams-in-india-2026.png",
    "slug": "law-entrance-exams-in-india-2026-complete-guide"
  },
  {
    "title": "Top Law Colleges in Tamil Nadu",
    "date": "March 3, 2026",
    "image": "/images/blogs/top-law-colleges-in-tamil-nadu__top-law-colleges-in-tamil-nadu.png",
    "slug": "top-law-colleges-in-tamil-nadu"
  },
  {
    "title": "BA LLB Course in India: Eligibility, Fees, Duration & Best Law Colleges",
    "date": "February 27, 2026",
    "image": "/images/blogs/ba-llb-course-in-india-eligibility-fees-duration-best-law-colleges__ba-llb-course-in-india.png",
    "slug": "ba-llb-course-in-india-eligibility-fees-duration-best-law-colleges"
  },
  {
    "title": "BA LLB Admission 2026: Eligibility, Application Process, Fees & Career Opportunities",
    "date": "February 25, 2026",
    "image": "/images/blogs/ba-llb-admission-2026-eligibility-application-process-fees-career-opportunities__ba-llb-admission-2026.png",
    "slug": "ba-llb-admission-2026-eligibility-application-process-fees-career-opportunities"
  },
  {
    "title": "Law Entrance Exam in India: Complete Guide to VLAT 2026",
    "date": "January 19, 2026",
    "image": "/images/blogs/law-entrance-exam-vlat__law-entrance-exam-vlat.png",
    "slug": "law-entrance-exam-vlat"
  },
  {
    "title": "Top Law College in Chennai for LL.B., LL.M. & Ph.D. Admissions",
    "date": "October 11, 2025",
    "image": "/images/blogs/top-law-college-in-chennai-for-llb-llm-ph-d-admissions__top-law-college-in-chennai.png",
    "slug": "top-law-college-in-chennai-for-llb-llm-ph-d-admissions"
  },
  {
    "title": "The Best Law Colleges in India",
    "date": "October 9, 2025",
    "image": "/images/blogs/the-best-law-colleges-in-india__the-best-law-colleges-in-india.webp",
    "slug": "the-best-law-colleges-in-india"
  },
  {
    "title": "Bachelor’s Degree in Law: The Ultimate Guide to LLB Courses, Entrance Exams, and Career Opportunities",
    "date": "September 21, 2025",
    "image": "/images/blogs/bachelors-degree-in-law__bachelors-degree-in-law.png",
    "slug": "bachelors-degree-in-law"
  }
];

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

export default function BlogPost() {
  const { slug } = useParams();
  const slugStr = typeof slug === "string" ? slug : Array.isArray(slug) ? slug[0] : "";
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

            <div className="relative aspect-[16/9] mb-10 rounded-2xl rounded-tr-none overflow-hidden shadow-lg group">
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
