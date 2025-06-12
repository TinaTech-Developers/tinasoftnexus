import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";
import Testimonials from "../../components/Testimonials";
import FAQ from "./_components/FAQs";
import NetworkingCallToAction from "./_components/NetworkingCallToAction";
import AnimatedNetworkingServices from "./_components/AnimatedNetworkingServices"; // ← new file

export const metadata = {
  title: "Networking Services | TinaSoft Nexus",
  description:
    "Reliable and scalable networking solutions by TinaSoft Nexus, including design, security, monitoring, and support for Zimbabwe businesses.",
  keywords: [
    "network design Zimbabwe",
    "business network setup",
    "network security solutions",
    "wireless LAN installation",
    "TinaSoft Nexus networking",
  ],
  openGraph: {
    title: "Networking Services | TinaSoft Nexus",
    description:
      "Professional network setup, optimization, and maintenance services for businesses in Zimbabwe.",
    url: "https://tinasoftnexus.co.zw/services/networking",
    siteName: "TinaSoft Nexus",
    images: [
      {
        url: "https://tinasoftnexus.co.zw/networking.jpg",
        width: 1200,
        height: 630,
        alt: "Networking Services Zimbabwe",
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
        image={"/networking.jpg"}
        desc={"Networking Services"}
        directory={"Services | Networking"}
      />
      <AnimatedNetworkingServices />
      <FAQ />
      <Testimonials />
      <NetworkingCallToAction />
    </ServicesLayout>
  );
}

export default Page;
