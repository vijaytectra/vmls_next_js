import Image from 'next/image';
import Link from 'next/link';

export default function AISeminarPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">National Seminar on AI</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI, Law & <br /><span className="text-[#fbb03b]">Regulation</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-justify">
              National Seminar on Shaping the Future of Education, Profession & Justice. A collaborative initiative by VMLS and the Cyril Shroff Centre for AI, Law and Regulation.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/AI/National Seminar on AI_01_webp.webp"
              alt="National Seminar on AI, Law & Regulation"
              fill
              priority
              className="object-cover"
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
              National Seminar on "AI, Law & Regulation: Shaping the Future of Education, Profession & Justice"
            </h2>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-base md:text-lg space-y-8 mb-12">
              <p>
                Vinayaka Mission's Law School (VMLS), in collaboration with the Cyril Shroff Centre for AI, Law and Regulation at Jindal Global Law School (JGLS), O.P. Jindal Global University (JGU), successfully organized a landmark National Seminar on <strong>April 2, 2026</strong>. The event focused on the transformative role of Artificial Intelligence in the legal landscape and its implications for governance and education.
              </p>

              <div className="bg-gray-50 p-6 md:p-8 border-l-4 border-[#a31f34] italic">
                "The seminar commenced with a virtual keynote address by <strong>Dr. Palanivel Thiaga Rajan</strong>, Hon'ble Minister for Information Technology & Digital Services, Government of Tamil Nadu, who emphasized the need for balanced regulatory frameworks in the age of digital transformation."
              </div>

              <h3 className="font-playfair text-2xl md:text-3xl text-gray-900 font-bold mt-12 mb-6">Key Thematic Sessions</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#a31f34] text-xl mb-2">1. AI Governance & Regulation</h4>
                  <p>
                    This session explored the relationship between AI, geopolitics, and law. Experts discussed India's opportunity to adopt an adaptive, "middle-path" regulatory model—using flexible "guardrails" to promote innovation while ensuring accountability.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#a31f34] text-xl mb-2">2. AI, Justice Systems, and Legal Education</h4>
                  <p>
                    Participants highlighted the intersection of AI with the judicial process and legal training. The consensus emphasized that legal education must evolve to equip students with interdisciplinary skills (law, technology, and analytical reasoning).
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#a31f34] text-xl mb-2">3. Transformation of the Legal Profession</h4>
                  <p>
                    Discussions focused on how AI is reshaping legal practice, including research, compliance, and dispute resolution. The panel debated concerns regarding ethics, professional responsibility, and the necessity for practitioners to develop deep technical understanding.
                  </p>
                </div>
              </div>

              <h3 className="font-playfair text-2xl md:text-3xl text-gray-900 font-bold mt-12 mb-6">Notable Participants</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Professor (Dr.) C. Raj Kumar</strong>, Vice Chancellor, O.P. Jindal Global University</li>
                <li><strong>Mr. Justice Michael Wilson</strong>, Former Judge, Supreme Court of Hawaii</li>
                <li><strong>Dr. A. Francis Julian</strong>, Chairperson, Mentoring Committee, VMLS</li>
                <li><strong>Mr. J. Suresh Samuel</strong>, Chief Strategy Officer, VMRF-DU</li>
                <li><strong>Mr. Siddharth Raja</strong>, Executive Dean, VMLS</li>
              </ul>
            </div>

            {/* Event Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="relative aspect-video shadow-md overflow-hidden group rounded-lg">
                <Image
                  src="/images/AI/National Seminar on AI_02.jpeg"
                  alt="Seminar Highlights"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-video shadow-md overflow-hidden group rounded-lg">
                <Image
                  src="/images/AI/National Seminar on AI_03.jpeg"
                  alt="Expert Panel Discussion"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:col-span-2 relative aspect-[21/9] shadow-md overflow-hidden group rounded-lg">
                <Image
                  src="/images/AI/National Seminar on AI_04.jpeg"
                  alt="Participants and Dignitaries"
                  fill
                  sizes="(max-width: 768px) 100vw, 70vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Sidebar (30%) */}
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
