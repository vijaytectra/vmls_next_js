import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArchitecturalSketch from "@/components/ArchitecturalSketch";
import {
  getMentoringMemberBySlug,
  mentoringMembers,
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

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const member = getMentoringMemberBySlug(slug);
  if (!member) {
    return { title: "Mentoring Committee | VMLS" };
  }
  return {
    title: `${member.name} | Mentoring Committee | VMLS`,
    description: member.designation,
  };
}

export default async function MentoringMemberProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const member = getMentoringMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <Link
            href="/mentoring-committee"
            className="text-gray-500 hover:text-[#a31f34] transition-colors"
          >
            Mentoring Committee
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">{member.name}</span>
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
