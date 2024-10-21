import React from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { Link } from "react-router-dom";
import createSlug from "../../utils/createSlug";
const CategoryHeader = () => {
  const { data } = useGlobalContext();
  const categories = data?.categories || [];
  return (
    <div className="bg-[#f9f9f9f9] py-3  flex items-center">
      <div className="container ">
        <div className="flex items-center  gap-5 overflow-x-auto w-full overflow-y-hidden custom-scroll">
          {categories?.map((item, index) => (
            <Link
              className="font-semibold text-nowrap pb-2"
              key={index}
              to={`/category/${createSlug(item?.name)}`}
              state={{
                categoryId: item?.id,
                categoryName: item?.name,
              }}
            >
              {item?.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryHeader;
