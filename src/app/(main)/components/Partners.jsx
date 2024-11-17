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
    <div className=" hidden md:block my-4 mx-10 mt-20 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" group text-blue-950  text-center my-10 text-3xl uppercase ">
          Our Partners
          <span class="block w-[100%] md:max-w-[55%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2 "></span>
          <span class="hidden md:block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[130px] -translate-y-1"></span>
          <span class="hidden md:block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[195px] -translate-y-2"></span>
        </h1>
      </div>
      <Slider {...settings}>
        <div className="bg-no-repeat flex justify-center items-center h-32 w-auto">
          <Image
            src="https://www.beveridges.co.nz/wp-content/uploads/2022/05/AJAX_hub_intruder_alarms_leicester.png"
            alt=""
            height={200}
            width={300}
            className="w-28 h-16 object-cover mx-auto"
          />
        </div>

        <div className="items-center justify-center">
          <h3 className=" text-center text-4xl font-bold">PRAGRAGO</h3>
        </div>

        <div className="items-center justify-center">
          <h3 className=" text-center text-4xl font-bold">pmh</h3>
        </div>
        <div className="items-center justify-center">
          <h3 className=" text-center text-4xl font-bold">SOLOR MOTORS</h3>
        </div>
        <div className="items-center justify-center">
          <h3 className=" text-center text-4xl font-bold">JAC AUTO PRO</h3>
        </div>
        <div className="items-center justify-center">
          <h3 className=" text-center text-2xl font-bold">
            STUDENTS FIRST COLLEGE
          </h3>
        </div>
      </Slider>
    </div>
  );
}

export default Partners;
