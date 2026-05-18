import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User } from 'lucide-react';

export default function InternationalConferenceOnRiversPage() {
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
            <span className="truncate max-w-[200px] md:max-w-none tracking-normal font-medium">International Conference on Rivers</span>
          </nav>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight">
            International Conference on Rivers <br />
            <span className="text-[#fbb03b]">Global Focus on Sustainable Governance</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">By Centre for Public Interest Litigation</span>
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
                src="/images/cpil/rivers.webp"
                alt="International Conference on Rivers"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl space-y-8">
              <p>
                The <strong>International Conference on Rivers</strong>, hosted by Vinayaka Mission&apos;s Law School (VMLS) under the aegis of Vinayaka Mission&apos;s Research Foundation (Deemed-to-be-University), concluded successfully on October 19, 2024, after two days of insightful discussions on river governance and environmental sustainability. The event drew international experts, legal scholars, and policymakers to address the socio-legal challenges surrounding rivers.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Expert Perspectives</h3>
              <p>
                The conference featured prominent speakers such as <strong>Dr. Tiina Paloniitty</strong> from the University of Helsinki, who discussed legal frameworks for sustainable river governance, <strong>Prof. S.M. Ramasamy</strong> from Bharathidasan University, who provided insights into the environmental and geological aspects of river systems, and <strong>Mr. Eklavya Prasad</strong>, Managing Trustee of Megh Pyne Abhiyan, who highlighted the role of community-led water management.
              </p>
              <p>
                Together, their diverse perspectives underscored the need for interdisciplinary approaches, integrating legal, environmental, and community-based solutions to effectively address the complex challenges of river governance.
              </p>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Key Themes</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 my-8">
                <li><strong>Day 1:</strong> Explored themes like transboundary river governance, environmental justice, and legal frameworks for pollution control.</li>
                <li><strong>Day 2:</strong> Focused on regional river conflicts and included a panel discussion on Floods and Ecosystems: Sustainable Strategies for Integrated Management, offering solutions to key environmental challenges like the Cauvery River dispute.</li>
              </ul>
              <p>
                The Conference received over 100 abstracts, with 40 papers presented on diverse topics related to river governance and sustainability.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Conclusion</h3>
              <p>
                Hon&apos;ble Chancellor <strong>Dr. A.S. Ganesan</strong> praised the event, stating, <em>&quot;The International Conference on Rivers 2024 highlights our institution&apos;s commitment to addressing global environmental challenges through interdisciplinary dialogue. We are grateful to our partners and participants for their invaluable contributions, and we look forward to future collaborations to advance legal education and sustainable river governance.&quot;</em>
              </p>
              <p>
                The conference concluded with the presentation of the conference report and awards for outstanding research papers. The event underscored the importance of collaborative efforts and integrating indigenous perspectives into river management policies.
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
