import Image from 'next/image';
import Link from 'next/link';

export default function WomenAndAIPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/student-affairs" className="text-gray-500 hover:text-[#a31f34] transition-colors">Student Affairs</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Women & AI Conference</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-[#fbb03b] text-[#1a1a1a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-[5%] relative z-10">
          <div className="flex flex-col lg:flex-row min-h-[400px]">
            <div className="lg:w-[50%] py-12 md:py-20 flex flex-col justify-center">
              <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Women & <br /><span className="text-[#800000]">AI Conference</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-justify">
                Students secure prestigious awards for research excellence. Exploring the intersection of gender equity and emerging technologies at the International Conference on Women & AI.
              </p>
            </div>
          </div>
        </div>
        {/* Background Image for Desktop */}
        <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-1/2">
          <Image
            src="/images/news/student1.webp"
            alt="Women & AI Conference VMLS"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbb03b] via-transparent to-transparent"></div>
        </div>
        {/* Mobile Image */}
        <div className="lg:hidden relative h-[300px] w-full">
          <Image
            src="/images/news/student1.webp"
            alt="Women & AI Conference VMLS"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-12 md:py-16 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Main Article Section */}
          <div className="lg:w-[70%]">
            <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-8 font-bold leading-tight text-justify">
              Students Secures Award at the International Conference on Women and AI
            </h2>
            <div className="font-inter text-gray-700 leading-relaxed text-justify text-base md:text-lg space-y-6 mb-12">
              <p>
                Students of VMLS achieved notable recognition at the International Conference on "Women and AI" held on 25 April 2026 at Saveetha School of Law. Ms. M. Hemalatha, II Year B.A. LL.B. (Hons.), was awarded the <strong>Best Paper Award</strong> for her research titled "From Watchtowers to Algorithms: A Comparative Study of the Gendered and Racial Dimensions of AI Surveillance in India and the United States."
              </p>
              <p>
                Ms. Jestifa A, II Year B.B.A. LL.B. (Hons.), received the <strong>Best Presenter Award</strong> for her paper "Digital Personal Data Protection Act, 2023: A Gendered Analysis," where she critically examined data protection laws from a gender perspective.
              </p>
              <p>
                Mr. Caleb P, I LL.B., Section B, was honoured with the <strong>Best Researcher Award</strong> for his paper "Examining the Adequacy of India's DPDP Act, 2023, in Safeguarding Women from Biometric Surveillance."
              </p>
              <p>
                Their achievements reflect strong academic engagement with contemporary issues at the intersection of gender, law, and artificial intelligence.
              </p>
            </div>

            {/* Event Gallery Grid - Featured Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Featured: Certificate spans full width on md+ */}
              <div className="md:col-span-2 relative aspect-[16/10] md:aspect-[21/9] shadow-lg rounded-xl overflow-hidden group border border-gray-100">
                <Image
                  src="/images/studentaff/Women and AI_01.webp"
                  alt="Certificate of Appreciation"
                  fill
                  className="object-contain bg-gray-50 group-hover:scale-[1.02] transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                />
                <div className="absolute top-4 left-4 px-3 py-1 bg-[#a31f34] text-[10px] text-white font-bold uppercase tracking-widest">
                  Official Record
                </div>
              </div>

              {/* Ceremony Photos side-by-side */}
              <div className="relative aspect-video shadow-md rounded-xl overflow-hidden group">
                <Image
                  src="/images/studentaff/Women and AI_02.webp"
                  alt="Award Ceremony"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 400px"
                />
              </div>
              <div className="relative aspect-video shadow-md rounded-xl overflow-hidden group">
                <Image
                  src="/images/studentaff/Women and AI_03.webp"
                  alt="Best Presenter Award"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 35vw, 400px"
                />
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:w-[30%]">
            <div className="sticky top-24">
              <h3 className="font-playfair text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">Today's top news</h3>
              <div className="space-y-0 border border-gray-100 shadow-sm">
                {[
                  {
                    title: "LL.M. In Artificial Intelligence, Emerging Technologies and Intellectual Property Rights",
                    href: "/blogs/llm-in-artificial-intelligence-emerging-technologies-and-intellectual-property-rights"
                  },
                  {
                    title: "LLM in Criminal Law and Practice",
                    href: "/blogs/llm-in-criminal-law-and-practice"
                  },
                  {
                    title: "What is an LL.M.? Full Form, Programme, Course Duration, Admission 2025",
                    href: "/blogs/what-is-llm-master-of-law-degree"
                  },
                  {
                    title: "The Lack of Clinical Legal Education in India and its Implications",
                    href: "/blogs/lack-of-clinical-legal-education-in-india"
                  },
                  {
                    title: "Bringing Indian Contracts II to Life by Means of Clinical Legal Education for Law Students",
                    href: "/blogs/bringing-indian-contracts-ii-to-life-clinical-legal-education-vmls"
                  }
                ].map((news, index) => (
                  <Link key={index} href={news.href} className="block p-5 bg-gray-50/50 hover:bg-white border-b border-gray-100 font-inter text-gray-800 hover:text-[#a31f34] transition-all last:border-b-0 leading-relaxed">
                    {news.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
