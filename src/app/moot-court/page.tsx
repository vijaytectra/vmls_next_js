import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Moot Court | VMLS",
  description: "Experience the state-of-the-art Moot Court at Vinayaka Mission's Law School, designed for real-world legal simulation.",
};

export default function MootCourtPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
            <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
            <span className="text-gray-300 font-light">/</span>
            <span className="text-[#a31f34] font-semibold">Moot Court</span>
          </div>
        </nav>

        {/* Hero Section - Career Services Style */}
        <section className="relative w-full bg-white border-b border-gray-100">
          <div className="flex flex-col lg:flex-row min-h-[450px]">
            <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#5d4037] text-white">
              <div className="mb-4">
                <span className="inline-block w-12 h-[1px] bg-[#fbb03b] align-middle"></span>
                <span className="font-inter text-[#fbb03b] text-xs font-bold uppercase tracking-[0.4em] mx-4">Legal Excellence</span>
              </div>
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                VMLS <span className="text-[#fbb03b]">Moot Court</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
                A state-of-the-art facility designed to simulate real-world legal proceedings, fostering practical advocacy skills.
              </p>
            </div>
            <div className="lg:w-[55%] relative min-h-[300px]">
              <Image
                src="/images/mcourt1.webp"
                alt="VMLS Moot Court"
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
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl mb-8 border border-gray-100">
                <Image
                  src="/images/mcourt2.webp"
                  alt="Moot Court Professional Setup"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#1a1a1a] mb-2">Professional Advocacy</h3>
              <p className="font-inter text-[#5d4037] font-semibold text-sm uppercase tracking-wider">
                Simulating the Scales of Justice
              </p>
            </div>

            {/* Narrative Text Side */}
            <div className="w-full md:w-2/3">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#5d4037] mb-6 leading-tight">
                Bridging Theory and Practical Jurisprudence
              </h2>
              
              <div className="space-y-6 font-inter text-gray-700 leading-relaxed text-justify text-lg">
                <p>
                  The VMLS Moot Court is a state-of-the-art facility designed to simulate real-world legal proceedings, providing students with a practical environment to develop their advocacy skills. Professional Setup boasts a professional moot court setup, complete with a well-organized seating arrangement that mirrors an actual courtroom, enhancing the realism of the simulation.
                </p>
                
                <p>
                  The facility serves as an educational platform where law students can practice and improve their legal argumentation, case analysis, and public speaking abilities. Equipped with modern technology to record proceedings, it allows for later review and critique, which is essential for the students&apos; learning process.
                </p>
                
                <p>
                  It also acts as a venue for hosting moot court competitions, inviting participation from various law schools, thereby fostering a competitive yet collaborative learning environment. The VMLS Moot Court is a testament to the institution&apos;s commitment to providing a comprehensive legal education that extends beyond theoretical knowledge to include essential practical experiences.
                </p>

                <div className="pt-8 border-t border-gray-100 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#efebe9] flex items-center justify-center text-2xl">⚖️</div>
                  <div>
                    <p className="font-playfair font-bold text-gray-900 text-xl">Legal Skills Development</p>
                    <p className="text-sm text-gray-500 font-medium italic">Empowering future advocates of justice.</p>
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
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#5d4037] mb-4">
                Core Advancements
              </h2>
              <div className="w-20 h-1 bg-[#fbb03b] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Professional Setup",
                  desc: "A meticulously organized courtroom simulation with judge benches and counsel stations that mirror real judicial settings.",
                  image: "/images/mcourt1.webp"
                },
                {
                  title: "Technological Edge",
                  desc: "Integrated recording and playback systems for detailed critique of oral arguments and courtroom etiquette.",
                  image: "/images/mcourt3.webp"
                },
                {
                  title: "Community Venue",
                  desc: "A premier hub for hosting regional and national moot court competitions, fostering a vibrant legal community.",
                  image: "/images/mcourt2.webp"
                }
              ].map((feature, i) => (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="font-playfair text-2xl font-bold text-[#5d4037] mb-4 group-hover:text-[#a31f34] transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="font-inter text-gray-600 text-lg leading-relaxed text-justify">
                      {feature.desc}
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
