import React from "react";
import { Link } from "react-router-dom";
import createSlug from "../../../utils/createSlug";
const SubCategoryBox = ({ data }) => {
  return (
    <div className="w-full border py-6 flex items-center">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          {data?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-4"
            >
              <img
                alt={item?.name}
                src={item?.image}
                loading="lazy"
                className=""
              />
              <Link
                to={`/category/${createSlug(item?.name)}`}
                className="text-redColor font-semibold text-base md:text-md lg:text-lg underline"
              >
                {item?.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubCategoryBox;
