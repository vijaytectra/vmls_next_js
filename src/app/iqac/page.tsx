import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Target, Eye, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Internal Quality Assurance Cell (IQAC) | VMLS",
  description: "Ensuring continuous quality enhancement and sustaining academic excellence at Vinayaka Mission's Law School.",
};

export default function IQACPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">IQAC</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-[#800000] overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[400px]">
          <div className="lg:w-1/2 p-[6%] flex flex-col justify-center text-white relative z-10">
            <div className="w-16 h-1 bg-[#fbb03b] mb-6"></div>
            <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Internal Quality <br />
              <span className="text-[#fbb03b]">Assurance Cell</span>
            </h1>
            <p className="font-inter text-lg opacity-90 leading-relaxed max-w-xl">
              Ensuring continuous quality enhancement and sustaining academic and administrative excellence across the institution.
            </p>
          </div>
          <div className="lg:w-1/2 relative min-h-[300px]">
            <Image
              src="/images/vmls/vmls-arch.png"
              alt="VMLS Campus"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#800000] via-transparent to-transparent lg:block hidden"></div>
            <div className="absolute inset-0 bg-black/20 lg:hidden"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <h2 className="font-playfair text-3xl md:text-4xl text-[#800000] mb-8 font-bold relative inline-block">
                Introduction to IQAC
                <div className="absolute -bottom-2 left-0 w-1/2 h-1 bg-[#fbb03b]"></div>
              </h2>
              <p className="font-inter text-gray-700 leading-relaxed text-lg md:text-xl text-justify mb-8">
                The IQAC of Vinayaka Mission&apos;s Law School (VMLS) is a dedicated body established to ensure continuous quality enhancement and to sustain academic and administrative performance across the institution.
              </p>
              <p className="font-inter text-gray-700 leading-relaxed text-lg md:text-xl text-justify">
                The cell adheres to the guidelines provided by the National Assessment and Accreditation Council (NAAC), aiming to promote a culture of quality through a structured approach.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-gray-50 p-10 border-l-8 border-[#a31f34] shadow-sm rounded-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#a31f34]/10 flex items-center justify-center text-[#a31f34]">
                    <Eye size={24} />
                  </div>
                  <h3 className="font-playfair text-2xl font-bold text-[#800000]">Our Vision</h3>
                </div>
                <p className="font-inter text-gray-600 text-lg leading-relaxed italic">
                  &quot;To instil and promote a quality-driven environment within the institution by integrating best practices in education, fostering a spirit of academic excellence, and maintaining rigorous standards across all functions.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives & Functions */}
      <section className="py-12 px-[5%] bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Objectives */}
            <div>
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-[#800000] text-white flex items-center justify-center shadow-lg">
                  <Target size={32} />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-[#1a1a1a]">Objectives</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Develop strategies to improve both academic and administrative efficiency.",
                  "Promote internal and external participation for continuous improvement.",
                  "Encourage quality sustenance in teaching, learning, and research activities.",
                  "Establish mechanisms for feedback from students, parents, and other stakeholders."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <CheckCircle2 className="text-[#a31f34] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link 
                  href="/iqac/workshops"
                  className="bg-[#800000] text-white px-6 py-3 rounded-xl font-bold text-base hover:bg-[#a31f34] transition-all shadow-md inline-flex items-center gap-3 group"
                >
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  Workshop and Seminars
                </Link>
              </div>
            </div>

            {/* Functions */}
            <div>
              <div className="flex items-center gap-5 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-[#800000] text-white flex items-center justify-center shadow-lg">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-playfair text-3xl font-bold text-[#1a1a1a]">Functions</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Establish benchmarks for academic and administrative activities.",
                  "Facilitate faculty development and create a learner-centric atmosphere.",
                  "Organize seminars, workshops, and inter-institutional quality enhancement initiatives.",
                  "Collect, analyze, and act upon feedback from stakeholders.",
                  "Serve as the nodal agency for quality assurance across all institutional processes.",
                  "Maintain institutional databases for quality improvement."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <CheckCircle2 className="text-[#a31f34] flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                    <span className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
