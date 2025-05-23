"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function ServicesSubHero({ image, desc, directory }) {
  return (
    <div className="bg-scroll object-cover bg-no-repeat w-full h-[550px] md:h-[550px]">
      <div className="relative h-[550px]">
        {/* Background Image */}
        <Image
          src={image}
          alt=""
          priority
          quality={100}
          fill
          className="absolute w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-60 z-10" />

        <div className="px-6 translate-y-80 md:pl-36 z-20 relative">
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
            Our Services
            <div className="text-white md:text-xl my-2 font-semibold">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [desc],
                }}
              />
            </div>
          </motion.h1>
          <p1 className="text-white  mt-2">{directory}</p1>
        </div>
      </div>
    </div>
  );
}

export default ServicesSubHero;
