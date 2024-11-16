import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/network1.webp"}
        desc={"Networking Services"}
        directory={"Services | Networking"}
      />
    </ServicesLayout>
  );
}

export default page;
