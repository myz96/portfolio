import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="flex h-[400px]" id="Contact">
      <div className="relative w-1/4">
        <Image src="/about-pic.jpg" fill className="object-cover" />
      </div>
      <div className="w-1/4 p-8 bg-primary">
        <h1 className="text-3xl font-bold mb-4 text-white">about</h1>
        <p className="text-sm text-white">
          Hey, I'm Michael! I'm an AI Product Manager at Seek. I'm passionate about
          creating better societies using AI, data and digital products.
        </p>
        <button className="my-8 text-white text-sm border border-white font-bold text-primary text-sm rounded-full py-2 px-10 uppercase hover:bg-white hover:text-primary">
          view resume
        </button>
      </div>
      <div className="w-1/2 p-8 bg-black/90">
        <h1 className="text-3xl font-bold mb-4 text-white">contact</h1>
        {/* TODO: Insert icons */}
        <div className="flex flex-col">
          <div className="flex my-2">
            <div className="bg-white rounded-full w-5 h-5"></div>
            <Link href="michael.yj.zhao@gmail.com" className="text-white mx-4">
              michael.yj.zhao@gmail.com
            </Link>
          </div>
          <div className="flex my-2">
          <div className="bg-white rounded-full w-5 h-5"></div>
            <Link href="https://www.linkedin.com/in/michaelyjzhao/" className="text-white mx-4">
            linkedin.com/in/michaelyjzhao/
            </Link>
          </div>
          <div className="flex my-2">
          <div className="bg-white rounded-full w-5 h-5"></div>
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
