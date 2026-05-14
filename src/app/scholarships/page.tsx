"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ScholarshipsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scholarshipCategories = [
    {
      title: "Merit-Based Scholarship",
      description: "Awarded to students who achieve high marks in the VLAT entrance exam, recognizing academic prowess.",
      icon: "🏆"
    },
    {
      title: "Anuradha Shero Scholarship for Female Students",
      description: "Awarded to female students who excel in the VLAT entrance exam, thereby promoting legal education among female students.",
      icon: "⚖️"
    },
    {
      title: "Need-Based Scholarship",
      description: "Awarded to students who demonstrate financial need, thereby ensuring equal opportunity for all to pursue legal studies.",
      icon: "🤝"
    }
  ];

  const faqData = [
    {
      q: "What is the total scholarship pool available at VMLS?",
      a: "VMLS offers over 140 scholarships with a total value exceeding ₹60 Lakhs for the current academic year, distributed across various categories."
    },
    {
      q: "How does VLAT performance impact scholarship eligibility?",
      a: "Performance in the Vinayaka Mission's Law Admission Test (VLAT) is a primary criterion for merit-based scholarships. Higher percentiles qualify for greater tuition fee waivers."
    },
    {
      q: "Can I apply for multiple scholarships?",
      a: "Students can apply for multiple categories, but typically only one scholarship (the one with the highest value) will be awarded per student to ensure support reaches as many individuals as possible."
    },
    {
      q: "What documents are required for need-based scholarships?",
      a: "Applicants for need-based aid must provide valid income certificates, tax returns of parents/guardians, and other supporting documents as specified by the admissions committee."
    },
    {
      q: "Are these scholarships renewable for subsequent years?",
      a: "Yes, most scholarships are renewable subject to the student maintaining a minimum CGPA and following the institution's code of conduct throughout the program."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Scholarships</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-[5%] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/scholorship-bg.webp"
            alt="Scholarships at VMLS"
            fill
            className="object-cover object-center brightness-125"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-white drop-shadow-lg">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#fbb03b]"></div>
            <div className="pl-6 md:pl-10">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight font-bold">
                Scholarships & <br />Financial Aid
              </h1>
              <p className="font-inter text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed font-medium">
                Investing in the next generation of legal leaders. We ensure that merit and ambition are supported by the necessary financial resources.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="pt-20 pb-8 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight">
              A ₹60 Lakhs Commitment <br />to Your Future
            </h2>
            <div className="w-20 h-1.5 bg-[#a31f34]"></div>
            <p className="font-inter text-lg text-gray-700 leading-relaxed">
              At Vinayaka Mission's Law School (VMLS), we believe that every talented student deserves access to world-class legal education. Our comprehensive scholarship program is designed to recognize academic excellence, support diversity, and provide a safety net for those in need.
            </p>
            <p className="font-inter text-lg text-gray-700 leading-relaxed font-medium text-[#a31f34]">
              Over 140 scholarships are awarded annually through the VLAT performance and merit screening process.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-6 h-[300px] md:h-[380px] w-full mt-8 lg:mt-0">
            {/* Left Image (Infographic) */}
            <div className="relative flex-1 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/images/schlorship/01.webp"
                  alt="140 Scholarships Infographic"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Right Image (Photo) */}
            <div className="relative flex-1 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500">
              <Image
                src="/images/schlorship/02.webp"
                alt="Academic Excellence"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="pt-10 pb-20 px-[5%] bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
              Scholarship Categories
            </h2>
            <div className="w-24 h-1.5 bg-[#fbb03b] mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scholarshipCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group flex flex-col h-full"
              >
                {/* Accent Line on Hover */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#a31f34] to-[#fbb03b] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl mb-8 group-hover:bg-orange-50 group-hover:scale-110 transition-all duration-300">
                  {cat.icon}
                </div>
                
                <h3 className="font-playfair font-bold text-2xl md:text-3xl text-[#1a1a1a] mb-4 leading-tight">
                  {cat.title}
                </h3>
                
                <p className="font-inter text-gray-600 leading-relaxed md:text-lg mt-auto">
                  {cat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
