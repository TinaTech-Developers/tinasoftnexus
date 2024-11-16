import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/consulting.jpg"}
        desc={"IT Consulting Services"}
        directory={"Services | IT Consulting"}
      />
    </ServicesLayout>
  );
}

export default page;
