import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section 
      id="about"
      className="relative py-6 md:py-8 px-[5%] overflow-hidden bg-[#fdfdfd]"
      style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(163, 31, 52, 0.03) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }}
    >
      {/* Abstract Background Shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 z-0"></div>
      
      {/* Subtle University Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none z-0">
        <Image 
          src="/images/headerright.webp" 
          alt="Watermark" 
          width={1000} 
          height={1000} 
          sizes="100vw"
          className="w-full h-full object-contain grayscale opacity-[0.02]"
        />
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 relative z-10">
        
        {/* Left Column: Premium Framed Image */}
        <div className="flex-1 w-full flex items-center justify-center lg:justify-start">
          <div className="relative w-full max-w-[600px] group">
            {/* Background Decorative Accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#a31f34] opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-700"></div>
            
            {/* The Main Image Container */}
            <div className="relative z-10 overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:-translate-y-2">
              <Image 
                src="/images/career-about-img.webp" 
                alt="About VMLS" 
                width={800} 
                height={600} 
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full h-auto object-contain"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 max-w-[600px]">
          <div className="space-y-6 md:space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[2px] bg-[#a31f34]"></div>
                <span className="text-[#a31f34] uppercase tracking-[0.2em] text-xs font-bold">
                  The Law School of the Future
                </span>
              </div>
              <h2 className="font-playfair text-2xl md:text-4xl text-gray-900 leading-tight mb-4 md:mb-6">
                About Us
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="font-inter text-lg md:text-xl text-gray-800 leading-relaxed font-medium border-l-4 border-[#a31f34] pl-6 italic text-justify">
                Vinayaka Mission's Research Foundation (VMRF) is an innovative and pioneering University that offers a multi-disciplinary learning experience.
              </p>

              <p className="font-inter text-base md:text-lg text-gray-600 leading-relaxed text-justify">
                With the founding vision of creating the law school of the future, VMLS admitted its first cohort of students in 2021. Mentorship from India's finest law school, Jindal Global Law School, and a committed team of full-time faculty members, many of whom are trained in globally renowned institutions, have resulted in pedagogic innovations at VMLS that make it a frontrunner in equipping learners with the skills, knowledge, exposure, and specializations required for professional success in the Artificial Intelligence age.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/about-vmrf"
                className="px-10 py-4 bg-[#800000] text-white border-2 border-[#800000] font-inter text-sm font-bold uppercase tracking-wider rounded-none transition-all duration-300 hover:bg-white hover:text-[#800000] hover:shadow-xl hover:-translate-y-1 inline-block text-center"
              >
                About VMRF
              </Link>
              <Link 
                href="/about-vmls"
                className="px-10 py-4 bg-[#800000] text-white border-2 border-[#800000] font-inter text-sm font-bold uppercase tracking-wider rounded-none transition-all duration-300 hover:bg-white hover:text-[#800000] hover:shadow-xl hover:-translate-y-1 inline-block text-center"
              >
                About VMLS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
