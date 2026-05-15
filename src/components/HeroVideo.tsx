import Image from "next/image";

export default function HeroVideo() {
  return (
    <section className="relative w-full h-[85vh] min-h-[600px] md:h-[85vh] overflow-hidden flex flex-col justify-end text-white font-sans">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/video/vmls-hero-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/25 z-0"></div>

      {/* Main Content (Top/Center) */}
      <div className="relative z-10 px-[5%] pb-4 md:pb-[10px] text-shadow-lg">
        <h1 className="text-[clamp(1.5rem,6vw,3.8rem)] font-normal mb-2 md:mb-[15px] leading-tight font-playfair">
          Vinayaka Mission's Law School
        </h1>
        <p className="text-[clamp(0.75rem,1.8vw,1.2rem)] mb-2 md:mb-[15px] font-medium font-inter tracking-wide opacity-90">
          Bilingual Excellence | Global Standards | Inclusive Justice
        </p>
        <h2 className="text-[clamp(1rem,3.5vw,2.2rem)] font-normal font-playfair">
          Law School of the Future
        </h2>
      </div>

      {/* Mentorship Content (Overlaid on Bottom of Video) */}
      <div className="relative z-10 w-full bg-gradient-to-t from-black/95 via-black/70 to-transparent px-[5%] pt-2 md:pt-4 pb-4 md:pb-8">
        <hr className="border-t border-white/40 w-full mb-3 md:mb-6" />

        <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-10">
          
          {/* Mobile Row 1 / Desktop Left: Jindal University & (Mobile only) Law School */}
          <div className="w-full lg:w-auto flex flex-row items-center justify-center lg:justify-start gap-8 lg:gap-0 order-1">
            <Image 
              src="/images/opjindal.webp" 
              alt="O.P. Jindal Global University" 
              width={300} 
              height={100} 
              className="w-[140px] md:w-[300px] object-contain"
              style={{ width: 'auto', height: 'auto' }}
            />
            {/* Mobile Only: Law School Logo grouping */}
            <Image 
              src="/images/jindal-global.webp" 
              alt="Jindal Global Law School" 
              width={130} 
              height={130} 
              className="w-[50px] object-contain lg:hidden ml-8"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          {/* Mentorship Text - Row 2 on Mobile / Center on Desktop */}
          <div className="flex-1 text-center order-2 px-4">
            <p className="text-[9px] md:text-sm lg:text-[15px] leading-relaxed m-0 font-normal max-w-[850px] mx-auto opacity-90">
              Vinayaka Mission's Law School (VMLS) is being mentored by O.P. Jindal Global University 
              (an Institution of Eminence) and Jindal Global Law School under an institutional mentorship agreement.
            </p>
          </div>

          {/* Row 3 on Mobile / Right on Desktop: Jindal Law School & Approvals */}
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-shrink-0 order-3">
            <Image 
              src="/images/jindal-global.webp" 
              alt="Jindal Global Law School" 
              width={130} 
              height={130} 
              className="hidden lg:block w-[130px] object-contain"
              style={{ width: 'auto', height: 'auto' }}
            />
            
            <div className="hidden lg:block h-16 w-[2px] bg-white/30 mx-4"></div>
            
            <Image 
              src="/images/approved.webp" 
              alt="UGC and BCI Approved" 
              width={350} 
              height={110} 
              className="w-[180px] md:w-[350px] object-contain"
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      </div>

    </section>
  );
}
