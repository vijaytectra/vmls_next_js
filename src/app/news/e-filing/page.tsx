import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, CheckCircle2, MonitorPlay } from 'lucide-react';

export default function EFilingPage() {
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
            <span className="truncate max-w-[200px] md:max-w-none tracking-normal font-medium">Introduction to E-Filing for Young Lawyers</span>
          </nav>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Introduction to E-Filing <br />
            <span className="text-[#fbb03b]">for Young Lawyers</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#fbb03b]" />
              <span className="font-medium uppercase tracking-widest">By Centre for Justice through Technology (CJT)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fbb03b]" />
              <span className="font-medium uppercase tracking-widest">April 30, 2024</span>
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
                src="/images/justice/e-filling.webp"
                alt="Introduction to E-Filing for Young Lawyers"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl space-y-8">
              <p>
                The event titled <strong>&quot;Introduction to E-Filing for Young Lawyers&quot;</strong> was successfully held on April 30, 2024, at Vinayaka Mission&apos;s Law School, Paiyanoor, Chennai. Organized by the Centre for Justice Through Technology (CJT) at Vinayaka Mission&apos;s Law School, this event aimed at equipping young lawyers with the essential skills to navigate the e-filing process efficiently.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Resource Person</h3>
              <p>
                The session was conducted by <strong>Advocate P. Uma Maheswari</strong>, a distinguished legal practitioner from the Madras High Court. Her vast experience in court procedures, particularly with e-filing, ensured that the participants received practical insights into this rapidly growing digital practice.
              </p>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Participants</h3>
              <p>
                The workshop targeted young lawyers who had enrolled after 2023. With limited seats available, the event saw enthusiastic participation, with registrations filling up quickly. The session provided invaluable hands-on guidance for newly enrolled professionals eager to familiarize themselves with the digital filing processes required by courts today.
              </p>
              
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Key Highlights</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="bg-[#fcfbf9] p-8 rounded-3xl border-t-4 border-[#a31f34] shadow-sm">
                  <CheckCircle2 className="text-[#a31f34] mb-4" size={32} />
                  <h4 className="font-playfair text-xl font-bold mb-4 text-gray-900">Introduction to E-Filing</h4>
                  <p className="leading-relaxed text-gray-600">
                    Advocate Uma Maheswari began by introducing the participants to the concept of e-filing, explaining its importance in the modern legal landscape, especially in the aftermath of the pandemic, when the judiciary transitioned many operations to online platforms.
                  </p>
                </div>
                <div className="bg-[#fcfbf9] p-8 rounded-3xl border-t-4 border-gray-400 shadow-sm">
                  <MonitorPlay className="text-gray-500 mb-4" size={32} />
                  <h4 className="font-playfair text-xl font-bold mb-4 text-gray-900">Step-by-Step Demonstration</h4>
                  <p className="leading-relaxed text-gray-600">
                    The resource person provided a comprehensive, step-by-step demonstration on how to file cases digitally. This included the preparation of documents, uploading them to the relevant court portals, and addressing common challenges faced during the process.
                  </p>
                </div>
              </div>
              
              <p>
                <strong>Interactive Q&A Session:</strong> The interactive segment saw the participants ask insightful questions, which Advocate Uma Maheswari addressed with clarity. The attendees left with a clear understanding of the e-filing system and practical know-how that will assist them in their professional practice.
              </p>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Conclusion</h3>
              <p>
                The session concluded with closing remarks from faculty members of Vinayaka Mission&apos;s Law School, who emphasized the importance of staying updated with legal technology. The event not only equipped young lawyers with necessary e-filing skills but also highlighted the growing role of digital tools in the legal profession.
              </p>
              <p>
                The event was a testament to Vinayaka Mission&apos;s Law School&apos;s commitment to integrating technology into legal education, preparing students and professionals to meet the demands of an evolving legal industry. For more updates on upcoming events, participants were encouraged to stay connected with the Centre for Justice Through Technology (CJT).
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
                        <h4 className="font-bold text-gray-900 group-hover:text-[#a31f34] transition-colors leading-snug mb-1">
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
