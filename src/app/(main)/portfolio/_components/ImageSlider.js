import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
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
          <div className="h-56 w-96 border"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-56 w-96 border"></div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="h-56 w-96 border"></div>
        </SwiperSlide>{" "}
        <SwiperSlide>
          <div className="h-56 w-96 border"></div>
        </SwiperSlide>
      </StyledSwiper>
      {/* <PaginationContainer>
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: activeIndex === index ? "#007aff" : "#ccc",
              transition: "background 0.3s",
            }}
            onClick={() => setActiveIndex(index)} // Set active index on click
          >
            {">"}
          </div>
        ))}
      </PaginationContainer> */}
    </>
  );
}

export default ImageSlider;
