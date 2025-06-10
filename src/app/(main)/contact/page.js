"use client";
import React from "react";
import MainLayout from "../components/Layout";
import SubHero from "../components/SubHero";
import EmailnAddress from "./_components/EmailandAddress";
import ClientNeeds from "../components/ClientNeeds";
import MultipleContactMethods from "./_components/MultipleContactMethods";

function Contact() {
  return (
    <MainLayout>
      <SubHero
        image={"/conta.jpg"}
        heading={"Contact Us"}
        text={
          "Get in touch with us today to learn more, ask questions, or start your next project."
        }
      />
      <EmailnAddress />
      <MultipleContactMethods />
      <div className="mb-10 md:mb-0">
        <ClientNeeds />
      </div>
    </MainLayout>
  );
}

export default Contact;
