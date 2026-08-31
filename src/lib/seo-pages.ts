import type { Metadata } from "next";
import { buildMetadata, type PageSeo } from "@/lib/seo";

/**
 * Every static route on vmls.edu.in, keyed by its own path.
 *
 * The key IS the path passed to buildMetadata, so canonical / og:url /
 * DC.identifier cannot be copy-pasted from another page: `pageMetadata("/x")`
 * can only ever produce https://vmls.edu.in/x.
 *
 * `pageType` drives the audit report and the schema mapping; it is not
 * emitted as markup.
 */
export type PageType =
  | "homepage"
  | "programme"
  | "admissions"
  | "centre"
  | "person"
  | "faculty-index"
  | "about"
  | "governance"
  | "committee"
  | "contact"
  | "campus"
  | "student-life"
  | "library"
  | "event"
  | "news"
  | "blog-index"
  | "legal"
  | "tool"
  | "dev-artifact";

export type PageEntry = Omit<PageSeo, "path"> & {
  pageType: PageType;
  /** Only for pages more than one click from the homepage. Tiers with a real URL only. */
  breadcrumb?: { name: string; path?: string }[];
  /** Audit note surfaced in the report, not in markup. */
  note?: string;
};

const CAMPUS = "/images/vmls/frame-1@3x.webp";

