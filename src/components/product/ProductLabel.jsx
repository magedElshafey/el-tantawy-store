import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import createSlug from "../../utils/createSlug";
import ProductSlider from "../common/products/ProductSlider";
const ProductLabel = ({ item, products }) => {
  const { t } = useTranslation();
  console.log("item from product label", item);
  return (
    <>
      <div className="w-full py-5 px-8 md:px-16 flex items-center justify-between text-nowrap bg-redColor text-white rounded-md mb-4 md:mb-6 lg:mb-8 xl:mb-12">
        <p className="font-bold text-base md:text-md lg:text-lg xl:text-xl">
          {item?.name}
        </p>
        <Link
          to={`/category/${createSlug(item?.name)}`}
          state={{
            categoryId: item?.id,
            categoryName: item?.name,
          }}
          className=" underline"
        >
          {t("browse more")}
        </Link>
      </div>
      <div className="container">
        {item?.children?.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-4 md:mb-6 lg:mb-8 xl:mb-12">
            {item?.children?.map((category, index) => (
              <Link
                to={`/category/${createSlug(category?.name)}`}
                state={{
                  categoryId: category?.id,
                  categoryName: category?.name,
                }}
                key={index}
                className="p-4 flex items-center justify-center flex-col gap-3 bg-[#e5e7eb] bg-opacity-20 rounded-md text-nowrap text-center"
              >
                <img
                  alt={category?.name}
                  src={category?.image}
                  loading="lazy"
                  className="w-[90%] mx-auto h-[150px] object-contain"
                />
                <p className=" font-semibold duration-300 hover:underline hover:text-redColor">
                  {category?.name}
                </p>
              </Link>
            ))}
          </div>
        ) : null}
        <ProductSlider data={products} />
      </div>
    </>
  );
};

export default ProductLabel;
/**
 *   <div className="w-full py-5 flex items-center bg-redColor">
      <div className="container flex gap-4 justify-between  text-white text-nowrap items-center ">
      
     
      </div>
    </div>
 */
