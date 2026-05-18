import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Target, BookOpen } from 'lucide-react';

export default function DistinguishedGuestLectureLawOfTheSeaPage() {
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
            <span className="truncate max-w-[200px] md:max-w-none tracking-normal font-medium">Distinguished Guest Lecture Series on the Law of the Sea</span>
          </nav>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Distinguished Guest Lecture Series <br />
            <span className="text-[#fbb03b]">on the Law of the Sea</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">By Centre for Maritime Law</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">03rd June, 2024</span>
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
                src="/images/maritime/distinguish-guest.webp"
                alt="Distinguished Guest Lecture Series on the Law of the Sea"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl space-y-8">
              <p>
                The VMLS Centre for Maritime Law successfully hosted a distinguished <strong>Guest Lecture Series on the Law of the Sea</strong> across three insightful sessions held on March 23rd, March 26th, and April 3rd, 2024. The series, designed to deepen students&apos; understanding of pivotal maritime law concepts, was a significant educational initiative for the institution.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Key Topics Covered</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
                <div className="bg-[#fcfbf9] p-8 rounded-3xl border-t-4 border-[#a31f34] shadow-sm">
                  <BookOpen className="text-[#a31f34] mb-4" size={32} />
                  <h4 className="font-playfair text-xl font-bold mb-4 text-gray-900">History of UNCLOS</h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    The lectures provided students with a comprehensive overview of the historical context, development, and significance of UNCLOS, one of the most crucial international agreements governing the world&apos;s oceans.
                  </p>
                </div>
                <div className="bg-[#fcfbf9] p-8 rounded-3xl border-t-4 border-gray-400 shadow-sm">
                  <Target className="text-gray-500 mb-4" size={32} />
                  <h4 className="font-playfair text-xl font-bold mb-4 text-gray-900">Delineation of Maritime Zones</h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Participants were guided through the legal frameworks for defining maritime zones, including territorial seas, EEZs, and continental shelves, emphasizing their importance in international law.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Expert Speaker</h3>
              <p>
                The series was led by <strong>Mr. Suriya N Sundararajan</strong>, a Project & Research Support Fellow at the World Maritime University (WMU). Mr. Sundararajan&apos;s deep expertise and experience in the field brought complex concepts to life, ensuring students not only grasped the fundamentals but also appreciated the broader implications of maritime law on global governance and international relations.
              </p>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Event Impact</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li><strong>Knowledge Enhancement:</strong> The lectures enriched students&apos; understanding of the Law of the Sea and its role in regulating activities on the high seas, resource management, and environmental protection.</li>
                <li><strong>Engagement and Participation:</strong> The interactive nature of the series allowed students to engage directly with the speaker, fostering a dynamic learning environment where they could clarify doubts and explore real-world applications of the law.</li>
              </ul>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Conclusion</h3>
              <p>
                The Guest Lecture Series on the Law of the Sea was an enriching and intellectually stimulating experience for the students at Vinayaka Mission&apos;s Law School. We extend our heartfelt gratitude to Mr. Suriya N Sundararajan for sharing his invaluable knowledge, and to our students for their active participation.
              </p>
              <p>
                The VMLS Centre for Maritime Law remains dedicated to offering such enriching educational opportunities and fostering a deeper understanding of maritime law through expert-led events. Stay tuned for more exciting initiatives from the VMLS Centre for Maritime Law!
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
