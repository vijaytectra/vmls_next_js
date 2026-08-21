"use client";

import Image from "next/image";
import Link from "next/link";
import { boardOfAdvisors } from "@/data/boardOfAdvisors";
import { noOrphanText } from "@/lib/noOrphanText";

export default function BoardOfAdvisors() {
  return (
    <section className="pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-20 md:pb-32 px-[5%] bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 transform origin-top translate-x-1/2 -z-10"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-10 gap-y-12 sm:gap-y-16">
          {boardOfAdvisors.map((director, index) => {
            const hasProfile = director.paragraphs.length > 0;
            const card = (
              <>
                <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:-translate-y-2">
                  <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>

                <div className="w-full min-w-0 pt-5 text-left overflow-hidden">
                  <h3 className="m-0 mb-2 font-playfair font-bold text-base md:text-lg lg:text-xl tracking-tight text-[#1a1a1a] leading-tight text-left break-words group-hover:text-[#a31f34] transition-colors duration-300">
                    {director.name}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#a31f34]/30 mb-3 group-hover:w-16 group-hover:bg-[#a31f34] transition-all duration-500" />
                  <p className="m-0 font-inter text-[15px] leading-relaxed text-gray-500 text-left break-words [overflow-wrap:anywhere]">
                    {noOrphanText(director.designation)}
                  </p>
                </div>
              </>
            );

            return hasProfile ? (
              <Link
                key={director.slug}
                href={`/board-of-advisors/${director.slug}`}
                className="group flex min-w-0 flex-col items-stretch w-full h-full cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {card}
              </Link>
            ) : (
              <div
                key={director.slug}
                className="group flex min-w-0 flex-col items-stretch w-full h-full animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
