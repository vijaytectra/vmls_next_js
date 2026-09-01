import Image from "next/image";
import Link from "next/link";
import ArchitecturalSketch from "@/components/ArchitecturalSketch";
import { pageMetadata } from "@/lib/seo-pages";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata("/chancellor");

const introParagraph =
  "Dr. A.S. Ganesan is the Chancellor of Vinayaka Mission's Research Foundation (Deemed to be University) and is instrumental in the growth of the institution from its humble beginning since 1981 to VMRF-DU with over 15,000 students and more than 5000 employees today.";

const aboutParagraphs = [
  "Dr. A.S. Ganesan completed his Medical Degree in 1992 from Madras Medical College and continued his higher education in medical and management at MMC, Chennai and Heidelberg University, Germany.",
  "Since 1995, Dr. A.S. Ganesan has associated himself with the Founder Chairman Dr. A. Shanmugasundaram in establishing and developing medical colleges in Pondichery & Karaikal and an Engineering College in Chennai. He took up end-to-end responsibility of establishing and governing the institutions to offer multiple UG & PG programs.",
  "Dr. A.S. Ganesan was instrumental in developing the campuses into Deemed to be University in 2001 through his administrative ability and vision to inspire the youth.",
  "In 2013, Dr. A.S. Ganesan was appointed as the Chancellor by the Board of Trustees headed by the Founder Chancellor. He provides strategic guidance and leadership to the Vinayaka Mission's Research Foundation (Deemed to be University) offering undergraduate and post graduate programmes in Medicine, Dentistry, Homeopathy, Pharmacy, Nursing, Paramedical, Engineering, Law, Management and other disciplines.",
  "Under his leadership, VMRF-DU contributes to the medical and healthcare needs of society through its institutions and network of hospitals. VMRF-DU medical institutions are referral centers for neighboring hospitals and serve to alleviate health care problems of rural communities.",
  "His vision and continuous focus is to uplift economically weaker sections of society living in rural areas through education, employment, health facilities, social and community development. He is a leader par excellence in higher education, well known for his commitment and advocacy for accessible high quality graduate and post graduate education for rural youth.",
  "Dr. A.S. Ganesan is keen in promoting innovation, multi-disciplinary research, introducing socially relevant programs, skill development, industry affiliations and international collaborations. He received \"Edupreneurs Award for Education Excellence\" by Times of India in 2012 and 2014.",
  "He is also the benefactor of innumerable health care programs, educational scholarships, youth welfare, women empowerment, green initiatives and community transformation across the globe.",
  "Dr. A.S. Ganesan continues the philanthropic activities started by the Founder Chairman Dr. A. Shanmugasundaram including management of the magnificent \"1008 Shivalaya Temples\" in Salem which is also a part of Incredible India promoted by the Ministry of Tourism, Government of India and a landmark in the state of Tamil Nadu. Apart from this, several temples, community halls, buildings and lands have been donated for several charitable activities in Tamil Nadu and Puducherry.",
];

export default function ChancellorPage() {
  return (
    <main className="min-h-screen bg-white">
      <PageSchema path="/chancellor" />
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">Chancellor</span>
        </div>
      </nav>
      <hr className="border-gray-100" />

      <section className="pb-12 md:pb-16 pt-8 md:pt-12 px-[5%] bg-white overflow-hidden relative">
        <ArchitecturalSketch />

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-10 relative z-10">
          <div className="w-full max-w-[240px] sm:max-w-[260px] md:max-w-[280px] order-1 shrink-0 mx-auto lg:mx-0">
            <div className="relative w-full aspect-[3/4] shadow-[0_30px_70px_rgba(0,0,0,0.12)] transition-transform duration-500 hover:-translate-y-2">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/vmrf/Frame-53136.webp"
                  alt="Dr. A.S. Ganesan"
                  fill
                  sizes="280px"
                  className="object-cover transition-transform duration-700 hover:scale-105 contrast-[1.05] brightness-[1.02]"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="flex-1 order-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left min-w-0 w-full">
            <h3 className="text-[#a31f34] uppercase tracking-[0.2em] text-sm font-bold mb-4 text-center lg:text-left">
              Leadership
            </h3>
            <h1 className="font-playfair text-[22px] min-[380px]:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] mb-4 leading-tight whitespace-nowrap text-center lg:text-left">
              Dr. A.S. Ganesan
            </h1>

            <div className="space-y-8">
              <h4 className="font-inter text-xl md:text-2xl font-bold tracking-tight text-[#a31f34]">
                Chancellor, Vinayaka Mission&apos;s Research Foundation (Deemed to be University)
              </h4>

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
                About the Chancellor
              </h4>
            </div>

            <div className="space-y-8 font-inter text-lg md:text-xl text-gray-700 leading-relaxed">
              {aboutParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
