"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of networking services do you provide?",
    answer:
      "TinaSoft Nexus offers complete networking solutions including LAN/WAN setup, wireless networking, cabling, network security, and cloud connectivity.",
  },
  {
    question: "Do you handle both small and large-scale network installations?",
    answer:
      "Yes, whether it's a small office or a large enterprise setup, we design and implement scalable network architectures to suit your needs.",
  },
  {
    question: "What areas do you serve for networking support?",
    answer:
      "We serve clients across Harare and surrounding areas for on-site services, and offer remote support for clients globally.",
  },
  {
    question: "How do you ensure network security?",
    answer:
      "We implement multi-layered security including firewalls, VLAN segmentation, intrusion prevention systems, and regular vulnerability assessments.",
  },
  {
    question: "Can you upgrade or troubleshoot an existing network?",
    answer:
      "Absolutely. We audit, optimize, and troubleshoot existing networks to enhance performance, security, and reliability.",
  },
  {
    question: "Do you provide 24/7 network monitoring?",
    answer:
      "Yes, our managed network services include 24/7 monitoring to proactively detect issues and prevent downtime.",
  },
  {
    question: "What brands or hardware do you support?",
    answer:
      "We work with leading network equipment like Cisco, Ubiquiti, MikroTik, TP-Link, and more. We can also recommend hardware tailored to your budget.",
  },
  {
    question: "Is internet connectivity part of your service?",
    answer:
      "While we don’t provide ISP services, we can coordinate with your provider to ensure proper router configuration, bandwidth optimization, and redundancy.",
  },
  {
    question: "Do you offer network cabling and infrastructure setup?",
    answer:
      "Yes, we provide structured cabling, server rack setup, patch panels, and labeling for organized, scalable networks.",
  },
  {
    question: "How do I get started with your networking services?",
    answer:
      "You can request a free consultation where we assess your needs and provide a customized proposal with timelines and pricing.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-extrabold text-gray-900 text-center mb-12 tracking-wide"
        >
          Networking Services FAQ
        </motion.h2>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mt-4 space-y-4"
        >
          {faqs.map(({ question, answer }, index) => (
            <div
              key={index}
              className="border border-cyan-400 rounded-lg shadow-sm bg-white"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-cyan-600 rounded-lg"
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
              >
                <span className="text-lg font-semibold text-gray-800">
                  {question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  className="text-blue-950 text-2xl font-bold select-none"
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    id={`faq-panel-${index}`}
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto", marginTop: 8 },
                      collapsed: { opacity: 0, height: 0, marginTop: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    {answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
