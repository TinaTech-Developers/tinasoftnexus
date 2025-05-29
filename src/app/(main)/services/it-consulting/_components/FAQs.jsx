"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What does your ICT consulting cover?",
    answer:
      "We provide expert guidance on IT strategy, digital transformation, infrastructure planning, cybersecurity, cloud migration, and more.",
  },
  {
    question: "Do you assist with software and system integration?",
    answer:
      "Yes, we analyze your current systems and help integrate new software solutions that align with your business objectives.",
  },
  {
    question: "Can you help us move to the cloud?",
    answer:
      "Absolutely. We assess your current environment, recommend the right cloud platform, and manage the entire migration process securely.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve a wide range of sectors including finance, education, healthcare, retail, logistics, and government agencies.",
  },
  {
    question: "Do you offer IT audits and risk assessments?",
    answer:
      "Yes, we perform detailed IT audits to identify risks, inefficiencies, and improvement opportunities in your IT environment.",
  },
  {
    question: "How do you tailor solutions for each business?",
    answer:
      "We conduct consultations to understand your specific challenges, goals, and constraints, and then develop a custom roadmap.",
  },
  {
    question: "Can you help with IT budgeting and planning?",
    answer:
      "Yes, we work with your leadership team to align IT investments with strategic goals and ensure efficient resource allocation.",
  },
  {
    question: "Do you provide ongoing support after consultation?",
    answer:
      "Yes, we offer post-consultation services including implementation assistance, project oversight, and continuous support.",
  },
  {
    question: "How experienced is your consulting team?",
    answer:
      "Our consultants have 10+ years of experience across various industries and hold certifications in cloud, cybersecurity, and IT management.",
  },
  {
    question: "How do I get started with your ICT consulting?",
    answer:
      "You can request a free initial consultation where we evaluate your needs and present a strategic action plan.",
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
          ICT Consulting Services FAQ
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
