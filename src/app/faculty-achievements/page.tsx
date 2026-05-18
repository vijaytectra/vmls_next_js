import Image from 'next/image';
import Link from 'next/link';

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
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-gray-500">Faculty</span>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Achievements</span>
        </div>
      </nav>

      {/* Hero Section - Matching Internship Style */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight whitespace-nowrap">
              Faculty <span className="text-[#fbb03b]">Achievements</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Celebrating the academic excellence, research impact, and professional recognitions of our distinguished faculty members who are shaping the future of legal education.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/Frame89.webp"
              alt="VMLS Faculty Achievements"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Section: Research Impact */}
      <section className="py-20 px-[5%] bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-[#a31f34]"></div>
                <h2 className="font-playfair text-3xl md:text-4xl text-[#1a1a1a] font-bold">Research Impact</h2>
              </div>
              <p className="font-inter text-lg text-gray-600 leading-relaxed mb-10 text-justify">
                Beyond the classroom, our faculty members are active contributors to legal scholarship and policy development at national and international levels.
              </p>

              <div className="space-y-8 font-inter text-lg text-gray-700 leading-relaxed text-left sm:text-justify">
                {researchHighlights.map((highlight, index) => (
                  <div key={index} className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-playfair text-xl text-[#1a1a1a] mb-2 font-bold">{highlight.area}</h4>
                      <p className="font-inter text-gray-600 leading-relaxed md:text-base">
                        {highlight.impact}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2 relative h-[400px] w-full bg-gray-100 overflow-hidden group">
              <Image
                src="/images/home-faculty.webp"
                alt="Research in Action"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#a31f34]/10 mix-blend-multiply"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-inter italic md:text-base">
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
