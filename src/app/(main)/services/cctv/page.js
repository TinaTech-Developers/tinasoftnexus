import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/cctv1.jpeg"}
        desc={"CCTV Installation Services"}
        directory={"Services | CCTV Services"}
      />
    </ServicesLayout>
  );
}

export default page;
