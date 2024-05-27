"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="bg-scroll bg-[url('/heroi.jpg')] object-cover bg-no-repeat w-full h-full md:h-[600px]">
      <div className="bg-scroll bg-blue-500 bg-opacity-50 h-[600px]">
        <div className="px-6 translate-y-80 md:pl-36 ">
          <motion.h1
            initial={{
              x: -100,
              scale: 0,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white"
          >
            Welcome To{" "}
            <span className="text-blue-900 font-normal">
              Tina<span className="font-bold">Soft</span> Nexus
            </span>
          </motion.h1>
        </div>
      </div>
      <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 mx-auto -translate-y-10 bg-white shadow-2xl">
        <div className="col-span-1 md:flex">
          <div className="flex flex-col items-start justify-center bg-scroll bg-[url('/blue.jpg')] object-cover w-full md:w-[50%] md:h-96 h-80 ">
            <div className="ml-4 text-white ">
              <h1 className="text-2xl md:text-3xl   font-bold">
                Welcome To
                <br />
                <span className="font-normal text-blue-400">
                  {" "}
                  TinaSoft Nexus
                </span>
              </h1>
              <p className="py-5 mr-2">
                Your World Of Technology with ICT Specialists
              </p>
            </div>
          </div>
          <Image
            src={"/coding.jpg"}
            alt=""
            width={300}
            height={400}
            className="h-80 md:h-96 w-full md:w-[50%] object-cover"
          />
        </div>
        <div className="flex flex-col ml-10 items-start justify-center gap-6 pb-10 ">
          <h1 className="text-xl md:text-3xl font-semibold text-blue-900 pt-10">
            Software Services
          </h1>
          <h2 className="text-2xl font-normal text-blue-400">
            Unlock Your Vision with Our Tailored Software Development Process
          </h2>
          <p>
            At TinaSoft Nexus, we understand that every project is unique, and
            so is our approach. Our software development process is meticulously
            crafted to transform your ideas into powerful, user-centric
            solutions that drive your business forward.
            <br /> From inception to deployment, we collaborate closely with you
            to ensure every aspect of your vision is realized
          </p>
          <button
            onClick={""}
            className="bg-blue-950 p-2 text-white rounded-full"
          >
            OUR SERVICES
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
