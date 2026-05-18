import Image from 'next/image';
import Link from 'next/link';
import { Calendar } from 'lucide-react';

export const metadata = {
  title: "Centre for the Promotion of International Law (CPIL) | VMLS",
  description: "Vinayaka Mission's Law School (VMLS) Centre for the Promotion of International Law (CPIL).",
};

export default function CPILPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* Breadcrumbs */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 md:text-base font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-gray-500">Centres of Excellence</span>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">CPIL</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full bg-white border-b border-gray-100 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[350px]">
          <div className="lg:w-[45%] p-8 md:p-[8%] lg:p-[5%] flex flex-col justify-center bg-[#800000] text-white relative z-10">
            <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Centre for the Promotion <br /><span className="text-[#fbb03b]">of International Law</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Fostering excellence in international legal research, advocacy, and global cooperation.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[400px] flex items-center justify-center bg-gray-50">
            {/* Background Image */}
            <Image
              src="/images/cpil/il0.webp"
              alt="Institutional Background"
              fill
              className="object-cover opacity-60"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            {/* Floating Logo Card */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 bg-white shadow-2xl rounded-2xl p-2 md:p-4 z-20 border border-gray-100 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="relative w-full h-full">
                <Image
                  src="/images/centreofexcel/3.webp"
                  alt="CPIL Logo"
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

      {/* Content Section 1 - Overview */}
      <section className="pt-8 md:pt-12 pb-4 md:pb-6 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-2">
              <div className="inline-block px-4 py-1.5 bg-[#800000]/10 rounded-none">
                <span className="text-[#800000] font-bold text-[10px] uppercase tracking-widest">Introduction</span>
              </div>
              <div className="font-inter text-gray-700 leading-relaxed text-justify space-y-4 text-lg md:text-xl">
                <p>
                  The Centre for the Promotion of International Law at Vinayaka Mission's Law School (VMLS) embodies a vision for the future of international law, particularly in the context of developing countries such as India. The Centre aspires to be a beacon of knowledge and collaboration, to help shape the landscape of international law and foster inclusivity and diversity.
                </p>
                <p>
                  Throughout its historical evolution, international law has transformed from a subject of peripheral importance to a multifaceted branch of law. This evolution encompasses many critical domains, including public international law, investment law, law of the sea, and international human rights law.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group">
              <Image
                src="/images/cpil/il1.webp"
                alt="CPIL Group"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section 2 - Vision & Impact */}
      <section className="pt-4 md:pt-6 pb-12 md:pb-16 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
            {/* Image Side with Decorative Frame */}
            <div className="lg:w-[45%] relative group order-2 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl z-10">
                <Image
                  src="/images/cpil/il2.webp"
                  alt="International Law Cooperation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
              {/* Decorative Background Accents */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#800000]/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-[1px] border-[#800000]/10 rounded-full hidden md:block"></div>
            </div>

            {/* Text Side */}
            <div className="lg:w-[55%] space-y-6 order-1 lg:order-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-[1px] bg-[#a31f34]"></div>
                  <span className="text-[#a31f34] text-[10px] font-bold uppercase tracking-[0.3em]">Our Mission</span>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Global Collaboration & <span className="text-[#a31f34] italic">Excellence</span>
                </h2>
              </div>

              <div className="font-inter text-gray-700 leading-relaxed text-justify space-y-4 text-base md:text-lg border-l-2 border-[#a31f34]/10 pl-6">
                <p>
                  The Centre aims to address contemporary concerns, supporting the development of international law, particularly in the context of India. We foster international collaboration by connecting experts from different corners of the globe, creating a global community that thrives on cooperation.
                </p>
                <div className="pt-4 space-y-4">
                   <p className="text-gray-600">
                    Reshaping the pedagogy of international law, fostering a reality where education, research, collaboration, peace, and justice converge to enhance our global community.
                  </p>
                  <p className="font-bold text-gray-900 italic">
                    Fostering a global community that thrives on cooperation and justice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News and Events Section */}
      <section className="py-16 px-[5%] bg-[#f8f5f2]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] text-center mb-12">
            Latest News and Events
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Event 1 */}
            <Link href="/news/why-international-law-matters-inaugural-session" className="flex flex-col group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/cpil/guest-lecture.webp"
                  alt="Guest Lecture on Public Interest Litigation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-gray-900 mb-3 font-semibold">
                <Calendar size={20} strokeWidth={2.2} className="text-[#a31f34]" />
                <span className="tracking-wide">February 12, 2025</span>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#a31f34] transition-colors">
                Guest Lecture on Public Interest Litigation
              </h3>
            </Link>

            {/* Event 2 */}
            <Link href="/news/international-conference-on-rivers" className="flex flex-col group">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/images/cpil/rivers.webp"
                  alt="Workshop on Environmental Law & River Conservation"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2 text-gray-900 mb-3 font-semibold">
                <Calendar size={20} strokeWidth={2.2} className="text-[#a31f34]" />
                <span className="tracking-wide">December 05, 2024</span>
              </div>
              <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 leading-snug group-hover:text-[#a31f34] transition-colors">
                Workshop on Environmental Law & River Conservation
              </h3>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
