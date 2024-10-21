import React from "react";
import createSlug from "../../../utils/createSlug";
import { Link } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
const CategorySlider = ({ data }) => {
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      document.getElementById("category-scroll").scrollLeft += 550; // زيادة المسافة حسب الحاجة
    },
    onSwipedRight: (eventData) => {
      document.getElementById("category-scroll").scrollLeft -= 550; // زيادة المسافة حسب الحاجة
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  return (
    <div
      id="category-scroll"
      className="category-slider flex items-center gap-5 overflow-x-auto w-full pb-4"
      {...handlers}
    >
      <div className="flex">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 justify-center mx-3"
          >
            <div className="w-[120px] h-[120px] rounded-[50%] bg-[#ede9e6] overflow-hidden  ">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <img
                  alt={item?.name}
                  src={item?.image}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <Link
              to={`/category/${createSlug(item?.name)}`}
              state={{
                categoryId: item?.id,
                categoryName: item?.name,
              }}
              className="text-nowrap font-semibold text-redColor duration-300 hover:underline"
            >
              {item?.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
