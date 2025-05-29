"use client";
import React from "react";
import ServicesLayout from "../_components/ServicesLayout";
import ServicesSubHero from "../_components/ServicesSubHero";
import CloudComputingCallToAction from "./_components/CloudComputingCallToAction";
import Testimonials from "../../components/Testimonials";
import CloudFAQ from "./_components/FAQ";
import { motion } from "framer-motion";

function page() {
  return (
    <ServicesLayout>
      <ServicesSubHero
        image={"/bann.webp"}
        desc={"Cloud Computing Services"}
        directory={"Services | Cloud Computing"}
      />
      <section className="bg-blue-10 py-10 md:pb-20 h-full px-4 md:px-10">
        <div className="relative p-6 md:p-10 rounded-xl overflow-hidden">
          {/* Animated glowing border behind content */}
          <div className="absolute inset-0 rounded-xl border-2 border-cyan-400 animate-glow z-0"></div>

          {/* Content in front */}
          <div className="relative z-10 text-white bg-black bg-opacity- p-6 rounded-xl">
            <h1 className="text-xl md:text-3xl font-bold mb-4">
              Cloud Computing Solutions
            </h1>
            <h2 className="font-semibold text-lg md:text-xl mb-2 text-cyan-300">
              Empower Your Business with Scalable, Secure Cloud Services
            </h2>
            <p className="text-green-100 text-base md:text-lg leading-relaxed">
              At TinaSoft Nexus, we deliver tailored cloud computing solutions
              that modernize your IT infrastructure and improve operational
              efficiency. Whether you're migrating to the cloud, setting up a
              home server for internal use, or need secure hybrid storage, our
              affordable technologies empower both startups and organizations to
              access scalable, high-performance resources without breaking the
              bank.
              <br />
              <br />
              We also offer server setup and configuration, cloud backup
              strategies, and ongoing support to ensure your systems stay fast,
              secure, and future-ready.
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
            Cloud Computing Services
          </h3>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: "☁️",
                title: "Infrastructure as a Service (IaaS)",
                desc: "Provision virtual machines, storage, and networking on-demand for scalable operations.",
              },
              {
                icon: "🧩",
                title: "Platform as a Service (PaaS)",
                desc: "Deploy and manage web applications without the headache of server maintenance.",
              },
              {
                icon: "🔐",
                title: "Cloud Security & Compliance",
                desc: "Ensure your systems are protected with encryption, firewall configs, and access control.",
              },
              {
                icon: "💾",
                title: "Affordable Cloud Migration",
                desc: "Convert existing local systems to cloud-based servers using home server tech—perfect for schools and small orgs.",
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
            { label: "Cloud Deployments", value: "300+" },
            { label: "Data Center Uptime", value: "99.999%" },
            { label: "Migration Success Rate", value: "100%" },
            { label: "Clients Using CloudOps", value: "120+" },
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
          <h2 className="text-3xl font-bold mb-6">
            Why Choose TinaSoft Nexus?
          </h2>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 text-left"
          >
            {[
              {
                icon: "🚀",
                title: "Seamless Scalability",
                desc: "Rapidly scale resources up or down as your business grows or changes.",
              },
              {
                icon: "📡",
                title: "Global Reach",
                desc: "Deploy across multiple regions and availability zones for optimal performance.",
              },
              {
                icon: "🧠",
                title: "Expert Cloud Support",
                desc: "Certified professionals assist with architecture, optimization, and incident response.",
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

      <CloudFAQ />
      <Testimonials />
      <CloudComputingCallToAction />
    </ServicesLayout>
  );
}

export default page;
