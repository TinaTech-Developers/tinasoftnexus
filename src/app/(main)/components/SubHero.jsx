"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function SubHero({ image, text, heading }) {
  return (
    <div className="bg-scroll bg-[url('/  ')] object-cover bg-no-repeat w-full h-[550px] md:h-[550px] ">
      <div className="bg-scroll bg-blue-500 bg-opacity-5 h-[550px]">
        <Image
          src={image}
          alt=""
          height={300}
          width={1000}
          className="absolute w-full h-[550px] md:h-[550px] object-cover"
        />
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
            {heading}
            <span className="text-lg font-normal mt-32">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  strings: [text],
                }}
              />
            </span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
}

export default SubHero;
