"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Calendar, User, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import BlogArticleContent from "@/components/BlogArticleContent";
import blogContent from "@/data/blogs/content.json";

const blogPosts = [
  {
    title: "Law Entrance Exams in India: CLAT vs VLAT vs State Law Exams",
    date: "July 16, 2026",
    image: "/images/blogs/law-entrance-exams-clat-vs-vlat-comparison.jpg",
    slug: "law-entrance-exams-clat-vs-vlat-comparison",
  },
  {
    title: "BA LLB vs BBA LLB vs BCom LLB: Which 5-Year Law Degree Should You Pick?",
    date: "July 15, 2026",
    image: "/images/blogs/ba-llb-vs-bba-llb-vs-bcom-llb-comparison.jpg",
    slug: "ba-llb-vs-bba-llb-vs-bcom-llb-comparison",
  },
  {
    title: "LL.M. in India: Specialisations, Eligibility & Top LL.M. Colleges in Chennai",
    date: "July 14, 2026",
    image: "/images/blogs/llm-specializations-guide-colleges-chennai.jpg",
    slug: "llm-specializations-guide-colleges-chennai",
  },
  {
    title: "3-Year LLB Admission in Chennai & Tamil Nadu: Eligibility, Fees & Private Colleges",
    date: "July 13, 2026",
    image: "/images/blogs/3-year-llb-admission-chennai-tamilnadu.jpg",
    slug: "3-year-llb-admission-chennai-tamilnadu",
  },
  {
    title: "3-Year LLB vs 5-Year LLB: Which Law Programme Should You Choose?",
    date: "July 12, 2026",
    image: "/images/blogs/3-year-llb-vs-5-year-llb-comparison.jpg",
    slug: "3-year-llb-vs-5-year-llb-comparison",
  },
  {
    title: "LLB Admission Dates 2026-27: Deadlines, Process, Documents & Step-by-Step Checklist",
    date: "June 23, 2026",
    image: "/images/blogs/llb-admission-dates-process-checklist-2026-27.jpg",
    slug: "llb-admission-dates-process-checklist-2026-27",
  },
  {
    title: "How to Choose the Right Law University in India: A 7-Point Framework",
    date: "June 22, 2026",
    image: "/images/blogs/how-to-choose-the-right-law-university-india.jpg",
    slug: "how-to-choose-the-right-law-university-india",
  },
  {
    title: "LL.M. in Corporate Law: Scope, Salary, Specialisations & Why 2026-27 Is the Best Time to Enrol",
    date: "June 21, 2026",
    image: "/images/blogs/llm-corporate-law-career-scope-2026-27.jpg",
    slug: "llm-corporate-law-career-scope-2026-27",
  },
  {
    title: "BCom LLB Colleges in India 2026-27: Course Details, Career Scope & How to Choose",
    date: "June 20, 2026",
    image: "/images/blogs/bcom-llb-colleges-india-2026-27.jpg",
    slug: "bcom-llb-colleges-india-2026-27",
  },
  {
    title: "LLB Fees in India 2026-27: What You Actually Pay — and What You Get",
    date: "June 19, 2026",
    image: "/images/blogs/llb-fees-india-2026-27.jpg",
    slug: "llb-fees-india-2026-27",
  },
  {
    title: "LL.M. in AI, Emerging Technologies & IPR: The Law Degree for the Future",
    date: "May 26, 2026",
    image: "/images/blogs/llm-in-artificial-intelligence-emerging-technologies-and-intellectual-property-rights.jpg",
    slug: "llm-in-artificial-intelligence-emerging-technologies-and-intellectual-property-rights",
  },
  {
    title: "LL.M. in Criminal Law and Practice at VMLS: Scope, Syllabus & Careers",
    date: "May 25, 2026",
    image: "/images/blogs/llm-in-criminal-law-and-practice.jpg",
    slug: "llm-in-criminal-law-and-practice",
  },
  {
    title: "LL.M. in Commercial Dispute Resolution: Arbitration, Mediation & Careers",
    date: "May 22, 2026",
    image: "/images/blogs/llm-in-commercial-dispute-resolution.jpg",
    slug: "llm-in-commercial-dispute-resolution",
  },
  {
    title: "LL.M. in Corporate and Financial Laws: Scope, Syllabus & Careers",
    date: "May 21, 2026",
    image: "/images/blogs/llm-in-corporate-financial-laws.jpg",
    slug: "llm-in-corporate-financial-laws",
  },
  {
    title: "LLB Admission 2026: Eligibility, Dates, Process & How to Apply",
    date: "May 20, 2026",
    image: "/images/blogs/llb-admission-2026.jpg",
    slug: "llb-admission-2026",
  },
  {
    title: "BBA LLB Colleges in India — Course, Eligibility, Scope & Admission 2026",
    date: "May 19, 2026",
    image: "/images/blogs/bba-llb-colleges-in-india-2026.jpg",
    slug: "bba-llb-colleges-in-india-2026",
  },
  {
    title: "Law Courses After Graduation: Your Complete Guide for 2026",
    date: "May 18, 2026",
    image: "/images/blogs/law-courses-after-graduation-2026.jpg",
    slug: "law-courses-after-graduation-2026",
  },
  {
    title: "Bilingual Law School in Chennai: Why Studying Law in Tamil and English Changes Everything",
    date: "May 16, 2026",
    image: "/images/blogs/bilingual-law-school-chennai-2026.jpg",
    slug: "bilingual-law-school-chennai-2026",
  },
  {
    title: "Best Law Colleges in India 2026: Top Law Schools, Rankings & How to Choose",
    date: "May 15, 2026",
    image: "/images/blogs/best-law-colleges-in-india-2026.jpg",
    slug: "best-law-colleges-in-india-2026",
  },
  {
    title: "5-Year Integrated LLB Programme in India: Course Details, Eligibility & Admission 2026",
    date: "May 14, 2026",
    image: "/images/blogs/5-year-integrated-llb-programme-india-2026.jpg",
    slug: "5-year-integrated-llb-programme-india-2026",
  },
  {
    title: "BA LLB (Hons.) Programme: Course Details, Eligibility, Fees & Career Scope 2026",
    date: "May 13, 2026",
    image: "/images/blogs/ba-llb-hons-programme-2026.jpg",
    slug: "ba-llb-hons-programme-2026",
  },
  {
    title: "What Is an LLB Degree? Everything You Need to Know Before You Apply",
    date: "May 12, 2026",
    image: "/images/blogs/what-is-llb-degree.jpg",
    slug: "what-is-llb-degree",
  },
  {
    title: "3-Year LLB Programme in India: Eligibility, Admission, Top Colleges & Career Scope (2026)",
    date: "May 11, 2026",
    image: "/images/blogs/3-year-llb-programme-india-2026.jpg",
    slug: "3-year-llb-programme-india-2026",
  },
  {
    title: "VMLS Open Day 2026: Discover the Law School of the Future",
    date: "May 10, 2026",
    image: "/images/blogs/vmls-open-day-2026.jpg",
    slug: "vmls-open-day-2026",
  },
  {
    title: "3-Year LLB vs 5-Year LLB: Which Law Programme Should You Choose?",
    date: "July 16, 2026",
    image: "/images/blogs/wp/3-year-llb-vs-5-year-llb-comparison.jpg",
    slug: "3-year-llb-vs-5-year-llb-comparison",
  },
  {
    title: "LL.M. Programme in India 2026-27: Everything You Need to Know Before You Enrol",
    date: "June 12, 2026",
    image: "/images/blogs/wp/llm-programme-in-india-2026-27.jpg",
    slug: "llm-programme-in-india-2026-27",
  },
  {
    title: "Top LL.M. Colleges in India 2026-27: How to Choose the Right Law School for Your Master of Laws",
    date: "June 12, 2026",
    image: "/images/blogs/wp/top-llm-colleges-in-india-2026-27.jpg",
    slug: "top-llm-colleges-in-india-2026-27",
  },
  {
    title: "Law Colleges in Chennai 2026-27: A Complete Guide for Aspiring Lawyers",
    date: "June 12, 2026",
    image: "/images/blogs/wp/law-colleges-in-chennai-2026-27.jpg",
    slug: "law-colleges-in-chennai-2026-27",
  },
  {
    title: "LL.M. Entrance Exam in India 2026-27: CLAT PG, AILET PG, VLAT & Preparation Guide",
    date: "June 12, 2026",
    image: "/images/blogs/wp/llm-entrance-exam-india-2026-27.jpg",
    slug: "llm-entrance-exam-india-2026-27",
  },
  {
    title: "LLB Fees in India 2026-27 & Admission Last Dates: Everything You Need Before You Apply",
    date: "June 12, 2026",
    image: "/images/blogs/wp/llb-fees-in-india-2026-27.jpg",
    slug: "llb-fees-in-india-2026-27",
  },
  {
    title: "Best time to apply for LLB admission in India",
    date: "April 22, 2026",
    image: "/images/blogs/wp/best-time-to-apply-for-llb-admission-in-india.jpg",
    slug: "best-time-to-apply-for-llb-admission-in-india",
  },
  {
    title: "Common mistakes students make during the LLB admission process",
    date: "April 20, 2026",
    image: "/images/blogs/wp/common-mistakes-students-make-during-the-llb-admission-process.jpg",
    slug: "common-mistakes-students-make-during-the-llb-admission-process",
  },
  {
    title: "The Best Law College for Bengaluru Students – LLB & LL.M. Admissions Guide",
    date: "April 19, 2026",
    image: "/images/blogs/wp/the-best-law-college-for-bengaluru-students.jpg",
    slug: "the-best-law-college-for-bengaluru-students",
  },
  {
    title: "Step-by-Step Guide to Law College Admission",
    date: "April 18, 2026",
    image: "/images/blogs/wp/step-by-step-guide-to-law-college-admission.jpg",
    slug: "step-by-step-guide-to-law-college-admission",
  },
  {
    title: "LL.M. Eligibility: Requirements for Master of Laws Admission",
    date: "April 17, 2026",
    image: "/images/blogs/wp/llm-eligibility-requirements-for-master-of-laws-admission.jpg",
    slug: "llm-eligibility-requirements-for-master-of-laws-admission",
  },
  {
    title: "Law Courses After Graduation: Build Your Legal Career",
    date: "April 03, 2026",
    image: "/images/blogs/wp/law-courses-after-graduation-build-your-legal-career.jpg",
    slug: "law-courses-after-graduation-build-your-legal-career",
  },
  {
    title: "Law Entrance Exams in India 2026: Complete Guide",
    date: "March 10, 2026",
    image: "/images/blogs/wp/law-entrance-exams-in-india-2026-complete-guide.jpg",
    slug: "law-entrance-exams-in-india-2026-complete-guide",
  },
  {
    title: "Top Law Colleges in Tamil Nadu",
    date: "March 03, 2026",
    image: "/images/blogs/wp/top-law-colleges-in-tamil-nadu.jpg",
    slug: "top-law-colleges-in-tamil-nadu",
  },
  {
    title: "BA LLB Course in India: Eligibility, Fees, Duration & Best Law Colleges",
    date: "February 27, 2026",
    image: "/images/blogs/wp/ba-llb-course-in-india-eligibility-fees-duration-best-law-colleges.jpg",
    slug: "ba-llb-course-in-india-eligibility-fees-duration-best-law-colleges",
  },
  {
    title: "BA LLB Admission 2026: Eligibility, Application Process, Fees & Career Opportunities",
    date: "February 25, 2026",
    image: "/images/blogs/wp/ba-llb-admission-2026-eligibility-application-process-fees-career-opportunities.jpg",
    slug: "ba-llb-admission-2026-eligibility-application-process-fees-career-opportunities",
  },
  {
    title: "5 Year B.Com. LL.B. (Hons)",
    date: "February 23, 2026",
    image: "/images/blogs/wp/5-year-bcom-llb-hons.jpg",
    slug: "5-year-bcom-llb-hons",
  },
  {
    title: "5 Year B.B.A. LL.B. (Hons)",
    date: "February 16, 2026",
    image: "/images/blogs/wp/5-year-bba-llb-hons.jpg",
    slug: "5-year-bba-llb-hons",
  },
  {
    title: "5 Year B.A. LL.B. (Hons)",
    date: "February 13, 2026",
    image: "/images/blogs/wp/5-year-ba-llb-hons.jpg",
    slug: "5-year-ba-llb-hons",
  },
  {
    title: "3 Years LLB (Hons.)",
    date: "February 11, 2026",
    image: "/images/blogs/wp/three-year-llb-hons.jpg",
    slug: "three-year-llb-hons",
  },
  {
    title: "From Silence to Recognition: Why Recognising Menstrual Dignity as a Constitutional Right Was Long Overdue",
    date: "February 02, 2026",
    image: "/images/blogs/wp/from-silence-to-recognition-why-recognising-menstrual-dignity-as-a-constitutional-right-was-long-overdue.jpg",
    slug: "from-silence-to-recognition-why-recognising-menstrual-dignity-as-a-constitutional-right-was-long-overdue",
  },
  {
    title: "Vinayaka Mission’s Law School Signs International MoU with University of San Diego, Expanding Global Learning Opportunities",
    date: "January 21, 2026",
    image: "/images/blogs/wp/vinayaka-missions-law-school-signs-international-mou-with-university-of-san-diego-expanding-global-learning-opportunities.jpg",
    slug: "vinayaka-missions-law-school-signs-international-mou-with-university-of-san-diego-expanding-global-learning-opportunities",
  },
  {
    title: "Law Entrance Exam in India: Complete Guide to VLAT 2026",
    date: "January 19, 2026",
    image: "/images/blogs/wp/law-entrance-exam-vlat.jpg",
    slug: "law-entrance-exam-vlat",
  },
  {
    title: "Complete Guide to LLB (Hons) at VMLS: Eligibility, Admissions, Syllabus, Careers & 2026 Opportunities",
    date: "January 13, 2026",
    image: "/images/blogs/wp/llb-hons-eligibility-admissions-syllabus.jpg",
    slug: "llb-hons-eligibility-admissions-syllabus",
  },
  {
    title: "What Is a Moot Court?",
    date: "November 07, 2025",
    image: "/images/blogs/wp/what-is-a-moot-court.jpg",
    slug: "what-is-a-moot-court",
  },
  {
    title: "Top Law College in Chennai for LL.B., LL.M. & Ph.D. Admissions",
    date: "October 11, 2025",
    image: "/images/blogs/wp/top-law-college-in-chennai-for-llb-llm-ph-d-admissions.jpg",
    slug: "top-law-college-in-chennai-for-llb-llm-ph-d-admissions",
  },
  {
    title: "The Best Law Colleges in India",
    date: "October 09, 2025",
    image: "/images/blogs/wp/the-best-law-colleges-in-india.webp",
    slug: "the-best-law-colleges-in-india",
  },
  {
    title: "Bachelor’s Degree in Law: The Ultimate Guide to LLB Courses, Entrance Exams, and Career Opportunities",
    date: "September 21, 2025",
    image: "/images/blogs/wp/bachelors-degree-in-law.jpg",
    slug: "bachelors-degree-in-law",
  },
  {
    title: "Why Distance LL.B. Degrees Are Not Approved in India ?",
    date: "September 03, 2025",
    image: "/images/blogs/wp/why-distance-ll-b-degrees-are-not-approved-in-india.jpg",
    slug: "why-distance-ll-b-degrees-are-not-approved-in-india",
  },
  {
    title: "EMPOWERING MIGRANT LABOURERS IN CHENNAI THROUGH CLINICAL LEGAL EDUCATION AND ACCESS TO JUSTICE",
    date: "August 21, 2025",
    image: "/images/blogs/wp/empowering-migrant-labourers-in-chennai-through-clinical-legal-education-and-access-to-justice.jpg",
    slug: "empowering-migrant-labourers-in-chennai-through-clinical-legal-education-and-access-to-justice",
  },
  {
    title: "How CLE Enhances Legal Skills & Social Justice",
    date: "July 06, 2025",
    image: "/images/blogs/fostering-legal-skills-and-advancing-social-justice-through-cle.jpg",
    slug: "fostering-legal-skills-and-advancing-social-justice-through-cle",
  },
  {
    title: "Justice at the Grassroots: CLE & Family Law",
    date: "July 05, 2025",
    image: "/images/blogs/justice-at-the-grassroots-clinical-legal-education-and-family-law-practice-in-india.jpg",
    slug: "justice-at-the-grassroots-clinical-legal-education-and-family-law-practice-in-india",
  },
  {
    title: "Decoding Competition Law: The CLE Approach",
    date: "July 04, 2025",
    image: "/images/blogs/decoding-competition-law-the-cle-approach.jpg",
    slug: "decoding-competition-law-the-cle-approach",
  },
  {
    title: "CLE in Healthcare Laws & Patient Rights",
    date: "July 03, 2025",
    image: "/images/blogs/cle-impact-on-healthcare-laws-and-patients-rights-in-india.jpg",
    slug: "cle-impact-on-healthcare-laws-and-patients-rights-in-india",
  },
  {
    title: "Global Perspectives on Clinical Legal Education",
    date: "July 02, 2025",
    image: "/images/blogs/global-perspective-clinical-legal-education.jpg",
    slug: "global-perspective-clinical-legal-education",
  },
  {
    title: "Shaping Legal Futures CLE & Constitutional Law",
    date: "July 01, 2025",
    image: "/images/blogs/shaping-legal-futures-cle-and-constitutional-law.jpg",
    slug: "shaping-legal-futures-cle-and-constitutional-law",
  },
  {
    title: "Law and Economics in Clinical Legal Education",
    date: "June 30, 2025",
    image: "/images/blogs/law-and-economics-in-clinical-legal-education-recasting-experiential-learning-in-the-5-year-llb-program.jpg",
    slug: "law-and-economics-in-clinical-legal-education-recasting-experiential-learning-in-the-5-year-llb-program",
  },
  {
    title: "Empowering Women through Clinical Legal Education in India",
    date: "June 30, 2025",
    image: "/images/blogs/empowering-women-through-clinical-legal-education-in-india.jpg",
    slug: "empowering-women-through-clinical-legal-education-in-india",
  },
  {
    title: "Why Clinical Legal Education and ADR Are Crucial for Indian Justice",
    date: "June 30, 2025",
    image: "/images/blogs/why-clinical-legal-education-and-adr-are-crucial-for-indian-justice.jpg",
    slug: "why-clinical-legal-education-and-adr-are-crucial-for-indian-justice",
  },
  {
    title: "Teaching Criminal Law and Forensic Science with Clinical Legal Education",
    date: "June 29, 2025",
    image: "/images/blogs/criminal-law-and-forensics-how-cle-shapes-legal-practice.jpg",
    slug: "criminal-law-and-forensics-how-cle-shapes-legal-practice",
  },
  {
    title: "The lack of Clinical Legal Education in India and its implications",
    date: "June 28, 2025",
    image: "/images/blogs/lack-of-clinical-legal-education-in-india.jpg",
    slug: "lack-of-clinical-legal-education-in-india",
  },
  {
    title: "LL.M. In Artificial Intelligence, Emerging Technologies and Intellectual Property Rights",
    date: "June 27, 2025",
    image: "/images/blogs/llm-in-artificial-intelligence-emerging-technologies-and-intellectual-property-rights__35.jpg",
    slug: "llm-in-artificial-intelligence-emerging-technologies-and-intellectual-property-rights",
  },
  {
    title: "LL.M. in Criminal Law and Practice",
    date: "June 27, 2025",
    image: "/images/blogs/llm-in-criminal-law-and-practice__34.jpg",
    slug: "llm-in-criminal-law-and-practice",
  },
  {
    title: "What is an LL.M.? Full Form, Programme, Course Duration, Admission 2025",
    date: "June 26, 2025",
    image: "/images/blogs/what-is-llm-master-of-law-degree.jpg",
    slug: "what-is-llm-master-of-law-degree",
  },
  {
    title: "Bringing Indian Contracts II to Life by Means of Clinical Legal Education for Law Students",
    date: "June 25, 2025",
    image: "/images/blogs/bringing-indian-contracts-ii-to-life-clinical-legal-education-vmls.jpg",
    slug: "bringing-indian-contracts-ii-to-life-clinical-legal-education-vmls",
  },
  {
    title: "Clinical Legal Education in India",
    date: "June 24, 2025",
    image: "/images/blogs/clinical-legal-education-in-india.jpg",
    slug: "clinical-legal-education-in-india",
  },
  {
    title: "Black Carbon and the Law’s Response",
    date: "June 20, 2025",
    image: "/images/blogs/black-carbon-and-the-law-response.jpg",
    slug: "black-carbon-and-the-law-response",
  },
  {
    title: "Empowering Future Advocates: The Clinical Legal Education Initiative at VMLS",
    date: "June 11, 2025",
    image: "/images/blogs/empowering-future-advocates-clinical-legal-education-initiative-at-vmls.jpg",
    slug: "empowering-future-advocates-clinical-legal-education-initiative-at-vmls",
  },
  {
    title: "How Clinical Legal Education Enhances Management Disciplines",
    date: "June 10, 2025",
    image: "/images/blogs/how-clinical-legal-education-enhances-management-disciplines.jpg",
    slug: "how-clinical-legal-education-enhances-management-disciplines",
  },
  {
    title: "Important Component Of Clinical Legal Education",
    date: "June 09, 2025",
    image: "/images/blogs/important-component-of-clinical-legal-education.jpg",
    slug: "important-component-of-clinical-legal-education",
  },
  {
    title: "Empowering Future Human Rights Advocates",
    date: "June 06, 2025",
    image: "/images/blogs/future-human-rights-advocates-clinical-legal-education.jpg",
    slug: "future-human-rights-advocates-clinical-legal-education",
  },
  {
    title: "Clinical Education In Financial Frauds",
    date: "June 05, 2025",
    image: "/images/blogs/clinical-education-in-financial-frauds-white-collar-crimes.jpg",
    slug: "clinical-education-in-financial-frauds-white-collar-crimes",
  },
  {
    title: "Transforming Civil Procedure Learning in Chennai through Clinical Legal Education",
    date: "June 02, 2025",
    image: "/images/blogs/law-in-practice-civil-procedure-learning-in-chennai-through-clinical-legal-education.jpg",
    slug: "law-in-practice-civil-procedure-learning-in-chennai-through-clinical-legal-education",
  },
  {
    title: "Need for Environmental Law Clinics in India",
    date: "June 02, 2025",
    image: "/images/blogs/need-for-environmental-law-clinics-in-india.jpg",
    slug: "need-for-environmental-law-clinics-in-india",
  },
  {
    title: "Top Bilingual Law Schools in Chennai",
    date: "May 27, 2025",
    image: "/images/blogs/top-bilingual-law-schools-in-chennai.jpg",
    slug: "top-bilingual-law-schools-in-chennai",
  },
  {
    title: "Beyond The Classroom Clinical Legal Education Promise",
    date: "May 23, 2025",
    image: "/images/blogs/beyond-the-classroom-clinical-legal-education-promise.jpg",
    slug: "beyond-the-classroom-clinical-legal-education-promise",
  },
  {
    title: "Clinical Legal Education Justice for Marginalized",
    date: "May 22, 2025",
    image: "/images/blogs/clinical-legal-education-justice-for-marginalized.jpg",
    slug: "clinical-legal-education-justice-for-marginalized",
  },
  {
    title: "Why Sharing Your Child's Exam Results Online Can Impact Their Future",
    date: "May 17, 2025",
    image: "/images/blogs/why-sharing-your-childs-exam-results-online-can-impact-their-future.jpg",
    slug: "why-sharing-your-childs-exam-results-online-can-impact-their-future",
  },
  {
    title: "Theory and Practice: Clinical Legal Education",
    date: "May 17, 2025",
    image: "/images/blogs/clinical-legal-education-and-evidence-law-training-in-india.jpg",
    slug: "clinical-legal-education-and-evidence-law-training-in-india",
  },
  {
    title: "Clinical Legal Education in India",
    date: "May 14, 2025",
    image: "/images/blogs/why-clinical-legal-education-in-india-is-struggling.jpg",
    slug: "why-clinical-legal-education-in-india-is-struggling",
  },
  {
    title: "Top 5 Legal Careers in India",
    date: "May 13, 2025",
    image: "/images/blogs/top-5-legal-careers-in-india-2025.jpg",
    slug: "top-5-legal-careers-in-india-2025",
  },
  {
    title: "How DeepSeek’s AI is Shaping Litigation Support",
    date: "May 2, 2025",
    image: "/images/blogs/how-deepseeks-ai-is-shaping-litigation-support.jpg",
    slug: "how-deepseeks-ai-is-shaping-litigation-support",
  },
  {
    title: "What is Financial Law?",
    date: "April 30, 2025",
    image: "/images/blogs/what-is-financial-law.jpg",
    slug: "what-is-financial-law",
  },
  {
    title: "What is Corporate Law?",
    date: "April 29, 2025",
    image: "/images/blogs/what-is-corporate-law.jpg",
    slug: "what-is-corporate-law",
  },
  {
    title: "Water Wars and International Law",
    date: "April 24, 2025",
    image: "/images/blogs/indus-waters-treaty-suspension-lessons-for-law-students.jpg",
    slug: "indus-waters-treaty-suspension-lessons-for-law-students",
  },
  {
    title: "LL.M. in Corporate & Financial Laws",
    date: "March 13, 2025",
    image: "/images/blogs/llm-in-corporate-financial-laws__32.jpg",
    slug: "llm-in-corporate-financial-laws",
  },
  {
    title: "LL.M. in Commercial Dispute Resolution",
    date: "March 12, 2025",
    image: "/images/blogs/llm-in-commercial-dispute-resolution__33.jpg",
    slug: "llm-in-commercial-dispute-resolution",
  },
  {
    title: "Ex Ante Regulation",
    date: "February 4, 2025",
    image: "/images/blogs/ex-ante-regulation.jpg",
    slug: "ex-ante-regulation",
  },
  {
    title: "Merger Regulations Expansion Competition Developing Economies",
    date: "February 3, 2025",
    image: "/images/blogs/merger-regulations-expansion-competition-developing-economies.jpg",
    slug: "merger-regulations-expansion-competition-developing-economies",
  },
  {
    title: "Network Effects in Competition Law and Digital Markets",
    date: "January 31, 2025",
    image: "/images/blogs/network-effects-competition-law-digital-markets.jpg",
    slug: "network-effects-competition-law-digital-markets",
  },
  {
    title: "Mediation for Operational Creditors",
    date: "January 30, 2025",
    image: "/images/blogs/mediation-for-operational-creditors.jpg",
    slug: "mediation-for-operational-creditors",
  },
  {
    title: "SEBI-Tightens-Rules-for-Futures-Options-Trading",
    date: "January 27, 2025",
    image: "/images/blogs/sebi-tightens-rules-for-futures-options-trading.jpg",
    slug: "sebi-tightens-rules-for-futures-options-trading",
  },
  {
    title: "Climate Finance Development in India",
    date: "January 24, 2025",
    image: "/images/blogs/climate-finance-development-in-india-cop29.jpg",
    slug: "climate-finance-development-in-india-cop29",
  },
  {
    title: "One Year LL.M. Programme at VMLS",
    date: "January 21, 2025",
    image: "/images/blogs/one-year-llm-programme-vmls.jpg",
    slug: "one-year-llm-programme-vmls",
  },
  {
    title: "5-Year Law Programme at VMLS",
    date: "January 8, 2025",
    image: "/images/blogs/5-year-llb-programme.jpg",
    slug: "5-year-llb-programme",
  },
  {
    title: "3-Year LLB Programme at VMLS",
    date: "January 7, 2025",
    image: "/images/blogs/3-year-llb-programme.jpg",
    slug: "3-year-llb-programme",
  },
  {
    title: "Vinayaka Mission's Law Admission Test (VLAT): A Complete Guide",
    date: "December 30, 2024",
    image: "/images/blogs/vinayaka-missions-law-admission-test-VLAT.jpg",
    slug: "vinayaka-missions-law-admission-test-VLAT",
  },
  {
    title: "Top Law Colleges in India",
    date: "December 23, 2024",
    image: "/images/blogs/top-law-colleges-india.jpg",
    slug: "top-law-colleges-india",
  },
  {
    title: "Subjects in Law Courses",
    date: "December 18, 2024",
    image: "/images/blogs/subjects-in-law-courses.jpg",
    slug: "subjects-in-law-courses",
  },
  {
    title: "CLAT Exam Importance, Eligibility, Criteria and Syllabus",
    date: "December 17, 2024",
    image: "/images/blogs/clat-exam-importance-eligibility-criteria-syllabus.jpg",
    slug: "clat-exam-importance-eligibility-criteria-syllabus",
  },
  {
    title: "Best Law Courses after 12th",
    date: "December 16, 2024",
    image: "/images/blogs/best-law-courses-after-12th.jpg",
    slug: "best-law-courses-after-12th",
  },
  {
    title: "Types of Law Courses in India",
    date: "December 15, 2024",
    image: "/images/blogs/types-of-law-courses-in-india.jpg",
    slug: "types-of-law-courses-in-india",
  },
  {
    title: "What is the LLB Degree ?",
    date: "December 15, 2024",
    image: "/images/blogs/what-is-llb-degree__llb-degree.jpg",
    slug: "what-is-llb-degree",
  },
  {
    title: "Explore the Diverse Career Opportunities in Law in India: Roles, Necessary Skills, and Top Employers",
    date: "2024",
    image: "/images/blogs/explore-diverse-career-opportunities-in-law-in-india-roles-necessary-skills-and-top-employers.jpg",
    slug: "explore-diverse-career-opportunities-in-law-in-india-roles-necessary-skills-and-top-employers",
  },
];

