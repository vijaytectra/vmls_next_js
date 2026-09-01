import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo-pages";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata("/food-court");



export default function FoodCourtPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PageSchema path="/food-court" />
      <main className="flex-grow">
        <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
              Home
            </Link>
            <span className="text-gray-300 font-light">/</span>
            <Link href="/infrastructure" className="text-gray-500 hover:text-[#a31f34] transition-colors">
              Infrastructure
            </Link>
            <span className="text-gray-300 font-light">/</span>
            <span className="text-[#a31f34] font-semibold">Food Court</span>
          </div>
        </nav>

        <section className="relative w-full bg-white border-b border-gray-100">
          <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[450px]">
            <div className="w-full lg:w-[45%] p-6 sm:p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
              <div className="mb-4">
                <span className="inline-block w-12 h-[1px] bg-[#fbb03b] align-middle" />
                <span className="font-inter text-[#fbb03b] text-xs font-bold uppercase tracking-[0.4em] mx-4">
                  Campus Life
                </span>
              </div>
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Food <span className="text-[#fbb03b]">Court</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
                Designed to cater to the diverse culinary preferences and economic backgrounds of the student body.
              </p>
            </div>
            <div className="hidden lg:block lg:w-[55%] relative min-h-[300px]">
              <Image
                src="/images/foodc1.webp"
                alt="VMLS Food Court"
                fill
                priority
                className="object-cover"
                sizes="55vw"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
          </div>
        </section>

        <section className="pt-16 pb-12 px-[5%] bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl mb-8">
                <Image
                  src="/images/foodc2.webp"
                  alt="VMLS Dining Spaces"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#1a1a1a] mb-2">Inclusive Dining</h3>
              <p className="font-inter text-[#800000] font-semibold text-sm">
                Nourishment and Community
              </p>
            </div>

            <div className="w-full md:w-2/3">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-6 leading-tight">
                A Formal Overview
              </h2>

              <div className="space-y-6 font-inter text-gray-700 leading-relaxed text-left text-lg">
                <p>
                  The VMLS food courts are designed to cater to the diverse culinary preferences and economic backgrounds of the student body. Here&apos;s a formal overview:
                </p>

                <div className="space-y-5">
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#800000] mb-2">Variety of Cuisines</h3>
                    <p>
                      The air-conditioned food court offers a range of international cuisines, including Italian, Continental, Chinese, and Indian, providing a rich dining experience.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#800000] mb-2">Subsidized Options</h3>
                    <p>
                      The canteen provides subsidized meals, ensuring that students from all economic backgrounds have access to affordable, nutritious food.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-[#800000] mb-2">Inclusive Environment</h3>
                    <p>
                      With two distinct food courts, VMLS demonstrates a commitment to inclusivity, addressing the varied needs of the student community.
                    </p>
                  </div>
                </div>

                <p>
                  The food courts at VMLS not only serve as a place for nourishment but also as social hubs where students can gather, share meals, and build community.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-[5%] bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#800000] mb-4">
                Dining Highlights
              </h2>
              <div className="w-20 h-1 bg-[#fbb03b] mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "International Menu",
                  desc: "Italian, Continental, Chinese, and Indian cuisines in an air-conditioned dining environment.",
                  image: "/images/foodc1.webp",
                },
                {
                  title: "Affordable Meals",
                  desc: "Subsidized canteen options so every student can access nutritious food.",
                  image: "/images/foodc2.webp",
                },
                {
                  title: "Social Hub",
                  desc: "Two food courts where students gather, share meals, and build community.",
                  image: "/images/foodc3.webp",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100"
                >
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="font-playfair text-2xl font-bold text-[#800000] mb-4 group-hover:text-[#a31f34] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-gray-600 text-lg leading-relaxed text-left">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
