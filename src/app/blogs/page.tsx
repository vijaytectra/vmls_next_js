"use client";

import Image from "next/image";
import Link from "next/link";

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

