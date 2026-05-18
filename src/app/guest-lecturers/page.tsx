import Image from 'next/image';
import Link from 'next/link';

export default function GuestLecturersPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-gray-500">Faculty</span>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Guest Lecturers</span>
        </div>
      </nav>

      {/* Hero Section - Matching Faculty Achievements Style */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight whitespace-nowrap">
              Guest <span className="text-[#fbb03b]">Lecturers</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Bridging the gap between academia and industry. VMLS hosts distinguished legal luminaries, international scholars, and industry leaders to provide students with global perspectives and practical insights.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/home-faculty.webp"
              alt="Guest Lecturers at VMLS"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Section: Coming Soon */}
      <section className="py-16 md:py-24 px-[5%] bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-6 md:mb-8">
            <div className="w-12 h-[1px] bg-gray-300"></div>
            <span className="font-inter text-xs tracking-[0.3em] uppercase text-[#a31f34] font-bold">Status Update</span>
            <div className="w-12 h-[1px] bg-gray-300"></div>
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl text-[#1a1a1a] mb-6 leading-tight">Coming Soon</h2>
          <p className="font-inter text-base md:text-lg text-gray-500 leading-relaxed italic">
            The profile of our distinguished guest lecturers and recent lecture series is currently being curated. We will be updating this section with detailed information shortly.
          </p>
          <div className="mt-12 inline-flex items-center gap-2 text-[#a31f34] font-bold tracking-wider uppercase text-xs border-b-2 border-[#a31f34] pb-1">
            Stay Tuned for Updates
          </div>
        </div>
      </section>

    </main>
  );
}
