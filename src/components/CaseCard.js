import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const CaseCard = ({
  title,
  subtitle,
  description,
  gitURL,
  webURL,
  previewSrc,
}) => {
  return (
    <div className="flex flex-col md:flex-row my-40">
      <div className="flex flex-col m-4 md:w-1/2 md:pr-12">
        <h3 className="text-lg font-bold mb-8">{title}</h3>
        <h2 className="text-3xl font-bold leading-relaxed tracking-widerest my-4 uppercase">
          {subtitle}
        </h2>
        <p className="text-sm leading-loose font-thin my-4">{description}</p>
        <div className="flex">
          <Link href={gitURL} className="mr-4 text-sm font-bold text-primary">
            Github {">>"}
          </Link>
          <Link href={webURL} className="text-sm font-bold text-primary">
            Website {">>"}
          </Link>
        </div>
      </div>
      <div className="relative p-4 mb-10 md:w-1/2">
          <Link
            href={webURL}
            className="absolute flex items-center justify-center top-10 -left-2 md:top-10 md:-left-10 bg-secondary/60 text-white rounded-full  w-[50px] h-[50px] md:w-[80px] md:h-[80px] z-10"
          >
            <div className="flex items-center justify-center bg-primary rounded-full w-[30px] h-[30px] md:w-[60px] md:h-[60px] z-10">
              <Image
                src="/arrow-right.png"
                width={25}
                height={25}
                alt="Right arrow"
              />
            </div>
          </Link>
          <Link href={webURL}>
            <motion.div
              className="absolute rounded-3xl overflow-hidden"
              whileHover={{
                color: "#CB363F",
                y: -10,
                boxShadow: "0px 32px 80px rgba(0,0,0,0.3)",
                overflow: "No"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2, ease: "easeIn" }}
            >
                <Image src={previewSrc} alt={title} width={640} height={360} />
            </motion.div>
          </Link>
        </div>
      </div>
  );
};
