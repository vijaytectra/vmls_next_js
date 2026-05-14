import Image from "next/image";
import Link from "next/link";

export default function AboutVMRF() {
  return (
    <main className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">About VMRF</span>
        </div>
      </nav>
      <hr className="border-gray-100" />

      {/* Content Section (Re-styled like Mentoring Committee) */}
      <section className="pb-12 md:pb-16 pt-8 md:pt-12 px-[5%] bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Content */}
          <div className="lg:w-[50%] order-2 lg:order-1 flex flex-col justify-center">
            <div className="relative h-full">
              {/* Vertical Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
              
              <div className="pl-6 md:pl-10 h-full flex flex-col justify-center">
                <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-8 leading-tight">
                  About VMRF
                </h2>
                
                <div className="space-y-6 text-justify">
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    In 1981, Thirumuruga Kirupananda Variyar Thavathiru Sundara Swamigal Medical Educational and Charitable Trust was established, followed by Vinayaka Mission's College of Pharmacy in 1982. In 2001, the trust became Vinayaka Mission's Research Foundation (VMRF), the 48th University in India, after being recognized for its excellence and academic standards.
                  </p>
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    The University's primary objective is to offer high-quality education to students from all walks of life. As one of the largest universities in India, VMRF offers a wide range of academic disciplines, with a comprehensive range of faculties that covers almost the entire gamut of academic disciplines, including medicine, paramedicine, engineering and technology, management, arts and sciences, law, among others.
                  </p>
                  <p className="font-inter text-lg text-gray-700 leading-relaxed">
                    With campuses at Chennai, Salem, and Pondicherry, VMRF's scenic campuses are known for their state-of-the-art facilities, including modern classrooms, advanced laboratories, well-stocked libraries, and sports complexes.
                  </p>
                  <p className="font-inter text-lg text-gray-700 leading-relaxed italic border-l-2 border-[#a31f34] pl-4 py-2 bg-white/50">
                    VMRF has nearly 15,000 students and over 2,000 professionals graduate from its campuses annually, supported by over 5,000 expert staff members.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Framed Image */}
          <div className="lg:w-[45%] w-full order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-full aspect-[16/10] bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:-translate-y-2 border border-gray-200">
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/images/vmrf/vmrf-header.webp" 
                  alt="VMRF Building" 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Leadership Section */}
      <section className="bg-white px-[5%] pt-12 md:pt-16 pb-8 md:pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl text-[#1a1a1a] mb-4">Leadership @VMRF</h2>
            <div className="w-20 h-1 bg-[#a31f34]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-5xl mx-auto">
            {/* Founder */}
            <div className="group transition-all duration-300 hover:-translate-y-2 max-w-[280px] mx-auto w-full">
              <div className="relative aspect-square bg-white p-1 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="relative w-full h-full overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/vmrf/Frame-53135.webp" 
                    alt="Dr. A. Shanmugasundaram" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 contrast-[1.08] brightness-[1.02] saturate-[1.05]"
                  />
                </div>
              </div>
              <div className="pt-6 text-center px-2">
                <h3 className="font-inter font-bold text-xl text-[#1a1a1a] mb-1 leading-tight">Dr. A. Shanmugasundaram</h3>
                <p className="text-[#a31f34] uppercase tracking-widest text-xs font-bold">Founder</p>
              </div>
            </div>

            {/* Chancellor */}
            <div className="group transition-all duration-300 hover:-translate-y-2 max-w-[280px] mx-auto w-full">
              <div className="relative aspect-square bg-white p-1 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="relative w-full h-full overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/vmrf/Frame-53136.webp" 
                    alt="Dr. A. S. Ganesan" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 contrast-[1.05] brightness-[1.02]"
                  />
                </div>
              </div>
              <div className="pt-6 text-center px-2">
                <h3 className="font-inter font-bold text-xl text-[#1a1a1a] mb-1 leading-tight">Dr. A.S. Ganesan</h3>
                <p className="text-[#a31f34] uppercase tracking-widest text-xs font-bold">Chancellor</p>
              </div>
            </div>

            {/* Vice President */}
            <div className="group transition-all duration-300 hover:-translate-y-2 max-w-[280px] mx-auto w-full">
              <div className="relative aspect-square bg-white p-1 shadow-[0_15px_35px_rgba(0,0,0,0.1)] border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="relative w-full h-full overflow-hidden border border-gray-200">
                  <Image 
                    src="/images/vmrf/image-100.webp" 
                    alt="Dr. Anuradha Ganesan" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 contrast-[1.05] brightness-[1.02]"
                  />
                </div>
              </div>
              <div className="pt-6 text-center px-2">
                <h3 className="font-inter font-bold text-xl text-[#1a1a1a] mb-1 leading-tight">Dr. Anuradha Ganesan</h3>
                <p className="text-[#a31f34] uppercase tracking-widest text-xs font-bold">Vice President</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
