"use client";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";

export default function HeroIntro() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/herointro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:pl-36 text-white">
        <motion.h1
          initial={{ x: -100, opacity: 0, scale: 0.8 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold"
        >
          Welcome To{" "}
          <span className="text-blue-400 font-normal">
            Tina<span className="font-bold">Soft</span> Nexus
          </span>
        </motion.h1>

        <div className="mt-3 text-lg md:text-2xl">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [
                "Website Development",
                "Basic Website Design",
                "E-commerce Solutions",
                "School Portal Development",
                "Doctor Appointment Systems",
                "Website Hosting",
                "Shopify Development",
              ],
            }}
          />
        </div>

        <div className="mt-6">
          <Link
            href="/services/web-development"
            className="relative inline-block px-5 py-3 font-medium text-gray-200 border border-gray-300 rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white"
          >
            Speak To Sales
          </Link>
        </div>
      </div>
    </div>
  );
}
