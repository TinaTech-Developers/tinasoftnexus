"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function Partners() {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className=" hidden md:block my  ">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" group text-blue-950  text-center my-10 text-3xl uppercase ">
          Our Clients
          <span class="block w-[100%] md:max-w-[45%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2 "></span>
          <span class="hidden md:block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[80px] -translate-y-1"></span>
          <span class="hidden md:block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[128px] -translate-y-2"></span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mx-auto">
        <div className="col-span-1 bg-blue-950 h-52 flex flex-col items-center justify-center text-xl text-white border-4 border-blue-400">
          <p className="text-center">
            We are solution-oriented and committed to solving the business
            issues of our clients.
          </p>
        </div>
        <div className="col-span-3 mx-10 pt-14">
          <Slider {...settings}>
            <div className="bg-no-repeat flex justify-center items-center h-32 w-auto">
              <Image
                src="/pmh-logo.png"
                alt=""
                height={200}
                width={300}
                className="w-28 h-16 object-contain mx-auto"
              />
            </div>
            <div className="bg-no-repeat flex justify-center items-center h-32 w-auto">
              <Image
                src="/jac.png"
                alt=""
                height={200}
                width={300}
                className="w-28 h-16 object-contain mx-auto"
              />
            </div>

            <div className="items-center justify-center">
              <h3 className=" text-center text-4xl font-bold">PRAGRAGO</h3>
            </div>

            <div className="items-center justify-center">
              <h3 className=" text-center text-2xl font-bold">
                STUDENTS FIRST COLLEGE
              </h3>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Partners;
