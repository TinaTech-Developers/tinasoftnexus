"use client";
import React from "react";
import MainLayout from "../components/Layout";
import SubHero from "../components/SubHero";
import EmailnAddress from "./_components/EmailandAddress";
import ClientNeeds from "../components/ClientNeeds";

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
      <ClientNeeds />
    </MainLayout>
  );
}

export default Contact;
