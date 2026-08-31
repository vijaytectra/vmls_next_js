import React from "react";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { pageMetadata } from "@/lib/seo-pages";

export const metadata = pageMetadata("/anti-ragging-committee");



const committeeData = [
  {
    category: "REPRESENTATIVE (GOVERNMENT & NGO)",
    members: [
      {
        no: 1,
        name: "Mr. Siddharth Raja",
        designation: "Representative",
        email: "Exec.dean@vmls.edu.in",
        phone: "9845371357"
      },
      {
        no: 2,
        name: "Mr. Raja Samuel",
        designation: "Advocate, Madras High Court",
        email: "18samrajdavid@gmail.com",
        phone: "9841047876"
      },
      {
        no: 3,
        name: "Mr. Dharmalingam",
        designation: "Inspector, Mahaballipuram Police Station",
        email: "mamallapuram.ps2020@gmail.com",
        phone: "9498100287"
      },
      {
        no: 4,
        name: "Mrs. Teresa",
        designation: "Advocate (President – District state legal service authority, Chengalpattu)",
        email: "",
        phone: "9840148913"
      },
      {
        no: 5,
        name: "Mrs. Julie",
        designation: "NGO Representative (Former District Judge, Member - Juvenile Justice Board – Chengalpattu)",
        email: "",
        phone: "9840048076"
      }
    ]
  },
  {
    category: "REPRESENTATIVE FROM FACULTY",
    members: [
      {
        no: 1,
        name: "Dr. Krishna Kishore",
        designation: "Assistant Professor",
        email: "krishnakishore@vmls.edu.in",
        phone: "8099346959"
      },
      {
        no: 2,
        name: "Prof. Winfred",
        designation: "Professor",
        email: "winfredchelliah@vmls.edu.in",
        phone: "9840152160"
      }
    ]
  },
  {
    category: "REPRESENTATIVE FROM PARENTS",
    members: [
      {
        no: 1,
        name: "Mr. Pragadeshwar A",
        designation: "Industrialist",
        email: "pragathiresh2152@gmail.com",
        phone: "9629413583"
      },
      {
        no: 2,
        name: "Mr. Allan",
        designation: "Business",
        email: "Allan31617@gmail.com",
        phone: "9841032519"
      }
    ]
  },
  {
    category: "REPRESENTATIVE FROM SENIORS",
    members: [
      {
        no: 1,
        name: "Pradeep",
        designation: "LLB – 3rd Year",
        email: "pradeep_llb24@vmls.edu.in",
        phone: "9840622435"
      },
      {
        no: 2,
        name: "Dinesh Ragavendra M",
        designation: "B.A.LLB – 5th Year",
        email: "dineshragavendra.m_ballb22@vmls.edu.in",
        phone: "7806970028"
      },
      {
        no: 3,
        name: "Nandhini",
        designation: "LLB – 2nd Year",
        email: "nandini.ns_llbh25@VMLS.edu.in",
        phone: "9282179863"
      },
      {
        no: 4,
        name: "Mohammed Ali",
        designation: "B.A.LLB – IV year",
        email: "mohammedali_ballb23@vmls.edu.in",
        phone: "6382025827"
      }
    ]
  },
  {
    category: "REPRESENTATIVE FROM STUDENTS (FRESHERS)",
    members: [
      {
        no: 5,
        name: "Sowmya. J",
        designation: "B.B.A LL.B",
        email: "Sowmya_bballb26@vmls.edu.in",
        phone: "9940770367"
      }
    ]
  },
  {
    category: "NON-TEACHING STAFF",
    members: [
      {
        no: 7,
        name: "Mr. Victor K",
        designation: "Director Administration",
        email: "director.admin@vmls.edu.in",
        phone: "9500390546"
      }
    ]
  }
];

export default function AntiRaggingCommitteePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Anti Ragging Committee</span>
        </div>
      </nav>

      {/* Header Section */}
      <section className="bg-[#800000] text-white py-16 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#fbb03b] rounded-full" />
            <div className="pl-6 md:pl-8 text-left">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Anti Ragging <span className="text-[#fbb03b]">Committee</span>
              </h1>
              <p className="font-inter text-lg md:text-xl opacity-90 max-w-3xl leading-relaxed">
                VMLS maintains a zero-tolerance policy towards ragging. Our committee ensures a safe, welcoming, and harassment-free environment for all students.
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
                  <th className="py-6 px-6 font-semibold whitespace-nowrap min-w-[220px]">Member</th>
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
                        <td className="py-5 px-6 whitespace-nowrap min-w-[220px]">
                          <div className="font-bold text-[#1a1a1a] text-lg whitespace-nowrap">{member.name}</div>
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
