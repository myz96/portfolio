"use client";

import { CaseCard } from "@/components/CaseCard";
import React, { useState } from "react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Dyno: Your Second Brain",
    subtitle: "Gpt Knowledge Graph",
    description:
      "GPT-powered knowledge graph app that helps forgetful people store and connect ideas.",
    gitURL: "https://github.com/myz96/second-brain",
    webURL: "https://secondbrain-gptgraph.onrender.com/login",
    previewSrc: "/secondbrain-mock.png",
  },
  {
    title: "Learn It",
    subtitle: "Automatic quiz generator",
    description:
      "Quiz generator that uses Generative AI to help teachers and students quickly revise any topic.",
    gitURL: "https://github.com/myz96/learn-it",
    webURL: "https://sei-project-3-learn-it.fly.dev/signup.html",
    previewSrc: "/quizgenerator-mock.png",
  },
  {
    title: "HoopsIQ",
    subtitle: "NBA player quiz game",
    description:
      "Fun, easy to play NBA player guessing game that tests your NBA knowledge including player stats, team info and player performance.",
    gitURL: "https://github.com/myz96/hoopsiq",
    webURL: "https://myz96.github.io/hoopsiq/",
    previewSrc: "/hoopsiq-mock.png",
  },
];

const CaseStudies = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="lg:px-32 lg:py-8 lg:mb-32 max-w-screen-2xl mx-auto p-8 mb-8" id="CaseStudies">
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
          <motion.button
          initial={{
            backgroundColor: "transparent",
            color: "#CB363F",
            border: "solid",
            borderColor: "#CB363F",
          }}
          animate={{
            backgroundColor: "transparent",
            color: "#CB363F",
            border: "solid",
            borderColor: "#CB363F",
          }}
          whileHover={{
            backgroundColor: "#CB363F",
            color: "#FFFFFF",
            y: -4,
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
          className="py-2 px-10 text-sm font-bold my-8 rounded-full"
          onClick={toggleShowMore}
        >
          show more
        </motion.button>
      )}
      {showMore && (
        <>
          <CaseCard
            title="Project Red Door"
            subtitle="Chinese Australian Mental Health"
            description="Overcoming stigma and addressing mental health needs of Chinese Australians. We are doing this by providing easy access to culturally appropriate tools and resources. "
            gitURL="https://github.com/myz96/project-red-door"
            webURL="#"
            previewSrc="/projectreddoor-mock.png"
          />

          <CaseCard
            title="iOS Expense Tracker"
            subtitle="Empowering financial health"
            description="Meeting a New Years resolution to reduce unnecessary expenditure through improving ease of tracking and thus accountability."
            gitURL="https://github.com/myz96/ios-expense-tracker"
            webURL="#"
            previewSrc="/expensemate-mock.png"
          />

          <motion.button
            initial={{
              backgroundColor: "transparent",
              color: "#CB363F",
              border: "solid",
              borderColor: "#CB363F",
            }}
            animate={{
              backgroundColor: "transparent",
              color: "#CB363F",
              border: "solid",
              borderColor: "#CB363F",
            }}
            whileHover={{
              backgroundColor: "#CB363F",
              color: "#FFFFFF",
              y: -4,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="py-2 px-10 text-sm font-bold my-8 rounded-full"
            onClick={toggleShowMore}
          >
            show less
          </motion.button>
        </>
      )}
    </div>
  );
};

export default CaseStudies;
