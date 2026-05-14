import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import React from 'react';

export const metadata = {
  title: "Gender Sensitization Cell | VMLS",
  description: "Members and contact details of the Gender Sensitization Cell at Vinayaka Mission's Law School.",
};

const committeeData = [
  {
    category: "CORDINATOR",
    members: [
      { no: 1, name: "Prof. Gaurav Shukla", designation: "Associate Dean Research", email: "gauravshukla@vmls.edu.in", phone: "8962431808" }
    ]
  },
  {
    category: "CO-COORDINATOR",
    members: [
      { no: 2, name: "Dr. R. Shenbagavalli", designation: "Associate Dean Student Affairs", email: "shenbagavalli@vmls.edu.in", phone: "9551567599" }
    ]
  },
  {
    category: "MEMBERS",
    members: [
      { no: 3, name: "Prof. Sangamitra", designation: "Associate Dean Research", email: "sangamithra@vmls.edu.in", phone: "9791655326" },
      { no: 4, name: "Prof. Edhaya Chandran", designation: "Assistant Dean Media & outreach", email: "edhayachandran@vmls.edu.in", phone: "8531903207" },
      { no: 5, name: "Prof. Mike Ruban", designation: "Assistant Dean UG Academics", email: "mikeruban@vmls.edu.in", phone: "8870493346" },
      { no: 6, name: "Prof. Kamala Priyadarshini", designation: "Assistant Professor", email: "kamalapriyadarshini@vmls.edu.in", phone: "7904771075" }
    ]
  }
];

export default function GenderSensitizationCellPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Gender Sensitization Cell</span>
        </div>
      </nav>

      {/* Header Section */}
      <section className="bg-[#800000] text-white py-16 px-[5%]">
        <div className="max-w-7xl mx-auto text-center lg:text-left">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Gender <span className="text-[#fbb03b]">Sensitization Cell</span>
          </h1>
          <div className="w-24 h-1.5 bg-[#fbb03b] mb-8 mx-auto lg:ml-0"></div>
          <p className="font-inter text-xl opacity-90 max-w-3xl leading-relaxed mx-auto lg:ml-0">
            Promoting gender equality and creating a sensitized environment that respects and protects the rights of all individuals at VMLS.
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
                            <a href={`mailto:${member.email}`} className="flex items-center gap-2.5 text-[#a31f34] hover:text-[#800000] transition-colors text-sm font-bold group">
                              <Mail size={16} className="group-hover:scale-110 transition-transform" />
                              <span className="truncate max-w-[200px] lg:max-w-none">{member.email}</span>
                            </a>
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