const topArticles = [
  {
    title: "5-Year Law Programme at VMLS",
    date: "Jan 08, 2025",
    image: "/images/blogs/5-Year.webp",
    slug: "5-year-llb-programme",
    excerpt: "Several students across India are choosing law as a career due to the various benefits it offers."
  },
  {
    title: "3-Year LLB Programme at VMLS",
    date: "Jan 07, 2025",
    image: "/images/blogs/3-Year.webp",
    slug: "3-year-llb-programme",
    excerpt: "The 3-year LLB (Bachelor of Legislative Law) programme is an undergraduate programme designed to cater..."
  },
  {
    title: "Vinayaka Mission's Law Admission Test (VLAT): A Complete Guide",
    date: "Dec 30, 2024",
    image: "/images/blogs/VLAT.png",
    slug: "vinayaka-missions-law-admission-test-VLAT",
    excerpt: "Vinayaka Mission's Law School (VMLS) is one of the best law schools in India and is being mentored by O. P. Jindal Global..."
  },
  {
    title: "Top Law Colleges in India",
    date: "Dec 23, 2024",
    image: "/images/blogs/best-law-colleges-india.webp",
    slug: "best-law-colleges-in-india-how-to-choose-the-right-one",
    excerpt: "In India, law is seen as a noble career option, and the number of students interested in pursuing law is increasing."
  },
  {
    title: "Subjects in Law Courses",
    date: "Dec 18, 2024",
    image: "/images/blogs/subject-in-law-course.webp",
    slug: "types-of-law-courses-in-india",
    excerpt: "If you are willing to work in a legal advisory firm, judiciary, or as a lawyer, then pursuing a law degree plays..."
  },
  {
    title: "CLAT Exam Importance, Eligibility Criteria and Syllabus",
    date: "Dec 17, 2024",
    image: "/images/blogs/clat-exam.webp",
    slug: "clat-exam-importance-eligibility-criteria-syllabus",
    excerpt: "CLAT is a national-level entrance exam, and it stands for Common Law Entrance Test. Many top law universities in India."
  }
];

