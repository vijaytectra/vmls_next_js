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
    image: "/images/mentor.webp",
    href: "/dean"
  },
  {
    name: "Chesha P. Chellappan",
    role: "Assistant Dean - Ranking and Accreditation, Chief Superintendent - Exam Cell.",
    qualifications: "LL. M IPR & Public Law, Kerala University",
    image: "/images/faculty/02.webp",
    href: "/faculty/chesha-p-chellappan"
  },
  {
    name: "Edhaya Chandran",
    role: "Assistant Dean - Outreach & Communications",
    qualifications: "M.A. Political Science (Political Science)",
    image: "/images/faculty/09.webp",
    href: "/faculty/edhaya-chandran"
  },
  {
    name: "Dr. Gnana Sanga Mithra. S",
    role: "Associate Dean - Research (Interdisciplinary)",
    qualifications: "M.A - Loyola College, Ph.D - VIT, Chennai",
    image: "/images/faculty/05.webp",
    href: "/faculty/gnana-sanga-mithra"
  },
  {
    name: "Dr. Krishna Kishore Padala",
    role: "Head - Exam Cell, VMLS, Co-ordinator - Legal Aid Clinic, VMLS.",
    qualifications: "LL.M & Ph.D (Labour, Capital and Industrial Laws) - Andhra University",
    image: "/images/faculty/03.webp",
    href: "/faculty/krishna-kishore-padala"
  },
  {
    name: "Sinjini Sen",
    role: "Assistant Professor",
    qualifications: "LL.M (Intellectual property rights and Business law) National Law Institute University, Bhopal.",
    image: "/images/faculty/12.webp",
    href: "/faculty/sinjini-sen"
  },
  {
    name: "Nabeela Siddiqui",
    role: "Assistant Professor",
    qualifications: "M.L. / LL.M (Constitutional Law and Public Order), University of Madras",
    image: "/images/faculty/14.webp",
    href: "/faculty/nabeela-siddiqui"
  },
  {
    name: "Dr. Shenbagavalli",
    role: "Associate Dean, Student Affairs",
    qualifications: "MBM - Alagappa University / Ph.D - SRM University Chennai",
    image: "/images/faculty/38.jpeg",
    href: "/faculty/shenbagavalli"
  },
  {
    name: "Winfred Chelliah",
    role: "Associate Dean- Campus Affairs",
    qualifications: "M.A. English Literature",
    image: "/images/faculty/39.webp",
    href: "/faculty/winfred-chelliah"
  },
  {
    name: "Najeed Naved Siddiqui",
    role: "Assistant Professor",
    qualifications: "LLM (Constitutional Law) - National Law University Odisha",
    image: "/images/faculty/40.webp",
    href: "/faculty/najeed-naved-siddiqui"
  },
  {
    name: "Sowmiya Narayan Rajagopalan",
    role: "Assistant Dean PG Academics",
    qualifications: "MSc Law and Finance (Trinity College Dublin)",
    image: "/images/faculty/41.webp",
    href: "/faculty/sowmiya-narayan-rajagopalan"
  },
  {
    name: "Ashwani Kumar Singh",
    role: "Assistant Professor",
    qualifications: "LLM Public Law, University College London (UCL)",
    image: "/images/faculty/42.webp",
    href: "/faculty/ashwani-kumar-singh"
  },
  {
    name: "Dr. Abhinaya Ramesh",
    role: "Assistant Professor (Senior Grade)",
    qualifications: "Ph.D - SASTRA Deemed to be University",
    image: "/images/faculty/43.webp",
    href: "/faculty/abhinaya-ramesh"
  },
  {
    name: "Srinivas Raman",
    role: "Assistant Dean Academic Affairs UG",
    qualifications: "LL.M (European Master in Law and Economics)- Universität Hamburg and LUMSA, Rome",
    image: "/images/faculty/44.webp",
    href: "/faculty/srinivas-raman"
  },
  {
    name: "Dr. S. Suganya",
    role: "Associate Professor",
    qualifications: "PhD in Law (IPR) from VIT School of Law, Chennai",
    image: "/images/faculty/45.jpeg",
    href: "/faculty/s-suganya"
  },
  {
    name: "Dr. Fowmina",
    role: "Associate Dean (Inclusive Initiatives), Director, Centre for Access to Justice.",
    qualifications: "LLM - University of East London Uk, PhD - Vit Chennai",
    image: "/images/faculty/19.webp",
    href: "/faculty/fowmina"
  },
  {
    name: "Shubham Shukla",
    role: "Assistant Dean PG Academics",
    qualifications: "LL.M. (Corporate and Commercial Laws) Maharashtra National Law University, Mumbai",
    image: "/images/faculty/46.webp",
    href: "/faculty/shubham-shukla"
  },
  {
    name: "Mike Ruban",
    role: "Assistant Dean Academic Affairs UG",
    qualifications: "LLM ILO in The Tamil Nadu Dr Ambedkar Law University",
    image: "/images/faculty/47.webp",
    href: "/faculty/mike-ruban"
  },
  {
    name: "Tathagat Sharma",
    role: "Assistant Dean PG Academics",
    qualifications: "LL.M. (South Asian University)",
    image: "/images/faculty/48.webp",
    href: "/faculty/tathagat-sharma"
  },
  {
    name: "Narayanan Chandrasekar",
    role: "Assistant Dean - Placement Training",
    qualifications: "LL.M ITL Jindal Global University",
    image: "/images/faculty/49.webp",
    href: "/faculty/narayanan-chandrasekar"
  },
  {
    name: "Dr. Alisha Verma",
    role: "Associate Professor",
    qualifications: "Ph.D. from Amity University, Rajasthan",
    image: "/images/faculty/alisha.jpeg",
    href: "/faculty/alisha-verma"
  },
  {
    name: "Hartej Singh",
    role: "Assistant Professor",
    qualifications: "LLM(Corporate Law) National Law University, Jodhpur",
    image: "/images/faculty/hartej.webp",
    href: "/faculty/hartej-singh"
  },
  {
    name: "Abhinandita Biswas",
    role: "Assistant Professor",
    qualifications: "LLM (International Trade & Investment Law), O.P. Jindal Global University.",
    image: "/images/faculty/Abhinandita.webp",
    href: "/faculty/abhinandita-biswas"
  },
  {
    name: "Kamala Priyadarshini",
    role: "Assistant Professor",
    qualifications: "L.L.M., Air and Space laws, McGill University Canada",
    image: "/images/faculty/kamala.webp",
    href: "/faculty/kamala-priyadarshini"
  },
  {
    name: "Dr. Gaurav Shukla",
    role: "Associate Dean - Research (Law)",
    qualifications: "PhD in Juridical Science (International Taxation) from Chanakya National Law University, Patna.",
    image: "/images/faculty/gaurav.webp",
    href: "/faculty/gaurav-shukla"
  },
  {
    name: "Stalin Harikaran N",
    role: "Assistant Professor",
    qualifications: "LL.M in Maritime Law from Tamil Nadu Dr. Ambedkar Law University",
    image: "/images/faculty/Stalin Harikaran N.jpeg",
    href: "/faculty/stalin-harikaran-n"
  },
  {
    name: "Dr. Jacob Joseph",
    role: "Professor of Law",
    qualifications: "Ph.D. in Environmental Law from School of Legal Studies, Cochin University of Science and Technology, Kochi",
    image: "/images/faculty/Dr. Jacob Joseph_Photo.jpeg",
    href: "/faculty/jacob-joseph"
  },
  {
    name: "Abraham.S",
    role: "Assistant Professor",
    qualifications: "LL.M, School of Excellence in Law, Tamil Nadu Dr. Ambedkar Law University",
    image: "/images/faculty/Abraham.jpeg",
    href: "/faculty/abraham-s"
  },
  {
    name: "Dr Shabin O S",
    role: "Assistant Professor (Criminology)",
    qualifications: "PhD from University of Madras",
    image: "/images/faculty/Dr_Shabin.jpeg",
    href: "/faculty/shabin-o-s"
  },
  {
    name: "Dr. Yazhini A",
    role: "Assistant Professor",
    qualifications: "Ph.D. in Agricultural Economics from Tamil Nadu Agricultural University",
    image: "/images/faculty/Dr. Yazhini A.jpeg",
    href: "/faculty/yazhini-a"
  },
  {
    name: "Aarthy Jonathan Kennedy",
    role: "Assistant Dean - Partnerships & Student Engagement",
    qualifications: "LL.M in Constitutional Law & Human Rights from School of Excellence",
    image: "/images/faculty/aarthy.webp",
    href: "/faculty/aarthy-jonathan-kennedy"
  },
  {
    name: "Dr. Muthuvelu",
    role: "Professor & Director of Global Tamil Law Center",
    qualifications: "Ph.D. in Legal Tamil - University of Madras",
    image: "/images/faculty/muthuvel.webp",
    href: "/faculty/muthuvelu"
  },
  {
    name: "Dr. Arun D Raj",
    role: "Associate Professor",
    qualifications: "Ph.D - University of Kerala - LL.M in Taxation Laws from Calicut",
    image: "/images/faculty/arun.webp",
    href: "/faculty/arun-d-raj"
  },
  {
    name: "Dr. Sachinkumar P.P.",
    role: "Assistant Professor",
    qualifications: "Ph.D. - IIT Kharagpur - LL.M. in Commercial and Environmental Law",
    image: "/images/faculty/sachin.jpeg",
    href: "/faculty/sachinkumar-p-p"
  },
  {
    name: "Avni Singh Solanki",
    role: "Assistant Professor",
    qualifications: "LL.M. in Business Law from ILS Law College, Pune",
    image: "/images/faculty/avni.jpeg",
    href: "/faculty/avni-singh-solanki"
  },
  {
    name: "Kush Tanvani",
    role: "Assistant Professor",
    qualifications: "LL.M in Human Rights Law from the University of Nottingham",
    image: "/images/faculty/Kush Tanvani.webp",
    href: "/faculty/kush-tanvani"
  },
  {
    name: "Akshara Nair",
    role: "Assistant Professor",
    qualifications: "LL.M in International Law and Development from VIT School of Law, Chennai.",
    image: "/images/faculty/Akshara Nair.jpeg",
    href: "/faculty/akshara-nair"
  },
  {
    name: "Dr. Anuttama Ghose",
    role: "Associate Professor",
    qualifications: "Ph.D. from School of Law & Justice, Adamas University, Kolkata",
    image: "/images/faculty/Anuttama.jpeg",
    href: "/faculty/anuttama-ghose"
  },
  {
    name: "S. M. Aamir Ali",
    role: "Assistant Professor (Senior Grade)",
    qualifications: "LL.M. in Human Rights Law from the National Law School of India University (NLSIU), Bengaluru",
    image: "/images/faculty/Aamir.jpeg",
    href: "/faculty/aamir-ali"
  }
];

