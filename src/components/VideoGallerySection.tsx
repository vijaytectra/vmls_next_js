import Image from "next/image";
import Link from "next/link";

const row1 = [
  { id: 1, thumbnail: "/images/thumbnail/1.webp", title: "Infrastructure", href: "https://www.youtube.com/watch?v=ay5f0qEL-d8&t=6s" },
  { id: 2, thumbnail: "/images/thumbnail/2.webp", title: "Intra Trial Moot Court", href: "https://www.youtube.com/watch?v=Rp9LXrO_wj8" },
  { id: 3, thumbnail: "/images/thumbnail/3.webp", title: "Student Initiatives", href: "https://www.youtube.com/watch?v=l8V0klxk5zo" },
];

const row2 = [
  { id: 5, thumbnail: "/images/thumbnail/5.webp", title: "Alumni Review", href: "https://www.youtube.com/watch?v=GgAb1kBlNxo" },
  { id: 6, thumbnail: "/images/thumbnail/6.webp", title: "Tamil Moot Court", href: "https://www.youtube.com/watch?v=ooJrXJuT5JQ&t=1s" },
];

export default function VideoGallerySection() {
  return (
    <section className="pt-4 pb-6 px-[5%] bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Row 1: 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-6">
          {row1.map((video) => (
            <Link 
              key={video.id} 
              href={video.href}
              target="_blank"
              className="group relative aspect-video bg-gray-100 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer block"
            >
              <Image 
                src={video.thumbnail} 
                alt={video.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
              
              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-[#a31f34] group-hover:border-[#a31f34] transition-all duration-500">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Row 2: 2 Column Grid (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 max-w-[95%] lg:max-w-[85%] mx-auto">
          {row2.map((video) => (
            <Link 
              key={video.id} 
              href={video.href}
              target="_blank"
              className="group relative aspect-video bg-gray-100 overflow-hidden rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer block"
            >
              <Image 
                src={video.thumbnail} 
                alt={video.title} 
                fill 
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500"></div>
              
              {/* Play Button Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 group-hover:scale-110 group-hover:bg-[#a31f34] group-hover:border-[#a31f34] transition-all duration-500">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

