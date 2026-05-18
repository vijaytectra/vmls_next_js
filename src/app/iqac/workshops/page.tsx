import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

export const metadata = {
  title: "Workshops and Seminars | IQAC | VMLS",
  description: "Recent workshops and seminars organized by the Internal Quality Assurance Cell at VMLS.",
};

const events = [
  {
    title: "Professional Development Program",
    slug: "pdp",
    date: "15/09/23",
    location: "Aarupadai Veedu Campus, Tamil Nadu",
    image: "/images/iqac/iqac-1.webp",
    description: "A comprehensive program focused on enhancing professional skills and institutional growth strategies."
  },
  {
    title: "Teaching and Learning Tools",
    slug: "teaching-learning-tools",
    date: "August 28, 2024",
    location: "VMLS Campus, Tamil Nadu",
    image: "/images/iqac/report-on-workshop2.webp",
    description: "Workshop on modern pedagogical tools and innovative teaching methodologies for legal education."
  }
];

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/iqac" className="text-gray-500 hover:text-[#a31f34] transition-colors">IQAC</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Workshops and Seminars</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#800000] text-white py-12 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <Link href="/iqac" className="inline-flex items-center gap-2 text-[#fbb03b] hover:text-white transition-colors mb-6 font-bold uppercase tracking-wider text-sm">
            <ArrowLeft size={18} />
            Back to IQAC
          </Link>
          <h1 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Workshops and <span className="text-[#fbb03b]">Seminars</span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl font-inter leading-relaxed">
            Showcasing our commitment to continuous learning and professional excellence through structured institutional events.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {events.map((event, index) => {
              const content = (
                <>
                  <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl border border-gray-100 mb-8 bg-gray-50">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-[#800000] mb-4 group-hover:text-[#a31f34] transition-colors">
                    {event.title}
                  </h3>
                </>
              );

              return (
                <div key={index} className="flex flex-col h-full">
                  {event.slug ? (
                    <Link href={`/iqac/workshops/${event.slug}`} className="block group cursor-pointer">
                      {content}
                    </Link>
                  ) : (
                    <div className="group cursor-default">
                      {content}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-gray-500 font-medium">
                      <Calendar size={18} className="text-[#fbb03b]" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 font-medium">
                      <MapPin size={18} className="text-[#fbb03b]" />
                      {event.location}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed font-inter italic border-l-4 border-gray-100 pl-6">
                    {event.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
