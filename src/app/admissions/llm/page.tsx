"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LLMAdmissionsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqData = [
    {
      q: "What is the duration and structure of the VMLS LL.M. program?",
      a: "The LL.M. program at VMLS is a one-year, full-time course designed to balance academic rigor with industry exposure through classroom study, research, capstone projects, and internships."
    },
    {
      q: "What are the eligibility criteria for admission to the LL.M. program?",
      a: "Applicants must hold an LL.B. or equivalent degree from a recognized university with a minimum required aggregate. Final-year students awaiting results can also apply."
    },
    {
      q: "What specializations are offered in the VMLS LL.M. program?",
      a: "VMLS offers LL.M. specializations in Corporate & Financial Laws, Commercial Dispute Resolution, Criminal Law and Practice, and Artificial Intelligence, Emerging Technologies & Intellectual Property Rights."
    },
    {
      q: "What is the admission process for the LL.M. program?",
      a: "Applicants need to complete the online application, appear for the Vinayaka Mission's Law Admission Test (VLAT), and participate in a personal interview. Selection is based on test scores, academic record, and performance in the interview."
    },
    {
      q: "Are scholarships or financial aid options available?",
      a: "Yes, VMLS provides various scholarship schemes and financial aid opportunities to meritorious and deserving students."
    },
    {
      q: "What kind of practical training or internships are included in the LL.M. curriculum?",
      a: "The LL.M. program incorporates mandatory internships with law firms, corporates, NGOs, or regulatory bodies, along with capstone projects and clinical courses for hands-on experience."
    },
    {
      q: "Who are the faculty and mentors for the LL.M. course?",
      a: "VMLS LL.M. faculty includes nationally and internationally recognized professors, experienced industry practitioners, and guest experts from top law firms and in-house legal teams."
    },
    {
      q: "What career prospects are available after completing the LL.M. at VMLS?",
      a: "Graduates pursue careers as corporate lawyers, litigators, in-house legal counsels, policy advisors, academics, and researchers, benefiting from strong placement and industry support."
    },
    {
      q: "Does the LL.M. program include research and dissertation work?",
      a: "Yes, students must undertake a dissertation project in their area of interest, with guidance by faculty mentors throughout the research and writing process."
    },
    {
      q: "How can I get more information or ask further questions about the VMLS LL.M. program?",
      a: "Prospective applicants can visit the official Vinayaka Mission's Law School website or contact the admissions team via email or phone for more personalized information."
    }
  ];
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">LL.M. Admissions</span>
        </div>
      </nav>

      {/* Hero / Header Section */}
      <section className="relative px-[5%] pt-10 md:pt-16 pb-8 md:pb-12 overflow-hidden bg-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/llm/llm-header.webp"
            alt="LL.M. Admissions Background"
            fill
            className="object-cover object-center opacity-100 contrast-[1.02] brightness-75"
            priority
          />
          {/* Subtle Overlays for Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent"></div>
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
            <div className="pl-6 md:pl-10">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 leading-tight">
                LL.M. Admissions
              </h1>
              <p className="font-inter text-lg md:text-xl text-gray-800 max-w-2xl leading-relaxed font-medium">
                Specialized legal education for professionals looking to deepen their expertise in specific branches of law and academic research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LL.M. Program Detail Section */}
      <section className="pt-8 md:pt-10 pb-4 px-[5%] bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Left Side: Framed Image */}
          <div className="lg:w-[45%] w-full flex justify-center items-center">
            <div className="relative w-full aspect-[16/10] bg-white p-1 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="relative w-full h-full overflow-hidden border border-gray-100">
                <Image
                  src="/images/llm/1.webp"
                  alt="LL.M. Program Discussion"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-[55%] flex flex-col justify-center">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-8 leading-tight">
              LL.M. Program
            </h2>

            <div className="space-y-8">
              {/* Highlighted Intro Paragraph with Red Accent Bar */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
                <p className="pl-6 md:pl-8 font-inter text-lg md:text-xl text-gray-800 leading-relaxed font-medium italic">
                  Our LL.M. program is a transformative journey that merges rigorous academic theory with real-world practice, positioning you as a future leader in law. In every element of the LL.M. curriculum, we emphasize industry exposure and innovative teaching.
                </p>
              </div>

              {/* Standard Paragraphs */}
              <div className="space-y-6">
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  Through collaborative group projects and immersive capstone experiences, LL.M. students engage with complex legal and corporate scenarios. Interactive sessions and lively discussions with industry experts are part and parcel of the LL.M. experience.
                </p>
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  Utilizing case studies, visual learning methods, and analytical exercises focused on landmark corporate shifts, our LL.M. program fosters mastery of high-level legal and financial concepts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postgraduate Specializations Section */}
      <section className="pt-4 pb-8 px-[5%] bg-white relative overflow-hidden">
        {/* Faded Background Image Wrapper */}
        <div className="absolute top-0 left-0 right-0 h-[400px] opacity-[0.07] pointer-events-none">
          <Image
            src="/images/llm/2.webp"
            alt="Background Texture"
            fill
            className="object-cover object-top grayscale"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center">
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-8 leading-tight">
              Postgraduate Specializations
            </h2>

            {/* Polished Flat Programme Buttons */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                'LL.M. in Corporate and Financial Laws', 
                'LL.M. in Commercial Dispute Resolution', 
                'LL.M. IN Criminal Law and Practice', 
                'LL.M. In Artificial Intelligence, Emerging Technologies and Intellectual Property Rights'
              ].map((prog) => (
                <div key={prog} className="px-8 py-4 bg-[#fbb03b] text-gray-900 font-inter font-bold text-sm md:text-base text-center shadow-[0_10px_30px_-10px_rgba(251,176,59,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(251,176,59,0.6)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                  {prog}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose VMLS for Your LL.M. Section */}
      <section className="pt-8 pb-8 px-[5%] bg-white relative overflow-hidden">
        {/* Subtle Background Pattern (Simplified SVG) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-10 text-center">
            Why Choose VMLS for Your LL.M.?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Collaborative Learning",
                content: "The LL.M. program at VMLS fosters teamwork through group projects, case studies, and live capstone experiences. Engage in discussions and problem solving activities inspired by real world legal cases and contemporary market issues."
              },
              {
                title: "Distinguished Faculty & Mentors",
                content: "Learn from highly qualified LL.M. faculty including professors from premium national and international universities. Guest lectures from Tier 1 law firm partners, arbitrators, and in house counsels enrich the LL.M. academic journey."
              },
              {
                title: "Innovative, Industry Focused Curriculum",
                content: "Every LL.M. course at VMLS features modules in emerging law and technology blockchain, AI, fintech, and digital regulations keeping you ahead of the curve in legal innovation."
              },
              {
                title: "Practice Ready Skills",
                content: "Enhance your legal research, critical thinking, analytical writing, and strategic litigation techniques. The LL.M. curriculum actively integrates trial practice, negotiation, legal analytics, and hands-on internships with renowned organizations."
              },
              {
                title: "Personalized Guidance",
                content: "Every LL.M. student receives dedicated dissertation support, mentorship, and feedback at every stage ensuring your academic work is aligned with industry trends."
              },
              {
                title: "Career Outcomes",
                content: "VMLS LL.M. graduates thrive as senior advocates, international lawyers, legal consultants, compliance officers, academics, research scholars, and corporate legal strategists. Our extensive career services and alumni network amplify your global legal career prospects."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-[#fff9e6] p-8 relative border border-yellow-100/50 shadow-sm hover:shadow-md transition-all duration-300">
                {/* Yellow Side Accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#fbb03b]"></div>

                <h3 className="font-inter font-bold text-lg text-[#1a1a1a] mb-4 leading-snug">
                  {feature.title}
                </h3>
                <p className="font-inter text-sm md:text-base text-gray-700 leading-relaxed">
                  {feature.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Detailed Curriculum Section: All Specializations in 2x2 Grid */}
      <section className="pt-4 pb-4 md:pt-6 md:pb-6 px-[4%] bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Box 1: Corporate and Financial Laws */}
            <div className="bg-white border-t-8 border-[#a31f34] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-6 md:p-8 relative z-10 flex flex-col">
              <div className="mb-8">
                <h2 className="font-playfair text-xl md:text-2xl text-[#1a1a1a] mb-4 leading-tight font-bold">
                  LL.M. in Corporate and Financial Laws
                </h2>
                <p className="font-inter text-gray-700 leading-relaxed text-xs">
                  Immerse yourself in the specialized LL.M. in Corporate and Financial Laws. This focused LL.M. program examines Comparative Corporate Governance, Financial Policy, and global issues in law and regulation.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-auto">
                <div>
                  <h3 className="font-inter font-black text-[10px] text-[#1a1a1a] mb-4 uppercase tracking-widest border-b border-[#a31f34] pb-1 inline-block">Sem 1</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Research Methods", credits: "3" },
                      { name: "Law & Justice", credits: "3" },
                      { name: "Public Law", credits: "3" },
                      { name: "Corp Governance", credits: "2" },
                      { name: "M&A", credits: "2" },
                      { name: "Dissertation I", credits: "1" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[10px] md:text-xs border-b border-gray-50 pb-1">
                        <span className="text-gray-700 truncate pr-2">{item.name}</span>
                        <span className="text-gray-400 font-bold shrink-0">{item.credits}C</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-inter font-black text-[10px] text-[#1a1a1a] mb-4 uppercase tracking-widest border-b border-[#a31f34] pb-1 inline-block">Sem 2</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Corp Insolvency", credits: "2" },
                      { name: "Optional I", credits: "1" },
                      { name: "Optional II", credits: "2" },
                      { name: "Capstone & Intern", credits: "3" },
                      { name: "Dissertation", credits: "3" },
                      { name: "Dissertation II", credits: "1" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[10px] md:text-xs border-b border-gray-50 pb-1">
                        <span className="text-gray-700 truncate pr-2">{item.name}</span>
                        <span className="text-gray-400 font-bold shrink-0">{item.credits}C</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: Commercial Dispute Resolution */}
            <div className="bg-white border-t-8 border-[#a31f34] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-6 md:p-8 relative z-10 flex flex-col">
              <div className="mb-8">
                <h2 className="font-playfair text-xl md:text-2xl text-[#1a1a1a] mb-4 leading-tight font-bold">
                  LL.M. in Commercial Dispute Resolution
                </h2>
                <p className="font-inter text-gray-700 leading-relaxed text-xs">
                  Crafted for those aspiring to master litigation and arbitration. Gain practice ready skills in resolving commercial disputes through specialized modules.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-auto">
                <div>
                  <h3 className="font-inter font-black text-[10px] text-[#1a1a1a] mb-4 uppercase tracking-widest border-b border-[#a31f34] pb-1 inline-block">Sem 1</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Research Methods", credits: "3" },
                      { name: "Law & Justice", credits: "3" },
                      { name: "Public Law", credits: "3" },
                      { name: "Arbitration", credits: "2" },
                      { name: "Comm. Courts", credits: "2" },
                      { name: "Dissertation I", credits: "1" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[10px] md:text-xs border-b border-gray-50 pb-1">
                        <span className="text-gray-700 truncate pr-2">{item.name}</span>
                        <span className="text-gray-400 font-bold shrink-0">{item.credits}C</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-inter font-black text-[10px] text-[#1a1a1a] mb-4 uppercase tracking-widest border-b border-[#a31f34] pb-1 inline-block">Sem 2</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Corp Insolvency", credits: "2" },
                      { name: "Optional I", credits: "1" },
                      { name: "Optional II", credits: "2" },
                      { name: "Capstone & Intern", credits: "3" },
                      { name: "Dissertation", credits: "3" },
                      { name: "Dissertation II", credits: "1" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-[10px] md:text-xs border-b border-gray-50 pb-1">
                        <span className="text-gray-700 truncate pr-2">{item.name}</span>
                        <span className="text-gray-400 font-bold shrink-0">{item.credits}C</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: Criminal Law and Practice */}
            <div className="bg-white border-t-8 border-[#a31f34] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-6 md:p-8 relative z-10 flex flex-col">
              <div className="mb-8">
                <h2 className="font-playfair text-xl md:text-2xl text-[#1a1a1a] mb-4 leading-tight font-bold">
                  LL.M. in Criminal Law and Practice
                </h2>
                <p className="font-inter text-gray-700 leading-relaxed text-xs">
                  Grow into a skilled criminal law specialist with theoretical knowledge and hands-on litigation abilities focused on today&apos;s dynamic arena.
                </p>
              </div>
              <div className="space-y-6 mt-auto">
                <div>
                  <h3 className="font-inter font-black text-[10px] text-[#1a1a1a] mb-2 uppercase tracking-widest border-b border-[#a31f34] pb-1 inline-block">Semester 1</h3>
                  <div className="space-y-1">
                    {[
                      { n: "Research Methods", c: "3" },
                      { n: "Public Law", c: "3" },
                      { n: "Law & Justice", c: "3" },
                      { n: "Criminal Theory", c: "2" },
                      { n: "Adv. Criminal Practice I", c: "2" },
                    ].map((i, idx) => (
                      <div key={idx} className="flex justify-between text-[10px] border-b border-gray-50 pb-0.5">
                        <span className="text-gray-700">{i.n}</span>
                        <span className="text-gray-900 font-bold">{i.c}C</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-inter font-black text-[10px] text-[#1a1a1a] mb-2 uppercase tracking-widest border-b border-[#a31f34] pb-1 inline-block">Semester 2</h3>
                  <div className="space-y-1">
                    {[
                      { n: "Adv. Criminal Practice II", c: "2" },
                      { n: "Tech & Criminal Laws", c: "2" },
                      { n: "Criminal Drafting", c: "2" },
                      { n: "Forensic Law", c: "2" },
                      { n: "Dissertation", c: "3" },
                      { n: "Internship", c: "3" },
                    ].map((i, idx) => (
                      <div key={idx} className="flex justify-between text-[10px] border-b border-gray-50 pb-0.5">
                        <span className="text-gray-700">{i.n}</span>
                        <span className="text-gray-900 font-bold">{i.c}C</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Box 4: AI, Emerging Technologies and IP Rights */}
            <div className="bg-white border-t-8 border-[#a31f34] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-6 md:p-8 relative z-10 flex flex-col">
              <div className="mb-8">
                <h2 className="font-playfair text-xl md:text-2xl text-[#1a1a1a] mb-4 leading-tight font-bold">
                  LL.M. in AI, Emerging Tech & IP
                </h2>
                <p className="font-inter text-gray-700 leading-relaxed text-xs">
                  Visionary course exploring the interface between legal expertise and technology innovation. Regulate and shape digital frameworks.
                </p>
              </div>
              <div className="space-y-6 mt-auto">
                <div>
                  <h3 className="font-inter font-black text-[10px] text-[#1a1a1a] mb-2 uppercase tracking-widest border-b border-[#a31f34] pb-1 inline-block">Semester 1</h3>
                  <div className="space-y-1">
                    {[
                      { n: "Research Methods", c: "3" },
                      { n: "Public Law", c: "3" },
                      { n: "Law & Justice", c: "3" },
                      { n: "AI & Law", c: "2" },
                      { n: "Privacy & Data Law", c: "2" },
                      { n: "Dissertation I", c: "1" },
                    ].map((i, idx) => (
                      <div key={idx} className="flex justify-between text-[10px] border-b border-gray-50 pb-0.5">
                        <span className="text-gray-700">{i.n}</span>
                        <span className="text-gray-900 font-bold">{i.c}C</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-inter font-black text-[10px] text-[#1a1a1a] mb-2 uppercase tracking-widest border-b border-[#a31f34] pb-1 inline-block">Semester 2</h3>
                  <div className="space-y-1">
                    {[
                      { n: "AI & IP Law", c: "2" },
                      { n: "Optional I", c: "2" },
                      { n: "Optional II", c: "2" },
                      { n: "Dissertation", c: "3" },
                      { n: "Internship", c: "3" },
                      { n: "Dissertation II", c: "1" },
                    ].map((i, idx) => (
                      <div key={idx} className="flex justify-between text-[10px] border-b border-gray-50 pb-0.5">
                        <span className="text-gray-700">{i.n}</span>
                        <span className="text-gray-900 font-bold">{i.c}C</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="px-[5%] py-12 md:py-16">
        <div className="max-w-7xl mx-auto bg-[#fbb03b] rounded-2xl py-16 px-6 md:px-12 text-center shadow-sm">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-6 font-bold leading-tight">
            Ready to transform your legal career?
          </h2>
          <p className="font-inter text-lg md:text-xl text-gray-900 mb-10 max-w-3xl mx-auto font-medium">
            Apply now to the VMLS LL.M. program — one year, infinite possibilities.
          </p>
          <Link 
            href="https://admissions.vmls.edu.in/" 
            className="inline-block px-10 py-4 bg-black text-white font-inter font-bold rounded-lg hover:bg-gray-900 transition-all duration-300 shadow-xl hover:-translate-y-1"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-0 pb-20 relative overflow-hidden bg-gray-50/50">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Floating Accent Shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#fbb03b]/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#fbb03b]/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#1a365d]">
              Frequently Asked Questions (FAQs) – VMLS LL.M. Program
            </h2>
            <div className="w-24 h-1 bg-[#fbb03b] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {faqData.map((item, idx) => (
              <div 
                key={idx} 
                className={`group border border-gray-100 rounded-xl transition-all duration-500 h-fit ${
                  openFaq === idx 
                    ? 'bg-[#fff9e6]/60 shadow-lg shadow-yellow-900/5 border-[#fbb03b]/30' 
                    : 'bg-white hover:shadow-md hover:border-gray-200 shadow-sm'
                }`}
              >
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                >
                  <div className="flex gap-4 items-start">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                      openFaq === idx ? 'bg-[#fbb03b] text-white shadow-md shadow-orange-200' : 'bg-gray-50 text-gray-400 group-hover:bg-gray-100'
                    }`}>
                      {idx + 1}
                    </span>
                    <span className={`font-inter font-bold text-sm md:text-base pr-4 transition-colors duration-300 ${
                      openFaq === idx ? 'text-[#a16207]' : 'text-gray-800'
                    }`}>
                      {item.q}
                    </span>
                  </div>
                  <div className={`flex-shrink-0 w-5 h-5 flex items-center justify-center transition-transform duration-500 ${openFaq === idx ? 'rotate-180' : ''}`}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={openFaq === idx ? 'text-[#fbb03b]' : 'text-gray-300'}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-5 md:px-6 pb-6 ml-12">
                    <div className="h-px w-full bg-gradient-to-r from-[#fbb03b]/30 to-transparent mb-4"></div>
                    <p className="font-inter text-gray-600 text-xs md:text-sm leading-relaxed">
                      {item.a || "Answer details coming soon..."}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
