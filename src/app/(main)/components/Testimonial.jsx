import React from "react";
import Image from "next/image";
function Testimonial({ message, name, position, company }) {
  return (
    <div className="flex flex-col md:w-[60%] h-full p-4 md:px-32 items-center justify-center mx-auto gap-4">
      <p>{message}</p>
      <div className="flex items-center gap-4 justify-center">
        <Image
          src={"/person.png"}
          height={50}
          width={50}
          alt="testimonials"
          className="w-14 h-14 rounded-full"
        />
        <div className="flex flex-col gap-1">
          <p className="text-blue-950 uppercase font-semibold">{name}</p>
          <p className="text-gray-500 uppercase text-xs">
            {position} - {company}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
