// ./src/app/(main)/services/software/page.js
import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";
import Testimonials from "../../components/Testimonials";
import FAQ from "./_components/FAQs";
import SoftwareCallToAction from "./_components/SoftwareCallToAction";
import AnimatedSoftwareServices from "./_components/AnimatedSoftwareServices"; // ← new client file

export const metadata = {
  title: "Custom Software Development | TinaSoft Nexus",
  description:
    "Custom software development services at TinaSoft Nexus — scalable, secure, and tailored software solutions for your business success.",
  keywords: [
    "custom software development",
    "software solutions Zimbabwe",
    "web app development",
    "mobile app development",
    "TinaSoft Nexus software",
  ],
  openGraph: {
    title: "Custom Software Development | TinaSoft Nexus",
    description:
      "Tailored, scalable software solutions designed to optimize your business operations.",
    url: "https://tinasoftnexus.co.zw/services/software",
    siteName: "TinaSoft Nexus",
    images: [
      {
        url: "https://tinasoftnexus.co.zw/coding.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Software Development",
      },
    ],
    type: "website",
    locale: "en_ZW",
  },
  robots: {
    index: true,
    follow: true,
  },
};

function Page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/coding.jpg"}
        desc={"Custom Software Development"}
        directory={"Services | Software"}
      />
      <AnimatedSoftwareServices /> {/* ← now holds all framer-motion logic */}
      <FAQ />
      <Testimonials />
      <SoftwareCallToAction />
    </ServicesLayout>
  );
}

export default Page;
