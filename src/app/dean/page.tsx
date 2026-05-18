import Image from "next/image";
import Link from "next/link";

export default function DeanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Executive Dean</span>
        </div>
      </nav>
      <hr className="border-gray-100" />

      {/* Hero Section */}
      <section className="pb-12 md:pb-16 pt-8 md:pt-12 px-[5%] bg-[#f8f9fa] overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Dean Image */}
          <div className="lg:w-[35%] w-full order-1 flex justify-center items-center">
            <div className="relative w-[65%] max-w-[240px] md:w-full md:max-w-[340px] aspect-[3/4] shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-2">
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/images/mentor.webp" 
                  alt="Mr. Siddharth Raja, Executive Dean" 
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side: Dean Content */}
          <div className="lg:w-[65%] order-2 flex flex-col justify-center">
            <h3 className="text-[#a31f34] uppercase tracking-[0.2em] text-sm font-bold mb-4">Leadership</h3>
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-8 leading-tight">
              Mr. Siddharth Raja
            </h1>
            
            <div className="space-y-8">
              <h4 className="font-inter text-xl md:text-2xl font-bold tracking-tight text-gray-800">
                Executive Dean, VMLS
              </h4>

              {/* Highlighted Intro Paragraph */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
                <p className="pl-6 md:pl-8 font-inter text-lg md:text-xl text-gray-800 leading-relaxed font-medium italic">
                  A professional law degree has become increasingly appealing to students since India's liberalization in the early 90s, driven by the opening of domestic markets, the rise in global trade, and the complexities of the new economic order.
                </p>
              </div>

              {/* Standard Paragraphs */}
              <div className="space-y-6">
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  This spurred demand for smart, articulate, and competent professionals to lead in areas like mergers and acquisitions, private equity, venture capital investments, offshore tax structures, and complex commercial transactions.
                </p>
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  At VMLS, we are dedicated to preparing our students for this dynamic landscape by providing them with a rigorous, globally-relevant legal education that combines theory with practical excellence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Dean's Message Section */}
      <section className="bg-white px-[5%] py-12 md:py-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white p-6 md:p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden group transition-all duration-500 hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.16)] hover:-translate-y-1">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#a31f34] opacity-[0.03] rounded-full -translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-[0.05]"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#a31f34] opacity-[0.02] rounded-full transition-transform duration-700 group-hover:scale-110 group-hover:opacity-[0.04]"></div>
            
            {/* Large Quote Mark */}
            <div className="absolute top-8 right-12 text-9xl font-serif text-[#a31f34] opacity-[0.07] select-none transition-all duration-700 group-hover:-translate-y-2 group-hover:opacity-[0.12]">"</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10 transition-transform duration-500 group-hover:translate-x-2">
                <div className="w-16 h-[2px] bg-[#a31f34]"></div>
                <h4 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] italic">
                  Dean's Message
                </h4>
              </div>
              
              <div className="space-y-8 font-inter text-lg md:text-xl text-gray-700 leading-relaxed italic">
                <p>
                  "At VMLS, we are not just teaching law; we are shaping the next generation of legal leaders who will navigate the complexities of a globalized world. Our focus is on practical skills, ethical rigor, and a deep commitment to justice."
                </p>
                <p>
                  "We believe that a law school should be a laboratory for ideas, where students are challenged to think critically and act decisively. I am proud to lead a team of dedicated faculty and students who are passionate about the law."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}
