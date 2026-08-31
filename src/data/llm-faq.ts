// The single source of truth for the LL.M. FAQ.
// The page renders this array visibly AND the FAQPage JSON-LD is built from
// it, so the structured data can never describe Q&A the page does not show.
export type FaqItem = { q: string; a: string };

export const LLM_FAQ: FaqItem[] = [
    {
      q: "What is the duration and structure of the VMLS LL.M. program?",
      a: "The LL.M. program at VMLS is a one-year, full-time course designed to balance academic rigor with industry exposure through classroom study, research, capstone projects, and internships."
    },
    {
      q: "What are the eligibility criteria for admission to the LL.M. program?",
      a: "Applicants must hold an LL.B. or equivalent degree from a recognized university with a minimum required aggregate. Final-year students awaiting results can also apply."
    },
    {
      q: "What specializations are offered in the VMLS LL.M. program?",
      a: "VMLS offers LL.M. specializations in Corporate & Financial Laws, Commercial Dispute Resolution, Criminal Law and Practice, and Artificial Intelligence, Emerging Technologies & Intellectual Property Rights."
    },
    {
      q: "What is the admission process for the LL.M. program?",
      a: "Applicants need to complete the online application, appear for the Vinayaka Mission's Law Admission Test (VLAT), and participate in a personal interview. Selection is based on test scores, academic record, and performance in the interview."
    },
    {
      q: "Are scholarships or financial aid options available?",
      a: "Yes, VMLS provides various scholarship schemes and financial aid opportunities to meritorious and deserving students."
    },
    {
      q: "What kind of practical training or internships are included in the LL.M. curriculum?",
      a: "The LL.M. program incorporates mandatory internships with law firms, corporates, NGOs, or regulatory bodies, along with capstone projects and clinical courses for hands-on experience."
    },
    {
      q: "Who are the faculty and mentors for the LL.M. course?",
      a: "VMLS LL.M. faculty includes nationally and internationally recognized professors, experienced industry practitioners, and guest experts from top law firms and in-house legal teams."
    },
    {
      q: "What career prospects are available after completing the LL.M. at VMLS?",
      a: "Graduates pursue careers as corporate lawyers, litigators, in-house legal counsels, policy advisors, academics, and researchers, benefiting from strong placement and industry support."
    },
    {
      q: "Does the LL.M. program include research and dissertation work?",
      a: "Yes, students must undertake a dissertation project in their area of interest, with guidance by faculty mentors throughout the research and writing process."
    },
    {
      q: "How can I get more information or ask further questions about the VMLS LL.M. program?",
      a: "Prospective applicants can visit the official Vinayaka Mission's Law School website or contact the admissions team via email or phone for more personalized information."
    }
  ];
