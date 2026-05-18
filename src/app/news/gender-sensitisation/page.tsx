import Image from 'next/image';
import Link from 'next/link';

export default function GenderSensitisationPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Gender Sensitisation and Equality</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Gender <br /><span className="text-[#fbb03b]">Sensitisation</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-justify">
              And Gender Equality in Lawyering. A guest lecture exploring the role of legal professionals in promoting gender justice and addressing systemic inequalities.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/news/Gender Equality_02.webp"
              alt="Guest Lecture on Gender Sensitisation"
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
              Guest Lecture on "Gender Sensitisation and Gender Equality in Lawyering"
            </h2>
            
            <div className="font-inter text-gray-700 leading-relaxed text-justify text-base md:text-lg space-y-8 mb-12">
              <p>
                The guest lecture on <strong>"Gender Sensitisation and Gender Equality in Lawyering"</strong> was conducted at Vinayaka Mission's Law School (VMLS) on <strong>28th April 2026</strong> as part of the initiative of the Gender Championship Club. The session addressed critical issues surrounding gender parity within the legal system.
              </p>

              <div className="bg-gray-50 p-6 md:p-8 border-l-4 border-[#a31f34] italic">
                "The session was delivered by <strong>Ms. Subha Nivedha</strong>, a Gender Specialist and lawyer with over eight years of experience across humanitarian and development contexts in South and Southeast Asia."
              </div>

              <p>
                Ms. Nivedha provided insightful perspectives on the role of legal professionals in promoting gender justice and addressing systemic inequalities within legal frameworks. She highlighted the importance of integrating gender-sensitive approaches in legal practice, policy-making, and access to justice mechanisms.
              </p>

              <p>
                The lecture sparked meaningful discussions among students and faculty about the challenges and opportunities in creating a more equitable legal profession. Participants explored how to identify and challenge biases, ensuring that the law serves as a tool for empowerment for all genders.
              </p>
            </div>

            {/* Event Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="relative aspect-video shadow-md overflow-hidden group rounded-xl">
                <Image
                  src="/images/news/Gender Equality_01.webp"
                  alt="Guest speaker Ms. Subha Nivedha presenting"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="relative aspect-video shadow-md overflow-hidden group rounded-xl">
                <Image
                  src="/images/newsletter/image-2.webp"
                  alt="Interaction during the session"
                  fill
                  sizes="(max-width: 768px) 100vw, 35vw"
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
