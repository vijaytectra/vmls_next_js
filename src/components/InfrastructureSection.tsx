"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { infrastructureItems } from "@/data/infrastructure";

export default function InfrastructureSection() {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.play().catch(() => {
          /* autoplay may be blocked */
        });
      }
    });
  }, []);

  return (
    <section className="pt-2 pb-8 md:pt-4 md:pb-12 bg-white overflow-hidden text-black">
      <div className="max-w-[1600px] mx-auto px-[5%]">
        <h2 className="font-playfair text-3xl md:text-5xl text-[#1a1a1a] mb-6 md:mb-12 text-center">
          Our Infrastructure
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5">
          {infrastructureItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden bg-white shadow-[0_16px_32px_-12px_rgba(0,0,0,0.28)]"
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                poster={item.image}
                className="absolute inset-0 w-full h-full object-cover scale-[1.01] transition-transform duration-700 group-hover:scale-105"
              >
                <source src={item.video} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute inset-0 p-5 sm:p-6 md:p-7 flex flex-col justify-end">
                <h3 className="font-playfair text-white text-xl sm:text-2xl md:text-3xl leading-tight mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-gray-200 text-sm leading-relaxed line-clamp-3 mb-3 sm:mb-4 opacity-100 max-h-24 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:max-h-0 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:max-h-24 transition-all duration-500 overflow-hidden">
                  {item.shortDescription}
                </p>
                <div className="flex items-center gap-3 text-white font-inter text-xs font-bold uppercase tracking-widest min-h-[44px]">
                  <span>Read More</span>
                  <span className="w-8 h-[1px] bg-white transition-all group-hover:w-12" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
