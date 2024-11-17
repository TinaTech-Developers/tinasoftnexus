import React from "react";
import MainLayout from "../components/Layout";
import SubHero from "../components/SubHero";
import Loading from "@/app/loading";

function About() {
  return (
    <MainLayout>
      <SubHero image={"/png.jpg"} />
      <Loading />
    </MainLayout>
  );
}

export default About;
