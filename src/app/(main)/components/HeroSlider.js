"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Hero from "./Hero";
import Button from "./Button";
import Image from "next/image";
import SimpleServices from "./SimpleServices";
import HeroOne from "./HeroOne";
import HeroTwo from "./HeroTwo";

export default function HeroSlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 20000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className=""
      >
        <SwiperSlide>
          <Hero />
          <SimpleServices
            image={"/homm.jpg"}
            title={"Software Services"}
            subtitle={
              "   Unlock Your Vision with Our Tailored Software Development Process"
            }
            description={
              "At TinaSoft Nexus, we understand that every project is unique, and so is our approach. Our software development process is meticulously crafted to transform your ideas into powerful, user-centric solutions that drive your business forward. From inception to deployment, we collaborate closely with you to ensure every aspect of your vision is realized"
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroOne />
          <SimpleServices
            image={"/network1.webp"}
            title={"Networking"}
            subtitle={
              "Connect, share, and collaborate effortlessly with our networking solutions."
            }
            description={
              "Our networking solutions simplify connections, allowing you to easily share resources and collaborate across devices. With seamless integration and top-notch security, we help you optimize communication and enhance productivity. Unlock new possibilities with effortless connectivity."
            }
          />
        </SwiperSlide>

        <SwiperSlide>
          <HeroTwo />
          <SimpleServices
            image={"/cctv1.jpeg"}
            title={"CCTV Installation"}
            subtitle={
              "CCTV Installation: Standing Guard Against Evil for Your Safety"
            }
            description={
              "We stand opposed to evil by providing top-tier CCTV installation to safeguard your property. Our advanced security systems offer continuous surveillance, deterring threats and enhancing peace of mind. Trust us to protect what matters most with reliable, round-the-clock monitoring."
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
