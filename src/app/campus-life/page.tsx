import Image from 'next/image';
import Link from 'next/link';

export default function CampusLifePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Campus Life</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl font-bold mb-6 leading-tight whitespace-nowrap">
              Campus <span className="text-[#fbb03b]">Life</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Experience a vibrant and holistic life at VMLS. Beyond the classrooms, our campus is a hub of cultural events, sports, student clubs, and extracurricular activities that foster personal growth and community bonding.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/il1.webp"
              alt="Campus Life at VMLS"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Our Infrastructure Section - Premium Bento Box Design */}
      <section className="py-20 md:py-32 px-[5%] bg-[#fcfcfc]">
        <div className="max-w-[1500px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="font-playfair text-4xl md:text-6xl text-[#1a1a1a] mb-6">
              World-Class <span className="italic text-[#a31f34]">Infrastructure</span>
            </h2>
            <div className="w-24 h-1 bg-[#a31f34] mx-auto mb-8"></div>
            <p className="font-inter text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Experience an environment designed for excellence, featuring state-of-the-art facilities that inspire innovation and academic growth.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 h-auto lg:h-[900px]">
            
            {/* 1. Featured: Classroom (Large) */}
            <Link 
              href="/infrastructure" 
              className="md:col-span-2 lg:col-span-3 lg:row-span-2 group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-700 hover:shadow-2xl"
            >
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
                <source src="/videos/class.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                <span className="inline-block px-4 py-1 bg-[#a31f34] text-white text-[10px] font-bold uppercase tracking-wider mb-4 rounded-full">Featured</span>
                <h3 className="font-playfair text-3xl md:text-5xl text-white mb-6">Modern Classrooms</h3>
                <div className="flex items-center gap-4 text-white font-inter text-xs font-bold uppercase tracking-[0.2em] group-hover:gap-6 transition-all">
                  <span>Explore Space</span>
                  <div className="h-[1px] flex-1 max-w-[60px] bg-white/50"></div>
                </div>
              </div>
            </Link>

            {/* 2. Atrium (Medium) */}
            <Link 
              href="/atrium" 
              className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-700 hover:shadow-2xl"
            >
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
                <source src="/videos/atrium.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-playfair text-2xl md:text-3xl text-white mb-3">Vibrant Atrium</h3>
                <p className="text-white/70 text-sm mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  A central hub for interaction and collaborative learning.
                </p>
                <div className="flex items-center gap-3 text-white font-inter text-[10px] font-bold uppercase tracking-widest">
                  <span>View Details</span>
                  <span className="w-8 h-[1px] bg-white/40"></span>
                </div>
              </div>
            </Link>

            {/* 3. Main Building (Medium) */}
            <Link 
              href="/main-building" 
              className="md:col-span-2 lg:col-span-3 group relative overflow-hidden rounded-3xl shadow-lg transition-all duration-700 hover:shadow-2xl"
            >
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
                <source src="/videos/corridor.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="font-playfair text-2xl md:text-3xl text-white mb-3">Academic Block</h3>
                <p className="text-white/70 text-sm mb-4 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                  Modern architecture meeting functional academic needs.
                </p>
                <div className="flex items-center gap-3 text-white font-inter text-[10px] font-bold uppercase tracking-widest">
                  <span>View Details</span>
                  <span className="w-8 h-[1px] bg-white/40"></span>
                </div>
              </div>
            </Link>

            {/* Bottom Row - Standard Cards */}
            <div className="md:col-span-4 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Digital Library", video: "/videos/library.mp4", href: "/library" },
                { title: "Moot Court", video: "/videos/moot-court.mp4", href: "/moot-court" },
                { title: "Seminar Hall", video: "/videos/seminar1.mp4", href: "/seminar-hall" },
                { title: "Hostel Facility", video: "/videos/hostel.mp4", href: "/hostel" }
              ].map((item, idx) => (
                <Link 
                  key={idx}
                  href={item.href} 
                  className="group relative h-[300px] overflow-hidden rounded-3xl shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110">
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="backdrop-blur-md bg-white/10 p-4 rounded-2xl border border-white/20 transform transition-transform duration-500 group-hover:-translate-y-2">
                      <h3 className="font-playfair text-lg md:text-xl text-white font-medium">{item.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>
      </section>

    </main>




  );
}
