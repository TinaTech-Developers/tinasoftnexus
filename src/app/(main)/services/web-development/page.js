import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/Website.webp"}
        desc={"Web Design & Development"}
        directory={"Services | Website Development"}
      />
    </ServicesLayout>
  );
}

export default page;
