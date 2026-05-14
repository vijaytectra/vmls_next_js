import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Lightbulb, MessageCircle, Navigation } from 'lucide-react';

export default function SpecialLectureMaritimeLawPage() {
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
            <span className="truncate max-w-[200px] md:max-w-none tracking-normal font-medium">Special Lecture on International Maritime Law</span>
          </nav>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Special Lecture on <br />
            <span className="text-[#fbb03b]">International Maritime Law</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">By Centre for Maritime Law</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">Feb 24, 2024</span>
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
                src="/images/maritime/special-lecture-maritime.webp"
                alt="Special Lecture on International Maritime Law"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl space-y-8">
              <p>
                On February 24th, 2024, the Centre for Maritime Law at Vinayaka Mission&apos;s Law School (VMLS) hosted a highly successful <strong>Special Lecture on International Maritime Law</strong>. The event featured distinguished speakers, Prof. Mayank Suri, Assistant Professor at Jindal Global Law School (JGLS), and Mr. Suriya N Sundararajan, WMU-GOI Project and Research Support Fellow, who delivered insightful presentations that captivated the audience.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Event Highlights</h3>
              
              <ul className="space-y-6 list-none pl-0 my-8">
                <li className="flex gap-4">
                  <Navigation className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Expert Insights</strong>
                    The lecture offered an in-depth exploration of various aspects of maritime law, from the specialized language used in the field to the intricate legal frameworks governing international waters.
                  </div>
                </li>
                <li className="flex gap-4">
                  <Lightbulb className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Emerging Trends</strong>
                    Both speakers shared valuable knowledge on emerging trends in maritime law, providing the students with a clear understanding of the dynamic and evolving nature of this area of law.
                  </div>
                </li>
                <li className="flex gap-4">
                  <MessageCircle className="text-[#a31f34] shrink-0 mt-1" size={24} />
                  <div>
                    <strong className="text-gray-900 block mb-1">Engaging Discussions</strong>
                    The session sparked thought-provoking discussions among students, encouraging them to think critically about the complexities of maritime law and its global significance.
                  </div>
                </li>
              </ul>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Impact</h3>
              <p>
                <strong>Knowledge Enrichment:</strong> The special lecture broadened the students&apos; horizons, offering them an opportunity to delve into the practicalities of international maritime law and how it impacts global trade, security, and environmental regulations.
              </p>
              <p>
                <strong>Interactive Learning:</strong> The interactive nature of the session encouraged participants to ask questions and engage in dialogue with the speakers, further deepening their comprehension of the subject matter.
              </p>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Conclusion</h3>
              <p>
                The event was met with enthusiastic participation and positive feedback, making it a resounding success. The VMLS Centre for Maritime Law remains committed to delivering high-quality legal education through such initiatives, equipping students with the knowledge and skills necessary to excel in the field of maritime law.
              </p>
              <p>
                A heartfelt thank you goes out to Prof. Mayank Suri and Mr. Suriya N Sundararajan for their invaluable contributions, as well as to all participants who made the event a success. Stay tuned for more exciting initiatives from VMLS as we continue to pave the way for excellence in legal education!
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
