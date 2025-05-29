"use client";
import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";
import Testimonials from "../../components/Testimonials";
import FAQ from "./_components/FAQs";
import { motion } from "framer-motion";
import CCTVServices from "./_components/CCTVSERVICES";
import CCTVCallToAction from "./_components/CCTVCALLTOACTION";

const services = [
  {
    title: "HD & IP Camera Setup",
    desc: "Crystal-clear video quality with scalable IP camera systems that support advanced analytics.",
  },
  {
    title: "Remote Monitoring",
    desc: "Access live footage from anywhere with our remote-viewing setup on mobile and web platforms.",
  },
  {
    title: "Maintenance & Support",
    desc: "Reliable after-installation support and maintenance packages to keep your system optimized.",
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

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/cctv1.jpeg"}
        desc={"CCTV Installation Services"}
        directory={"Services | CCTV Services"}
      />
      <section className="bg-blue-10 py-10 md:pb-20 h-full px-4 md:px-10">
        <div className="relative p-6 md:p-10 rounded-xl overflow-hidden">
          {/* Animated glowing border behind content */}
          <div className="absolute inset-0 rounded-xl border-2 border-blue-400 animate-glow z-0"></div>

          {/* Content in front */}
          <div className="relative z-10 text-white bg-black bg-opacity-8 p-6 rounded-xl">
            <h1 className="text-xl md:text-3xl font-bold mb-4">
              CCTV Installation Services
            </h1>
            <h2 className="font-semibold text-lg md:text-xl mb-2 text-blue-300">
              Protect What Matters with Advanced Surveillance
            </h2>
            <p className="text-green-100 text-base md:text-lg leading-relaxed">
              At TinaSoft Nexus, we provide professional CCTV installation
              services tailored to safeguard your property and assets. Our
              high-definition camera systems and remote monitoring solutions
              offer peace of mind by delivering crystal-clear footage and
              reliable security coverage 24/7. From initial assessment to
              maintenance, our experts ensure your system is optimized for your
              unique environment.
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

export default page;
