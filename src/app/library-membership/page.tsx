import Image from 'next/image';
import Link from 'next/link';

export default function LibraryMembershipPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/library" className="text-gray-500 hover:text-[#a31f34] transition-colors">Library</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Membership</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-white/30"></div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/70">Join the Library</span>
            </div>
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Library <br /> <span className="text-[#fbb03b]">Membership</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Become a part of the VMLS Law Library community to access our extensive digital databases, physical collections, and premium research services.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/library/library5.webp"
              alt="VMLS Library Membership"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Membership Information Section */}
      <section className="py-10 md:py-14 px-[5%] bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Intro Section */}
          <div className="mb-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-[#a31f34]"></div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#a31f34]">General Information</span>
            </div>
            <ul className="space-y-4">
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-[#a31f34] rounded-full mt-2 shrink-0"></div>
                <p className="font-inter text-gray-700 leading-relaxed">
                  The Library services are open to registered members only. Guest visitors will be allowed only for short duration, and with prior approval.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-1.5 h-1.5 bg-[#a31f34] rounded-full mt-2 shrink-0"></div>
                <p className="font-inter text-gray-700 leading-relaxed font-semibold">
                  Membership categories: The Library will have the following categories of members:
                </p>
              </li>
            </ul>
          </div>

          {/* Membership Categories Table */}
          <div className="mb-12 overflow-hidden border border-gray-200 shadow-sm rounded-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1a1a1a] text-white">
                    <th className="py-4 px-6 font-playfair text-lg font-bold border-r border-gray-700 w-1/4">Category</th>
                    <th className="py-4 px-6 font-playfair text-lg font-bold">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="font-inter text-sm md:text-base">
                  {[
                    { cat: 'Undergraduate', elig: 'Students of LLB (3 years), B.A LLB, BBA LLB and B.Com LLB (5 years) and any other Bachelor\'s degree Programmes at VMLS' },
                    { cat: 'Masters', elig: 'Students of Master Degree Programmes at VMLS' },
                    { cat: 'Research Staff', elig: 'Research Associates and Research Scholars at VMLS' },
                    { cat: 'Faculty', elig: 'VMLS teaching staff' },
                    { cat: 'Staff (Non-teaching)', elig: 'Non-teaching administrative heads, staffs and all other VMLS patrons including members of other Law centres under VMLS' },
                    { cat: 'VMRF administration', elig: 'The members of VMRF University administration' },
                    { cat: 'Campus Students', elig: 'Undergraduate and Masters category members of Campus Libraries which have reciprocal arrangements with the Library' },
                    { cat: 'Campus Staff', elig: 'Faculty and Research Staff category members of Campus Libraries which have reciprocal arrangements with the Library' },
                    { cat: 'Associate Students', elig: 'Undergraduate and Postgraduate category members of Associate Libraries (other than AV Campus)' },
                    { cat: 'Associate Faculty', elig: 'Faculty and research staff members of Associate Libraries (other than AV Campus)' },
                    { cat: 'Visitors', elig: 'Participants of short courses having a duration of not less than 4 weeks, and who are required to obtain a No-Due certificate from the Library' },
                    { cat: 'Walk-in Visitors', elig: 'Casual visitors, and participants of short courses having a duration of less than 4 weeks' },
                  ].map((row, idx) => (
                    <tr key={idx} className={`${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 hover:bg-red-50/30 transition-colors group`}>
                      <td className="py-4 px-6 font-bold text-[#1a1a1a] border-r border-gray-200 group-hover:text-[#a31f34] transition-colors">{row.cat}</td>
                      <td className="py-4 px-6 text-gray-600 leading-relaxed">{row.elig}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Additional Rules */}
          <div className="bg-gray-50 p-8 md:p-10 border-l-4 border-[#a31f34]">
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="w-2 h-2 rotate-45 bg-[#a31f34] mt-2 shrink-0"></div>
                <p className="font-inter text-gray-700 leading-relaxed italic">
                  VMLS Faculty, Students and Staff of VMLS <span className="font-bold text-[#1a1a1a]">automatically become members</span> of the Library by virtue of possessing a valid VMLS photo identity card, which is required to be registered at the Library service desk.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rotate-45 bg-[#a31f34] mt-2 shrink-0"></div>
                <p className="font-inter text-gray-700 leading-relaxed">
                  VMLS Members are required to register separately in other Campus Libraries which have reciprocal arrangement with the Library. Similarly, members of such Campus Libraries can register at the VMLS Library.
                </p>
              </li>
              <li className="flex gap-4">
                <div className="w-2 h-2 rotate-45 bg-[#a31f34] mt-2 shrink-0"></div>
                <p className="font-inter text-gray-700 leading-relaxed">
                  <span className="font-bold text-[#a31f34]">Walk-in visitors</span> shall hold no borrowing privileges, but may be allowed to use the Library Material within the Library premises, with prior permission of the Librarian.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
