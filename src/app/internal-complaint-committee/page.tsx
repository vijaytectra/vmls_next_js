import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/seo-pages";

export const metadata = pageMetadata("/internal-complaint-committee");



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
      <nav className="px-[5%] py-4 sm:py-6 bg-gray-50 border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 text-xs min-[380px]:text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors shrink-0">Home</Link>
          <span className="text-gray-300 font-light shrink-0">/</span>
          <span className="text-[#a31f34] font-semibold shrink-0">Internal Complaint Committee</span>
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
      <section className="py-12 md:py-20 px-[5%]">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Card View */}
          <div className="md:hidden space-y-6">
            {committeeData.map((section, sIdx) => (
              <div key={sIdx} className="space-y-3">
                <div className="bg-[#800000] text-white py-2.5 px-4 font-bold tracking-[0.15em] text-center text-xs uppercase rounded-lg">
                  {section.category}
                </div>
                <div className="space-y-3">
                  {section.members.map((member, mIdx) => (
                    <div key={mIdx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-[#1a1a1a] text-base">{member.name}</span>
                        <span className="text-xs text-gray-400 font-bold bg-gray-100 px-2 py-0.5 rounded">#{member.no}</span>
                      </div>
                      <p className="text-xs text-gray-600 font-medium">{member.designation}</p>
                      <div className="pt-2 border-t border-gray-100 flex flex-col gap-1.5">
                        {member.email && (
                          <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-[#a31f34] text-xs font-bold break-all">
                            <Mail size={14} className="shrink-0" />
                            <span>{member.email}</span>
                          </a>
                        )}
                        {member.phone && (
                          <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-gray-600 text-xs font-semibold">
                            <Phone size={14} className="shrink-0" />
                            <span>{member.phone}</span>
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop/Tablet Fluid Table View */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-gray-200 shadow-lg w-full">
            <table className="w-full text-left border-collapse table-fixed">
              <thead>
                <tr className="bg-gray-900 text-white font-inter uppercase tracking-widest text-sm">
                  <th className="py-5 px-4 font-semibold w-16 text-center">No.</th>
                  <th className="py-5 px-6 font-semibold w-1/4">Member</th>
                  <th className="py-5 px-6 font-semibold w-1/3">Designation</th>
                  <th className="py-5 px-6 font-semibold w-5/12">Contact Details</th>
                </tr>
              </thead>
              <tbody className="font-inter">
                {committeeData.map((section, sIdx) => (
                  <React.Fragment key={sIdx}>
                    <tr className="bg-[#f9f9f9] border-y border-gray-200">
                      <td colSpan={4} className="py-4 px-6 text-[#800000] font-bold tracking-[0.2em] text-center text-sm uppercase bg-gray-50">
                        {section.category}
                      </td>
                    </tr>
                    {section.members.map((member, mIdx) => (
                      <tr key={mIdx} className="border-b border-gray-100 hover:bg-red-50/30 transition-all duration-300">
                        <td className="py-4 px-4 text-gray-400 text-center font-bold">{member.no}</td>
                        <td className="py-4 px-6">
                          <div className="font-bold text-[#1a1a1a] text-base">{member.name}</div>
                        </td>
                        <td className="py-4 px-6 text-gray-600 font-medium text-sm leading-relaxed">{member.designation}</td>
                        <td className="py-4 px-6">
                          <div className="flex flex-col gap-1.5">
                            {member.email ? (
                              <a href={`mailto:${member.email}`} className="flex items-center gap-2 text-[#a31f34] hover:text-[#800000] transition-colors text-xs font-bold group break-all">
                                <Mail size={14} className="group-hover:scale-110 transition-transform shrink-0" />
                                <span>{member.email}</span>
                              </a>
                            ) : null}
                            {member.phone ? (
                              <a href={`tel:${member.phone}`} className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-xs font-semibold group">
                                <Phone size={14} className="group-hover:scale-110 transition-transform shrink-0" />
                                <span>{member.phone}</span>
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
