import React from "react";
import createSlug from "../../../utils/createSlug";
import { Link } from "react-router-dom";
const CategorySlider = ({ data }) => {
  console.log("data from category slider", data);
  return (
    <div className="category-slider flex items-center gap-5 overflow-x-auto w-full pb-4">
      <div className="flex">
        {data?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 justify-center mx-3"
          >
            <div className="w-[150px] h-[150px] rounded-[50%] bg-[#ede9e6] overflow-hidden  ">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <img
                  alt={item?.name}
                  src={item?.image}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <Link
              to={`/${createSlug(item?.name)}`}
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
