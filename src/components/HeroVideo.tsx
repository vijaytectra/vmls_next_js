"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function HeroVideo() {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 768px)").matches;
    const src = desktop
      ? "/video/vmls-hero-video.mp4"
      : "/video/vmls-hero-video-mobile.mp4";

    // Defer attaching the heavy hero video until the browser is idle so
    // first paint / LCP are not blocked by a multi‑MB download.
    const start = () => setVideoSrc(src);
    let idleId: number | undefined;
    let timeoutId: number | undefined;

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(start, { timeout: 1800 });
    } else {
      timeoutId = window.setTimeout(start, 400);
    }

    return () => {
      if (idleId !== undefined && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative w-full h-[min(85vh,720px)] min-h-[520px] sm:min-h-[560px] md:h-[85vh] md:min-h-[600px] overflow-hidden flex flex-col justify-end text-white font-sans">
      {/* Solid backdrop until the single viewport video is ready */}
      <div className="absolute inset-0 -z-10 bg-[#0c1218]" />

      {videoSrc && (
        <video
          key={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute top-0 left-0 w-full h-full md:h-[100vh] object-cover -z-10"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}

      {/* Overlay for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/25 z-0" />

      {/* Main Content — vertically centered on mobile; desktop position unchanged */}
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

      {/* Mentorship bar — extra top gap on mobile so logos clear the headline */}
      <div className="relative z-10 w-full bg-gradient-to-t from-black/95 via-black/70 to-transparent px-8 sm:px-10 md:px-[5%] pt-10 pb-16 md:pt-4 md:pb-8">
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-4 gap-5 lg:gap-6 items-center">
          <div className="relative col-span-3 flex items-center gap-5 xl:gap-6 lg:border-r lg:border-white/30 lg:pr-6 min-w-0">
            <div className="shrink-0">
              <Image
                src="/images/opjindal.webp"
                alt="O.P. Jindal Global University"
                width={288}
                height={60}
                className="w-44 lg:w-56 xl:w-64 h-auto object-contain"
                priority
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
                width={96}
                height={96}
                className="w-16 lg:w-20 xl:w-24 h-auto object-contain"
                priority
              />
            </div>
          </div>

          <div className="col-span-1 flex items-center justify-center lg:justify-start">
            <Image
              src="/images/approved.webp"
              alt="UGC and BCI Approved"
              width={220}
              height={70}
              className="w-40 lg:w-44 xl:w-52 h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Mobile mentorship */}
        <div className="md:hidden flex flex-col items-center gap-3 w-full">
          <div className="flex items-center justify-center gap-4">
            <Image
              src="/images/opjindal.webp"
              alt="O.P. Jindal Global University"
              width={160}
              height={48}
              className="w-36 h-auto object-contain"
              priority
            />
            <Image
              src="/images/jindal-global.webp"
              alt="Jindal Global Law School"
              width={56}
              height={56}
              className="w-12 h-12 object-contain"
              priority
            />
          </div>
          <p className="w-full text-[11px] leading-relaxed text-center font-inter opacity-90 m-0 text-balance">
            Vinayaka Mission&apos;s Law School (VMLS) is being mentored by O.P. Jindal Global University
            (an Institution of Eminence) and Jindal Global Law School under an institutional mentorship agreement.
          </p>
          <Image
            src="/images/approved.webp"
            alt="UGC and BCI Approved"
            width={180}
            height={56}
            className="w-44 h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
