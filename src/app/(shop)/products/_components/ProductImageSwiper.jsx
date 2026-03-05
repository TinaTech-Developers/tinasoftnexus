"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductImageSwiper({ images, name }) {
  if (!images || images.length === 0) {
    return (
      <div className="w-full flex justify-center bg-white rounded-xl p-4">
        <Image
          src="/placeholder.png"
          alt={name}
          width={500}
          height={400}
          className="rounded-xl object-contain"
        />
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className="w-full flex justify-center p-4 bg-white rounded-xl ">
        <Image
          src={images[0]}
          alt={name}
          width={500}
          height={400}
          className="rounded-xl object-contain"
        />
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg p-4 bg-white rounded-xl ">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        loop
        grabCursor
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center items-center h-[400px] p-4 ">
              <Image
                src={img}
                alt={name}
                width={500}
                height={400}
                className="object-contain rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
