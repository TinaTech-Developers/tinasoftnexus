"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
const faqs = [
  {
    question: "What areas do you serve?",
    answer:
      "At TinaSoft Nexus, we proudly serve clients locally and globally. Whether you're based here in Ruwa, Harare or operating internationally, we deliver high-quality website development and reliable hosting solutions tailored to your business needs.",
  },
  {
    question: "Are your services licensed and insured?",
    answer:
      "Yes, we are fully licensed and insured to ensure your peace of mind on every project.",
  },
  {
    question: "Do you offer free estimates?",
    answer:
      "Absolutely. At TinaSoft Nexus, we offer free consultations and detailed estimates for all potential clients. Whether you're starting a new website, need hosting services, or are looking to upgrade your current online presence, our team is happy to discuss your needs, answer your questions, and provide a clear, no-obligation quote to help you make an informed decision.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Timelines vary based on the project size, but most websites take between 2 to 6 weeks from start to launch.",
  },
  {
    question: "Can I update my website myself after it’s built?",
    answer:
      "Yes! We build user-friendly websites and can provide training so you can easily manage updates and content.",
  },
  {
    question: "Do you design mobile-friendly websites?",
    answer:
      "Absolutely. All our websites are fully responsive and optimized for smartphones, tablets, and desktops.",
  },
  {
    question: "Do you redesign existing websites?",
    answer:
      "Yes, we can modernize and upgrade your current site while retaining your branding and essential content.",
  },
  {
    question: "Will my website be visible on Google?",
    answer:
      "Yes. We follow SEO best practices during development to ensure your site is search engine-friendly from the start.",
  },
  {
    question: "Do you offer hosting services?",
    answer:
      "Yes. TinaSoft Nexus provides reliable, secure web hosting with various plans to suit your business needs.",
  },
  {
    question: "What’s included in your hosting package?",
    answer:
      "Our packages typically include domain setup, SSL certificates, email accounts, backups, and technical support.",
  },
  {
    question: "Do you provide website maintenance after launch?",
    answer:
      "Yes, we offer ongoing support, updates, and maintenance to keep your site secure and running smoothly.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Costs depend on the features and complexity, but we offer affordable packages for small businesses and startups. Free estimates are available.",
  },
  {
    question: "Can you help with branding or logo design?",
    answer:
      "Yes, we offer complete branding solutions, including logo design, color schemes, and brand identity packages.",
  },
  {
    question: "Do you offer e-commerce website development?",
    answer:
      "Absolutely. We build secure, scalable online stores with full payment integration and inventory management.",
  },
  {
    question: "Where are you located, and do you work with clients remotely?",
    answer:
      "We’re based in Ruwa, Harare, but we work with clients globally via online communication and collaboration tools.",
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
              className="border border-cyan-400  rounded-lg shadow-sm"
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
