"use client";

import { motion } from "framer-motion";

export default function SlideItem({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="flex flex-col md:flex-row items-center justify-between w-full"
    >
      {/* Text */}
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-[#0B1E3F]">{product.title}</h2>

        <p className="mt-4 text-gray-600">{product.description}</p>

        <button className="mt-6 px-6 py-3 bg-[#00B3C6] text-white rounded-xl shadow hover:bg-[#0099aa] transition">
          Shop Now
        </button>
      </div>

      {/* Image */}
      <div className="mt-10 md:mt-0">
        <motion.img
          src={product.image}
          alt={product.title}
          className="h-[220px] object-contain drop-shadow-xl"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
}
