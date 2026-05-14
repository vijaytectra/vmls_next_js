import Image from 'next/image';
import Link from 'next/link';

export default function AntiRaggingPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-sm md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <Link href="/student-affairs" className="text-gray-500 hover:text-[#a31f34] transition-colors">Student Affairs</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Anti-Ragging Cell</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[400px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#fbb03b] text-[#1a1a1a]">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Anti-Ragging <br /><span className="text-[#800000]">Cell</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl text-justify">
              Vinayaka Mission's Law School maintains a zero-tolerance policy towards ragging. Our dedicated cell ensures a safe, respectful, and inclusive environment for every student.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/studentaff/1.webp"
              alt="Safe Campus VMLS"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="pt-12 pb-6 md:pt-16 md:pb-8 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 mb-6 font-bold border-l-4 border-[#fbb03b] pl-6 text-center lg:text-left">Zero Tolerance Policy</h2>
          <div className="space-y-4 font-inter text-gray-700 leading-relaxed text-justify text-base md:text-lg">
            <p>
              In accordance with the regulations of the University Grants Commission (UGC) and the Bar Council of India (BCI), VMLS has established a robust Anti-Ragging Cell. Ragging in any form is strictly prohibited within the campus, hostels, and any other student gathering points.
            </p>
            <p>
              Our objective is to prevent the occurrence of ragging by maintaining constant vigil, educating students on the consequences, and providing an immediate redressal mechanism for any grievances.
            </p>
            <ul className="space-y-3 pt-2 max-w-2xl mx-auto lg:mx-0">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#fbb03b]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#800000] font-bold text-xs">1</span>
                <span><strong>Active Monitoring:</strong> Surprise raids by the anti-ragging squad across campus and hostels.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#fbb03b]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#800000] font-bold text-xs">2</span>
                <span><strong>Counseling:</strong> Dedicated sessions for freshers to build confidence and awareness.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 bg-[#fbb03b]/20 rounded-full flex items-center justify-center flex-shrink-0 text-[#800000] font-bold text-xs">3</span>
                <span><strong>Strict Action:</strong> Disciplinary measures ranging from suspension to expulsion for offenders.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Committee & Contact Directory Section */}
      <section className="py-10 md:py-12 px-[5%] bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-playfair text-3xl md:text-5xl text-gray-900 mb-4 font-bold">Anti-Ragging Committee</h2>
            <p className="font-inter text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
              The following officials are responsible for the prevention of ragging and the redressal of any related grievances on campus.
            </p>
          </div>

          <div className="overflow-x-auto shadow-xl border border-gray-200">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="bg-black text-white uppercase text-[10px] tracking-widest font-bold">
                  <th className="p-4 border-r border-white/10">No.</th>
                  <th className="p-4 border-r border-white/10">Member</th>
                  <th className="p-4 border-r border-white/10">Designation</th>
                  <th className="p-4 border-r border-white/10">Mail ID</th>
                  <th className="p-4">Phone No.</th>
                </tr>
              </thead>
              <tbody>
                {/* Coordinator */}
                <tr className="bg-gray-600 text-white font-bold uppercase text-[10px] tracking-[0.2em]">
                  <td colSpan={5} className="p-3 text-center border-b border-gray-700">Coordinator</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-4 text-sm font-medium text-gray-500 border-r border-gray-100">1</td>
                  <td className="p-4 text-sm font-bold text-gray-900 border-r border-gray-100">Prof. Winfred Chelliah</td>
                  <td className="p-4 text-sm text-gray-600 border-r border-gray-100">Professor</td>
                  <td className="p-4 text-sm text-[#a31f34] font-medium border-r border-gray-100">winfredchelliah@vmls.edu.in</td>
                  <td className="p-4 text-sm font-mono text-gray-900">9940152160</td>
                </tr>

                {/* Members */}
                <tr className="bg-gray-600 text-white font-bold uppercase text-[10px] tracking-[0.2em]">
                  <td colSpan={5} className="p-3 text-center border-b border-gray-700">Members</td>
                </tr>
                {[
                  { id: 2, name: "Prof. Mike Ruban", role: "Associate Dean UG Academics", mail: "mikeruban@vmls.edu.in", phone: "8870493346" },
                  { id: 3, name: "Prof. Sowmiya Narayanan", role: "Assistant Dean PG Academics", mail: "sowmiyanarayan@vmls.edu.in", phone: "9884503578" },
                  { id: 4, name: "Dr. Fowmina", role: "Associate Dean Inclusivity", mail: "fowmina@vmls.edu.in", phone: "9884015285" },
                  { id: 5, name: "Dr. Krishna Kishore", role: "Assistant Professor", mail: "krishnakishore@vmls.edu.in", phone: "8099346959" }
                ].map((member) => (
                  <tr key={member.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="p-4 text-sm font-medium text-gray-500 border-r border-gray-100">{member.id}</td>
                    <td className="p-4 text-sm font-bold text-gray-900 border-r border-gray-100">{member.name}</td>
                    <td className="p-4 text-sm text-gray-600 border-r border-gray-100">{member.role}</td>
                    <td className="p-4 text-sm text-[#a31f34] font-medium border-r border-gray-100">{member.mail}</td>
                    <td className="p-4 text-sm font-mono text-gray-900">{member.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </main>
  );
}
