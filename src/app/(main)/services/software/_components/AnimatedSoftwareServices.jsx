"use client";

import React from "react";
import { motion } from "framer-motion";

function AnimatedSoftwareServices() {
  return (
    <>
      <section className="bg-blue-10 py-10 md:pb-20 h-full px-4 md:px-10">
        <div className="relative p-6 md:p-10 rounded-xl overflow-hidden">
          <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-glow z-0"></div>
          <div className="relative z-10 text-white bg-black bg-opacity- p-4 rounded-xl">
            <h1 className="text-xl md:text-3xl font-bold mb-4">
              Software Development Services
            </h1>
            <h2 className="font-semibold text-lg md:text-xl mb-2 text-cyan-300">
              Scalable, Secure & Tailored for Your Success
            </h2>
            <p className="text-cyan-100 text-base md:text-lg leading-relaxed">
              At TinaSoft Nexus, our software development solutions are
              engineered to solve real business problems...
            </p>
            <p className="text-cyan-100 text-base md:text-lg leading-relaxed">
              From planning and UI/UX design to full-stack development and
              deployment...
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <div
        className="w-full bg-cover bg-center min-h-[500px] py-10"
        style={{ backgroundImage: "url('/a.gif')" }}
      >
        <div className="max-w-6xl mx-auto mb-20 px-4">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {[
              {
                icon: "🖥️",
                title: "Web Applications",
                desc: "Robust, scalable web apps...",
              },
              {
                icon: "📱",
                title: "Mobile App Development",
                desc: "Cross-platform and native apps...",
              },
              {
                icon: "⚙️",
                title: "Custom Business Software",
                desc: "Tailor-made software solutions...",
              },
              {
                icon: "☁️",
                title: "Cloud-Based Solutions",
                desc: "Reliable, secure cloud apps...",
              },
              {
                icon: "🔗",
                title: "API & Integration Services",
                desc: "Connecting your software...",
              },
              {
                icon: "🧱",
                title: "Legacy System Upgrades",
                desc: "Modernizing outdated software...",
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

      {/* Process Overview */}
      <div className="max-w-5xl mx-auto md:my-20 p-4">
        <h3 className="text-3xl font-bold mb-10 text-center text-gray-900">
          Our Process
        </h3>
        <div className="flex justify-between items-center relative">
          <div className="absolute top-6 left-6 right-6 h-1 bg-cyan-400 opacity-30 z-0 rounded-full"></div>
          {[
            { step: 1, title: "Discovery & Planning", icon: "🔍" },
            { step: 2, title: "UI/UX Design", icon: "🎨" },
            { step: 3, title: "Development & Testing", icon: "💻" },
            { step: 4, title: "Deployment", icon: "🚀" },
            { step: 5, title: "Ongoing Support", icon: "🤝" },
          ].map(({ step, title, icon }) => (
            <div
              key={step}
              className="relative z-10 flex flex-col items-center text-center w-1/5"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-cyan-400 text-black font-bold text-lg mb-3 shadow-lg">
                {icon}
              </div>
              <h4 className="font-semibold text-gray-900">{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default AnimatedSoftwareServices;
