import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArchitecturalSketch from "@/components/ArchitecturalSketch";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";
import { buildMetadata } from "@/lib/seo";
import { breadcrumbSchema, personSchema } from "@/lib/schema";
import {
  getMentoringMemberBySlug,
  mentoringMembers,
  type MentoringMember,
  type TextSegment,
} from "@/data/mentoringCommittee";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function RichText({ segments }: { segments: TextSegment[] }) {
  return (
    <>
      {segments.map((segment, index) =>
        segment.bold ? (
          <strong key={`${index}-${segment.text.slice(0, 12)}`} className="font-semibold text-[#1a1a1a]">
            {segment.text}
          </strong>
        ) : (
          <span key={`${index}-${segment.text.slice(0, 12)}`}>{segment.text}</span>
        )
      )}
    </>
  );
}

export function generateStaticParams() {
  return mentoringMembers.map((member) => ({
    slug: member.slug,
  }));
}

const MENTOR_TRAIL = [
  { name: "Home", path: "/" },
  { name: "Mentoring Committee", path: "/mentoring-committee" },
];

/** 150-160 character summary drawn from the member's own profile text. */
function mentorDescription(member: MentoringMember): string {
  let text = `${member.name}, ${member.role} of the VMLS Mentoring Committee. ${member.designation}`;
  for (const block of member.blocks) {
    if (text.length >= 150) break;
    if (block.type !== "paragraph") continue;
    text = `${text} ${block.segments.map((s) => s.text).join("")}`.trim();
  }
  if (text.length <= 160) return text;
  const at = text.slice(0, 158).lastIndexOf(" ");
  const onWord = at > 0 ? text.slice(0, at).replace(/[,;:.\s]+$/, "") : "";
  return `${onWord.length >= 149 ? onWord : text.slice(0, 157).trimEnd()}…`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const member = getMentoringMemberBySlug(slug);
  const path = `/mentoring-committee/${slug}`;
  if (!member) {
    return buildMetadata({
      path,
      title: "Mentoring Committee Profile – VMLS",
      description:
        "This mentoring committee profile is not available. Browse the legal experts and academics who mentor Vinayaka Mission's Law School, Chennai.",
      noindex: true,
    });
  }
  return buildMetadata({
    path,
    title: `${member.name} – Mentoring Committee | VMLS`.length <= 60
      ? `${member.name} – Mentoring Committee | VMLS`
      : `${member.name} – VMLS Mentoring Committee`,
    description: mentorDescription(member),
    ogTitle: `${member.name} – ${member.role}, VMLS Mentoring Committee`,
    ogDescription: member.designation,
    image: member.image,
    imageAlt: `${member.name}, ${member.designation}`,
    ogType: "profile",
    dcType: "Text.Biography",
  });
}

export default async function MentoringMemberProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const member = getMentoringMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <JsonLd
        schema={[
          personSchema({
            name: member.name,
            jobTitle: member.designation,
            path: `/mentoring-committee/${member.slug}`,
            image: member.image,
            description: mentorDescription(member),
          }),
          breadcrumbSchema([...MENTOR_TRAIL, { name: member.name }]),
        ]}
      />
      <nav className="px-[5%] py-4 sm:py-6 bg-gray-50 border-b border-gray-100 overflow-x-auto no-scrollbar">
        <div className="max-w-7xl mx-auto flex items-center gap-2 sm:gap-3 text-xs min-[380px]:text-sm sm:text-base md:text-lg font-medium whitespace-nowrap">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors shrink-0">
            Home
          </Link>
          <span className="text-gray-300 font-light shrink-0">/</span>
          <Link
            href="/mentoring-committee"
            className="text-gray-500 hover:text-[#a31f34] transition-colors shrink-0"
          >
            Mentoring Committee
          </Link>
          <span className="text-gray-300 font-light shrink-0">/</span>
          <span className="text-[#a31f34] font-semibold shrink-0">{member.name}</span>
        </div>
      </nav>

      <section className="relative px-[5%] pt-10 md:pt-14 pb-16 md:pb-24 overflow-hidden">
        <ArchitecturalSketch />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-8 md:mb-10">
            <p className="font-inter text-xs md:text-sm uppercase tracking-[0.18em] font-bold text-[#a31f34] mb-3">
              {member.role}
            </p>
            <h1 className="font-playfair text-2xl md:text-3xl lg:text-4xl font-bold text-[#1a1a1a] leading-tight mb-3">
              {member.name}
            </h1>
            <p className="font-playfair italic text-base md:text-lg lg:text-xl text-[#800000] leading-relaxed max-w-4xl">
              {member.designation}
            </p>
          </div>

          <div className="relative w-full sm:w-[280px] md:w-[320px] sm:float-left sm:mr-8 md:mr-10 mb-6 aspect-square overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] bg-white">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 640px) 100vw, 320px"
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="space-y-5 font-inter text-gray-700 leading-relaxed text-base md:text-lg">
            {member.blocks.map((block, index) => {
              if (block.type === "heading") {
                return (
                  <h2
                    key={`h-${index}-${block.text}`}
                    className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#1a1a1a] pt-2"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === "list") {
                const previousBlock = index > 0 ? member.blocks[index - 1] : null;
                const isEducationList =
                  previousBlock?.type === "heading" &&
                  previousBlock.text.trim().toLowerCase() === "education";

                if (isEducationList && block.items.length > 1) {
                  return (
                    <div key={`edu-list-${index}`}>
                      <ul className="list-disc list-outside pl-6 md:pl-8 space-y-3 text-left hyphens-none [hyphens:none] [text-wrap:pretty]">
                        <li className="leading-relaxed">
                          <RichText segments={block.items[0]} />
                        </li>
                      </ul>

                      <div className="clear-both" />

                      <ul className="list-disc list-outside pl-6 md:pl-8 space-y-3 mt-3 text-left hyphens-none [hyphens:none] [text-wrap:pretty]">
                        {block.items.slice(1).map((item, itemIndex) => (
                          <li key={`li-rest-${index}-${itemIndex}`} className="leading-relaxed">
                            <RichText segments={item} />
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                }

                return (
                  <ul
                    key={`l-${index}`}
                    className="list-disc pl-6 md:pl-8 space-y-3 text-left hyphens-none [hyphens:none] [text-wrap:pretty]"
                  >
                    {block.items.map((item, itemIndex) => (
                      <li key={`li-${index}-${itemIndex}`}>
                        <RichText segments={item} />
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p
                  key={`p-${index}`}
                  className="text-left hyphens-none [hyphens:none] [text-wrap:pretty]"
                >
                  <RichText segments={block.segments} />
                </p>
              );
            })}
          </div>

          <div className="clear-both" />

          <div className="mt-10 pt-6 border-t border-gray-100">
            <Link
              href="/mentoring-committee"
              className="inline-flex items-center gap-2 font-inter text-sm md:text-base font-semibold text-[#a31f34] hover:text-[#800000] transition-colors"
            >
              <span aria-hidden>←</span> Back to Mentoring Committee
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
