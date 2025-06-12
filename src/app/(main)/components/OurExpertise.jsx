"use client";
import { motion } from "framer-motion";
import React from "react";
import { FaNetworkWired } from "react-icons/fa6";
import { GrCloudComputer, GrSystem } from "react-icons/gr";
import { IoHardwareChipSharp } from "react-icons/io5";
import Link from "next/link";
function OurExpertise() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className=" my-10">
        <div className="flex flex-col items-center justify-center">
          <p className="uppercase font-semibold text-sm text-blue-400">
            how we work
          </p>
          <h1 className=" group text-blue-950 text-center  text-2xl md:text-3xl uppercase ">
            Our Expertise
            <span class="block w-[100%] md:max-w-[55%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2  "></span>
            <span class="hidden md:block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[74px] -translate-y-1 md:ml-7"></span>
            <span class="hidden md:block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[110px] -translate-y-2 md:ml-10"></span>
          </h1>
        </div>
      </div>
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 mb-10 gap-5 mx-auto">
          <OurExpertiseCard
            icon={<GrSystem size={55} />}
            heading={"Custom Software Development"}
            link={"/services/software"}
          />
          <OurExpertiseCard
            icon={<GrCloudComputer size={55} />}
            heading={"Cloud Computing Solutions"}
            link={"/services/cloud-computing"}
          />
          <OurExpertiseCard
            heading={"Networking Infrastructure"}
            icon={<FaNetworkWired size={55} />}
            link={"/services/networking"}
          />
          <OurExpertiseCard
            icon={<IoHardwareChipSharp size={55} />}
            heading={"Hardware Maintenance & Support"}
            link={"/services/hardware-repair"}
          />
        </div>
      </div>
    </div>
  );
}

const OurExpertiseCard = ({ icon, heading, link }) => {
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
      className="col-span-1 mx-4 w-[90%] bg-blue-100 h-40  items-center justify-center text-black hover:bg-blue-950 hover:text-white rounded-lg p-2"
    >
      <Link
        href={link}
        className="flex flex-col items-center justify-center h-full"
      >
        {icon}
        <h1 className="text-xl text-center font-bold my-4"> {heading}</h1>
      </Link>
    </motion.div>
  );
};
export default OurExpertise;
