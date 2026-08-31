"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import ArchitecturalSketch from "@/components/ArchitecturalSketch";

export default function AboutVMRF() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">About VMRF</span>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/vmrf/vmrf-header.webp"
          alt="Vinayaka Mission's Research Foundation campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="absolute inset-0 flex items-end px-[5%] pb-10 md:pb-14">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-xl text-white">
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-left">
                About VMRF
              </h1>
              <p className="font-inter text-base md:text-lg leading-relaxed text-white/95 text-left [word-spacing:normal]">
                Vinayaka Mission&apos;s Research Foundation (VMRF) is an innovative and pioneering University that offers a multi-disciplinary learning experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section — sticky image left, expandable text right */}
      <section className="py-10 md:py-14 px-[5%] bg-white overflow-hidden relative">
        <ArchitecturalSketch />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-14 relative z-10">
          {/* Left: Campus Image (Sticky on desktop so it stays fixed as text scrolls) */}
          <div className="lg:w-[38%] w-full shrink-0 lg:sticky lg:top-28">
            <div className="relative w-full aspect-[4/5] shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden rounded-xl">
              <Image
                src="/images/vmrf/about-vmrf.webp"
                alt="VMRF campus building"
                fill
                sizes="(max-width: 1024px) 100vw, 38vw"
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-[62%] flex flex-col justify-center">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]" />
              <div className="pl-6 md:pl-10 space-y-6 text-left">
                <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                  In 1981, Thirumuruga Kirupananda Variyar Thavathiru Sundara Swamigal Medical Educational and Charitable Trust was established, followed by Vinayaka Mission&apos;s College of Pharmacy in 1982. In 2001, the trust became Vinayaka Mission&apos;s Research Foundation (VMRF), the 48th University in India, after being recognized for its excellence and academic standards. The University&apos;s primary objective is to offer high-quality education to students from all walks of life. As one of the largest universities in India, VMRF offers a wide range of academic disciplines, with a comprehensive range of faculties that covers almost the entire gamut of academic disciplines, including medicine, paramedicine, engineering and technology, management, arts and sciences, law, among others.
                </p>

                {isExpanded && (
                  <div className="space-y-6 transition-all duration-500 ease-in-out">
                    <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                      The University&apos;s multi-disciplinary approach to education offers students an opportunity to explore different fields, gain a diverse range of skills, and achieve academic excellence. The University also provides various opportunities for students to engage in research, community service, and internships, among other activities, to enhance their learning experience. With campuses at Chennai, Salem, and Pondicherry, VMRF&apos;s scenic campuses are known for their state-of-the-art facilities, including modern classrooms, advanced laboratories, well-stocked libraries, and sports complexes.
                    </p>
                    <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                      VMRF has nearly 15,000 students across its various colleges, and over 2,000 professionals graduate from its campuses annually. With over 5,000 staff members, VMRF is known for its highly qualified and experienced faculty and for establishing multiple medical, dental, engineering, paramedical, and homoeopathy colleges. The University&apos;s commitment to providing quality education has resulted in producing highly successful graduates who have excelled in their respective fields. With a focus on academic excellence, professional development, and research, VMRF continues to be a leading institution in India and a preferred choice for students seeking a well-rounded education.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Read More / Read Less Toggle Button */}
            <div className="pl-6 md:pl-10 mt-8">
              <button
                type="button"
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#a31f34] text-white font-inter font-bold text-xs md:text-sm uppercase tracking-wider rounded-lg shadow-md hover:bg-[#800000] hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <span>{isExpanded ? "Read Less" : "Read More"}</span>
                {isExpanded ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white px-[5%] pt-10 md:pt-14 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-12 md:mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-4">
              Leadership @VMRF
            </h2>
            <div className="w-20 h-1 bg-[#a31f34]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
            <Link
              href="/founder"
              className="group transition-all duration-300 hover:-translate-y-2 max-w-[280px] mx-auto w-full block"
            >
              <div className="relative aspect-square shadow-[0_15px_35px_rgba(0,0,0,0.1)] group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <Image
                  src="/images/vmrf/Frame-53135.webp"
                  alt="Dr. A. Shanmugasundaram"
                  fill
                  sizes="280px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-playfair text-lg md:text-xl font-bold text-[#1a1a1a] group-hover:text-[#a31f34] transition-colors">
                  Dr. A. Shanmugasundaram
                </h3>
                <p className="font-inter text-sm text-gray-500 mt-1">Founder Chancellor</p>
              </div>
            </Link>

            <Link
              href="/chancellor"
              className="group transition-all duration-300 hover:-translate-y-2 max-w-[280px] mx-auto w-full block"
            >
              <div className="relative aspect-square shadow-[0_15px_35px_rgba(0,0,0,0.1)] group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <Image
                  src="/images/vmrf/Frame-53134.webp"
                  alt="Dato' Seri. Dr. A. S. Ganesan"
                  fill
                  sizes="280px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-playfair text-lg md:text-xl font-bold text-[#1a1a1a] group-hover:text-[#a31f34] transition-colors">
                  Dato&apos; Seri. Dr. A. S. Ganesan
                </h3>
                <p className="font-inter text-sm text-gray-500 mt-1">Chancellor</p>
              </div>
            </Link>

            <div className="group transition-all duration-300 hover:-translate-y-2 max-w-[280px] mx-auto w-full block">
              <div className="relative aspect-square shadow-[0_15px_35px_rgba(0,0,0,0.1)] group-hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <Image
                  src="/images/vmrf/Frame-53133.webp"
                  alt="Dr. Annapoorani Ganesan"
                  fill
                  sizes="280px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-playfair text-lg md:text-xl font-bold text-[#1a1a1a] group-hover:text-[#a31f34] transition-colors">
                  Dr. Annapoorani Ganesan
                </h3>
                <p className="font-inter text-sm text-gray-500 mt-1">Trustee</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
