import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/hardware.jpg"}
        desc={"Hardware Maintanance & Repair"}
        directory={"Services | Hardware"}
      />
    </ServicesLayout>
  );
}

export default page;
