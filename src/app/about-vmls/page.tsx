import Image from "next/image";
import Link from "next/link";

export default function AboutVMLS() {
  return (
    <main className="min-h-screen bg-white">

      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">About VMLS</span>
        </div>
      </nav>
      <hr className="border-gray-100" />

      {/* Content Section (Mirrored from VMRF style) */}
      <section className="pb-6 md:pb-8 pt-8 md:pt-12 px-[5%] bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Side: Content */}
          <div className="lg:w-[50%] order-2 lg:order-1 flex flex-col justify-center">
            <div className="relative h-full">
              {/* Vertical Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
              
              <div className="pl-6 md:pl-10 h-full flex flex-col justify-center">
                <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-8 leading-tight">
                  About VMLS
                </h2>
                
                <div className="space-y-6 text-justify">
                   <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                    Vinayaka Mission’s Law School (VMLS) has been established by Vinayaka Missions Research Foundation – Deemed to be University (VMRF-DU) to impart legal education and legal skills relevant to the evolving needs of the local, national and global communities.
                  </p>
                  <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                    With the founding vision of creating the law school of the future, VMLS admitted its first cohort of students in 2021. Mentorship from India's finest law school, <span className="font-bold text-[#a31f34]">Jindal Global Law School</span>, and a committed team of full-time faculty members, many of whom are trained in globally renowned institutions, have resulted in pedagogic innovations at VMLS that make it a frontrunner in equipping learners with the skills, knowledge, exposure, and specializations required for professional success in the AI age.
                  </p>
                  <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                    The state-of-the-art infrastructure, including smart classrooms, a well-stocked library with a strong digital backbone, and a regal moot court hall, support in this endeavour by creating the ambience for our students to immerse in the vibrant campus life.
                  </p>
                  <p className="font-inter text-base md:text-lg text-gray-800 leading-relaxed border-l-2 border-[#a31f34] pl-4 py-3 bg-white/50">
                    As a <span className="font-bold text-[#a31f34]">bilingual law school in Chennai</span>, VMLS offers students the unique advantage of studying law in both <span className="font-bold">English and Tamil</span>, preparing them for a global legal career while staying rooted in the local context. 
                  </p>
                  <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                    VMLS prides itself in its focus on inclusivity so that no learner is left behind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Framed Image */}
          <div className="lg:w-[45%] w-full order-1 lg:order-2 flex justify-center items-center">
            <div className="relative w-full aspect-[16/10] shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition-transform duration-500 hover:-translate-y-2">
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/images/vmls/frame-1@3x.webp"
                  alt="VMLS Law School" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white px-[5%] pt-6 md:pt-8 pb-12 md:pb-24">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl text-[#1a1a1a] mb-4">Our Vision</h2>
            <div className="w-20 h-1 bg-[#a31f34]"></div>
          </div>
          
          <p className="font-inter text-2xl md:text-3xl text-gray-800 leading-relaxed font-light italic">
            "To be a global leader in legal education, fostering a community of learners who are intellectually rigorous, socially responsible, and prepared to shape the future of justice."
          </p>
        </div>
      </section>
    </main>
  );
}
