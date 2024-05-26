"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdDeveloperMode } from "react-icons/md";

function Services() {
  return (
    <div className="bg-blue-100 py-10  h-full">
      <h1 className="md:mt-[80vh] text-center my-10 text-3xl uppercase ">
        our services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3  mx-auto gap-4">
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
}

function Service() {
  let sign = "</>";
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        x: -100,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: "blue",
        color: "white",
      }}
      transition={{ duration: 0.9 }}
      className=" w-80 h-full md:w-96 border  bg-transparent rounded-lg my-10 mx-auto text-gray-600 p-5 "
    >
      <div className="relative">
        <div className="flex items-center justify-center w-32 h-10 bg-blue-500 opacity-50 absolute text-white ">
          TinaSoft
        </div>
        <MdDeveloperMode size={90} color="gray" className="mx-auto py-4" />
      </div>
      <h1 className="text-xl font-semibold py-4">Software Development</h1>
      <p>
        At TinaSoft Nexus, we specialize in delivering tailored software
        solutions designed to meet your unique business needs. With our Software
        Development as a Service (SDaaS), you can harness the full potential of
        technology to drive innovation, efficiency, and growth.
      </p>
      <button className="p-2 px-4 bg-blue-950 my-4 rounded-md">
        More Info
      </button>
      {/* <div className="items-end translate-x-40">
        <div className="flex items-center justify-center w-32 h-10 bg-blue-500 opacity-50 absolute ">
          NEXUS
        </div>
      </div> */}
    </motion.div>
  );
}

export default Services;
