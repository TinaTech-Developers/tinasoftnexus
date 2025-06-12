"use client";

import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";

export const metadata = {
  title: "Search Engine Optimization (SEO) | TinaSoft Nexus",
  description:
    "Boost your online presence with TinaSoft Nexus's expert SEO services. Improve your search rankings and drive more traffic to your business website.",
  keywords: [
    "SEO services",
    "search engine optimization",
    "website ranking",
    "online marketing Zimbabwe",
    "TinaSoft Nexus SEO",
  ],
  openGraph: {
    title: "Search Engine Optimization (SEO) | TinaSoft Nexus",
    description:
      "Professional SEO solutions designed to increase your website visibility and drive organic traffic.",
    url: "https://tinasoftnexus.co.zw/services/seo",
    siteName: "TinaSoft Nexus",
    images: [
      {
        url: "https://tinasoftnexus.co.zw/seo.webp",
        width: 1200,
        height: 630,
        alt: "SEO Services",
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
        image={"/seo.webp"}
        desc={"Search Engine Optimization"}
        directory={"Services | SEO"}
      />
    </ServicesLayout>
  );
}

export default Page;
