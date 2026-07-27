"use client";

import Image from "next/image";

import Link from "next/link";

interface FacultyMember {
  name: string;
  role: string;
  qualifications?: string;
  image: string;
  href?: string;
}

const facultyData: FacultyMember[] = [
  {
    name: "Mr. Siddharth Raja",
    role: "Executive Dean",
    image: "/images/faculty/live/DSC00716_19.webp",
    href: "/dean",
  },
  {
    name: "Chesha P. Chellappan",
    role: "Assistant Dean - Ranking and Accreditation, Chief Superintendent - Exam Cell.",
    qualifications: "LL. M IPR & Public Law, Kerala University",
    image: "/images/faculty/live/DSC00387_8.webp",
    href: "/faculty/chesha-p-chellappan",
  },
  {
    name: "Edhaya Chandran",
    role: "Assistant Dean - Outreach & Communications",
    qualifications: "M.A. Political Science (Political Science)",
    image: "/images/faculty/live/DSC00440_2.webp",
    href: "/faculty/edhaya-chandran",
  },
  {
    name: "Dr. Gnana Sanga Mithra. S",
    role: "Associate Dean - Research (Interdisciplinary)",
    qualifications: "M.A - Loyola College, Ph.D - VIT, Chennai",
    image: "/images/faculty/live/DSC00631_32.webp",
    href: "/faculty/gnana-sanga-mithra",
  },
  {
    name: "Dr. Krishna Kishore Padala",
    role: "Head - Exam Cell, VMLS, Co-ordinator - Legal Aid Clinic, VMLS.",
    qualifications: "LL.M & Ph.D (Labour, Capital and Industrial Laws) - Andhra University",
    image: "/images/faculty/live/DSC00395_30.webp",
    href: "/faculty/krishna-kishore-padala",
  },
  {
    name: "Sinjini Sen",
    role: "Assistant Professor",
    qualifications: "LL.M (Intellectual property rights and Business law) National Law Institute University, Bhopal.",
    image: "/images/faculty/live/DSC00473_3.webp",
    href: "/faculty/sinjini-sen",
  },
  {
    name: "Nabeela Siddiqui",
    role: "Assistant Professor",
    qualifications: "M.L. / LL.M (Constitutional Law and Public Order), University of Madras",
    image: "/images/faculty/live/DSC00449_4.webp",
    href: "/faculty/nabeela-siddiqui",
  },
  {
    name: "Dr. Shenbagavalli",
    role: "Associate Dean, Student Affairs",
    qualifications: "MBM - Alagappa University / Ph.D - SRM University Chennai",
    image: "/images/faculty/live/DSC00401_27.webp",
    href: "/faculty/shenbagavalli",
  },
  {
    name: "Winfred Chelliah",
    role: "Associate Dean- Campus Affairs",
    qualifications: "M.A. English Literature",
    image: "/images/faculty/live/DSC00413_13.webp",
    href: "/faculty/winfred-chelliah",
  },
  {
    name: "Dr. Najeed Naved Siddiqui",
    role: "Assistant Professor",
    qualifications: "Ph.D - CHRIST (Deemed to be University), Bengaluru.",
    image: "/images/faculty/live/najeed.webp",
    href: "/faculty/najeed-naved-siddiqui",
  },
  {
    name: "Sowmiya Narayan Rajagopalan",
    role: "Assistant Dean PG Academics",
    qualifications: "MSc Law and Finance (Trinity College Dublin)",
    image: "/images/faculty/live/DSC00475_18.webp",
    href: "/faculty/sowmiya-narayan-rajagopalan",
  },
  {
    name: "Ashwani Kumar Singh",
    role: "Assistant Professor",
    qualifications: "LLM Public Law, University College London (UCL)",
    image: "/images/faculty/live/DSC00695_24.webp",
    href: "/faculty/ashwani-kumar-singh",
  },
  {
    name: "Dr. Abhinaya Ramesh",
    role: "Assistant Professor (Senior Grade)",
    qualifications: "Ph.D - SASTRA Deemed to be University",
    image: "/images/faculty/live/DSC00754.webp",
    href: "/faculty/abhinaya-ramesh",
  },
  {
    name: "Srinivas Raman",
    role: "Assistant Professor",
    qualifications: "LL.M (European Master in Law and Economics)- Universität Hamburg and LUMSA, Rome",
    image: "/images/faculty/live/DSC00804_017.webp",
    href: "/faculty/srinivas-raman",
  },
  {
    name: "Dr. Fowmina",
    role: "Associate Dean (Inclusive Initiatives), Director, Centre for Access to Justice.",
    qualifications: "LLM - University of East London Uk, PhD - Vit Chennai",
    image: "/images/faculty/live/19.webp",
    href: "/faculty/fowmina",
  },
  {
    name: "Shubham Shukla",
    role: "Assistant Dean PG Academics",
    qualifications: "LL.M. (Corporate and Commercial Laws) Maharashtra National Law University, Mumbai",
    image: "/images/faculty/live/DSC00665_20.webp",
    href: "/faculty/shubham-shukla",
  },
  {
    name: "Mike Ruban",
    role: "Assistant Professor",
    qualifications: "LLM ILO in The Tamil Nadu Dr Ambedkar Law University",
    image: "/images/faculty/live/mike.webp",
    href: "/faculty/mike-ruban",
  },
  {
    name: "Narayanan Chandrasekar",
    role: "Assistant Dean – Placement Training",
    qualifications: "LL.M ITL Jindal Global University",
    image: "/images/faculty/live/DSC00539_22.webp",
    href: "/faculty/narayanan-chandrasekar",
  },
  {
    name: "Dr. Alisha Verma",
    role: "Associate Professor",
    qualifications: "Ph.D. from Amity University, Rajasthan",
    image: "/images/faculty/live/DSC00647_35.webp",
    href: "/faculty/alisha-verma",
  },
  {
    name: "Dr. Hartej Singh Kochher",
    role: "Assistant Professor",
    qualifications: "Ph.D- GD Goenka University.",
    image: "/images/faculty/live/hartej.webp",
    href: "/faculty/hartej-singh",
  },
  {
    name: "Abhinandita Biswas",
    role: "Assistant Professor",
    qualifications: "LLM (International Trade & Investment Law), O.P. Jindal Global University.",
    image: "/images/faculty/live/DSC00504_11.webp",
    href: "/faculty/abhinandita-biswas",
  },
  {
    name: "Kamala Priyadarshini",
    role: "Assistant Professor",
    qualifications: "L.L.M., Air and Space laws, McGill University Canada",
    image: "/images/faculty/live/DSC00524_7.webp",
    href: "/faculty/kamala-priyadarshini",
  },
  {
    name: "Dr. Gaurav Shukla",
    role: "Associate Dean - Research (Law)",
    qualifications: "PhD in Juridical Science (International Taxation) from Chanakya National Law University, Patna.",
    image: "/images/faculty/live/DSC00618_33.webp",
    href: "/faculty/gaurav-shukla",
  },
  {
    name: "Aarthy Jonathan Kennedy",
    role: "Assistant Dean - Partnerships & Student Engagement",
    qualifications: "LL.M in Constitutional Law & Human Rights from School of Excellence",
    image: "/images/faculty/live/DSC00643_12.webp",
    href: "/faculty/aarthy-jonathan-kennedy",
  },
  {
    name: "Dr. Muthuvelu",
    role: "Professor & Director of Global Tamil Law Center",
    qualifications: "Ph.D. in Legal Tamil - University of Madras",
    image: "/images/faculty/live/muthuvel.webp",
    href: "/faculty/muthuvelu",
  },
  {
    name: "Dr. Arun D Raj",
    role: "Associate Professor",
    qualifications: "Ph.D - University of Kerala - LL.M in Taxation Laws from Calicut",
    image: "/images/faculty/live/DSC00566_34.webp",
    href: "/faculty/arun-d-raj",
  },
  {
    name: "Dr. Sachinkumar P.P.",
    role: "Assistant Professor",
    qualifications: "Ph.D. - IIT Kharagpur - LL.M. in Commercial and Environmental Law",
    image: "/images/faculty/live/DSC00537_28.webp",
    href: "/faculty/sachinkumar-p-p",
  },
  {
    name: "Avni Singh Solanki",
    role: "Assistant Professor",
    qualifications: "LL.M. in Business Law from ILS Law College, Pune",
    image: "/images/faculty/live/DSC00674_9.webp",
    href: "/faculty/avni-singh-solanki",
  },
  {
    name: "Kush Tanvani",
    role: "Assistant Professor",
    qualifications: "LL.M in Human Rights Law from the University of Nottingham",
    image: "/images/faculty/live/DSC00570_23.webp",
    href: "/faculty/kush-tanvani",
  },
  {
    name: "Akshara Nair",
    role: "Assistant Professor",
    qualifications: "LL.M in International Law and Development from VIT School of Law, Chennai.",
    image: "/images/faculty/live/DSC00586_10.webp",
    href: "/faculty/akshara-nair",
  },
  {
    name: "Stalin Harikaran N",
    role: "Assistant Professor",
    qualifications: "LL.M in Maritime Law from Tamil Nadu Dr. Ambedkar Law University",
    image: "/images/faculty/live/DSC00584_16.webp",
    href: "/faculty/stalin-harikaran-n",
  },
  {
    name: "Dr. Anuttama Ghose",
    role: "Associate Professor",
    qualifications: "Ph.D. from School of Law & Justice, Adamas University, Kolkata",
    image: "/images/faculty/live/Anuttama.jpeg",
    href: "/faculty/anuttama-ghose",
  },
  {
    name: "S. M. Aamir Ali",
    role: "Assistant Professor (Senior Grade)",
    qualifications: "LL.M. in Human Rights Law from the National Law School of India University (NLSIU), Bengaluru",
    image: "/images/faculty/live/DSC00612_21.webp",
    href: "/faculty/aamir-ali",
  },
  {
    name: "Dr. Jacob Joseph",
    role: "Professor of Law",
    qualifications: "Ph.D. in Environmental Law from School of Legal Studies, Cochin University of Science and Technology, Kochi",
    image: "/images/faculty/live/DSC00677_31.webp",
    href: "/faculty/jacob-joseph",
  },
  {
    name: "Abraham.S",
    role: "Assistant Professor",
    qualifications: "LL.M, School of Excellence in Law, Tamil Nadu Dr. Ambedkar Law University",
    image: "/images/faculty/live/DSC00704_25.webp",
    href: "/faculty/abraham-s",
  },
  {
    name: "Dr Shabin O S",
    role: "Assistant Professor (Criminology)",
    qualifications: "PhD from University of Madras",
    image: "/images/faculty/live/DSC00550_36.webp",
    href: "/faculty/shabin-o-s",
  },
  {
    name: "Dr. Yazhini A",
    role: "Assistant Professor",
    qualifications: "Ph.D. in Agricultural Economics from Tamil Nadu Agricultural University",
    image: "/images/faculty/live/DSC00688_26.webp",
    href: "/faculty/yazhini-a",
  },
];

