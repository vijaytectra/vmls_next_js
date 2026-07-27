import Image from "next/image";
import Link from "next/link";
import { infrastructureItems } from "@/data/infrastructure";

export const metadata = {
  title: "Infrastructure | Campus Facilities | VMLS",
  description:
    "Explore the world-class infrastructure and state-of-the-art facilities at Vinayaka Mission's Law School.",
};

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
            <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
              Home
            </Link>
            <span className="text-gray-300 font-light">/</span>
            <span className="text-[#a31f34] font-semibold">Infrastructure</span>
          </div>
        </nav>

        <section className="relative w-full bg-white border-b border-gray-100">
          <div className="flex flex-col lg:flex-row min-h-[380px] md:min-h-[450px]">
            <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
              <div className="mb-4">
                <span className="inline-block w-12 h-[1px] bg-[#fbb03b] align-middle" />
                <span className="font-inter text-[#fbb03b] text-xs font-bold uppercase tracking-[0.4em] mx-4">
                  Our Campus
                </span>
              </div>
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Campus <span className="text-[#fbb03b]">Infrastructure</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
                Explore eight world-class facilities designed to support academic excellence, practical training, and student life at VMLS.
              </p>
            </div>
            <div className="lg:w-[55%] relative min-h-[280px]">
              <Image
                src="/images/mb1.webp"
                alt="VMLS Campus Infrastructure"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 px-[5%] bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-3">
                Infrastructure
              </h2>
              <div className="w-16 h-1 bg-[#fbb03b] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {infrastructureItems.map((item) => (
                <article
                  key={item.href}
                  className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="metadata"
                      poster={item.image}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    >
                      <source src={item.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <h3 className="absolute bottom-4 left-5 right-5 font-playfair text-2xl md:text-3xl font-bold text-white drop-shadow">
                      {item.title}
                    </h3>
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="font-inter text-gray-700 leading-relaxed text-base md:text-lg text-justify hyphens-none [hyphens:none] [text-wrap:pretty] mb-6">
                      {item.shortDescription}
                    </p>
                    <Link
                      href={item.href}
                      className="inline-flex items-center gap-3 font-inter text-xs font-bold uppercase tracking-widest text-[#800000] hover:text-[#a31f34] transition-colors"
                    >
                      <span>Read More</span>
                      <span className="w-8 h-[1px] bg-[#800000]" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
