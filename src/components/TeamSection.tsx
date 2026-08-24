import Image from "next/image";
import Link from "next/link";
import { noOrphanText } from "@/lib/noOrphanText";

const teamMembers = [
  {
    name: "Ms. Merlin Stephen",
    role: "Deputy Director of Admission",
    qualifications: "M.Com. | PGDBM from Stansfield School of Business, Singapore",
    image: "/images/faculty/live/DSC00390_5.webp",
    slug: "merlin-stephen"
  },
  {
    name: "Mr. Victor",
    role: "Director- Administration",
    qualifications: "30+ years of experience in managing institutional operations",
    image: "/images/faculty/live/DSC00648_14.webp",
    slug: "victor"
  },
  {
    name: "Luke Jackson",
    role: "HR Manager",
    qualifications: "B.Com from Madras Christian College | MBA from Madras University",
    image: "/images/faculty/live/luke-live.webp",
    slug: "luke-jackson"
  },
  {
    name: "Ms. R. Sneha",
    role: "Senior Assistant Librarian",
    qualifications: "UGC NET in Library and Information Science",
    image: "/images/faculty/live/r-sneha-live.jpeg",
    slug: "r-sneha"
  }
];

export default function TeamSection() {
  return (
    <section className="pt-0 pb-12 sm:pb-16 md:pb-24 px-[5%] bg-gray-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-8 sm:mb-12">
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-2 flex items-center gap-2">
            Team<span className="text-[#800000]">@VMLS</span>
          </h2>
          <div className="w-16 h-1 bg-[#800000]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-4 md:gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <Link 
              key={index} 
              href={`/faculty/${member.slug}`}
              className="flex flex-col items-center bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-md md:shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full"
            >
              {/* Photo Container */}
              <div className="w-full aspect-[4/5] relative p-2 md:p-4">
                <div className="relative w-full h-full overflow-hidden rounded-lg md:rounded-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                </div>
              </div>

              {/* Details */}
              <div className="person-card-details px-3 pb-5 md:px-5 md:pb-7 flex-1">
                <h3 className="person-card-name font-playfair text-sm md:text-xl font-bold text-[#1a1a1a] text-center">
                  {member.name}
                </h3>
                <p className="person-card-role text-center font-inter text-[11px] md:text-[13px] font-semibold text-[#a31f34] leading-snug normal-case !tracking-normal mt-0.5 px-0.5 text-pretty">
                  {noOrphanText(member.role)}
                </p>
                
                {member.qualifications && (
                  <p className="font-inter text-[10px] md:text-[11px] text-gray-500 leading-snug tracking-normal max-w-[95%] border-t border-gray-100 pt-1.5 mt-1.5 text-center whitespace-pre-line text-pretty [word-spacing:normal] [letter-spacing:normal] line-clamp-2 md:line-clamp-none">
                    {noOrphanText(member.qualifications)}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
