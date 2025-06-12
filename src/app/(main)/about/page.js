import React from "react";
import MainLayout from "../components/Layout";
import SubHero from "../components/SubHero";
import OurBelief from "./_components/OurBelief";
import CorePrinciples from "./_components/CorePrinciples";
import Address from "./_components/Address";
import AboutInfo from "./_components/About";

//Page-specific metadata
export const metadata = {
  title: "About TinaSoft Nexus | Expert ICT Solutions in Zimbabwe",
  description:
    "Discover the mission, values, and team behind TinaSoft Nexus – Zimbabwe’s trusted ICT company offering innovative software, networking, and digital services.",
  keywords: [
    "About TinaSoft Nexus",
    "ICT company Zimbabwe",
    "Tech solutions Harare",
    "Software company Zimbabwe",
    "Networking company Harare",
  ],
  openGraph: {
    title: "About TinaSoft Nexus | Expert ICT Solutions in Zimbabwe",
    description:
      "Meet the experts behind TinaSoft Nexus. We provide transformative ICT solutions in Harare and beyond.",
    url: "https://tinasoftnexus.co.zw/about",
    siteName: "TinaSoft Nexus",
    type: "website",
    locale: "en_ZW",
    images: [
      {
        url: "https://tinasoftnexus.co.zw/logo.png",
        width: 1200,
        height: 630,
        alt: "TinaSoft Nexus Logo",
      },
    ],
  },
};

function About() {
  return (
    <MainLayout>
      <SubHero
        image={"/ai.avif"}
        heading={"About Us"}
        text={
          "TinaSoft NEXUS specializes in innovative ICT solutions that drive efficiency and support digital transformation."
        }
      />
      <AboutInfo />
      <div className=" my-10">
        <div className="flex flex-col items-center justify-center">
          <p className="uppercase font-semibold text-sm text-blue-400">
            how we work
          </p>
          <h1 className=" group text-blue-950 text-center  text-2xl md:text-3xl uppercase ">
            Our Values
            <span className="block w-[100%] md:max-w-[55%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2 "></span>
            <span className="hidden md:block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[80px] -translate-y-1"></span>
            <span className="hidden md:block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[122px] -translate-y-2"></span>
          </h1>
        </div>
      </div>
      <CorePrinciples />
      <OurBelief />
      <Address />
    </MainLayout>
  );
}

export default About;
