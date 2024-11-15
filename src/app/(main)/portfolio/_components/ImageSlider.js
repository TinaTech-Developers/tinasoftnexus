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

function ImageSlider() {
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
          <div className="h-56 w-96 border">11111111</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-56 w-96 border">22222222</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-56 w-96 border">3333333</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-56 w-96 border">4444444</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-56 w-96 border">555555</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-56 w-96 border">666666</div>
        </SwiperSlide>
      </StyledSwiper>
    </>
  );
}

export default ImageSlider;
