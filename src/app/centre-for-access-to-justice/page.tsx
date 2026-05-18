import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Centre for Access to Justice | VMLS",
  description: "Vinayaka Mission's Law School (VMLS) Centre for Access to Justice.",
};

export default function CentreForAccessToJusticePage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-gray-500">Centres of Excellence</span>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Centre for Access to Justice</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[350px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white relative z-10">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Centre for <br /><span className="text-[#fbb03b]">Access to Justice</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Dedicated to ensuring legal aid and justice for all through research, community outreach, and advocacy.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[400px] flex items-center justify-center bg-gray-50">
            {/* Background Image */}
            <Image
              src="/images/CAJ-img.webp"
              alt="Institutional Background"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {/* Floating Logo Card */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white shadow-2xl rounded-2xl p-2 md:p-4 z-20 border border-gray-100 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full">
                <Image
                  src="/images/centreofexcel/5.webp"
                  alt="Centre for Access to Justice Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute top-10 right-10 w-32 h-32 border-r-2 border-t-2 border-[#800000]/20 rounded-tr-3xl"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 border-l-2 border-b-2 border-[#800000]/20 rounded-bl-3xl"></div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="pt-6 md:pt-8 pb-4 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <div className="inline-block px-4 py-1.5 bg-[#800000]/10 rounded-none">
                <span className="text-[#800000] font-bold text-[10px] uppercase tracking-widest">Introduction</span>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Empowering Communities Through <span className="text-[#800000] italic">Legal Literacy</span>
              </h2>
              <p className="font-inter text-gray-700 leading-relaxed text-justify text-lg md:text-xl">
                The Centre for Access to Justice (CAJ) at VMLS serves as a vital link between the legal profession and the community. By combining academic rigor with practical outreach, we strive to demystify the law and make justice a reality for the marginalized.
              </p>
            </div>
            <div className="flex items-center justify-center p-8 bg-gray-50 rounded-3xl border border-gray-100">
              <div className="relative w-48 h-48 md:w-64 md:h-64 transform -rotate-3">
                <Image
                  src="/images/caj.webp"
                  alt="Centre for Access to Justice Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 192px, 256px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-6 md:py-8 px-[5%] bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border-l-4 border-[#800000] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#800000]/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#800000] rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="Path d='M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'" /></svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="font-inter text-gray-700 leading-relaxed text-lg">
                To build a just society where every person irrespective of socio-economic status can understand, claim, and enforce legal rights with dignity and timely support.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.08)] border-l-4 border-[#800000] relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#800000]/[0.02] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#800000] rounded-full flex items-center justify-center text-white">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Deliver practical legal assistance and quality legal literacy to vulnerable groups.",
                  "Train law students as empathetic, practice-ready professionals.",
                  "Partner with government bodies, NGOs, and community leaders.",
                  "Produce impactful, policy-relevant research for justice systems."
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start group/li">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800000] mt-2 shrink-0 group-hover/li:scale-125 transition-transform"></div>
                    <span className="font-inter text-gray-700 leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="py-6 md:py-8 px-[5%] bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">Core Pillars</h2>
            <div className="w-20 h-1 bg-[#800000] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Legal Aid and Advice",
                desc: "Walk-in and scheduled clinics offering basic legal guidance, drafting support, and referrals under faculty supervision.",
                icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              },
              {
                title: "Community Outreach",
                desc: "Rights awareness camps on issues like wages, domestic violence, cyber safety, pensions, identity documents, and more.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              },
              {
                title: "Research and Policy",
                desc: "Empirical studies, policy briefs, and model protocols on access barriers, legal empowerment, and technology.",
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              },
              {
                title: "Student Training",
                desc: "Live-client exposure, supervised drafting, ethical interviewing, and simulation labs for clinical legal education.",
                icon: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                <div className="w-14 h-14 bg-[#800000] rounded-xl flex items-center justify-center text-white mb-6 shadow-lg shadow-[#800000]/20">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d={pillar.icon} /></svg>
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                <p className="font-inter text-gray-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Focus Areas */}
      <section className="py-6 md:py-8 px-[5%] bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] text-center mb-12">Services Offered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              {[
                "Legal literacy sessions in schools and local bodies.",
                "Document assistance (ID, pensions, welfare).",
                "Basic dispute resolution support and referrals.",
                "Help desks during community drives for grievances."
              ].map((service, i) => (
                <div key={i} className="flex gap-4 items-center p-6 bg-[#800000]/[0.02] rounded-xl border border-dashed border-[#800000]/20">
                  <div className="w-2 h-2 rounded-full bg-[#800000]"></div>
                  <span className="font-inter text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] text-center mb-12">Focus Areas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Women & Child Rights", sub: "Domestic violence and maintenance", icon: "♀" },
                { title: "Labor & Livelihood", sub: "Street vendors, social security", icon: "⚖" },
                { title: "Citizenship & Identity", sub: "Access to ration, pensions, schemes", icon: "🆔" },
                { title: "Digital Safety", sub: "Cybercrime reporting, privacy", icon: "🛡" }
              ].map((area, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm text-center group hover:bg-[#800000] transition-all duration-500">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-500 inline-block">{area.icon}</div>
                  <h4 className="font-playfair text-xl font-bold mb-2 group-hover:text-white transition-colors">{area.title}</h4>
                  <p className="font-inter text-gray-500 group-hover:text-white/80 transition-colors">{area.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engagement & Impact */}
      <section className="py-6 md:py-8 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* How Students Engage */}
            <div className="lg:col-span-2">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 mb-8">How Students Engage</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: "Clinical Credits", desc: "Rotation in the CAJ help desk and field camps." },
                  { title: "Drafting Labs", desc: "Complaints, applications, and legal notices." },
                  { title: "Research Assistantships", desc: "Impact assessments and ongoing projects." },
                  { title: "Practical Skills", desc: "Moots, simulations, and mediation shadowing." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-inter font-bold text-[#800000] mb-2">{item.title}</h4>
                    <p className="font-inter text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-8 bg-[#800000] rounded-2xl text-white">
                <h4 className="font-playfair text-xl font-bold mb-4">Partnerships</h4>
                <p className="font-inter opacity-90 leading-relaxed">
                  CAJ collaborates with legal services authorities, district administration, accredited NGOs, and academic centers to co-host outreach camps, referral networks, and data-driven policy initiatives.
                </p>
              </div>
            </div>

            {/* Impact Framework */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-8">Impact Framework</h3>
              <div className="space-y-8">
                {[
                  { label: "Access", val: "Beneficiaries advised & documents assisted." },
                  { label: "Learning", val: "Student interviewing and drafting skills." },
                  { label: "Systems", val: "Policy recommendations & tech tracking." }
                ].map((impact, i) => (
                  <div key={i} className="relative pl-6 border-l-2 border-[#800000]/20">
                    <div className="absolute left-[-5px] top-0 w-2.5 h-2.5 bg-[#800000] rounded-full"></div>
                    <h5 className="font-inter font-bold text-gray-900 mb-1">{impact.label}</h5>
                    <p className="font-inter text-gray-500">{impact.val}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethics & Contact */}
      <section className="py-6 md:py-8 px-[5%] bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Ethics */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1.5 bg-[#800000]/10 rounded-full">
                <span className="text-[#800000] font-bold text-[10px] uppercase tracking-widest">Ethics and Safeguards</span>
              </div>
              <p className="font-inter text-gray-700 text-lg leading-relaxed italic">
                \"All services follow confidentiality norms, conflict checks, and faculty supervision; CAJ does not provide courtroom representation but facilitates appropriate referrals and lawful remedies.\"
              </p>
            </div>

            {/* Contact Card */}
            <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-8">Contact Information</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-inter font-bold text-[#800000] mb-2 uppercase text-xs tracking-widest">Director</h4>
                    <p className="font-inter text-gray-900 font-bold">Dr. Fowmina</p>
                    <p className="font-inter text-gray-600">Centre for Access to Justice, VMLS</p>
                    <a href="mailto:fowmina@vmls.edu.in" className="inline-block mt-4 text-[#800000] font-medium hover:underline">fowmina@vmls.edu.in</a>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-inter font-bold text-[#800000] mb-2 uppercase text-xs tracking-widest">Office Hours</h4>
                      <p className="font-inter text-gray-700">Mon-Fri, 10 AM-4 PM</p>
                    </div>
                    <div>
                      <h4 className="font-inter font-bold text-[#800000] mb-2 uppercase text-xs tracking-widest">Campus Help Desk</h4>
                      <p className="font-inter text-gray-700">Legal aid clinic, VMCC Campus</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
