"use client";

import Image from "next/image";
import Link from "next/link";

export default function CollaborationsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Collaborations</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative px-[5%] py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/collab/Frame-53245.webp"
            alt="Collaborations at VMLS"
            fill
            sizes="100vw"
            className="object-cover object-top brightness-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 text-white drop-shadow-lg">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#fbb03b]"></div>
            <div className="pl-6 md:pl-10">
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight font-bold">
                Collaborations
              </h1>
              <p className="font-inter text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed font-medium">
                Fostering global and national partnerships to elevate legal education and practice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Collaborations Section */}
      <section className="pt-8 pb-4 px-[5%] bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-6">
            Academic Collaborations
          </h2>

          <div className="flex flex-row justify-center items-center gap-4 sm:gap-12 md:gap-24 mb-10">
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56">
              <Image
                src="/images/collab/group-454@2x.webp"
                alt="O.P. Jindal Global University"
                fill
                sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 224px"
                className="object-contain"
              />
            </div>
            <div className="relative w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56">
              <Image
                src="/images/collab/image-7@2x.webp"
                alt="Jindal Global Law School"
                fill
                sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, 224px"
                className="object-contain"
              />
            </div>
          </div>

          <p className="font-inter text-lg md:text-xl text-gray-800 leading-relaxed font-medium text-justify">
            VMLS is being mentored by O.P. Jindal Global University (an Institution of Eminence) and Jindal Global Law School under an institutional mentorship agreement.
          </p>
        </div>
      </section>

      {/* Mentorship Framework Section */}
      <section className="pt-6 pb-8 px-[5%] bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-center text-[#800000] mb-6">
            A Unique Mentorship Framework
          </h2>
          <p className="font-inter text-gray-700 leading-relaxed text-base md:text-lg mb-10 text-justify">
            Vinayaka Mission's Law School is unique not only in its vision – excellence through inclusivity, and a steadfast emphasis on digital futures and climate transitions – but also its governance model. We are the first Indian legal education institution to be formally mentored by another private law school, arguably India's finest at that – the Jindal Global Law School, and Jindal Global University, an institution of eminence. The active Mentoring Committee created under this one-of-its-kind mentorship agreement consists of eminent senior lawyers and distinguished academics, who steer VMLS towards its goals and vision.
          </p>

          <h3 className="font-playfair text-2xl font-bold text-[#1a1a1a] mb-4">
            Salient Features of the Mentorship Framework
          </h3>
          <p className="font-inter text-gray-700 leading-relaxed text-base md:text-lg mb-6 text-justify">
            In addition to designing policies and best practices for VMLS that govern key areas like teaching and learning, research, and institutional activities and development, the JGU & JGLS Mentorship also focuses on delivering direct student outcomes for learner advancement. Some of these initiatives, which form a part of the Mentorship Framework, are enumerated below:
          </p>

          <ul className="list-disc pl-6 md:pl-8 space-y-4 font-inter text-gray-700 leading-relaxed text-base md:text-lg mb-10">
            <li>An office of career services at VMLS, which is directly guided by JGLS towards strategizing and training VMLS students for impactful internships during their period of study and fulfilling career trajectories post their graduation;</li>
            <li>Access to the JGLS alumni network, a community consisting of tens of thousands of lawyers spread across more than 50 countries, to facilitate internships and other career support activities on select basis;</li>
            <li>Presence of international faculty from JGLS on VMLS campus to teach single-credit courses and to offer seminars and guest lectures to VMLS students;</li>
            <li>Opportunity for VMLS students to undertake skills training, workshops on cutting edge areas of law, and summer / winter break programs in the JGLS campus;</li>
            <li>Potential semester at JGLS for VMLS students who have already excelled in any of the shorter duration activities organized by JGLS at their campus;</li>
            <li>Potential learning opportunities for VMLS students at select foreign universities that JGLS has formal MoUs with, subject to applicable terms and conditions.</li>
          </ul>

          <p className="font-inter text-gray-700 leading-relaxed text-base md:text-lg text-justify">
            These are some of the identified and agreed upon areas where the current mentorship framework comes to the aid of VMLS students in their learning and progression. We are also exploring further means and mechanisms within the extremely supportive environment offered by JGLS for VMLS' growth and expansion, for the benefit of our students and faculty.
          </p>
        </div>
      </section>

      {/* Sri Ragini Dharmasthaapanam Section */}
      <section className="py-8 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/collab/mou-sri-ragini-dharmasthaapanam.jpg"
                alt="Sri Ragini Dharmasthaapanam Collaboration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 w-full">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-4">
              Sri Ragini Dharmasthaapanam
            </h2>
            <div className="space-y-4 font-inter text-gray-700 leading-relaxed text-base md:text-lg text-justify">
              <p>
                Vinayaka Mission's Law School proudly reports the successful signing of a Memorandum of Understanding (MoU) with Sri Ragini Dharmasthaapanam and the Centre for Access to Justice on 25th February 2026 at Chennai. This strategic collaboration reinforces a shared commitment to promoting legal literacy, constitutional awareness, and meaningful access to justice.
              </p>
              <p>
                The MoU envisions joint legal aid and community outreach programmes, internship and clinical legal education opportunities, and initiatives supporting vulnerable communities. It also encourages collaborative research, publications, and policy advocacy to further constitutional values and social justice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RWU Law Section */}
      <section className="py-8 px-[5%] bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12 mb-12">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/collab/MOU_RWU_MAIN.JPG"
                alt="RWU Law Collaboration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 w-full">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-4">
              VMLS Signs International MoU with Roger Williams University School of Law (RWU Law)
            </h2>
            <div className="space-y-4 font-inter text-gray-700 leading-relaxed text-base md:text-lg text-justify">
              <p>
                Vinayaka Mission's Law School (VMLS) is pleased to announce the signing of an International Memorandum of Understanding (MoU) with Roger Williams University School of Law (RWU Law), marking a significant milestone in its pursuit of global academic collaboration.
              </p>
              <p>
                The MoU seeks to foster meaningful engagement between the two institutions by promoting international exposure, academic collaboration, and cross-cultural learning opportunities for students and faculty. Through this partnership, both institutions aim to facilitate joint academic initiatives, knowledge exchange, and collaborative programmes that enhance legal education and research.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Images Gallery */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[250px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/collab/MOU_RWU_INNER.JPG"
              alt="RWU Law Collaboration Signing Event"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative h-[250px] md:h-[350px] w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
            <Image
              src="/images/collab/MoU RWU Law INNER.JPG"
              alt="RWU Law Collaboration Signing Event"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Additional Text */}
        <div className="max-w-7xl mx-auto mt-12 font-inter text-gray-700 leading-relaxed text-base md:text-lg text-center md:text-left text-justify">
          <p>
            This collaboration is expected to open avenues for faculty interactions, student exchanges, and shared academic activities, thereby enriching the overall learning experience. It also reflects VMLS's commitment to integrating global perspectives into its academic framework.
          </p>
        </div>
      </section>

      {/* University of San Diego Section */}
      <section className="py-8 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/collab/MoU with San Dieago 2.jpg"
                alt="University of San Diego Collaboration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 w-full">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#800000] mb-4">
              VMLS Signs International MoU with University of San Diego to Foster Global Legal Education
            </h2>
            <div className="space-y-4 font-inter text-gray-700 leading-relaxed text-base text-justify">
              <p>
                Vinayaka Mission's Law School (VMLS) marked a significant milestone in its journey towards global academic engagement with the signing of an International Memorandum of Understanding (MoU) with the University of San Diego, School of Law on 20 January 2026.
              </p>
              <p>
                This strategic collaboration aims to establish a robust platform for academic cooperation, international exposure, and cross-cultural learning. The MoU is designed to benefit students and faculty members of both institutions through opportunities such as academic collaboration, knowledge exchange, joint initiatives, and global learning experiences, thereby strengthening VMLS's international academic footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seattle University Section */}
      <section className="py-8 px-[5%] bg-gray-50 mb-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative h-[300px] md:h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/collab/institutional-collaboration-1-1-scaled-1-2048x1097.webp"
                alt="Seattle University Collaboration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          
          {/* Text Content */}
          <div className="lg:w-1/2 w-full overflow-hidden">
            <h2 className="font-playfair text-[22px] sm:text-2xl md:text-3xl lg:text-[28px] xl:text-4xl font-bold text-[#800000] mb-4 whitespace-nowrap">
              Seattle University in Washington, U.S.
            </h2>
            <div className="space-y-4 font-inter text-gray-700 leading-relaxed text-base text-justify">
              <p>
                On December 7, 2022, Vinayaka Mission's Research Foundation, deemed to be University and Seattle University in Washington, U.S., signed a Memorandum of Understanding (MOU) with the aim of promoting cultural, educational, and scientific collaborations between the two institutions. The MOU includes provisions for joint research activities, publications, and library exchanges, as well as programs for study or service. It also allows for the exchange of faculty members and students for study, teaching, and research, and invites scholars to participate in conferences, lectures, and seminars.
              </p>
              <p>
                The MOU was signed by Professor Eduardo Peñalver, President of Seattle University, and Dr. P.K. Sudhir, Vice-Chancellor of Vinayaka Mission's Research Foundation, in the presence of Dr. A.S. Ganesan, Chancellor, Dr. Anuradha Ganesan, Director, Mr. Suresh Samuel, Member, Board of Management, and Dr. J. Sabarinathan, Director of Academics. Other participants in the event included Prof. Dr. Raj Kumar, Founding Vice-Chancellor of O.P. Jindal Global University (OPJGU), and Dr. A. Francis Julian, Chairperson of the Strategic Advisory Committee of Vinayaka Mission's Law School (VMLS).
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
