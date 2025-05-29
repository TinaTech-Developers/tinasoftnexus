"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "At TinaSoft Nexus, we proudly serve clients locally and globally. Whether you're based here in Ruwa, Harare or operating internationally, we deliver high-quality software solutions tailored to your business needs.",
  },
  {
    question: "Are your services licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured to ensure your peace of mind on every project.",
  },
  {
    question: "Do you offer free consultations?",
    answer:
      "Absolutely. We provide free consultations to understand your project and recommend the best approach before any commitment.",
  },
  {
    question: "How long does custom software development take?",
    answer:
      "Project timelines vary depending on complexity. A simple app might take 2–4 weeks, while larger systems may take 8–12 weeks or more.",
  },
  {
    question: "Will I be involved throughout the development process?",
    answer:
      "Yes! We involve clients in key milestones and provide transparent communication throughout the entire development cycle.",
  },
  {
    question: "Do you build cross-platform mobile apps?",
    answer:
      "Yes, we develop both native and cross-platform apps for iOS and Android using technologies like Flutter, React Native, and more.",
  },
  {
    question: "Is SEO considered in software and web development?",
    answer:
      "Yes. For any web-based software, we follow best SEO practices including fast loading, semantic HTML, and metadata management.",
  },
  {
    question: "What kind of post-launch support do you offer?",
    answer:
      "We offer maintenance plans that include updates, backups, monitoring, and technical support to keep your software running smoothly.",
  },
  {
    question: "Can you integrate third-party APIs?",
    answer:
      "Absolutely. We specialize in creating seamless integrations with payment gateways, CRM systems, and other APIs.",
  },
  {
    question: "What if I already have a system that needs upgrades?",
    answer:
      "We can audit your current system and modernize it with updated architecture, UI/UX, and performance improvements.",
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
          Frequently Asked Questions
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
