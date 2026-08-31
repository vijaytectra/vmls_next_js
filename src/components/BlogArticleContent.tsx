"use client";

import { useMemo, useState, type ReactNode } from "react";

export type BlogFaq = {
  question: string;
  answerHtml: string;
};

export type BlogContentRecord = {
  slug: string;
  title: string;
  date: string;
  image: string;
  author?: string;
  category?: string | null;
  html: string;
  faqs?: BlogFaq[];
};

function FaqAccordion({ faqs }: { faqs: BlogFaq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs.length) return null;

  return (
    <div className="blog-faq-accordion space-y-3 my-8">
      {faqs.map((item, idx) => {
        const open = openIndex === idx;
        return (
          <div
            key={`${item.question}-${idx}`}
            className={`border rounded-xl transition-all duration-300 ${
              open
                ? "border-[#a31f34]/30 bg-[#fcfbf9] shadow-sm"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : idx)}
              className="w-full flex items-start justify-between gap-4 p-4 md:p-5 text-left"
              aria-expanded={open}
            >
              <span
                className={`font-inter font-semibold text-base md:text-lg leading-snug ${
                  open ? "text-[#a31f34]" : "text-[#1a1a1a]"
                }`}
              >
                {item.question}
              </span>
              <span
                className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-sm transition-transform duration-300 ${
                  open
                    ? "rotate-180 border-[#a31f34] text-[#a31f34] bg-white"
                    : "border-gray-300 text-gray-400"
                }`}
                aria-hidden
              >
                ▾
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div
                className="px-4 md:px-5 pb-5 pt-0 text-gray-700 text-base leading-relaxed blog-faq-answer"
                dangerouslySetInnerHTML={{ __html: item.answerHtml }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function injectFaqSlots(html: string, faqs: BlogFaq[]): ReactNode[] {
  if (!html) return [];

  const parts = html.split(/<div data-blog-faq-slot="true"><\/div>/i);
  if (parts.length === 1) {
    return [
      <div
        key="body"
        className="blog-html"
        dangerouslySetInnerHTML={{ __html: html }}
      />,
    ];
  }

  const nodes: ReactNode[] = [];
  parts.forEach((part, i) => {
    if (part.trim()) {
      nodes.push(
        <div
          key={`html-${i}`}
          className="blog-html"
          dangerouslySetInnerHTML={{ __html: part }}
        />
      );
    }
    if (i < parts.length - 1) {
      nodes.push(<FaqAccordion key={`faq-${i}`} faqs={faqs} />);
    }
  });
  return nodes;
}

export default function BlogArticleContent({
  html,
  faqs = [],
}: {
  html: string;
  faqs?: BlogFaq[];
}) {
  const content = useMemo(() => injectFaqSlots(html, faqs), [html, faqs]);

  // If FAQs exist but no slot marker (edge case), append accordion at end
  const hasSlot = /data-blog-faq-slot="true"/i.test(html);
  return (
    <div className="blog-article-content">
      {content}
      {!hasSlot && faqs.length > 0 && <FaqAccordion faqs={faqs} />}
    </div>
  );
}
