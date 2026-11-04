import { pageMetadata } from "@/lib/seo-pages";
import PageSchema from "@/components/seo/PageSchema";
import { RESEARCH_PUBLICATIONS } from "@/data/researchPublications";
import ResearchClient from "./ResearchClient";
import Image from "next/image";

export const metadata = pageMetadata("/research");

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-white relative">
      <PageSchema path="/research" />
      <ResearchClient publications={RESEARCH_PUBLICATIONS} />

      {/* Decorative Architecture Element at Bottom Left */}
      <div className="fixed bottom-0 left-0 w-[300px] opacity-[0.05] pointer-events-none select-none z-0">
        <Image src="/images/vmls/vmls-arch.png" alt="" width={400} height={400} className="grayscale" />
      </div>
    </main>
  );
}
