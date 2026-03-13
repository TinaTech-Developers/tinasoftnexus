"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  {
    title: "Desktop Dominance Awaits!",
    description:
      "Upgrade your performance with TinaSoft Nexus premium desktop solutions.",
    image: "/desktop.png",
  },
  {
    title: "Powerful Gaming Laptops",
    description: "Experience ultra-speed and next-level gaming performance.",
    image: "/laptop.png",
  },
  {
    title: "Smart Office Printers",
    description:
      "Reliable and efficient printing solutions for modern offices.",
    image: "/printer.png",
  },
];

export default function FeaturedBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const product = products[index];

  return (
    <section className="py-16 bg-gray-50">
      <div className="w-80 md:max-w-6xl mx-auto px-4 md:px-6">
        <div className="relative bg-gradient-to-r from-[#E6F7FA] to-[#D9ECF2] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center justify-between w-full"
            >
              {/* Text */}
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-[#0B1E3F]">
                  {product.title}
                </h2>

                <p className="mt-4 text-gray-600 font-thin">
                  {product.description}
                </p>

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
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
