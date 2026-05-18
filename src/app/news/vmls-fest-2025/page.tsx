import Image from 'next/image';
import Link from 'next/link';

export default function VMLSFestPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/student-affairs" className="text-gray-500 hover:text-[#a31f34] transition-colors">Student Affairs</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">VMLS Fest 2025</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[400px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              VMLS Fest <br /><span className="text-[#fbb03b]">2025</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-justify">
              Two Days. Infinite Vibes. One Unforgettable Experience. The flagship cultural extravaganza of Vinayaka Mission's Law School returns with grander stages and more vibrant energy.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/studentaff/thumbnail.webp"
              alt="VMLS Fest 2025"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-12 md:py-16 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Main Article Section */}
          <div className="lg:w-[70%]">
            <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-8 font-bold leading-tight">
              VMLS Fest 2025: A Symphony of Talent and Energy
            </h2>
            <div className="font-inter text-gray-700 leading-relaxed text-justify text-base md:text-lg space-y-6 mb-12">
              <p>
                VMLS Fest 2025 wasn't just an event — it was an adrenaline rush set to music, lights, and thunderous cheers! For two explosive days, the Vinayaka Mission's Law School campus transformed into a celebration zone where beats dropped, mics lit up, and talent took over. 
              </p>
              <p>
                From rap battles to power-packed dance moves, from soulful singing to laugh-out-loud comedy, the stage belonged to the students—and they owned every second. The crowd roared, the spotlight dazzled, and the vibe? Unmatched. With thrilling competitions, live performances, and non-stop entertainment, VMLS Fest became the heartbeat of campus life. This wasn't just a fest — it was a moment, a movement, a memory that will echo in the halls of VMLS for years to come.
              </p>
            </div>

            {/* Event Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-video shadow-md overflow-hidden group">
                <Image
                  src="/images/studentaff/1.webp"
                  alt="VMLS Fest Performances"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <div className="relative aspect-video shadow-md overflow-hidden group">
                <Image
                  src="/images/studentaff/2.webp"
                  alt="VMLS Fest Moments"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <div className="relative aspect-video shadow-md overflow-hidden group">
                <Image
                  src="/images/studentaff/3.webp"
                  alt="VMLS Fest Stage"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
              <div className="relative aspect-video shadow-md overflow-hidden group">
                <Image
                  src="/images/studentaff/4.webp"
                  alt="Valedictory Function"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[30%]">
            <div className="sticky top-24">
              <h3 className="font-playfair text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">Today's top news</h3>
              <div className="space-y-0 border border-gray-100 shadow-sm">
                {[
                  {
                    title: "LL.M. In Artificial Intelligence, Emerging Technologies and Intellectual Property Rights",
                    href: "/blogs/llm-in-artificial-intelligence-emerging-technologies-and-intellectual-property-rights"
                  },
                  {
                    title: "LLM in Criminal Law and Practice",
                    href: "/blogs/llm-in-criminal-law-and-practice"
                  },
                  {
                    title: "What is an LL.M.? Full Form, Programme, Course Duration, Admission 2025",
                    href: "/blogs/what-is-llm-master-of-law-degree"
                  },
                  {
                    title: "The Lack of Clinical Legal Education in India and its Implications",
                    href: "/blogs/lack-of-clinical-legal-education-in-india"
                  },
                  {
                    title: "Bringing Indian Contracts II to Life by Means of Clinical Legal Education for Law Students",
                    href: "/blogs/bringing-indian-contracts-ii-to-life-clinical-legal-education-vmls"
                  }
                ].map((news, index) => (
                  <Link key={index} href={news.href} className="block p-5 bg-gray-50/50 hover:bg-white border-b border-gray-100 font-inter text-gray-800 hover:text-[#a31f34] transition-all last:border-b-0 leading-relaxed">
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
