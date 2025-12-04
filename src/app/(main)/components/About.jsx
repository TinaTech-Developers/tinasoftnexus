"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";

function About() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col items-center justify-center ">
        <h1 className=" group text-blue-950  text-center my-10 text-2xl md:text-3xl uppercase ">
          Who Are We?
          <span class="block w-[100%] md:max-w-[55%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2 "></span>
          <span class="hidden md:block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[94px] -translate-y-1"></span>
          <span class="hidden md:block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[140px] -translate-y-2"></span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[95%] mx-auto mb-14 gap-6 md:gap-10 ">
        {/* Left Image Section */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg rounded-xl p-6 flex items-center justify-center shadow-xl shadow-blue-950"
        >
          <Image
            src="/logo.png"
            alt="tinasoftlogo"
            width={260}
            height={200}
            className="object-contain"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="md:col-span-2 bg-white shadow-lg rounded-xl p-6 md:p-10 border border-gray-100 shadow-xl shadow-blue-950"
        >
          <p className="text-gray-700 text-lg md:text-[17px] leading-relaxed mb-8">
            Welcome to{" "}
            <span className="font-semibold text-blue-900">TinaSoft Nexus</span>,
            your trusted partner in digital transformation. With a passion for
            innovation and customer success, we deliver cutting-edge solutions
            in web development, digital marketing, IT support, and more. Our
            team of experts collaborates closely with clients to understand
            their unique needs and goals, harnessing the latest technologies to
            drive business growth.
            <br />
            <br />
            Founded on principles of innovation, collaboration, and excellence,
            we are dedicated to empowering businesses to thrive in the digital
            age. Let us help you take your business to the next level — contact
            us today!
          </p>

          <div className="flex justify-start z-50">
            <Button name="View More" link="/about" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default About;
