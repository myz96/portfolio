"use client"

import {
  GmailIcon,
  GithubIcon,
  LinkedinIcon
} from "@/components/Icons";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row h-full md:h-[400px]" id="Contact">
      <div className="relative h-[300px] md:h-full md:w-1/4">
        <Image src="/about-pic.jpg" fill className="object-cover" />
      </div>
      <div className="md:w-1/4 p-8 bg-primary">
        <h1 className="text-3xl font-bold mb-4 text-white">about</h1>
        <p className="text-sm text-white">
          Hey, I'm Michael! I'm an AI Product Manager at Seek. I'm passionate about
          creating better societies using AI, data and digital products.
        </p>
        <motion.button
            initial={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "solid",
              borderColor: "rgba(255, 255, 255, 1)",
            }}
            animate={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              border: "solid",
              borderColor: "rgba(255, 255, 255, 1)",
            }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              color: "#CB363F",
              y: -4,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2, ease: "easeIn" }}
            className="py-2 px-10 text-sm font-bold my-8 rounded-full"
          >
            VIEW RESUME
          </motion.button>
      </div>
      <div className="md:w-1/2 p-8 bg-black/90">
        <h1 className="text-3xl font-bold mb-4 text-white">contact</h1>
        <div className="flex flex-col">
          <div className="flex my-2">
            <GmailIcon className="w-6 mr-3" />
            <Link href="michael.yj.zhao@gmail.com" className="text-white mx-4">
              michael.yj.zhao@gmail.com
            </Link>
          </div>
          <div className="flex my-2">
            <LinkedinIcon className="w-6 mr-3" />
            <Link href="https://www.linkedin.com/in/michaelyjzhao/" className="text-white mx-4">
            linkedin.com/in/michaelyjzhao/
            </Link>
          </div>
          <div className="flex my-2">
            <GithubIcon className="w-6 mr-3" />
            <Link href="https://github.com/myz96" className="text-white mx-4">
            github.com/myz96
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
