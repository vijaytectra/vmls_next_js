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
    },
    {
      title: "Anuradha Shero Scholarship for Female Students",
      description: "Awarded to female students who excel in the VLAT entrance exam, thereby promoting legal education among female students.",
    },
    {
      title: "Need-Based Scholarship",
      description: "Awarded to students who demonstrate financial need, thereby ensuring equal opportunity for all to pursue legal studies.",
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
      <section className="relative px-[5%] py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/scholorship-bg.webp"
            alt="Scholarships at VMLS"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-125"
            priority
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-white drop-shadow-lg">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#fbb03b]"></div>
            <div className="pl-6 md:pl-10">
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl mb-6 leading-tight font-bold">
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
      <section className="pt-10 pb-8 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 space-y-6">
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl text-[#1a1a1a] leading-tight">
              A ₹60 Lakhs Commitment <br />to Your Future
            </h2>
            <div className="w-16 h-1 bg-[#a31f34]"></div>
            <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
              At Vinayaka Mission's Law School (VMLS), we believe that every talented student deserves access to world-class legal education. Our comprehensive scholarship program is designed to recognize academic excellence, support diversity, and provide a safety net for those in need.
            </p>
            <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
              Over 140 scholarships are awarded annually through the VLAT performance and merit screening process.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col sm:flex-row gap-6 h-auto sm:h-[300px] md:h-[380px] w-full mt-8 lg:mt-0">
            {/* Left Image (Infographic) */}
            <div className="relative w-full h-[220px] sm:h-full sm:flex-1 flex items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src="/images/schlorship/01.webp"
                  alt="140 Scholarships Infographic"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>
            </div>
            
            {/* Right Image (Photo) */}
            <div className="relative w-full h-[260px] sm:h-full sm:flex-1 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500">
              <Image
                src="/images/schlorship/02.webp"
                alt="Academic Excellence"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship programs + Testimonials video */}
      <section className="py-10 md:py-14 px-[5%] bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-14">
          {/* Left: Scholarship programs */}
          <div className="lg:w-[48%] w-full min-w-0">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]" />
              <div className="pl-6 md:pl-10">
                <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-8 leading-tight">
                  Scholarship programs
                </h2>

                <div className="space-y-8">
                  {scholarshipCategories.map((cat) => (
                    <div key={cat.title}>
                      <h3 className="font-playfair font-bold text-lg md:text-xl text-[#a31f34] mb-2 leading-snug">
                        {cat.title}:
                      </h3>
                      <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed hyphens-none [hyphens:none]">
                        {cat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Scholarship Testimonials video */}
          <div className="lg:w-[52%] w-full shrink-0">
            <div className="relative w-full aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden bg-black">
              <iframe
                src="https://www.youtube.com/embed/LJAGaNiZ59U"
                title="Scholarship Testimonials"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
            <h3 className="font-playfair text-xl md:text-2xl text-[#1a1a1a] mt-4 text-center lg:text-left">
              Scholarship Testimonials
            </h3>
          </div>
        </div>
      </section>


    </main>
  );
}
