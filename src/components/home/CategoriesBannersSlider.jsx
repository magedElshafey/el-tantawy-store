import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const CategoriesBannersSlider = ({ data }) => {
  return (
    <div className="w-full h-[100px] md:h-[200px] lg:h-[300px] ">
      <Slider className="w-full h-[100px] md:h-[200px] lg:h-[300px] ">
        {data?.map((item, index) => (
          <img
            alt="banner"
            src={item}
            key={index}
            loading="lazy"
            className="w-full h-[100px] md:h-[200px] lg:h-[300px]"
          />
        ))}
      </Slider>
    </div>
  );
};

export default CategoriesBannersSlider;
