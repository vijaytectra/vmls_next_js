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

const COLS = 4;

export default function SubThemesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const rows = Array.from(
    { length: Math.ceil(SUB_THEMES.length / COLS) },
    (_, row) => SUB_THEMES.slice(row * COLS, row * COLS + COLS)
  );

  return (
    <section className="pt-4 pb-4 px-[5%] bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="font-playfair text-xl md:text-2xl lg:text-3xl font-bold text-[#800000] mb-3">
            Sub Themes
          </h2>
          <div className="w-16 h-1 bg-[#fbb03b] mx-auto mb-4"></div>
          <p className="font-inter text-base md:text-lg text-gray-700 leading-relaxed text-left sm:text-justify">
            We welcome abstracts and full length quality research papers on the broad theme of Rivers. The below mentioned are few sub themes which may be considered. Please note that this is not an exhaustive list of topics. You are welcome to submit abstracts on any topic of your interest as long as it falls within an area of concern on River.
          </p>
        </div>

        <div className="space-y-1">
          {rows.map((rowThemes, rowIndex) => {
            const rowStart = rowIndex * COLS;
            const activeInRow =
              activeIndex >= rowStart && activeIndex < rowStart + COLS;

            return (
              <div key={rowIndex} className="space-y-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
                  {rowThemes.map((theme, colIndex) => {
                    const index = rowStart + colIndex;
                    const isActive = activeIndex === index;

                    return (
                      <button
                        key={theme.title}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-pressed={isActive}
                        className={`p-3 flex items-center justify-center text-center font-inter min-h-[60px] text-sm transition-colors cursor-pointer ${
                          isActive
                            ? "bg-[#800000] text-white"
                            : "bg-gray-300 text-[#1a1a1a] hover:bg-gray-400"
                        }`}
                      >
                        {theme.title}
                      </button>
                    );
                  })}
                </div>

                {activeInRow && (
                  <div className="bg-[#800000] text-white p-4 animate-page-fade">
                    <ul className="list-disc pl-8 space-y-1 font-inter text-sm md:text-base">
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
      </div>
    </section>
  );
}
