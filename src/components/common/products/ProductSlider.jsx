import React from "react";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const ProductSlider = ({ data }) => {
  const { i18n } = useTranslation();
  const settings = {
    dots: false,
    autoplay: false,
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    verical: false,
    slidesToScroll: 1,
    rtl: i18n.language === "ar",
    initialSlide: i18n.language === "ar" ? data.length - 1 : 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 540,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            key={index}
            className="px-3 "
          >
            <ProductCard data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
const NextArrow = ({ onClick, currentSlide, slideCount }) => {
  return (
    <button
      className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-redColor text-white p-2 rounded-full z-10 ${
        currentSlide === slideCount - 1 ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={currentSlide === slideCount - 1}
    >
      <FaArrowRight size={24} />
    </button>
  );
};
const PrevArrow = ({ onClick, currentSlide }) => {
  return (
    <button
      className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-redColor text-white p-2 rounded-full z-10 ${
        currentSlide === 0 ? "opacity-50 cursor-not-allowed" : ""
      }`}
      onClick={onClick}
      disabled={currentSlide === 0}
    >
      <FaArrowLeft size={24} />
    </button>
  );
};
export default ProductSlider;
