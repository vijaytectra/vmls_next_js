"use client";

import Image from "next/image";

interface Director {
  name: string;
  designation: string;
  image: string;
  bio?: string;
}

const directors: Director[] = [
  {
    name: "Justice BS Chauhan",
    designation: "Former Judge Supreme Court of India; Former Chairman, Law Commission of India.",
    image: "/images/bod/advisor1.webp"
  },
  {
    name: "Justice P. Kalaiyarasan",
    designation: "Former Judge, Madras High Court; Chairman, Tamil Nadu State Official Language Commission.",
    image: "/images/bod/advisor2.webp"
  },
  {
    name: "Padma Sri Dr. T.K. Viswanathan",
    designation: "Former Secretary – General of Lok Sabha; Former Secretary, Ministry of Law and Justice, Government of India.",
    image: "/images/bod/advisor3.webp"
  },
  {
    name: "Prof. Dr. Chockalingam",
    designation: "Chairperson, Rajiv Gandhi National Institute of Youth Development, (RGNIYD); Vice President, World Society of Victimology; Former Vice Chancellor, M.S. University, Tirunelveli, Tamil Nadu.",
    image: "/images/bod/advisor4.webp"
  },
  {
    name: "Mr. Abhijit Mukhopadhyay",
    designation: "President (Legal) and General Counsel, Hinduja Group",
    image: "/images/bod/advisor5.webp"
  },
  {
    name: "Mr. Promod Nair",
    designation: "Senior Advocate, High Court of Karnataka; Solicitor-Advocate, England and Wales.",
    image: "/images/bod/advisor6.webp"
  }
];

export default function BoardOfAdvisors() {
  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-32 px-[5%] bg-white relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gray-50/50 -skew-x-12 transform origin-top translate-x-1/2 -z-10"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Directors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {directors.map((director, index) => (
            <div key={index} className="flex flex-col group animate-fade-in-up" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="relative aspect-square w-full bg-white p-3 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-100 transition-transform duration-500 group-hover:-translate-y-2">
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
                  <h3 className="font-playfair font-bold text-lg md:text-xl lg:text-[22px] tracking-tight text-[#1a1a1a] leading-tight group-hover:text-[#a31f34] transition-colors duration-300">
                    {director.name}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#a31f34]/30 group-hover:w-16 group-hover:bg-[#a31f34] transition-all duration-500"></div>
                </div>
                <p className="mt-4 font-inter text-gray-500 text-[14px] leading-relaxed tracking-tight">
                  {director.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
