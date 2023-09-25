"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CaseCard = ({
  title,
  subtitle,
  description,
  gitURL,
  webURL,
  previewSrc,
}) => {
  return (
    <div className="flex my-40">
      <div className="flex flex-col w-1/2 pr-12">
        <h3 className="text-lg font-bold my-8">{title}</h3>
        <h2 className="text-3xl font-bold leading-relaxed tracking-widerest my-4 uppercase">
          {subtitle}
        </h2>
        <p className="text-sm leading-loose font-thin my-4">{description}</p>
        <div className="flex">
          {/* TODO: Add links to project github and website */}
          <Link href={gitURL} className="mr-4 text-sm font-bold text-primary">
            Github {">>"}
          </Link>
          <Link href={webURL} className="text-sm font-bold text-primary">
            Website {">>"}
          </Link>
        </div>
      </div>
      <div className="w-1/2">
        <div className="relative">
          <Link href="#">
            <div className="absolute flex items-center justify-center top-10 -left-10 bg-primaryLight/40 text-white rounded-full w-[80px] h-[80px] flex items-center justify-center">
              <div className="flex items-center justify-center bg-primary rounded-full w-[60px] h-[60px]">
                <Image
                  src="/arrow-right.png"
                  width={25}
                  height={25}
                  alt="Right arrow"
                />
              </div>
            </div>
          </Link>
          <Link href="#">
            {/* TODO: Add ease-in and ease-out animation to hover */}
            <div className="flex my-8 items-center justify-center bg-primary text-white w-full h-[200px] rounded-3xl shadow-md hover:my-4 hover:shadow-2xl">
              {previewSrc}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const CaseStudies = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="px-32 py-8 mb-32">
      <h1 className="flex justify-center text-3xl my-4 mb-20 font-bold">
        case studies
      </h1>
      <CaseCard
        title="Second Brain App"
        subtitle="Gpt Knowledge Graph"
        description="GPT-powered knowledge graph app that helps forgetful people store
        and connect ideas."
        gitURL="#"
        webURL="#"
        previewSrc="#"
      />
      <CaseCard
        title="Quiz Generator"
        subtitle="Automatic quiz generator"
        description="Quiz generator that uses Generative AI to help teachers and students quickly revise any topic."
        gitURL="#"
        webURL="#"
        previewSrc="#"
      />
      <CaseCard
        title="HoopsIQ"
        subtitle="NBA player quiz game"
        description="Fun, easy to play NBA player guessing game that tests your NBA knowledge including player stats, team info and player performance."
        gitURL="#"
        webURL="#"
        previewSrc="#"
      />
      {!showMore && <button className="border border-primary font-bold text-primary text-sm rounded-full py-4 px-20" onClick={toggleShowMore}>view more</button>}
      {showMore && (
        <CaseCard
          title="iOS Expense Tracker"
          subtitle="Empowering financial health"
          description="Meeting a New Years resolution to reduce unnecessary expenditure through improving ease of tracking and thus accountability."
          gitURL="#"
          webURL="#"
          previewSrc="#"
        />
      )}
    </div>
  );
};

export default CaseStudies;
