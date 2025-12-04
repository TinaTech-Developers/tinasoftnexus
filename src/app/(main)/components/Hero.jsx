"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-cover bg-center bg-no-repeat bg-[url('/homm.jpg')] w-full h-screen md:h-[600px]">
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
            <span className="text-blue-400 font-normal">
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
          <div className="mt-4">
            <Link
              className={`text-gray-400 text- md:text- py-2 relative md:px-4 px-2 border  bg-transparent rounded-lg transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 `}
              href={"/services/software"}
            >
              Speak To Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
