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
          <span class="hidden md:block max-w-[25%] py-[2px] transition-all duration-500 h-0.5 bg-blue-700  translate-x-[93px] -translate-y-1"></span>
          <span class="hidden md:block max-w-[13%] py-[2px] transition-all duration-500 h-0.5 bg-blue-400  translate-x-[140px] -translate-y-2"></span>
        </h1>
      </div>
      <SliderWrapper className="mt-4">
        <Slider {...settings} className="flex items-center justify-center">
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
          <Testimonial
            message={
              "TinaSoft Nexus delivered exactly what we needed — a sleek, fast, and mobile-friendly website. Their professionalism and communication were excellent throughout the project."
            }
            name={"Rudo M."}
            position={"Marketing Lead"}
            // company={"BrightEdge Interiors"}
          />

          <Testimonial
            message={
              "We’ve worked with several web developers in the past, but this team stands out for their reliability and technical expertise. They go above and beyond to ensure everything runs smoothly."
            }
            name={"Farai Dube"}
            position={"Managing Director"}
            // company={"Dube Freight Services"}
          />

          <Testimonial
            message={
              "From design to deployment, their team was exceptional. They listened to our ideas, gave expert advice, and delivered a powerful website that’s helping us grow online."
            }
            name={"Tariro K."}
            position={"Founder"}
            company={"Tari's Closet"}
          />

          <Testimonial
            message={
              "The support we’ve received post-launch has been fantastic. TinaSoft Nexus truly cares about their clients, and it shows in the work they do. Highly recommended!"
            }
            name={"Jonathan Nkomo"}
            position={"Operations Manager"}
            // company={"ZimSmart Logistics"}
          />
          <Testimonial
            message={
              "  TinaSoft Nexus has been supporting us for the past three years and they have transferred so much knowledge to us such that we are able to resolve some of the day-to-day user issues on our own."
            }
            name={"Tinashe Phiri"}
            position={"Software Developer"}
            company={"TinaSoft NEXUS"}
          />
        </Slider>
      </SliderWrapper>
    </div>
  );
}

export default Testimonials;
