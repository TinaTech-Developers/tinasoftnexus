"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What types of CCTV systems do you install?",
    answer:
      "We install analog, HD, and IP-based CCTV systems including dome, bullet, PTZ, and wireless cameras, depending on your needs and budget.",
  },
  {
    question: "Do you provide both residential and commercial installations?",
    answer:
      "Yes, we install CCTV systems for homes, offices, retail stores, warehouses, and industrial facilities with scalable solutions for any environment.",
  },
  {
    question: "Can I view my cameras remotely?",
    answer:
      "Absolutely. We configure remote viewing via mobile apps or desktop access so you can monitor your property anytime, anywhere.",
  },
  {
    question: "Do you offer ongoing CCTV maintenance and support?",
    answer:
      "Yes. We provide maintenance packages that include system health checks, firmware updates, camera cleaning, and troubleshooting support.",
  },
  {
    question: "How do I know which system is best for me?",
    answer:
      "We offer a free on-site survey to assess your property and provide tailored recommendations based on coverage needs, lighting, and budget.",
  },
  {
    question: "What areas do you cover for CCTV installations?",
    answer:
      "We service Harare, Ruwa, and surrounding areas with on-site installations, and we also offer consultations and support remotely.",
  },
  {
    question: "Are your CCTV systems motion-activated or 24/7 recording?",
    answer:
      "Our systems can be configured for continuous recording, motion-triggered recording, or a hybrid mode — based on your security goals.",
  },
  {
    question: "Will I receive notifications or alerts from the system?",
    answer:
      "Yes. We can set up instant push notifications or email alerts for motion detection, tampering, or system disconnection events.",
  },
  {
    question: "Do you supply the cameras and recorders?",
    answer:
      "Yes, we provide high-quality DVRs, NVRs, and CCTV cameras from trusted brands like Hikvision, Dahua, Uniview, and others.",
  },
  {
    question: "How do I get started with your CCTV services?",
    answer:
      "Just contact us to schedule a free site survey. We’ll evaluate your security needs and send you a customized installation quote.",
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
          CCTV Installation FAQ
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
