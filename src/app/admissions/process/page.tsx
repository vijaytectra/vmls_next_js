"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

const howToSchema = {
  "@context": "https://schema.org/",
  "@type": "HowTo",
  name: "Admission Process",
  step: [
    { "@type": "HowToStep", text: "Register yourself and verify email." },
    { "@type": "HowToStep", text: "Fill Application Form Online" },
    { "@type": "HowToStep", text: "Pay Application Fee" },
    {
      "@type": "HowToStep",
      text: "Submission of Application with all required documents",
    },
    {
      "@type": "HowToStep",
      text: "Submitted Application will be processed internally",
    },
    {
      "@type": "HowToStep",
      text: "Release of Admission Offer Letter/Hall Ticket",
    },
    { "@type": "HowToStep", text: "VLAT Exam" },
    { "@type": "HowToStep", text: "Release of Provisional Admission Letter" },
  ],
};

export default function AdmissionProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Script
        id="ld-howto-admission"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-gray-500 hover:text-[#a31f34] transition-colors">Admission</span>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Admission Process</span>
        </div>
      </nav>

      {/* Hero / Header Section - Increased Size */}
      <section className="relative px-[5%] pt-16 md:pt-28 pb-12 md:pb-20 overflow-hidden bg-white">
        {/* Background Image with Black Overlay for Premium Contrast */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/llm/admission-header.webp"
            alt="Admission Process Background"
            fill
            className="object-cover object-center opacity-100 contrast-[1.05] brightness-90"
            priority
          />
          {/* Black Gradient Overlay */}
          <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
            <div className="pl-6 md:pl-10">
              <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                Admission Process
              </h1>
              <p className="font-inter text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed font-medium">
                A simple and transparent guide to joining Vinayaka Mission's Law School. Start your legal journey with us through our streamlined application process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Eligibility & Admission Criteria Section */}
      <section className="pt-10 pb-6 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Box 1: Five Year Integrated Law Programme */}
            <div className="bg-[#f8f9fa] p-8 md:p-10 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-playfair text-2xl text-[#1a1a1a] mb-6 font-bold leading-tight">
                Five Year Integrated Law Programme:
              </h2>
              
              <div className="mb-6">
                <h3 className="font-inter font-bold text-base text-gray-900 mb-3">Eligibility:</h3>
                <ul className="space-y-3 font-inter text-gray-700 list-disc pl-5">
                  <li>A pass in 10+2/Intermediate or equivalent examination. (Candidates appearing for April-May 2025 Examinations can also apply.)</li>
                  <li>Not less than 45% marks for General Category, 42% for OBC and 40% for SC/ST.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-inter font-bold text-base text-gray-900 mb-3">Admission Criteria:</h3>
                <ul className="space-y-2 font-inter text-gray-700 list-disc pl-5">
                  <li>VLAT 5 Score*</li>
                  <li>10+2 (or equivalent) marks</li>
                </ul>
              </div>

              <div className="mt-auto pt-4">
                <Link 
                  href="https://admissions.vmls.edu.in/" 
                  className="inline-block px-8 py-3 border-2 border-[#a31f34] text-[#a31f34] font-inter font-bold text-sm uppercase tracking-wider hover:bg-[#a31f34] hover:text-white transition-all text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Box 2: Three Year Law Programme */}
            <div className="bg-[#f8f9fa] p-8 md:p-10 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-playfair text-2xl text-[#1a1a1a] mb-6 font-bold leading-tight">
                Three Year Law Programme:
              </h2>
              
              <div className="mb-6">
                <h3 className="font-inter font-bold text-base text-gray-900 mb-3">Eligibility:</h3>
                <ul className="space-y-3 font-inter text-gray-700 list-disc pl-5">
                  <li>Bachelor's degree in any stream from a University or an equivalent Institution recognized as deemed to be University or from a foreign University declared as equivalent to an Indian degree by a competent authority (Candidates who expect to graduate in June 2025 may also apply).</li>
                  <li>Not less than 45% marks for General Category, 42% for OBC and 40% for SC/ST.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-inter font-bold text-base text-gray-900 mb-3">Admission Criteria:</h3>
                <ul className="space-y-2 font-inter text-gray-700 list-disc pl-5">
                  <li>VLAT 3 Score*</li>
                  <li>Bachelor's Degree marks.</li>
                </ul>
              </div>

              <div className="mt-auto pt-4">
                <Link 
                  href="https://admissions.vmls.edu.in/" 
                  className="inline-block px-8 py-3 border-2 border-[#a31f34] text-[#a31f34] font-inter font-bold text-sm uppercase tracking-wider hover:bg-[#a31f34] hover:text-white transition-all text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>

            {/* Box 3: One Year LL.M. Programme */}
            <div className="bg-[#f8f9fa] p-8 md:p-10 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
              <h2 className="font-playfair text-2xl text-[#1a1a1a] mb-6 font-bold leading-tight">
                One Year LL.M. Programme:
              </h2>
              
              <div className="mb-6">
                <h3 className="font-inter font-bold text-base text-gray-900 mb-3">Eligibility:</h3>
                <ul className="space-y-3 font-inter text-gray-700 list-disc pl-5">
                  <li>Bachelor's degree in Law (LL.B.) from a University or an equivalent Institution recognized as deemed to be University or from a foreign University declared as equivalent to an Indian degree by a competent authority.</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-inter font-bold text-base text-gray-900 mb-3">Admission Criteria:</h3>
                <ul className="space-y-2 font-inter text-gray-700 list-disc pl-5">
                  <li>VLAT Score</li>
                  <li>Interview round after VLAT</li>
                </ul>
              </div>

              <div className="mt-auto pt-4">
                <Link 
                  href="https://admissions.vmls.edu.in/" 
                  className="inline-block px-8 py-3 border-2 border-[#a31f34] text-[#a31f34] font-inter font-bold text-sm uppercase tracking-wider hover:bg-[#a31f34] hover:text-white transition-all text-center"
                >
                  Apply Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Admission Process Steps Section - Compact with Image Background */}
      <section className="pt-4 pb-4 px-[5%] bg-white relative overflow-hidden">
        {/* Background Image Texture */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/llm/admission-header.webp"
            alt="Background Texture"
            fill
            className="object-cover object-center opacity-[0.06] grayscale contrast-125 pointer-events-none"
          />
          {/* Fading the image edges for a cleaner look */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white"></div>
        </div>

        {/* Subtle Decorative Background Elements */}
        <div className="absolute top-10 right-10 text-[15rem] font-black text-gray-200/40 opacity-50 select-none pointer-events-none leading-none z-[1]">
          09
        </div>
        <div className="absolute bottom-10 left-10 text-[12rem] font-black text-gray-200/40 opacity-50 select-none pointer-events-none leading-none z-[1]">
          PROCESS
        </div>
        
        {/* Background Dots Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[1]">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" className="text-gray-400" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-2xl md:text-3xl text-[#1a1a1a] mb-2">Admission Process</h2>
            <div className="w-16 h-1 bg-[#a31f34] mx-auto rounded-full"></div>
          </div>

          <div className="relative pl-4 md:pl-0">
            {/* The Connecting Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2"></div>

            <div className="space-y-6 relative">
              {[
                { title: "Register yourself and, verify email.", color: "#a31f34" },
                { title: "Fill Application Form Online", color: "#007ba8" },
                { title: "Pay Application Fee", color: "#fbb03b" },
                { title: "Submission of Application with all required documents", color: "#a31f34" },
                { title: "Submitted Application will be processed internally", color: "#007ba8" },
                { title: "VLAT Exam", color: "#fbb03b" },
                { title: "Release of Admission Offer Letter/Hall Ticket", color: "#a31f34" },
                { title: "Seat Blocking and Fee Payment", color: "#007ba8" },
                { title: "Release of Provisional Admission Letter", color: "#fbb03b" },
              ].map((step, index) => (
                <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Step Number Bubble */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-white border-2 border-gray-100 rounded-full z-20 flex items-center justify-center font-playfair font-bold text-sm text-[#a31f34] shadow-sm">
                    {index + 1}
                  </div>

                  {/* Content Card - Even more Compact */}
                  <div className={`w-[calc(100%-2.5rem)] md:w-[38%] ml-10 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <div className="bg-white/95 backdrop-blur-sm p-4 md:p-5 shadow-sm hover:shadow-xl transition-all duration-500 rounded-xl border-l-4 group hover:-translate-y-1 relative z-10" style={{ borderLeftColor: step.color }}>
                      <span className="font-inter text-[9px] uppercase tracking-widest text-gray-400 mb-1 block font-bold">Step {index + 1}</span>
                      <h3 className="font-playfair text-sm md:text-base text-[#1a1a1a] font-bold leading-tight group-hover:text-[#a31f34] transition-colors">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* VLAT Information Section - More Compact */}
      <section className="px-[5%] pb-4 bg-white">
        <div className="max-w-2xl mx-auto bg-[#fffbeb] p-8 md:p-10 rounded-3xl border border-[#fef3c7] shadow-sm relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="font-playfair text-xl md:text-2xl text-[#1a1a1a] mb-6 border-b border-yellow-200 pb-4">
              VLAT- (Vinayaka Mission's Law Admissions Test)
            </h2>
            <p className="font-inter text-sm md:text-base text-gray-700 leading-relaxed mb-8">
              Vinayaka Mission's Law Admissions Test is an entrance test specifically designed to understand the Reading and Comprehension Skills, Reasoning and Critical Thinking Ability of the students that are essential to pursue Legal Education.
            </p>

            <h3 className="font-playfair text-xl md:text-2xl text-[#1a1a1a] mb-4">
              VLAT Format
            </h3>
            <p className="font-inter text-sm text-gray-700 mb-4">
              The question paper will consist of two different sections each containing objective multiple choice questions (MCQs).
            </p>
            <ol className="list-decimal pl-5 space-y-2 font-inter text-sm text-gray-700 mb-8">
              <li>Logical Reasoning</li>
              <li>English Comprehension</li>
            </ol>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-yellow-200">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#a31f34] rounded-full"></span>
                <p className="font-inter text-black"><span className="font-bold text-[#1a1a1a]">Duration:</span> 60 minutes.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#a31f34] rounded-full"></span>
                <p className="font-inter text-black"><span className="font-bold text-[#1a1a1a]">Mode:</span> Online AI Proctored.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#a31f34] rounded-full"></span>
                <p className="font-inter text-black"><span className="font-bold text-[#1a1a1a]">Bilingual:</span> English & Tamil.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Closing CTA Section */}
      <section className="px-[5%] pt-2 pb-6 bg-white">
        <div className="max-w-4xl mx-auto text-center py-12 bg-[#f8f9fa] border border-gray-100 rounded-3xl shadow-sm">
          <h2 className="font-playfair text-xl md:text-2xl text-[#1a1a1a] mb-4">Need Help with Admissions?</h2>
          <p className="font-inter text-sm text-gray-600 mb-8 max-w-xl mx-auto">Our admissions team is here to guide you through every step of the process. Reach out to us for any clarifications.</p>
          <div className="flex flex-wrap justify-center gap-4">
             <Link href="/contact-us" className="px-6 py-2.5 bg-[#a31f34] text-white font-inter font-bold rounded-lg hover:bg-[#801829] transition-all text-sm">Contact Us</Link>
             <Link href="https://admissions.vmls.edu.in/" className="px-6 py-2.5 border-2 border-[#a31f34] text-[#a31f34] font-inter font-bold rounded-lg hover:bg-[#a31f34] hover:text-white transition-all text-sm">Apply Now</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
