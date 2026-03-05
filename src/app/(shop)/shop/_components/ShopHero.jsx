"use client";
import { motion } from "framer-motion";
export default function ShopHero() {
  return (
    <section className="relative w-full h-[320px] flex items-center bg-gradient-to-r from-[#0B1E3F] to-[#0F2C6E]">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className=" md:translate-x-56  z-10 max-w-6xl px-6 text-white"
      >
        <h1 className="text-xl md:text-3xl font-bold">TinaSoft Nexus Shop</h1>
        <p className="mt-3 text-lg text-gray-200">
          Smart Devices. Reliable Tech. Innovative Solutions.
        </p>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute right-0 bottom-0 hidden md:block"
      >
        <img
          src="/smiley-man-with-virtual-reality-headset.png"
          alt="Tech Device"
          className="h-[280px] object-contain"
        />
      </motion.div>
    </section>
  );
}
