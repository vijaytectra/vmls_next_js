import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArchitecturalSketch from "@/components/ArchitecturalSketch";
import {
  getAdvisorBySlug,
  getAdvisorsWithProfiles,
} from "@/data/boardOfAdvisors";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAdvisorsWithProfiles().map((advisor) => ({
    slug: advisor.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const advisor = getAdvisorBySlug(slug);
  if (!advisor || advisor.paragraphs.length === 0) {
    return { title: "Board of Advisors | VMLS" };
  }
  return {
    title: `${advisor.name} | Board of Advisors | VMLS`,
    description: advisor.designation,
  };
}

export default async function AdvisorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const advisor = getAdvisorBySlug(slug);

  if (!advisor || advisor.paragraphs.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="px-[5%] py-4 sm:py-6 bg-gray-50 border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 text-xs min-[380px]:text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors shrink-0">
            Home
          </Link>
          <span className="text-gray-300 font-light shrink-0">/</span>
          <Link
            href="/board-of-advisors"
            className="text-gray-500 hover:text-[#a31f34] transition-colors shrink-0"
          >
            Board of Advisors
          </Link>
          <span className="text-gray-300 font-light shrink-0">/</span>
          <span className="text-[#a31f34] font-semibold shrink-0">{advisor.name}</span>
        </div>
      </nav>

      <section className="relative px-[5%] pt-10 md:pt-14 pb-16 md:pb-24 overflow-hidden">
        <ArchitecturalSketch />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 md:mb-10">
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight mb-3">
              {advisor.name}
            </h1>
            <p className="font-playfair italic text-base md:text-lg lg:text-xl text-[#800000] leading-relaxed max-w-4xl">
              {advisor.designation}
            </p>
          </div>

          <div className="relative w-full sm:w-[280px] md:w-[320px] sm:float-left sm:mr-8 md:mr-10 mb-6 aspect-square overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
            <Image
              src={advisor.image}
              alt={advisor.name}
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-contain bg-white"
              priority
            />
          </div>

          <div className="space-y-5 font-inter text-gray-700 leading-relaxed text-base md:text-lg text-left hyphens-none [hyphens:none] [text-wrap:pretty]">
            {advisor.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>

          <div className="clear-both" />

          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link
              href="/board-of-advisors"
              className="inline-flex items-center gap-2 font-inter text-sm md:text-base font-semibold text-[#a31f34] hover:text-[#800000] transition-colors"
            >
              <span aria-hidden>←</span> Back to Board of Advisors
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
