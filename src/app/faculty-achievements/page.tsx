import Image from 'next/image';
import Link from 'next/link';
import { pageMetadata } from "@/lib/seo-pages";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata("/faculty-achievements");

const researchHighlights = [
  {
    area: "Digital Jurisprudence",
    impact: "Faculty members contributed to the national framework on AI regulation and data privacy laws.",
    icon: (
      <svg className="w-8 h-8 text-[#a31f34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    area: "Maritime Law & Trade",
    impact: "Our faculty serves as advisors to major port authorities on international shipping protocols.",
    icon: (
      <svg className="w-8 h-8 text-[#a31f34]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    )
  }
];

export default function FacultyAchievementsPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <PageSchema path="/faculty-achievements" />
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-4 sm:py-6 bg-gray-50 border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 text-xs min-[380px]:text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors shrink-0">Home</Link>
          <span className="text-gray-300 font-light shrink-0">/</span>
          <span className="text-gray-500 shrink-0">Faculty</span>
          <span className="text-gray-300 font-light shrink-0">/</span>
          <span className="text-[#a31f34] font-semibold shrink-0">Achievements</span>
        </div>
      </nav>

      {/* Hero Section - Matching Internship Style */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[450px]">
          <div className="w-full lg:w-[45%] p-6 sm:p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight whitespace-normal lg:whitespace-nowrap">
              Faculty <span className="text-[#fbb03b]">Achievements</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Celebrating the academic excellence, research impact, and professional recognitions of our distinguished faculty members who are shaping the future of legal education.
            </p>
          </div>
          <div className="hidden lg:block lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/faculty/live/DSC00716_19.webp"
              alt="VMLS Faculty Achievements"
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Section: Research Impact */}
      <section className="py-20 px-[5%] bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            <div className="md:w-1/2">
              <div className="flex items-center gap-2.5 sm:gap-4 mb-6 md:mb-8">
                <div className="w-6 sm:w-12 h-[2px] bg-[#a31f34] shrink-0"></div>
                <h2 className="font-playfair text-[22px] min-[380px]:text-2xl sm:text-3xl md:text-3xl lg:text-4xl text-[#1a1a1a] font-bold tracking-tight whitespace-nowrap">
                  Research Impact
                </h2>
              </div>
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-10 text-left">
                Beyond the classroom, our faculty members are active contributors to legal scholarship and policy development at national and international levels.
              </p>

              <div className="space-y-8 font-inter text-lg text-gray-700 leading-relaxed text-left sm:text-left">
                {researchHighlights.map((highlight, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-playfair text-xl text-[#1a1a1a] mb-2 font-bold">{highlight.area}</h4>
                      <p className="font-inter text-gray-600 leading-relaxed text-sm md:text-base">
                        {highlight.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 relative h-[400px] w-full bg-gray-100 overflow-hidden group">
              <Image
                src="/images/faculty/live/DSC00648_14.webp"
                alt="Research in Action"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#a31f34]/10 mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-inter italic text-sm md:text-base">
                  "Research is the backbone of legal education. It allows us to not just teach the law, but to understand its evolution and influence."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Architecture Element at Bottom Left */}
      <div className="fixed bottom-0 left-0 w-[300px] opacity-[0.05] pointer-events-none select-none z-0">
        <Image src="/images/vmls/vmls-arch.png" alt="" width={400} height={400} className="grayscale" />
      </div>
    </main>
  );
}
