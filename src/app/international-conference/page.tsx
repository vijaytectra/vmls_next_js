import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "International Conference | Vinayaka Mission's Law School",
  description: "Join the International Conference at Vinayaka Mission's Law School (VMLS) to explore global legal perspectives.",
};

export default function InternationalConferencePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow">
        {/* Breadcrumb */}
        <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
            <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
            <span className="text-gray-300 font-light">/</span>
            <span className="text-[#a31f34] font-semibold">International Conference</span>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative px-[5%] py-12 md:py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/collab/img5.webp"
              alt="International Conference at VMLS"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 text-white drop-shadow-lg">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#fbb03b]"></div>
              <div className="pl-6 md:pl-10">
                <h1 className="font-playfair text-2xl md:text-3xl lg:text-5xl mb-6 leading-tight font-bold">
                  International Conference
                </h1>
                <p className="font-inter text-lg md:text-xl text-gray-100 max-w-2xl leading-relaxed font-medium">
                  Fostering global dialogues and academic exchange in the field of law.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Aims and Scope Section */}
        <section className="pt-8 pb-2 px-[5%] bg-white border-b border-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-4">
              Aims and scope of the International Conference
            </h2>
            <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-justify">
              Rivers are lifelines of ecosystems, economies, and cultures across the globe. Their management and governance are influenced by a complex interplay of political, social, economic, and legal factors. This international conference aims to foster interdisciplinary dialogue and collaboration on the issues surrounding rivers, focusing on the socio-legal aspects that are crucial for their sustainable use and management. By bringing together scholars, experts, practitioners, and indigenous voices, we seek to explore the multifaceted dimensions of river governance from local to global scales.
            </p>
          </div>
        </section>

        {/* About VMLS Section */}
        <section className="pt-4 pb-2 px-[5%] bg-[#f8f9fa] overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side: Circular Image */}
            <div className="flex-1 w-full flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[350px] aspect-square rounded-full overflow-hidden shadow-xl">
                <Image
                  src="/images/career-about-img.webp"
                  alt="VMLS Building"
                  fill
                  sizes="(max-width: 768px) 100vw, 350px"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex-[1.5]">
              <div className="relative">
                {/* Vertical Accent Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#a31f34]"></div>
                
                <div className="pl-6 md:pl-8">
                  <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl text-[#800000] mb-4 leading-tight font-bold">
                    About VMLS
                  </h2>
                  
                  <div className="space-y-4">
                    <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                      Vinayaka Mission's Law School (VMLS) has been established by VMRF-DU to impart legal education and skills relevant to the evolving needs of the local, national and global community. VMLS intends to achieve this vision through its highly qualified and experienced faculty, and with mentorship from Jindal Global Law School and O.P. Jindal Global University. 
                    </p>
                    <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                      Our faculty aims to create a progressive learning environment where they teach law courses prescribed by the Bar Council of India, as well as Elective Courses to address legal issues of a dynamic society and an ever-changing world.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Knowledge Partners Section */}
        <section className="pt-6 pb-2 px-[5%] bg-white border-b border-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="md:w-1/3">
                <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#1a1a1a] leading-tight text-center md:text-left">
                  Our Knowledge Partners
                </h2>
                <div className="w-16 h-1 bg-[#a31f34] mt-2 mx-auto md:mx-0"></div>
              </div>
              <div className="md:w-2/3 w-full">
                <div className="relative h-16 md:h-20 lg:h-24 w-full">
                  <Image
                    src="/images/conf/partners.webp"
                    alt="Our Knowledge Partners"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CPIL Section */}
        <section className="pt-4 pb-2 px-[5%] bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-3">
                About Centre for the Promotion of International Law (CPIL)
              </h2>
              <div className="w-16 h-1 bg-[#fbb03b] mx-auto"></div>
            </div>

            {/* CPIL Image */}
            <div className="relative w-full aspect-[21/9] mb-8 overflow-hidden shadow-md border border-gray-100">
              <Image
                src="/images/collab/cpil.webp"
                alt="CPIL at VMLS"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* CPIL Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  The Centre for the Promotion of International Law is dedicated to promoting excellence in research and teaching of International Law, a field that has gained unprecedented significance in today's world. Additionally, the Centre operates an E-Journal, which features original work focusing on contemporary issues in International Law. 
                </p>
                <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  The intersection of international law, research, and policy is a critical intersection where legal principles, academic research, and governmental or organizational decision-making come together. The study of this convergence is particularly significant in the context of global governance, diplomacy, and addressing complex transnational issues.
                </p>
              </div>
              <div className="space-y-4">
                <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  The Centre fosters academic research in international relations, law, and related fields to contribute to the development and understanding of international law. CPIL works to promote the confluence of international law, research, and policy as being essential for addressing global issues, promoting cooperation among nations, and ensuring that international agreements and legal principles are effective in practice. 
                </p>
                <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                  The research at the Centre helps to identify gaps and challenges in existing legal frameworks, assess the effectiveness of international agreements, and propose innovative solutions. The Centre's recent work delves into teaching and researching international law, human rights, environmental protection, trade, and conflict resolution, providing valuable insights and analysis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sub Themes Section */}
        <section className="pt-4 pb-4 px-[5%] bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-6">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-3">
                Sub Themes
              </h2>
              <div className="w-16 h-1 bg-[#fbb03b] mx-auto mb-4"></div>
              <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                We welcome abstracts and full length quality research papers on the broad theme of Rivers. The below mentioned are few sub themes which may be considered. Please note that this is not an exhaustive list of topics. You are welcome to submit abstracts on any topic of your interest as long as it falls within an area of concern on River.
              </p>
            </div>

            {/* Themes Grid */}
            <div className="space-y-1">
              {/* Row 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
                <div className="bg-[#800000] text-white p-3 flex items-center justify-center text-center font-inter min-h-[60px] text-sm">
                  Historical Narratives and River Security
                </div>
                <div className="bg-gray-300 text-[#1a1a1a] p-3 flex items-center justify-center text-center font-inter min-h-[60px] text-sm">
                  Transboundary River Governance
                </div>
                <div className="bg-gray-300 text-[#1a1a1a] p-3 flex items-center justify-center text-center font-inter min-h-[60px] text-sm">
                  International Law and Emerging Challenges
                </div>
                <div className="bg-gray-300 text-[#1a1a1a] p-3 flex items-center justify-center text-center font-inter min-h-[60px] text-sm">
                  Climate Resilience and River Resource Management
                </div>
              </div>

              {/* Highlighted Detail Bar */}
              <div className="bg-[#800000] text-white p-4">
                <ul className="list-disc pl-8 space-y-1 font-inter text-sm md:text-base">
                  <li>Case studies of historical river management practices.</li>
                  <li>Implications of past practices for contemporary river governance.</li>
                </ul>
              </div>

              {/* Remaining Rows */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
                {[
                  "Cross-border River Conflicts and Cooperation",
                  "River Diplomacy",
                  "Aligning River Policies with SDGs",
                  "Legal Frameworks for Indigenous Rights",
                  "Gender and River Governance",
                  "Community Participation in River Policy",
                  "Human Rights and Access to Clean Water",
                  "Environmental Justice in River Basin",
                  "Legal Responses to Pollution and Industrial Use of Rivers",
                  "Cultural Heritage and River Law",
                  "Water Privatization and Public Rights",
                  "Implementing International Water Law at the Local Level"
                ].map((theme, index) => (
                  <div key={index} className="bg-gray-300 text-[#1a1a1a] p-3 flex items-center justify-center text-center font-inter min-h-[60px] text-sm hover:bg-gray-400 transition-colors cursor-default">
                    {theme}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Submission Guidelines Section */}
        <section className="py-10 px-[5%] bg-white">
          <div className="max-w-7xl mx-auto">
            {/* Abstract Submission Guidelines */}
            <div className="flex flex-col lg:flex-row items-center gap-12 mb-10">
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group transition-transform duration-500 hover:-translate-y-2">
                  <Image
                    src="/images/conf/abstract-guidelines.png"
                    alt="Guidelines for Abstract Submission"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full">
                <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-4 leading-tight">
                  Guidelines for Abstract Submission
                </h2>
                <div className="space-y-1 font-inter text-lg text-gray-700 leading-relaxed text-justify">
                  <p>
                    Authors should write an abstract between 250 to 300 words relating to the themes of the Conference.
                  </p>
                  <p>
                    The abstract should include a suitable title for the paper, three to five keywords, the name of the author(s), and their affiliation.
                  </p>
                  <p>
                    The abstract should be coherent and free of grammatical errors.
                  </p>
                </div>
              </div>
            </div>

            {/* Full Paper Submission Guidelines */}
            <div className="pt-6 border-t border-gray-100">
              <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-4 leading-tight">
                Guidelines for Full Paper Submission upon selection of Abstract
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 font-inter text-base md:text-lg text-gray-700 leading-relaxed text-justify">
                <div className="space-y-1">
                  <p>
                    The main text of the full paper should be written in <span className="font-semibold text-gray-900">Times New Roman font size 12</span>, with 1.5 line spacing, and footnotes in Times New Roman font size 10, with a line spacing of 1.0.
                  </p>
                  <p>
                    All the headings should be numbered and written in 12 points. Each main heading (first level) should be capitalized, bold, and centre-aligned. The second-level heading should be in title case, bold, and left-aligned. The third level heading should be in title case and left-aligned.
                  </p>
                  <p>
                    Authors should follow the <span className="font-semibold text-gray-900">APA Style</span> mode of citation throughout the paper.
                  </p>
                </div>
                
                <div className="space-y-1">
                  <p>
                    The word limit for the full papers should remain between <span className="font-semibold text-gray-900">5000-6000 words</span>, including footnotes (excluding abstract and bibliography).
                  </p>
                  <p>
                    All the authors shall give an undertaking that the plagiarism of the paper is below the permissible limit of <span className="font-semibold text-gray-900">15%</span>.
                  </p>
                  <p>
                    Research should be an original work of the author and must not have been submitted or accepted for publication.
                  </p>
                </div>
              </div>

              {/* Additional Formatting Guidelines */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-playfair text-lg md:text-xl font-bold text-gray-900 mb-3">
                  Authors should strictly adhere to the following formatting guidelines:
                </h3>
                <ul className="list-disc pl-6 space-y-2 font-inter text-base md:text-lg text-gray-700">
                  <li>Do not use abbreviations without prior explaining the terms.</li>
                  <li>Do not use bold and/or underlining to highlight the text.</li>
                  <li>Use single quotes to emphasize a word or phrase.</li>
                  <li>Tables and charts should be centre-aligned if used.</li>
                </ul>
              </div>

              {/* Peer Review & Publication Ethics Links */}
              <div className="mt-8 flex flex-col md:flex-row items-stretch border-t border-gray-100">
                <div className="flex-1 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 md:pr-8 lg:pr-12">
                  <h4 className="font-playfair text-lg md:text-xl font-bold text-gray-900 leading-tight text-center sm:text-left max-w-xs">
                    Peer Review Process for Conference Proceedings
                  </h4>
                  <a 
                    href="/images/conf/Peer Review Process for Conference Proceedings.docx" 
                    download 
                    className="whitespace-nowrap px-8 py-3 bg-[#800000] text-white font-inter text-sm font-bold uppercase tracking-wider rounded-none transition-all duration-300 hover:bg-[#a31f34] hover:shadow-lg"
                  >
                    Know More
                  </a>
                </div>
                
                <div className="hidden md:block w-px bg-gray-200"></div>
                
                <div className="flex-1 py-6 flex flex-col sm:flex-row items-center justify-between gap-6 md:pl-8 lg:pl-12 border-t md:border-t-0 border-gray-100">
                  <h4 className="font-playfair text-lg md:text-xl font-bold text-gray-900 leading-tight text-center sm:text-left">
                    Publication Ethics
                  </h4>
                  <a 
                    href="/images/conf/Publication Ethics.docx" 
                    download 
                    className="whitespace-nowrap px-8 py-3 bg-[#800000] text-white font-inter text-sm font-bold uppercase tracking-wider rounded-none transition-all duration-300 hover:bg-[#a31f34] hover:shadow-lg"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deadlines, Accommodation & Registration Section */}
        <section className="py-8 px-[5%] bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Important Deadlines */}
            <div className="mb-6">
              <div className="text-center mb-4">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#800000] mb-3">
                  Important Deadlines
                </h2>
                <div className="w-16 h-1 bg-[#fbb03b] mx-auto"></div>
              </div>
              
              <div className="max-w-4xl mx-auto overflow-hidden rounded-xl shadow-xl bg-white border border-gray-100">
                <div className="grid grid-cols-1 divide-y divide-gray-100">
                  <div className="flex flex-col sm:flex-row items-center justify-between p-3 px-6 hover:bg-gray-50 transition-colors">
                    <span className="font-inter font-bold text-[#1a1a1a] text-base mb-1 sm:mb-0">Abstract Submission</span>
                    <span className="font-inter text-[#800000] font-bold text-lg bg-[#800000]/5 px-4 py-1 rounded-full">5th August 2024</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between p-3 px-6 hover:bg-gray-50 transition-colors">
                    <span className="font-inter font-bold text-[#1a1a1a] text-base mb-1 sm:mb-0">Notification of Acceptance</span>
                    <span className="font-inter text-[#800000] font-bold text-lg bg-[#800000]/5 px-4 py-1 rounded-full">10th August 2024</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between p-3 px-6 hover:bg-gray-50 transition-colors">
                    <span className="font-inter font-bold text-[#1a1a1a] text-base mb-1 sm:mb-0">Final Submission</span>
                    <span className="font-inter text-[#800000] font-bold text-lg bg-[#800000]/5 px-4 py-1 rounded-full">30th September 2024</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between p-4 px-6 bg-[#800000] text-white">
                    <span className="font-inter font-bold text-base mb-1 sm:mb-0">Submission Email ID</span>
                    <a href="mailto:riverconf2024@vmls.edu.in" className="font-inter font-bold text-lg hover:underline underline-offset-4">riverconf2024@vmls.edu.in</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Accommodation and Travel */}
              <div className="relative p-6 bg-white rounded-2xl shadow-lg border-t-4 border-[#800000] h-full flex flex-col justify-center">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#800000] mb-4">
                  Accommodation and Travel
                </h2>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <p className="font-inter text-lg text-gray-700 font-medium">
                    Details shall be shared upon abstract selection.
                  </p>
                </div>
              </div>

              {/* Registration */}
              <div className="relative p-6 bg-white rounded-2xl shadow-lg border-t-4 border-[#fbb03b] h-full">
                <h2 className="font-playfair text-xl md:text-2xl font-bold text-[#800000] mb-4">
                  Registration Fees
                </h2>
                <div className="space-y-3 font-inter text-sm md:text-base">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-50">
                    <span className="text-gray-700 font-medium">International Participants</span>
                    <span className="font-bold text-[#800000] text-lg">$100</span>
                  </div>
                  <div className="flex justify-between items-start pb-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium max-w-[200px]">Indian Participants</span>
                    <span className="font-bold text-[#800000] text-lg">₹1500/-</span>
                  </div>
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Students (UG/PG)</span>
                    <span className="font-bold text-[#800000] text-lg">₹1000/-</span>
                  </div>
                  <p className="text-sm text-gray-500 italic pt-4">
                    * Co-authors need to register separately. Registration payment details to be shared upon selection of abstracts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
