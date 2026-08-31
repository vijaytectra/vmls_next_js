"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArchitecturalSketch from "@/components/ArchitecturalSketch";

type ProgramKey = "LL.B. (Hons.)" | "B.A. LL.B. (Hons.)" | "B.B.A. LL.B. (Hons.)" | "B.Com. LL.B. (Hons.)";

interface ProgramDetail {
  title: string;
  badge: string;
  duration: string;
  eligibility: string;
  image: string;
  bannerImage: string;
  paragraphs: string[];
  stats: {
    number: string;
    label: string;
    color: "red" | "gray" | "blue";
  }[];
  credits: {
    label: string;
    value: string;
  }[];
  totalCredits: string;
  nonLawCourses: string[];
}

const PROGRAM_DETAILS: Record<ProgramKey, ProgramDetail> = {
  "LL.B. (Hons.)": {
    title: "3-Year LL.B. (Hons.) Programme",
    badge: "3-Year Post-Graduate Law Degree",
    duration: "3 Years (6 Semesters)",
    eligibility: "Bachelor's Degree in any discipline from a recognized university with min. 45% aggregate (42% OBC, 40% SC/ST). No upper age limit.",
    image: "/images/llb/1.webp",
    bannerImage: "/images/llb/2.webp",
    paragraphs: [
      "The 3-Year LL.B. (Hons.) at VMLS is a post-graduate professional law degree designed with the overarching objective of cultivating competent legal professionals equipped to navigate the diverse facets of the legal profession, corporate advisory, litigation, and judicial career pathways.",
      "Upon successful completion, our graduates possess a comprehensive skill set encompassing effective verbal and written communication, critical thinking, analytical prowess, logical reasoning, and adept problem-solving abilities. They demonstrate high-quality legal research and expertise in drafting, evaluating, and executing legal documents.",
      "Mentored by global pioneers at O.P. Jindal Global University (Institution of Eminence), VMLS provides a state-of-the-art curriculum with bilingual support, AI-era legal tools, court room simulations, and mandatory Tier-1 legal internships."
    ],
    stats: [
      { number: "24", label: "Law Core & Compulsory Courses", color: "red" },
      { number: "05", label: "Clinical Courses & Trial Advocacy", color: "gray" },
      { number: "10", label: "Electives (including 8 Honours Papers)", color: "blue" },
      { number: "02", label: "Professional Skill & Language Labs", color: "blue" },
      { number: "100%", label: "Mandatory Internships at Tier-1 Law Firms & Courts", color: "red" },
      { number: "140", label: "Total Programme Credit Requirement", color: "gray" }
    ],
    credits: [
      { label: "Law Core and Compulsory Courses (BCI Mandate)", value: "96" },
      { label: "Honours Electives & Specialisations", value: "24" },
      { label: "Clinical Courses (20) & Mandatory Internships (10)", value: "30" },
      { label: "Legal Research, Writing & Mooting Labs", value: "08" },
    ],
    totalCredits: "140",
    nonLawCourses: [
      "Legal Methods & Jurisprudential Philosophy",
      "Constitutional Law & Governance History",
      "Foundations of Legal Research & Analytics",
      "Bilingual Legal Advocacy & Court Craft",
      "Professional Ethics & Bar Bench Relations",
      "Alternative Dispute Resolution (ADR) & Mediation",
      "Cyber Law & Artificial Intelligence in Legal Practice",
      "Clinical Legal Aid & Access to Justice"
    ]
  },
  "B.A. LL.B. (Hons.)": {
    title: "5-Year B.A. LL.B. (Hons.) Integrated Programme",
    badge: "5-Year Integrated Dual Degree (Humanities & Law)",
    duration: "5 Years (10 Semesters)",
    eligibility: "10+2 / Higher Secondary Examination from any stream (Arts, Science, Commerce) with min. 45% aggregate (42% OBC, 40% SC/ST). Provisional entry for final-year 10+2 students.",
    image: "/images/llb/1.webp",
    bannerImage: "/images/llb/2.webp",
    paragraphs: [
      "Integrated law programs like the 5-Year B.A. LL.B. (Hons.) are revolutionising legal education in India, seamlessly blending humanities, social sciences, political philosophy, and law to produce versatile legal experts ready for litigation, corporate practice, judicial service, or public policy roles.",
      "At the forefront as Chennai's premier law college, VMLS offers this BCI-approved powerhouse program mentored by O.P. Jindal Global University (Institution of Eminence). Students gain foundational pre-law insights in early semesters before advancing into specialized honours streams, international human rights law, and capstone clinical experiences.",
      "This meticulously crafted multidisciplinary framework ensures graduates emerge as confident, adaptable legal powerhouses fluent in socio-political dynamics, policy formulation, and constitutional litigation."
    ],
    stats: [
      { number: "12", label: "Humanities & Social Science Stream Courses", color: "red" },
      { number: "24", label: "Law Core & Compulsory Courses", color: "gray" },
      { number: "05", label: "Clinical Courses & Moot Court Advocacy", color: "blue" },
      { number: "10", label: "Electives (including 8 Honours Specialisations)", color: "blue" },
      { number: "02", label: "English Language & Communication Courses", color: "gray" },
      { number: "100%", label: "Mandatory Internships & Professional Skill Labs", color: "red" }
    ],
    credits: [
      { label: "Law Core and BCI Compulsories", value: "96" },
      { label: "Electives (including 8 Honours Papers)", value: "40" },
      { label: "Humanities & Social Sciences Pre-Law Core", value: "48" },
      { label: "Clinical Courses (20) & Internships (10)", value: "30" },
      { label: "English Language Courses", value: "08" },
      { label: "Professional Skill & Research Labs", value: "08" }
    ],
    totalCredits: "230",
    nonLawCourses: [
      "Political Science I: Introduction to Fundamentals",
      "Legal and Constitutional History",
      "Foundations of Research (Course I)",
      "Foundations of Research (Course II)",
      "Sociology I: Essentials of Sociology",
      "Organizational Behaviour",
      "Exploring India: Interdisciplinary Insights",
      "Numerical Thinking & Accounting for Lawyers",
      "Economics I: Fundamentals of Economics",
      "Additional Compulsory Pre-Law Offerings",
      "Economics II: Law and Economics"
    ]
  },
  "B.B.A. LL.B. (Hons.)": {
    title: "5-Year B.B.A. LL.B. (Hons.) Integrated Programme",
    badge: "5-Year Integrated Dual Degree (Business & Law)",
    duration: "5 Years (10 Semesters)",
    eligibility: "10+2 / Higher Secondary Examination from any stream (Commerce, Business, Science, Arts) with min. 45% aggregate (42% OBC, 40% SC/ST). Provisional entry for final-year 10+2 students.",
    image: "/images/llb/1.webp",
    bannerImage: "/images/llb/2.webp",
    paragraphs: [
      "In today’s fast-paced corporate India, where boardroom decisions intersect with complex financial regulations, cross-border M&A deals, and fintech compliance, the 5-Year B.B.A. LL.B. (Hons) stands as the gold standard for aspiring corporate lawyers, in-house counsels, and business strategists.",
      "This powerhouse integrated program from VMLS fuses business administration essentials (finance, marketing, operations, entrepreneurship) with 24 BCI legal cores. Mentored by O.P. Jindal Global University, the curriculum incorporates immersive real-boardroom simulations, live regulatory compliance audits mirroring SEBI/NSE mandates, and M&A case studies.",
      "Graduates dominate in-house roles at top MNCs, Tier-1 corporate law firms (AZB, Trilegal, Cyril Amarchand), investment banking advisory, and high-growth startup legal departments."
    ],
    stats: [
      { number: "12", label: "Business Administration & Management Courses", color: "red" },
      { number: "24", label: "Law Core & Compulsory Courses", color: "gray" },
      { number: "05", label: "Clinical Courses & Corporate Simulation Labs", color: "blue" },
      { number: "10", label: "Electives (including 8 Corporate Honours Papers)", color: "blue" },
      { number: "02", label: "Business Communication & English Courses", color: "gray" },
      { number: "100%", label: "Mandatory Corporate Internships & Skill Labs", color: "red" }
    ],
    credits: [
      { label: "Law Core and BCI Compulsories", value: "96" },
      { label: "Corporate & Fintech Honours Electives", value: "40" },
      { label: "Business Administration & Management Core", value: "48" },
      { label: "Clinical Courses (20) & Corporate Internships (10)", value: "30" },
      { label: "Business Communication & English", value: "08" },
      { label: "Fintech & Corporate Skill Labs", value: "08" }
    ],
    totalCredits: "230",
    nonLawCourses: [
      "Principles of Management & Leadership",
      "Organizational Behaviour in Corporate Settings",
      "Financial Accounting & Analysis for Lawyers",
      "Managerial Economics & Market Structures",
      "Business Communication & Negotiation Skills",
      "Foundations of Business Research Methods",
      "Corporate Governance, CSR & ESG Frameworks",
      "Quantitative Techniques & Statistical Decision Making",
      "Business Environment, Strategy & Global Markets",
      "Digital Business, E-Commerce & Data Privacy Law",
      "Marketing Management & Consumer Protection Law"
    ]
  },
  "B.Com. LL.B. (Hons.)": {
    title: "5-Year B.Com. LL.B. (Hons.) Integrated Programme",
    badge: "5-Year Integrated Dual Degree (Commerce & Law)",
    duration: "5 Years (10 Semesters)",
    eligibility: "10+2 / Higher Secondary Examination (Commerce / Mathematics / Science / Arts preferred) with min. 45% aggregate (42% OBC, 40% SC/ST). Provisional entry for final-year 10+2 students.",
    image: "/images/llb/1.webp",
    bannerImage: "/images/llb/2.webp",
    paragraphs: [
      "In India’s dynamic financial landscape, where GST reforms, banking digitalisation, SEBI regulations, and IBC insolvency cases shape corporate destiny, the 5-Year B.Com. LL.B. (Hons) emerges as the definitive program for future tax strategists, financial litigators, and compliance leaders.",
      "Offered by VMLS, Chennai’s premier law college, this program bridges the gap between commerce and law through 12 commerce and accounting courses alongside 24 BCI law courses. Graduates command premium roles at Big 4 tax divisions (Deloitte, PwC, EY, KPMG), NCLT insolvency tribunals, and banking legal departments.",
      "Mentored by O.P. Jindal Global University, the curriculum features real-world case studies of landmark tax litigations, live GST compliance exercises, and masterclasses from SEBI regulators and insolvency professionals."
    ],
    stats: [
      { number: "12", label: "Commerce, Accounting & Finance Courses", color: "red" },
      { number: "24", label: "Law Core & Compulsory Courses", color: "gray" },
      { number: "05", label: "Clinical Courses & Tax Litigation Labs", color: "blue" },
      { number: "10", label: "Electives (including 8 Taxation & IBC Papers)", color: "blue" },
      { number: "02", label: "English & Commercial Writing Courses", color: "gray" },
      { number: "100%", label: "Mandatory Internships at Big 4 & Tax Divs", color: "red" }
    ],
    credits: [
      { label: "Law Core and BCI Compulsories", value: "96" },
      { label: "Taxation, Banking & IBC Honours Electives", value: "40" },
      { label: "Commerce, Accounting & Financial Management", value: "48" },
      { label: "Clinical Courses (20) & Financial Internships (10)", value: "30" },
      { label: "English Language & Professional Writing", value: "08" },
      { label: "Tax Analytics & Financial Skill Labs", value: "08" }
    ],
    totalCredits: "230",
    nonLawCourses: [
      "Financial Accounting & Auditing Fundamentals",
      "Corporate Accounting & Financial Reporting",
      "Business Economics & Public Finance Principles",
      "Direct & Indirect Taxation Principles (GST)",
      "Banking & Financial Market Regulatory Systems",
      "Foundations of Commercial Research Methods",
      "Cost & Management Accounting for Legal Practice",
      "Numerical Thinking & Tax Analytics for Lawyers",
      "Business Statistics & Quantitative Data Analysis",
      "Financial Restructuring & IBC Insolvency Foundations",
      "Commercial Law & SEBI Securities Market Framework"
    ]
  }
};

