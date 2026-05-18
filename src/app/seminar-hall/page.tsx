import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Seminar Hall | VMLS",
  description: "Explore the modern Seminar Hall at Vinayaka Mission's Law School, designed for academic excellence and professional events.",
};

export default function SeminarHallPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Breadcrumbs */}
        <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
            <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
            <span className="text-gray-300 font-light">/</span>
            <span className="text-[#a31f34] font-semibold">Seminar Hall</span>
          </div>
        </nav>

        {/* Hero Section - Career Services Style */}
        <section className="relative w-full bg-white border-b border-gray-100">
          <div className="flex flex-col lg:flex-row min-h-[450px]">
            <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#1a237e] text-white">
              <div className="mb-4">
                <span className="inline-block w-12 h-[1px] bg-[#fbb03b] align-middle"></span>
                <span className="font-inter text-[#fbb03b] text-xs font-bold uppercase tracking-[0.4em] mx-4">Knowledge Exchange</span>
              </div>
              <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                VMLS <span className="text-[#fbb03b]">Seminar Hall</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
                A modern facility designed to host a variety of academic and professional events in a sophisticated environment.
              </p>
            </div>
            <div className="lg:w-[55%] relative min-h-[300px]">
              <Image
                src="/images/shall1.webp"
                alt="VMLS Seminar Hall"
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
                  src="/images/shall2.webp"
                  alt="Seminar Hall Interaction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#1a1a1a] mb-2">Academic Dialogue</h3>
              <p className="font-inter text-[#1a237e] font-semibold uppercase tracking-wider">
                Fostering Intellectual Growth
              </p>
            </div>

            {/* Narrative Text Side */}
            <div className="w-full md:w-2/3">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#1a237e] mb-6 leading-tight">
                A Premier Venue for Learning and Collaboration
              </h2>
              
              <div className="space-y-6 font-inter text-gray-700 leading-relaxed text-justify text-lg">
                <p>
                  The VMLS Seminar Hall is a modern facility designed to host a variety of academic and professional events. Equipped with state-of-the-art audio-visual equipment, it ensures high-quality presentations and interactive sessions that are essential for contemporary legal education.
                </p>
                
                <p>
                  With ample seating and a well-lit environment, the seminar hall provides a comfortable setting for attendees to engage in learning and discussion. It serves as a versatile venue for seminars, lectures, conferences, and workshops, supporting the institution&apos;s commitment to continuous learning and knowledge sharing.
                </p>
                
                <p>
                  The seminar hall is also a space for collaboration, where students, faculty, and industry professionals can come together to exchange ideas and insights. It is a testament to the institution&apos;s dedication to providing top-tier educational facilities that enhance the learning experience for all.
                </p>

                <div className="pt-8 border-t border-gray-100 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-[#e8eaf6] flex items-center justify-center text-2xl">📢</div>
                  <div>
                    <p className="font-playfair font-bold text-gray-900 text-xl">VMLS Academic Excellence</p>
                    <p className="text-gray-500 font-medium italic">Empowering minds through global perspectives.</p>
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
              <h2 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a237e] mb-4">
                Hall Amenities
              </h2>
              <div className="w-20 h-1 bg-[#fbb03b] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  title: "Modern Amenities",
                  desc: "State-of-the-art audio-visual systems ensuring every presentation is delivered with crystal-clear precision.",
                  image: "/images/shall1.webp"
                },
                {
                  title: "Versatile Use",
                  desc: "Perfectly suited for a wide range of activities from guest lectures to international legal conferences.",
                  image: "/images/shall3.webp"
                },
                {
                  title: "Spacious Design",
                  desc: "Ergonomic seating and an open-plan layout that comfortably accommodates large academic gatherings.",
                  image: "/images/shall2.webp"
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
                    <h3 className="font-playfair text-2xl font-bold text-[#1a237e] mb-4 group-hover:text-[#a31f34] transition-colors duration-300">
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
