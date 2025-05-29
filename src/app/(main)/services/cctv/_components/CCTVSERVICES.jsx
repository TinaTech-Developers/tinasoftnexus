"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "HD & IP Camera Setup",
    desc: "Crystal-clear video quality with scalable IP camera systems that support advanced analytics.",
    icon: "📷",
  },
  {
    title: "Remote Monitoring",
    desc: "Access live footage from anywhere with our remote-viewing setup on mobile and web platforms.",
    icon: "📱",
  },
  {
    title: "Maintenance & Support",
    desc: "Reliable after-installation support and maintenance packages to keep your system optimized.",
    icon: "🛠️",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
};

export default function CCTVServices() {
  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        {/* <motion.h2
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-extrabold text-gray-900"
        >
          Our CCTV Solutions
        </motion.h2> */}
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(({ title, desc, icon }, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
            }}
            className="relative bg-white rounded-xl p-8 shadow-md cursor-pointer flex flex-col items-start"
          >
            <div className="text-5xl mb-6 text-blue-600">{icon}</div>
            <h4 className="text-xl font-semibold mb-3 text-gray-900">
              {title}
            </h4>
            <p className="text-gray-600">{desc}</p>
            <div className="absolute top-4 right-4 w-14 h-14 bg-gradient-to-tr from-blue-300 to-blue-600 rounded-full opacity-20 -z-10"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
