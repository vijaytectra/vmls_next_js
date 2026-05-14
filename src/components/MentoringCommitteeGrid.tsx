"use client";

import Image from "next/image";

interface Member {
  name: string;
  designation: string;
  image: string;
}

const members: Member[] = [
  {
    name: "Committee Member I",
    designation: "Eminent Senior Lawyer & Distinguished Academic",
    image: "/images/committee1.webp"
  },
  {
    name: "Committee Member II",
    designation: "Eminent Senior Lawyer & Distinguished Academic",
    image: "/images/committee2.webp"
  },
  {
    name: "Committee Member III",
    designation: "Eminent Senior Lawyer & Distinguished Academic",
    image: "/images/committee3.webp"
  },
  {
    name: "Committee Member IV",
    designation: "Eminent Senior Lawyer & Distinguished Academic",
    image: "/images/committee4.webp"
  },
  {
    name: "Committee Member V",
    designation: "Eminent Senior Lawyer & Distinguished Academic",
    image: "/images/committee5.webp"
  },
  {
    name: "Committee Member VI",
    designation: "Eminent Senior Lawyer & Distinguished Academic",
    image: "/images/committee6.webp"
  },
  {
    name: "Committee Member VII",
    designation: "Eminent Senior Lawyer & Distinguished Academic",
    image: "/images/committee7.webp"
  },
  {
    name: "Committee Member VIII",
    designation: "Eminent Senior Lawyer & Distinguished Academic",
    image: "/images/committee8.webp"
  },
  {
    name: "Senior Mentor",
    designation: "Distinguished Leadership & Strategic Advisor",
    image: "/images/mentor.webp"
  }
];

export default function MentoringCommitteeGrid() {
  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-32 px-[5%] bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 transform origin-top translate-x-1/2 -z-10"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative aspect-square w-full bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative w-full h-full overflow-hidden bg-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="mt-2 flex flex-col h-full">
                <div className="min-h-[40px] md:min-h-[50px] flex flex-col justify-end gap-2">
                  <h3 className="font-playfair font-bold text-lg md:text-xl lg:text-[22px] tracking-tight text-[#1a1a1a] leading-tight group-hover:text-[#a31f34] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#a31f34]/30 group-hover:w-16 group-hover:bg-[#a31f34] transition-all duration-500"></div>
                </div>
                <p className="mt-4 font-inter text-gray-500 text-[14px] leading-relaxed tracking-tight">
                  {member.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
