"use client";

import Image from "next/image";
import Link from "next/link";
import { getMentoringKeyMembers } from "@/data/mentoringCommittee";
import { noOrphanText } from "@/lib/noOrphanText";

export default function MentoringKeyMembers() {
  const keyMembers = getMentoringKeyMembers();

  return (
    <section className="pb-8 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {keyMembers.map((member, index) => (
            <Link
              key={member.slug}
              href={`/mentoring-committee/${member.slug}`}
              className="group flex min-w-0 flex-col items-stretch w-full h-full cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-square w-full shrink-0 overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#800000] py-3 text-center">
                  <span className="font-playfair text-white text-base md:text-lg tracking-wide">
                    {member.role}
                  </span>
                </div>
              </div>

              <div className="w-full min-w-0 pt-5 text-left overflow-hidden">
                <h3 className="m-0 mb-1.5 font-inter font-bold text-lg md:text-xl text-[#1a1a1a] text-left break-words group-hover:text-[#a31f34] transition-colors">
                  {member.name}
                </h3>
                <p className="m-0 font-inter text-gray-600 md:text-base leading-snug text-left break-words [overflow-wrap:anywhere]">
                  {noOrphanText(member.designation)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
