import React from "react";
import MainLayout from "../components/Layout";
import SubHero from "../components/SubHero";
import ClientNeeds from "../components/ClientNeeds";
import MiniHeader from "./_components/MiniHeader";

function Portfolio() {
  return (
    <MainLayout>
      <SubHero />
      <MiniHeader />

      <ClientNeeds />
    </MainLayout>
  );
}

export default Portfolio;
