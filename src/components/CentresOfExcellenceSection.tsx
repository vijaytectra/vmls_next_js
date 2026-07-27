import Image from "next/image";
import Link from "next/link";

const centres = [
  { name: "Global Tamil Law Centre", image: "/images/centreofexcel/1.webp", href: "/global-tamil-law-centre" },
  { name: "Centre for Justice Through Technology", image: "/images/centreofexcel/2.webp", href: "/centre-for-justice-through-technology" },
  { name: "CPIL", image: "/images/centreofexcel/3.webp", href: "/cpil" },
  { name: "Maritime Law", image: "/images/centreofexcel/4.webp", href: "/maritime-law" },
  { name: "Centre for Access to Justice", image: "/images/centreofexcel/5.webp", href: "/centre-for-access-to-justice" },
];

export default function CentresOfExcellenceSection() {
  return (
    <section className="py-4 md:py-6 px-[5%] bg-[#fafafa] relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#a31f34]/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#a31f34]"></div>
            <span className="text-[#a31f34] text-xs font-bold uppercase tracking-[0.3em]">Research & Innovation</span>
            <div className="w-8 h-[1px] bg-[#a31f34]"></div>
          </div>
          <h2 className="font-playfair text-3xl md:text-5xl text-gray-900 mb-6">
            Centres of Excellence
          </h2>
          <div className="w-20 h-1 bg-[#a31f34] mx-auto"></div>
        </div>
        
        {/* Centres Grid - Using flex for natural centering of odd items */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 lg:gap-10">
          {centres.map((centre, index) => {
            const content = (
              <div 
                className={`group relative aspect-square w-full bg-white shadow-[0_15px_40px_-20px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center overflow-hidden ${centre.href ? 'cursor-pointer' : ''}`}
              >
                {/* Image Container — dimmed on touch so label stays readable */}
                <div className="relative w-full h-full transition-all duration-500 opacity-40 [@media(hover:hover)]:opacity-100 [@media(hover:hover)]:group-hover:scale-110 [@media(hover:hover)]:group-hover:opacity-20">
                  <Image
                    src={centre.image}
                    alt={centre.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    className="object-contain"
                    priority={index < 5}
                  />
                </div>
                
                {/* Centre Name — always on touch; hover-reveal on pointer devices */}
                <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 opacity-100 translate-y-0 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:translate-y-4 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-hover:translate-y-0 transition-all duration-500 text-center">
                  <p className="font-playfair text-sm sm:text-base md:text-lg text-[#a31f34] font-bold leading-tight">
                    {centre.name}
                  </p>
                </div>

                {/* Bottom Accent Border */}
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#a31f34] [@media(hover:hover)]:w-0 [@media(hover:hover)]:group-hover:w-full transition-all duration-500"></div>
                
                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-[#a31f34]/0 border-l-[30px] border-l-transparent transition-all duration-500 group-hover:border-t-[#a31f34]/5"></div>
              </div>
            );

            return (
              <div key={index} className="w-[calc(50%-8px)] md:w-[calc(33.33%-22px)] lg:w-[calc(20%-32px)]">
                {centre.href ? (
                  <Link href={centre.href} className="block">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
