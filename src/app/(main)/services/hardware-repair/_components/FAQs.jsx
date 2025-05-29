"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of hardware do you repair?",
    answer:
      "We repair desktops, laptops, printers, routers, and other IT hardware. This includes screen replacements, power issues, overheating, and hardware diagnostics.",
  },
  {
    question: "Do you offer on-site hardware maintenance?",
    answer:
      "Yes, we provide both on-site and in-house maintenance services depending on your location and the urgency of the issue.",
  },
  {
    question: "Can I purchase hardware directly from TinaSoft Nexus?",
    answer:
      "Absolutely. We sell reliable desktops, laptops, networking equipment, and accessories at competitive prices, suited for both home and office use.",
  },
  {
    question: "Do you offer warranty on repairs and sales?",
    answer:
      "Yes, all repairs and hardware sales come with a limited warranty. We'll make sure you're covered in case of recurring issues.",
  },
  {
    question: "Can you help with upgrades instead of full replacements?",
    answer:
      "Yes. We offer component upgrades like RAM, SSDs, GPUs, and more to boost performance without full device replacement.",
  },
  {
    question: "What is your typical repair turnaround time?",
    answer:
      "Most common repairs are completed within 1–3 business days. Urgent repairs can be expedited depending on parts availability.",
  },
  {
    question: "How do I get a quote for hardware service?",
    answer:
      "Contact us with details about your device and issue, and we'll provide a free estimate based on diagnostics.",
  },
  {
    question: "Do you handle hardware for businesses and institutions?",
    answer:
      "Yes, we support SMEs, schools, and organizations with bulk maintenance, replacements, and upgrade contracts.",
  },
  {
    question: "Are your technicians certified?",
    answer:
      "Yes, our hardware team includes certified technicians with years of experience handling consumer and enterprise-grade equipment.",
  },
  {
    question: "Do you offer maintenance contracts?",
    answer:
      "We do. Our maintenance packages include regular checkups, cleaning, updates, and fast repairs to prevent costly downtime.",
  },
];

const HardwareFAQ = () => {
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
          Hardware Maintenance & Sales FAQ
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

export default HardwareFAQ;
