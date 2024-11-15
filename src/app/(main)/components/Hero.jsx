"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div className="bg-scroll bg-[url('/coding.jpg')] object-cover bg-no-repeat w-full h-full md:h-[600px] ">
      <div className="bg-scroll bg-blue-500 bg-opacity-5 h-[600px]">
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
          <div className="text-white md:text-xl">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Web & Sofware Solutions"],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
