import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";
import Testimonials from "../../components/Testimonials";
import FAQ from "./_components/FAQs";
import CCTVServices from "./_components/CCTVSERVICES";
import CCTVCallToAction from "./_components/CCTVCALLTOACTION";

export const metadata = {
  title: "CCTV Installation Services | TinaSoft Nexus",
  description:
    "Professional CCTV installation by TinaSoft Nexus. High-definition surveillance, remote monitoring, and reliable support tailored to protect your property across Zimbabwe.",
  keywords: [
    "CCTV installation Zimbabwe",
    "surveillance systems Harare",
    "remote camera monitoring",
    "security camera setup",
    "TinaSoft Nexus CCTV",
  ],
  openGraph: {
    title: "CCTV Installation Services | TinaSoft Nexus",
    description:
      "Expert CCTV services including HD camera setup and remote monitoring by TinaSoft Nexus — trusted across Zimbabwe.",
    url: "https://tinasoftnexus.co.zw/services/cctv",
    siteName: "TinaSoft Nexus",
    images: [
      {
        url: "https://tinasoftnexus.co.zw/cctv1.jpeg",
        width: 1200,
        height: 630,
        alt: "CCTV Installation Services",
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

const services = [
  {
    title: "HD & IP Camera Setup",
    desc: "Experience crystal-clear video quality with scalable IP camera systems supporting advanced analytics.",
  },
  {
    title: "Remote Monitoring",
    desc: "Access live footage from anywhere through secure remote viewing on mobile and web platforms.",
  },
  {
    title: "Maintenance & Support",
    desc: "Benefit from reliable after-installation support and comprehensive maintenance packages to keep your system optimized.",
  },
];

const trustPoints = [
  "Licensed & Insured Technicians",
  "Over 10 Years of Experience",
  "Custom Security Planning",
  "Affordable, Transparent Pricing",
  "Fast Turnaround Time",
  "Remote Support & Troubleshooting",
];

function Page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image="/cctv1.jpeg"
        desc="CCTV Installation Services"
        directory="Services | CCTV Services"
      />
      <section className="bg-blue-10 py-10 md:pb-20 h-full px-4 md:px-10">
        <div className="relative p-6 md:p-10 rounded-xl overflow-hidden">
          {/* Animated glowing border behind content */}
          <div className="absolute inset-0 rounded-xl border-2 border-blue-400 animate-glow z-0"></div>

          {/* Content in front */}
          <div className="relative z-10 text-white bg-black bg-opacity-80 p-6 rounded-xl">
            <h1 className="text-xl md:text-3xl font-bold mb-4">
              CCTV Installation Services
            </h1>
            <h2 className="font-semibold text-lg md:text-xl mb-2 text-blue-300">
              Protect What Matters with Advanced Surveillance
            </h2>
            <p className="text-green-100 text-base md:text-lg leading-relaxed">
              At TinaSoft Nexus, we deliver professional CCTV installation
              services tailored to safeguard your property and assets. Our
              high-definition camera systems combined with remote monitoring
              solutions provide peace of mind through crystal-clear footage and
              reliable 24/7 security coverage. From initial assessment through
              ongoing maintenance, our experts ensure your system is customized
              and optimized for your unique environment.
            </p>
          </div>
        </div>
      </section>

      <CCTVServices />
      <FAQ />
      <Testimonials />
      <CCTVCallToAction />
    </ServicesLayout>
  );
}

export default Page;
