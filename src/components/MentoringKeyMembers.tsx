"use client";

import Image from "next/image";

const keyMembers = [
  {
    name: "Dr. A. Francis Julian",
    role: "Chair Person",
    designation: "Senior Advocate, Supreme court of India",
    image: "/images/committee1.webp"
  },
  {
    name: "Prof. (Dr). C. Raj Kumar",
    role: "Permanent Invitee",
    designation: "Vice Chancellor, O.P. Jindal Global University",
    image: "/images/committee2.webp"
  },
  {
    name: "Mr. Siddharth Raja",
    role: "Ex-Officio Member",
    designation: "Executive Dean, Vinayaka Mission's Law School",
    image: "/images/mentor.webp"
  }
];

export default function MentoringKeyMembers() {
  return (
    <section className="pb-8 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {keyMembers.map((member, index) => (
            <div key={index} className="flex flex-col group animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              {/* Photo Container with Role Banner */}
              <div className="relative aspect-square w-full overflow-hidden shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Red Role Banner */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#800000] py-3 text-center">
                  <span className="font-playfair text-white text-base md:text-lg tracking-wide">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Text Details */}
              <div className="mt-6 space-y-2">
                <h3 className="font-inter font-bold text-xl md:text-2xl text-[#1a1a1a]">
                  {member.name}
                </h3>
                <p className="font-inter text-gray-600 text-sm md:text-base leading-snug">
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
