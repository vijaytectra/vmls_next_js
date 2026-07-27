import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Aarambh – The Freshers' Fiesta | VMLS News & Events",
  description:
    "Aarambh at VMLS was a vibrant celebration dedicated to welcoming the newest members of our law school family.",
};

const galleryImages = [
  "/images/events/fiesta/3rd.webp",
  "/images/events/fiesta/3rd-2.webp",
  "/images/events/fiesta/3rd-3.webp",
  "/images/events/fiesta/3rd-4.webp",
  "/images/events/fiesta/5yr.webp",
  "/images/events/fiesta/5yr-2.webp",
  "/images/events/fiesta/5yr-3.webp",
  "/images/events/fiesta/5yr-4.webp",
];

const topNews = [
  {
    title:
      "LL.M. In Artificial Intelligence, Emerging Technologies and Intellectual Property Rights",
    href: "/blogs/llm-in-artificial-intelligence-emerging-technologies-and-intellectual-property-rights",
  },
  {
    title: "LLM in Criminal Law and Practice",
    href: "/blogs/llm-in-criminal-law-and-practice",
  },
  {
    title: "What is an LL.M.? Full Form, Programme, Course Duration, Admission 2025",
    href: "/blogs/what-is-llm-master-of-law-degree",
  },
  {
    title: "The Lack of Clinical Legal Education in India and its Implications",
    href: "/blogs/lack-of-clinical-legal-education-in-india",
  },
  {
    title:
      "Bringing Indian Contracts II to Life by Means of Clinical Legal Education for Law Students",
    href: "/blogs/bringing-indian-contracts-ii-to-life-clinical-legal-education-vmls",
  },
];

export default function AarambhFiestaPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium flex-wrap">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/student-affairs" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Student Affairs
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Aarambh Fiesta</span>
        </div>
      </nav>

      <section className="relative w-full bg-[#800000] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-[5%] relative z-10">
          <div className="flex flex-col lg:flex-row min-h-[420px]">
            <div className="lg:w-[50%] py-12 md:py-20 flex flex-col justify-center">
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Aarambh <br />
                <span className="text-[#fbb03b]">The Freshers&apos; Fiesta</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
                A vibrant celebration welcoming the newest members of the VMLS family.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2">
          <Image
            src="/images/events/fiesta/thumbnail.webp"
            alt="Aarambh Fiesta at VMLS"
            fill
            priority
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000] via-[#800000]/40 to-transparent" />
        </div>
        <div className="lg:hidden relative h-[280px] w-full">
          <Image
            src="/images/events/fiesta/thumbnail.webp"
            alt="Aarambh Fiesta at VMLS"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      </section>

      <section className="py-12 md:py-16 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          <div className="lg:w-[70%]">
            <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-8 font-bold leading-tight">
              Aarambh – The Freshers&apos; Fiesta
            </h2>
            <div className="font-inter text-gray-700 leading-relaxed text-justify text-base md:text-lg mb-12">
              <p>
                Aarambh at VMLS was a vibrant celebration dedicated to welcoming the newest members of our law school family. More than just an icebreaker, it became a stage for freshers to compete, explore, and showcase their talents and creativity. From soulful singing to energetic dance-offs and fun games, the event was filled with excitement, laughter, and unforgettable moments. Aarambh wasn&apos;t just a beginning — it was a blast of color, rhythm, and campus camaraderie that set the tone for the journey ahead.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {galleryImages.map((src, index) => (
                <div key={src} className="relative aspect-[2/1] shadow-md overflow-hidden group bg-gray-100">
                  <Image
                    src={src}
                    alt={`Aarambh Fiesta moment ${index + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 35vw"
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:w-[30%]">
            <div className="sticky top-24">
              <h3 className="font-playfair text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">
                Today&apos;s top news
              </h3>
              <div className="space-y-0 border border-gray-100 shadow-sm">
                {topNews.map((news) => (
                  <Link
                    key={news.href}
                    href={news.href}
                    className="block p-5 bg-gray-50/50 hover:bg-white border-b border-gray-100 text-sm font-inter text-gray-800 hover:text-[#a31f34] transition-all last:border-b-0 leading-relaxed"
                  >
                    {news.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
