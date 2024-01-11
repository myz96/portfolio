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
    <div className="flex my-40">
      <div className="flex flex-col w-1/2 pr-12">
        <h3 className="text-lg font-bold my-8">{title}</h3>
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
      <div className="w-1/2">
        <motion.div
          className="relative rounded-3xl"
          whileHover={{
            color: "#CB363F",
            y: -4,
            boxShadow: "0px 8px 20px rgba(0,0,0,0.1)",
            overflow: "No"
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2, ease: "easeIn" }}
        >
          <Link
            href="#"
            className="absolute flex items-center justify-center top-10 -left-10 bg-primaryLight/40 text-white rounded-full w-[80px] h-[80px]"
          >
            <div className="flex items-center justify-center bg-primary rounded-full w-[60px] h-[60px]">
              <Image
                src="/arrow-right.png"
                width={25}
                height={25}
                alt="Right arrow"
              />
            </div>
          </Link>
          <Link href="#">
            <div className="flex my-8 items-center justify-center bg-primary text-white w-full h-[200px] rounded-3xl shadow-md"></div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};
