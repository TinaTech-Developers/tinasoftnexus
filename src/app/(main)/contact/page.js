import React from "react";
import MainLayout from "../components/Layout";
import SubHero from "../components/SubHero";
import EmailnAddress from "./_components/EmailandAddress";
import ClientNeeds from "../components/ClientNeeds";
import MultipleContactMethods from "./_components/MultipleContactMethods";

// ✅ Page-specific metadata
export const metadata = {
  title: "Contact TinaSoft Nexus | Reach Out to Our ICT Experts",
  description:
    "Need help with ICT services in Zimbabwe? Contact TinaSoft Nexus for expert support in software development, networking, hardware, and more.",
  keywords: [
    "Contact TinaSoft Nexus",
    "ICT support Harare",
    "Get in touch ICT Zimbabwe",
    "Software help Harare",
    "Networking assistance Harare",
    "CCTV installation contact",
    "TinaSoft Nexus phone number",
  ],
  openGraph: {
    title: "Contact TinaSoft Nexus | Reach Out to Our ICT Experts",
    description:
      "We're here to help! Reach TinaSoft Nexus for professional ICT solutions and technical support across Zimbabwe.",
    url: "https://tinasoftnexus.co.zw/contact",
    siteName: "TinaSoft Nexus",
    type: "website",
    locale: "en_ZW",
    images: [
      {
        url: "https://tinasoftnexus.co.zw/logo.png",
        width: 1200,
        height: 630,
        alt: "TinaSoft Nexus Logo",
      },
    ],
  },
};

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
      <div className="mb-12 md:mb-0">
        <ClientNeeds />
      </div>
    </MainLayout>
  );
}

export default Contact;
