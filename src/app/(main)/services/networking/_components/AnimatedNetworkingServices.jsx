"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedNetworkingServices = () => {
  return (
    <section className="bg-blue-10 py-10 md:pb-20 h-full px-4 md:px-10">
      <div className="relative p-6 md:p-10 rounded-xl overflow-hidden">
        <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-glow z-0"></div>
        <div className="relative z-10 text-white bg-black bg-opacity- p-4 rounded-xl">
          <h1 className="text-xl md:text-3xl font-bold mb-4">
            Networking Services
          </h1>
          <h2 className="font-semibold text-lg md:text-xl mb-2 text-cyan-300">
            Design, Optimize, Monitor & Support
          </h2>
          <p className="text-cyan-100 text-base md:text-lg leading-relaxed">
            TinaSoft Nexus offers enterprise-grade networking services tailored
            for Zimbabwean businesses. From structured cabling and network
            design to security hardening and remote monitoring, we help you stay
            connected with confidence and speed.
          </p>
        </div>
      </div>

      {/* Core Networking Services */}
      <div
        className="w-full bg-cover bg-center min-h-[500px] py-10 mt-10"
        style={{ backgroundImage: "url('/network.gif')" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: "📡",
                title: "Network Design & Setup",
                desc: "Custom-tailored LAN, WAN, and Wi-Fi systems for offices, warehouses, and multi-branch businesses.",
              },
              {
                icon: "🔒",
                title: "Network Security",
                desc: "Firewall setup, secure VPNs, and endpoint protection to keep your data and devices safe.",
              },
              {
                icon: "📶",
                title: "Wireless & Mesh Solutions",
                desc: "Reliable Wi-Fi coverage across your entire facility using modern mesh and enterprise routers.",
              },
              {
                icon: "📈",
                title: "Performance Monitoring",
                desc: "Real-time diagnostics and remote monitoring tools to ensure uptime and peak performance.",
              },
              {
                icon: "🧑‍💻",
                title: "Ongoing Support & Maintenance",
                desc: "Dedicated support contracts, on-demand diagnostics, and network health audits.",
              },
              {
                icon: "🔌",
                title: "Structured Cabling",
                desc: "Neat, labeled, and scalable cabling infrastructure with CAT6/7 and fiber optic systems.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-gray-900 hover:shadow-cyan-400 hover:scale-105 transition-transform duration-300"
              >
                <div className="text-6xl mb-6">{icon}</div>
                <h4 className="text-2xl font-semibold mb-3">{title}</h4>
                <p className="text-center text-gray-700">{desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedNetworkingServices;
