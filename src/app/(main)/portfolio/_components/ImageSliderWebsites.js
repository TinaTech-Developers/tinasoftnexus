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

function ImageSliderWebsites() {
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
          <WebsitesCard
            image={"/sitawa.png"}
            link={"https:www.sitawainvestments.co.zw"}
            company={" Sitawa Investments"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WebsitesCard
            image={"/jacauto.png"}
            link={"https:www.jacautopro.co.zw"}
            company={"Jac Auto Pro"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <WebsitesCard link={""} />
        </SwiperSlide>
        <SwiperSlide>
          <WebsitesCard link={""} />
        </SwiperSlide>
        <SwiperSlide>
          <WebsitesCard link={""} />
        </SwiperSlide>
        <SwiperSlide>
          <WebsitesCard link={""} />
        </SwiperSlide>
      </StyledSwiper>
    </>
  );
}

function WebsitesCard({ image, link, company }) {
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
        href={link}
        target="_blank"
        // rel="noopener noreferrer"
        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-blue-800 text-lg font-semibold transition-opacity duration-300"
      >
        Visit Website
      </Link>
      <h1 className="text-center font-semibold hover:z-20 hover:text-white">
        {company}
      </h1>
    </motion.div>
  );
}

export default ImageSliderWebsites;
