"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdDeveloperMode } from "react-icons/md";
import Button from "./Button";
import { FaNetworkWired } from "react-icons/fa6";
import Image from "next/image";

function Services() {
  return (
    <div className="bg-blue-100 py-10 md:pb-20  h-full">
      {/* <div className="flex flex-col items-center justify-center ">
        <h1 className=" group text-blue-950 text-center my-5 text-2xl md:text-3xl uppercase ">
          Digital Solutions
          <span class="block w-[100%] md:max-w-[55%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2 "></span>
          <span class="hidden md:block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[130px] -translate-y-1"></span>
          <span class="hidden md:block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[195px] -translate-y-2"></span>
        </h1>
      </div> */}
      <div className="grid grid-cols-1 md:grid-cols-3  mx-auto gap-4">
        <Service
          image={"/coding.jpg"}
          heading={"Custom  Software Development"}
          link={"/services/software"}
        />
        <Service
          image={"/mobil.png"}
          heading={"Mobile App Development"}
          link={"/services/software"}
        />
        <Service image={"consulting.jpg"} heading={"IT Consulting"} link={""} />
        <Service
          image={"/cctv1.jpeg"}
          heading={"CCTV Installation"}
          link={"/services/cctv"}
        />
        <Service image={"network1.webp"} heading={"Networking"} link={""} />
        <Service
          image={"hard.jpg"}
          heading={"Hardware Maintenance"}
          link={"/services/hardware-repair"}
        />
      </div>
    </div>
  );
}

function Service({ image, heading, link }) {
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
      className="flex flex-col w-80 h-full md:w-full bg-white shadow-2xl  bg-transparent rounded-lg my-5 text-gray-600 p-5 items-center mx-auto "
    >
      {/* <div className="flex items-center justify-center w-32 h-10 bg-blue-900 opacity-75 absolute text-white font-semibold ">
        TinaSoft
        <span className="text-xs text-blue-300 translate-x-2 mt-2">
          <br />
          NEXUS
        </span>
      </div> */}
      <div className=" tile relative overflow-hidden group">
        {/* <div> {icon}</div> */}
        <Image
          src={image}
          alt=""
          height={30}
          width={40}
          className="w-80 md:w-96 h-72 object-cover transition-transform duration-300 transform group-hover:scale-125"
        />
      </div>
      <h1 className="text-xl font-semibold pt-4 ">{heading}</h1>

      <div className="w-20 md:w-[84px] mt-4 z-10 px-">
        <Button name={"More Info"} link={link} />
      </div>
    </motion.div>
  );
}

export default Services;
