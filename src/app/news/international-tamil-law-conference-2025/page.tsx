import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Share2 } from 'lucide-react';

export default function InternationalTamilLawConferencePage() {
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
            <span className="truncate max-w-[200px] md:max-w-none tracking-normal font-medium">International Tamil Law Conference 2025</span>
          </nav>
          <h1 className="font-playfair text-3xl md:text-5xl font-bold mb-6 leading-tight">
            International Tamil Law Conference 2025 <br />
            <span className="text-[#fbb03b]">Explores Language, Culture, and Law</span>
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#fbb03b]" />
              <span className="font-medium uppercase tracking-widest">By Global Tamil Law Centre (GTLC)</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fbb03b]" />
              <span className="font-medium uppercase tracking-widest">March 18, 2025</span>
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
                src="/images/global/inter-tamil-law.webp"
                alt="International Tamil Law Conference 2025"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </div>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl space-y-8">
              <p>
                Vinayaka Mission&apos;s Law School&apos;s Global Tamil Law Centre (GTLC) successfully hosted the International Tamil Law Conference 2025 on 7th–8th March 2025 at its Chennai campus, themed <strong>&quot;Intersecting Worlds: Tamil Language, Culture, and Legal Frameworks in a Globalized Era.&quot;</strong> The event brought together legal scholars, policymakers, and academicians to discuss Tamil legal traditions and their relevance in modern jurisprudence.
              </p>
              
              <p>
                The conference was inaugurated by <strong>Ms. P. Geetha Jeevan</strong>, Hon&apos;ble Minister for Social Welfare and Women Empowerment, with distinguished dignitaries including Prof. Dr. K. Chockalingam, Dr. R. Thiruchenthuran, and Dr. M. Muthuvel. The two-day event featured panel discussions, keynote lectures, and research paper presentations on Tamil as a legal language and its integration into contemporary legal frameworks.
              </p>

              <div className="bg-[#fcfbf9] p-8 rounded-3xl border-l-8 border-[#a31f34] shadow-sm my-12">
                <p className="font-playfair text-2xl italic text-gray-800 leading-relaxed">
                  &quot;The role of language in ensuring justice is paramount. Tamil legal scholarship must continue to evolve to meet global standards.&quot;
                </p>
                <p className="mt-4 font-bold text-[#a31f34]">— Hon&apos;ble Justice (Retd.) Dr. S. Vimala</p>
              </div>

              <p>
                The valedictory session featured <strong>Mr. P. Wilson</strong>, Senior Advocate & Rajya Sabha MP, and <strong>Hon&apos;ble Justice (Retd.) Dr. S. Vimala</strong>, who emphasized the role of language in ensuring justice. Ms. J. Josephin Viji, Advocate & Vice President of the Women Advocates Bar Association, Chengalpattu, addressed the gathering, emphasizing the need for gender inclusivity and diverse representation in Tamil legal scholarship.
              </p>

              <p>
                The Top Five Best Presenters were awarded prizes, recognizing their contributions to Tamil legal scholarship. Organized under the leadership of Dr. Fowmina C and Mr. Saravanan Ravi, the conference concluded with a vote of thanks, leaving a lasting impact on Tamil legal studies.
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
                      title: "State-Level Tamil Family Law Moot Court Competition",
                      date: "October 19, 2024",
                      href: "/news/state-level-tamil-family-law-moot-court-competition",
                      image: "/images/global/in8.webp"
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
              
              {/* CTA Widget */}
              <div className="bg-[#800000] rounded-3xl p-8 text-white relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="font-playfair text-2xl font-bold mb-4 leading-tight">Admissions Open 2025</h3>
                  <p className="text-white/80 mb-8 leading-relaxed">
                    Join the league of future legal professionals. Apply now for our various LL.B. and LL.M. programmes.
                  </p>
                  <Link href="https://admissions.vmls.edu.in/" className="inline-block bg-[#fbb03b] text-[#800000] px-8 py-3 rounded-xl font-bold hover:bg-white transition-all shadow-lg transform hover:-translate-y-1">
                    Apply Now
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-white/10 transition-all"></div>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
