import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Student Affairs | VMLS",
  description:
    "The Office of Student Affairs at Vinayaka Mission's Law School fosters a vibrant, inclusive campus through clubs, houses, counselling, and student support.",
};

const events = [
  {
    title: "VMLS Fest 2025",
    sub: "Two Days. Infinite Vibes. One Unforgettable Experience.",
    img: "/images/studentaff/live/fest.webp",
    href: "/news/vmls-fest-2025",
  },
  {
    title: "Law School Premier League (LSPL) – Season 2 Launch",
    sub: "Where law meets football and unity scores big.",
    img: "/images/studentaff/live/lspl.jpeg",
    href: "/news/lspl",
  },
  {
    title: "Students Secures Award at the International Conference on Women and AI",
    sub: "Recognition for research excellence at the International Conference on Women and AI.",
    img: "/images/studentaff/live/women-ai.webp",
    href: "/news/women-and-ai-conference",
  },
];

export default function StudentAffairsPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Student Affairs</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-0 lg:min-h-[450px]">
          <div className="lg:w-[45%] p-6 sm:p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-white/30" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Campus Life</span>
            </div>
            <h1 className="font-playfair text-[1.75rem] sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight whitespace-nowrap">
              Student <span className="text-[#fbb03b]">Affairs</span>
            </h1>
            <p className="font-inter text-base sm:text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-left !text-left [word-spacing:normal]">
              Law school is more than just books and briefs - it&apos;s about building the future together.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[200px] sm:min-h-[240px] lg:min-h-[300px]">
            <Image
              src="/images/studentaff/live/header.webp"
              alt="Student Affairs at VMLS"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-8 md:py-12 px-[5%] bg-white text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-playfair text-2xl md:text-4xl text-gray-900 leading-tight mb-8">
            Law school is more than just books and briefs - it&apos;s about{" "}
            <span className="text-[#a31f34] italic font-bold text-3xl md:text-5xl block mt-2">
              building the future together.
            </span>
          </h2>
          <p className="font-inter text-gray-600 leading-relaxed max-w-4xl mx-auto text-sm md:text-base">
            The Office of Student Affairs (OSA) at VMLS is dedicated to fostering a vibrant, inclusive, and enriching environment for our students. Beyond academic excellence, OSA offers opportunities for personal and professional growth through a wide range of extracurricular activities, clubs, and events. We aim to cultivate well-rounded individuals, empowering students to explore their passions, collaborate with peers, and develop leadership skills. By organizing events that encourage networking, learning, and collaboration, OSA helps students navigate the challenges of law school while making lasting memories. Our mission is to support, guide, and enhance every student&apos;s holistic journey.
          </p>
        </div>
      </section>

      {/* Go-to resource */}
      <section className="py-6 md:py-10 px-[5%] bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative aspect-video rounded-xl overflow-hidden shadow-2xl group">
            <Image
              src="/images/studentaff/live/office.png"
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
            <p className="font-inter text-gray-600 leading-relaxed text-sm md:text-base">
              The Student Affairs Office is your go-to resource for guidance, support, and opportunities throughout your time at VMLS. Whether you need help adjusting to campus life, seeking personal or academic counseling, or looking to get involved in student activities, our doors are always open. We coordinate a variety of student clubs and events that cater to diverse interests, helping you build leadership skills, pursue your passions, and form lasting friendships. Our mission is to foster an inclusive community where every student is empowered to thrive both academically and socially. We encourage you to explore our student clubs, participate in events, and make the most of your law school experience.
            </p>
          </div>
        </div>
      </section>

      {/* Dean profile */}
      <section className="py-8 md:py-10 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#800000] rounded-none md:rounded-2xl shadow-[0_30px_60px_-15px_rgba(128,0,0,0.3)] text-white overflow-hidden relative group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-all duration-700" />

            <div className="relative z-10 flex flex-col lg:flex-row items-stretch">
              <div className="lg:w-[40%] xl:w-[35%] p-8 lg:p-10 xl:p-12 border-b lg:border-b-0 lg:border-r border-white/10 bg-black/10">
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#fbb03b]/30 mb-6 overflow-hidden bg-gray-200">
                    <Image
                      src="/images/studentaff/live/fowmina.webp"
                      alt="Dr. Fowmina"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                  </div>
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-1">Dr. Fowmina</h3>
                  <p className="text-[#fbb03b] font-bold text-xs uppercase tracking-widest mb-6">
                    Associate Dean of Student Affairs
                  </p>

                  <div className="space-y-3 w-full">
                    <a
                      href="mailto:studentaffairs@vmls.edu.in"
                      className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors justify-center lg:justify-start"
                    >
                      <svg className="w-4 h-4 text-[#fbb03b] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>studentaffairs@vmls.edu.in</span>
                    </a>
                    <a
                      href="tel:+917358201234"
                      className="flex items-center gap-3 text-sm text-white/80 hover:text-white transition-colors justify-center lg:justify-start"
                    >
                      <svg className="w-4 h-4 text-[#fbb03b] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>+91 7358201234</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:w-[60%] xl:w-[65%] p-8 md:p-12 flex flex-col justify-center">
                <div className="space-y-6 text-left">
                  <p className="font-inter text-base md:text-lg text-white/90 leading-relaxed">
                    Dr. Fowmina, Associate Dean of Student Affairs, VMLS works passionately to ensure every student feels at home at VMLS, balancing academic growth with personal well-being and extracurricular engagement. Dr. Fowmina. C holds a distinguished academic record, including a PhD in International Humanitarian Law from Vellore Institute of Technology, Chennai. Additionally, she possesses an LL.M degree in International Law, an M.A in Human Rights from the Indian Institute of Human Rights in New Delhi, and a degree in Criminal Justice from the University of East London. Her academic journey also includes a B.A.LLB from Bishop Cotton Women&apos;s Christian College, Bangalore.
                  </p>
                  <div className="pt-4">
                    <Link
                      href="/faculty/c-fowmina"
                      className="inline-block px-8 py-3 bg-white text-[#800000] font-bold text-[10px] uppercase tracking-widest hover:bg-[#fbb03b] hover:text-black transition-all"
                    >
                      View Full Profile
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid — 5 cards in one row on large screens */}
      <section className="py-6 md:py-10 px-[5%] bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 xl:gap-4 text-left">
          {/* Clubs */}
          <Link
            href="/student-clubs"
            className="bg-[#800000] p-5 sm:p-4 xl:p-5 text-white flex flex-col justify-between min-h-0 sm:min-h-[340px] lg:min-h-[380px] xl:min-h-[420px] group relative overflow-hidden text-left"
          >
            <div className="text-left">
              <h3 className="font-playfair text-lg xl:text-xl font-bold mb-4 pb-2 border-b border-white/20 text-left">Clubs at VMLS</h3>
              <ul className="space-y-3 text-[11px] xl:text-xs font-medium text-white/85 text-left">
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-[#fbb03b] rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">8 Vibrant Student Clubs</span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-[#fbb03b] rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Led by 7 Dynamic Student Convenors</span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-[#fbb03b] rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Jointly Managed by Faculty and Students</span>
                </li>
              </ul>
              <p className="mt-4 font-inter text-[11px] xl:text-xs text-white/80 leading-relaxed text-left">
                A vibrant platform to explore interests, develop skills, and lead with creativity
              </p>
            </div>
            <span className="mt-6 inline-block self-start px-4 py-2 border border-white/30 text-white font-bold text-[9px] uppercase tracking-widest group-hover:bg-white group-hover:text-[#800000] transition-all">
              Read More
            </span>
          </Link>

          {/* Houses */}
          <div className="bg-[#F5F5F5] p-4 xl:p-5 text-gray-900 flex flex-col justify-between min-h-[380px] xl:min-h-[420px] border border-gray-100 text-left">
            <div className="text-left">
              <h3 className="font-playfair text-lg xl:text-xl font-bold mb-4 pb-2 border-b border-gray-200 text-left">Houses</h3>
              <ul className="space-y-3 text-[11px] xl:text-xs font-medium text-gray-600 text-left">
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">4 Distinct Houses: Red, Blue, Green, and Yellow</span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Student Run &amp; Managed Houses</span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Promotes team spirit &amp; healthy competition</span>
                </li>
              </ul>
              <p className="mt-4 font-inter text-[11px] xl:text-xs text-gray-600 leading-relaxed text-left">
                Opportunities to engage in academic, cultural, and co-curricular challenges
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-gray-200 text-left">
              <p className="font-playfair text-sm font-bold text-gray-900 mb-2 leading-snug text-left">
                Contact: Dr. Fowmina, Associate Dean – Student Affairs
              </p>
              <a href="mailto:ad.sa@vmls.edu.in" className="block text-[11px] xl:text-xs text-[#800000] font-semibold hover:text-[#a31f34] break-all text-left">
                ad.sa@vmls.edu.in
              </a>
              <a href="tel:+918925934394" className="block text-[11px] xl:text-xs text-gray-700 mt-1 hover:text-[#800000] text-left">
                +91 89259 34394
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="bg-[#006cae] p-5 sm:p-6 xl:p-5 text-white flex flex-col justify-between min-h-0 md:min-h-[380px] xl:min-h-[420px] text-left">
            <div className="text-left">
              <h3 className="font-playfair text-lg xl:text-xl font-bold mb-3 sm:mb-4 pb-2 border-b border-white/20 leading-snug text-left">
                Student Support &amp; Counselling
              </h3>
              <ul className="space-y-2.5 sm:space-y-3 text-xs xl:text-xs font-medium text-white/85 text-left">
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">24/7 Access to Professional Counsellors</span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">A dedicated Mentor-Mentee Program—each student is personally guided by a faculty mentor</span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Supportive environment that fosters emotional well-being and academic success</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 md:mt-6 pt-3.5 md:pt-4 border-t border-white/20 text-left">
              <p className="font-playfair text-sm font-bold mb-1 md:mb-2 leading-snug text-left">Counselling Support Contact: Dr. Saranya</p>
              <a href="tel:+919500049969" className="text-xs xl:text-xs text-white/90 hover:text-white text-left">
                +91 95000 49969
              </a>
            </div>
          </div>

          {/* Anti-Ragging */}
          <Link
            href="/anti-ragging-squad"
            className="bg-[#fbb03b] p-5 sm:p-6 xl:p-5 text-[#1a1a1a] flex flex-col justify-between min-h-0 md:min-h-[380px] xl:min-h-[420px] group text-left"
          >
            <div className="text-left">
              <h3 className="font-playfair text-lg xl:text-xl font-bold mb-3 sm:mb-4 pb-2 border-b border-black/10 text-left">Anti-Ragging Cell</h3>
              <ul className="space-y-2.5 sm:space-y-3 text-xs xl:text-xs font-medium text-[#1a1a1a]/75 text-left">
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Active Anti-Ragging Cell in place for prevention and quick redressal</span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Faculty-led Monitoring Teams ensure continuous oversight</span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-[#800000] rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Commitment to fostering a safe, inclusive, and respectful campus for all students</span>
                </li>
              </ul>
            </div>
            <span className="mt-4 md:mt-6 inline-block self-start px-4 py-2 border border-black/20 font-bold text-[9px] uppercase tracking-widest group-hover:bg-[#800000] group-hover:text-white transition-all">
              Read More
            </span>
          </Link>

          {/* Student Council */}
          <div className="bg-[#E2C88B] p-5 sm:p-6 xl:p-5 text-gray-900 flex flex-col justify-between min-h-0 md:min-h-[380px] xl:min-h-[420px] text-left">
            <div className="text-left">
              <h3 className="font-playfair text-lg xl:text-xl font-bold mb-3 sm:mb-4 pb-2 border-b border-black/10 text-left">Student Council</h3>
              <ul className="space-y-2.5 sm:space-y-3 text-xs xl:text-xs font-medium text-black/70 text-left">
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Represents the voice of the student body</span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Coordinates events and student-led initiatives</span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Works with administration on welfare and policy matters</span>
                </li>
                <li className="flex items-start gap-2 text-left">
                  <span className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
                  <span className="min-w-0 flex-1 text-left">Bridges communication between students and the institution</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-12 md:py-16 px-[5%] bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">Events</h2>
            <p className="font-inter text-gray-600 max-w-2xl">
              Highlighting campus life through flagship festivals, sports, and academic achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <Link href="/news/aarambh-fiesta" className="lg:col-span-7 group cursor-pointer">
              <div className="relative aspect-[4/3] md:aspect-[16/10] bg-gray-100 overflow-hidden shadow-xl">
                <Image
                  src="/images/events/fiesta/thumbnail.webp"
                  alt="Aarambh - The Freshers' Fiesta"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
                  <h3 className="font-playfair text-2xl md:text-4xl font-bold">Aarambh - The Freshers&apos; Fiesta</h3>
                </div>
              </div>
            </Link>

            <div className="lg:col-span-5 space-y-8">
              {events.map((event) => (
                <Link href={event.href} key={event.href} className="flex gap-6 group/item cursor-pointer">
                  <div className="w-24 md:w-32 h-24 md:h-32 shrink-0 relative overflow-hidden shadow-md">
                    <Image
                      src={event.img}
                      alt={event.title}
                      fill
                      className="object-cover group-hover/item:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 96px, 128px"
                    />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h4 className="font-playfair text-lg font-bold text-gray-900 mb-1 group-hover/item:text-[#a31f34] transition-colors">
                      {event.title}
                    </h4>
                    <p className="font-inter text-[11px] md:text-xs text-gray-500 leading-relaxed">{event.sub}</p>
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
