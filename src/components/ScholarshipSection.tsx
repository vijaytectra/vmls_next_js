import Image from "next/image";
import Link from "next/link";

export default function ScholarshipSection() {
  return (
    <section className="relative min-h-[300px] md:min-h-[400px] overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/scholorship-bg.webp"
          alt="Scholarships at VMLS"
          fill
          className="object-cover object-right"
          priority
        />
        {/* Dark Overlay - Heavy on the left, clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent lg:via-black/50 md:via-black/70"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-[5%] py-12 md:py-20 flex items-center min-h-[300px] md:min-h-[400px]">
        <div className="max-w-2xl">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white mb-4 md:mb-6 leading-tight tracking-tight">
            Scholarships at VMLS
          </h2>
          
          <p className="font-inter text-base md:text-lg text-gray-200 leading-relaxed mb-8 max-w-lg">
            Over 140 scholarships worth ₹60 Lakhs available through VLAT, including 
            merit-based, need-based, and female-focused awards—connect with our Program Advisor to learn more.
          </p>

          <div>
            <Link 
              href="/scholarships" 
              className="inline-block px-8 py-3 bg-[#8b0000] text-white font-inter text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#a31f34] hover:scale-105"
            >
              View Scholarship Portal
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
