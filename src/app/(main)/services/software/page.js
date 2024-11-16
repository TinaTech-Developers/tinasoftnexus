import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/coding.jpg"}
        desc={"Custom Software Development"}
        directory={"Services | Software"}
      />
    </ServicesLayout>
  );
}

export default page;
