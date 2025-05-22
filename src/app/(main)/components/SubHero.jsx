"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function SubHero({ image, text, heading }) {
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

        {/* Text Content */}
        <div className="relative flex flex-col items-center justify-center z-20 px-6 translate-y-72 ">
          <motion.h1
            initial={{ x: -100, scale: 0, opacity: 0 }}
            whileInView={{ x: 0, scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold text-white text-center"
          >
            {heading}
            <span className="text-lg font-normal mt-32 text-white">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [text],
                }}
                className="my-5"
              />
            </span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default SubHero;
