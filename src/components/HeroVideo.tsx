import Image from "next/image";
import HeroVideoAttach from "@/components/HeroVideoAttach";

/**
 * Homepage hero — Server Component for the LCP poster and copy so that markup
 * is in the first HTML byte without waiting on a client bundle. Only the
 * desktop video attach logic is a client island.
 */
export default function HeroVideo() {
  return (
    <section className="relative w-full h-[min(85vh,720px)] min-h-[520px] sm:min-h-[560px] md:h-[85vh] md:min-h-[600px] overflow-hidden flex flex-col justify-end text-white font-sans">
      <div className="absolute inset-0 -z-10 bg-[#0c1218]" />

      {/*
        Mobile LCP — priority/high, no page opacity fade (see SiteChrome),
        video hidden on mobile (see HeroVideoAttach). 1200px on small
        viewports keeps the paint sharp without over-fetching.
      */}
      <Image
        src="/videos/vmls-hero-video-poster.webp"
        alt="Vinayaka Mission's Law School"
        fill
        priority
        fetchPriority="high"
        sizes="(max-width: 768px) 1200px, (max-width: 1280px) 100vw, 1200px"
        className="absolute top-0 left-0 w-full h-full md:h-[100vh] object-cover z-0"
      />

      <HeroVideoAttach />

      <div className="absolute top-0 left-0 w-full h-full bg-black/25 z-0" />

      <div className="absolute inset-x-0 z-10 px-8 sm:px-10 md:px-[5%] top-[38%] min-[400px]:max-sm:top-[46%] sm:top-[40%] bottom-auto md:top-auto md:bottom-[30%] lg:bottom-[32%]">
        <div className="w-full mx-auto text-center md:text-left text-shadow-lg">
          <h1 className="text-[clamp(1.5rem,6vw,3.8rem)] font-normal mb-3.5 sm:mb-4 md:mb-[15px] leading-tight font-playfair text-center md:text-left">
            Vinayaka Mission&apos;s Law School
          </h1>
          <div className="mb-3.5 sm:mb-4 md:mb-[15px] w-full flex justify-center md:justify-center">
            <p className="hero-tagline m-0 whitespace-nowrap text-center text-[clamp(0.52rem,2.2vw+0.2rem,1.2rem)] md:text-[clamp(0.85rem,1.1vw+0.55rem,1.15rem)] font-medium font-inter tracking-tight md:tracking-wide opacity-90">
              Bilingual Excellence | Global Standards | Inclusive&nbsp;Justice
            </p>
          </div>
          <h2 className="text-[clamp(1rem,3.5vw,2.2rem)] font-normal font-playfair text-center md:text-left leading-snug mb-6 md:mb-0">
            Law School of the Future
          </h2>
        </div>
      </div>

      <div className="relative z-10 w-full bg-gradient-to-t from-black/95 via-black/70 to-transparent px-8 sm:px-10 md:px-[5%] pt-10 pb-16 md:pt-4 md:pb-8">
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-6 items-center">
          <div className="relative col-span-3 flex items-center gap-5 xl:gap-6 lg:border-r lg:border-white/30 lg:pr-6 min-w-0">
            <div className="shrink-0">
              <Image
                src="/images/opjindal.webp"
                alt="O.P. Jindal Global University"
                width={268}
                height={86}
                sizes="(max-width: 1280px) 224px, 256px"
                className="w-44 lg:w-56 xl:w-64 h-auto object-contain"
                loading="eager"
                fetchPriority="low"
                decoding="async"
              />
            </div>

            <p className="min-w-0 flex-1 text-sm lg:text-center leading-relaxed font-inter font-normal m-0 opacity-90">
              Vinayaka Mission&apos;s Law School (VMLS) is being mentored by O.P.
              Jindal Global University (an Institution of Eminence) and
              Jindal Global Law School under an institutional mentorship
              agreement.
            </p>

            <div className="shrink-0">
              <Image
                src="/images/jindal-global.webp"
                alt="Jindal Global Law School"
                width={133}
                height={113}
                sizes="96px"
                className="w-16 lg:w-20 xl:w-24 h-auto object-contain"
                loading="eager"
                fetchPriority="low"
                decoding="async"
              />
            </div>
          </div>

          <div className="col-span-1 flex items-center justify-center lg:justify-start">
            <Image
              src="/images/approved.webp"
              alt="UGC and BCI Approved"
              width={220}
              height={70}
              sizes="(max-width: 1280px) 176px, 208px"
              className="w-40 lg:w-44 xl:w-52 h-auto object-contain"
              loading="eager"
              fetchPriority="low"
              decoding="async"
            />
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center gap-3 w-full">
          <div className="flex items-center justify-center gap-4">
            <Image
              loading="eager"
              fetchPriority="low"
              decoding="async"
              src="/images/opjindal.webp"
              alt="O.P. Jindal Global University"
              width={160}
              height={51}
              sizes="144px"
              className="w-36 h-auto object-contain"
            />
            <Image
              loading="eager"
              fetchPriority="low"
              decoding="async"
              src="/images/jindal-global.webp"
              alt="Jindal Global Law School"
              width={56}
              height={48}
              sizes="48px"
              className="w-12 h-12 object-contain"
            />
          </div>
          <p className="w-full text-[11px] leading-relaxed text-center font-inter opacity-90 m-0 text-balance">
            Vinayaka Mission&apos;s Law School (VMLS) is being mentored by O.P. Jindal Global University
            (an Institution of Eminence) and Jindal Global Law School under an institutional mentorship agreement.
          </p>
          <Image
            loading="eager"
            fetchPriority="low"
            decoding="async"
            src="/images/approved.webp"
            alt="UGC and BCI Approved"
            width={180}
            height={56}
            sizes="176px"
            className="w-44 h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
