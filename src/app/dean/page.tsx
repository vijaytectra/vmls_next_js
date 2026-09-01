import Image from "next/image";
import Link from "next/link";
import ArchitecturalSketch from "@/components/ArchitecturalSketch";
import { pageMetadata } from "@/lib/seo-pages";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata("/dean");

const qualifications = [
  "LL.M., University of Warwick School of Law, United Kingdom (Chevening & J. N. Tata Scholar).",
  "B.A., LL.B. (Hons.), National Law School of India University (NLSIU), Bangalore — Gold Medalist.",
  "Solicitor, Law Society of England & Wales.",
];

const introParagraph =
  "Siddharth has a deep and abiding passion in academia – where he combines his rich practical expertise and experience gleaned over a three-decade old corporate law career, with a sharp and incisive doctrinal teaching excellence. His appointment as Dean of Vinayaka Mission's Law School marks a high point in his journey in academia.";

const aboutParagraphs = [
  'A seasoned corporate lawyer and public intellectual, Siddharth has over 28 years focused his practice on private equity and venture capital transactions (both inbound and outbound); foreign-exchange law and enforcement, as well as related regulatory, compliance, and adjudicatory aspects); and on cross-border and domestic mergers and acquisitions. He has been highly ranked for several years, including by Chambers & Partners – lauded for his "global business perspective", "attention to detail" and "excellent technical knowledge".',
  "A Gold Medalist with a B.A., LL.B. (Hons.) law degree from the prestigious National Law School of India University (NLSIU), Siddharth also holds a Masters in Law from the University of Warwick Law School, where he was a British Council & Foreign and Commonwealth Office Chevening, and J. N. Tata, Scholar. Siddharth is admitted to the rolls of the Law Society of England & Wales as a Solicitor.",
  "Siddharth merged (in December 2022), his corporate / commercial law and M&A / PE-VC practices and team with, and became a Senior Partner at, the pan-India niche, but full-service, law Firm VERTICES PARTNERS. In July 2019, Siddharth had co-founded the Bangalore-headquartered law firm, Saakshya Law; his fourth entrepreneurial law practice venture.",
  "Siddharth previously co-founded Narasappa, Doraswamy & Raja in 2006, that merged in 2013 to form the pan-India, multi-city law Firm, Samvad: Partners. Siddharth broke-away and merged his practice with Argus Partners in 2016 and was that Firm's Senior Partner & National Director until June 2019. All three of these firms or practices illustrate and represent Siddharth's entrepreneurial streak.",
  "Siddharth began his law career in 1998 in Mumbai with the pan-India, leading law firm at the time, Udwadia, Udeshi & Berjis. He has also worked in Hong Kong (between 2001 and 2004), with the international law firm, O'Melveny & Myers, where he specialized in cross-border M&A, primarily related to China and Indonesia.",
  "Siddharth has been a Professor of Practice and Visiting Faculty at his alma mater, NLSIU, teaching several courses on corporate laws, M&A & investments, as well as history courses, to name a few. His is, proudly, one of the co-editors of the 18th Edition (2025) of Avtar Singh's Company Law, India's leading treatise on the subject.",
  "Siddharth has been a Visiting Faculty member at the Department of Management Studies, Indian Institute of Science, India's oldest management school. At the Indian Institute of Management, Bangalore, Siddharth lectures on business laws for MBA and other students (including for the education programs and other management development courses). He was also associated as a Visiting / Guest Faculty with the think-tank, The Takshashila Institution, and with the College of Supervisors (Reserve Bank of India). Siddharth has also delivered practice certificate courses at the BML Munjal University Law School, Haryana and at the Jindal Global Law School (JGLS). At JGLS, he was (in 2024-25) an Adjunct Professor of Corporate Legal Practice and the Director of The Michigan-Jindal Centre for Global Corporate & Financial Law & Policy.",
  "Siddharth is a regular speaker on the academic and public lecture circuit in India and overseas, delivering talks on his key area of interest in the corporate law. He has delivered such special and distinguished addresses and workshops at the National Law Institute University, Bhopal; the BML Munjal University Law School, Haryana; the NALSAR University of Law, Hyderabad; the Maharashtra National Law University, Nagpur; the Gujarat National Law University, Gandhinagar; the India International University of Legal Education & Research, Goa; the Vinayaka Mission's Law School, Chennai; the Assam Royal Global University Law School, Guwahati; the Strathmore Law School, Nairobi, Kenya, amongst others.",
  "Siddharth is a twice elected Member of the Committee of the Bangalore International Centre (BIC), currently serving as the Chairperson of the BIC's Program Committee – he has previously served for three terms as a Governor on the Board of the BIC. He was also a member of the Karnataka Government's Bangalore Tourism Advisory Committee, established under the aegis of the then Hon'ble IT & BT and Tourism Minister of the State of Karnataka, Mr. Priyank Kharge.",
  "In addition to his other diverse interests, Siddharth is also a trained and certified professional mediator, at India's leading conciliation firm, the Centre for Advanced Mediation Practice (CAMP). Siddharth serves (or has served) on several Boards of Indian companies, including, Nasmyth India; Direct Dialogue Initiatives; and Revsure AI Technologies. Siddharth is an advisor to the civil society Oorvani Foundation, which runs Citizen Matters.",
  "His love for history has led him to run a successful historical walking tour company Nandi Valley Walks, where he conducts and curates heritage trails in various places, in and around Bangalore, the Nandi Hills area, and at Hampi / Vijayanagara. In his spare time, Siddharth pursues historical research on the Princely State of Mysore, through the biographical prism of one of its Dewans, Sir Albion Rajkumar Banerji, I.C.S (Retd.), C.S.I., C.I.E.",
];

