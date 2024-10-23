import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
// import {
//   MdKeyboardArrowRight,
//   MdOutlineKeyboardArrowLeft,
// } from "react-icons/md";

const CategoriesBannersSlider = ({ data }) => {
  const { i18n } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    slidesToShow: 1,
    verical: false,
    slidesToScroll: 1,
    rtl: i18n.language === "ar",
    initialSlide: i18n.language === "ar" ? data.length - 1 : 0,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const sliderRef = useRef(null);
  // const slickNext = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickNext();
  //   }
  // };

  // const slickPrev = () => {
  //   if (sliderRef.current) {
  //     sliderRef.current.slickPrev();
  //   }
  // };
  // const isNextDisabled =
  //   sliderRef.current?.innerSlider?.currentSlide === data.length - 1;
  // const isPrevDisabled = sliderRef.current?.innerSlider?.currentSlide === 0;
  return (
    <div className="w-full h-[100px] md:h-[200px] lg:h-[300px] relative ">
      <Slider
        ref={sliderRef}
        {...settings}
        className="w-full h-[100px] md:h-[200px] lg:h-[300px] "
      >
        {data?.map((item, index) => (
          <img
            alt="banner"
            src={item?.image}
            key={index}
            loading="lazy"
            className="w-full h-[100px] md:h-[200px] lg:h-[300px]"
          />
        ))}
      </Slider>
      {/* <div
        className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-[50%] flex items-center justify-center bg-[#f0f0f0]  absolute top-1/2 translate-y-[-50%] right-3 ${
          isNextDisabled
            ? "bg-opacity-35 cursor-not-allowed"
            : "cursor-pointer bg-opacity-100"
        }`}
        onClick={i18n.language === "ar" ? slickNext : slickPrev}
      >
        {i18n.language === "ar" ? (
          <MdKeyboardArrowRight size={15} />
        ) : (
          <MdOutlineKeyboardArrowLeft size={15} />
        )}
      </div>
      <div
        className={`w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-[50%] flex items-center justify-center bg-[#f0f0f0] cursor-pointer absolute top-1/2 translate-y-[-50%] left-3 ${
          isPrevDisabled
            ? "bg-opacity-35 cursor-not-allowed"
            : "cursor-pointer bg-opacity-100"
        }`}
        onClick={i18n.language === "ar" ? slickPrev : slickNext}
      >
        {i18n.language === "ar" ? (
          <MdOutlineKeyboardArrowLeft size={15} />
        ) : (
          <MdKeyboardArrowRight size={15} />
        )}
      </div> */}
    </div>
  );
};

export default CategoriesBannersSlider;
