"use client";
import React from "react";
import { motion } from "framer-motion";
import { GiCheckMark } from "react-icons/gi";
import Image from "next/image";

function ClientNeeds() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[80vh]">
      <div className="col-span-1 flex flex-col items-center justify-center bg-blue-950 text-white py-10">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-4xl font-semibold px-10 ">
            We Are Aware of What Your <br />
            Company Needs
          </h1>
          <p className="p-10 ">
            Flexible technology solutions are essential for expanding
            businesses. We can help you simplify technology and expand to meet
            your demands.
          </p>
        </motion.div>
        <Needs />
      </div>
      <div className="col-span-1">
        {/* <Image
          src={"/web.gif"}
          alt="TinaSoft Nexus"
          height={200}
          width={300}
          className="flex items-center justify-center my-4 w-full h-full "
        /> */}
      </div>
    </div>
  );
}

function Needs() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="grid grid-cols-2 gap-20 px-4"
    >
      <Need name={"Quality"} />
      <Need name={"Reliability"} />
      <Need name={"Consistecy"} />
      <Need name={"Experience"} />
    </motion.div>
  );

  function Need({ name }) {
    return (
      <div className="flex items-center justify-start w-40 mx-auto gap-4">
        <GiCheckMark
          size={34}
          color="#00001C"
          className="w-10 h-10 rounded-full bg-white p-2"
        />
        <p className="text- font-semibold ">{name}</p>
      </div>
    );
  }
}

export default ClientNeeds;
