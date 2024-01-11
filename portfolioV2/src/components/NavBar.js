"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// import logo from '../../public/website-logo.png'

const NavBar = () => {
  const [active, setActive] = useState(null);

  const makeActive = (label) => {
    setActive(label);
  };

  return (
    <header className="absolute top-0 left-0 w-full font-medium flex items-stretch justify-between text-sm z-10 ">
      <div className="w-1/4 flex justify-center">
      <Link href="#Home">
        <div className="px-16 py-3 flex items-center justify-center">
            <Image src="/website-logo.png" alt="Logo" layout="fixed" width={40} height={40} />
        </div>
      </Link>
      </div>


      <div onClick={() => makeActive("home")} className="w-1/4">
        <Link href="#Home">
          <div className="px-16 py-3 hover:bg-black hover:bg-opacity-5 flex justify-center items-center rounded-lg h-full w-full">
            {"home" === active && <div className="rectangle"></div>}
            michael <br /> zhao
          </div>
        </Link>
      </div>

      <div onClick={() => makeActive("caseStudies")} className="w-1/4">
        <Link href="#CaseStudies">
          <div className="px-16 py-3 hover:bg-black hover:bg-opacity-5 flex justify-center items-center rounded-lg h-full">
            {"caseStudies" === active && <div className="rectangle"></div>}
            case <br /> studies
          </div>
        </Link>
      </div>

      <div onClick={() => makeActive("contact")} className="w-1/4">
        <Link href="#Contact">
          <div className="px-16 py-3 hover:bg-black hover:bg-opacity-5 flex justify-center items-center rounded-lg h-full">
            {"contact" === active && <div className="rectangle"></div>}
            contact <br />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
