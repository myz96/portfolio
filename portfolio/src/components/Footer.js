import React from "react";

import {
  GmailIcon,
  GithubIcon,
  LinkedinIcon
} from "@/components/Icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-16 bg-black flex items-center justify-end px-4">
      <GmailIcon className="mx-2"/>
      <GithubIcon className="mx-2"/>
      <LinkedinIcon className="mx-2"/> 
    </div>
  );
};

export default Footer;