export default function LLBAdmissionsPage() {
  const [selectedProg, setSelectedProg] = useState<ProgramKey>("LL.B. (Hons.)");
  const activeDetail = PROGRAM_DETAILS[selectedProg];

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">LL.B. Admissions</span>
        </div>
      </nav>

      {/* Hero / Header Section */}
      <section className="relative px-[5%] pt-16 md:pt-28 pb-12 md:pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/llb/llb-header.webp"
            alt="LL.B. Admissions Background"
            fill
            className="object-cover object-center opacity-100 contrast-[1.05] brightness-90"
            priority
          />
          <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
            <div className="pl-6 md:pl-10">
              <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                LL.B. Admissions
              </h1>
              <p className="font-inter text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed font-medium">
                Undergraduate programmes: Build a foundation that will support your aspirations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Selector Tabs Section */}
      <section className="pt-10 pb-6 px-[5%] bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-6 leading-tight font-bold">
              Undergraduate Law Programmes
            </h2>

            {/* Interactive Programme Tabs */}
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center md:gap-5">
              {(["LL.B. (Hons.)", "B.A. LL.B. (Hons.)", "B.B.A. LL.B. (Hons.)", "B.Com. LL.B. (Hons.)"] as ProgramKey[]).map((prog) => {
                const isActive = selectedProg === prog;
                return (
                  <button
                    key={prog}
                    type="button"
                    onClick={() => setSelectedProg(prog)}
                    className={`px-3 py-3.5 md:px-7 md:py-4 font-inter font-bold text-[12px] sm:text-sm md:text-base text-center flex items-center justify-center transition-all duration-300 cursor-pointer ${
                      isActive
                        ? "bg-[#fbb03b] text-gray-950 shadow-[0_10px_30px_-5px_rgba(251,176,59,0.6)] scale-[1.03] ring-2 ring-[#a31f34]"
                        : "bg-gray-100 text-gray-700 hover:bg-[#fbb03b]/30 hover:text-gray-900 shadow-sm"
                    }`}
                  >
                    {prog}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Programme Details Section */}
      <section className="py-8 md:py-12 px-[5%] bg-white overflow-hidden relative">
        <ArchitecturalSketch />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14 relative z-10">
          {/* Left: Image */}
          <div className="lg:w-[38%] w-full shrink-0">
            <div className="relative w-full aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden rounded-xl">
              <Image
                src={activeDetail.image}
                alt={`${activeDetail.title} Classroom`}
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="mt-4 p-4 bg-[#f8f9fa] border-l-4 border-[#a31f34] rounded-r-lg shadow-sm">
              <span className="block font-inter text-xs uppercase font-bold tracking-wider text-[#a31f34] mb-1">Duration & Structure</span>
              <span className="block font-inter text-sm md:text-base font-semibold text-gray-800">{activeDetail.duration}</span>
              <span className="block font-inter text-xs text-gray-600 mt-2 leading-relaxed">{activeDetail.eligibility}</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-[62%] min-w-0">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34] rounded-full" />
              <div className="pl-6 md:pl-10 space-y-5 text-left">
                <span className="inline-block px-3 py-1 bg-[#a31f34]/10 text-[#a31f34] text-xs font-bold uppercase tracking-widest rounded-full">
                  {activeDetail.badge}
                </span>
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] leading-tight text-left font-bold">
                  {activeDetail.title}
                </h2>
                {activeDetail.paragraphs.map((para, idx) => (
                  <p key={idx} className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Structure & Stats Grid */}
      <section className="py-10 px-[5%] bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-10">
            <h3 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-2 font-bold">
              Program Highlights & Course Distribution
            </h3>
            <p className="text-gray-500 font-inter text-sm uppercase tracking-widest font-semibold">
              {activeDetail.title} Curriculum Breakdown
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeDetail.stats.map((stat, sIdx) => {
              const bgClass =
                stat.color === "red"
                  ? "bg-[#a31f34] text-white border-[#801829]"
                  : stat.color === "blue"
                  ? "bg-[#007ba8] text-white border-[#005a7d]"
                  : "bg-white text-gray-800 border-gray-200";

              return (
                <div
                  key={sIdx}
                  className={`p-8 flex flex-col items-center justify-center text-center space-y-4 border rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${bgClass}`}
                >
                  <span className="text-4xl md:text-5xl font-inter font-extrabold tracking-tight">
                    {stat.number}
                  </span>
                  <p className="font-inter text-sm md:text-base font-medium leading-snug opacity-95">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Credit Structure and Minimum Requirements Section */}
      <section className="py-12 px-[5%] bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border-t-8 border-[#a31f34] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] p-6 md:p-10 relative z-20 rounded-b-xl">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-2 font-bold">
                Credit Structure
              </h2>
              <p className="text-gray-500 font-inter text-xs uppercase tracking-[0.2em] font-bold">
                and Minimum Requirements ({selectedProg})
              </p>
            </div>

            <div className="space-y-0 relative">
              {activeDetail.credits.map((item, index) => (
                <div
                  key={index}
                  className="group flex justify-between items-start py-3.5 border-b border-gray-100 hover:bg-gray-50/80 px-2 sm:px-4 transition-all duration-300 rounded-lg gap-4"
                >
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a31f34]/30 group-hover:bg-[#a31f34] transition-colors mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-gray-700 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
                      {item.label}
                    </span>
                  </div>
                  <div className="flex items-baseline gap-1 sm:gap-2 flex-shrink-0 pt-0.5">
                    <span className="font-inter text-[#1a1a1a] font-bold text-base sm:text-xl md:text-2xl">
                      {item.value}
                    </span>
                    <span className="font-inter text-gray-400 text-[8px] sm:text-[10px] uppercase font-bold tracking-widest">
                      credits
                    </span>
                  </div>
                </div>
              ))}

              {/* Stylish Total Row */}
              <div className="mt-8 p-5 sm:p-6 bg-[#f8f9fa] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 rounded-xl border border-gray-100 shadow-inner overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#a31f34]"></div>
                <span className="font-inter text-[#1a1a1a] font-bold text-sm sm:text-lg uppercase tracking-widest relative z-10">
                  Total Requirement
                </span>
                <div className="flex items-baseline gap-2 relative z-10">
                  <span className="font-inter text-[#a31f34] font-extrabold text-3xl md:text-4xl">
                    {activeDetail.totalCredits}
                  </span>
                  <span className="font-inter text-[#a31f34]/60 font-bold text-xs uppercase tracking-widest">
                    credits
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compulsory Pre-Law / Stream Courses Section */}
      <section className="py-12 px-[5%] bg-gradient-to-b from-[#fcf8f2] to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-2 font-bold">
              Compulsory Core & Stream Courses ({selectedProg})
            </h2>
            <div className="w-24 h-1 bg-[#a31f34] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeDetail.nonLawCourses.map((course, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 border border-gray-100 flex items-center min-h-[100px] rounded-lg"
              >
                <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-[6px] bg-[#a31f34] transition-all duration-300 rounded-l-lg"></div>

                <div className="pl-2 group-hover:pl-4 transition-all duration-300">
                  <span className="font-inter text-gray-800 text-[15px] md:text-base font-semibold leading-relaxed group-hover:text-[#a31f34] transition-colors">
                    {course}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
