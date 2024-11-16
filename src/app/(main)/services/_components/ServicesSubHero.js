"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function ServicesSubHero({ image, desc, directory }) {
  return (
    <div className="bg-scroll bg-[url('/  ')] object-cover bg-no-repeat w-full h-full md:h-[500px] ">
      <div className="bg-scroll bg-blue-500 bg-opacity-5 h-[500px]">
        <Image
          src={image}
          alt=""
          height={300}
          width={600}
          className="absolute w-full h-full md:h-[500px] object-cover"
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
