import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Keep Turbopack scoped to this app — a parent ~/package-lock.json otherwise
  // makes Tailwind scan the whole home directory (and pick up broken live-site paths).
  turbopack: {
    root: path.join(__dirname),
  },
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    // Vercel hobby/free image optimization returns 402
    // (OPTIMIZED_IMAGE_REQUEST_PAYMENT_REQUIRED). Serve public/
    // assets directly so images work in production.
    unoptimized: true,
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vmls.edu.in",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/blogs.html",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/blogs/aibe-all-india-bar-exam-guide.html",
        destination: "/blogs/aibe-all-india-bar-exam-guide",
        permanent: true,
      },
      {
        source: "/blogs/what-does-bci-approval-mean-law-college.html",
        destination: "/blogs/what-does-bci-approval-mean-law-college",
        permanent: true,
      },
      {
        source: "/blogs/clat-2027-exam-dates-eligibility-syllabus-and-admission.html",
        destination: "/blogs/clat-2027-exam-dates-eligibility-syllabus-and-admission",
        permanent: true,
      },
      {
        source: "/mentoring-committee/dr-padmanabha-ramanunjam",
        destination: "/mentoring-committee",
        permanent: true,
      },
      {
        source: "/faculty/s-suganya",
        destination: "/faculty-profiles",
        permanent: true,
      },
      {
        source: "/faculty/tathagat-sharma",
        destination: "/faculty-profiles",
        permanent: true,
      },
      {
        source: "/faculty/kiran-jenifer",
        destination: "/faculty-profiles",
        permanent: true,
      },
      {
        source: "/blogs/full-time-phd-in-law-and-interdisciplinary-studies.html",
        destination: "/blogs/full-time-phd-in-law-and-interdisciplinary-studies",
        permanent: true,
      },
      {
        source: "/blogs/part-time-phd-in-law-and-interdisciplinary-studies.html",
        destination: "/blogs/part-time-phd-in-law-and-interdisciplinary-studies",
        permanent: true,
      },
      {
        source: "/blogs/clat-2026-exam-dates-eligibility-syllabus-and-admission.html",
        destination: "/blogs/clat-2026-exam-dates-eligibility-syllabus-and-admission",
        permanent: true,
      },
      {
        source: "/blogs/vmls-open-day-2025.html",
        destination: "/blogs/vmls-open-day-2025",
        permanent: true,
      },
      {
        source: "/blogs/vmrf-law-admission-test-vlat.html",
        destination: "/blogs/vmrf-law-admission-test-vlat",
        permanent: true,
      },
      {
        source: "/blogs/vmrf-law-aptitude-test-vlat.html",
        destination: "/blogs/vmrf-law-aptitude-test-vlat",
        permanent: true,
      },
      {
        source: "/blogs/scholarships-for-law-students-in-india.html",
        destination: "/blogs/scholarships-for-law-students-in-india",
        permanent: true,
      },
      {
        source: "/blogs/how-to-become-a-judge-in-india-after-llb.html",
        destination: "/blogs/how-to-become-a-judge-in-india-after-llb",
        permanent: true,
      },
      {
        source: "/blogs/career-after-llb-litigation-vs-corporate-vs-judiciary.html",
        destination: "/blogs/career-after-llb-litigation-vs-corporate-vs-judiciary",
        permanent: true,
      },
      {
        source: "/blogs/how-to-prepare-for-vlat-study-plan.html",
        destination: "/blogs/how-to-prepare-for-vlat-study-plan",
        permanent: true,
      },
      {
        source: "/blogs/llb-fees-in-india-complete-cost-breakdown.html",
        destination: "/blogs/llb-fees-in-india-complete-cost-breakdown",
        permanent: true,
      },
      {
        source: "/international-conference",
        destination: "/international-conference-on-rivers",
        permanent: true,
      },
      {
        source: "/membership.html",
        destination: "/library-membership",
        permanent: true,
      },
      {
        source: "/membership",
        destination: "/library-membership",
        permanent: true,
      },
      {
        source: "/rules-and-regulations.html",
        destination: "/library-rules",
        permanent: true,
      },
      {
        source: "/rules-and-regulations",
        destination: "/library-rules",
        permanent: true,
      },
      {
        source: "/library-useful-links.html",
        destination: "/library-useful-links",
        permanent: true,
      },
      {
        source: "/library.html",
        destination: "/library",
        permanent: true,
      },
      {
        source: "/student-affairs.html",
        destination: "/student-affairs",
        permanent: true,
      },
      {
        source: "/clubs-at-vinayaka-missions-law-school.html",
        destination: "/student-clubs",
        permanent: true,
      },
      {
        source: "/clubs-at-vinayaka-missions-law-school",
        destination: "/student-clubs",
        permanent: true,
      },
      {
        source: "/help/anti-ragging-squad.html",
        destination: "/anti-ragging-squad",
        permanent: true,
      },
      {
        source: "/help/anti-ragging-squad",
        destination: "/anti-ragging-squad",
        permanent: true,
      },
      {
        source: "/news/aarambh-the-freshers-fiesta.html",
        destination: "/news/aarambh-fiesta",
        permanent: true,
      },
      {
        source: "/news/vmls-fest-2025-two-days-infinite-vibes-one-unforgettable-experience.html",
        destination: "/news/vmls-fest-2025",
        permanent: true,
      },
      {
        source: "/news/lspl-where-law-meets-football-and-unity-scores-big.html",
        destination: "/news/lspl",
        permanent: true,
      },
      {
        source: "/news/students-secures-award-at-international-conference-on-women-and-ai.html",
        destination: "/news/women-and-ai-conference",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
