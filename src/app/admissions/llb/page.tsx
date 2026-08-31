"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArchitecturalSketch from "@/components/ArchitecturalSketch";
import { CheckCircle2, ArrowRight, BookOpen, GraduationCap, Award, Briefcase, FileText, Sparkles } from "lucide-react";

export default function LLBAdmissionsPage() {
  const [activeTab, setActiveTab] = useState("LL.B. (Hons.)");

  const handleTabClick = (prog: string) => {
    setActiveTab(prog);
    if (prog === "LL.B. (Hons.)") {
      setTimeout(() => {
        const element = document.getElementById("programme-content");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 50);
    }
  };

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

      {/* LL.B. Program — About-style section */}
      <section className="py-10 md:py-14 px-[5%] bg-white overflow-hidden relative">
        <ArchitecturalSketch />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-14 relative z-10">
          {/* Left: Image */}
          <div className="lg:w-[38%] w-full shrink-0">
            <div className="relative w-full aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden rounded-xl">
              <Image
                src="/images/llb/1.webp"
                alt="LL.B. Program Classroom"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-[62%] min-w-0">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34] rounded-full" />
              <div className="pl-6 md:pl-10 space-y-6 text-left">
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] leading-tight text-left">
                  LL.B. Program
                </h2>
                <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                  The Law Programme is designed with the overarching objective of cultivating competent legal professionals equipped to navigate the diverse facets of the legal profession and associated career pathways. Upon successful completion, our graduates will possess a comprehensive skill set encompassing effective verbal and written communication, critical thinking, analytical prowess, logical reasoning, and adept problem-solving abilities.
                </p>
                <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                  They will have acquired a robust foundation across all studied courses, demonstrating proficiency in conducting high-quality legal research and the preparation, examination, evaluation, and execution of legal documents. Furthermore, graduates will exhibit a profound understanding of contemporary social issues, engaging with them in a creative and solution-oriented manner.
                </p>
                <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                  This holistic approach extends to instilling a sense of social responsibility, encouraging active participation in civic duties, and fostering a commitment to ongoing self-reflection and lifelong learning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Undergraduate Law Programmes Section */}
      <section className="pt-4 md:pt-6 pb-6 md:pb-8 px-[5%] bg-white relative overflow-hidden">
        {/* Faded Background Image Wrapper */}
        <div className="absolute top-0 left-0 right-0 h-[400px] opacity-[0.07] pointer-events-none">
          <Image
            src="/images/llb/3.webp"
            alt="Background Texture"
            fill
            className="object-cover object-top grayscale"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-8 leading-tight">
              Undergraduate Law Programmes
            </h2>

            {/* Interactive Programme Tabs */}
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center md:gap-6">
              {[
                "LL.B. (Hons.)",
                "B.A. LL.B. (Hons.)",
                "B.B.A. LL.B. (Hons.)",
                "B.Com. LL.B. (Hons.)"
              ].map((prog) => (
                <button
                  key={prog}
                  type="button"
                  onClick={() => handleTabClick(prog)}
                  className={`px-4 py-3.5 md:px-8 md:py-4 font-inter font-bold text-xs sm:text-sm md:text-base text-center transition-all duration-300 cursor-pointer ${
                    activeTab === prog
                      ? "bg-[#a31f34] text-white shadow-[0_10px_30px_-5px_rgba(163,31,52,0.5)] scale-105"
                      : "bg-[#fbb03b] text-gray-900 shadow-[0_10px_30px_-10px_rgba(251,176,59,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(251,176,59,0.6)] hover:-translate-y-0.5"
                  }`}
                >
                  {prog}
                </button>
              ))}
            </div>
          </div>

          {/* Main Grid: Image + Stats */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch mb-12">
            {/* Left Side: Image with Frame */}
            <div className="lg:w-[50%] flex justify-center items-center">
              <div className="relative w-full aspect-[4/3] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:-translate-y-2">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/images/llb/2.webp"
                    alt="VMLS Learning Environment"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Stats Grid */}
            <div className="lg:w-[50%] grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1: Red */}
              <div className="bg-[#a31f34] p-8 flex flex-col items-center justify-center text-center text-white space-y-4 border border-[#801829] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight">12</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">Undergraduate Courses from Respective Bachelor's Stream</p>
              </div>

              {/* Card 2: Gray */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col items-center justify-center text-center text-gray-800 space-y-4 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight">24</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">Law Core and Compulsory Courses</p>
              </div>

              {/* Card 3: Blue */}
              <div className="bg-[#007ba8] p-8 flex flex-col items-center justify-center text-center text-white space-y-4 border border-[#005a7d] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight">05</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">Clinical Courses</p>
              </div>

              {/* Card 4: Blue */}
              <div className="bg-[#007ba8] p-8 flex flex-col items-center justify-center text-center text-white space-y-4 border border-[#005a7d] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight">10</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">Electives (including 8 honors papers)</p>
              </div>

              {/* Card 5: Gray */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col items-center justify-center text-center text-gray-800 space-y-4 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight">02</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">English Language Courses</p>
              </div>

              {/* Card 6: Red */}
              <div className="bg-[#a31f34] p-8 flex flex-col items-center justify-center text-center text-white space-y-4 border border-[#801829] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight text-center leading-none">100%</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">Mandatory Internships and Professional Skill Labs</p>
              </div>
            </div>
          </div>

          {/* DETAILED 3-YEAR LL.B. (HONS.) GUIDE CONTENT SECTION (Immediately Below Buttons/Stats) */}
          {activeTab === "LL.B. (Hons.)" && (
            <div id="programme-content" className="pt-4 space-y-12 transition-all duration-500">
              
              {/* Section Header Banner */}
              <div className="bg-[#800000] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-xl">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 bg-[#fbb03b] text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles size={14} />
                    <span>3-Year LL.B. (Hons.) Programme Guide</span>
                  </div>
                  <h3 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                    Three-Year LL.B. (Hons.) at VMLS
                  </h3>
                  <p className="font-inter text-lg md:text-xl text-gray-200 max-w-3xl leading-relaxed">
                    Programme Overview, Eligibility, Admission Process (VLAT), Pre-Law Courses, and Career Scope.
                  </p>
                </div>
                <div className="absolute right-[-10%] bottom-[-20%] w-[350px] h-[350px] bg-[#fbb03b]/10 rounded-full blur-3xl pointer-events-none"></div>
              </div>

              {/* Grid 1: Overview & Why Pursue */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Card 1: Programme Overview */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-red-50 text-[#a31f34] rounded-xl flex items-center justify-center font-bold">
                    <BookOpen size={24} />
                  </div>
                  <h4 className="font-playfair text-2xl font-bold text-[#1a1a1a]">
                    LL.B. (Hons.) Program Overview
                  </h4>
                  <p className="font-inter text-gray-700 leading-relaxed text-base">
                    VMLS’s 3-Year LL.B (Hons) is an undergraduate professional degree (230 credits total), fully compliant with Bar Council of India (BCI) standards and NEP 2020 guidelines. Mentored by O.P. Jindal Global University (Institution of Eminence), the programme delivers rigorous legal training integrated with hands-on clinical courses and real-world litigation experience.
                  </p>
                </div>

                {/* Card 2: Why Pursue LL.B (Hons) Today? */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-amber-50 text-[#fbb03b] rounded-xl flex items-center justify-center font-bold">
                    <Award size={24} />
                  </div>
                  <h4 className="font-playfair text-2xl font-bold text-[#1a1a1a]">
                    Why Pursue LL.B. (Hons) Today?
                  </h4>
                  <p className="font-inter text-gray-700 leading-relaxed text-base">
                    In India’s evolving legal landscape, marked by digital laws, climate justice, and corporate growth, a 3-year LL.B (Hons) bridges undergraduate knowledge with specialized legal skills. Law is surging as a powerhouse field in India, driven by economic liberalization and global trade complexities.
                  </p>
                </div>
              </div>

              {/* Eligibility & Required Documents */}
              <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-50 text-[#a31f34] rounded-lg flex items-center justify-center font-bold">
                    <GraduationCap size={20} />
                  </div>
                  <h4 className="font-playfair text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                    Eligibility Criteria & Documentation
                  </h4>
                </div>
                <p className="font-inter text-gray-700 leading-relaxed text-base">
                  Entry to VMLS’s flagship 3-year LL.B (Hons) is open to bachelor’s degree holders in any discipline from a recognized university.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-2">
                  {[
                    "Bachelor's Degree Marksheets & Certificate",
                    "10+2 / Higher Secondary Certificate",
                    "Category Proof (if applicable)",
                    "Valid Photo ID (Aadhaar / PAN)",
                    "Passport Size Photographs",
                    "VLAT / Entrance Scorecard"
                  ].map((doc, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3.5 bg-white rounded-xl border border-gray-200 text-sm font-semibold text-gray-800">
                      <CheckCircle2 size={18} className="text-[#a31f34] shrink-0" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Admission Process via VLAT 2026 */}
              <div className="bg-gray-50 p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200 pb-6">
                  <div>
                    <h4 className="font-playfair text-2xl md:text-3xl font-bold text-[#1a1a1a]">
                      Admission Process (VLAT 2026)
                    </h4>
                    <p className="font-inter text-gray-600 text-sm mt-1">
                      Merit-cum-entrance based admission via Vinayaka Mission&apos;s Law Admission Test (VLAT), CUET-PG, CLAT, or LSAT.
                    </p>
                  </div>
                  <Link
                    href="https://admissions.vmls.edu.in/"
                    target="_blank"
                    className="inline-flex items-center gap-2 bg-[#a31f34] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-[#800000] transition-colors shrink-0 shadow-md"
                  >
                    <span>Apply Online</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>

                {/* 5 Step Admission Flow */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {[
                    { step: "01", title: "Register Online", desc: "Create an account at vmls.edu.in/vlat/ & verify email." },
                    { step: "02", title: "Fill Application", desc: "Enter academic details & upload docs (₹1000 fee)." },
                    { step: "03", title: "Appear for VLAT", desc: "60-min test (Legal Aptitude, Reasoning, GK, English)." },
                    { step: "04", title: "Results & Merit", desc: "Declared in 7 days based on entrance score + graduation marks." },
                    { step: "05", title: "Counselling", desc: "Receive offer letter & confirm seat with fee deposit." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-gray-200 space-y-2 relative">
                      <span className="font-inter font-extrabold text-2xl text-[#a31f34]">{item.step}</span>
                      <h5 className="font-inter font-bold text-gray-900 text-sm">{item.title}</h5>
                      <p className="font-inter text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Scholarship Highlight Banner */}
                <div className="bg-amber-100/60 border border-amber-300 p-6 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="space-y-1 text-center sm:text-left">
                    <h5 className="font-inter font-bold text-amber-950 text-base">Over 140 Scholarships Worth ₹60+ Lakhs</h5>
                    <p className="font-inter text-xs text-amber-900">Merit-based, need-based, and women-focused financial aid options available for 2026 intakes.</p>
                  </div>
                  <Link href="/scholarships" className="text-[#a31f34] font-bold text-sm hover:underline shrink-0">
                    Explore Scholarships →
                  </Link>
                </div>
              </div>

              {/* Career Scope & Skills Gained */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Career Scope */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-50 text-[#a31f34] rounded-lg flex items-center justify-center font-bold">
                      <Briefcase size={20} />
                    </div>
                    <h4 className="font-playfair text-2xl font-bold text-[#1a1a1a]">
                      Career Scope & Placement
                    </h4>
                  </div>
                  <p className="font-inter text-gray-700 text-base leading-relaxed">
                    After clearing the All India Bar Exam (AIBE), graduates can practice in courts. Diverse pathways exist across government and private sectors:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Advocate / Trial Practitioner at High Courts & Supreme Court",
                      "Corporate Legal Consultant & In-House Counsel",
                      "Judicial Officer & Civil Judge",
                      "Public Prosecutor & Legal Advisor",
                      "Compliance Officer & Regulatory Specialist",
                      "Human Rights Lawyer & NGO Legal Lead",
                      "Legal Researcher & Law Professor"
                    ].map((career, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2.5 font-inter text-sm font-semibold text-gray-800">
                        <div className="w-1.5 h-1.5 bg-[#a31f34] rounded-full shrink-0"></div>
                        <span>{career}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Gained */}
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-50 text-[#fbb03b] rounded-lg flex items-center justify-center font-bold">
                      <FileText size={20} />
                    </div>
                    <h4 className="font-playfair text-2xl font-bold text-[#1a1a1a]">
                      Core Skills Gained
                    </h4>
                  </div>
                  <p className="font-inter text-gray-700 text-base leading-relaxed">
                    Graduates from VMLS emerge with high-calibre practical skills engineered for the modern legal profession:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      "Written & Verbal Advocacy",
                      "High-Calibre Legal Research",
                      "Instrument Drafting & Scrutiny",
                      "Logical Reasoning & Analytics",
                      "Client Counselling & Negotiation",
                      "Social Accountability & Ethics"
                    ].map((skill, sIdx) => (
                      <div key={sIdx} className="p-3 bg-white rounded-lg border border-gray-200 font-inter text-xs font-bold text-gray-800 flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-[#a31f34] shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Choose VMLS Highlights */}
              <div className="bg-[#800000] text-white p-8 md:p-10 rounded-2xl space-y-6 shadow-lg">
                <h4 className="font-playfair text-2xl md:text-3xl font-bold">
                  Why Choose VMLS for 3-Year LL.B. (Hons)?
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 space-y-2">
                    <h5 className="font-inter font-bold text-lg text-[#fbb03b]">OPJGU Mentorship</h5>
                    <p className="font-inter text-xs text-gray-200 leading-relaxed">Exclusive curriculum design and faculty guidance from O.P. Jindal Global University (Institution of Eminence).</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 space-y-2">
                    <h5 className="font-inter font-bold text-lg text-[#fbb03b]">100% Internship Guarantee</h5>
                    <p className="font-inter text-xs text-gray-200 leading-relaxed">Assured internship placements in law firms, High Court chambers, corporate legal cells, and NGOs from Day 1.</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 space-y-2">
                    <h5 className="font-inter font-bold text-lg text-[#fbb03b]">Bilingual Pedagogy</h5>
                    <p className="font-inter text-xs text-gray-200 leading-relaxed">English & regional language support ensuring no learner is left behind, paired with smart digital classrooms.</p>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </section>

      {/* Credit Structure and Minimum Requirements Section */}
      <section className="pb-6 md:pb-8 px-[5%] bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Main Container with Stylish Border */}
          <div className="bg-white border-t-8 border-[#a31f34] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] p-6 md:p-10 relative z-20">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-3 font-bold">
                Credit Structure
              </h2>
              <p className="text-gray-500 font-inter text-xs uppercase tracking-[0.2em] font-bold">and Minimum Requirements</p>
            </div>

            <div className="space-y-0 relative">
              {[
                { label: "Law (BCI Core and Compulsories)", value: "96" },
                { label: "Electives (including non-taught credits)", value: "40" },
                { label: "Compulsories (Humanities, Social Sciences / Business)", value: "48" },
                { label: "Clinical Courses (20) and Internships (10)", value: "30" },
                { label: "English Language Courses", value: "08" },
                { label: "Laboratory and Practical Sessions", value: "08" },
              ].map((item, index) => (
                <div key={index} className="group flex justify-between items-start py-3.5 border-b border-gray-100 hover:bg-gray-50/80 px-2 sm:px-4 transition-all duration-300 rounded-lg gap-4">
                  <div className="flex items-start gap-2.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a31f34]/30 group-hover:bg-[#a31f34] transition-colors mt-2 flex-shrink-0"></div>
                    <span className="font-inter text-gray-700 text-xs sm:text-sm md:text-base font-medium leading-relaxed">{item.label}</span>
                  </div>
                  <div className="flex items-baseline gap-1 sm:gap-2 flex-shrink-0 pt-0.5">
                    <span className="font-inter text-[#1a1a1a] font-bold text-base sm:text-xl md:text-2xl">{item.value}</span>
                    <span className="font-inter text-gray-400 text-[8px] sm:text-[10px] uppercase font-bold tracking-widest">credits</span>
                  </div>
                </div>
              ))}

              {/* Stylish Total Row */}
              <div className="mt-10 p-5 sm:p-6 bg-[#f8f9fa] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 rounded-xl border border-gray-100 shadow-inner group overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#a31f34]"></div>
                <span className="font-inter text-[#1a1a1a] font-bold text-sm sm:text-lg uppercase tracking-widest relative z-10">Total Requirement</span>
                <div className="flex items-baseline gap-2 relative z-10">
                  <span className="font-inter text-[#a31f34] font-extrabold text-3xl md:text-4xl">230</span>
                  <span className="font-inter text-[#a31f34]/60 font-bold text-xs uppercase tracking-widest">credits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compulsory Non-Law Courses Section */}
      <section className="pt-6 md:pt-8 pb-12 px-[5%] bg-gradient-to-b from-[#fcf8f2] to-white relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute right-[-5%] top-[10%] w-[400px] h-[400px] bg-[#a31f34] opacity-[0.02] rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-2">
              Compulsory Non-Law courses for Integrated Law Programme
            </h2>
            <div className="w-24 h-1 bg-[#a31f34] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Political Science I: Introduction to Fundamentals",
              "Legal and Constitutional History",
              "Foundations of Research (Course I)",
              "Foundations of Research (Course II)",
              "Sociology I: Essentials of Sociology",
              "Organizational Behaviour",
              "Exploring India: Interdisciplinary Insights",
              "Numerical Thinking & Accounting",
              "Economics I: Fundamentals",
              "Additional Compulsory Core Offerings",
              "Economics II: Law and Economics"
            ].map((course, index) => (
              <div
                key={index}
                className="group relative bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 border border-gray-100 flex items-center min-h-[100px]"
              >
                {/* Side Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-[6px] bg-[#a31f34] transition-all duration-300"></div>

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
