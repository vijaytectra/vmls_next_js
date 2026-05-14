import Link from "next/link";
import Image from "next/image";
import BoardOfAdvisors from "@/components/BoardOfAdvisors";

export const metadata = {
  title: "Board of Advisors | VMLS",
  description: "Meet the distinguished leaders steering the guidance and advisory of Vinayaka Mission's Law School.",
};

export default function BoardOfAdvisorsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb - Standardized Style */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Board of Advisors</span>
        </div>
      </nav>

      {/* Hero Section - Split Style matching Internship Page */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Board of <br />
              <span className="text-[#fbb03b]">Advisors</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Distinguished legal luminaries and visionaries providing strategic guidance to shape the future of Vinayaka Mission's Law School.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/bod/advisor-hero-bg.png"
              alt="Board of Advisors at VMLS"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>
      {/* Main Content Component */}
      <BoardOfAdvisors />
    </main>
  );
}
