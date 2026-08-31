import Image from "next/image";
import Link from "next/link";

const highlights = [
  "Gateway to LL.B. & LL.M. programmes",
  "AI-proctored, student-friendly exam",
  "Scholarships via VLAT merit",
];

export default function AdmissionsCtaSection() {
  return (
    <section className="relative min-h-[380px] md:min-h-[440px] overflow-hidden bg-[#1a1a1a]">
      <div className="absolute inset-0">
        <Image
          src="/images/vmrf/about-vmrf-campus.webp"
          alt="VMLS campus"
          fill
          sizes="100vw"
          className="object-cover object-center grayscale-[0.35]"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-[5%] py-12 md:py-16 lg:py-20 min-h-[380px] md:min-h-[440px] flex flex-col lg:flex-row items-center lg:items-end justify-between gap-10 lg:gap-12">
        <div className="w-full lg:max-w-xl text-center lg:text-left">
          <p className="font-inter text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-[#fbb03b] mb-3">
            Admissions 2026–27
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-tight">
            Take the first step to secure your success in law
          </h2>
        </div>

        <div className="w-full max-w-[320px] shrink-0 rounded-2xl border border-white/35 bg-white/20 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.35)] px-6 py-7 md:px-7 md:py-8 flex flex-col items-center gap-5">
          <div className="w-full flex justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/vlat/logo4.svg"
              alt="Vinayaka Mission's Law School"
              width={250}
              height={80}
              className="mx-auto w-[220px] md:w-[250px] h-auto object-contain"
            />
          </div>

          <div className="w-full text-center space-y-3">
            <p className="font-inter text-sm text-white/95 leading-snug [word-spacing:normal]">
              Apply through VLAT — Vinayaka Mission&apos;s Law Admission Test.
            </p>
            <ul className="space-y-1.5 text-left">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 font-inter text-[12px] md:text-[13px] text-white/85 leading-snug"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#fbb03b]"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="https://admissions.vmls.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center min-h-[52px] px-5 rounded-[10px] bg-[#a31f34] text-white font-inter text-sm md:text-[15px] font-semibold tracking-wide hover:bg-[#8b0000] transition-colors duration-300 shadow-[0_8px_20px_rgba(163,31,52,0.35)]"
          >
            Apply Now for VLAT 2026
          </Link>
        </div>
      </div>
    </section>
  );
}
