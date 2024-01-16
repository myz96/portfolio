"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavBar = () => {
  const [active, setActive] = useState(null);
  const [isTransparent, setIsTransparent] = useState(true)

  const makeActive = (label) => {
    setActive(label);
  };


  // const toggleTransparent = () => {
  //   if (window.scrollY >= 30) {
  //     setIsTransparent(false)
  //   } else {
  //     setIsTransparent(true)
  //   }
  // }

  // window.addEventListener('scroll', toggleTransparent)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 30) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isTransparent ? "absolute top-0 left-0 w-full font-medium flex items-stretch justify-between text-sm z-5 sticky bg-white" : "absolute top-0 left-0 w-full font-medium flex items-stretch justify-between text-sm z-10 sticky bg-white/70 backdrop-blur-sm"}>
      <div className="w-1/4 flex justify-center">
      <Link href="#Home">
        <div className="m-2 px-16 py-1 flex items-center justify-center">
            <Image src="/website-logo.png" alt="Logo" layout="fixed" width={40} height={40} />
        </div>
      </Link>
      </div>


      <div onClick={() => makeActive("home")} className="w-1/4">
        <Link href="#Home">
          <div className="m-2 px-16 py-1 hover:bg-black hover:bg-opacity-5 flex justify-center items-center rounded-lg w-full">
            {"home" === active && <div className="rectangle"></div>}
            michael <br /> zhao
          </div>
        </Link>
      </div>

      <div onClick={() => makeActive("caseStudies")} className="w-1/4">
        <Link href="#CaseStudies">
          <div className="m-2 px-16 py-1 hover:bg-black hover:bg-opacity-5 flex justify-center items-center rounded-lg ">
            {"caseStudies" === active && <div className="rectangle"></div>}
            case <br /> studies
          </div>
        </Link>
      </div>

      <div onClick={() => makeActive("contact")} className="w-1/4 flex justify-center items-center">
        <Link href="#Contact">
          <div className="m-2 px-16 py-1 hover:bg-black hover:bg-opacity-5 flex justify-center items-center rounded-lg">
            {"contact" === active && <div className="rectangle"></div>}
            contact <br />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
