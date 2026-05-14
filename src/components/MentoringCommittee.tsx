import Image from "next/image";
import Link from "next/link";

const committeeMembers = [
  "/images/committee1.webp",
  "/images/committee2.webp",
  "/images/committee3.webp",
  "/images/committee4.webp",
  "/images/committee5.webp",
  "/images/committee6.webp",
  "/images/committee7.webp",
  "/images/committee8.webp",
  "/images/mentor.webp",
];

export default function MentoringCommittee() {
  return (
    <section className="py-8 md:py-10 px-[5%] bg-[#f8f9fa] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 lg:gap-16">
        {/* Left Side: Content */}
        <div className="flex-1">
          <div className="relative">
            {/* Vertical Accent Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
            
            <div className="pl-6 md:pl-10">
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6 md:mb-8 leading-tight">
                Mentoring Committee
              </h2>
              
              <div className="space-y-6">
                <p className="font-inter text-lg text-gray-700 leading-relaxed text-justify">
                  Vinayaka Mission's Law School is unique not only in its vision – excellence through inclusivity, 
                  and a steadfast emphasis on digital futures and climate transitions – but also its governance model. 
                  We are the first Indian legal education institution to be formally mentored by another private law school, 
                  arguably India's finest at that – the Jindal Global Law School, and Jindal Global University, 
                  an institution of eminence. 
                </p>
                <p className="font-inter text-lg text-gray-700 leading-relaxed text-justify">
                  The active Mentoring Committee created under this one-of-its-kind mentorship agreement consists of 
                  eminent senior lawyers and distinguished academics, who steer VMLS towards its goals and vision.
                </p>
              </div>

              <div className="mt-12">
                <Link href="/mentoring-committee">
                  <button className="px-10 py-4 bg-[#800000] text-white font-inter text-sm font-bold uppercase tracking-wider rounded-none transition-all duration-300 hover:bg-[#a31f34] hover:shadow-xl hover:-translate-y-1">
                    Know More Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image Grid */}
        <div className="flex-1 w-full max-w-[600px]">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {committeeMembers.map((src, index) => (
              <div key={index} className="aspect-square relative overflow-hidden bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group">
                <Image
                  src={src}
                  alt={`Committee Member ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 200px, 200px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#a31f34] opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
