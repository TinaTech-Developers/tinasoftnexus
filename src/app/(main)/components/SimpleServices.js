"use effect";
import React from "react";
import Button from "./Button";
import Image from "next/image";
import Typewriter from "typewriter-effect";

function SimpleServices({ image, title, subtitle, description }) {
  return (
    <div className="w-[95%] grid grid-cols-1 md:grid-cols-2 mx-auto -translate-y-14 bg-white shadow-2xl">
      <div className="col-span-1 md:flex m-5">
        <div className="flex flex-col items-start justify-center bg-scroll bg-[url('/blue.jpg')] object-cover w-full md:w-[50%] md:h-96 h-80 ">
          <div className="ml-4 text-white ">
            <h1 className="text-2xl md:text-3xl   font-bold">
              Welcome To
              <br />
              <span className="font-normal text-blue-400"> TinaSoft Nexus</span>
            </h1>
            <p className="py-5 mr-2">
              Your World Of Technology with ICT Specialists
            </p>
          </div>
        </div>
        <Image
          src={image}
          alt=""
          width={300}
          height={400}
          className="h-80 md:h-96 w-full md:w-[50%] object-cover"
        />
      </div>
      <div className="flex flex-col ml-10 items-start justify-center gap-6 pb-10 mx-5">
        <h1 className="text-xl md:text-3xl font-semibold text-blue-900 pt-10">
          {title}
        </h1>
        <h2 className="text-2xl font-normal text-blue-400">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: [subtitle],
            }}
          />
        </h2>
        <p>{description}</p>
        {/* <button
            onClick={""}
            className="bg-blue-950 p-2 text-white rounded-full"
          >
            OUR SERVICES
          </button> */}
        <Button name={"OUR SERVICES"} link={"/services"} />
      </div>
    </div>
  );
}

export default SimpleServices;
