import Link from "next/link";
import Image from "next/image";
import MentoringKeyMembers from "@/components/MentoringKeyMembers";
import MentoringExOfficio from "@/components/MentoringExOfficio";

export const metadata = {
  title: "Mentoring Committee | VMLS",
  description: "Meet the distinguished legal experts and academics providing mentorship and guidance to Vinayaka Mission's Law School.",
};

export default function MentoringCommitteePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb - Standardized Style */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Mentoring Committee</span>
        </div>
      </nav>

      {/* Hero Section - Split Style matching Internship Page */}
      <section className="relative w-full bg-white border-b border-gray-100">
        <div className="flex flex-col lg:flex-row min-h-[450px]">
          <div className="lg:w-[45%] p-[5%] flex flex-col justify-center bg-[#800000] text-white">
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Mentoring <br />
              <span className="text-[#fbb03b]">Committee</span>
            </h1>
            <p className="font-inter text-lg md:text-xl opacity-90 leading-relaxed max-w-xl">
              Fostering excellence through institutional mentorship, guided by eminent legal professionals and distinguished academics from across the globe.
            </p>
          </div>
          <div className="lg:w-[55%] relative min-h-[300px]">
            <Image
              src="/images/bod/mentor-hero-bg.png"
              alt="Mentoring Committee at VMLS"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
        </div>
      </section>
      {/* Mentorship Framework Content Section */}
      <section className="pt-8 md:pt-10 pb-10 md:pb-16 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="relative mb-8">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
            <div className="pl-6 md:pl-10">
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#800000] mb-8 leading-tight">
                A Unique Mentorship Framework
              </h2>
              <p className="font-inter text-gray-700 leading-relaxed text-lg md:text-xl mb-10 text-justify">
                Vinayaka Mission's Law School is unique not only in its vision – excellence through inclusivity, and a steadfast emphasis on digital futures and climate transitions – but also its governance model. We are the first Indian legal education institution to be formally mentored by another private law school, arguably India's finest at that – the Jindal Global Law School, and Jindal Global University, an institution of eminence. The active Mentoring Committee created under this one-of-its-kind mentorship agreement consists of eminent senior lawyers and distinguished academics, who steer VMLS towards its goals and vision.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-10 text-center">
              Salient Features of the Mentorship Framework
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  id: "01",
                  title: "Strategic Career Services",
                  desc: "An office of career services at VMLS, which is directly guided by JGLS towards strategizing and training VMLS students for impactful internships during their period of study and fulfilling career trajectories post their graduation."
                },
                {
                  id: "02",
                  title: "Global Alumni Network",
                  desc: "Access to the JGLS alumni network, a community consisting of tens of thousands of lawyers spread across more than 50 countries, to facilitate internships and other career support activities on select basis."
                },
                {
                  id: "03",
                  title: "International Faculty Presence",
                  desc: "Presence of international faculty from JGLS on VMLS campus to teach single-credit courses and to offer seminars and guest lectures to VMLS students."
                },
                {
                  id: "04",
                  title: "Advanced Skills & Training",
                  desc: "Opportunity for VMLS students to undertake skills training, workshops on cutting edge areas of law, and summer / winter break programs in the JGLS campus."
                },
                {
                  id: "05",
                  title: "Potential Semester at JGLS",
                  desc: "Potential semester at JGLS for VMLS students who have already excelled in any of the shorter duration activities organized by JGLS at their campus."
                },
                {
                  id: "06",
                  title: "Global Learning Opportunities",
                  desc: "Potential learning opportunities for VMLS students at select foreign universities that JGLS has formal MoUs with, subject to applicable terms and conditions."
                }
              ].map((feature, index) => (
                <div key={index} className="group bg-gray-50 p-8 md:p-10 border-t-4 border-[#a31f34] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  <div className="flex items-start gap-6">
                    <span className="font-playfair text-4xl font-bold text-[#a31f34]/20 group-hover:text-[#a31f34] transition-colors duration-500">
                      {feature.id}
                    </span>
                    <div>
                      <h4 className="font-playfair text-xl md:text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#a31f34] transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="font-inter text-gray-600 leading-relaxed text-base md:text-lg">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Key Members Section */}
      <MentoringKeyMembers />

      {/* Ex-Officio Members Section */}
      <MentoringExOfficio />
    </main>
  );
}
