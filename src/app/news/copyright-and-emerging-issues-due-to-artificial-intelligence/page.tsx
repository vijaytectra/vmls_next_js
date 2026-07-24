import Image from "next/image";
import Link from "next/link";

export default function CopyrightAILecturePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Copyright and Emerging Issues due to AI</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Copyright <br />
              <span className="text-[#fbb03b]">&amp; AI</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-justify">
              Emerging Issues due to Artificial Intelligence. A guest lecture on copyright law, AI-generated works, and practical IP agreements.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px] lg:min-h-[450px]">
            <Image
              src="/images/news/copyright-ai/Avinesh_01.jpeg"
              alt="Guest lecture on Copyright and Emerging Issues due to Artificial Intelligence"
              fill
              priority
              className="object-cover object-[center_38%]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar Grid */}
      <section className="py-12 md:py-16 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Main Article Section (70%) */}
          <div className="lg:w-[70%]">
            <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-8 font-bold leading-tight">
              Guest lecture on &quot;Copyright and Emerging Issues due to Artificial Intelligence&quot;
            </h2>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-base md:text-lg space-y-8 mb-12">
              <p>
                VMLS successfully organized a guest lecture on &quot;Copyright and Emerging Issues due to Artificial Intelligence,&quot; delivered by Mr. Avinesh, Founder of Satvik Law, a boutique firm specializing in Intellectual Property. The session witnessed active participation from over 80 second-year LL.B. students.
              </p>

              <div className="bg-gray-50 p-6 md:p-8 border-l-4 border-[#a31f34] italic">
                &quot;<strong>Mr. Avinesh</strong> provided insightful perspectives on the evolving landscape of copyright law in the context of AI-generated works, highlighting contemporary legal challenges and regulatory gaps.&quot;
              </div>

              <p>
                He further enriched the session by offering practical guidance on drafting and understanding IP agreements, bridging the gap between theory and practice.
              </p>

              <p>
                The interactive nature of the lecture encouraged students to engage in meaningful discussions and clarify their queries. The event was effectively organized by Dr. Abhinaya Ramesh, whose efforts ensured its smooth execution. Overall, the lecture proved to be highly informative and beneficial, equipping students with valuable knowledge on emerging trends in copyright law.
              </p>
            </div>

            {/* Event Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="relative aspect-[4/3] shadow-md overflow-hidden group rounded-lg">
                <Image
                  src="/images/news/copyright-ai/Avinesh_01.jpeg"
                  alt="Mr. Avinesh delivering the guest lecture"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover object-[center_38%] group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-[4/3] shadow-md overflow-hidden group rounded-lg">
                <Image
                  src="/images/news/copyright-ai/Avinesh_02.jpeg"
                  alt="Token of appreciation presented after the copyright lecture"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Sidebar (30%) */}
          <aside className="lg:w-[30%]">
            <div className="sticky top-24">
              <h3 className="font-playfair text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">
                Today&apos;s top news
              </h3>
              <div className="space-y-0 border border-gray-100 shadow-sm">
                {[
                  {
                    title: "National Seminar on AI, Law & Regulation",
                    href: "/news/national-seminar-on-ai",
                  },
                  {
                    title: 'Guest lecture titled "Clashes of Masculinity in Urban and Rural India"',
                    href: "/news/clashes-of-masculinity-urban-rural-india",
                  },
                  {
                    title:
                      "LL.M. In Artificial Intelligence, Emerging Technologies and Intellectual Property Rights",
                    href: "/blogs/llm-in-artificial-intelligence-emerging-technologies-and-intellectual-property-rights",
                  },
                  {
                    title: "LLM in Criminal Law and Practice",
                    href: "/blogs/llm-in-criminal-law-and-practice",
                  },
                  {
                    title: "What is an LL.M.? Full Form, Programme, Course Duration, Admission 2025",
                    href: "/blogs/what-is-llm-master-of-law-degree",
                  },
                ].map((news, index) => (
                  <Link
                    key={index}
                    href={news.href}
                    className="block p-5 bg-gray-50/50 hover:bg-white border-b border-gray-100 text-sm font-inter text-gray-800 hover:text-[#a31f34] transition-all last:border-b-0 leading-relaxed"
                  >
                    {news.title}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Decorative Architecture Element at Bottom Left */}
      <div className="fixed bottom-0 left-0 w-[300px] opacity-[0.05] pointer-events-none select-none z-0">
        <Image
          src="/images/vmls/vmls-arch.png"
          alt=""
          width={400}
          height={400}
          className="grayscale"
        />
      </div>
    </main>
  );
}
