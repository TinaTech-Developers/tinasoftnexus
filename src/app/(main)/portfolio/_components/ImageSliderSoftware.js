"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; // Import autoplay styles
import styled from "@emotion/styled";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Slide = styled.div`
  height: 200px; /* Adjust height as needed */
  border: 1px solid #ccc; /* Example border */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* Example background */
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px; /* Space between pagination bullets */
  margin-top: 10px; /* Space above pagination */
`;

const StyledSwiper = styled(Swiper)`
  /* Ensure the Swiper has room for the pagination */
  padding-bottom: 40px; /* Adjust based on the pagination height */
`;

function ImageSliderSoftware() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <StyledSwiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module here
        spaceBetween={50}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        autoplay={{
          delay: 3000, // Auto slide every 3 seconds
          disableOnInteraction: false, // Allow auto-slide even when interacting
        }}
        loop={true} // Explicitly enable loop
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        <SwiperSlide>
          <SoftwareCard
            image={"/soft.png"}
            // link={"https:www.jacautopro.co.zw"}
            company={""}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SoftwareCard
            image={"/soft1.png"}
            // link={"https:www.jacautopro.co.zw"}
            company={"TinaSoft NEXUS"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <SoftwareCard image={"/motsi.png"} />
        </SwiperSlide>
        <SwiperSlide>
          <SoftwareCard image={"/motsi1.png"} />
        </SwiperSlide>
        {/* <SwiperSlide>
          <SoftwareCard image={"/tinash.png"} />
        </SwiperSlide> */}
        <SwiperSlide>
          <SoftwareCard
            image={"/tina.png"}
            // link={"https:www.sitawainvestments.co.zw"}
            company={" TinaSoft E-commerce"}
          />
        </SwiperSlide>
      </StyledSwiper>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto mt-10">
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold mt-4">
              {" "}
              Bespoke Software Development
            </h1>
            <hr className="w-[30%]  bg-blue-600 p-[2px] mt-1" />
          </div>

          <p className="my-4">
            We specialize in creating custom software solutions tailored to your
            business, from CRM systems to complex enterprise applications. Our
            team delivers scalable, user-friendly software that enhances
            efficiency and integrates seamlessly with your existing systems,
            ensuring long-term growth and success.
          </p>
          <Link
            className={`text-xs md:text-sm py-2 relative md:px-4 px-2 border  bg-transparent text-blue-950 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100`}
            href={"/services/software"}
          >
            Explore Our Software Services
          </Link>
        </div>
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold mt-4">
              API & Integration Services
            </h1>
            <hr className="w-[30%]  bg-blue-600 p-[2px] mt-1" />
          </div>

          <p className="my-4">
            Developing robust APIs to enable seamless integrations between
            systems and third-party services, improving workflow automation.
          </p>
          <Link
            className={`text-xs md:text-sm py-2 relative md:px-4 px-2 border  bg-transparent text-blue-950 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100`}
            href={"/services/software"}
          >
            Explore Our APIs
          </Link>
        </div>
        <div className="col-span-1 md:h-65 h-full border p-6 shadow-2xl">
          <div className="w-full">
            <h1 className="text-xl font-semibold mt-4">
              {" "}
              Mobile Apps for Business Growth
            </h1>
            <hr className="w-[30%]  bg-blue-600 p-[2px] mt-1" />
          </div>

          <p className="my-4">
            We develop high-performance mobile apps for iOS and Android that
            connect your business to your customers. From productivity tools to
            on-the-go shopping experiences, our mobile solutions are designed
            for success.
          </p>
          <Link
            className={`text-xs md:text-sm py-2 relative md:px-4 px-2 border  bg-transparent text-blue-950 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-blue-950 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100`}
            href={"/services/software"}
          >
            Explore Our Mobile Solutions
          </Link>
        </div>
      </div>
    </>
  );
}

function SoftwareCard({ image, company }) {
  return (
    <motion.div
      initial={{
        x: 0,
        scale: 0,
        opacity: 0,
      }}
      whileInView={{
        x: 0,
        scale: 1,
        opacity: 1,
      }}
      transition={{ duration: 0.8 }}
      className="w-80 h-80 md:h-64 md:w-96 border relative group"
    >
      <Image
        src={image}
        alt="Website Image"
        height={100}
        width={200}
        className="w-80 h-72 md:h-56 md:w-96 object-cover"
      />

      <Link
        href={"/services/software"}
        target="_blank"
        // rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-blue-800 text-lg font-semibold transition-opacity duration-300"
      >
        Explore
      </Link>
      <h1 className="text-center font-semibold hover:z-20 hover:text-white">
        {company}
      </h1>
    </motion.div>
  );
}

export default ImageSliderSoftware;
