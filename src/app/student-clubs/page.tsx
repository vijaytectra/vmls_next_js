import Image from 'next/image';
import Link from 'next/link';

export default function StudentClubsPage() {
  const clubs = [
    { name: "Moot Court Society", img: "/images/studentaff/moot.webp", desc: "The pillar of legal advocacy at VMLS, training students for national and international competitions." },
    { name: "ADR Club", img: "/images/studentaff/adr-club.webp", desc: "Fostering skills in negotiation, mediation, and arbitration—the future of legal dispute resolution." },
    { name: "Literary Club", img: "/images/studentaff/literary.webp", desc: "A sanctuary for writers, poets, and debaters to express their creative and intellectual voice." },
    { name: "Cultural Club", img: "/images/studentaff/cultural.webp", desc: "Celebrating diversity through dance, music, and flagship campus festivals like Aarambh." },
    { name: "Sports Club", img: "/images/studentaff/sports.webp", desc: "Promoting physical excellence and team spirit through the Law School Premier League (LSPL)." },
    { name: "Fine Arts Club", img: "/images/studentaff/fine-arts.webp", desc: "Empowering visual artists to showcase their creativity through painting, sculpture, and design." },
    { name: "Movie Club", img: "/images/studentaff/movie.webp", desc: "Critically analyzing legal and social themes through the lens of world cinema." },
    { name: "Social Welfare Club", img: "/images/studentaff/social.webp", desc: "Engaging in community service and legal aid initiatives to drive social impact." }
  ];

  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/student-affairs" className="text-gray-500 hover:text-[#a31f34] transition-colors">Student Affairs</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Student Clubs</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[400px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Student <br /><span className="text-[#fbb03b]">Clubs & Societies</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-justify">
              At VMLS, student-led clubs are the heartbeat of campus life. These platforms empower students to explore their passions beyond the curriculum, develop leadership skills, and build a lasting legacy.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/studentaff/club1.webp"
              alt="VMLS Student Clubs"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        </div>
      </section>

      {/* Clubs Grid Section */}
      <section className="py-12 md:py-20 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clubs.map((club, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-6 shadow-md transition-shadow hover:shadow-xl">
                  <Image
                    src={club.img}
                    alt={club.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#a31f34] transition-colors">{club.name}</h3>
                <p className="font-inter text-sm text-gray-600 leading-relaxed text-justify mb-4">
                  {club.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Info Section */}
      <section className="py-16 md:py-20 px-[5%] bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-6 font-bold">How to Get Involved?</h2>
          <p className="font-inter text-gray-600 mb-10 leading-relaxed">
            All students are encouraged to join at least one club during their time at VMLS. Membership registrations open at the beginning of each academic semester.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h4 className="font-playfair text-xl font-bold mb-2">Registration</h4>
              <p className="text-xs text-gray-500 font-inter">Forms are available at the OSA hub.</p>
            </div>
            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h4 className="font-playfair text-xl font-bold mb-2">Auditions</h4>
              <p className="text-xs text-gray-500 font-inter">Required for performing arts & mooting.</p>
            </div>
            <div className="bg-white p-6 shadow-sm border border-gray-100">
              <h4 className="font-playfair text-xl font-bold mb-2">Legacy</h4>
              <p className="text-xs text-gray-500 font-inter">Start your own club if it doesn't exist.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
