"use client";
import About from "./(main)/components/About";
import Button from "./(main)/components/Button";
import ClientNeeds from "./(main)/components/ClientNeeds";
import Hero from "./(main)/components/Hero";
import HeroSlider from "./(main)/components/HeroSlider";
import MainLayout from "./(main)/components/Layout";
import Partners from "./(main)/components/Partners";
import Promotion from "./(main)/components/Promotion";
import Services from "./(main)/components/Services";
import Testimonials from "./(main)/components/Testimonials";
import OurExpertise from "./(main)/components/OurExpertise";
import AboutInfo from "./(main)/about/_components/About";

export default function Home() {
  return (
    <MainLayout>
      <HeroSlider />

      <About />
      <OurExpertise />
      <AboutInfo />
      <Services />
      {/* <About /> */}
      <ClientNeeds />
      <Partners />
      <Promotion />
      <Testimonials />
    </MainLayout>
  );
}
