import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Share2, BookOpen, Star, Sparkles } from 'lucide-react';

export default function IntraTrialMootCourtPage() {
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
            <span className="truncate max-w-[200px] md:max-w-none tracking-normal font-medium">Intra Trail Tamil Moot Court</span>
          </nav>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Empowering Advocacy: <br />
            <span className="text-[#fbb03b]">The Intra Trail Tamil Moot Court</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">Trial Advocacy & Legal Argumentation</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium uppercase tracking-widest">June 03, 2024</span>
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
                src="/images/global/tamil-moot.webp"
                alt="Intra Trail Tamil Moot Court"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl space-y-8">
              <p>
                The Intra Trail Tamil Moot Court at Vinayaka Mission&apos;s Law School serves as a vital platform for budding legal professionals to hone their skills. With <strong>19 teams participating</strong>, the competition demonstrated high standards in legal argumentation and trial advocacy among our students.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
                <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100">
                  <div className="text-[#a31f34] font-bold text-4xl mb-2">19</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Participating Teams</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100">
                  <div className="text-[#a31f34] font-bold text-4xl mb-2">12</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Advocate Judges</div>
                </div>
                <div className="bg-gray-50 p-6 rounded-2xl text-center border border-gray-100">
                  <div className="text-[#a31f34] font-bold text-4xl mb-2">3</div>
                  <div className="text-sm text-gray-500 uppercase tracking-widest font-bold">Finalists Benches</div>
                </div>
              </div>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Expert Adjudication</h3>
              <p>
                The preliminary and semi-final rounds were evaluated by a panel of <strong>10 district court advocates</strong> and <strong>2 high court advocates</strong>, ensuring a rigorous and fair assessment. The final round was a prestigious affair, presided over by a senior high court advocate along with our esteemed <strong>Dean, Ananth Padmanabhan</strong>, and Prof. Krishna Kishore.
              </p>

              <div className="bg-gradient-to-br from-[#800000] to-[#a31f34] p-10 rounded-3xl text-white shadow-xl relative overflow-hidden group my-12">
                <div className="relative z-10">
                  <Sparkles className="text-[#fbb03b] mb-4" size={32} />
                  <h4 className="font-playfair text-2xl font-bold mb-4">Organizational Excellence</h4>
                  <p className="opacity-90 leading-relaxed italic">
                    &quot;The competition was flawlessly executed, thanks to the dedicated efforts of Dr. Fowmina C. Her meticulous planning and unwavering commitment ensured a seamless experience for all participants.&quot;
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all"></div>
              </div>

              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gray-900 pt-4">Reflection and Future Vision</h3>
              <p>
                This competition not only provided a platform for aspiring legal professionals to hone their skills but also highlighted the vital role of advocacy in advancing justice. The Tamil Trial Advocacy competition at VMLS underscores our commitment to fostering a culture of excellence and practical experience in legal education.
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
                      title: "State-Level Tamil Family Law Moot Court Competition",
                      date: "October 19, 2024",
                      href: "/news/state-level-tamil-family-law-moot-court-competition",
                      image: "/images/global/in8.webp"
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
