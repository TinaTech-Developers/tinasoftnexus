"use client";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Cloud,
  ShieldCheck,
  Settings,
  FileSearch,
  Users,
} from "lucide-react";

const services = [
  {
    icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
    title: "IT Strategy & Roadmapping",
    description:
      "Align your technology with business goals through expert-led planning and execution.",
  },
  {
    icon: <Settings className="w-8 h-8 text-cyan-400" />,
    title: "Digital Transformation",
    description:
      "Modernize legacy systems to boost operational efficiency and customer engagement.",
  },
  {
    icon: <Cloud className="w-8 h-8 text-cyan-400" />,
    title: "Cloud Migration",
    description:
      "Plan and implement secure, scalable cloud solutions tailored to your business.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-cyan-400" />,
    title: "Cybersecurity Consulting",
    description:
      "Identify vulnerabilities and protect your digital infrastructure with expert strategies.",
  },
  {
    icon: <FileSearch className="w-8 h-8 text-cyan-400" />,
    title: "Infrastructure Assessment",
    description:
      "Evaluate and optimize your current IT systems for maximum performance and uptime.",
  },
  {
    icon: <Users className="w-8 h-8 text-cyan-400" />,
    title: "Vendor & Solution Advisory",
    description:
      "Receive unbiased advice on selecting the right platforms and technology partners.",
  },
];

export default function ICTConsultingServices() {
  return (
    <section
      className="w-full bg-cover bg-center min-h-[600px] py-20 px-4"
      style={{ backgroundImage: "url('/bgtech.gif')" }}
    >
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          ICT Consulting Services
        </h1>
        <p className="text-cyan-100 mt-4 max-w-2xl mx-auto text-lg">
          Expert guidance to help your business thrive through smart technology
          choices.
        </p>
      </div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-blue-950 border border-cyan-800 p-6 rounded-2xl shadow-md hover:shadow-cyan-500/30 transition duration-300"
            // initial={{ y: 100, opacity: 0 }}
            // whileInView={{ y: 0, opacity: 1 }}
            // transition={{ duration: 0.7 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-cyan-100 text-sm leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
