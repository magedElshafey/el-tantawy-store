import React from "react";
import ProductCard from "./ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
const ProductSlider = ({ data }) => {
  const { i18n } = useTranslation();
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    verical: false,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    rtl: i18n.language === "ar",
    verticalSwiping: false,
    pauseOnHover: true,
    swipeToSlide: true,
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
          slidesToShow: 4,
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
            className="px-3"
          >
            <ProductCard data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