export default function FacultyGrid() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
      {facultyData.map((member, index) => {
        const CardContent = (
          <div className="flex flex-col items-center bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-md md:shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full">
            {/* Photo Container */}
            <div className="w-full aspect-[4/5] relative p-2 md:p-4 shrink-0">
              <div className="relative w-full h-full overflow-hidden rounded-lg md:rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Details — flex-1 keeps every card equal height */}
            <div className="w-full px-3 pb-5 md:px-5 md:pb-7 text-center flex flex-col items-center flex-1">
              <h3 className="font-playfair text-sm md:text-xl font-bold text-[#1a1a1a] mb-0 md:mb-0.5 leading-tight min-h-[2.25rem] md:min-h-[2.75rem] flex items-center justify-center text-center">
                {member.name}
              </h3>
              <p className="font-inter text-[10px] md:text-xs font-bold text-[#a31f34] uppercase tracking-normal mb-0.5 leading-snug min-h-[1.5rem] md:min-h-[1.8rem] flex items-center justify-center text-center">
                {member.role}
              </p>
              {member.qualifications ? (
                <p className="font-inter text-[10px] md:text-[11px] text-gray-500 leading-snug tracking-normal max-w-[95%] border-t border-gray-100 pt-1.5 mt-0.5 text-left md:text-center !text-left md:!text-center [word-spacing:normal] [letter-spacing:normal] line-clamp-2 md:line-clamp-none">
                  {member.qualifications}
                </p>
              ) : (
                <div className="mt-auto" aria-hidden />
              )}
            </div>
          </div>
        );

        return member.href ? (
          <Link key={index} href={member.href} className="block cursor-pointer h-full">
            {CardContent}
          </Link>
        ) : (
          <div key={index} className="h-full">
            {CardContent}
          </div>
        );
      })}
    </div>
  );
}
