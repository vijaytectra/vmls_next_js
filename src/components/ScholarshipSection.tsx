import Image from "next/image";
import Link from "next/link";

export default function ScholarshipSection() {
  return (
    <section className="py-6 md:py-8 px-[5%] bg-[#ffffff] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        
        {/* Left Side: Content */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="relative">
            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
            
            <div className="pl-6 md:pl-10">
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 md:mb-8 leading-tight">
                Scholarships at VMLS
              </h2>
              
              <div className="space-y-6">
                <p className="font-inter text-lg text-gray-700 leading-relaxed text-justify">
                  Over 140 scholarships worth ₹60 Lakhs available through VLAT, including 
                  merit-based, need-based, and female-focused awards. 
                </p>

                <p className="font-inter text-lg text-gray-700 leading-relaxed text-justify">
                  Connect with our Program Advisor to learn more about how we support 
                  our students' academic journeys through various financial aid programs.
                </p>
              </div>

              <div className="mt-12">
                <Link href="/scholarships" className="inline-block px-10 py-4 bg-[#800000] text-white font-inter text-sm font-bold uppercase tracking-wider rounded-none transition-all duration-300 hover:bg-[#a31f34] hover:shadow-xl hover:-translate-y-1">
                  View Scholarships
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Photo Card */}
        <div className="flex-1 w-full order-1 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-white shadow-2xl group transition-transform duration-500 hover:-translate-y-2">
            <Image
              src="/images/scholorship-bg.webp"
              alt="Scholarships Background"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-right transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 border-[8px] border-white/5 pointer-events-none"></div>
          </div>
        </div>

      </div>
    </section>
  );
}
