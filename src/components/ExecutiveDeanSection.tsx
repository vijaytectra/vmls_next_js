import Image from "next/image";

export default function ExecutiveDeanSection() {
  return (
    <section className="relative w-full bg-[#800000] overflow-hidden px-[5%] py-6 md:py-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-5 md:gap-6 lg:gap-8 items-center lg:items-stretch">
        {/* Left: Contained portrait — respects site side padding */}
        <div className="w-full lg:w-[280px] xl:w-[320px] shrink-0">
          <div className="relative w-full max-w-[280px] xl:max-w-[320px] mx-auto lg:mx-0 aspect-[3/4] overflow-hidden shadow-2xl">
            <Image
              src="/images/mentor.webp"
              alt="Mr. Siddharth Raja, Executive Dean"
              fill
              sizes="(max-width: 1024px) 280px, 320px"
              className="object-cover object-[center_20%]"
              priority
            />
          </div>
        </div>

        {/* Right: text column + qualifications centered to full content height */}
        <div className="flex-1 min-w-0 flex flex-col xl:flex-row xl:items-center gap-4 md:gap-5 text-white relative py-1">
          <div className="flex-1 min-w-0 space-y-3 md:space-y-3.5">
            {/* Title block centered at all breakpoints; body stays left-aligned */}
            <header className="text-center mx-auto">
              <h2 className="font-playfair text-base sm:text-lg md:text-xl lg:text-2xl mb-2 leading-tight whitespace-nowrap text-center">
                From the Executive Dean&apos;s Desk
              </h2>
              <div className="space-y-1">
                <h3 className="font-inter text-base md:text-lg font-bold tracking-tight text-center">
                  Mr. Siddharth Raja
                </h3>
                <p className="font-inter text-sm italic text-gray-200 !text-center">
                  Executive Dean
                </p>
              </div>
            </header>

            <div className="font-inter text-sm md:text-[15px] leading-relaxed text-gray-100 space-y-2.5 text-left">
              <p>
                A professional law degree has become increasingly appealing to students since India&apos;s liberalization in the early 90s,
                driven by the opening of domestic markets, the rise in global trade, and the complexities of the new economic order.
                This spurred demand for smart, articulate, and competent professionals to lead in areas like mergers and acquisitions,
                private equity, venture capital investments, offshore tax structures, and complex commercial transactions.
              </p>
              <p>
                Consequently, national law schools and five-year programs gained prominence as law firms and companies sought to hire
                new graduates with attractive pay packages.
              </p>
            </div>
          </div>

          {/* Academic Qualifications — centered against the full text column */}
          <div className="xl:w-[240px] xl:shrink-0 border border-white/30 p-3.5 md:p-4 bg-black/10 backdrop-blur-sm self-center">
            <h4 className="font-inter font-bold uppercase tracking-widest text-[10px] mb-2.5 border-b border-white/10 pb-1.5 inline-block text-gray-300">
              Academic Qualifications
            </h4>
            <ul className="space-y-2 font-inter text-xs md:text-[13px] leading-snug text-gray-200">
              <li className="flex gap-2">
                <span className="text-white/60 font-bold shrink-0">•</span>
                <span>LL.M., University of Warwick School of Law, UK (Chevening &amp; J. N. Tata Scholar).</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white/60 font-bold shrink-0">•</span>
                <span>B.A., LL.B. (Hons.), NLSIU, Bangalore — Gold Medalist.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white/60 font-bold shrink-0">•</span>
                <span>Solicitor, Law Society of England &amp; Wales.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-white/60 font-bold shrink-0">•</span>
                <span>Chairperson, Centre for Post Graduate Legal Studies &amp; Professor of Law.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
