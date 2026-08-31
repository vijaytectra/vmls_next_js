import { LLM_FAQ } from "@/data/llm-faq";
import { PAGES, type PageEntry, type PagePath } from "@/lib/seo-pages";
import {
  articleSchema,
  breadcrumbSchema,
  centreSchema,
  contactPageSchema,
  courseSchema,
  faqPageSchema,
  organizationSchema,
  personSchema,
} from "@/lib/schema";

/**
 * Page type -> schema type mapping. This is the whole table; nothing else in
 * the codebase decides which JSON-LD a page gets.
 *
 *   homepage   -> CollegeOrUniversity (the only place the org block is typed out)
 *   programme  -> Course (that programme only) + FAQPage where the page
 *                 actually renders the Q&A
 *   centre     -> EducationalOrganization, parentOrganization -> homepage @id
 *   person     -> Person
 *   contact    -> ContactPage reusing the homepage PostalAddress
 *   news/blog  -> BlogPosting / NewsArticle
 *   any page   -> BreadcrumbList, but only when the registry gives it a trail
 *                 (i.e. more than one click from the homepage)
 *
 * WebSite + SearchAction is deliberately absent: the site has no internal
 * search route, so there is no search URL to declare.
 */

/** Programme data for Course schema, keyed by the programme page path. */
const COURSES: Partial<Record<PagePath, Parameters<typeof courseSchema>[0]>> = {
  "/admissions/llb": {
    name: "Undergraduate Law Programme (LL.B. Hons.)",
    description:
      "Undergraduate law programme at Vinayaka Mission's Law School, Chennai, covering Bar Council of India core courses, electives, clinical courses, mandatory internships and professional skill labs.",
    path: "/admissions/llb",
    educationalCredentialAwarded: "LL.B. (Hons.)",
  },
  "/admissions/llm": {
    name: "LL.M. (One Year)",
    description:
      "One-year full-time LL.M. at Vinayaka Mission's Law School, Chennai, with specialisations in corporate and financial laws, commercial dispute resolution, criminal law and practice, and artificial intelligence, emerging technologies and intellectual property rights.",
    path: "/admissions/llm",
    educationalCredentialAwarded: "LL.M.",
    timeToComplete: "One year, full time",
  },
};

/** Leadership profile pages (faculty detail pages build Person from their own data). */
const PEOPLE: Partial<Record<PagePath, Parameters<typeof personSchema>[0]>> = {
  "/dean": {
    name: "Siddharth Raja",
    jobTitle: "Executive Dean",
    path: "/dean",
    image: "/images/mentor.webp",
    alumniOf: [
      "University of Warwick School of Law",
      "National Law School of India University",
    ],
  },
  "/chancellor": {
    name: "Dr. A. S. Ganesan",
    jobTitle: "Chancellor, Vinayaka Mission's Research Foundation",
    path: "/chancellor",
    image: "/images/vmrf/Frame-53136.webp",
  },
  "/founder": {
    name: "Dr. A. Shanmugasundaram",
    jobTitle: "Founder, Vinayaka Mission's Research Foundation",
    path: "/founder",
    image: "/images/vmrf/Frame-53135.webp",
  },
};

export function schemasForPage(path: PagePath): Record<string, unknown>[] {
  // `satisfies` on PAGES keeps each entry's literal type, which hides the
  // optional fields; widen to the declared shape before reading them.
  const entry: PageEntry = PAGES[path];
  const schemas: Record<string, unknown>[] = [];

  switch (entry.pageType) {
    case "homepage":
      schemas.push(organizationSchema());
      break;

    case "programme": {
      const course = COURSES[path];
      if (course) schemas.push(courseSchema(course));
      // FAQPage only where the page itself renders the questions and answers.
      if (path === "/admissions/llm") schemas.push(faqPageSchema(LLM_FAQ));
      break;
    }

    case "centre":
      schemas.push(
        centreSchema({
          name: entry.ogTitle ?? entry.title,
          description: entry.description,
          path,
          image: entry.image,
        })
      );
      break;

    case "person": {
      const person = PEOPLE[path];
      if (person) schemas.push(personSchema({ ...person, description: entry.description }));
      break;
    }

    case "contact":
      schemas.push(
        contactPageSchema({
          path,
          name: entry.title,
          description: entry.description,
        })
      );
      break;

    default:
      break;
  }

  // News reports and workshop write-ups.
  if (entry.ogType === "article") {
    schemas.push(
      articleSchema({
        headline: entry.ogTitle ?? entry.title,
        description: entry.description,
        path,
        image: entry.image,
        datePublished: entry.publishedTime,
        type: entry.pageType === "news" ? "NewsArticle" : "BlogPosting",
      })
    );
  }

  if (entry.breadcrumb) schemas.push(breadcrumbSchema(entry.breadcrumb));

  return schemas;
}
