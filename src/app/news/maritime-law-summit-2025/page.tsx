import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Scale, Handshake, Anchor } from 'lucide-react';

export default function MaritimeLawSummitPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#800000] text-white pt-16 pb-12 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[#fbb03b] mb-6 font-bold uppercase tracking-widest text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/maritime-law" className="hover:text-white transition-colors">Centre for Maritime Law</Link>
            <span className="text-white/30">/</span>
            <span className="truncate max-w-[200px] md:max-w-none tracking-normal font-medium">Maritime Law Summit 2025</span>
          </nav>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Maritime Law Summit 2025 <br />
            <span className="text-[#fbb03b]">Charting the Course for Cargo, Contracts, and Claims</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">By Centre for Maritime Law</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">September 6, 2025</span>
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
                src="/images/maritime/maritime.webp"
                alt="Maritime Law Summit 2025"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl space-y-8">
              <p>
                Vinayaka Mission&apos;s Law School (VMLS), a constituent college of Vinayaka Mission&apos;s Research Foundation (Deemed to be University), successfully hosted the <strong>Maritime Law Summit 2025</strong> on 6th September 2025 at its Paiyanoor campus, Chennai. 
              </p>
              <p>
                Themed <em>&quot;Charting the Course for Cargo, Contracts, and Claims,&quot;</em> the summit brought together judges, senior advocates, policymakers, maritime experts, and academicians to deliberate on critical issues in shipping and trade law.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Key Highlights</h3>
              
              <ul className="space-y-6 list-none pl-0 my-8">
                <li className="flex gap-4">
                  <Anchor className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Inauguration of the Centre for Maritime Law (CML)</strong>
                    A major milestone of the summit was the inauguration of the CML, envisioned as a hub for research, teaching, and industry collaboration in maritime studies.
                  </div>
                </li>
                <li className="flex gap-4">
                  <Scale className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Distinguished Speakers</strong>
                    Eminent speakers, including Dr. A. Francis Julian, Justice Syam Kumar V.M, and Shri Amitava Majumdar, addressed evolving challenges in admiralty jurisdiction, cargo claims, and shipping contracts.
                  </div>
                </li>
                <li className="flex gap-4">
                  <Handshake className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Global Significance</strong>
                    The summit underscored maritime law&apos;s growing significance in global trade, technology, and environmental governance.
                  </div>
                </li>
              </ul>
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
                      title: "Maritime Law Summit 2025",
                      date: "September 6, 2025",
                      href: "/news/maritime-law-summit-2025",
                      image: "/images/maritime/maritime.webp"
                    },
                    {
                      title: "Special Lecture on International Maritime Law",
                      date: "Feb 24, 2024",
                      href: "/news/special-lecture-international-maritime-law",
                      image: "/images/maritime/special-lecture-maritime.webp"
                    },
                    {
                      title: "Distinguished Guest Lecture Series on the Law of the Sea",
                      date: "03rd June, 2024",
                      href: "/news/distinguished-guest-lecture-series-law-of-the-sea",
                      image: "/images/maritime/distinguish-guest.webp"
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
