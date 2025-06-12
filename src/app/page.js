// src/app/page.js (Home page, server component)
import React from "react";
import MainLayout from "./(main)/components/Layout";
import HeroSlider from "./(main)/components/HeroSlider";
import About from "./(main)/components/About";
import OurExpertise from "./(main)/components/OurExpertise";
import AboutInfo from "./(main)/about/_components/About";
import Services from "./(main)/components/Services";
import ClientNeeds from "./(main)/components/ClientNeeds";
import Partners from "./(main)/components/Partners";
import Promotion from "./(main)/components/Promotion";
import Testimonials from "./(main)/components/Testimonials";

export const metadata = {
  title: "TinaSoft Nexus | Harare’s Leading ICT Company",
  description:
    "TinaSoft Nexus delivers comprehensive ICT solutions, specializing in software development, website development & hosting advanced networking, CCTV installations, and reliable IT support throughout Zimbabwe.",
};

export default function Home() {
  return (
    <MainLayout>
      <HeroSlider />
      <About />
      <OurExpertise />
      <AboutInfo />
      <Services />
      <ClientNeeds />
      <Partners />
      <Promotion />
      <Testimonials />
    </MainLayout>
  );
}
