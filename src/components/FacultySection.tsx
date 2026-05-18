import Image from "next/image";
import Link from "next/link";

export default function FacultySection() {
  return (
    <section className="py-6 md:pt-8 md:pb-4 px-[5%] bg-[#ffffff] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        
        {/* Left Side: Content */}
        <div className="flex-1 order-2 lg:order-1">
          <div className="relative">
            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
            
            <div className="pl-10">
              <h2 className="font-playfair text-3xl md:text-5xl text-[#1a1a1a] mb-6 md:mb-8 leading-tight">
                Faculty at VMLS
              </h2>
              
              <div className="space-y-6">
                <p className="font-inter text-lg text-gray-700 leading-relaxed text-justify">
                  At VMLS, our faculty is the embodiment of a global perspective, combining global insights 
                  with local relevance to foster an educational environment of unparalleled quality. Our educators are 
                  not just teachers; they are world citizens with diverse experiences from across the globe. 
                </p>
                <p className="font-inter text-lg text-gray-700 leading-relaxed text-justify">
                  They bring this wealth of knowledge to the heart of Tamil Nadu, offering world-class education and opening doors 
                  of opportunity for the underprivileged. This unique blend of international expertise and local 
                  understanding ensures that our students are equipped to excel both in India and on the global stage.
                </p>
              </div>

              <div className="mt-12">
                <Link href="/faculty-profiles">
                  <button className="px-10 py-4 bg-[#800000] text-white font-inter font-bold uppercase tracking-wider rounded-none transition-all duration-300 hover:bg-[#a31f34] hover:shadow-xl hover:-translate-y-1">
                    View All Faculty
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Group Photo Card */}
        <div className="flex-1 w-full order-1 lg:order-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-white shadow-2xl group transition-transform duration-500 hover:-translate-y-2">
            <Image
              src="/images/home-faculty.webp"
              alt="Faculty Group Photo"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
