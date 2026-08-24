"use client";

import Image from "next/image";
import Link from "next/link";
import { getMentoringExOfficioMembers } from "@/data/mentoringCommittee";
import { noOrphanText } from "@/lib/noOrphanText";

export default function MentoringExOfficio() {
  const exOfficioMembers = getMentoringExOfficioMembers();

  return (
    <section className="pb-32 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-8">
          Ex-Officio Members
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 sm:gap-x-10 gap-y-12 sm:gap-y-16">
          {exOfficioMembers.map((member, index) => (
            <Link
              key={member.slug}
              href={`/mentoring-committee/${member.slug}`}
              className="group flex min-w-0 flex-col items-stretch w-full h-full cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-square w-full shrink-0 overflow-hidden bg-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:-translate-y-2">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain transition-transform duration-1000 group-hover:scale-110"
                />
              </div>

              <div className="w-full min-w-0 pt-5 text-left overflow-hidden">
                <h3 className="m-0 mb-2 font-semibold text-[19px] leading-tight text-[#1a1a1a] text-left break-words group-hover:text-[#a31f34] transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="w-8 h-[2px] bg-[#a31f34]/30 mb-2.5 group-hover:w-12 group-hover:bg-[#a31f34] transition-all duration-500" />
                <p className="m-0 font-inter text-[15px] leading-relaxed text-gray-500 text-left break-words [overflow-wrap:anywhere]">
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
