import Image from "next/image";
import Link from "next/link";

export default function AISeminarPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">National Seminar on AI</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[450px]">
          <div className="lg:w-[45%] p-6 sm:p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              AI, Law & <br />
              <span className="text-[#fbb03b]">Regulation</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-justify">
              National Seminar on Shaping the Future of Education, Profession &amp; Justice. A collaborative initiative by VMLS and the Cyril Shroff Centre for AI, Law and Regulation.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[200px] sm:min-h-[240px] lg:min-h-[300px]">
            <Image
              src="/images/AI/national-seminar-on-ai-01.webp"
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
              National Seminar on &quot;AI, Law &amp; Regulation: Shaping the Future of Education, Profession &amp; Justice&quot;
            </h2>

            <div className="font-inter text-gray-700 leading-relaxed text-justify text-base md:text-lg space-y-8 mb-12">
              <p>
                Vinayaka Mission&apos;s Law School (VMLS), a constituent of Vinayaka Mission&apos;s Research Foundation (VMRF-DU), successfully organised the National Seminar on &quot;AI, Law &amp; Regulation: Shaping the Future of Education, Profession &amp; Justice&quot; on April 2, 2026, in Chennai. The seminar was conducted in collaboration with Jindal Global Law School (JGLS), O.P. Jindal Global University (JGU), and the Cyril Shroff Centre for AI, Law and Regulation, with HCLTech Career Shaper(TM) as the Upskilling Partner.
              </p>

              <div className="bg-gray-50 p-6 md:p-8 border-l-4 border-[#a31f34] italic">
                &quot;The seminar commenced with a virtual keynote address by <strong>Dr. Palanivel Thiaga Rajan</strong>, Hon&apos;ble Minister for Information Technology &amp; Digital Services, Government of Tamil Nadu, who emphasised the transformative role of artificial intelligence in governance, digital infrastructure, and public service delivery. He highlighted the need for balanced regulatory frameworks that foster innovation while ensuring ethical accountability, positioning AI as a key driver in India&apos;s digital future.&quot;
              </div>

              <p>
                The inaugural session was marked by the introductory remarks of Dr. A. Francis Julian, Chairperson, Mentoring Committee, VMLS, followed by distinguished academic contributions from Professor (Dr.) C. Raj Kumar, Vice Chancellor, O.P. Jindal Global University, and Mr. Justice Michael Wilson, who reflected on the global and judicial dimensions of AI governance. Professor R. Padmanabha Ramanujam, Dean, Academic Governance, O.P. Jindal Global University, further emphasised the importance of research-driven regulatory frameworks in shaping responsible AI systems. The institutional vision was articulated through the Welcome Address delivered by Mr. J. Suresh Samuel, Chief Strategy Officer, VMRF-DU, and the address by Mr. Siddharth Raja, Executive Dean, VMLS, who introduced the Centre for Justice through Technology and highlighted VMLS&apos;s commitment to integrating legal education with emerging technologies. The session concluded with a vote of thanks by Ms. Sinjini Sen, Assistant Professor, VMLS.
              </p>

              <h3 className="font-playfair text-2xl md:text-3xl text-gray-900 font-bold mt-12 mb-6">
                Key Thematic Sessions
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-[#a31f34] text-xl mb-2">
                    1. AI Governance &amp; Regulation: Legal Frameworks for Emerging Technologies
                  </h4>
                  <p>
                    This session explored the evolving relationship between artificial intelligence, geopolitics, and legal regulation. The discussion underscored how AI has transitioned from a technological tool to a strategic instrument shaping global power dynamics, influencing warfare, diplomacy, and economic competition. Speakers highlighted India&apos;s position at a critical inflection point, with the opportunity to adopt a balanced regulatory approach through guardrails - flexible frameworks that promote innovation while ensuring accountability. The session examined global regulatory models, contrasting Europe&apos;s stringent compliance-driven framework with the United States&apos; market-oriented approach, while positioning India&apos;s adaptive model as a middle path. Key issues such as data quality, data sovereignty, and ethical accountability were discussed, alongside challenges of bias, privacy, and uneven data infrastructure.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#a31f34] text-xl mb-2">
                    2. AI, Justice Systems &amp; the Future of Legal Education
                  </h4>
                  <p>
                    This session focused on the integration of AI within legal systems and educational frameworks. The discussions emphasised the need for legal professionals to move beyond superficial use of AI tools and develop a deeper understanding of underlying technologies, including predictive algorithms and data-driven decision-making. The session highlighted the importance of reimagining legal education to equip students with interdisciplinary skills that combine law, technology, and analytical reasoning.
                  </p>
                </div>

                <div>
                  <h4 className="font-bold text-[#a31f34] text-xl mb-2">
                    3. AI &amp; the Transformation of the Legal Profession
                  </h4>
                  <p>
                    This session examined the evolving role of legal practitioners in an AI-driven ecosystem. Discussions focused on how AI is reshaping legal practice, from research and compliance to dispute resolution, while also raising concerns about ethics, accountability, and professional responsibility. The session emphasised the importance of adaptability, continuous learning, and the development of new skill sets to remain relevant in an increasingly technology-driven profession.
                  </p>
                </div>
              </div>

              <p>
                The seminar also featured a special address by Ms. Srimathi Shivashankar, Corporate Vice President and Global Head - EdTech Business, HCLTech, who highlighted the critical role of AI-led skilling and industry-academia collaboration, emphasising the importance of bridging academic learning with real-world industry requirements.
              </p>

              <h3 className="font-playfair text-2xl md:text-3xl text-gray-900 font-bold mt-12 mb-6">
                Notable Participants
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Professor (Dr.) C. Raj Kumar</strong>, Vice Chancellor, O.P. Jindal Global University
                </li>
                <li>
                  <strong>Mr. Justice Michael Wilson</strong>, Former Judge, Supreme Court of Hawaii
                </li>
                <li>
                  <strong>Dr. A. Francis Julian</strong>, Chairperson, Mentoring Committee, VMLS
                </li>
                <li>
                  <strong>Mr. J. Suresh Samuel</strong>, Chief Strategy Officer, VMRF-DU
                </li>
                <li>
                  <strong>Mr. Siddharth Raja</strong>, Executive Dean, VMLS
                </li>
                <li>
                  <strong>Ms. Srimathi Shivashankar</strong>, Corporate Vice President and Global Head - EdTech Business, HCLTech
                </li>
              </ul>
            </div>

            {/* Event Gallery Grid — 2 on top, 1 full-width below */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="relative aspect-video shadow-md overflow-hidden group rounded-lg">
                <Image
                  src="/images/AI/national-seminar-on-ai-02.jpeg"
                  alt="Seminar Highlights"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-video shadow-md overflow-hidden group rounded-lg">
                <Image
                  src="/images/AI/national-seminar-on-ai-03.jpeg"
                  alt="Expert Panel Discussion"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="md:col-span-2 relative aspect-[21/9] shadow-md overflow-hidden group rounded-lg">
                <Image
                  src="/images/AI/national-seminar-on-ai-04.jpeg"
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
              <h3 className="font-playfair text-2xl font-bold mb-8 text-gray-900 border-b border-gray-200 pb-4">
                Today&apos;s top news
              </h3>
              <div className="space-y-0 border border-gray-100 shadow-sm">
                {[
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
                  {
                    title: "The Lack of Clinical Legal Education in India and its Implications",
                    href: "/blogs/lack-of-clinical-legal-education-in-india",
                  },
                  {
                    title:
                      "Bringing Indian Contracts II to Life by Means of Clinical Legal Education for Law Students",
                    href: "/blogs/bringing-indian-contracts-ii-to-life-clinical-legal-education-vmls",
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
