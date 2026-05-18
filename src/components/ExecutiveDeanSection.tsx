import Image from "next/image";

export default function ExecutiveDeanSection() {
  return (
    <section className="relative w-full bg-[#800000] overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[350px]">
        {/* Left Side: Framed Image Container */}
        <div className="lg:w-[35%] relative min-h-[280px] md:min-h-[350px] lg:min-h-full bg-white/5 flex items-center justify-center p-4 lg:p-8">
          <div className="relative w-full h-full max-w-[320px] aspect-[3/4] shadow-2xl transition-transform duration-500 hover:-translate-y-1">
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="/images/mentor.webp"
                alt="Mr. Siddharth Raja, Executive Dean"
                fill
                sizes="(max-width: 1024px) 100vw, 320px"
                className="object-cover object-top transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>
          {/* Decorative Corner Background */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t border-l border-white/20 -translate-x-1 -translate-y-1"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b border-r border-white/20 translate-x-1 translate-y-1"></div>
        </div>

        {/* Right Side: Content Container */}
        <div className="lg:w-[65%] p-5 md:p-8 lg:p-12 flex flex-col justify-center text-white relative">
          <div className="max-w-3xl space-y-4">
            <header className="text-left">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl mb-2 leading-tight">
                From the Executive Dean's Desk
              </h2>
              <div className="space-y-0.5">
                <h3 className="font-inter text-lg md:text-xl font-bold tracking-tight">
                  Mr. Siddharth Raja
                </h3>
                <p className="font-inter text-base italic text-gray-200">
                  Executive Dean
                </p>
              </div>
            </header>

            <div className="font-inter text-base md:text-lg leading-relaxed text-gray-100 space-y-4 text-justify">
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
            <div className="mt-6 border border-white/20 p-5 md:p-6 bg-black/10 backdrop-blur-sm">
              <h4 className="font-inter font-bold uppercase tracking-widest text-[11px] mb-4 border-b border-white/10 pb-1.5 inline-block text-gray-300">
                Academic Qualifications
              </h4>
              <ul className="space-y-3 font-inter md:text-base text-gray-200">
                <li className="flex gap-2.5">
                  <span className="text-white/60 font-bold">•</span>
                  <span>LL.M., University of Warwick School of Law, UK (Chevening & J. N. Tata Scholar).</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-white/60 font-bold">•</span>
                  <span>B.A., LL.B. (Hons.), NLSIU, Bangalore — Gold Medalist.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-white/60 font-bold">•</span>
                  <span>Solicitor, Law Society of England & Wales.</span>
                </li>
                <li className="flex gap-2.5">
                  <span className="text-white/60 font-bold">•</span>
                  <span>Chairperson, Centre for Post Graduate Legal Studies & Professor of Law.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Subtle Decorative Element */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 -rotate-45 translate-x-8 -translate-y-8"></div>
        </div>
      </div>
    </section>
  );
}
