import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";

export const metadata = {
  title: "Internal Complaint Committee | VMLS",
  description: "Members and contact details of the Internal Complaint Committee at Vinayaka Mission's Law School.",
};

const committeeData = [
  {
    category: "PRESIDING OFFICER",
    members: [
      {
        no: 1,
        name: "Dr. C. Fowmina",
        designation: "Associate Professor",
        email: "icc@vmls.edu.in",
        phone: "8925934394"
      }
    ]
  },
  {
    category: "MEMBERS (TEACHING)",
    members: [
      {
        no: 2,
        name: "Prof. Abinandita",
        designation: "Assistant Professor",
        email: "abinanditabiswas@vmls.edu.in",
        phone: "7044776351"
      },
      {
        no: 3,
        name: "Prof. Sowmiya",
        designation: "Assistant Professor",
        email: "sowmiyanarayan@vmls.edu.in",
        phone: "9884503578"
      },
      {
        no: 4,
        name: "Prof. Sinjini",
        designation: "Assistant Professor",
        email: "sinjinisen@vmls.edu.in",
        phone: "7687877527"
      }
    ]
  },
  {
    category: "MEMBERS (NON-TEACHING)",
    members: [
      {
        no: 5,
        name: "Mr. Victor",
        designation: "Director Administration",
        email: "director.admin@vmls.edu.in",
        phone: "9500390546"
      },
      {
        no: 6,
        name: "Ms. Ansala",
        designation: "Asst. Manager Student Section",
        email: "studsec@vmls.edu.in",
        phone: "84289388883"
      }
    ]
  },
  {
    category: "MEMBERS (STUDENTS)",
    members: [
      {
        no: 7,
        name: "Atchaya Arasi A M",
        designation: "LLB – 3rd Yr.",
        email: "atchaya.arasi_llb24@vmls.edu.in",
        phone: "7397016191"
      },
      {
        no: 8,
        name: "Samson Albert",
        designation: "B.A.LLB – 5th Yr.",
        email: "samsonalbert.s_ballb22@vmls.edu.in",
        phone: "8056355806"
      }
    ]
  },
  {
    category: "MEMBERS (GOVT & NON-GOVERNMENT)",
    members: [
      {
        no: 9,
        name: "Dr. Gomathi Senthilkumar",
        designation: "Advocate – Government",
        email: "gomathi.adv2013@gmail.com",
        phone: "8825794129"
      },
      {
        no: 10,
        name: "Mrs. Julie",
        designation: "NGO Representative (Former District Judge, Member - Juvenile Board - Chengalpattu)",
        email: "",
        phone: "9840048076"
      }
    ]
  }
];

export default function InternalComplaintCommitteePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Internal Complaint Committee</span>
        </div>
      </nav>

      {/* Header Section */}
      <section className="bg-[#800000] text-white py-16 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#fbb03b] rounded-full" />
            <div className="pl-6 md:pl-8 text-left">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Internal Complaint <span className="text-[#fbb03b]">Committee</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 max-w-3xl leading-relaxed">
                The Internal Complaint Committee at VMLS is dedicated to ensuring a safe, respectful, and inclusive environment for all students, faculty, and staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
            <table className="w-full text-left border-collapse min-w-[900px]">
              <thead>
                <tr className="bg-gray-900 text-white font-inter uppercase tracking-widest text-sm">
                  <th className="py-6 px-6 font-semibold w-20 text-center">No.</th>
                  <th className="py-6 px-6 font-semibold">Member</th>
                  <th className="py-6 px-6 font-semibold">Designation</th>
                  <th className="py-6 px-6 font-semibold">Contact Details</th>
                </tr>
              </thead>
              <tbody className="font-inter">
                {committeeData.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr className="bg-[#f9f9f9] border-y border-gray-200">
                      <td colSpan={4} className="py-5 px-6 text-[#800000] font-bold tracking-[0.2em] text-center text-sm md:text-base uppercase bg-gray-50">
                        {section.category}
                      </td>
                    </tr>
                    {section.members.map((member, mIdx) => (
                      <tr key={mIdx} className="border-b border-gray-100 hover:bg-red-50/30 transition-all duration-300">
                        <td className="py-5 px-6 text-gray-400 text-center font-bold">{member.no}</td>
                        <td className="py-5 px-6">
                          <div className="font-bold text-[#1a1a1a] text-lg">{member.name}</div>
                        </td>
                        <td className="py-5 px-6 text-gray-600 font-medium leading-relaxed">{member.designation}</td>
                        <td className="py-5 px-6">
                          <div className="flex flex-col gap-2.5">
                            {member.email ? (
                              <a href={`mailto:${member.email}`} className="flex items-center gap-2.5 text-[#a31f34] hover:text-[#800000] transition-colors text-sm font-bold group">
                                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                                <span className="truncate max-w-[200px] lg:max-w-none">{member.email}</span>
                              </a>
                            ) : null}
                            {member.phone ? (
                              <a href={`tel:${member.phone}`} className="flex items-center gap-2.5 text-gray-500 hover:text-gray-900 transition-colors text-sm font-semibold group">
                                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                                {member.phone}
                              </a>
                            ) : null}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
