import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Lightbulb, PenTool, BarChart3 } from 'lucide-react';

export default function FlipCasePage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#800000] text-white pt-16 pb-12 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[#fbb03b] mb-6 font-bold uppercase tracking-widest text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/centre-for-justice-through-technology" className="hover:text-white transition-colors">Centre for Justice through Technology</Link>
            <span className="text-white/30">/</span>
            <span className="truncate max-w-[200px] md:max-w-none tracking-normal font-medium">Flip Case - A Legal Design Challenge</span>
          </nav>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Flip Case <br />
            <span className="text-[#fbb03b]">A Legal Design Challenge</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">By Centre for Justice through Technology (CJT)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">October 19, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-12 md:py-20 px-[5%]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          {/* Main Article Section */}
          <div className="lg:w-[68%]">
            <div className="relative aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl mb-12 group">
              <Image
                src="/images/justice/flip-case.webp"
                alt="Flip Case A Legal Design Challenge"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl space-y-8">
              <p>
                The Centre for Justice Through Technology (CJT) at Vinayaka Mission&apos;s Law School successfully hosted the <strong>Flip Case: A Legal Design Challenge</strong> on October 19, 2024. This innovative event combined law and design thinking, challenging participants to rethink and reimagine legal cases from a creative, problem-solving perspective.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Objective</h3>
              <p>
                The primary aim of the Flip Case challenge was to encourage law students to step outside conventional thinking and explore legal issues through design methodologies. The event promoted interdisciplinary collaboration and emphasized the importance of user-centered approaches in addressing legal challenges.
              </p>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Event Format</h3>
              <p>
                Participants were tasked with transforming legal scenarios by employing design thinking principles. They were given complex cases to analyze and then asked to &apos;flip&apos; the case by redesigning the legal process or solution to make it more accessible, efficient, and user-friendly.
              </p>
              
              <ul className="space-y-6 list-none pl-0 my-8">
                <li className="flex gap-4">
                  <BarChart3 className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Case Presentation</strong>
                    Teams were provided with specific legal cases and a set of problems to tackle within a limited timeframe.
                  </div>
                </li>
                <li className="flex gap-4">
                  <PenTool className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Design Thinking Application</strong>
                    Participants used creative tools to develop solutions aimed at improving the legal process or outcomes.
                  </div>
                </li>
                <li className="flex gap-4">
                  <Lightbulb className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Final Presentations</strong>
                    Each team presented their redesigned case solutions, showcasing innovative ways to address legal problems through design.
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Highlights</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>The event drew enthusiastic participation from law students who demonstrated creative thinking and problem-solving skills.</li>
                <li>The Centre for Justice Through Technology (CJT) ensured that the event was interactive, engaging, and beneficial for participants interested in both legal and technological domains.</li>
                <li>Several standout teams presented bold, forward-thinking ideas, offering practical insights into how legal design could improve access to justice and legal processes.</li>
              </ul>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Conclusion</h3>
              <p>
                The Flip Case event was a resounding success, pushing the boundaries of conventional legal education by incorporating design thinking into law. The event not only enhanced the participants&apos; understanding of legal problems but also opened new avenues for exploring how technology and design can improve the legal landscape.
              </p>
              <p>
                The Centre for Justice Through Technology (CJT) plans to continue hosting such unique events, further integrating technology and innovation into the legal field for the benefit of both students and the broader legal community.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[32%]">
            <div className="sticky top-24 space-y-12">
              <div className="bg-[#fcfbf9] rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-playfair text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">Today&apos;s top news</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "Empowering Justice with AI",
                      date: "January 15, 2025",
                      href: "/news/ai-for-justice-vmls-setu-law-workshop",
                      image: "/images/justice/ai-center-of-justice.webp"
                    },
                    {
                      title: "E-Filing for Young Lawyers",
                      date: "April 30, 2024",
                      href: "/news/e-filing",
                      image: "/images/justice/e-filling.webp"
                    },
                    {
                      title: "Flip Case Legal Design Challenge",
                      date: "October 19, 2024",
                      href: "/news/flip-case-legal-design-challenge",
                      image: "/images/justice/flip-case.webp"
                    }
                  ].map((news, index) => (
                    <Link key={index} href={news.href} className="flex gap-4 group">
                      <div className="relative w-20 h-20 shrink-0 rounded-xl overflow-hidden shadow-sm">
                        <Image
                          src={news.image}
                          alt={news.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#a31f34] transition-colors leading-snug mb-1">
                          {news.title}
                        </h4>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold flex items-center gap-1">
                          <Calendar size={10} />
                          {news.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
