import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import createSlug from "../../utils/createSlug";
const CategoryHeader = () => {
  const { data } = useGlobalContext();
  const categories = data?.categories || [];
  const settings = {
    dots: false,
    infinite: false,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  return (
    <div className="w-full bg-redColor py-2 flex items-center">
      <div className="container">
        <Slider {...settings}>
          {categories?.map((item, index) => (
            <Link
              className="px-5 font-semibold text-white"
              key={index}
              to={`/${createSlug(item?.name)}`}
              style={{
                width: "fit-content",
              }}
            >
              {item?.name}
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CategoryHeader;
