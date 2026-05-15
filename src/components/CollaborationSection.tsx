import Image from "next/image";

const logos = [
  "/images/logo/1.webp", "/images/logo/2.webp", "/images/logo/3.webp", "/images/logo/4.webp", "/images/logo/5.webp",
  "/images/logo/6.webp", "/images/logo/7.webp", "/images/logo/8.webp", "/images/logo/9.webp", "/images/logo/10.webp",
  "/images/logo/11.webp", "/images/logo/12.webp", "/images/logo/13.webp", "/images/logo/14.webp", "/images/logo/15.webp",
  "/images/logo/16.webp", "/images/logo/17.webp", "/images/logo/18.webp", "/images/logo/19.webp", "/images/logo/20.webp",
  "/images/logo/21.webp"
];

const row1 = logos.slice(0, 11);
const row2 = logos.slice(11);

const marquee1 = [...row1, ...row1];
const marquee2 = [...row2, ...row2];

export default function CollaborationSection() {
  return (
    <section className="pt-4 pb-6 md:pb-8 bg-white border-t border-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-[5%] mb-4 md:mb-6 text-center">
        <h2 className="font-playfair text-3xl md:text-5xl text-[#1a1a1a]">
          Institutional Collaboration
        </h2>

        <div className="w-24 h-1 bg-[#a31f34] mx-auto mt-4"></div>
      </div>

      <div className="space-y-6 md:space-y-8">
        {/* Row 1: Scrolling Left */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 md:gap-20 py-2 w-max">
            {marquee1.map((src, index) => (
              <div 
                key={`r1-${index}`} 
                className="flex-shrink-0 w-32 md:w-44 h-16 md:h-20 relative cursor-pointer group"
              >
                <Image
                  src={src}
                  alt={`Partner Logo Row 1 - ${index}`}
                  fill
                  sizes="(max-width: 768px) 128px, 176px"
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          {/* Shadow Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="relative w-full overflow-hidden">
          <div className="animate-marquee-reverse flex items-center gap-12 md:gap-20 py-2 w-max">
            {marquee2.map((src, index) => (
              <div 
                key={`r2-${index}`} 
                className="flex-shrink-0 w-32 md:w-44 h-16 md:h-20 relative cursor-pointer group"
              >
                <Image
                  src={src}
                  alt={`Partner Logo Row 2 - ${index}`}
                  fill
                  sizes="(max-width: 768px) 128px, 176px"
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          {/* Shadow Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
