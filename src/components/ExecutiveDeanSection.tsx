import Image from "next/image";

export default function ExecutiveDeanSection() {
  return (
    <section className="relative w-full bg-[#800000] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[450px]">
        {/* Left Side: Framed Image Container */}
        <div className="lg:w-[40%] relative min-h-[320px] md:min-h-[400px] lg:min-h-full bg-white/5 flex items-center justify-center p-6 lg:p-12">
          <div className="relative w-full h-full max-w-[420px] aspect-[3/4] shadow-2xl transition-transform duration-500 hover:-translate-y-2">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/mentor.webp"
                alt="Mr. Siddharth Raja, Executive Dean"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
          {/* Decorative Corner Background */}
          <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-white/20 -translate-x-2 -translate-y-2"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-white/20 translate-x-2 translate-y-2"></div>
        </div>

        {/* Right Side: Content Container */}
        <div className="lg:w-[60%] p-6 md:p-12 lg:p-16 flex flex-col justify-center text-white relative">
          <div className="max-w-3xl space-y-6">
            <header className="text-left">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl mb-4 leading-tight">
                From the Executive Dean's Desk
              </h2>
              <div className="space-y-1">
                <h3 className="font-inter text-xl md:text-2xl font-bold tracking-tight">
                  Mr. Siddharth Raja
                </h3>
                <p className="font-inter text-lg italic text-gray-200">
                  Executive Dean
                </p>
              </div>
            </header>

            <div className="font-inter text-base md:text-lg leading-relaxed text-gray-100 space-y-5 text-justify">
              <p>
                A professional law degree has become increasingly appealing to students since India's liberalization in the early 90s,
                driven by the opening of domestic markets, the rise in global trade, and the complexities of the new economic order.
                This spurred demand for smart, articulate, and competent professionals to lead in areas like mergers and acquisitions,
                private equity, venture capital investments, offshore tax structures, and complex commercial transactions.
              </p>
              <p>
                Consequently, national law schools and five-year programs gained prominence as law firms and companies sought to hire
                new graduates with attractive pay packages.
              </p>
            </div>

            {/* Academic Qualifications Box */}
            <div className="mt-8 border border-white/20 p-6 md:p-8 bg-black/10 backdrop-blur-sm">
              <h4 className="font-inter font-bold uppercase tracking-widest text-xs mb-6 border-b border-white/10 pb-2 inline-block text-gray-300">
                Academic Qualifications
              </h4>
              <ul className="space-y-4 font-inter text-sm md:text-base text-gray-200">
                <li className="flex gap-3">
                  <span className="text-white/60 font-bold">•</span>
                  <span>LL.M., University of Warwick School of Law, UK (Chevening & J. N. Tata Scholar).</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 font-bold">•</span>
                  <span>B.A., LL.B. (Hons.), NLSIU, Bangalore — Gold Medalist.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 font-bold">•</span>
                  <span>Solicitor, Law Society of England & Wales.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-white/60 font-bold">•</span>
                  <span>Chairperson, Centre for Post Graduate Legal Studies & Professor of Law.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Subtle Decorative Element */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -rotate-45 translate-x-12 -translate-y-12"></div>
        </div>
      </div>
    </section>
  );
}
