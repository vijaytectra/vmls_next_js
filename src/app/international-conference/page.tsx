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
            <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-left sm:text-justify">
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
                    <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-left sm:text-justify">
                      Vinayaka Mission's Law School (VMLS) has been established by VMRF-DU to impart legal education and skills relevant to the evolving needs of the local, national and global community. VMLS intends to achieve this vision through its highly qualified and experienced faculty, and with mentorship from Jindal Global Law School and O.P. Jindal Global University. 
                    </p>
                    <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-left sm:text-justify">
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
        <section className="pt-8 pb-8 px-[5%] bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-[2px] bg-[#a31f34]"></div>
                <span className="text-[#a31f34] uppercase tracking-[0.2em] text-xs font-bold">Research & Excellence</span>
                <div className="w-8 h-[2px] bg-[#a31f34]"></div>
              </div>
              <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 leading-tight">
                About the Centre for the Promotion of International Law (CPIL)
              </h2>
            </div>

            {/* CPIL Image */}
            <div className="relative w-full aspect-[16/7] md:aspect-[21/9] mb-10 overflow-hidden rounded-2xl shadow-xl border border-gray-100/70 group">
              <Image
                src="/images/collab/cpil.webp"
                alt="CPIL at VMLS"
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <p className="text-white font-inter text-sm md:text-base font-semibold">Commemorating academic milestones and active research at VMLS</p>
              </div>
            </div>

            {/* CPIL Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card 1: Promoting Excellence */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#a31f34] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-xl text-[#a31f34] group-hover:bg-[#a31f34] group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-inter text-lg font-bold text-gray-900 group-hover:text-[#a31f34] transition-colors">Research & Teaching Excellence</h3>
                <p className="font-inter text-gray-600 text-sm sm:text-base leading-relaxed text-left sm:text-justify">
                  The Centre is dedicated to promoting excellence in research and teaching of International Law, a field that has gained unprecedented significance in today's world. Additionally, the Centre operates an E-Journal, which features original work focusing on contemporary issues in International Law.
                </p>
              </div>

              {/* Card 2: Research & Policy Confluence */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#a31f34] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-xl text-[#a31f34] group-hover:bg-[#a31f34] group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="font-inter text-lg font-bold text-gray-900 group-hover:text-[#a31f34] transition-colors">Research & Policy Confluence</h3>
                <p className="font-inter text-gray-600 text-sm sm:text-base leading-relaxed text-left sm:text-justify">
                  The intersection of international law, research, and policy is a critical junction where legal principles, academic research, and organizational decision-making come together. The study of this convergence is key for global governance and diplomacy.
                </p>
              </div>

              {/* Card 3: Academic Contribution */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#a31f34] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-xl text-[#a31f34] group-hover:bg-[#a31f34] group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <h3 className="font-inter text-lg font-bold text-gray-900 group-hover:text-[#a31f34] transition-colors">Academic & Global Impact</h3>
                <p className="font-inter text-gray-600 text-sm sm:text-base leading-relaxed text-left sm:text-justify">
                  The Centre fosters academic research in international relations, law, and related fields to contribute to the understanding of international law, ensuring that international agreements and legal principles are effective in practice.
                </p>
              </div>

              {/* Card 4: Contemporary Solutions */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#a31f34] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-xl text-[#a31f34] group-hover:bg-[#a31f34] group-hover:text-white transition-all duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-inter text-lg font-bold text-gray-900 group-hover:text-[#a31f34] transition-colors">Addressing Contemporary Challenges</h3>
                <p className="font-inter text-gray-600 text-sm sm:text-base leading-relaxed text-left sm:text-justify">
                  Our research identifies gaps in existing frameworks, assesses agreement effectiveness, and proposes innovative solutions across human rights, environmental protection, trade, and conflict resolution.
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
              <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-left sm:text-justify">
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
        <section className="pt-2 pb-3 md:pt-4 md:pb-4 px-[5%] bg-[#fafafa]">
          <div className="max-w-7xl mx-auto">
            {/* Abstract Submission Guidelines */}
            <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16 mb-8 md:mb-10">
              <div className="lg:w-1/2 w-full flex flex-col justify-center">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] group transition-transform duration-500 hover:-translate-y-2 w-full">
                  <Image
                    src="/images/conf/abstract-guidelines.png"
                    alt="Guidelines for Abstract Submission"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full flex flex-col justify-center space-y-6 md:space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-[2px] bg-[#a31f34]"></div>
                    <span className="text-[#a31f34] uppercase tracking-[0.2em] text-xs font-bold">
                      Abstract Guidelines
                    </span>
                  </div>
                  <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 leading-tight">
                    Guidelines for Abstract Submission
                  </h2>
                </div>

                <div className="space-y-4">
                  {[
                    { title: "Abstract Word Count", text: "Authors should write an abstract between 250 to 300 words relating to the themes of the Conference." },
                    { title: "Essential Inclusions", text: "The abstract must include a suitable title for the paper, three to five keywords, the name of the author(s), and their institutional affiliation." },
                    { title: "Coherency & Quality", text: "The abstract should be well-structured, coherent, academic in tone, and completely free of grammatical or typographical errors." }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                      <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#a31f34] opacity-70 group-hover:opacity-100 transition-opacity"></div>
                      <h3 className="font-inter font-bold text-[#1a1a1a] text-base mb-1.5">{item.title}</h3>
                      <p className="font-inter text-gray-600 md:text-base leading-relaxed text-left sm:text-justify">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Full Paper Submission Guidelines */}
            <div className="pt-8 md:pt-10 border-t border-gray-200">
              <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-[2px] bg-[#a31f34]"></div>
                  <span className="text-[#a31f34] uppercase tracking-[0.2em] text-xs font-bold">Full Paper Requirements</span>
                  <div className="w-8 h-[2px] bg-[#a31f34]"></div>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl text-gray-900 leading-tight">
                  Guidelines for Full Paper Submission
                </h2>
                <p className="text-gray-500 font-inter text-sm md:text-base mt-3">Upon successful acceptance and selection of the submitted abstract</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                {/* Card 1: Formatting & Font */}
                <div className="bg-white p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4">
                  <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-lg text-[#a31f34] font-bold text-xl font-inter">01</div>
                  <h3 className="font-inter text-base md:text-lg font-bold text-gray-900">Typography & Formatting</h3>
                  <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed text-left sm:text-justify">
                    The main text of the full paper should be written in <span className="font-semibold text-gray-900">Times New Roman font size 12</span>, with 1.5 line spacing. Footnotes must be in Times New Roman font size 10, with a line spacing of 1.0.
                  </p>
                </div>

                {/* Card 2: Word Limit & Originality */}
                <div className="bg-white p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4">
                  <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-lg text-[#a31f34] font-bold text-xl font-inter">02</div>
                  <h3 className="font-inter text-base md:text-lg font-bold text-gray-900">Word Limit & Originality</h3>
                  <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed text-left sm:text-justify">
                    The word limit for the full papers should remain between <span className="font-semibold text-gray-900">5000-6000 words</span>, including footnotes (excluding abstract and bibliography). Research should be an original work of the author and must not have been submitted elsewhere.
                  </p>
                </div>

                {/* Card 3: Plagiarism & Citations */}
                <div className="bg-white p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col space-y-4">
                  <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-lg text-[#a31f34] font-bold text-xl font-inter">03</div>
                  <h3 className="font-inter text-base md:text-lg font-bold text-gray-900">Plagiarism & Citations</h3>
                  <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed text-left sm:text-justify">
                    All authors shall give an undertaking that the plagiarism of the paper is below the permissible limit of <span className="font-semibold text-gray-900">15%</span>. Authors should strictly follow the <span className="font-semibold text-gray-900">APA Style</span> mode of citation throughout the paper.
                  </p>
                </div>

                {/* Card 4: Headings Hierarchy */}
                <div className="bg-white p-5 sm:p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 md:col-span-2 lg:col-span-3 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center">
                  <div className="w-12 h-12 bg-red-50 flex items-center justify-center rounded-lg text-[#a31f34] font-bold text-xl font-inter flex-shrink-0">04</div>
                  <div className="space-y-3 flex-grow">
                    <h3 className="font-inter text-base md:text-lg font-bold text-gray-900">Headings & Styling Structure</h3>
                    <p className="font-inter text-gray-600 text-sm md:text-base leading-relaxed text-left sm:text-justify">
                      All headings should be numbered. The <span className="font-semibold text-gray-900">first-level heading</span> (main heading) should be in all-caps, bold, and centre-aligned. The <span className="font-semibold text-gray-900">second-level heading</span> should be in title case, bold, and left-aligned. The <span className="font-semibold text-gray-900">third-level heading</span> should be in title case and left-aligned.
                    </p>
                  </div>
                </div>
              </div>

              {/* Strict Formatting Guidelines Alert Block */}
              <div className="mt-4 md:mt-4 bg-red-50/40 border border-red-100/70 p-5 md:p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-2 h-2 rounded-full bg-[#a31f34]"></span>
                  <h3 className="font-playfair text-lg md:text-xl font-bold text-[#a31f34] tracking-wide">
                    Strict Formatting Rules & Guidelines
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Abbreviations", text: "Do not use abbreviations without prior explaining the terms." },
                    { title: "No Body Highlighting", text: "Do not use bold and/or underlining to highlight the text in the paper." },
                    { title: "Quotation Style", text: "Use single quotes to emphasize a specific word or phrase." },
                    { title: "Tables & Charts", text: "All tables and charts should be perfectly centre-aligned if used." }
                  ].map((rule, idx) => (
                    <div key={idx} className="bg-white/80 p-4 sm:p-5 border border-red-50 hover:shadow-md transition-shadow">
                      <span className="font-inter text-[10px] text-[#a31f34] uppercase font-bold tracking-widest block mb-2">Rule {idx + 1}</span>
                      <h4 className="font-inter font-bold text-gray-800 text-sm mb-1">{rule.title}</h4>
                      <p className="font-inter text-gray-600 text-xs md:text-sm leading-relaxed">{rule.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Peer Review & Publication Ethics Links */}
              <div className="mt-4 md:mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {/* Banner 1 */}
                <div className="bg-white p-5 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#a31f34]"></div>
                  <h4 className="font-inter text-base md:text-lg font-bold text-gray-900 leading-tight">
                    Peer Review Process for Conference Proceedings
                  </h4>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
                    <span className="text-gray-400 font-inter text-xs">Official Document (DOCX)</span>
                    <a 
                      href="/images/conf/Peer Review Process for Conference Proceedings.docx" 
                      download 
                      className="w-full sm:w-auto text-center px-6 py-2.5 bg-[#800000] text-white font-inter text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#a31f34] hover:shadow-lg"
                    >
                      Download & Read
                    </a>
                  </div>
                </div>
                
                {/* Banner 2 */}
                <div className="bg-white p-5 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between gap-6 relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[#a31f34]"></div>
                  <h4 className="font-inter text-base md:text-lg font-bold text-gray-900 leading-tight">
                    Publication Ethics & Standards
                  </h4>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
                    <span className="text-gray-400 font-inter text-xs">Official Document (DOCX)</span>
                    <a 
                      href="/images/conf/Publication Ethics.docx" 
                      download 
                      className="w-full sm:w-auto text-center px-6 py-2.5 bg-[#800000] text-white font-inter text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#a31f34] hover:shadow-lg"
                    >
                      Download & Read
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deadlines, Accommodation & Registration Section */}
        <section className="pt-2 pb-8 px-[5%] bg-gray-50">
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
                  <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 px-4 sm:px-6 hover:bg-gray-50 transition-colors text-center sm:text-left">
                    <span className="font-inter font-bold text-[#1a1a1a] text-sm sm:text-base mb-1.5 sm:mb-0">Abstract Submission</span>
                    <span className="font-inter text-[#800000] font-bold text-base sm:text-lg bg-[#800000]/5 px-4 py-1 rounded-full">5th August 2024</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 px-4 sm:px-6 hover:bg-gray-50 transition-colors text-center sm:text-left">
                    <span className="font-inter font-bold text-[#1a1a1a] text-sm sm:text-base mb-1.5 sm:mb-0">Notification of Acceptance</span>
                    <span className="font-inter text-[#800000] font-bold text-base sm:text-lg bg-[#800000]/5 px-4 py-1 rounded-full">10th August 2024</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 px-4 sm:px-6 hover:bg-gray-50 transition-colors text-center sm:text-left">
                    <span className="font-inter font-bold text-[#1a1a1a] text-sm sm:text-base mb-1.5 sm:mb-0">Final Submission</span>
                    <span className="font-inter text-[#800000] font-bold text-base sm:text-lg bg-[#800000]/5 px-4 py-1 rounded-full">30th September 2024</span>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center justify-between p-4 px-4 sm:px-6 bg-[#800000] text-white text-center sm:text-left">
                    <span className="font-inter font-bold text-sm sm:text-base mb-1.5 sm:mb-0">Submission Email ID</span>
                    <a href="mailto:riverconf2024@vmls.edu.in" className="font-inter font-bold text-sm sm:text-base md:text-lg hover:underline underline-offset-4 break-all">riverconf2024@vmls.edu.in</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Accommodation and Travel */}
                <div className="relative p-5 md:p-6 bg-white rounded-2xl shadow-lg border-t-4 border-[#800000] h-full flex flex-col justify-center">
                  <h2 className="font-playfair text-lg md:text-xl font-bold text-[#800000] mb-4">
                    Accommodation and Travel
                  </h2>
                  <div className="flex items-center gap-3 p-3.5 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#800000]/10 flex items-center justify-center text-[#800000] flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="font-inter text-sm md:text-base text-gray-700 font-medium leading-normal">
                      Details shall be shared upon abstract selection.
                    </p>
                  </div>
                </div>

                {/* Registration */}
                <div className="relative p-5 md:p-6 bg-white rounded-2xl shadow-lg border-t-4 border-[#fbb03b] h-full">
                  <h2 className="font-playfair text-lg md:text-xl font-bold text-[#800000] mb-4">
                    Registration Fees
                  </h2>
                  <div className="space-y-2.5 font-inter text-xs md:text-sm">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">International Participants</span>
                      <span className="font-bold text-[#800000] text-base">$100</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Indian Participants</span>
                      <span className="font-bold text-[#800000] text-base">₹1500/-</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-gray-700 font-medium">Students (UG/PG)</span>
                      <span className="font-bold text-[#800000] text-base">₹1000/-</span>
                    </div>
                    <p className="text-[11px] md:text-xs text-gray-500 italic pt-2 leading-relaxed">
                      * Co-authors need to register separately. Registration payment details to be shared upon selection of abstracts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
