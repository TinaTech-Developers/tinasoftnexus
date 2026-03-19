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
      <Image
        src="/placeholder.png"
        alt={name}
        width={450}
        height={450}
        className="w-full rounded-xl object-contain p-6"
      />
    );
  }

  if (images.length === 1) {
    return (
      <Image
        src={images[0]}
        alt={name}
        width={450}
        height={450}
        className="rounded-xl object-contain  p-6"
      />
    );
  }

  return (
    <div className="w-full md:max-w-[450px] bg-white">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-xl shadow-xl"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex justify-center items-center p-6">
              <Image
                src={img}
                alt={name}
                width={450}
                height={450}
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
