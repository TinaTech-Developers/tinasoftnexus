"use client";
import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import Image from "next/image";

function About() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-col items-center justify-center ">
        <h1 className=" group text-blue-950  text-center my-10 text-2xl md:text-3xl uppercase ">
          Who Are We?
          <span class="block w-[100%] md:max-w-[55%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2 "></span>
          <span class="hidden md:block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[130px] -translate-y-1"></span>
          <span class="hidden md:block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[195px] -translate-y-2"></span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 w-[95%] mx-auto mb-10">
        <div className="col-span-1 bg-blue-950 text-white h-80 flex flex-col items-center justify-center p-4">
          <motion.div
            initial={{ x: 0, scale: 0 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{
              duration: 0.8,
            }}
            className="w-full h-full flex items-center justify-center  border-2 border-white"
          >
            <Image
              src={"/logo1.png"}
              alt="tinasoftlogo"
              height={100}
              width={200}
              className=" w-full h-full p-4 md:p-10 object-contain "
            />
          </motion.div>
        </div>
        <div className="col-span-1 md:col-span-2 p-4 md:p-10">
          <h1 className="pb-10">
            Welcome to TinaSoft Nexus, your trusted partner in digital
            transformation. With a passion for innovation and customer success,
            we deliver cutting-edge solutions in web development, digital
            marketing, IT support, and more. Our team of experts collaborates
            closely with clients to understand their unique needs and goals,
            harnessing the latest technologies to drive business growth. Founded
            on principles of innovation, collaboration, and excellence, we are
            dedicated to empowering businesses to thrive in the digital age. Let
            us help you take your business to the next level - contact us today!
          </h1>
          <div className="w-20 md:w-[105px]">
            <Button name={"View More"} link={"/"} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
