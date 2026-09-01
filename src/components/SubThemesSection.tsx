"use client";

import { useState } from "react";

const SUB_THEMES = [
  {
    title: "Historical Narratives and River Security",
    points: [
      "Case studies of historical river management practices.",
      "Implications of past practices for contemporary river governance.",
    ],
  },
  {
    title: "Transboundary River Governance",
    points: [
      "Evaluation of current legal frameworks.",
      "Case studies of successful and challenging transboundary river management.",
    ],
  },
  {
    title: "International Law and Emerging Challenges",
    points: [
      "Recent developments in international river legislation.",
      "Future trends and strategic directions for river law.",
    ],
  },
  {
    title: "Climate Resilience and River Resource Management",
    points: [
      "Impact of climate change on river ecosystems.",
      "Adaptive management strategies and policy innovations.",
    ],
  },
  {
    title: "Cross-border River Conflicts and Cooperation",
    points: [
      "Diplomatic, geopolitical, and strategic perspectives on river disputes.",
      "Mechanisms for conflict resolution and fostering cooperation.",
    ],
  },
  {
    title: "River Diplomacy",
    points: [
      "Strategies for enhancing international cooperation on river management.",
      "Role of international organizations and treaties.",
    ],
  },
  {
    title: "Aligning River Policies with SDGs",
    points: [
      "Progress towards achieving SDG 6 (Clean Water and Sanitation) for river management.",
      "Challenges and future directions in sustainable river governance.",
    ],
  },
  {
    title: "Legal Frameworks for Indigenous Rights",
    points: [
      "Protecting indigenous communities' rights in river management.",
      "Integrating traditional knowledge with modern legal systems.",
    ],
  },
  {
    title: "Gender and River Governance",
    points: [
      "The role of gender in legal and social frameworks for river management.",
      "Ensuring gender equity in access to and control over river resources.",
    ],
  },
  {
    title: "Community Participation in River Policy",
    points: [
      "Legal mechanisms for community involvement in river governance.",
      "Case studies of successful community-led river management initiatives.",
    ],
  },
  {
    title: "Human Rights and Access to Clean Water",
    points: [
      "Legal perspectives on ensuring equitable access to river water.",
      "Addressing socio-legal barriers to water access.",
    ],
  },
  {
    title: "Environmental Justice in River Basin",
    points: [
      "Socio-legal approaches to addressing environmental inequities in river management.",
      "Case studies of marginalized communities affected by river policies.",
    ],
  },
  {
    title: "Legal Responses to Pollution and Industrial Use of Rivers",
    points: [
      "Strategies for mitigating industrial impacts on river ecosystems.",
      "Enforcement of pollution control laws and regulations.",
    ],
  },
  {
    title: "Cultural Heritage and River Law",
    points: [
      "Protecting cultural sites and practices through river management policies.",
      "Balancing development and cultural preservation in river governance.",
    ],
  },
  {
    title: "Water Privatization and Public Rights",
    points: [
      "Legal implications of privatizing river resources.",
      "Ensuring public access and control over river water.",
    ],
  },
  {
    title: "Implementing International Water Law at the Local Level",
    points: [
      "Challenges and strategies for aligning local practices with international river laws.",
      "Case studies of local adaptations of international water agreements.",
    ],
  },
] as const;

const PAIR_SIZE = 2;

