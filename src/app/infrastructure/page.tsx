import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Infrastructure | VMLS",
  description: "Explore the world-class infrastructure and state-of-the-art facilities at Vinayaka Mission's Law School.",
};

export default function InfrastructurePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
            <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
            <span className="text-gray-300 font-light">/</span>
            <span className="text-[#a31f34] font-semibold">Infrastructure</span>
          </div>
        </nav>

        {/* Hero Section - Career Services Style */}
        <section className="relative w-full bg-white border-b border-gray-100">
          <div className="flex flex-col lg:flex-row min-h-[450px]">
            <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
              <div className="mb-4">
                <span className="inline-block w-12 h-[1px] bg-[#fbb03b] align-middle"></span>
                <span className="font-inter text-[#fbb03b] text-xs font-bold uppercase tracking-[0.4em] mx-4">Our Campus</span>
              </div>
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                Modern <span className="text-[#fbb03b]">Classrooms</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
                Experience a testament to modern educational advancements, where technology meets design to foster excellence.
              </p>
            </div>
            <div className="lg:w-[55%] relative min-h-[300px]">
              <Image
                src="/images/class1.webp"
                alt="VMLS Modern Classroom"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute inset-0 bg-black/10"></div>
            </div>
          </div>
        </section>

        {/* Design Vision Section - Message Style */}
        <section className="pt-16 pb-12 px-[5%] bg-white">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-start">
            {/* Feature Image Side */}
            <div className="w-full md:w-1/3 flex flex-col items-center text-center">
              <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-2xl mb-8">
                <Image
                  src="/images/class2.webp"
                  alt="Classroom Design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#1a1a1a] mb-2">Architectural Vision</h3>
              <p className="font-inter text-[#800000] font-semibold text-sm">
                Designed for Focus and Interactive Learning
              </p>
            </div>

            {/* Narrative Text Side */}
            <div className="w-full md:w-2/3">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-6 leading-tight">
                A Learning Environment Redefined for Excellence
              </h2>
              
              <div className="space-y-6 font-inter text-gray-700 leading-relaxed text-justify text-lg">
                <p>
                  The classrooms of VMLS are a testament to modern educational advancements, blending technology with design to create an environment ripe for learning. At the heart of this space is the smart technology integration, acting as a focal point for digital presentations and interactive learning sessions.
                </p>
                
                <p>
                  Architecturally, the room&apos;s spacious layout, coupled with strategic lighting and acoustics, minimizes distractions and promotes an atmosphere of focused study. The thoughtful integration of these elements underscores VMLS&apos;s commitment to providing a learning space that is not only functional but also conducive to the educational journey of its students.
                </p>
                
                <p>
                  Every aspect of the classroom—from the ergonomic seating to the placement of high-definition screens—is meticulously planned to enhance the student experience. This synergy between physical space and digital tools ensures that learners are prepared for the challenges of a modern legal career.
                </p>

                <div className="pt-8 border-t border-gray-100 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#fdf2f2] flex items-center justify-center text-2xl">🎓</div>
                  <div>
                    <p className="font-playfair font-bold text-gray-900 text-xl">VMLS Infrastructure Commitment</p>
                    <p className="text-sm text-gray-500 font-medium italic">Empowering the next generation of legal minds.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Specifications Section - Services Grid Style */}
        <section className="py-20 px-[5%] bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#800000] mb-4">
                Core Specifications
              </h2>
              <div className="w-20 h-1 bg-[#fbb03b] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Smart Technology",
                  desc: "High-definition smart screens and integrated audio systems for interactive and visually engaging digital learning sessions.",
                  image: "/images/class3.webp"
                },
                {
                  title: "Seamless Connectivity",
                  desc: "Campus-wide high-speed Wi-Fi and dedicated charging points at each desk ensuring students stay connected to global legal databases.",
                  image: "/images/atrium3.webp"
                },
                {
                  title: "Acoustic Precision",
                  desc: "Specialized sound-dampening materials and strategic lighting design to minimize background noise and reduce eye strain during long sessions.",
                  image: "/images/atrium2.webp"
                }
              ].map((spec, i) => (
                <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col border border-gray-100">
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={spec.image}
                      alt={spec.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-10 flex flex-col flex-grow">
                    <h3 className="font-playfair text-2xl font-bold text-[#800000] mb-4 group-hover:text-[#a31f34] transition-colors duration-300">
                      {spec.title}
                    </h3>
                    <p className="font-inter text-gray-600 text-lg leading-relaxed text-justify">
                      {spec.desc}
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
