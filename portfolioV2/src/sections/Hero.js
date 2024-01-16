"use client";

import {
  CSSIcon,
  ExpressIcon,
  HTMLIcon,
  JSIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  PostgreIcon,
  PythonIcon,
  ReactIcon,
  TailwindIcon,
} from "@/components/Icons";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative" id="Home">
      <div className="z-[-2] absolute top-0 left-0 w-full h-full bg-white">
        <video autoPlay muted style={{ width: '1600px', height: '500'}}>
          <source src="/background-animate.mp4"/>
        </video>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-7xl font-bold my-2">michael zhao</h1>
        <h2 className="text-lg font-thin my-4">
          // just a boy trying his best to learn //
        </h2>
        <div className="flex items-center justify-center flex-wrap my-4 max-w-10">
          <motion.a href="/" whileHover={{ y: -4 }}>
            <HTMLIcon className="w-6 mr-3" />
          </motion.a>
          <motion.a href="/" whileHover={{ y: -4 }}>
            <CSSIcon className="w-6 mx-3" />
          </motion.a>
          <motion.a href="/" whileHover={{ y: -4 }}>
            <JSIcon className="w-6 mx-3" />
          </motion.a>
          <motion.a href="/" whileHover={{ y: -4 }}>
            <PostgreIcon className="w-6 mx-3" />
          </motion.a>
          <motion.a href="/" whileHover={{ y: -4 }}>
            <MongoIcon className="w-6 mx-3" />
          </motion.a>
          <motion.a href="/" whileHover={{ y: -4 }}>
            <ExpressIcon className="w-6 mx-3" />
          </motion.a>
          <motion.a href="/" whileHover={{ y: -4 }}>
            <ReactIcon className="w-6 mx-3" />
          </motion.a>
          <motion.a href="/" whileHover={{ y: -4 }}>
            <NodeIcon className="w-6 mx-3" />
          </motion.a>
          <motion.a href="/" whileHover={{ y: -4 }}>
            <NextIcon className="w-6 mx-3" />
          </motion.a>
          <motion.a href="/" whileHover={{ y: -4 }}>
            <TailwindIcon className="w-6 mx-3" />
          </motion.a>
          <motion.a href="/" whileHover={{ y: -4 }}>
            <PythonIcon className="w-6 ml-3" />
          </motion.a>
        </div>
        <Link href="/Michael-Zhao-Resume.pdf">
          <motion.button
            initial={{
              backgroundColor: "transparent",
              color: "#000000",
            }}
            animate={{
              backgroundColor: "transparent",
              color: "#000000",
            }}
            whileHover={{
              backgroundColor: "rgba(203, 54, 63, 0.8)",
              borderColor: "rgba(203, 54, 63, 0.3)",
              color: "#FFFFFF",
              y: -4,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="py-2 px-10 text-sm font-bold my-4 rounded-full"
          >
            RESUME
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