export default function FacultyGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-10">
      {facultyData.map((member, index) => {
        const CardContent = (
          <div className="flex flex-col items-center bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-md md:shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group h-full">
            {/* Photo Container */}
            <div className="w-full aspect-[4/5] relative p-2 md:p-4">
              <div className="relative w-full h-full overflow-hidden rounded-lg md:rounded-xl">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </div>

            {/* Details */}
            <div className="px-3 pb-5 md:px-5 md:pb-8 text-center flex flex-col items-center flex-1">
              <h3 className="font-playfair text-sm md:text-lg font-bold text-[#1a1a1a] mb-1 md:mb-2 leading-tight min-h-[2.5rem] md:min-h-[3rem] flex items-center justify-center">
                {member.name}
              </h3>
              <p className="font-inter text-[10px] md:text-xs font-bold text-[#a31f34] uppercase tracking-wider mb-2 leading-snug min-h-[2rem] md:min-h-[2.5rem] flex items-center justify-center">
                {member.role}
              </p>
              {member.qualifications && (
                <p className="font-inter text-[10px] md:text-[11px] text-gray-500 leading-relaxed max-w-[95%] border-t border-gray-100 pt-2 line-clamp-2 md:line-clamp-none">
                  {member.qualifications}
                </p>
              )}
            </div>
          </div>
        );

        return member.href ? (
          <Link key={index} href={member.href} className="block cursor-pointer">
            {CardContent}
          </Link>
        ) : (
          <div key={index}>{CardContent}</div>
        );
      })}
    </div>
  );
}
