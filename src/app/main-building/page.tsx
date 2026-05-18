import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Main Building | VMLS",
  description: "Explore the striking modern architecture of the Main Building at Vinayaka Mission's Law School.",
};

export default function MainBuildingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
            <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
            <span className="text-gray-300 font-light">/</span>
            <span className="text-[#a31f34] font-semibold">Main Building</span>
          </div>
        </nav>

        {/* Hero Section - Career Services Style */}
        <section className="relative w-full bg-white border-b border-gray-100">
          <div className="flex flex-col lg:flex-row min-h-[450px]">
            <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#1a8a00] text-white">
              <div className="mb-4">
                <span className="inline-block w-12 h-[1px] bg-[#fbb03b] align-middle"></span>
                <span className="font-inter text-[#fbb03b] text-xs font-bold uppercase tracking-[0.4em] mx-4">Our Campus</span>
              </div>
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight uppercase tracking-tight">
                Academic <span className="text-[#fbb03b]">Block</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
                A grand architectural testament to order and efficiency, where functionality meets aesthetic precision.
              </p>
            </div>
            <div className="lg:w-[55%] relative min-h-[300px]">
              <Image
                src="/images/mb1.webp"
                alt="VMLS Main Building"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </section>

        {/* Vision Section - Message Style */}
        <section className="pt-16 pb-12 px-[5%] bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
            {/* Feature Image Side */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl mb-8">
                <Image
                  src="/images/mb2.webp"
                  alt="Main Building Architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#1a1a1a] mb-2">Modern Philosophy</h3>
              <p className="font-inter text-[#1a8a00] font-semibold">
                Clarity, Order, and Institutional Vision
              </p>
            </div>

            {/* Narrative Text Side */}
            <div className="w-full md:w-2/3">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#1a8a00] mb-6 leading-tight">
                A Testament to Modern Architectural Ethos
              </h2>
              
              <div className="space-y-6 font-inter text-gray-700 leading-relaxed text-justify text-lg">
                <p>
                  The main building of VMLS stands as a striking example of modern architecture, where functionality meets aesthetic precision. The clear lines and geometric forms of the structure embody the principles of modernity and order, reflecting an ethos of clarity and efficiency.
                </p>
                
                <p>
                  The brown brick facade offers a nod to traditional construction, while the white rectangular structure above the entrance signifies the school&apos;s forward-thinking vision. The white pillars at the entrance evoke a sense of grandeur, framing the gateway to knowledge.
                </p>
                
                <p>
                  This blend of materials and design elements results in a building that is not only a place of learning but also a testament to the enduring influence of modern architectural philosophy, providing students with a structured yet inspiring environment.
                </p>

                <div className="pt-8 border-t border-gray-100 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#f0fdf4] flex items-center justify-center text-2xl">🏛️</div>
                  <div>
                    <p className="font-playfair font-bold text-gray-900 text-xl">VMLS Academic Block</p>
                    <p className="text-gray-500 font-medium italic">Building the foundations of legal excellence.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section - Services Grid Style */}
        <section className="py-20 px-[5%] bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a8a00] mb-4">
                Architectural Highlights
              </h2>
              <div className="w-20 h-1 bg-[#fbb03b] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Grand Pillars",
                  desc: "Stately white pillars at the entrance evoke a sense of grandeur and academic prestige, framing the entrance.",
                  image: "/images/mb3.webp"
                },
                {
                  title: "Modern Facade",
                  desc: "A unique blend of traditional brown brick and modern geometric rectangular structures signifying vision.",
                  image: "/images/mb1.webp"
                },
                {
                  title: "Aesthetic Precision",
                  desc: "Geometric forms that embody the principles of modernity, order, and efficiency across all blocks.",
                  image: "/images/mb2.webp"
                }
              ].map((highlight, i) => (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="font-playfair text-2xl font-bold text-[#1a8a00] mb-4 group-hover:text-[#a31f34] transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="font-inter text-gray-600 text-lg leading-relaxed text-justify">
                      {highlight.desc}
                    </p>
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
