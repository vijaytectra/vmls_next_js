import Image from "next/image";
import Link from "next/link";

const events = [
  {
    date: "April 2, 2026",
    title: "National Seminar on AI, Law & Regulation",
    description: "Vinayaka Mission's Law School (VMLS), in collaboration with JGLS, JGU and the Cyril Shroff Centre for AI, Law and Regulation, hosted a Natio...",
    image: "/images/newsletter/image-1.webp",
    linkText: "Read Event Report",
    link: "/news/national-seminar-on-ai"
  },
  {
    date: "April 28, 2026",
    title: "Guest Lecture on Gender Sensitisation and Equality in Lawyering",
    description: "VMLS hosted a guest lecture on Gender Sensitisation and Gender Equality in Lawyering on 28th April 2026, delivered by Ms. Subha Nivedha, a Gender Special...",
    image: "/images/newsletter/image-2.webp",
    linkText: "Read More",
    link: "/news/gender-sensitisation"
  },
  {
    date: "April 29, 2026",
    title: "Guest Lecture on Ethics, Values and Litigation",
    description: "VMLS successfully organized a guest lecture on \"Ethics, Values and Litigation – Lessons for Budding Lawyers,\" delivered by Adv. Shabnam Banu, Madras H...",
    image: "/images/news/Lecture-ethics.webp",
    linkText: "Read More",
    link: "/news/ethics-values-litigation"
  }
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
            <div className="relative group cursor-pointer">
              {/* Premium Tablet Mockup with Background Blur */}
              <div className="relative w-full aspect-square md:aspect-[4/3] overflow-hidden rounded-sm shadow-2xl mb-12">
                {/* Blurred Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src="/images/newsletter/newsletter-november.webp"
                    alt="Background Blur"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover blur-xl opacity-40 scale-110"
                  />
                </div>
                {/* Centered Tablet/Document Mockup */}
                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                  <div className="relative w-full h-full bg-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-gray-900 rounded-[2rem] overflow-hidden">
                    <Image
                      src="/images/newsletter/newsletter-november.webp"
                      alt="VMLS Newsletter Cover"
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <p className="font-inter text-[#a31f34] font-bold uppercase tracking-[0.2em]">
                  March 20, 2026
                </p>
                <h3 className="font-playfair text-3xl md:text-5xl text-gray-900 leading-[1.1] mb-6">
                  VMLS Newsletter February to March 2026
                </h3>
                <p className="font-inter text-lg text-gray-700 leading-relaxed max-w-2xl text-justify">
                  Fundamentum is the official monthly newsletter of Vinayaka Mission's Law School, 
                  capturing the vibrant academic and cultural life on campus. It highlights expert 
                  lectures, student initiatives, legal innovations, and institutional milestones.
                </p>
                <div className="flex flex-wrap gap-4 pt-8">
                  <a 
                    href="/images/newsletter/Newsletter-feb-march-2026.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full md:w-[280px] h-14 bg-[#800000] text-white border-2 border-[#800000] font-inter font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#800000] hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
                  >
                    View English Newsletter
                  </a>
                  <a 
                    href="/images/newsletter/NewsLetterNovemberToDecember-2025 (Tamil).pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full md:w-[280px] h-14 bg-[#800000] text-white border-2 border-[#800000] font-inter font-bold uppercase tracking-wider transition-all duration-300 hover:bg-white hover:text-[#800000] hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
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
                  <p className="font-inter text-[#a31f34] font-bold uppercase tracking-wider">
                    {event.date}
                  </p>
                  <h4 className="font-playfair text-2xl md:text-3xl text-gray-900 leading-tight group-hover:text-[#a31f34] transition-colors">
                    {event.title}
                  </h4>
                  <p className="font-inter text-base text-gray-600 leading-relaxed line-clamp-3 text-justify">
                    {event.description}
                  </p>
                  <Link href={event.link}>
                    <button className="mt-4 px-6 py-2.5 border-2 border-gray-200 text-gray-700 font-inter text-xs font-bold uppercase tracking-widest transition-all hover:border-[#a31f34] hover:text-[#a31f34] hover:bg-[#a31f34]/5">
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
