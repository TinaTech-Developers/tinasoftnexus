import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/seo.webp"}
        desc={"Search Engine Optimization"}
        directory={"Services | SEO"}
      />
    </ServicesLayout>
  );
}

export default page;
