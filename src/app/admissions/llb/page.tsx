import Image from "next/image";
import Link from "next/link";

export default function LLBAdmissionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">LL.B. Admissions</span>
        </div>
      </nav>

      {/* Hero / Header Section - Increased Size */}
      <section className="relative px-[5%] pt-16 md:pt-28 pb-12 md:pb-20 overflow-hidden bg-white">
        {/* Background Image with Black Overlay for Premium Contrast */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/llb/3.webp" 
            alt="LL.B. Admissions Background" 
            fill
            className="object-cover object-center opacity-100 contrast-[1.05] brightness-90"
            priority
          />
          {/* Black Gradient Overlay */}
          <div className="absolute inset-0 bg-black/60 md:bg-gradient-to-r md:from-black/80 md:via-black/40 md:to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
            <div className="pl-6 md:pl-10">
              <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                LL.B. Admissions
              </h1>
              <p className="font-inter text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed font-medium">
                Start your journey into the legal profession with our comprehensive LL.B. programmes designed for future-ready legal experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LL.B. Program Detail Section */}
      <section className="pt-6 md:pt-8 pb-4 md:pb-6 px-[5%] bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Left Side: Framed Image */}
          <div className="lg:w-[45%] w-full flex justify-center items-center">
            <div className="relative w-full aspect-[16/10] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:-translate-y-2">
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/images/llb/1.webp"
                  alt="LL.B. Program Classroom" 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="lg:w-[55%] flex flex-col justify-center">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-8 leading-tight">
              LL.B. Program
            </h2>
            
            <div className="space-y-8">
              {/* Highlighted Intro Paragraph */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
                <p className="pl-6 md:pl-8 font-inter text-lg md:text-xl text-gray-800 leading-relaxed font-medium italic">
                  The Law Programme is designed with the overarching objective of cultivating competent legal professionals equipped to navigate the diverse facets of the legal profession and associated career pathways. Upon successful completion, our graduates will possess a comprehensive skill set encompassing effective verbal and written communication, critical thinking, analytical prowess, logical reasoning, and adept problem-solving abilities.
                </p>
              </div>

              {/* Standard Paragraphs */}
              <div className="space-y-6">
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  They will have acquired a robust foundation across all studied courses, demonstrating proficiency in conducting high-quality legal research and the preparation, examination, evaluation, and execution of legal documents. Furthermore, graduates will exhibit a profound understanding of contemporary social issues, engaging with them in a creative and solution-oriented manner.
                </p>
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  This holistic approach extends to instilling a sense of social responsibility, encouraging active participation in civic duties, and fostering a commitment to ongoing self-reflection and lifelong learning.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Undergraduate Law Programmes Section */}
      <section className="pt-4 md:pt-6 pb-6 md:pb-8 px-[5%] bg-white relative overflow-hidden">
        {/* Faded Background Image Wrapper */}
        <div className="absolute top-0 left-0 right-0 h-[400px] opacity-[0.07] pointer-events-none">
          <Image 
            src="/images/llb/3.webp" 
            alt="Background Texture" 
            fill 
            className="object-cover object-top grayscale"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-8 leading-tight">
              Undergraduate Law Programmes
            </h2>
            
            {/* Polished Flat Programme Buttons */}
            <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:justify-center md:gap-6">
              {['LL.B. (Hons.)', 'B.A. LL.B. (Hons.)', 'B.B.A. LL.B. (Hons.)', 'B.Com. LL.B. (Hons.)'].map((prog) => (
                <div key={prog} className="px-2 py-3.5 md:px-8 md:py-4 bg-[#fbb03b] text-gray-900 font-inter font-bold text-[11px] sm:text-sm md:text-base text-center flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(251,176,59,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(251,176,59,0.6)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                  {prog}
                </div>
              ))}
            </div>
          </div>

          {/* Main Grid: Image + Stats */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            {/* Left Side: Image with Frame */}
            <div className="lg:w-[50%] flex justify-center items-center">
              <div className="relative w-full aspect-[4/3] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.2)] transition-transform duration-500 hover:-translate-y-2">
                <div className="relative w-full h-full overflow-hidden">
                  <Image 
                    src="/images/llb/2.webp"
                    alt="VMLS Learning Environment" 
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Right Side: Stats Grid */}
            <div className="lg:w-[50%] grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Card 1: Red */}
              <div className="bg-[#a31f34] p-8 flex flex-col items-center justify-center text-center text-white space-y-4 border border-[#801829] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight">12</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">Undergraduate Courses from Respective Bachelor's Stream</p>
              </div>

              {/* Card 2: Gray */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col items-center justify-center text-center text-gray-800 space-y-4 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight">24</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">Law Core and Compulsory Courses</p>
              </div>

              {/* Card 3: Blue */}
              <div className="bg-[#007ba8] p-8 flex flex-col items-center justify-center text-center text-white space-y-4 border border-[#005a7d] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight">05</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">Clinical Courses</p>
              </div>

              {/* Card 4: Blue */}
              <div className="bg-[#007ba8] p-8 flex flex-col items-center justify-center text-center text-white space-y-4 border border-[#005a7d] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight">10</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">Electives (including 8 honors papers)</p>
              </div>

              {/* Card 5: Gray */}
              <div className="bg-[#f8f9fa] p-8 flex flex-col items-center justify-center text-center text-gray-800 space-y-4 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight">02</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">English Language Courses</p>
              </div>

              {/* Card 6: Red */}
              <div className="bg-[#a31f34] p-8 flex flex-col items-center justify-center text-center text-white space-y-4 border border-[#801829] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <span className="text-4xl font-inter font-extrabold tracking-tight text-center leading-none">100%</span>
                <p className="font-inter text-sm font-medium leading-snug opacity-90">Mandatory Internships and Professional Skill Labs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Credit Structure and Minimum Requirements Section */}
      <section className="pb-6 md:pb-8 px-[5%] bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Main Container with Stylish Border - Scaled Down */}
          <div className="bg-white border-t-8 border-[#a31f34] shadow-[0_30px_70px_-20px_rgba(0,0,0,0.1)] p-6 md:p-10 relative z-20">
            <div className="text-center mb-10">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-3 font-bold">
                Credit Structure
              </h2>
              <p className="text-gray-500 font-inter text-xs uppercase tracking-[0.2em] font-bold">and Minimum Requirements</p>
            </div>
            
            <div className="space-y-0 relative">
              {[
                { label: "Law (BCI Core and Compulsories)", value: "96" },
                { label: "Electives (including non-taught credits)", value: "40" },
                { label: "Compulsories (Humanities, Social Sciences / Business)", value: "48" },
                { label: "Clinical Courses (20) and Internships (10)", value: "30" },
                { label: "English Language Courses", value: "08" },
                { label: "Laboratory and Practical Sessions", value: "08" },
              ].map((item, index) => (
                <div key={index} className="group flex justify-between items-center py-4 border-b border-gray-100 hover:bg-gray-50/80 px-4 transition-all duration-300 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#a31f34]/30 group-hover:bg-[#a31f34] transition-colors"></div>
                    <span className="font-inter text-gray-700 text-sm md:text-base font-medium">{item.label}</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-inter text-[#1a1a1a] font-bold text-xl md:text-2xl">{item.value}</span>
                    <span className="font-inter text-gray-400 text-[10px] uppercase font-bold tracking-widest">credits</span>
                  </div>
                </div>
              ))}
              
              {/* Stylish Total Row - Scaled Down */}
              <div className="mt-10 p-5 sm:p-6 bg-[#f8f9fa] flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 rounded-xl border border-gray-100 shadow-inner group overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#a31f34]"></div>
                <span className="font-inter text-[#1a1a1a] font-bold text-sm sm:text-lg uppercase tracking-widest relative z-10">Total Requirement</span>
                <div className="flex items-baseline gap-2 relative z-10">
                  <span className="font-inter text-[#a31f34] font-extrabold text-3xl md:text-4xl">230</span>
                  <span className="font-inter text-[#a31f34]/60 font-bold text-xs uppercase tracking-widest">credits</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compulsory Pre-Law Courses Section */}
      <section className="pt-6 md:pt-8 pb-12 px-[5%] bg-gradient-to-b from-[#fcf8f2] to-white relative overflow-hidden">
        {/* Decorative Background Element */}
        <div className="absolute right-[-5%] top-[10%] w-[400px] h-[400px] bg-[#a31f34] opacity-[0.02] rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-2">
              Compulsory Pre-Law Courses
            </h2>
            <div className="w-24 h-1 bg-[#a31f34] mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Political Science I: Introduction to Fundamentals",
              "Legal and Constitutional History",
              "Foundations of Research (Course I)",
              "Foundations of Research (Course II)",
              "Sociology I: Essentials of Sociology",
              "Organizational Behaviour",
              "Exploring India: Interdisciplinary Insights",
              "Numerical Thinking & Accounting",
              "Economics I: Fundamentals",
              "Additional Compulsory Core Offerings",
              "Economics II: Law and Economics"
            ].map((course, index) => (
              <div 
                key={index} 
                className="group relative bg-white p-6 md:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 border border-gray-100 flex items-center min-h-[100px]"
              >
                {/* Side Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-0 group-hover:w-[6px] bg-[#a31f34] transition-all duration-300"></div>
                
                <div className="pl-2 group-hover:pl-4 transition-all duration-300">
                  <span className="font-inter text-gray-800 text-sm md:text-base font-semibold leading-relaxed group-hover:text-[#a31f34] transition-colors">
                    {course}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
