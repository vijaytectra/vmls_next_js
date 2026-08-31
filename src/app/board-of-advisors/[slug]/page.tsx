import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArchitecturalSketch from "@/components/ArchitecturalSketch";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import {
  getAdvisorBySlug,
  getAdvisorsWithProfiles,
  type Advisor,
} from "@/data/boardOfAdvisors";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAdvisorsWithProfiles().map((advisor) => ({
    slug: advisor.slug,
  }));
}

const ADVISOR_TRAIL = [
  { name: "Home", path: "/" },
  { name: "Board of Advisors", path: "/board-of-advisors" },
];

/** 150-160 character summary drawn from the advisor's own profile text. */
function advisorDescription(advisor: Advisor): string {
  let text = `${advisor.name}, ${advisor.designation.replace(/\.$/, "")}, serves on the Board of Advisors of Vinayaka Mission's Law School, Chennai.`;
  for (const paragraph of advisor.paragraphs) {
    if (text.length >= 150) break;
    text = `${text} ${paragraph}`.trim();
  }
  if (text.length <= 160) return text;
  const at = text.slice(0, 158).lastIndexOf(" ");
  const onWord = at > 0 ? text.slice(0, at).replace(/[,;:.\s]+$/, "") : "";
  return `${onWord.length >= 149 ? onWord : text.slice(0, 157).trimEnd()}…`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const advisor = getAdvisorBySlug(slug);
  const path = `/board-of-advisors/${slug}`;

  // Advisors without a written profile render an empty shell.
  if (!advisor || advisor.paragraphs.length === 0) {
    return buildMetadata({
      path,
      title: "Board of Advisors Profile – VMLS",
      description:
        "This advisor profile is not published yet. Browse the legal luminaries who guide Vinayaka Mission's Law School, Chennai, on the Board of Advisors page.",
      noindex: true,
    });
  }

  return buildMetadata({
    path,
    title: `${advisor.name} – Board of Advisors | VMLS`.length <= 60
      ? `${advisor.name} – Board of Advisors | VMLS`
      : `${advisor.name} – VMLS Board of Advisors`,
    description: advisorDescription(advisor),
    ogTitle: `${advisor.name} – VMLS Board of Advisors`,
    ogDescription: advisor.designation,
    image: advisor.image,
    imageAlt: `${advisor.name}, ${advisor.designation}`,
    ogType: "profile",
    dcType: "Text.Biography",
  });
}

export default async function AdvisorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const advisor = getAdvisorBySlug(slug);

  if (!advisor || advisor.paragraphs.length === 0) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        schema={[
          personSchema({
            name: advisor.name,
            jobTitle: advisor.designation,
            path: `/board-of-advisors/${advisor.slug}`,
            image: advisor.image,
            description: advisorDescription(advisor),
          }),
          breadcrumbSchema([...ADVISOR_TRAIL, { name: advisor.name }]),
        ]}
      />
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <Link
            href="/board-of-advisors"
            className="text-gray-500 hover:text-[#a31f34] transition-colors"
          >
            Board of Advisors
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">{advisor.name}</span>
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
