"use client";

import { CaseCard } from "@/components/CaseCard";
import React, { useState } from "react";

const caseStudies = [
  {
    title: "Second Brain App",
    subtitle: "Gpt Knowledge Graph",
    description:
      "GPT-powered knowledge graph app that helps forgetful people store and connect ideas.",
    gitURL: "#",
    webURL: "#",
    previewSrc: "#",
  },
  {
    title: "Quiz Generator",
    subtitle: "Automatic quiz generator",
    description:
      "Quiz generator that uses Generative AI to help teachers and students quickly revise any topic.",
    gitURL: "#",
    webURL: "#",
    previewSrc: "#",
  },
  {
    title: "HoopsIQ",
    subtitle: "NBA player quiz game",
    description:
      "Fun, easy to play NBA player guessing game that tests your NBA knowledge including player stats, team info and player performance.",
    gitURL: "#",
    webURL: "#",
    previewSrc: "#",
  },
];

const CaseStudies = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="px-32 py-8 mb-32 max-w-screen-2xl mx-auto" id="CaseStudies">
      <h1 className="flex justify-center text-3xl my-4 mb-20 font-bold">
        case studies
      </h1>
      {caseStudies.map((caseStudy, index) => {
        return (
          <CaseCard
            key={index}
            title={caseStudy.title}
            subtitle={caseStudy.subtitle}
            description={caseStudy.description}
            gitURL={caseStudy.gitURL}
            webURL={caseStudy.webURL}
            previewSrc={caseStudy.previewSrc}
          />
        );
      })}
      {!showMore && (
        <button
          className="border border-primary font-bold text-primary text-sm rounded-full py-4 px-20 hover:bg-primary hover:text-white"
          onClick={toggleShowMore}
        >
          view more
        </button>
      )}
      {showMore && (
        <>
          <CaseCard
            title="Project Red Door"
            subtitle="Chinese Australian Mental Health"
            description="Overcoming stigma and addressing mental health needs of Chinese Australians. We are doing this by providing easy access to culturally appropriate tools and resources. "
            gitURL="#"
            webURL="#"
            previewSrc="#"
          />

          <CaseCard
            title="iOS Expense Tracker"
            subtitle="Empowering financial health"
            description="Meeting a New Years resolution to reduce unnecessary expenditure through improving ease of tracking and thus accountability."
            gitURL="#"
            webURL="#"
            previewSrc="#"
          />
        </>
      )}
    </div>
  );
};

export default CaseStudies;