export default function SubThemesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(3);

  return (
    <section className="pt-4 pb-8 px-[5%] bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-3">
            Sub Themes
          </h2>
          <div className="w-16 h-1 bg-[#fbb03b] mx-auto mb-4"></div>
          <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-left sm:text-left">
            We welcome abstracts and full length quality research papers on the broad theme of Rivers. The below mentioned are few sub themes which may be considered. Please note that this is not an exhaustive list of topics. You are welcome to submit abstracts on any topic of your interest as long as it falls within an area of concern on River.
          </p>
        </div>

        {/* Desktop View: Rows of 4 (lg:flex) */}
        <div className="hidden lg:flex flex-col gap-2">
          {Array.from({ length: Math.ceil(SUB_THEMES.length / 4) }).map((_, rowIdx) => {
            const startIndex = rowIdx * 4;
            const rowItems = SUB_THEMES.slice(startIndex, startIndex + 4);
            const activeInRow = activeIndex !== null && activeIndex >= startIndex && activeIndex < startIndex + 4;

            return (
              <div key={rowIdx} className="flex flex-col w-full gap-2">
                <div className="grid grid-cols-4 gap-2 w-full">
                  {rowItems.map((theme, offset) => {
                    const idx = startIndex + offset;
                    const isActive = activeIndex === idx;
                    return (
                      <button
                        key={theme.title}
                        type="button"
                        onClick={() => setActiveIndex(isActive ? null : idx)}
                        aria-expanded={isActive}
                        className={`p-3.5 flex items-center justify-center text-center font-inter min-h-[64px] text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-[#800000] text-white shadow-md font-bold"
                            : "bg-gray-200 text-[#1a1a1a] hover:bg-gray-300 hover:text-[#800000]"
                        }`}
                      >
                        {theme.title}
                      </button>
                    );
                  })}
                </div>

                {activeInRow && activeIndex !== null && (
                  <div className="bg-[#800000] text-white p-6 border-t-4 border-[#fbb03b] shadow-xl rounded-b-md w-full animate-page-fade my-1">
                    <h3 className="font-playfair text-lg font-bold text-[#fbb03b] mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#fbb03b] rounded-full"></span>
                      {SUB_THEMES[activeIndex].title}
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 font-inter text-sm md:text-base leading-relaxed text-white/95">
                      {SUB_THEMES[activeIndex].points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Tablet View: Rows of 2 (md:flex lg:hidden) */}
        <div className="hidden md:flex lg:hidden flex-col gap-2">
          {Array.from({ length: Math.ceil(SUB_THEMES.length / 2) }).map((_, rowIdx) => {
            const startIndex = rowIdx * 2;
            const rowItems = SUB_THEMES.slice(startIndex, startIndex + 2);
            const activeInRow = activeIndex !== null && activeIndex >= startIndex && activeIndex < startIndex + 2;

            return (
              <div key={rowIdx} className="flex flex-col w-full gap-2">
                <div className="grid grid-cols-2 gap-2 w-full">
                  {rowItems.map((theme, offset) => {
                    const idx = startIndex + offset;
                    const isActive = activeIndex === idx;
                    return (
                      <button
                        key={theme.title}
                        type="button"
                        onClick={() => setActiveIndex(isActive ? null : idx)}
                        aria-expanded={isActive}
                        className={`p-3.5 flex items-center justify-center text-center font-inter min-h-[64px] text-sm font-semibold transition-all duration-200 cursor-pointer ${
                          isActive
                            ? "bg-[#800000] text-white shadow-md font-bold"
                            : "bg-gray-200 text-[#1a1a1a] hover:bg-gray-300 hover:text-[#800000]"
                        }`}
                      >
                        {theme.title}
                      </button>
                    );
                  })}
                </div>

                {activeInRow && activeIndex !== null && (
                  <div className="bg-[#800000] text-white p-5 border-t-4 border-[#fbb03b] shadow-xl rounded-b-md w-full animate-page-fade my-1">
                    <h3 className="font-playfair text-base font-bold text-[#fbb03b] mb-2 flex items-center gap-2">
                      <span className="w-2 h-2 bg-[#fbb03b] rounded-full"></span>
                      {SUB_THEMES[activeIndex].title}
                    </h3>
                    <ul className="list-disc pl-5 space-y-1.5 font-inter text-sm leading-relaxed text-white/95">
                      {SUB_THEMES[activeIndex].points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile View: 1 per row (md:hidden) */}
        <div className="flex md:hidden flex-col gap-2">
          {SUB_THEMES.map((theme, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div key={theme.title} className="flex flex-col w-full">
                <button
                  type="button"
                  onClick={() => setActiveIndex(isActive ? null : idx)}
                  aria-expanded={isActive}
                  className={`p-3.5 flex items-center justify-center text-center font-inter min-h-[56px] text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#800000] text-white shadow-md font-bold"
                      : "bg-gray-200 text-[#1a1a1a] hover:bg-gray-300 hover:text-[#800000]"
                  }`}
                >
                  {theme.title}
                </button>

                {isActive && (
                  <div className="bg-[#800000] text-white p-4 border-t-2 border-[#fbb03b] shadow-lg animate-page-fade w-full mt-1">
                    <ul className="list-disc pl-5 space-y-2 font-inter text-xs leading-relaxed text-white/95">
                      {theme.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
