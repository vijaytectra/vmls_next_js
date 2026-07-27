"use client";

import Image from "next/image";
import Link from "next/link";
import { boardOfAdvisors } from "@/data/boardOfAdvisors";

export default function BoardOfAdvisors() {
  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-32 px-[5%] bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 transform origin-top translate-x-1/2 -z-10"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {boardOfAdvisors.map((director, index) => {
            const hasProfile = director.paragraphs.length > 0;
            const card = (
              <>
                <div className="relative aspect-square w-full shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="relative w-full h-full overflow-hidden bg-white">
                    <Image
                      src={director.image}
                      alt={director.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                </div>

                <div className="mt-2 flex flex-col h-full">
                  <div className="min-h-[40px] md:min-h-[50px] flex flex-col justify-end gap-2">
                    <h3 className="font-playfair font-bold text-base md:text-lg lg:text-xl tracking-tight text-[#1a1a1a] leading-tight group-hover:text-[#a31f34] transition-colors duration-300">
                      {director.name}
                    </h3>
                    <div className="w-8 h-[2px] bg-[#a31f34]/30 group-hover:w-16 group-hover:bg-[#a31f34] transition-all duration-500"></div>
                  </div>
                  <p className="mt-4 font-inter text-gray-500 text-[15px] leading-relaxed tracking-tight">
                    {director.designation}
                  </p>
                </div>
              </>
            );

            return hasProfile ? (
              <Link
                key={director.slug}
                href={`/board-of-advisors/${director.slug}`}
                className="flex flex-col group animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {card}
              </Link>
            ) : (
              <div
                key={director.slug}
                className="flex flex-col group animate-fade-in-up"
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
