"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdDeveloperMode } from "react-icons/md";
import Button from "./Button";

function Services() {
  return (
    <div className="bg-blue-100 py-10  h-full">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" group md:mt-[80vh] text-center my-10 text-3xl uppercase ">
          Digital Solutions
          <span class="block max-w-[55%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2 "></span>
          <span class="block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[175px] -translate-y-1"></span>
          <span class="block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[260px] -translate-y-2"></span>
        </h1>
      </div>
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
        // scale: 1.1,
        backgroundColor: "#00001C",
        color: "white",
      }}
      transition={{ duration: 0.9 }}
      className="flex flex-col w-80 h-full md:w-96 border  bg-transparent rounded-lg my-5 mx-auto text-gray-600 p-5 "
    >
      <div className="relative">
        <div className="flex items-center justify-center w-32 h-10 bg-blue-500 opacity-50 absolute text-white ">
          TinaSoft
        </div>
        <MdDeveloperMode size={90} color="gray" className="mx-auto py-4" />
      </div>
      <h1 className="text-xl font-semibold py-4 text-center">
        Software Development
      </h1>
      <p className="">
        At TinaSoft Nexus, we specialize in delivering tailored software
        solutions designed to meet your unique business needs. With our Software
        Development as a Service (SDaaS), you can harness the full potential of
        technology to drive innovation, efficiency, and growth.
      </p>
      <div className="w-20 md:w-[98px] mt-4 z-10">
        <Button name={"More Info"} link={"/"} />
      </div>
    </motion.div>
  );
}

export default Services;
