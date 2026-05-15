import Link from "next/link";
import Image from "next/image";
import FacultyGrid from "@/components/FacultyGrid";
import TeamSection from "@/components/TeamSection";

export const metadata = {
  title: "Faculty Profiles | VMLS",
  description: "Meet the distinguished faculty members at Vinayaka Mission's Law School.",
};

export default function FacultyProfilesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb - Standardized Style */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Faculty Profiles</span>
        </div>
      </nav>

      {/* Hero Section - Split Style matching Board of Advisors */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight whitespace-nowrap">
              Faculty <span className="text-[#fbb03b]">Profiles</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Learn from a distinguished community of legal scholars, seasoned practitioners, and academic innovators dedicated to shaping the future of law.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/vmls/frame-1@3x.webp"
              alt="Faculty at VMLS"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Core Faculty Section */}
      <section className="pt-4 md:pt-6 pb-8 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-6">
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#1a1a1a] mb-3">
              Core Faculty
            </h2>
            <div className="w-16 h-1 bg-[#800000]"></div>
          </div>

          <FacultyGrid />
        </div>
      </section>

      {/* Team@VMLS Section */}
      <TeamSection />
    </main>
  );
}
