import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import React from 'react';

export const metadata = {
  title: "Anti Ragging Committee | VMLS",
  description: "Members and contact details of the Anti Ragging Committee at Vinayaka Mission's Law School.",
};

const committeeData = [
  {
    category: "CHAIRMAN",
    members: [
      { no: 1, name: "Mr. Siddharth Raja", designation: "Executive Dean, VMLS", email: "exe.dean@vmls.edu.in", phone: "9845371357" }
    ]
  },
  {
    category: "REPRESENTATIVE FROM GOVERNMENT AND NGO",
    members: [
      { no: 2, name: "Mr. Rangaswamy", designation: "Advocate, High Court Chennai", email: "rangaswamyadvocate6@gmail.com", phone: "9444349532" },
      { no: 3, name: "Mr. K.V. Balamurugan", designation: "Inspector of Police, Mamallapuram", email: "mamallapuramps@rediffmail.com", phone: "9962015171" },
      { no: 4, name: "Ms. R. Kanchana", designation: "Proprietor, Adhicreativez Media Agency", email: "adhicreativez@gmail.com", phone: "8754446793" },
      { no: 5, name: "Ms. Sandhiyan Thilagavathy", designation: "NGO, Aware India Trust", email: "mail@aware.org.in", phone: "8122241688" }
    ]
  },
  {
    category: "REPRESENTATIVES FROM FACULTY MEMBERS",
    members: [
      { no: 3, name: "Prof. Mike Ruban", designation: "Assistant Dean UG Academics", email: "mikeruban@vmls.edu.in", phone: "8870493346" },
      { no: 4, name: "Prof. Winfred Chelliah", designation: "Professor", email: "winfredchelliah@vmls.edu.in", phone: "9940152160" },
      { no: 5, name: "Prof. Sowmiya Narayanan", designation: "Assistant Dean PG Academics", email: "sowmiyanarayan@vmls.edu.in", phone: "9884503578" }
    ]
  },
  {
    category: "REPRESENTATIVE FROM PARENTS",
    members: [
      { no: 6, name: "Mr. Venkateshwaran", designation: "F/o Kowseeka. V, III LLB", email: "venkatseeni@gmail.com", phone: "8248481838" },
      { no: 7, name: "Ms. Mercy M", designation: "M/o Kanmani, III Yr. BBA LLB", email: "Mercy2780@gmail.com", phone: "6382690703" }
    ]
  },
  {
    category: "REPRESENTATIVE FROM STUDENTS – SENIORS",
    members: [
      { no: 8, name: "Gayathri S", designation: "IV Yr / BA LLB", email: "gayathri.s_ballb22@vmls.edu.in", phone: "8148401594" },
      { no: 9, name: "Arul Prasath", designation: "II Yr / LLB", email: "-", phone: "9443720058" },
      { no: 10, name: "Kavin Kshathriya", designation: "III Yr / BA LLB", email: "kavinkshathriya.js._ballb22@vmls.edu.in", phone: "7010846240" },
      { no: 11, name: "Chandru M", designation: "III Yr / LLB", email: "chandru.m_llb23@vmls.edu.in", phone: "7550329052" }
    ]
  },
  {
    category: "REPRESENTATIVE FROM STUDENTS – FRESHERS",
    members: [
      { no: 12, name: "Mugundhan T C A", designation: "I Yr / LLB", email: "Mugundhan_llbh25@vmls.edu.in", phone: "9600107013" }
    ]
  },
  {
    category: "NON-TEACHING STAFF",
    members: [
      { no: 13, name: "Ms. Merlin Stephen", designation: "Dy. Director Admissions", email: "merlinstephen@vmls.edu.in", phone: "8825818596" },
      { no: 14, name: "Victor K", designation: "Director Administration", email: "director.admin@vmls.edu.in", phone: "9500390546" }
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
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Anti Ragging <span className="text-[#fbb03b]">Committee</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#fbb03b] mb-8 mx-auto lg:ml-0"></div>
          <p className="font-inter text-xl opacity-90 max-w-3xl leading-relaxed mx-auto lg:ml-0">
            VMLS maintains a zero-tolerance policy towards ragging. Our committee ensures a safe, welcoming, and harassment-free environment for all students.
          </p>
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
                            {member.email !== "-" && (
                              <a href={`mailto:${member.email}`} className="flex items-center gap-2.5 text-[#a31f34] hover:text-[#800000] transition-colors text-sm font-bold group">
                                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                                <span className="truncate max-w-[200px] lg:max-w-none">{member.email}</span>
                              </a>
                            )}
                            <a href={`tel:${member.phone}`} className="flex items-center gap-2.5 text-gray-500 hover:text-gray-900 transition-colors text-sm font-semibold group">
                              <Phone size={16} className="group-hover:scale-110 transition-transform" />
                              {member.phone}
                            </a>
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
