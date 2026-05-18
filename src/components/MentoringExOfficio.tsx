"use client";

import Image from "next/image";

const exOfficioMembers = [
  {
    name: "Mr. J. Suresh Samuel",
    designation: "Chief Strategy Officer, Vinayaka Mission's Research Foundation (Deemed University)",
    image: "/images/committee4.webp"
  },
  {
    name: "Mr. Vivek Dhokalia",
    designation: "Advocate Supreme Court of India and Adjunct Professor, VMLS",
    image: "/images/committee5.webp"
  },
  {
    name: "Prof. Anand Prakash Mishra",
    designation: "Professor of Practice & Vice Dean (JGLS) and Director of Law Admissions",
    image: "/images/committee6.webp"
  },
  {
    name: "Prof. (Dr.) Sreejith S.G",
    designation: "Executive Dean, Jindal Global Law School, O.P. Jindal Global University",
    image: "/images/committee7.webp"
  },
  {
    name: "Mr. Antony R. Julian",
    designation: "Advocate, Supreme Court of India and Convenor, Steering Committee, Centre for Justice through Technology, Vinayaka Mission's Law School (VMLS)",
    image: "/images/committee8.webp"
  },
  {
    name: "Dr. Padmanabha Ramanunjam",
    designation: "Dean of Academic Governance, JGU and Professor of Law, JGLS",
    image: "/images/m2.webp"
  }
];

export default function MentoringExOfficio() {
  return (
    <section className="pb-32 px-[5%] bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-8">
          Ex-Officio Members
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {exOfficioMembers.map((member, index) => (
            <div key={index} className="flex flex-col group animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative aspect-square w-full shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-transform duration-500 group-hover:-translate-y-2">
                <div className="relative w-full h-full overflow-hidden bg-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="mt-6 flex flex-col h-full">
                <div className="min-h-[40px] flex flex-col justify-end gap-2">
                  <h3 className="font-playfair font-bold text-base leading-tight text-[#1a1a1a] group-hover:text-[#a31f34] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#a31f34]/30 group-hover:w-12 group-hover:bg-[#a31f34] transition-all duration-500"></div>
                </div>
                <p className="mt-4 font-inter text-gray-500 text-[13px] leading-relaxed tracking-tight">
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
