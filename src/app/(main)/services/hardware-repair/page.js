"use client";
import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";
import { motion } from "framer-motion";
import HardwareFAQ from "./_components/FAQs";
import Testimonials from "../../components/Testimonials";
import HardwareCallToAction from "./_components/HardwareCallToAction";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/hardware.jpg"}
        desc={"Hardware Maintanance & Repair"}
        directory={"Services | Hardware"}
      />
      <section className="bg-blue-10 py-10 md:pb-20 h-full px-4 md:px-10">
        <div className="relative p-6 md:p-10 rounded-xl overflow-hidden">
          {/* Animated glowing border behind content */}
          <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-glow z-0"></div>

          {/* Content in front */}
          <div className="relative z-10 text-white bg-black bg-opacity- p-6 rounded-xl">
            <h1 className="text-xl md:text-3xl font-bold mb-4">
              Hardware Maintenance & Sales
            </h1>
            <h2 className="font-semibold text-lg md:text-xl mb-2 text-cyan-300">
              Keep Your Tech Reliable, Affordable, and Ready to Perform
            </h2>
            <p className="text-green-100 text-base md:text-lg leading-relaxed">
              TinaSoft Nexus provides comprehensive hardware maintenance,
              repair, and IT equipment sales services. Whether you're managing a
              small office network, a growing business, or a school lab, our
              certified technicians ensure your systems run smoothly and stay
              up-to-date.
              <br />
              <br />
              We specialize in diagnostics, part replacements, upgrade
              recommendations, and affordable device sales—from desktop
              computers and laptops to networking gear and peripherals.
              <br />
              <br />
              Benefit from our honest pricing, fast turnaround, and continued
              support that keeps your hardware optimized and business-ready.
            </p>
          </div>
        </div>
      </section>

      <div
        className="w-full bg-cover bg-center min-h-[600px] py-20 px-4"
        style={{
          backgroundImage: "url('/homm.jpg')", // replace with real image path
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-white mb-16 drop-shadow-lg">
            Hardware Services We Offer
          </h3>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: "🛠️",
                title: "Hardware Repairs",
                desc: "From broken screens to failing drives, we restore your devices to working condition.",
              },
              {
                icon: "🔧",
                title: "Routine Maintenance",
                desc: "Keep systems running optimally with regular servicing and tune-ups.",
              },
              {
                icon: "💼",
                title: "IT Equipment Sales",
                desc: "Affordable laptops, desktops, routers, and accessories tailored for your needs.",
              },
              {
                icon: "🧩",
                title: "Upgrade & Replacement",
                desc: "Boost performance with SSD upgrades, RAM expansion, or full system swaps.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/20 backdrop-blur-lg border border-white/30 p-6 rounded-2xl shadow-xl hover:shadow-blue-400/50 text-white transition-all duration-300"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-white/80">{service.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <section className="bg-white py-12 px-6 text-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { label: "Devices Serviced", value: "500+" },
            { label: "Parts in Stock", value: "300+" },
            { label: "Repair Success Rate", value: "98%" },
            { label: "Clients Trusting Us", value: "150+" },
          ].map((stat, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-blue-700">{stat.value}</h3>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why TinaSoft Nexus?</h2>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left"
          >
            {[
              {
                icon: "⚙️",
                title: "On-Site & Remote Options",
                desc: "We support both walk-in and remote maintenance plans for flexibility.",
              },
              {
                icon: "📦",
                title: "Genuine Parts & Products",
                desc: "All hardware and replacement parts are sourced from trusted suppliers.",
              },
              {
                icon: "⏱️",
                title: "Quick Turnaround",
                desc: "Fast diagnostics and repairs to minimize downtime and boost productivity.",
              },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow-md">
                <div className="text-3xl mb-4">{icon}</div>
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      <HardwareFAQ />
      <Testimonials />
      <HardwareCallToAction />
    </ServicesLayout>
  );
}

export default page;
