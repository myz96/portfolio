import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="z-[-2] absolute top-0 left-0 w-full h-full flex items-end">
        {/* TODO: Insert maple tree with falling leaf */}
      </div>
      <div className="flex flex-col justify-center items-center py-64">
        <h1 className="text-7xl font-bold my-2">michael zhao</h1>
        <h2 className="text-lg font-thin my-4">
          // just a boy trying his best to learn //
        </h2>
        {/* TODO: Update Techstack into Logos */}
        <div className="grid grid-cols-10 gap-2">
          <h3>HTML5</h3>
          <h3>CSS</h3>
          <h3>Javascript</h3>
          <h3>React</h3>
          <h3>NextJS</h3>
          <h3>Tailwind</h3>
          <h3>Express</h3>
          <h3>NodeJS</h3>
          <h3>Python</h3>
          <h3>R</h3>
        </div>
        <Link href="/Michael-Zhao-Resume.pdf">
          <button className="py-2 px-14 text-sm font-bold my-4 border-black border-2 rounded-full hover:text-white hover:bg-primary hover:opacity-80 hover:border-primary">
            RESUME
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
