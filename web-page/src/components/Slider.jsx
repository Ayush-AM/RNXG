import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import "./Slider.css";

const HorizontalSlider = ({ className }) => {
  const originalSlides = [
    {
      image:
        "https://res.cloudinary.com/ds1brunxe/image/upload/v1739783043/5_ihggwg.jpg",
      text: "Co-Powered By",
    },
    {
      image:
        "https://res.cloudinary.com/ds1brunxe/image/upload/v1739782897/bitmark_iiguxv.jpg",
      text: "Educational Sponsor",
    },
    {
      image:
        "https://res.cloudinary.com/ds1brunxe/image/upload/v1738677593/images_mx0uho.jpg",
      text: "Media Sponsor",
    },
  ];

  // Duplicate slides for smooth looping
  const slides = [...originalSlides, ...originalSlides, ...originalSlides];
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      <Swiper
        direction="horizontal"
        slidesPerView={3}
        spaceBetween={10}
        loop={true}
        loopAdditionalSlides={2}
        centeredSlides={true}
        autoplay={{
          delay: 1300,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) =>
          setActiveIndex(swiper.realIndex % originalSlides.length)
        }
        modules={[Autoplay]}
        className="horizontal-swiper"
        breakpoints={{
          901: { slidesPerView: 3, centeredSlides: true },
          900: { slidesPerView: 2, centeredSlides: false },
          480: { slidesPerView: 2, centeredSlides: false },
          0: { slidesPerView: 1, centeredSlides: false },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className={`hori-slide-custom ${
              activeIndex === index % originalSlides.length ? "active-slide" : ""
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${(index % originalSlides.length) + 1}`}
            />
            <div className="slide-text">{slide.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HorizontalSlider;
