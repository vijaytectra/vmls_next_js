import Image from "next/image";
import Link from "next/link";

const guestLectures = [
  {
    title: "Clashes of Masculinity in Urban and Rural India",
    speaker: "Dr. Shannon Philip",
    affiliation: "University of Cambridge",
    date: "17 April 2026",
    href: "/news/clashes-of-masculinity-urban-rural-india",
    image: "/images/news/masculinity/Masculinity_01_01.webp",
  },
  {
    title: "Copyright and Emerging Issues due to Artificial Intelligence",
    speaker: "Mr. Avinesh",
    affiliation: "Satvik Law",
    date: "2026",
    href: "/news/copyright-and-emerging-issues-due-to-artificial-intelligence",
    image: "/images/news/copyright-ai/Avinesh_listing.webp",
  },
  {
    title: "Guest Lecture on Gender Sensitisation and Equality in Lawyering",
    speaker: "Distinguished Guest Faculty",
    affiliation: "VMLS Lecture Series",
    date: "2026",
    href: "/news/gender-sensitisation",
    image: "/images/news/gender-equality-01.webp",
  },
  {
    title: "Ethics, Values and Litigation — Lessons for Budding Lawyers",
    speaker: "Distinguished Guest Faculty",
    affiliation: "VMLS Lecture Series",
    date: "2026",
    href: "/news/ethics-values-litigation",
    image: "/images/news/ethics-values-litigation-01.webp",
  },
  {
    title: "National Seminar on AI, Law & Regulation",
    speaker: "National & International Experts",
    affiliation: "Centre for Justice through Technology",
    date: "2026",
    href: "/news/national-seminar-on-ai",
    image: "/images/AI/national-seminar-on-ai-01.webp",
  },
  {
    title: "Special Lecture on International Maritime Law",
    speaker: "Maritime Law Experts",
    affiliation: "VMLS Maritime Law Initiative",
    date: "2025",
    href: "/news/special-lecture-international-maritime-law",
    image: "/images/home-faculty.webp",
  },
];

export default function GuestLecturersPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-gray-500">Faculty</span>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Guest Lecturers</span>
        </div>
      </nav>

      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[450px]">
          <div className="lg:w-[45%] p-6 sm:p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight whitespace-normal lg:whitespace-nowrap">
              Guest <span className="text-[#fbb03b]">Lecturers</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Bridging academia and practice. VMLS hosts distinguished legal luminaries, international scholars, and industry leaders who bring global perspectives into the classroom.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[220px] sm:min-h-[280px] lg:min-h-[300px]">
            <Image
              src="/images/news/masculinity/Masculinity_01.jpg"
              alt="Guest Lecturers at VMLS"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/15" />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-playfair text-3xl md:text-4xl text-[#1a1a1a] mb-3">
              Recent Lectures &amp; Sessions
            </h2>
            <div className="w-20 h-1 bg-[#a31f34] mx-auto mb-4" />
            <p className="font-inter text-gray-600 max-w-2xl mx-auto">
              Verified guest lectures and academic engagements hosted at VMLS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {guestLectures.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <p className="font-inter text-[11px] uppercase tracking-widest text-[#a31f34] font-bold mb-2">
                    {item.date}
                  </p>
                  <h3 className="font-playfair text-xl text-[#1a1a1a] mb-3 leading-snug group-hover:text-[#a31f34] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-gray-700 font-semibold">{item.speaker}</p>
                  <p className="font-inter text-sm text-gray-500 mt-1">{item.affiliation}</p>
                  <span className="mt-auto pt-4 font-inter text-xs font-bold uppercase tracking-wider text-[#a31f34]">
                    Read more →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
