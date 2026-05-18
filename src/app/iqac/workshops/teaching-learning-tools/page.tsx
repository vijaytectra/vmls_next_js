import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';

export default function TeachingLearningToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/iqac/report-on-workshop2.webp"
          alt="Teaching and Learning Tools Workshop"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 text-center px-[5%]">
          <Link 
            href="/iqac/workshops"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium tracking-wider uppercase">Back to Workshops</span>
          </Link>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Teaching and Learning Tools
          </h1>
          <div className="flex flex-wrap justify-center gap-6 text-white/90 font-medium">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Calendar size={18} className="text-[#fbb03b]" />
              <span>August 28, 2024</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <MapPin size={18} className="text-[#fbb03b]" />
              <span>VMLS Campus, Tamil Nadu</span>
            </div>
          </div>
        </div>
        {/* Vertical Accent Bar */}
        <div className="absolute left-0 bottom-0 w-2 h-32 bg-[#fbb03b]" />
      </section>

      {/* Intro Section (Split Layout - Image Right) */}
      <section className="pt-20 pb-6 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-8">
              Faculty Development & Innovation
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify font-inter">
              <p>
                Vinayaka Mission Law School (VMLS) organized a high-impact workshop on &quot;Teaching and Learning Tools&quot; as part of its ongoing efforts to enhance faculty development and innovation in education. 
              </p>
              <p>
                The workshop featured <strong>Dr. Vembanoor Nedumaran</strong>, Senior Consultant in Artificial Intelligence, as the guest speaker. The event was inaugurated with a keynote address by <strong>Dr. A. Francis Julian</strong>, while Dean <strong>Dr. Ananth Padmanaban</strong> welcomed the distinguished participants.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: "Guest Speaker", value: "Dr. V. Nedumaran" },
                  { label: "Keynote", value: "Dr. A. Francis Julian" }
                ].map((item, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-xl border-l-4 border-[#fbb03b]">
                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">{item.label}</div>
                    <div className="text-base font-bold text-[#800000]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/iqac/report-on-workshop2.webp"
                alt="AI Workshop Session"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration Section (Split Layout - Image Left) */}
      <section className="py-8 px-[5%] bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-8">
              The AI Frontier in Education
            </h2>
            <p className="text-[#a31f34] font-bold uppercase tracking-[0.2em] mb-4">Optimizing Pedagogical Tools</p>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify font-inter">
              <p>
                The session focused on the integration of Artificial Intelligence in educational practices, exploring how AI tools can optimize teaching methodologies and improve the overall learning experience. 
              </p>
              <p>
                Dr. Nedumaran shared valuable insights on the practical challenges and potential benefits of AI, addressing concerns regarding its role in academic settings. He provided practical solutions to help educators effectively adopt AI tools in their daily teaching routines.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/iqac/report-on-workshop1.webp"
                alt="AI Tools Demonstration"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section (Centered) */}
      <section className="py-12 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-8">
            Enriching the Academic Environment
          </h2>
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed font-inter">
            <p>
              The interactive nature of the workshop fostered active engagement from participants, who discussed both the advantages and limitations of AI in education. 
            </p>
            <div className="p-8 bg-[#800000]/5 rounded-2xl border-l-4 border-[#a31f34] italic text-xl text-[#800000] font-medium my-8">
              &quot;The workshop left faculty members more confident in their ability to utilize AI-enhanced teaching and learning tools to enrich the academic environment.&quot;
            </div>
            <p className="font-bold text-gray-600">
              This initiative aligns with VMLS&apos;s commitment to innovative teaching and continuous professional development of its faculty members.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
