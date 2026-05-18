import Image from 'next/image';
import Link from 'next/link';

export default function AarambhFiestaPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/student-affairs" className="text-gray-500 hover:text-[#a31f34] transition-colors">Student Affairs</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Aarambh Fiesta</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-[#800000] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-[5%] relative z-10">
          <div className="flex flex-col lg:flex-row min-h-[450px]">
            <div className="lg:w-[50%] py-12 md:py-20 flex flex-col justify-center">
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Aarambh <br /><span className="text-[#fbb03b]">The Freshers&apos; Fiesta</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-justify">
                The grand induction festival of VMLS, where tradition meets contemporary vibes. Aarambh is more than just a welcome; it&apos;s the start of an unforgettable journey.
              </p>
            </div>
          </div>
        </div>
        {/* Background Image for Desktop */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2">
          <Image
            src="/images/news/3rd.webp"
            alt="Aarambh Fiesta at VMLS"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#800000] via-transparent to-transparent"></div>
        </div>
        {/* Mobile Image */}
        <div className="lg:hidden relative h-[300px] w-full">
          <Image
            src="/images/news/3rd.webp"
            alt="Aarambh Fiesta at VMLS"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-12 md:py-16 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          
          {/* Main Article Section (70%) */}
          <div className="lg:w-[70%]">
            <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-8 font-bold leading-tight">
              Aarambh – The Freshers' Fiesta
            </h2>
            <div className="font-inter text-gray-700 leading-relaxed text-justify text-base md:text-lg space-y-6 mb-12">
              <p>
                Aarambh at VMLS was a vibrant celebration dedicated to welcoming the newest members of our law school family. More than just an icebreaker, it became a stage for freshers to compete, explore, and showcase their talents and creativity. 
              </p>
              <p>
                From soulful singing to energetic dance-offs and fun games, the event was filled with excitement, laughter, and unforgettable moments. Aarambh wasn't just a beginning — it was a blast of color, rhythm, and campus camaraderie that set the tone for the journey ahead.
              </p>
            </div>

            {/* Event Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative aspect-video shadow-md overflow-hidden group">
                <Image
                  src="/images/news/3rd-3.webp"
                  alt="Aarambh Moments"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-video shadow-md overflow-hidden group">
                <Image
                  src="/images/news/3rd-4.webp"
                  alt="Aarambh Moments"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-video shadow-md overflow-hidden group">
                <Image
                  src="/images/news/5yr-3.webp"
                  alt="Aarambh Moments"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-video shadow-md overflow-hidden group">
                <Image
                  src="/images/news/5yr-2.webp"
                  alt="Aarambh Moments"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Sidebar (30%) */}
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

      {/* Decorative Architecture Element at Bottom Left */}
      <div className="fixed bottom-0 left-0 w-[300px] opacity-[0.05] pointer-events-none select-none z-0">
        <Image
          src="/images/vmls/vmls-arch.png"
          alt=""
          width={400}
          height={400}
          className="grayscale"
        />
      </div>
    </main>
  );
}
