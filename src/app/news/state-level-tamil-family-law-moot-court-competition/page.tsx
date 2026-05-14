import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Share2, Award, Gavel, Users } from 'lucide-react';

export default function StateLevelMootCourtPage() {
  return (
    <main className="min-h-screen bg-[#f5f3ef] overflow-hidden">
      {/* Hero Section */}
      <section className="bg-[#800000] text-white pt-16 pb-12 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[#fbb03b] mb-6 font-bold uppercase tracking-widest text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/global-tamil-law-centre" className="hover:text-white transition-colors">Global Tamil Law Centre</Link>
            <span className="text-white/30">/</span>
            <span className="truncate max-w-[200px] md:max-w-none tracking-normal font-medium">State-Level Tamil Family Law Moot Court</span>
          </nav>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight">
            VMLS Hosts State-Level <br />
            <span className="text-[#fbb03b]">Tamil Family Law Moot Court Competition</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <Gavel className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">Surana & Surana International Attorneys</span>
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
                src="/images/global/in8.webp"
                alt="Tamil Family Law Moot Court Competition"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl space-y-8">
              <p>
                Vinayaka Mission&apos;s Law School&apos;s Global Tamil Law Centre (GTLC), in collaboration with <strong>Surana & Surana International Attorneys</strong>, organized a prestigious State-Level Tamil Family Law Moot Court Competition from 26th to 28th September 2024. The event attracted <strong>40 Teams</strong> from law colleges across Tamil Nadu, showcasing the growing interest in Tamil legal advocacy.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Distinguished Inaugural Session</h3>
              <p>
                The inaugural session was graced by <strong>Hon&apos;ble Justice (Retd.) Dr. P Jyothimani</strong>, Former Judicial Member of the National Green Tribunal & Chairperson of GTLC, and <strong>Mrs. Kosalai Mathan</strong> from the University of Jaffna, Sri Lanka. The presence of these legal luminaries set a high standard for the competition.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-[#fcfbf9] p-8 rounded-3xl border-t-4 border-[#a31f34] shadow-sm">
                  <Award className="text-[#a31f34] mb-4" size={32} />
                  <h4 className="font-playfair text-xl font-bold mb-4 text-gray-900">Winners: GLC Madurai</h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Emerging victorious with a cash prize of ₹25,000, the team comprised Priyadharshini R, Gokula Krishnakumari K, and Siva Subramanian R.
                  </p>
                </div>
                <div className="bg-[#fcfbf9] p-8 rounded-3xl border-t-4 border-gray-400 shadow-sm">
                  <Users className="text-gray-500 mb-4" size={32} />
                  <h4 className="font-playfair text-xl font-bold mb-4 text-gray-900">Runners: GLC Salem</h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Securing the runner-up position and ₹15,000, the team included Siva Prashaath K, Sri Gugan S, and Jerom Stuward J.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Expert Adjudication</h3>
              <p>
                The final was judged by a distinguished five-member bench, including <strong>Hon&apos;ble Judge Mr. K. Sakthivel</strong>, Principal District Munsif, Thiruvannamalai, and <strong>Adv. Varadhan M</strong>, Member of the Bar Council of Tamil Nadu and Puducherry.
              </p>

              <p>
                Dr. A.S. Ganesan, Chancellor of Vinayaka Mission&apos;s Research Foundation (VMRF), and Mr. Suresh Samuel, a member of the Board of Management at VMRF, conveyed their best wishes to all participating students and the winning team.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[32%]">
            <div className="sticky top-24 space-y-12">
              {/* Recent Posts Widget */}
              <div className="bg-[#fcfbf9] rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h3 className="font-playfair text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">Today&apos;s top news</h3>
                <div className="space-y-6">
                  {[
                    {
                      title: "International Tamil Law Conference 2025",
                      date: "March 18, 2025",
                      href: "/news/international-tamil-law-conference-2025",
                      image: "/images/global/inter-tamil-law.webp"
                    },
                    {
                      title: "Intra Trail Tamil Moot Court",
                      date: "June 03, 2024",
                      href: "/news/intra-trail-tamil-moot-court",
                      image: "/images/global/tamil-moot.webp"
                    },
                    {
                      title: "LLM in Criminal Law and Practice",
                      date: "June 27, 2025",
                      href: "/blogs/llm-in-criminal-law-and-practice",
                      image: "/images/blogs/35.webp"
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
