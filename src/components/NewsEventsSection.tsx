import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: "April 2, 2026",
    title: "National Seminar on AI, Law & Regulation",
    description:
      "Vinayaka Mission's Law School (VMLS), in collaboration with JGLS, JGU and the Cyril Shroff Centre for AI, Law and Regulation, hosted a National Seminar on AI, Law & Regulation in Chennai.",
    image: "/images/AI/National Seminar on AI_01_webp.webp",
    linkText: "Read Event Report",
    link: "/news/national-seminar-on-ai",
  },
  {
    date: "April 17, 2026",
    title: "Clashes of Masculinity in Urban and Rural India",
    description:
      "Vinayaka Mission's Law School (VMLS) organized a guest lecture \"Clashes of Masculinity in Urban and Rural India\" on 17th April at the Moot Court. The lecture was delivered by Dr. Shannon Philip, Assistant Professor of Sociology at the University of Cambridge.",
    image: "/images/news/masculinity/Masculinity_01_01.webp",
    linkText: "Read More",
    link: "/news/clashes-of-masculinity-urban-rural-india",
  },
  {
    date: "April 17, 2026",
    title: 'Guest lecture on "Copyright and Emerging Issues due to Artificial Intelligence"',
    description:
      'VMLS successfully organized a guest lecture on "Copyright and Emerging Issues due to Artificial Intelligence," delivered by Mr. Avinesh, Founder of Satvik Law, with active participation from over 80 second-year LL.B. students.',
    image: "/images/news/copyright-ai/Avinesh_listing.webp",
    linkText: "Read More",
    link: "/news/copyright-and-emerging-issues-due-to-artificial-intelligence",
  },
];

export default function NewsEventsSection() {
  return (
    <section className="py-4 md:py-6 px-[5%] bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-5xl text-gray-900 mb-8 md:mb-16 text-left">
          News & Events
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Left Column: Featured Newsletter */}
          <div className="lg:w-[45%]">
            <div className="relative group">
              <div className="relative w-full mb-8 md:mb-10">
                <Image
                  src="/images/newsletter/vmls_april_may.png"
                  alt="VMLS Newsletter Issue 11 April to May 2026 Cover"
                  width={1409}
                  height={1117}
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
              
              <div className="space-y-6">
                <p className="font-inter text-sm text-[#a31f34] font-bold uppercase tracking-[0.2em]">
                  June 19, 2026
                </p>
                <h3 className="font-playfair text-3xl md:text-5xl text-gray-900 leading-[1.1] mb-6">
                  VMLS Newsletter: April to May 2026
                </h3>
                <p className="font-inter text-lg text-gray-700 leading-relaxed max-w-2xl text-justify">
                  Fundamentum is the official monthly newsletter of Vinayaka Mission&apos;s Law School, 
                  capturing the vibrant academic and cultural life on campus. It highlights expert 
                  lectures, student initiatives, legal innovations, and institutional milestones.
                </p>
                <div className="flex flex-wrap gap-4 pt-8">
                  <a 
                    href="/images/newsletter/Newsletter_April_to_May_2026 (E).pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full md:w-[280px] h-14 bg-[#800000] text-white border-2 border-[#800000] font-inter text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#800000] hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
                  >
                    View English Newsletter
                  </a>
                  <a 
                    href="/images/newsletter/Newsletter_April_to_May_2026 (T).pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full md:w-[280px] h-14 bg-[#800000] text-white border-2 border-[#800000] font-inter text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#800000] hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
                  >
                    View Tamil Newsletter
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Events List */}
          <div className="lg:w-[55%] space-y-16">
            {events.map((event, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-10 group">
                <div className="md:w-[40%] aspect-video relative overflow-hidden bg-gray-100 shadow-md">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="md:w-[60%] space-y-4">
                  <p className="font-inter text-sm text-[#a31f34] font-bold uppercase tracking-wider">
                    {event.date}
                  </p>
                  <h4 className="font-playfair text-2xl md:text-3xl text-gray-900 leading-tight group-hover:text-[#a31f34] transition-colors">
                    {event.title}
                  </h4>
                  <p className="font-inter text-base text-gray-600 leading-relaxed line-clamp-3 text-left">
                    {event.description}
                  </p>
                  <Link href={event.link}>
                    <button className="mt-4 px-6 py-2.5 border-2 border-[#a31f34] text-[#a31f34] font-inter text-xs font-bold uppercase tracking-widest transition-all hover:bg-[#a31f34]/5">
                      {event.linkText}
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
