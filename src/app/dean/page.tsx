import Image from "next/image";
import Link from "next/link";

export default function DeanPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">Home</Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Executive Dean</span>
        </div>
      </nav>
      <hr className="border-gray-100" />

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute bottom-0 left-0 w-full max-w-2xl md:max-w-3xl lg:max-w-4xl h-[45%] md:h-[55%] opacity-40 hidden lg:block z-0">
          <Image
            src="/images/vmrf/bg-chancellor.png"
            alt=""
            fill
            sizes="(max-width: 1024px) 90vw, 60vw"
            className="object-contain object-left-bottom"
          />
        </div>

      {/* Hero Section */}
      <section className="pb-12 md:pb-16 pt-8 md:pt-12 px-[5%] overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Side: Dean Image */}
          <div className="lg:w-[35%] w-full order-1 flex justify-center items-center">
            <div className="relative w-[65%] max-w-[240px] md:w-full md:max-w-[340px] aspect-[3/4] shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-2">
              <div className="relative w-full h-full overflow-hidden">
                <Image 
                  src="/images/faculty/live/DSC00716_19.webp" 
                  alt="Mr. Siddharth Raja, Executive Dean" 
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Side: Dean Content */}
          <div className="lg:w-[65%] order-2 flex flex-col justify-center">
            <h3 className="text-[#a31f34] uppercase tracking-[0.2em] text-sm font-bold mb-4">Leadership</h3>
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-8 leading-tight">
              Mr. Siddharth Raja
            </h1>
            
            <div className="space-y-8">
              <h4 className="font-inter text-xl md:text-2xl font-bold tracking-tight text-gray-800">
                Executive Dean, VMLS
              </h4>

              {/* Highlighted Intro Paragraph */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
                <p className="pl-6 md:pl-8 font-inter text-lg md:text-xl text-gray-800 leading-relaxed font-medium italic">
                  Siddharth has a deep and abiding passion in academia – where he combines his rich practical expertise and experience gleaned over a three-decade old corporate law career, with a sharp and incisive doctrinal teaching excellence. His appointment as Dean of Vinayaka Mission&apos;s Law School marks a high point in his journey in academia.
                </p>
              </div>

              {/* Standard Paragraphs */}
              <div className="space-y-6">
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  A seasoned corporate lawyer and public intellectual, Siddharth has over 28 years focused his practice on private equity and venture capital transactions (both inbound and outbound); foreign-exchange law and enforcement, as well as related regulatory, compliance, and adjudicatory aspects); and on cross-border and domestic mergers and acquisitions. He has been highly ranked for several years, including by Chambers &amp; Partners – lauded for his &quot;global business perspective&quot;, &quot;attention to detail&quot; and &quot;excellent technical knowledge&quot;.
                </p>
                <p className="font-inter text-lg text-gray-700 leading-relaxed">
                  A Gold Medalist with a B.A., LL.B. (Hons.) law degree from the prestigious National Law School of India University (NLSIU), Siddharth also holds a Masters in Law from the University of Warwick Law School, where he was a British Council &amp; Foreign and Commonwealth Office Chevening, and J. N. Tata, Scholar. Siddharth is admitted to the rolls of the Law Society of England &amp; Wales as a Solicitor.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* About the Dean Section */}
      <section className="px-[5%] py-12 md:py-16 animate-fade-in-up relative z-10" style={{ animationDelay: '0.1s' }}>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white p-6 md:p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden group transition-all duration-500 hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.16)] hover:-translate-y-1">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#a31f34] opacity-[0.03] rounded-full -translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-[0.05]"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#a31f34] opacity-[0.02] rounded-full transition-transform duration-700 group-hover:scale-110 group-hover:opacity-[0.04]"></div>
            
            {/* Large Quote Mark */}
            <div className="absolute top-8 right-12 text-9xl font-serif text-[#a31f34] opacity-[0.07] select-none transition-all duration-700 group-hover:-translate-y-2 group-hover:opacity-[0.12]">&quot;</div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10 transition-transform duration-500 group-hover:translate-x-2">
                <div className="w-16 h-[2px] bg-[#a31f34]"></div>
                <h4 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] italic">
                  About the Dean
                </h4>
              </div>
              
              <div className="space-y-8 font-inter text-lg md:text-xl text-gray-700 leading-relaxed italic">
                <p>
                  Siddharth merged (in December 2022), his corporate / commercial law and M&amp;A / PE-VC practices and team with, and became a Senior Partner at, the pan-India niche, but full-service, law Firm VERTICES PARTNERS. In July 2019, Siddharth had co-founded the Bangalore-headquartered law firm, Saakshya Law; his fourth entrepreneurial law practice venture.
                </p>
                <p>
                  Siddharth previously co-founded Narasappa, Doraswamy &amp; Raja in 2006, that merged in 2013 to form the pan-India, multi-city law Firm, Samvad: Partners. Siddharth broke-away and merged his practice with Argus Partners in 2016 and was that Firm&apos;s Senior Partner &amp; National Director until June 2019. All three of these firms or practices illustrate and represent Siddharth&apos;s entrepreneurial streak.
                </p>
                <p>
                  Siddharth began his law career in 1998 in Mumbai with the pan-India, leading law firm at the time, Udwadia, Udeshi &amp; Berjis. He has also worked in Hong Kong (between 2001 and 2004), with the international law firm, O&apos;Melveny &amp; Myers, where he specialized in cross-border M&amp;A, primarily related to China and Indonesia.
                </p>
                <p>
                  Siddharth has been a Professor of Practice and Visiting Faculty at his alma mater, NLSIU, teaching several courses on corporate laws, M&amp;A &amp; investments, as well as history courses, to name a few. His is, proudly, one of the co-editors of the 18th Edition (2025) of Avtar Singh&apos;s Company Law, India&apos;s leading treatise on the subject.
                </p>
                <p>
                  Siddharth has been a Visiting Faculty member at the Department of Management Studies, Indian Institute of Science, India&apos;s oldest management school. At the Indian Institute of Management, Bangalore, Siddharth lectures on business laws for MBA and other students (including for the education programs and other management development courses). He was also associated as a Visiting / Guest Faculty with the think-tank, The Takshashila Institution, and with the College of Supervisors (Reserve Bank of India). Siddharth has also delivered practice certificate courses at the BML Munjal University Law School, Haryana and at the Jindal Global Law School (JGLS). At JGLS, he was (in 2024-25) an Adjunct Professor of Corporate Legal Practice and the Director of The Michigan-Jindal Centre for Global Corporate &amp; Financial Law &amp; Policy.
                </p>
                <p>
                  Siddharth is a regular speaker on the academic and public lecture circuit in India and overseas, delivering talks on his key area of interest in the corporate law. He has delivered such special and distinguished addresses and workshops at the National Law Institute University, Bhopal; the BML Munjal University Law School, Haryana; the NALSAR University of Law, Hyderabad; the Maharashtra National Law University, Nagpur; the Gujarat National Law University, Gandhinagar; the India International University of Legal Education &amp; Research, Goa; the Vinayaka Mission&apos;s Law School, Chennai; the Assam Royal Global University Law School, Guwahati; the Strathmore Law School, Nairobi, Kenya, amongst others.
                </p>
                <p>
                  Siddharth is a twice elected Member of the Committee of the Bangalore International Centre (BIC), currently serving as the Chairperson of the BIC&apos;s Program Committee – he has previously served for three terms as a Governor on the Board of the BIC. He was also a member of the Karnataka Government&apos;s Bangalore Tourism Advisory Committee, established under the aegis of the then Hon&apos;ble IT &amp; BT and Tourism Minister of the State of Karnataka, Mr. Priyank Kharge.
                </p>
                <p>
                  In addition to his other diverse interests, Siddharth is also a trained and certified professional mediator, at India&apos;s leading conciliation firm, the Centre for Advanced Mediation Practice (CAMP). Siddharth serves (or has served) on several Boards of Indian companies, including, Nasmyth India; Direct Dialogue Initiatives; and Revsure AI Technologies. Siddharth is an advisor to the civil society Oorvani Foundation, which runs Citizen Matters.
                </p>
                <p>
                  His love for history has led him to run a successful historical walking tour company Nandi Valley Walks, where he conducts and curates heritage trails in various places, in and around Bangalore, the Nandi Hills area, and at Hampi / Vijayanagara. In his spare time, Siddharth pursues historical research on the Princely State of Mysore, through the biographical prism of one of its Dewans, Sir Albion Rajkumar Banerji, I.C.S (Retd.), C.S.I., C.I.E.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>


    </main>
  );
}
