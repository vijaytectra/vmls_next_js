import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo-pages";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata("/student-clubs");



const clubs = [
  {
    name: "Sports Club",
    img: "/images/studentaff/sports.webp",
    desc: "The Sports Club at VMLS is all about action, adrenaline, and team spirit. Whether it’s cricket, football, athletics, or indoor games, the club gives students a chance to stay active, compete, and bond through sports. It plays a major role in organizing inter-house tournaments, fitness challenges, and the Annual Sports Meet. It’s not just about winning — it’s about playing together and growing stronger as a community.",
  },
  {
    name: "Cultural Club",
    img: "/images/studentaff/cultural.webp",
    desc: "From music to dance and theatre to festive celebrations, the Cultural Club is the pulse of VMLS's vibrant student life. It curates some of the most exciting performances and cultural showcases during events like VMLS Fest, Onam, and Diwali. The club is where artistic expression meets celebration, giving students the stage to shine and represent their heritage and creativity.",
  },
  {
    name: "Literary Club",
    img: "/images/studentaff/literary.webp",
    desc: "The Literary Club at VMLS is the voice of reason, wit, and imagination. Students here dive into debates, quizzes, open mics, and creative writing. The club is a space for those who love words — whether it’s delivering a persuasive argument or weaving a poem. It sharpens communication skills and builds confidence to speak, write, and lead with clarity.",
  },
  {
    name: "Movie Club",
    img: "/images/studentaff/movie.webp",
    desc: "Lights, camera, conversation! The Movie Club is where VMLS students explore cinema beyond entertainment. With screenings, post-film discussions, and themed movie nights, the club connects students to storytelling, visual art, and social issues through the lens of film. It’s the perfect club for movie buffs who love to discuss what happens beyond the screen.",
  },
  {
    name: "Fine Arts Club",
    img: "/images/studentaff/fine-arts.webp",
    desc: "The Fine Arts Club is where imagination finds form — be it through painting, sketching, doodling, or installations. From decorating for campus events to hosting art exhibitions and workshops, the club allows students to express themselves visually and bring life to the walls and spaces of VMLS. It’s a community of artists who use color, shape, and style to speak louder than words.",
  },
  {
    name: "ADR Club (Alternative Dispute Resolution)",
    img: "/images/studentaff/adr-club.webp",
    desc: "The ADR Club offers students hands-on exposure to negotiation, mediation, and arbitration — key components of modern legal practice. Through mock sessions, guest lectures, and workshops, the club nurtures communication, diplomacy, and solution-oriented thinking. It’s perfect for students passionate about resolving conflicts through dialogue, not dispute.",
  },
  {
    name: "Moot Court Club",
    img: "/images/studentaff/moot.webp",
    desc: "The Moot Court Club is the training ground for VMLS’s future litigators. It provides students with a platform to master legal research, drafting, and courtroom advocacy through simulated court proceedings. From internal selections to national competitions, this club builds confidence and sharpens the legal instincts of aspiring advocates.",
  },
  {
    name: "Social Media Club",
    img: "/images/studentaff/social.webp",
    desc: "The Social Media Club at VMLS is the creative force behind the school’s digital presence. Students capture campus life, create engaging content, and connect the VMLS community online—gaining hands-on experience in storytelling, branding, and digital media.",
  },
  {
    name: "Blood Donor Club",
    img: "/images/studentaff/blood-donor.webp",
    desc: "The Blood Donor Club at VMLS encourages the spirit of giving back to society. The club organizes regular blood donation camps and raises awareness about the importance of blood donation, saving lives and fostering a strong sense of community service.",
  },
];

export default function StudentClubsPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <PageSchema path="/student-clubs" />
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium flex-wrap">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/student-affairs" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Student Affairs
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Clubs at VMLS</span>
        </div>
      </nav>

      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[400px]">
          <div className="lg:w-[45%] p-6 sm:p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Clubs at Vinayaka Mission&apos;s Law School{" "}
              <span className="text-[#fbb03b]">(VMLS)</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-left">
              Student life at VMLS is vibrant, diverse, and engaging — shaped largely by the active participation of students in various clubs.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[200px] sm:min-h-[240px] lg:min-h-[300px]">
            <Image
              src="/images/studentaff/club1.webp"
              alt="VMLS Student Clubs"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto mb-12">
          <p className="font-inter text-gray-700 leading-relaxed text-base md:text-lg text-left">
            These clubs serve as dynamic platforms for co-curricular and extra-curricular development, promoting teamwork, leadership, creativity, and advocacy. With seven student convenors leading the way, the clubs are student-driven and faculty-supported, ensuring a balanced environment of guidance and autonomy. Whether you&apos;re inclined towards performing arts, intellectual debates, film appreciation, or legal simulation, there&apos;s something for everyone at VMLS.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {clubs.map((club) => (
            <article key={club.name} className="group">
              <div className="relative aspect-[16/10] overflow-hidden mb-6 shadow-md">
                <Image
                  src={club.img}
                  alt={club.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h2 className="font-playfair text-2xl font-bold text-[#800000] mb-3">{club.name}</h2>
              <p className="font-inter text-sm md:text-base text-gray-700 leading-relaxed text-left">{club.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
