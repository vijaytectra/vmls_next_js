import {
  CAMPUS_ADDRESS,
  CAMPUS_COORDS,
  CONTACT,
  ORG_ID,
  SITE_URL,
  absoluteUrl,
  absoluteAssetUrl,
} from "@/lib/seo";

/**
 * JSON-LD builders.
 *
 * The full CollegeOrUniversity block is declared exactly once, on the
 * homepage. Every other page references it by @id (ORG_ID) instead of
 * re-declaring it, so an address or phone change is a one-file edit.
 */

type Json = Record<string, unknown>;

const CONTEXT = "https://schema.org";

export const postalAddress = () => ({
  "@type": "PostalAddress",
  ...CAMPUS_ADDRESS,
});

/** Homepage only. */
export function organizationSchema(): Json {
  return {
    "@context": CONTEXT,
    "@type": "CollegeOrUniversity",
    "@id": ORG_ID,
    name: "Vinayaka Mission's Law School",
    alternateName: "VMLS",
    url: `${SITE_URL}/`,
    // VMLS wordmark used in the site header (public/images/headerright.webp).
    logo: `${SITE_URL}/images/headerright.webp`,
    image: `${SITE_URL}/images/home-about.webp`,
    description:
      "Vinayaka Mission's Law School (VMLS), Chennai, is mentored by O.P. Jindal Global University and Jindal Global Law School, offering LL.B. (Hons.), B.A. LL.B. (Hons.), B.B.A. LL.B. (Hons.), B.Com. LL.B. (Hons.) and LL.M. programmes.",
    foundingDate: "2021",
    parentOrganization: {
      "@type": "CollegeOrUniversity",
      name: "Vinayaka Mission's Research Foundation",
      url: absoluteUrl("/about-vmrf"),
    },
    address: postalAddress(),
    geo: { "@type": "GeoCoordinates", ...CAMPUS_COORDS },
    telephone: CONTACT.telephone,
    email: CONTACT.email,
    sameAs: [
      "https://www.facebook.com/vinayakamissionslawschool/",
      "https://www.instagram.com/vinayakamissionslawschool/",
      "https://www.linkedin.com/company/76599099",
      "https://www.youtube.com/@VinayakaMissionsLawSchoolVMLS",
    ],
    department: [
      { name: "Global Tamil Law Centre", path: "/global-tamil-law-centre" },
      {
        name: "Centre for Justice Through Technology",
        path: "/centre-for-justice-through-technology",
      },
      {
        name: "Centre for the Promotion of International Law",
        path: "/cpil",
      },
      { name: "Centre for Maritime Law", path: "/maritime-law" },
      { name: "Centre for Access to Justice", path: "/centre-for-access-to-justice" },
    ].map((d) => ({
      "@type": "EducationalOrganization",
      name: d.name,
      url: absoluteUrl(d.path),
    })),
  };
}

/** One per programme page, describing that programme only. */
export function courseSchema(input: {
  name: string;
  description: string;
  path: string;
  courseMode?: string;
  educationalCredentialAwarded?: string;
  timeToComplete?: string;
}): Json {
  return {
    "@context": CONTEXT,
    "@type": "Course",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    // @id reference - the organization block itself lives on the homepage.
    provider: { "@id": ORG_ID },
    ...(input.educationalCredentialAwarded
      ? { educationalCredentialAwarded: input.educationalCredentialAwarded }
      : {}),
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: input.courseMode ?? "Onsite",
      ...(input.timeToComplete ? { courseWorkload: input.timeToComplete } : {}),
      location: {
        "@type": "Place",
        name: "VMLS Campus, Chennai",
        address: postalAddress(),
      },
    },
  };
}

/** One per faculty/staff profile page. */
export function personSchema(input: {
  name: string;
  jobTitle?: string;
  path: string;
  image?: string;
  email?: string;
  description?: string;
  alumniOf?: string[];
}): Json {
  return {
    "@context": CONTEXT,
    "@type": "Person",
    name: input.name,
    ...(input.jobTitle ? { jobTitle: input.jobTitle } : {}),
    worksFor: { "@id": ORG_ID },
    url: absoluteUrl(input.path),
    ...(input.image ? { image: absoluteAssetUrl(input.image) } : {}),
    ...(input.email ? { email: input.email } : {}),
    ...(input.description ? { description: input.description } : {}),
    ...(input.alumniOf
      ? {
          alumniOf: input.alumniOf.map((name) => ({
            "@type": "CollegeOrUniversity",
            name,
          })),
        }
      : {}),
  };
}

/** One per centre/department page. */
export function centreSchema(input: {
  name: string;
  description: string;
  path: string;
  image?: string;
}): Json {
  return {
    "@context": CONTEXT,
    "@type": "EducationalOrganization",
    "@id": `${absoluteUrl(input.path)}#organization`,
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    ...(input.image ? { image: absoluteAssetUrl(input.image) } : {}),
    parentOrganization: { "@id": ORG_ID },
    address: postalAddress(),
  };
}

/**
 * Only for pages more than one click from the homepage, and only with tiers
 * that resolve to a real URL (Google requires `item` on non-final entries).
 */
export function breadcrumbSchema(
  trail: { name: string; path?: string }[]
): Json {
  return {
    "@context": CONTEXT,
    "@type": "BreadcrumbList",
    itemListElement: trail.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      ...(entry.path ? { item: absoluteUrl(entry.path) } : {}),
    })),
  };
}

/** Contact page only - reuses the same PostalAddress as the homepage. */
export function contactPageSchema(input: {
  path: string;
  name: string;
  description: string;
}): Json {
  return {
    "@context": CONTEXT,
    "@type": "ContactPage",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    mainEntity: {
      "@id": ORG_ID,
      "@type": "CollegeOrUniversity",
      name: "Vinayaka Mission's Law School",
      address: postalAddress(),
      telephone: CONTACT.telephone,
      email: CONTACT.email,
      geo: { "@type": "GeoCoordinates", ...CAMPUS_COORDS },
    },
  };
}

/**
 * ONLY for pages whose visible HTML actually renders these questions and
 * answers. Adding this to a page without the visible Q&A is a spam-policy
 * violation, so callers must pass the same array the page renders.
 */
export function faqPageSchema(items: { q: string; a: string }[]): Json {
  return {
    "@context": CONTEXT,
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/** News / blog article pages. */
export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  author?: string;
  type?: "BlogPosting" | "NewsArticle";
}): Json {
  return {
    "@context": CONTEXT,
    "@type": input.type ?? "BlogPosting",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(input.path) },
    ...(input.image ? { image: absoluteAssetUrl(input.image) } : {}),
    ...(input.datePublished ? { datePublished: input.datePublished } : {}),
    author: input.author
      ? { "@type": "Person", name: input.author }
      : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}
