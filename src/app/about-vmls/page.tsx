import Image from "next/image";
import Link from "next/link";
import ArchitecturalSketch from "@/components/ArchitecturalSketch";

export default function AboutVMLS() {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="px-[5%] py-6 bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex items-center gap-3 text-base md:text-lg font-medium">
          <Link href="/" className="text-gray-500 hover:text-[#a31f34] transition-colors">
            Home
          </Link>
          <span className="text-gray-300 font-light">/</span>
          <span className="text-[#a31f34] font-semibold">About VMLS</span>
        </div>
      </nav>

      {/* Hero Banner — same pattern as About VMRF */}
      <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[320px] overflow-hidden">
        <Image
          src="/images/vmls/pg-header.webp"
          alt="Vinayaka Mission's Law School campus"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
        <div className="absolute inset-0 flex items-end px-[5%] pb-10 md:pb-14">
          <div className="max-w-7xl mx-auto w-full">
            <div className="max-w-xl text-white">
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight text-left">
                About VMLS
              </h1>
              <p className="font-inter text-base md:text-lg leading-relaxed text-white/95 text-left [word-spacing:normal]">
                Vinayaka Mission&apos;s Law School (VMLS) has been established by
                Vinayaka Missions Research Foundation – Deemed to be University
                (VMRF-DU) to impart legal education and legal skills relevant to
                the evolving needs of the local, national and global communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content — image + video left, text right (VMRF layout) */}
      <section className="py-10 md:py-14 px-[5%] bg-white overflow-hidden relative">
        <ArchitecturalSketch />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-10 lg:gap-14 relative z-10">
          {/* Left: video only (Sticky on desktop) */}
          <div className="lg:w-[38%] w-full shrink-0 lg:sticky lg:top-28">
            <div className="relative w-full aspect-video shadow-[0_20px_50px_rgba(0,0,0,0.12)] overflow-hidden bg-black">
              <iframe
                src="https://www.youtube.com/embed/ay5f0qEL-d8"
                title="VMLS Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-[62%] flex flex-col justify-center">
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-[#a31f34]" />
              <div className="pl-6 md:pl-10 space-y-6 text-left hyphens-none [hyphens:none] [-webkit-hyphens:none]">
                <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                  With the founding vision of creating the law school of the future,
                  VMLS admitted its first cohort of students in 2021. Mentorship from
                  India&apos;s finest law school,{" "}
                  <span className="font-bold text-[#a31f34]">Jindal Global Law School</span>
                  , and a committed team of full-time faculty members, many of whom
                  are trained in globally renowned institutions, have resulted in
                  pedagogic innovations at VMLS that make it a frontrunner in
                  equipping{" "}
                  <span className="whitespace-nowrap">learners</span> with the skills,
                  knowledge, exposure, and specializations required for professional
                  success in the AI age. The state-of-the-art infrastructure, including
                  smart classrooms, a well-stocked library with a strong digital
                  backbone, and a regal moot court hall, support in this endeavour by
                  creating the ambience for our students to immerse in the vibrant
                  campus life.
                </p>

                <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed">
                  As a{" "}
                  <span className="font-bold text-[#a31f34]">
                    bilingual law school in Chennai
                  </span>
                  , VMLS offers students the unique advantage of studying law in both{" "}
                  <span className="font-bold text-[#a31f34]">English and Tamil</span>,
                  preparing them for a global legal career while staying rooted in the
                  local context. VMLS prides itself in its focus on inclusivity so that
                  no <span className="whitespace-nowrap">learner</span> is left behind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
