import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

export default function WhyInternationalLawMattersPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#800000] text-white pt-16 pb-12 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[#fbb03b] mb-6 font-bold uppercase tracking-widest text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/cpil" className="hover:text-white transition-colors">Centre for Public Interest Litigation</Link>
            <span className="text-white/30">/</span>
            <span className="truncate max-w-[200px] md:max-w-none tracking-normal font-medium">Why International Law Matters</span>
          </nav>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Why International Law Matters: <br />
            <span className="text-[#fbb03b]">Inaugural Session</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">By Centre for the Promotion of International Law</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">March 6, 2025</span>
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
                src="/images/cpil/guest-lecture.webp"
                alt="Why International Law Matters"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl space-y-8">
              <p>
                On 6th March 2025, the <strong>Centre for the Promotion of International Law</strong> successfully hosted the inaugural session of the &apos;Why International Law Matters, Especially Today&apos; series. The event aimed to initiate meaningful discussions on pressing global issues through conversations with distinguished experts in the field of international law.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Expert Insights</h3>
              <p>
                The session was led by esteemed speaker <strong>Dr. Srinivas Burra</strong>, who delivered an insightful presentation on the contemporary relevance of international law. Dr. Burra explored the evolving challenges faced by the global community and highlighted the role of international law in shaping global governance.
              </p>
              <p>
                His presentation provided valuable insights into the complexities and significance of international legal frameworks in addressing current global concerns.
              </p>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Interactive Dialogue</h3>
              <p>
                The event was co-hosted by Prof. Ananyo Mitra and Prof. Shambhavi Thakur, who emphasized the series&apos; objective of fostering thought-provoking dialogue among students and faculty members. The interactive format of the session encouraged active participation, allowing attendees to engage directly with the speaker and seek clarity on complex legal issues.
              </p>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Conclusion</h3>
              <p>
                The Centre for the Promotion of International Law extends its gratitude to all participants for their involvement and enthusiasm. This inaugural session marked a promising start to the series, and the Centre looks forward to continuing to facilitate impactful discussions on international law in future editions.
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
                      title: "Guest Lecture on Public Interest Litigation",
                      date: "March 6, 2025",
                      href: "/news/why-international-law-matters-inaugural-session",
                      image: "/images/cpil/guest-lecture.webp"
                    },
                    {
                      title: "Workshop on Environmental Law & River Conservation",
                      date: "October 19, 2024",
                      href: "/news/international-conference-on-rivers",
                      image: "/images/cpil/rivers.webp"
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