export const PAGES = {
  /* ------------------------------------------------------------------ */
  /* Homepage                                                            */
  /* ------------------------------------------------------------------ */
  "/": {
    pageType: "homepage",
    title: "VMLS Chennai – LLB, BA LLB & LLM Law College",
    description:
      "Vinayaka Mission's Law School, Chennai – mentored by O.P. Jindal Global University. UGC-recognised LL.B. (Hons.), integrated five-year law and LL.M. programmes.",
    ogTitle: "VMLS Chennai – LLB, BA LLB & LLM Law College",
    ogDescription:
      "Mentored by O.P. Jindal Global University. Law degrees in Chennai – explore programmes, scholarships, centres of excellence and campus life.",
    image: "/images/home-about.webp",
    imageAlt: "Vinayaka Mission's Law School (VMLS) campus, Chennai",
    dcType: "Text.Homepage",
    geo: true,
  },

  /* ------------------------------------------------------------------ */
  /* Programme + admissions                                              */
  /* ------------------------------------------------------------------ */
  "/admissions/llb": {
    pageType: "programme",
    title: "LL.B. Admissions in Chennai – VMLS Law Programmes",
    description:
      "Undergraduate law admissions at VMLS Chennai: credit structure, Bar Council of India core courses, clinical courses, internships and professional skill labs.",
    ogTitle: "Study LL.B. at VMLS Chennai",
    ogDescription:
      "BCI core courses, clinical training, mandatory internships and skill labs – see how the VMLS undergraduate law programme is built.",
    image: "/images/llb/2.webp",
    imageAlt: "VMLS undergraduate law classroom, Chennai",
    geo: true,
    breadcrumb: [{ name: "Home", path: "/" }, { name: "LL.B. Admissions" }],
    note: "Visible breadcrumb shows a Home / Admissions / LL.B. tier, but no /admissions index route exists, so the URL-less tier is omitted from BreadcrumbList.",
  },
  "/admissions/llm": {
    pageType: "programme",
    title: "LL.M. Admissions Chennai – One-Year LL.M. at VMLS",
    description:
      "One-year full-time LL.M. at VMLS Chennai with specialisations in corporate and financial laws, dispute resolution, criminal law and AI, technology and IPR.",
    ogTitle: "One-Year LL.M. at VMLS Chennai",
    ogDescription:
      "Specialise in corporate and financial laws, commercial dispute resolution, criminal law, or AI, emerging technologies and IPR.",
    image: "/images/llm/1.webp",
    imageAlt: "VMLS LL.M. postgraduate law students, Chennai",
    geo: true,
    breadcrumb: [{ name: "Home", path: "/" }, { name: "LL.M. Admissions" }],
    note: "FAQPage schema is emitted here from the same faqData array the page renders visibly (10 Q&As).",
  },
  "/admissions/process": {
    pageType: "admissions",
    title: "Law Admission Process & Eligibility – VMLS Chennai",
    description:
      "How to apply to VMLS: eligibility for the three-year LL.B., five-year integrated law and one-year LL.M. programmes, plus the VLAT entrance test format.",
    ogTitle: "How to Apply to VMLS Chennai",
    ogDescription:
      "Eligibility, application steps and the VLAT entrance test – a 60-minute bilingual, AI-proctored online exam.",
    image: "/images/llm/admission-header.webp",
    imageAlt: "VMLS admissions process, Chennai law school",
    geo: true,
    breadcrumb: [{ name: "Home", path: "/" }, { name: "Admission Process" }],
    note: "No visible FAQ section on this page, so no FAQPage schema despite it being an admissions page.",
  },
  "/scholarships": {
    pageType: "admissions",
    title: "Law Scholarships at VMLS Chennai – VLAT Merit Awards",
    description:
      "Scholarships for VMLS law students, including VLAT merit awards and the Anuradha Shero Scholarship for female students entering legal education in Chennai.",
    ogTitle: "Scholarships at VMLS Chennai",
    ogDescription:
      "Merit scholarships based on VLAT performance, plus dedicated awards promoting legal education for women.",
    image: "/images/schlorship/01.webp",
    imageAlt: "VMLS scholarship recipients, Chennai",
    geo: true,
  },

  /* ------------------------------------------------------------------ */
  /* Centres of excellence                                               */
  /* ------------------------------------------------------------------ */
  "/global-tamil-law-centre": {
    pageType: "centre",
    title: "Global Tamil Law Centre – VMLS Chennai",
    description:
      "The Global Tamil Law Centre at VMLS researches and promotes Tamil legal heritage, bilingual scholarship and contemporary law for the global Tamil community.",
    ogTitle: "Global Tamil Law Centre at VMLS",
    ogDescription:
      "Research, preservation and promotion of Tamil legal heritage and bilingual legal scholarship in Chennai.",
    image: "/images/global/tl1.webp",
    imageAlt: "Global Tamil Law Centre, VMLS Chennai",
  },
  "/centre-for-justice-through-technology": {
    pageType: "centre",
    title: "Centre for Justice Through Technology – VMLS",
    description:
      "The Centre for Justice Through Technology at VMLS explores legal technology, e-filing, AI and digital tools that widen access to justice for Indian communities.",
    ogTitle: "Centre for Justice Through Technology",
    ogDescription:
      "Where law meets technology at VMLS – legal tech, e-filing and AI projects that widen access to justice.",
    image: "/images/justice/Frame53138.webp",
    imageAlt: "Centre for Justice Through Technology, VMLS Chennai",
  },
  "/cpil": {
    pageType: "centre",
    title: "Centre for the Promotion of International Law – VMLS",
    description:
      "CPIL at VMLS advances international legal research, advocacy and global cooperation through lecture series, conferences and student engagement in Chennai.",
    ogTitle: "Centre for the Promotion of International Law",
    ogDescription:
      "International legal research, advocacy and global cooperation at VMLS Chennai.",
    image: "/images/cpil/il0.webp",
    imageAlt: "Centre for the Promotion of International Law, VMLS Chennai",
    note: "News pages label /cpil as 'Centre for Public Interest Litigation' in their visible breadcrumb - a content conflict flagged in the audit, not resolved in markup.",
  },
  "/maritime-law": {
    pageType: "centre",
    title: "Centre for Maritime Law – VMLS Chennai",
    description:
      "The Centre for Maritime Law at VMLS focuses on shipping, cargo, admiralty and the law of the sea through research, summits and policy engagement in Chennai.",
    ogTitle: "Centre for Maritime Law at VMLS",
    ogDescription:
      "Shipping, cargo, admiralty and law of the sea research, summits and policy work at VMLS Chennai.",
    image: "/images/maritime/ml0.webp",
    imageAlt: "Centre for Maritime Law, VMLS Chennai",
  },
  "/centre-for-access-to-justice": {
    pageType: "centre",
    title: "Centre for Access to Justice – VMLS Chennai",
    description:
      "The Centre for Access to Justice at VMLS links legal education to community outreach, legal aid clinics and advocacy for marginalised communities in Chennai.",
    ogTitle: "Centre for Access to Justice at VMLS",
    ogDescription:
      "Legal aid, community outreach and advocacy that make justice reachable for marginalised communities.",
    image: "/images/CAJ-img.webp",
    imageAlt: "Centre for Access to Justice, VMLS Chennai",
  },

  /* ------------------------------------------------------------------ */
  /* People                                                              */
  /* ------------------------------------------------------------------ */
  "/dean": {
    pageType: "person",
    title: "Siddharth Raja – Executive Dean, VMLS Chennai",
    description:
      "Meet Siddharth Raja, Executive Dean of Vinayaka Mission's Law School, on preparing law students for mergers, private equity and complex commercial practice.",
    ogTitle: "Message from the Executive Dean, VMLS",
    ogDescription:
      "Siddharth Raja on building a globally relevant legal education that pairs theory with practical excellence.",
    image: "/images/mentor.webp",
    imageAlt: "Siddharth Raja, Executive Dean of VMLS",
    ogType: "profile",
  },
  "/chancellor": {
    pageType: "person",
    title: "Dr. A. S. Ganesan – Chancellor, VMRF",
    description:
      "Dr. A. S. Ganesan, Chancellor of Vinayaka Mission's Research Foundation, on holistic education, ethical leadership and the growth of VMLS in Chennai, India.",
    ogTitle: "Chancellor's Message – VMRF",
    ogDescription:
      "Dr. A. S. Ganesan on holistic development, ethical grounding and the future of legal education at VMLS.",
    image: "/images/vmrf/Frame-53136.webp",
    imageAlt: "Dr. A. S. Ganesan, Chancellor of VMRF",
    ogType: "profile",
  },
  "/founder": {
    pageType: "person",
    title: "Dr. A. Shanmugasundaram – Founder, VMRF",
    description:
      "Dr. A. Shanmugasundaram, founder of Vinayaka Mission's Research Foundation, built a small charitable trust into an ecosystem serving nearly 15,000 students.",
    ogTitle: "Our Founder – Dr. A. Shanmugasundaram",
    ogDescription:
      "From a small charitable trust to an educational ecosystem serving nearly 15,000 students across India.",
    image: "/images/vmrf/Frame-53135.webp",
    imageAlt: "Dr. A. Shanmugasundaram, founder of VMRF",
    ogType: "profile",
  },
  "/faculty-profiles": {
    pageType: "faculty-index",
    title: "Law Faculty at VMLS Chennai – Professors & Deans",
    description:
      "Browse the VMLS law faculty: professors, associate deans and practitioners teaching constitutional, criminal, corporate, maritime and technology law in Chennai.",
    ogTitle: "Meet the VMLS Law Faculty",
    ogDescription:
      "Legal scholars, seasoned practitioners and academic innovators teaching across every branch of law.",
    image: "/images/home-faculty.webp",
    imageAlt: "VMLS law faculty members, Chennai",
  },
  "/faculty-achievements": {
    pageType: "faculty-index",
    title: "Faculty Achievements & Research – VMLS Chennai",
    description:
      "Awards, publications, policy contributions and recognitions earned by VMLS law faculty in AI regulation, data privacy, maritime law and international law.",
    ogTitle: "VMLS Faculty Achievements",
    ogDescription:
      "Research impact, policy advisory roles and academic recognitions earned by our law faculty.",
    image: "/images/Frame89.webp",
    imageAlt: "VMLS faculty research and achievements",
  },
  "/guest-lecturers": {
    pageType: "faculty-index",
    title: "Guest Lecturers & Visiting Faculty – VMLS Chennai",
    description:
      "VMLS hosts judges, senior advocates, international scholars and industry leaders as guest lecturers, bringing practitioner perspective into the classroom.",
    ogTitle: "Guest Lecturers at VMLS",
    ogDescription:
      "Legal luminaries, international scholars and industry leaders bringing practice into the classroom.",
    image: "/images/home-faculty.webp",
    imageAlt: "Guest lecture session at VMLS Chennai",
    note: "Thin content: the page currently states the guest lecturer list is being curated. Description is deliberately scoped to what is visible.",
  },

  /* ------------------------------------------------------------------ */
  /* About / institutional                                               */
  /* ------------------------------------------------------------------ */
  "/about-vmls": {
    pageType: "about",
    title: "About VMLS – Law School in Chennai Since 2021",
    description:
      "Vinayaka Mission's Law School was established by VMRF to teach law for national and global practice, admitting its first cohort in 2021 with JGLS mentoring.",
    ogTitle: "About Vinayaka Mission's Law School",
    ogDescription:
      "Founded in 2021 under VMRF and mentored by Jindal Global Law School – the law school of the future.",
    image: CAMPUS,
    imageAlt: "Vinayaka Mission's Law School campus, Chennai",
    geo: true,
  },
  "/about-vmrf": {
    pageType: "about",
    title: "About VMRF – Deemed to be University, Salem",
    description:
      "Vinayaka Mission's Research Foundation is a deemed to be university with campuses in Chennai, Salem and Pondicherry and nearly 15,000 students enrolled.",
    ogTitle: "About Vinayaka Mission's Research Foundation",
    ogDescription:
      "A deemed to be university spanning medicine, engineering, management and law across three campuses.",
    image: "/images/vmrf/vmrf-header.webp",
    imageAlt: "Vinayaka Mission's Research Foundation campus",
    geo: true,
  },
  "/collaborations": {
    pageType: "about",
    title: "Collaborations & JGLS Mentorship – VMLS Chennai",
    description:
      "VMLS is mentored by O.P. Jindal Global University and Jindal Global Law School, and partners with institutions in India and abroad on legal education.",
    ogTitle: "Our Collaborations and Mentorship",
    ogDescription:
      "The first Indian law school formally mentored by another private law school – plus global academic partners.",
    image: "/images/collab/Frame-53245.webp",
    imageAlt: "VMLS institutional collaborations and partnerships",
  },
  "/iqac": {
    pageType: "about",
    title: "IQAC – Internal Quality Assurance Cell, VMLS",
    description:
      "The Internal Quality Assurance Cell at VMLS drives continuous academic and administrative quality enhancement, benchmarking and accreditation readiness.",
    ogTitle: "Internal Quality Assurance Cell at VMLS",
    ogDescription:
      "Sustaining academic and administrative excellence through continuous quality enhancement.",
    image: "/images/vmls/vmls-arch.png",
    imageAlt: "VMLS campus architecture, Chennai",
  },
  "/board-of-advisors": {
    pageType: "governance",
    title: "Board of Advisors – VMLS Chennai Law School",
    description:
      "The VMLS Board of Advisors brings together legal luminaries and visionaries who provide strategic guidance on academic direction and institutional growth.",
    ogTitle: "VMLS Board of Advisors",
    ogDescription:
      "Distinguished legal luminaries shaping the strategic direction of Vinayaka Mission's Law School.",
    image: "/images/bod/advisor-hero-bg.png",
    imageAlt: "VMLS Board of Advisors",
  },
  "/mentoring-committee": {
    pageType: "governance",
    title: "Mentoring Committee – VMLS Chennai",
    description:
      "The VMLS Mentoring Committee pairs eminent legal professionals and academics from India and abroad with the school under its institutional mentorship framework.",
    ogTitle: "VMLS Mentoring Committee",
    ogDescription:
      "Eminent legal professionals and academics guiding VMLS through institutional mentorship.",
    image: "/images/bod/mentor-hero-bg.png",
    imageAlt: "VMLS Mentoring Committee members",
  },

  /* ------------------------------------------------------------------ */
  /* Contact                                                             */
  /* ------------------------------------------------------------------ */
  "/contact-us": {
    pageType: "contact",
    title: "Contact VMLS Chennai – Admissions Enquiries",
    description:
      "Contact Vinayaka Mission's Law School at Vinayaka Nagar, Paiyanoor, Chennai 603104 for admissions, programme and campus enquiries by phone or by email.",
    ogTitle: "Contact Vinayaka Mission's Law School",
    ogDescription:
      "Campus and city office addresses, phone numbers and admissions email for VMLS Chennai.",
    image: CAMPUS,
    imageAlt: "VMLS campus entrance, Paiyanoor, Chennai",
    geo: true,
  },

  /* ------------------------------------------------------------------ */
  /* Campus & infrastructure                                             */
  /* ------------------------------------------------------------------ */
  "/infrastructure": {
    pageType: "campus",
    title: "Campus Infrastructure – VMLS Chennai Law School",
    description:
      "Smart classrooms, a moot court hall, seminar hall, law library and hostels across the VMLS campus on Rajiv Gandhi Salai at Paiyanoor, Chennai 603104, India.",
    ogTitle: "VMLS Campus Infrastructure",
    ogDescription:
      "Smart classrooms, a moot court hall, seminar hall, library and hostels on one Chennai campus.",
    image: "/images/class1.webp",
    imageAlt: "Smart classroom at VMLS Chennai",
    geo: true,
  },
  "/main-building": {
    pageType: "campus",
    title: "Main Building – VMLS Chennai Campus",
    description:
      "The VMLS main building pairs a brown brick facade with clean modern lines, housing classrooms and administration at the heart of the Chennai law school campus.",
    ogTitle: "The VMLS Main Building",
    ogDescription:
      "Modern architecture where functionality meets aesthetic precision at the VMLS Chennai campus.",
    image: "/images/mb1.webp",
    imageAlt: "Main building of VMLS, Chennai",
    geo: true,
  },
  "/moot-court": {
    pageType: "campus",
    title: "Moot Court Hall – VMLS Chennai Law School",
    description:
      "The VMLS moot court hall simulates real court proceedings with professional seating and recording technology, so students can build courtroom advocacy skills.",
    ogTitle: "Moot Court Hall at VMLS",
    ogDescription:
      "A courtroom built for practice – professional setup and recording for advocacy training.",
    image: "/images/mcourt1.webp",
    imageAlt: "Moot court hall at VMLS Chennai",
    geo: true,
  },
  "/seminar-hall": {
    pageType: "campus",
    title: "Seminar Hall – VMLS Chennai Campus",
    description:
      "The VMLS seminar hall hosts conferences, guest lectures and academic events with modern audio-visual equipment for presentations and interactive sessions.",
    ogTitle: "Seminar Hall at VMLS",
    ogDescription:
      "A modern venue for conferences, guest lectures and academic events at VMLS Chennai.",
    image: "/images/shall1.webp",
    imageAlt: "Seminar hall at VMLS Chennai",
    geo: true,
  },
  "/atrium": {
    pageType: "campus",
    title: "The Atrium – VMLS Chennai Campus Life",
    description:
      "The VMLS atrium is the social heart of campus: soaring ceilings, natural light and informal seating where law students gather between classes to study.",
    ogTitle: "The Atrium at VMLS",
    ogDescription:
      "Soaring ceilings, natural light and collaborative space at the heart of the VMLS campus.",
    image: "/images/atrium1.webp",
    imageAlt: "The atrium at VMLS Chennai",
    geo: true,
  },
  "/hostel": {
    pageType: "campus",
    title: "Hostel Facilities – VMLS Chennai Law School",
    description:
      "VMLS hostels offer triple and four-sharing rooms with attached or common baths, high-speed Wi-Fi, 24x7 security, surveillance and an in-house doctor on campus.",
    ogTitle: "Hostel Life at VMLS",
    ogDescription:
      "Comfortable, secure student accommodation with Wi-Fi, 24x7 security and on-campus medical support.",
    image: "/images/hostel3.webp",
    imageAlt: "VMLS student hostel, Chennai",
    geo: true,
  },
  "/campus-life": {
    pageType: "campus",
    title: "Campus Life at VMLS Chennai – Clubs & Culture",
    description:
      "Life beyond the classroom at VMLS: cultural festivals, sports leagues, student clubs and activities that shape a close-knit law school community in Chennai.",
    ogTitle: "Campus Life at VMLS Chennai",
    ogDescription:
      "Festivals, sports, clubs and community – what life at VMLS looks like outside the lecture hall.",
    image: "/images/il1.webp",
    imageAlt: "Campus life at VMLS Chennai",
    geo: true,
  },

  /* ------------------------------------------------------------------ */
  /* Library                                                             */
  /* ------------------------------------------------------------------ */
  "/library": {
    pageType: "library",
    title: "Law Library – VMLS Chennai Legal Research",
    description:
      "The VMLS law library holds law reports, journals, textbooks and electronic databases, with orientation programmes and research support for students and faculty.",
    ogTitle: "The VMLS Law Library",
    ogDescription:
      "Law reports, journals and electronic databases backed by legal research support and orientation.",
    image: "/images/library-header-img.webp",
    imageAlt: "VMLS law library, Chennai",
    geo: true,
  },
  "/library-membership": {
    pageType: "library",
    title: "Library Membership – VMLS Law Library",
    description:
      "Membership categories, entitlements and access rules for the VMLS law library, including digital database access, physical collections and research services.",
    ogTitle: "VMLS Law Library Membership",
    ogDescription:
      "Who can join the VMLS law library, what each membership category includes and how access works.",
    image: "/images/library/library5.webp",
    imageAlt: "Reading area at the VMLS law library",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Library", path: "/library" },
      { name: "Library Membership" },
    ],
  },
  "/library-rules": {
    pageType: "library",
    title: "Library Rules & Borrowing – VMLS Law Library",
    description:
      "Borrowing entitlements, code of conduct and service standards governing use of the VMLS law library, set out by member category for students, faculty and staff.",
    ogTitle: "VMLS Law Library Rules",
    ogDescription:
      "Borrowing limits, conduct rules and service standards for every category of library member.",
    image: "/images/library-rules-header.png",
    imageAlt: "VMLS law library rules and borrowing desk",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Library", path: "/library" },
      { name: "Library Rules" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Student life & support                                              */
  /* ------------------------------------------------------------------ */
  "/student-affairs": {
    pageType: "student-life",
    title: "Office of Student Affairs – VMLS Chennai",
    description:
      "The Office of Student Affairs at VMLS supports student leadership, counselling, welfare and extracurricular life throughout your years at the law school.",
    ogTitle: "Student Affairs at VMLS",
    ogDescription:
      "Guidance, counselling and opportunities – the office behind student life at VMLS Chennai.",
    image: "/images/studentaff/1.webp",
    imageAlt: "VMLS students on campus, Chennai",
  },
  "/student-clubs": {
    pageType: "student-life",
    title: "Student Clubs & Societies – VMLS Chennai",
    description:
      "Student-led clubs at VMLS cover mooting, ADR, debate, culture and sport, giving law students a platform to lead, compete and build a lasting legacy on campus.",
    ogTitle: "Student Clubs at VMLS",
    ogDescription:
      "Mooting, ADR, debate, culture and sport – the student-led clubs that drive campus life.",
    image: "/images/studentaff/moot.webp",
    imageAlt: "VMLS student club activity, Chennai",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Student Affairs", path: "/student-affairs" },
      { name: "Student Clubs" },
    ],
  },
  "/anti-ragging": {
    pageType: "student-life",
    title: "Anti-Ragging Cell – VMLS Chennai Law School",
    description:
      "VMLS enforces a zero-tolerance anti-ragging policy under UGC and BCI regulations, with active monitoring, awareness programmes and grievance redressal.",
    ogTitle: "Anti-Ragging Cell at VMLS",
    ogDescription:
      "Zero tolerance, active monitoring and immediate redressal under UGC and BCI anti-ragging regulations.",
    image: "/images/studentaff/1.webp",
    imageAlt: "VMLS anti-ragging awareness on campus",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Student Affairs", path: "/student-affairs" },
      { name: "Anti-Ragging Cell" },
    ],
  },
  "/internship-and-career-services": {
    pageType: "student-life",
    title: "Internships & Career Services – VMLS Chennai",
    description:
      "The VMLS Office of Career Services prepares law students for internships and legal careers through training, employer outreach and placement support in Chennai.",
    ogTitle: "Career Services at VMLS",
    ogDescription:
      "Internship placement, employer outreach and career training for VMLS law students.",
    image: "/images/career/hero.png",
    imageAlt: "VMLS career services and placements",
  },
  "/chat-with-student": {
    pageType: "tool",
    title: "Chat With a VMLS Student – Ask Current Students",
    description:
      "Talk to current VMLS law students about classes, hostels, clubs and campus life in Chennai before you apply, through the school's student chat portal.",
    ogTitle: "Chat With a VMLS Student",
    ogDescription:
      "Ask current students what studying law at VMLS Chennai is really like.",
    image: CAMPUS,
    imageAlt: "VMLS students on campus, Chennai",
    note: "Page type not in the original brief: it is an embedded third-party chat portal, classified as 'tool'. Thin unique text, so the description stays short and factual.",
  },

  /* ------------------------------------------------------------------ */
  /* Statutory committees                                                */
  /* ------------------------------------------------------------------ */
  "/anti-ragging-committee": {
    pageType: "committee",
    title: "Anti-Ragging Committee – Members & Contacts, VMLS",
    description:
      "Members, designations and contact details of the VMLS Anti-Ragging Committee, the statutory body responsible for a ragging-free campus under UGC regulations.",
    ogTitle: "VMLS Anti-Ragging Committee",
    ogDescription:
      "Who sits on the committee and how to reach them – names, roles, email and phone numbers.",
    image: CAMPUS,
    imageAlt: "VMLS campus, Chennai",
  },
  "/anti-ragging-squad": {
    pageType: "committee",
    title: "Anti-Ragging Squad – Members & Contacts, VMLS",
    description:
      "Members and contact details of the VMLS Anti-Ragging Squad, which maintains constant vigil across campus and hostels and responds to ragging complaints.",
    ogTitle: "VMLS Anti-Ragging Squad",
    ogDescription:
      "The squad that keeps constant vigil across campus and hostels – members and contact details.",
    image: CAMPUS,
    imageAlt: "VMLS campus, Chennai",
  },
  "/internal-complaint-committee": {
    pageType: "committee",
    title: "Internal Complaint Committee – VMLS Chennai",
    description:
      "Members and contact details of the VMLS Internal Complaint Committee, constituted to address sexual harassment complaints from students, faculty and staff.",
    ogTitle: "VMLS Internal Complaint Committee",
    ogDescription:
      "The committee ensuring a safe and respectful campus – members, roles and contact details.",
    image: CAMPUS,
    imageAlt: "VMLS campus, Chennai",
  },
  "/gender-sensitization-cell": {
    pageType: "committee",
    title: "Gender Sensitization Cell – VMLS Chennai",
    description:
      "Members and contact details of the VMLS Gender Sensitization Cell, which promotes gender equality and a sensitised campus environment for students and staff.",
    ogTitle: "Gender Sensitization Cell at VMLS",
    ogDescription:
      "Promoting gender equality and a sensitised campus – members and how to reach them.",
    image: CAMPUS,
    imageAlt: "VMLS campus, Chennai",
  },
  "/women-empowerment-cell": {
    pageType: "committee",
    title: "Women Empowerment Cell – VMLS Chennai",
    description:
      "Members and contact details of the VMLS Women Empowerment Cell, supporting women students and staff through awareness, mentoring and professional development.",
    ogTitle: "Women Empowerment Cell at VMLS",
    ogDescription:
      "Awareness, support and professional development for women students and staff at VMLS.",
    image: CAMPUS,
    imageAlt: "VMLS campus, Chennai",
  },
  "/student-grievance-redressal-committee": {
    pageType: "committee",
    title: "Student Grievance Redressal Committee – VMLS",
    description:
      "Members and contact details of the VMLS Student Grievance Redressal Committee, which resolves student concerns through a fair and transparent process.",
    ogTitle: "Student Grievance Redressal at VMLS",
    ogDescription:
      "A fair, transparent route for student concerns – committee members and contact details.",
    image: CAMPUS,
    imageAlt: "VMLS campus, Chennai",
  },

  /* ------------------------------------------------------------------ */
  /* Events                                                              */
  /* ------------------------------------------------------------------ */
  "/international-conference": {
    pageType: "event",
    title: "International Conference – VMLS Chennai Law School",
    description:
      "Call for papers, aims and scope, submission guidelines and abstract requirements for the international law conference hosted by VMLS in Chennai, India.",
    ogTitle: "International Conference at VMLS",
    ogDescription:
      "Aims, scope and submission guidelines for the VMLS international law conference.",
    image: "/images/collab/img5.webp",
    imageAlt: "International conference at VMLS Chennai",
  },
  "/iqac/workshops": {
    pageType: "event",
    title: "IQAC Workshops & Seminars – VMLS Chennai",
    description:
      "Faculty development workshops and seminars run by the VMLS Internal Quality Assurance Cell, covering teaching tools, pedagogy and professional development.",
    ogTitle: "IQAC Workshops at VMLS",
    ogDescription:
      "Faculty development workshops and seminars organised by the VMLS quality assurance cell.",
    image: "/images/iqac/iqac-1.webp",
    imageAlt: "IQAC workshop session at VMLS",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "IQAC", path: "/iqac" },
      { name: "Workshops" },
    ],
  },
  "/iqac/workshops/pdp": {
    pageType: "event",
    title: "PDP: Becoming an Inspiring Teacher – VMLS IQAC",
    description:
      "Report on the VMLS Professional Development Programme 'Becoming an Inspiring Teacher', a faculty empowerment initiative held on 15 September 2023 in Tamil Nadu.",
    ogTitle: "Becoming an Inspiring Teacher – VMLS PDP",
    ogDescription:
      "Inside the faculty empowerment programme held at the Aarupadai Veedu campus in September 2023.",
    image: "/images/iqac/iqac-1.webp",
    imageAlt: "Professional Development Programme at VMLS",
    ogType: "article",
    dcType: "Text.Article",
    publishedTime: "2023-09-15",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "IQAC", path: "/iqac" },
      { name: "Workshops", path: "/iqac/workshops" },
      { name: "Professional Development Programme" },
    ],
  },
  "/iqac/workshops/teaching-learning-tools": {
    pageType: "event",
    title: "Teaching & Learning Tools Workshop – VMLS IQAC",
    description:
      "Report on the VMLS workshop on teaching and learning tools, where Dr. Vembanoor Nedumaran explored integrating artificial intelligence into legal education.",
    ogTitle: "Teaching and Learning Tools Workshop",
    ogDescription:
      "How AI tools can reshape teaching methods – a VMLS faculty development workshop report.",
    image: "/images/iqac/report-on-workshop2.webp",
    imageAlt: "Teaching and learning tools workshop at VMLS",
    ogType: "article",
    dcType: "Text.Article",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "IQAC", path: "/iqac" },
      { name: "Workshops", path: "/iqac/workshops" },
      { name: "Teaching and Learning Tools" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Blog index                                                          */
  /* ------------------------------------------------------------------ */
  "/blogs": {
    pageType: "blog-index",
    title: "Law Blog – VMLS Chennai Legal Insights",
    description:
      "Articles from VMLS faculty and students on clinical legal education, LL.M. specialisations, competition law, careers in law and Indian legal developments.",
    ogTitle: "The VMLS Law Blog",
    ogDescription:
      "Clinical legal education, LL.M. specialisations, competition law and legal career guidance.",
    image: "/images/blogs/cle-in-healthcare.webp",
    imageAlt: "VMLS law blog articles",
  },

  /* ------------------------------------------------------------------ */
  /* News & announcements                                                */
  /* Breadcrumb parent = the centre or office that ran the event, taken   */
  /* from each page's own visible breadcrumb.                            */
  /* ------------------------------------------------------------------ */
  "/news/aarambh-fiesta": {
    pageType: "news",
    title: "Aarambh Fiesta – VMLS Induction Festival, Chennai",
    description:
      "Aarambh, the VMLS induction festival, welcomed the newest cohort with singing, dance-offs and games as freshers competed and found their place on campus.",
    ogTitle: "Aarambh: The VMLS Induction Festival",
    ogDescription:
      "Music, dance and games as VMLS welcomes its newest law students to campus.",
    image: "/images/news/3rd.webp",
    imageAlt: "Aarambh induction festival at VMLS Chennai",
    ogType: "article",
    dcType: "Text.Article",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Student Affairs", path: "/student-affairs" },
      { name: "Aarambh Fiesta" },
    ],
  },
  "/news/ai-for-justice-vmls-setu-law-workshop": {
    pageType: "news",
    title: "AI for Justice: VMLS & Setu.Law Workshop Report",
    description:
      "The Centre for Justice through Technology and Setu.Law ran a workshop on crafting impact through AI at the grassroots, with hands-on legal problem-solving.",
    ogTitle: "AI for Justice at the Grassroots",
    ogDescription:
      "A VMLS and Setu.Law workshop on putting AI to work for access to justice.",
    image: "/images/justice/ai-center-of-justice.webp",
    imageAlt: "AI for Justice workshop at VMLS Chennai",
    ogType: "article",
    dcType: "Text.Article",
    breadcrumb: [
      { name: "Home", path: "/" },
      {
        name: "Centre for Justice Through Technology",
        path: "/centre-for-justice-through-technology",
      },
      { name: "AI for Justice Workshop" },
    ],
  },
  "/news/distinguished-guest-lecture-series-law-of-the-sea": {
    pageType: "news",
    title: "Guest Lecture Series on the Law of the Sea – VMLS",
    description:
      "The VMLS Centre for Maritime Law hosted a three-session distinguished guest lecture series on the law of the sea in March and April 2024 in Chennai, India.",
    ogTitle: "Law of the Sea Lecture Series at VMLS",
    ogDescription:
      "Three sessions on the law of the sea, hosted by the VMLS Centre for Maritime Law.",
    image: "/images/maritime/distinguish-guest.webp",
    imageAlt: "Law of the Sea guest lecture at VMLS Chennai",
    ogType: "article",
    dcType: "Text.Article",
    publishedTime: "2024-04-03",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Centre for Maritime Law", path: "/maritime-law" },
      { name: "Law of the Sea Lecture Series" },
    ],
  },
  "/news/e-filing": {
    pageType: "news",
    title: "E-Filing Workshop for Young Lawyers – VMLS",
    description:
      "The Centre for Justice through Technology introduced VMLS students to court e-filing, walking young lawyers through digital case submission step by step.",
    ogTitle: "Introduction to E-Filing for Young Lawyers",
    ogDescription:
      "A practical VMLS session on digital court filing for law students starting out.",
    image: "/images/justice/e-filling.webp",
    imageAlt: "E-filing workshop at VMLS Chennai",
    ogType: "article",
    dcType: "Text.Article",
    breadcrumb: [
      { name: "Home", path: "/" },
      {
        name: "Centre for Justice Through Technology",
        path: "/centre-for-justice-through-technology",
      },
      { name: "Introduction to E-Filing" },
    ],
  },
  "/news/ethics-values-litigation": {
    pageType: "news",
    title: "Guest Lecture on Ethics, Values and Litigation – VMLS",
    description:
      "A VMLS guest lecture on professional responsibility and integrity, bridging classroom legal theory and the ethical dilemmas lawyers meet in the courtroom.",
    ogTitle: "Ethics, Values and Litigation at VMLS",
    ogDescription:
      "Professional responsibility and integrity – lessons for budding lawyers from the courtroom.",
    image: "/images/news/Lecture-ethics.webp",
    imageAlt: "Guest lecture on ethics and litigation at VMLS",
    ogType: "article",
    dcType: "Text.Article",
    note: "Linked directly from the homepage (one click), so no BreadcrumbList. Body text states 29th April 2026 - a future date flagged for editorial review, so no publishedTime is emitted.",
  },
  "/news/flip-case-legal-design-challenge": {
    pageType: "news",
    title: "Flip Case: Legal Design Challenge at VMLS",
    description:
      "Flip Case, run by the Centre for Justice through Technology, challenged VMLS students to redesign legal processes and documents for real-world usability.",
    ogTitle: "Flip Case – A Legal Design Challenge",
    ogDescription:
      "Students redesign legal processes for usability in this VMLS legal design challenge.",
    image: "/images/justice/flip-case.webp",
    imageAlt: "Flip Case legal design challenge at VMLS",
    ogType: "article",
    dcType: "Text.Article",
    breadcrumb: [
      { name: "Home", path: "/" },
      {
        name: "Centre for Justice Through Technology",
        path: "/centre-for-justice-through-technology",
      },
      { name: "Flip Case Legal Design Challenge" },
    ],
  },
  "/news/gender-sensitisation": {
    pageType: "news",
    title: "Gender Sensitisation & Equality in Lawyering – VMLS",
    description:
      "A VMLS guest lecture on gender sensitisation examined how legal professionals can advance gender justice and confront systemic inequality in practice.",
    ogTitle: "Gender Equality in Lawyering at VMLS",
    ogDescription:
      "How lawyers can advance gender justice and address systemic inequality in legal practice.",
    image: "/images/news/Gender Equality_02.webp",
    imageAlt: "Gender sensitisation lecture at VMLS Chennai",
    ogType: "article",
    dcType: "Text.Article",
    note: "Linked directly from the homepage (one click), so no BreadcrumbList.",
  },
  "/news/international-conference-on-rivers": {
    pageType: "news",
    title: "International Conference on Rivers – VMLS Chennai",
    description:
      "VMLS hosted the International Conference on Rivers, with speakers from the University of Helsinki and Bharathidasan University on sustainable river governance.",
    ogTitle: "International Conference on Rivers",
    ogDescription:
      "Legal frameworks for sustainable river governance, debated at VMLS Chennai.",
    image: "/images/cpil/rivers.webp",
    imageAlt: "International Conference on Rivers at VMLS Chennai",
    ogType: "article",
    dcType: "Text.Article",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Centre for the Promotion of International Law", path: "/cpil" },
      { name: "International Conference on Rivers" },
    ],
  },
  "/news/international-tamil-law-conference-2025": {
    pageType: "news",
    title: "International Tamil Law Conference 2025 – VMLS",
    description:
      "The Global Tamil Law Centre hosted the International Tamil Law Conference 2025 in Chennai on Tamil language, culture and legal frameworks in a globalised era.",
    ogTitle: "International Tamil Law Conference 2025",
    ogDescription:
      "Intersecting Worlds: Tamil language, culture and legal frameworks in a globalised era.",
    image: "/images/global/inter-tamil-law.webp",
    imageAlt: "International Tamil Law Conference 2025 at VMLS",
    ogType: "article",
    dcType: "Text.Article",
    publishedTime: "2025-03-07",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Global Tamil Law Centre", path: "/global-tamil-law-centre" },
      { name: "International Tamil Law Conference 2025" },
    ],
  },
  "/news/intra-trail-tamil-moot-court": {
    pageType: "news",
    title: "Intra Trail Tamil Moot Court – VMLS Chennai",
    description:
      "Nineteen teams argued in the VMLS Intra Trail Tamil Moot Court, judged by ten district court advocates and two high court advocates across preliminary rounds.",
    ogTitle: "Intra Trail Tamil Moot Court at VMLS",
    ogDescription:
      "19 teams, 12 judges and a full trial simulation in Tamil at VMLS Chennai.",
    image: "/images/global/tamil-moot.webp",
    imageAlt: "Intra Trail Tamil Moot Court at VMLS Chennai",
    ogType: "article",
    dcType: "Text.Article",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Global Tamil Law Centre", path: "/global-tamil-law-centre" },
      { name: "Intra Trail Tamil Moot Court" },
    ],
  },
  "/news/lspl": {
    pageType: "news",
    title: "Law School Premier League Season 2 – VMLS Sports",
    description:
      "LSPL Season 2 expanded the VMLS student sports league beyond football into cricket and kabaddi, with teams drawn from across the Chennai law school campus.",
    ogTitle: "Law School Premier League Season 2",
    ogDescription:
      "Football, cricket and kabaddi – the VMLS student sports league returns, bigger.",
    image: "/images/studentaff/sports.webp",
    imageAlt: "Law School Premier League at VMLS Chennai",
    ogType: "article",
    dcType: "Text.Article",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Student Affairs", path: "/student-affairs" },
      { name: "Law School Premier League" },
    ],
  },
  "/news/maritime-law-summit-2025": {
    pageType: "news",
    title: "Maritime Law Summit 2025 – VMLS Chennai",
    description:
      "The VMLS Maritime Law Summit 2025 brought judges, senior advocates and maritime experts together on cargo, contracts and claims in September 2025 in Chennai.",
    ogTitle: "Maritime Law Summit 2025 at VMLS",
    ogDescription:
      "Charting the course for cargo, contracts and claims with judges and maritime experts.",
    image: "/images/maritime/maritime.webp",
    imageAlt: "Maritime Law Summit 2025 at VMLS Chennai",
    ogType: "article",
    dcType: "Text.Article",
    publishedTime: "2025-09-06",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Centre for Maritime Law", path: "/maritime-law" },
      { name: "Maritime Law Summit 2025" },
    ],
  },
  "/news/national-seminar-on-ai": {
    pageType: "news",
    title: "National Seminar on AI, Law & Regulation – VMLS",
    description:
      "VMLS and the Cyril Shroff Centre for AI, Law and Regulation convened a national seminar on how AI is reshaping legal education, the profession and justice.",
    ogTitle: "National Seminar on AI, Law and Regulation",
    ogDescription:
      "Shaping the future of education, profession and justice in the age of AI.",
    image: "/images/AI/National Seminar on AI_01_webp.webp",
    imageAlt: "National Seminar on AI, Law and Regulation at VMLS",
    ogType: "article",
    dcType: "Text.Article",
    note: "Linked directly from the homepage (one click), so no BreadcrumbList.",
  },
  "/news/special-lecture-international-maritime-law": {
    pageType: "news",
    title: "Special Lecture on International Maritime Law – VMLS",
    description:
      "The VMLS Centre for Maritime Law hosted a special lecture on international maritime law in February 2024, with distinguished speakers from maritime practice.",
    ogTitle: "Special Lecture on International Maritime Law",
    ogDescription:
      "Distinguished speakers on international maritime law at the VMLS Chennai campus.",
    image: "/images/maritime/special-lecture-maritime.webp",
    imageAlt: "Special lecture on international maritime law at VMLS",
    ogType: "article",
    dcType: "Text.Article",
    publishedTime: "2024-02-24",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Centre for Maritime Law", path: "/maritime-law" },
      { name: "Special Lecture on International Maritime Law" },
    ],
  },
  "/news/state-level-tamil-family-law-moot-court-competition": {
    pageType: "news",
    title: "State-Level Tamil Family Law Moot Court – VMLS",
    description:
      "The Global Tamil Law Centre hosted a state-level Tamil family law moot court competition, giving students courtroom practice in Tamil at the VMLS campus.",
    ogTitle: "State-Level Tamil Family Law Moot Court",
    ogDescription:
      "Family law argued in Tamil – a state-level moot court competition hosted by VMLS.",
    image: "/images/global/in8.webp",
    imageAlt: "State-level Tamil family law moot court at VMLS",
    ogType: "article",
    dcType: "Text.Article",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Global Tamil Law Centre", path: "/global-tamil-law-centre" },
      { name: "State-Level Tamil Family Law Moot Court" },
    ],
  },
  "/news/vmls-fest-2025": {
    pageType: "news",
    title: "VMLS Fest 2025 – Two-Day Cultural Festival, Chennai",
    description:
      "VMLS Fest 2025, the law school's flagship cultural festival, filled two days with performances, competitions and student talent across the Chennai campus.",
    ogTitle: "VMLS Fest 2025",
    ogDescription:
      "Two days, infinite vibes – the flagship cultural festival of VMLS Chennai.",
    image: "/images/studentaff/thumbnail.webp",
    imageAlt: "VMLS Fest 2025 cultural festival, Chennai",
    ogType: "article",
    dcType: "Text.Article",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Student Affairs", path: "/student-affairs" },
      { name: "VMLS Fest 2025" },
    ],
  },
  "/news/why-international-law-matters-inaugural-session": {
    pageType: "news",
    title: "Why International Law Matters – Inaugural Session",
    description:
      "Dr. Srinivas Burra opened the VMLS series 'Why International Law Matters, Especially Today' in March 2025, on the contemporary relevance of international law.",
    ogTitle: "Why International Law Matters, Especially Today",
    ogDescription:
      "Dr. Srinivas Burra opens the VMLS international law series in Chennai.",
    image: "/images/cpil/guest-lecture.webp",
    imageAlt: "Why International Law Matters lecture at VMLS",
    ogType: "article",
    dcType: "Text.Article",
    publishedTime: "2025-03-06",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Centre for the Promotion of International Law", path: "/cpil" },
      { name: "Why International Law Matters" },
    ],
  },
  "/news/women-and-ai-conference": {
    pageType: "news",
    title: "VMLS Students Win at Women & AI Conference",
    description:
      "VMLS students earned awards at the International Conference on Women and AI for research on gender equity and the impact of emerging technologies on rights.",
    ogTitle: "VMLS Students Awarded at Women & AI Conference",
    ogDescription:
      "Research recognition for VMLS students at the intersection of gender equity and AI.",
    image: "/images/news/student1.webp",
    imageAlt: "VMLS students at the International Conference on Women and AI",
    ogType: "article",
    dcType: "Text.Article",
    breadcrumb: [
      { name: "Home", path: "/" },
      { name: "Student Affairs", path: "/student-affairs" },
      { name: "Women and AI Conference" },
    ],
  },

  /* ------------------------------------------------------------------ */
  /* Legal                                                               */
  /* ------------------------------------------------------------------ */
  "/privacy-policy": {
    pageType: "legal",
    title: "Privacy Policy – VMLS Chennai",
    description:
      "How Vinayaka Mission's Law School collects, uses and protects personal information submitted through vmls.edu.in, and the choices available to website visitors.",
    ogTitle: "VMLS Privacy Policy",
    ogDescription:
      "How VMLS handles the personal information you submit through this website.",
    image: CAMPUS,
    imageAlt: "VMLS campus, Chennai",
    note: "Audit flag: the visible body text opens with Terms & Conditions wording, not privacy wording. Content fix needed before this description is fully accurate.",
  },
  "/terms-conditions": {
    pageType: "legal",
    title: "Terms & Conditions – VMLS Chennai",
    description:
      "The terms and conditions governing use of vmls.edu.in, including acceptable use, intellectual property, registration rights and limitations of liability.",
    ogTitle: "VMLS Terms and Conditions",
    ogDescription:
      "The rules that govern your use of the VMLS website.",
    image: CAMPUS,
    imageAlt: "VMLS campus, Chennai",
  },

  /* ------------------------------------------------------------------ */
  /* Development artifacts - not real pages                              */
  /* ------------------------------------------------------------------ */
  "/debug": {
    pageType: "dev-artifact",
    title: "Debug – Image Check (Not Indexed)",
    description:
      "Internal image loading check used during development. This route is excluded from search engines and should be deleted before the next production deploy.",
    noindex: true,
    note: "Dev leftover. noindex,nofollow applied; recommend deleting the route.",
  },
  "/test-route": {
    pageType: "dev-artifact",
    title: "Test Route (Not Indexed)",
    description:
      "Internal routing smoke test left over from development. This route is excluded from search engines and should be deleted before the next production deploy.",
    noindex: true,
    note: "Dev leftover. noindex,nofollow applied; recommend deleting the route.",
  },
} satisfies Record<string, PageEntry>;

export type PagePath = keyof typeof PAGES;

/** Metadata for a registered static route. */
export function pageMetadata(path: PagePath): Metadata {
  const {
    pageType: _pageType,
    breadcrumb: _breadcrumb,
    note: _note,
    ...seo
  }: PageEntry = PAGES[path];
  // `path` comes from the registry key, so canonical / og:url / DC.identifier
  // always describe this route and nothing else.
  return buildMetadata({ ...seo, path });
}

/** Breadcrumb trail for a registered route, if it has one. */
export function pageBreadcrumb(path: PagePath) {
  const entry: PageEntry = PAGES[path];
  return entry.breadcrumb;
}
