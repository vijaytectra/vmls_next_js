"use client";
import { useState, useEffect, useRef } from "react";
import Link from 'next/link';

const infraItems = [
  {
    title: "Classroom",
    description: "The classrooms of VMLS are a testament to modern academic excellence, blending technology with design to create an ideal space for learning.",
    video: "/videos/class.mp4",
    href: "/infrastructure"
  },
  {
    title: "Atrium",
    description: "The atrium of VMLS fosters an atmosphere that is both inviting and conducive to academic pursuits.",
    video: "/videos/atrium.mp4",
    href: "/atrium"
  },
  {
    title: "Main Building",
    description: "The main building of VMLS stands as a striking example of modern architecture, where functionality meets aesthetic precision.",
    video: "/videos/corridor.mp4",
    href: "/main-building"
  }

];



export default function InfrastructureSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    videoRefs.current.forEach(video => {
      if (video) {
        video.play().catch(error => {
          console.log("Autoplay prevented:", error);
        });
      }
    });
  }, []);

  return (
    <section className="pt-2 pb-4 md:pt-4 md:pb-4 bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-[5%]">
        <h2 className="font-playfair text-3xl md:text-5xl text-[#1a1a1a] mb-2 md:mb-16 text-center">
          Our Infrastructure
        </h2>

        <div className="flex flex-col lg:flex-row h-[600px] lg:h-[550px] gap-4">
          {infraItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isAnyHovered = hoveredIndex !== null;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative transition-all duration-700 ease-in-out cursor-pointer overflow-hidden bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)]
                  ${isHovered ? "flex-[2.5]" : isAnyHovered ? "flex-[0.5]" : "flex-1"}
                `}
              >
                <div className="relative w-full h-full overflow-hidden">
                  {/* Background Video */}
                  <video
                    ref={el => { videoRefs.current[index] = el; }}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="absolute inset-0 w-full h-full object-cover scale-[1.01]"
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>

                  {/* Overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? "bg-black/0" : "bg-black/20"}`}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-8 lg:p-12 flex flex-col justify-end">
                    <div className={`transition-all duration-500 transform ${isHovered ? "translate-y-0" : "translate-y-4"}`}>
                      <h3 className={`font-playfair text-white leading-tight mb-4 transition-all duration-500 ${isHovered ? "text-4xl lg:text-5xl" : "text-2xl lg:text-3xl"}`}>
                        {item.title}
                      </h3>

                      <div className={`overflow-hidden transition-all duration-500 ${isHovered ? "max-h-[300px] opacity-100 mb-6" : "max-h-0 opacity-0"}`}>
                        <p className="font-inter text-gray-200 text-lg leading-relaxed max-w-2xl text-justify">
                          {item.description}
                        </p>
                      </div>

                      <Link href={item.href} className="flex items-center gap-3 text-white font-inter text-xs font-bold uppercase tracking-widest group/btn">

                        <span>Read More</span>
                        <span className="w-8 h-[1px] bg-white transition-all group-hover/btn:w-12"></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
