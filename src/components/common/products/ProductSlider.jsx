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
    autoplay: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    verical: false,
    slidesToScroll: 1,
    initialSlide: 0,
    cssEase: "linear",
    rtl: i18n.language === "ar",
    verticalSwiping: false,

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
    appendDots: (dots) => (
      <div dir={i18n.language === "ar" ? "rtl" : "ltr"}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "30px",
          height: "30px",
          borderRadius: "50%",
          color: "black",
          border: "1px #de0712 solid",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 10px",
        }}
      >
        {i + 1}
      </div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        {data?.map((item, index) => (
          <div
            dir={i18n.language === "ar" ? "rtl" : "ltr"}
            key={index}
            className="px-3 mb-5"
          >
            <ProductCard data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductSlider;