const academicQualifications = [
  "LL.M., University of Warwick School of Law, United Kingdom (Chevening Scholar & J. N. Tata Scholar).",
  "B.A., LL.B. (Hons.), National Law School of India University (NLSIU), Bangalore — Gold Medalist.",
  "Solicitor, admitted to the Law Society of England & Wales.",
  "Chair person, Centre for Post Graduate Legal Studies & Professor of Law.",
];

export default function DeanPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageSchema path="/dean" />
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Executive Dean</span>
        </div>
      </nav>
      <hr className="border-gray-100" />

      {/* Hero: image left, intro right — full width within px-[5%] */}
      <section className="pb-8 md:pb-16 pt-4 md:pt-10 px-[5%] bg-white overflow-hidden relative">
        <ArchitecturalSketch />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-3 sm:gap-4 md:gap-6 lg:gap-10 relative z-10">
          <div className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] order-1 shrink-0 mx-auto lg:mx-0">
            <div className="relative w-full aspect-[3/4] shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-2">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/faculty/live/DSC00716_19.webp"
                  alt="Mr. Siddharth Raja, Executive Dean"
                  fill
                  sizes="280px"
                  className="object-cover object-top transition-transform duration-700 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 order-2 flex flex-col justify-center items-center text-center min-w-0 w-full">
            <h3 className="text-[#a31f34] uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-1.5 md:mb-2 text-center">
              Leadership
            </h3>
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-2 md:mb-3 leading-tight text-center">
              Mr. Siddharth Raja
            </h1>

            <div className="space-y-4 md:space-y-6 w-full flex flex-col items-center text-center">
              <div>
                <h4 className="font-inter text-lg md:text-2xl font-bold tracking-tight text-[#a31f34] mb-2 text-center">
                  Executive Dean
                </h4>
                <ul className="space-y-2 text-center">
                  {qualifications.map((item) => (
                    <li
                      key={item}
                      className="font-inter text-base md:text-lg text-[#a31f34] leading-relaxed text-center"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]"></div>
                <p className="pl-6 md:pl-8 font-inter text-lg md:text-xl text-gray-800 leading-relaxed font-medium italic">
                  {introParagraph}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About the Dean — remaining biography */}
      <section
        className="bg-white px-[5%] py-12 md:py-16 animate-fade-in-up"
        style={{ animationDelay: "0.1s" }}
      >
          <div className="relative bg-white p-6 md:p-10 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.12)] border border-gray-100 overflow-hidden group transition-all duration-500 hover:shadow-[0_60px_120px_-20px_rgba(0,0,0,0.16)] hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#a31f34] opacity-[0.03] rounded-full -translate-x-12 -translate-y-12 transition-transform duration-700 group-hover:scale-110 group-hover:opacity-[0.05]"></div>
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-[#a31f34] opacity-[0.02] rounded-full transition-transform duration-700 group-hover:scale-110 group-hover:opacity-[0.04]"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10 transition-transform duration-500 group-hover:translate-x-2">
                <div className="w-16 h-[2px] bg-[#a31f34]"></div>
                <h4 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] italic">
                  About the Dean
                </h4>
              </div>

              <div className="space-y-8 font-inter text-lg md:text-xl text-gray-700 leading-relaxed">
                {aboutParagraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-100">
                <h5 className="font-playfair text-xl md:text-2xl text-[#1a1a1a] font-semibold mb-5">
                  Academic Qualifications
                </h5>
                <ul className="space-y-3 list-disc pl-6 font-inter text-lg md:text-xl text-gray-700 leading-relaxed">
                  {academicQualifications.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
