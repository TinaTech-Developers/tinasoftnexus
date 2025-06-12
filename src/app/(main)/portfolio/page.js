// src/app/(main)/portfolio/page.js
import React from "react";
import MainLayout from "../components/Layout";
import SubHero from "../components/SubHero";
import ClientNeeds from "../components/ClientNeeds";
import MiniHeader from "./_components/MiniHeader";

// Page-specific metadata (server-side only)
export const metadata = {
  title: "Our Portfolio | TinaSoft Nexus Digital Solutions",
  description:
    "Explore TinaSoft Nexus's portfolio showcasing innovative ICT solutions designed to empower businesses and drive digital transformation.",
};

export default function Portfolio() {
  return (
    <MainLayout>
      <SubHero
        image={"/p.jpg"}
        heading={"Our Digital Solutions"}
        text={
          "We deliver innovative ICT solutions designed to streamline operations, enhance productivity, and drive sustainable growth—empowering businesses to thrive in today’s dynamic digital landscape."
        }
      />
      <MiniHeader />
      <div className="mb-12 md:mb-0">
        <ClientNeeds />
      </div>
    </MainLayout>
  );
}
