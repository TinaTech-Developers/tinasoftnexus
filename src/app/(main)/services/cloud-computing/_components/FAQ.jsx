"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What cloud platforms do you support?",
    answer:
      "We support major cloud providers including AWS, Microsoft Azure, Google Cloud Platform, and DigitalOcean, depending on your business goals.",
  },
  {
    question: "Do you offer both cloud migration and new deployments?",
    answer:
      "Yes. We handle full cloud migrations from on-premise or hybrid systems, as well as greenfield deployments tailored to your needs.",
  },
  {
    question: "Is my data secure in the cloud?",
    answer:
      "Absolutely. We implement strict security protocols including encryption, identity management, network hardening, and compliance monitoring.",
  },
  {
    question: "Can you help optimize cloud costs?",
    answer:
      "Yes. We perform audits and right-sizing to eliminate unnecessary spend and ensure you’re getting the most value from your cloud investment.",
  },
  {
    question: "Do you provide DevOps and CI/CD automation?",
    answer:
      "We set up CI/CD pipelines, infrastructure as code, and automation tools for seamless software delivery and operational efficiency.",
  },
  {
    question: "Will my team receive support or training?",
    answer:
      "We provide documentation, training sessions, and support to help your team manage cloud environments confidently post-deployment.",
  },
  {
    question: "Can I integrate my legacy systems with the cloud?",
    answer:
      "Yes. We design hybrid cloud architectures that allow integration with legacy systems while modernizing infrastructure over time.",
  },
  {
    question: "How long does a typical cloud project take?",
    answer:
      "Timelines vary by scope, but smaller projects can be completed in days, while enterprise-level transformations may take several weeks.",
  },
  {
    question: "What’s included in your cloud consultation?",
    answer:
      "We assess your current systems, discuss your objectives, and provide a strategic roadmap, cost estimates, and recommended services.",
  },
  {
    question: "How do I get started with your cloud services?",
    answer:
      "Simply contact us to book a free cloud consultation. We'll guide you through everything from planning to full-scale deployment.",
  },
];

const CloudFAQ = () => {
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
          Cloud Computing FAQ
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
              className="border border-blue-400 rounded-lg shadow-sm bg-white"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg"
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

export default CloudFAQ;
