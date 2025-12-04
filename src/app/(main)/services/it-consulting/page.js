"use client";
import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";
import ICTConsultingServices from "./_components/ICTConsultingServices";
import { motion } from "framer-motion";
import FAQ from "./_components/FAQs";
import Testimonials from "../../components/Testimonials";
import CONSULTINGCALLTOACTION from "./_components/CONSULTINGCALLTOACTION";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/consulting.jpg"}
        desc={"IT Consulting Services"}
        directory={"Services | IT Consulting"}
      />
      <section className="bg-blue-10 py-10 md:pb-20 h-full px-4 md:px-10">
        <div className="relative p-6 md:p-10 rounded-xl overflow-hidden">
          {/* Animated glowing border behind content */}
          <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-glow z-0"></div>

          {/* Content in front */}
          <div className="relative z-10 text-white bg-black bg-opacity- p-4 rounded-xl">
            <h1 className="text-xl md:text-3xl font-bold mb-4">
              ICT Consulting
            </h1>
            <h2 className="font-semibold text-lg md:text-xl mb-2 text-cyan-300">
              Strategic Guidance for Smarter Technology Decisions
            </h2>
            <p className="text-cyan-100 text-base md:text-lg leading-relaxed">
              TinaSoft Nexus offers expert ICT consulting services to help
              businesses align their technology with their goals. We provide
              strategic advice on infrastructure planning, software solutions,
              cybersecurity, and digital transformation. Our consultants work
              closely with your team to assess current systems, identify
              improvement areas, and implement cost-effective, future-ready
              technologies that drive growth and innovation.
            </p>
          </div>
        </div>
      </section>
      {/* Core Services */}

      <ICTConsultingServices />
      {/* </div> */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-cyan-400 drop-shadow-md">
            Why Choose TinaSoft Nexus
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-16 text-lg">
            We bring strategy, innovation, and technology together to help your
            business grow smarter and faster.
          </p>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              {
                icon: "🧠",
                title: "Strategic Expertise",
                desc: "We align IT strategies with your business goals to drive sustainable growth.",
              },
              {
                icon: "🔐",
                title: "Enterprise-Grade Security",
                desc: "Our solutions ensure your infrastructure is protected from evolving cyber threats.",
              },
              {
                icon: "🤝",
                title: "Vendor-Neutral Advice",
                desc: "We recommend the best tools for your business—not what benefits vendors.",
              },
              {
                icon: "⚙️",
                title: "24/7 Technical Support",
                desc: "Always-on support to keep your systems running smoothly and efficiently.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 p-6 rounded-xl backdrop-blur-lg border border-white/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-cyan-300">
                  {item.title}
                </h3>
                <p className="text-white/80 text-sm">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <FAQ />
      {/* <Testimonials /> */}
      <CONSULTINGCALLTOACTION />
    </ServicesLayout>
  );
}

export default page;
