import React from "react";
import MainLayout from "../components/Layout";
import SubHero from "../components/SubHero";
import Loading from "@/app/loading";

function About() {
  return (
    <MainLayout>
      <SubHero />
      <Loading />
    </MainLayout>
  );
}

export default About;
