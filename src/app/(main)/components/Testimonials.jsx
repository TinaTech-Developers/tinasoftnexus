"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Testimonial from "./Testimonial";
import SliderWrapper from "./_SlickSiderStyle";
function Testimonials() {
  // var settings = {
  //   infinite: true,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
  //   speed: 1000,
  //   autoplaySpeed: 2000,
  //   cssEase: "linear",
  //   dots: true,
  // };

  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    speed: 1000,
    arrows: false,
    adaptiveHeight: true,
    appendDots: (dots) => <ul>{dots}</ul>,
    customPaging: (i) => (
      <div className="ft-slick__dots--custom">
        <div className="loading" />
      </div>
    ),
  };
  return (
    <div className="  my-4 mx-10 ">
      <div className="flex flex-col items-center justify-center">
        <h1 className=" group text-blue-950 text-center mt-10 text-2xl md:text-3xl uppercase ">
          TESTIMONIALS
          <span class="block w-[100%] md:max-w-[55%] py-[2px] transition-all duration-500 h-0.5 bg-blue-950 mt-2 "></span>
          <span class="hidden md:block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[90px] -translate-y-1"></span>
          <span class="hidden md:block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[140px] -translate-y-2"></span>
        </h1>
      </div>
      <SliderWrapper className="mt-4">
        <Slider {...settings} className="flex items-center justify-center">
          <Testimonial
            message={
              "  TinaSoft Nexus has been supporting us for the past three years and they have transferred so much knowledge to us such that we are able to resolve some of the day-to-day user issues on our own."
            }
            name={"Tinashe Phiri"}
            position={"Software Developer"}
            company={"TinaSoft NEXUS"}
          />
          <Testimonial
            message={"Great job done on our website Jac auto Pro"}
            name={"Arnold Kutesera"}
            position={"Mechanic"}
            company={"Jac Auto Pro"}
          />
          <Testimonial
            message={
              "Working with this ICT company has been a great experience. Their team is knowledgeable, responsive, and helped us streamline our IT processes. We highly recommend them"
            }
            name={"Lucky Yasini"}
            position={"Biker"}
            company={"Lucky Bikerz"}
          />
          <Testimonial />
          <Testimonial />
        </Slider>
      </SliderWrapper>
    </div>
  );
}

export default Testimonials;