const blogData = blogContent as Record<
  string,
  {
    title: string;
    date: string;
    image: string;
    author?: string;
    category?: string | null;
    html: string;
    faqs?: { question: string; answerHtml: string }[];
    tags?: string[];
    lastUpdated?: string | null;
  }
>;

export default function BlogPost() {
  const { slug } = useParams();
  const slugStr = typeof slug === "string" ? slug : Array.isArray(slug) ? slug[0] : "";
  const listing = blogPosts.find((p) => p.slug === slugStr);
  const record = slugStr ? blogData[slugStr] : undefined;
  const post = record
    ? {
        title: record.title,
        date: record.date,
        image: record.image,
        author: record.author || "VMLS Editorial",
        category: record.category,
        html: record.html,
        faqs: record.faqs || [],
        tags: record.tags || [],
        lastUpdated: record.lastUpdated || null,
      }
    : {
        title: listing?.title || "Blog Post",
        date: listing?.date || "Coming Soon",
        image: listing?.image || "/images/blogs/default.webp",
        author: "VMLS Editorial",
        category: null as string | null,
        html: "<p>Full content for this blog post is coming soon. Please check back later.</p>",
        faqs: [] as { question: string; answerHtml: string }[],
        tags: [] as string[],
        lastUpdated: null as string | null,
      };

  const currentIndex = blogPosts.findIndex((p) => p.slug === slugStr);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost =
    currentIndex >= 0 && currentIndex < blogPosts.length - 1
      ? blogPosts[currentIndex + 1]
      : null;

  const displayTags =
    post.tags.length > 0
      ? post.tags
      : post.category
        ? [post.category]
        : [];

  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-[#800000] text-white py-24 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 text-[#fbb03b] mb-8 font-bold uppercase tracking-widest text-xs">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <Link href="/blogs" className="hover:text-white transition-colors">Blogs</Link>
            <span className="text-white/30">/</span>
            <span className="truncate max-w-[200px] md:max-w-none">{post.title}</span>
          </nav>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-white/80 py-4 border-y border-white/10">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium">By {post.author || "VMLS Editorial"}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#fbb03b]" />
              <span className="text-sm font-medium">{post.date}</span>
            </div>
            {post.category && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-[#fbb03b]">{post.category}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="px-[5%] py-10 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Main Content Area */}
          <article className="flex-grow lg:max-w-[55%]">
            <header className="mb-8 hidden">
              <h1 className="font-playfair text-3xl md:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                {post.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-500 border-y border-gray-100 py-4">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5 text-[#a31f34]" />
                  <span className="text-sm font-medium">By {post.author || "VMLS Editorial"}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#a31f34]" />
                  <span className="text-sm font-medium">{post.date}</span>
                </div>
                <div className="flex items-center gap-4 ml-auto">
                  <Share2 className="w-5 h-5 text-gray-400 cursor-pointer hover:text-[#a31f34] transition-colors" />
                  <div className="flex items-center gap-3">
                    <Link href="#" className="hover:text-[#0077b5] transition-colors">
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                    </Link>
                    <Link href="#" className="hover:text-[#e4405f] transition-colors">
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                    </Link>
                    <Link href="#" className="hover:text-[#1da1f2] transition-colors">
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                    </Link>
                    <Link href="#" className="hover:text-[#1877f2] transition-colors">
                      <svg className="w-4 h-4 fill-currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                    </Link>
                  </div>
                </div>
              </div>
            </header>

            <div className="relative aspect-[16/9] mb-10 rounded-2xl rounded-tr-none overflow-hidden shadow-lg group">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover object-center transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>

            <div className="font-inter text-gray-700 text-lg leading-relaxed blog-content-container">
              <BlogArticleContent html={post.html} faqs={post.faqs} />
            </div>

            {/* Tags + last updated — our design, live content */}
            {(displayTags.length > 0 || post.lastUpdated) && (
              <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {displayTags.map((tag) => (
                    <Link key={tag} href="/blogs" className="blog-tag-pill">
                      {tag}
                    </Link>
                  ))}
                </div>
                {post.lastUpdated && (
                  <p className="text-sm text-gray-500 font-inter whitespace-nowrap">
                    Last updated on {post.lastUpdated}
                  </p>
                )}
              </div>
            )}

            {/* Previous / Next post navigation */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {prevPost ? (
                <Link
                  href={`/blogs/${prevPost.slug}`}
                  className="group flex gap-3 items-start rounded-xl border border-gray-100 p-4 hover:border-[#a31f34]/30 hover:bg-[#fcfbf9] transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-[#a31f34] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="blog-post-nav-label">Previous Post</div>
                    <div className="font-inter font-semibold text-[#1a1a1a] group-hover:text-[#a31f34] line-clamp-2 leading-snug">
                      {prevPost.title}
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextPost && (
                <Link
                  href={`/blogs/${nextPost.slug}`}
                  className="group flex gap-3 items-start justify-end text-right rounded-xl border border-gray-100 p-4 hover:border-[#a31f34]/30 hover:bg-[#fcfbf9] transition-all md:ml-auto"
                >
                  <div>
                    <div className="blog-post-nav-label">Next Post</div>
                    <div className="font-inter font-semibold text-[#1a1a1a] group-hover:text-[#a31f34] line-clamp-2 leading-snug">
                      {nextPost.title}
                    </div>
                  </div>
                  <div className="relative w-[75px] h-[75px] rounded-lg overflow-hidden flex-shrink-0 hidden sm:block">
                    <Image
                      src={nextPost.image}
                      alt={nextPost.title}
                      fill
                      className="object-cover"
                      sizes="75px"
                    />
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#a31f34] mt-0.5 flex-shrink-0 sm:hidden" />
                </Link>
              )}
            </div>
          </article>

          {/* Sidebar - Top Articles */}
          <aside className="lg:w-[45%]">
            <div className="sticky top-24 bg-[#fcfbf9] rounded-2xl border border-gray-100 p-8">
              <h2 className="font-playfair text-2xl font-bold text-[#1a1a1a] mb-8 relative inline-block">
                Our Top <span className="text-[#a31f34]">Articles</span>
                <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#a31f34]"></span>
              </h2>

              <div className="space-y-8">
                {topArticles.map((article, idx) => (
                  <Link
                    key={idx}
                    href={`/blogs/${article.slug}`}
                    className="group flex flex-col gap-4 border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                          sizes="80px"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="font-inter font-bold text-[#1a1a1a] group-hover:text-[#a31f34] transition-colors line-clamp-2 leading-snug">
                          {article.title}
                        </h4>
                        <span className="text-xs text-gray-400 mt-1 font-medium">{article.date}</span>
                      </div>
                    </div>
                    {article.excerpt && (
                      <p className="text-sm text-gray-600 line-clamp-2 font-inter leading-relaxed">
                        {article.excerpt}
                      </p>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </aside>

          </div>
        </div>
      </section>
    </main>
  );
}
