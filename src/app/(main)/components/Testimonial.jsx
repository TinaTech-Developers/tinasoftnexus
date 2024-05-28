import React from "react";
import Image from "next/image";
function Testimonial() {
  return (
    <div className="flex flex-col md:w-[60%] h-full p-4 md:px-32 items-center justify-center mx-auto gap-4">
      <p>
        TinaSoft Nexus has been supporting us for the past three years and they
        have transferred so much knowledge to us such that we are able to
        resolve some of the day-to-day user issues on our own.
      </p>
      <div className="flex items-center gap-4 justify-center">
        <Image
          src={"/1.jpg"}
          height={50}
          width={50}
          alt="testimonials"
          className="w-14 h-14 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <p className="text-blue-950 uppercase font-semibold">Tinashe Phiri</p>
          <p className="text-gray-500 uppercase text-xs">
            SOFTWARE DEVELOPER - TinaSoft NEXUS
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
