import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: "Maritime Law | VMLS",
  description: "Vinayaka Mission's Law School (VMLS) Maritime Law centre.",
};

export default function MaritimeLawPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-gray-500">Centres of Excellence</span>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Maritime Law</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[350px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white relative z-10">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Centre for <br /><span className="text-[#fbb03b]">Maritime Law</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Specialized research and advocacy in the field of national and international maritime legal frameworks.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[400px] flex items-center justify-center bg-gray-50">
            {/* Background Image */}
            <Image
              src="/images/maritime/ml0.webp"
              alt="Institutional Background"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {/* Floating Logo Card */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white shadow-2xl rounded-2xl p-2 md:p-4 z-20 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full">
                <Image
                  src="/images/centreofexcel/4.webp"
                  alt="Maritime Law Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-[#800000]/20 rounded-tr-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-[#800000]/20 rounded-bl-3xl"></div>
          </div>
        </div>
      </section>

      {/* Content Section 1 - Overview */}
      <section className="pt-8 md:pt-12 pb-4 md:pb-6 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-2">
              <div className="inline-block px-4 py-1.5 bg-[#800000]/10 rounded-none">
                <span className="text-[#800000] font-bold text-[10px] uppercase tracking-widest">Introduction</span>
              </div>
              <div className="font-inter text-gray-700 leading-relaxed text-justify space-y-4 text-lg md:text-xl">
                <p>
                  The world's trade heavily relies on sea routes, facilitating 90% of global commerce. Maritime Law is a specialized legal field encompassing navigation, commercial shipping, marine resource exploration, environmental regulations, and maritime security.
                </p>
                <p>
                  The VMLS Centre for Maritime Law (CML) aims to foster study and research in India, which boasts a vast coastline with 12 major ports. CML addresses evolving issues in court jurisdiction and admiralty laws in alignment with international developments.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
              <Image
                src="/images/maritime/ml2.webp"
                alt="Maritime Research"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 - Aims & Objectives */}
      <section className="pt-4 md:pt-6 pb-12 md:pb-16 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
            {/* Image Side with Decorative Frame */}
            <div className="lg:w-[45%] relative group order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl z-10">
                <Image
                  src="/images/maritime/ml3.webp"
                  alt="Students in Maritime Seminar"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              {/* Decorative Background Accents */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#800000]/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[1px] border-[#800000]/10 rounded-full hidden md:block"></div>
            </div>

            {/* Text Side */}
            <div className="lg:w-[55%] space-y-6 order-1 lg:order-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-[#a31f34]"></div>
                  <span className="text-[#a31f34] text-[10px] font-bold uppercase tracking-[0.3em]">Aims & Objectives</span>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Maritime Law <span className="text-[#a31f34] italic">Leadership</span>
                </h2>
              </div>

              <div className="font-inter text-gray-700 leading-relaxed text-justify space-y-4 text-base md:text-lg border-l-2 border-[#a31f34]/10 pl-6">
                <p>
                  CML focuses on contemporary issues like cryptocurrency payments in shipping and automated unmanned ships. Strategically located in Chennai, a major hub hub with a rich 150-year history of admiralty practice, the Centre promotes research and policy-making.
                </p>
                <ul className="space-y-3 pt-2">
                  {[
                    "Undertake teaching and research in significant Maritime Law topics.",
                    "Promote research at an institutional level within VMLS.",
                    "Influence policy-making at National and International levels.",
                    "Establish academic collaborations with global universities.",
                    "Provide a resource centre for students and maritime lawyers."
                  ].map((aim, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#a31f34] mt-2 shrink-0"></div>
                      <span>{aim}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <p className="font-bold text-gray-900 italic">
                    Bridging traditional maritime expertise with contemporary global legal developments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News and Events Section */}
      <section className="py-16 px-[5%] bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] text-center mb-12">
            Latest News and Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Event 1 */}
            <Link href="/news/maritime-law-summit-2025" className="flex flex-col group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg mb-6 border border-white/50">
                <Image
                  src="/images/maritime/maritime.webp"
                  alt="Maritime Law Summit 2025"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-gray-900 mb-3 font-semibold">
                <Calendar size={20} strokeWidth={2.2} className="text-[#a31f34]" />
                <span className="text-sm tracking-wide">September 6, 2025</span>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#a31f34] transition-colors">
                Maritime Law Summit 2025
              </h3>
            </Link>

            {/* Event 2 */}
            <Link href="/news/special-lecture-international-maritime-law" className="flex flex-col group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg mb-6 border border-white/50">
                <Image
                  src="/images/maritime/special-lecture-maritime.webp"
                  alt="Special Lecture on International Maritime Law"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-gray-900 mb-3 font-semibold">
                <Calendar size={20} strokeWidth={2.2} className="text-[#a31f34]" />
                <span className="text-sm tracking-wide">Feb 24, 2024</span>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#a31f34] transition-colors">
                Special Lecture on International Maritime Law
              </h3>
            </Link>

            {/* Event 3 */}
            <Link href="/news/distinguished-guest-lecture-series-law-of-the-sea" className="flex flex-col group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg mb-6 border border-white/50">
                <Image
                  src="/images/maritime/distinguish-guest.webp"
                  alt="Distinguished Guest Lecture Series on the Law of the Sea"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-gray-900 mb-3 font-semibold">
                <Calendar size={20} strokeWidth={2.2} className="text-[#a31f34]" />
                <span className="text-sm tracking-wide">03rd June, 2024</span>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#a31f34] transition-colors">
                Distinguished Guest Lecture Series on the Law of the Sea
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
