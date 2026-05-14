import Image from 'next/image';
import Link from 'next/link';

export default function StudentAffairsPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Student Affairs</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-white/30"></div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Campus Life</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Student <br /> <span className="text-[#fbb03b]">Affairs</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-justify">
              The Office of Student Affairs at VMLS is dedicated to fostering a vibrant campus community, supporting student leadership, and ensuring holistic development through diverse extracurricular and welfare initiatives.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/news/5yr-4.webp"
              alt="Student Affairs at VMLS"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Intro Quote Section */}
      <section className="py-4 md:py-6 px-[5%] bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-4xl text-gray-900 leading-tight mb-8">
            "Law school is more than just books and briefs—it's about <span className="text-[#a31f34] italic font-bold text-3xl md:text-5xl block mt-2">building the future together."</span>
          </h2>
          <p className="font-inter text-gray-600 leading-relaxed max-w-4xl mx-auto text-sm md:text-base text-justify">
            The Office of Student Affairs (OSA) at VMLS is dedicated to fostering a vibrant, inclusive, and enriching environment for our students. Beyond academic excellence, OSA offers opportunities for personal and professional growth through a wide range of extracurricular activities, clubs, and events. We aim to cultivate well-rounded individuals, empowering students to explore their passions, collaborate with peers, and develop leadership skills. By organizing events that encourage networking, learning, and collaboration, OSA helps students navigate the challenges of law school while making lasting memories. Our mission is to support, guide, and enhance every student's holistic journey.
          </p>
        </div>
      </section>

      {/* Office Resource Section */}
      <section className="py-6 md:py-8 px-[5%] bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/studentaff/1.webp"
              alt="Student Affairs Office"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#a31f34]/10 rounded-full">
              <span className="text-[#a31f34] font-bold text-[10px] uppercase tracking-widest">Resource Hub</span>
            </div>
            <h3 className="font-playfair text-3xl font-bold text-gray-900">Your Go-To Resource</h3>
            <p className="font-inter text-gray-600 leading-relaxed text-sm md:text-base text-justify">
              The Student Affairs Office is your go-to resource for guidance, support, and opportunities throughout your time at VMLS. Whether you need help adjusting to campus life, seeking personal or academic counseling, or looking to get involved in student activities, our doors are always open. We coordinate a variety of student clubs and events that cater to diverse interests, helping you build leadership skills, pursue your passions, and form lasting friendships.
            </p>
          </div>
        </div>
      </section>

      {/* Dean's Profile - High Impact Card */}
      <section className="py-8 md:py-10 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#800000] rounded-none md:rounded-2xl shadow-[0_30px_60px_-15px_rgba(128,0,0,0.3)] text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-all duration-700"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-stretch">
              {/* Left Profile Info */}
              <div className="lg:w-[35%] p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/10">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#fbb03b]/30 mb-6 overflow-hidden bg-gray-200">
                    <Image
                      src="/images/studentaff/dr-shenbagavalli.webp"
                      alt="Dr. Shenbagavalli"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-1">Dr. Shenbagavalli</h3>
                  <p className="text-[#fbb03b] font-bold text-xs uppercase tracking-widest mb-6">Associate Dean - Student Affairs</p>
                  
                  <div className="space-y-3 w-full">
                    <div className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors justify-center lg:justify-start">
                      <svg className="w-4 h-4 text-[#fbb03b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                      studentaffairs@vmls.edu.in
                    </div>
                    <div className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors justify-center lg:justify-start">
                      <svg className="w-4 h-4 text-[#fbb03b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                      +91 7358201234
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Bio Text */}
              <div className="lg:w-[65%] p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6 text-justify">
                  <p className="font-inter text-base md:text-lg text-white/90 leading-relaxed italic">
                    "Dr. Shenbagavalli, Associate Dean of Student Affairs, VMLS works passionately to ensure every student feels at home at VMLS, balancing academic growth with personal well-being and extracurricular engagement."
                  </p>
                  <p className="font-inter text-sm md:text-base text-white/70 leading-relaxed">
                    With over 26 years of rich academic and professional experience, she brings a wealth of knowledge to support student development, fostering an environment where every individual is empowered to thrive both academically and socially.
                  </p>
                  <div className="pt-4 flex gap-4">
                    <Link href="/faculty/shenbagavalli" className="px-8 py-3 bg-white text-[#800000] font-bold text-[10px] uppercase tracking-widest rounded-none hover:bg-[#fbb03b] hover:text-black transition-all">
                      View Full Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Spectrum Grid */}
      <section className="py-6 md:py-8 px-[5%] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 h-full md:h-[500px]">
            {/* Clubs */}
            <Link href="/student-clubs" className="flex-1 bg-[#800000] p-8 text-white flex flex-col justify-between group hover:flex-[1.5] transition-all duration-500 overflow-hidden relative cursor-pointer">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 -mb-12 -mr-12 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-6 pb-2 border-b border-white/20">Clubs at VMLS</h3>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#fbb03b] rounded-full"></span> 8 Vibrant Student Clubs</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#fbb03b] rounded-full"></span> Led by 7 Dynamic Convenors</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#fbb03b] rounded-full"></span> Jointly Managed by Faculty & Students</li>
                </ul>
              </div>
              <div className="pt-4">
                <span className="inline-block px-6 py-2 border border-white/30 text-white font-bold text-[10px] uppercase tracking-widest group-hover:bg-white group-hover:text-[#800000] transition-all">
                  Know More
                </span>
              </div>
            </Link>

            {/* Houses */}
            <div className="flex-1 bg-white border border-gray-100 p-8 flex flex-col justify-between group hover:flex-[1.5] transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3m0 2.3L5.8 8.4v7.2L12 18.7l6.2-3.1V8.4L12 5.3z" /></svg>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-100">Houses</h3>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-gray-900 transition-colors">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span> Red, Blue, Green, & Yellow</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Student Run & Managed</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Team Spirit & Healthy Competition</li>
                </ul>
              </div>
              <p className="font-inter text-[10px] leading-relaxed opacity-70">
                Opportunities to engage in academic, cultural, and co-curricular challenges.
              </p>
            </div>

            {/* Support & Counseling */}
            <div className="flex-1 bg-[#006cae] p-8 text-white flex flex-col justify-between group hover:flex-[1.5] transition-all duration-500 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-white/20"></div>
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-6 pb-2 border-b border-white/20">Student Support</h3>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-white/80 group-hover:text-white transition-colors">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> 24/7 Professional Access</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Dedicated Mentor-Mentee Program</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Faculty-led Personal Guidance</li>
                </ul>
              </div>
              <p className="font-inter text-[10px] leading-relaxed opacity-70">
                Supportive environment that fosters emotional well-being and academic success.
              </p>
            </div>

            {/* Anti-Ragging Cell */}
            <Link href="/anti-ragging" className="flex-1 bg-[#fbb03b] p-8 text-[#1a1a1a] flex flex-col justify-between group hover:flex-[1.5] transition-all duration-500 overflow-hidden relative cursor-pointer">
              <div className="absolute top-0 left-0 w-32 h-32 bg-black/5 -mt-12 -ml-12 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-6 pb-2 border-b border-black/10">Anti-Ragging Cell</h3>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/70 group-hover:text-[#1a1a1a] transition-colors">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span> Active Monitoring Cell</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span> Prevention & Quick Redressal</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#800000] rounded-full"></span> Continuous Faculty Oversight</li>
                </ul>
              </div>
              <div className="pt-4">
                <span className="inline-block px-6 py-2 border border-black/20 text-[#1a1a1a] font-bold text-[10px] uppercase tracking-widest group-hover:bg-[#800000] group-hover:text-white transition-all">
                  Know More
                </span>
              </div>
            </Link>

            {/* Student Council */}
            <div className="flex-1 bg-[#c5a676] p-8 text-gray-900 flex flex-col justify-between group hover:flex-[1.5] transition-all duration-500 overflow-hidden relative">
              <div>
                <h3 className="font-playfair text-2xl font-bold mb-6 pb-2 border-b border-black/10">Student Council</h3>
                <ul className="space-y-4 text-xs font-bold uppercase tracking-wider text-black/60 group-hover:text-black transition-colors">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Voice of the Student Body</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Coordinates Flagship Events</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full"></span> Bridges Students & Institution</li>
                </ul>
              </div>
              <p className="font-inter text-[10px] leading-relaxed opacity-70">
                Works with administration on welfare, policy matters, and student-led initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Gallery Section */}
      <section className="py-12 md:py-16 px-[5%] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 italic">Campus Events</h2>
              <p className="font-inter text-gray-600">Bringing the VMLS community together through intellectual and cultural excellence.</p>
            </div>
            <Link href="#" className="hidden md:flex items-center gap-2 text-[#a31f34] font-bold text-xs uppercase tracking-[0.2em] hover:gap-4 transition-all pb-2 border-b-2 border-[#a31f34]/20 hover:border-[#a31f34]">
              View All Events <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Featured Event */}
            <Link href="/news/aarambh-fiesta" className="lg:col-span-7 group cursor-pointer">
              <div className="relative aspect-[4/3] md:aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/studentaff/cultural.webp"
                  alt="Aarambh - The Freshers' Fiesta"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-[#a31f34] text-[10px] font-bold uppercase tracking-widest mb-4">Featured</span>
                  <h3 className="font-playfair text-2xl md:text-4xl font-bold mb-2">Aarambh - The Freshers' Fiesta</h3>
                  <p className="text-sm text-white/70 font-inter">Welcoming the new batch with infinite vibes and unforgettable experiences. Click to view highlights →</p>
                </div>
              </div>
            </Link>

            {/* Side Events */}
            <div className="lg:col-span-5 space-y-8">
              {[
                {
                  title: "VMLS Fest 2025",
                  sub: "Two Days. Infinite Vibes. One Unforgettable Experience.",
                  img: "/images/studentaff/1.webp",
                  href: "/news/vmls-fest-2025"
                },
                {
                  title: "Law School Premier League (LSPL)",
                  sub: "Season 2 Launch - The ultimate sports arena.",
                  img: "/images/studentaff/e2.png",
                  href: "/news/lspl"
                },
                {
                  title: "International Conference on Women & AI",
                  sub: "Students secure prestigious awards for research excellence.",
                  img: "/images/studentaff/e3.png",
                  href: "/news/women-and-ai-conference"
                }
              ].map((event, idx) => (
                <Link href={event.href} key={idx} className="flex gap-6 group/item cursor-pointer">
                  <div className="w-24 md:w-32 h-24 md:h-32 shrink-0 relative rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={event.img}
                      alt={event.title}
                      fill
                      className="object-cover group-hover/item:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 96px, 128px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-playfair text-lg font-bold text-gray-900 mb-1 group-hover/item:text-[#a31f34] transition-colors">{event.title}</h4>
                    <p className="font-inter text-[11px] md:text-xs text-gray-500 leading-relaxed text-justify">{event.sub}</p>
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
