import React from "react";
import MainLayout from "../components/Layout";
import SubHero from "../components/SubHero";
import ClientNeeds from "../components/ClientNeeds";
import MiniHeader from "./_components/MiniHeader";

function Portfolio() {
  return (
    <MainLayout>
      <SubHero
        image={"/p.jpg"}
        heading={"Our Digital Solutions"}
        text={
          "TinaSoft NEXUS delivers innovative ICT solutions that empower businesses to thrive."
        }
      />
      <MiniHeader />
      <div className="mb-10 md:mb-0">
        <ClientNeeds />
      </div>
    </MainLayout>
  );
}

export default Portfolio;
