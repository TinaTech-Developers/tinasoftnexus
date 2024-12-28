"use client";
import React from "react";
import { motion } from "framer-motion";

function CorePrinciples() {
  return (
    <>
      <div className="flex flex-col justify-center mb-10 md:my-10 mx-6">
        {/* <motion.h1
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="md:text-3xl text-blue-900 text-2xl capitalize font-semibold text-start"
        >
          Core Values
        </motion.h1> */}
      </div>
      <div className="flex flex-col gap-10  mx-6">
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="p-4 md:h-24 h-full w-full border shadow-2xl bg-blue-950"
        >
          <div class="md:h-16 h-full border-l-4 px-2 md:pl-6 border-blue-500">
            <h1 className="text-xl py-1 text-blue-500">Vision</h1>
            <p className="text-white">
              To be the leading IT solutions provider in Zimbabwe, renowned for
              excellence, reliability, and sustainability, connecting people,
              businesses, and technologies to unlock limitless possibilities.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="p-4 md:h-28 h-full w-full border shadow-2xl bg-blue-950"
        >
          <div class="md:h-[75px] h-full border-l-4 px-2 md:pl-6 border-blue-500">
            <h1 className="text-xl py-1 text-blue-500">Mission</h1>
            <p className="text-white">
              At TinaSoft Nexus, we harness the power of technology to enrich
              lives, drive business success, and bridge the digital divide,
              providing customer-centric IT solutions with integrity, passion,
              and excellence.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="p-4 md:h-28 h-full w-full border shadow-2xl bg-blue-950"
        >
          <div class="md:h-[75px] h-full border-l-4 px-2 md:pl-6 border-blue-500">
            <h1 className="text-xl py-1 text-blue-500">
              Unique Selling Proposition (USP)
            </h1>
            <p className="text-white">
              : TinaSoft Nexus connects Zimbabwe to the global digital
              landscape, delivering tailored IT solutions that drive growth,
              innovation, and social impact.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="p-4 h-full w-full border shadow-2xl bg-blue-950"
        >
          <div class="h-full border-l-4 px-2 md:pl-6 border-blue-500">
            <h1 className="text-xl py-1 text-blue-500">Core Values</h1>
            <h2 className="py-1 pt-4 text-blue-500">Customer Focus</h2>
            <p className="text-white">
              : We prioritize customer satisfaction and feedback
            </p>
            <h2 className="py-1 pt-4 text-blue-500">Innovation</h2>
            <p className="text-white">
              : We embrace cutting-edge technologies and creative
              problem-solving.
            </p>
            <h2 className="py-1 pt-4 text-blue-500">Integrity</h2>
            <p className="text-white">
              : We uphold transparency, ethics, and accountability.
            </p>
            <h2 className="py-1 pt-4 text-blue-500">Collaboration</h2>
            <p className="text-white">: We foster partnerships and teamwork.</p>
            <h2 className="py-1 pt-4 text-blue-500">Sustainability</h2>
            <p className="text-white">
              : We strive for environmentally responsible and socially impactful
              solutions.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default CorePrinciples;
