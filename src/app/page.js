import Head from 'next/head'

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Contact from "@/sections/Contact";
import CaseStudies from "@/sections/CaseStudies";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <NavBar />
      <Hero />
      <CaseStudies />
      <Contact />
      <Footer />
    </>
  );
}
