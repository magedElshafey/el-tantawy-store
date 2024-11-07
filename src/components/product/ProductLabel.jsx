import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import createSlug from "../../utils/createSlug";
import ProductSlider from "../common/products/ProductSlider";
import SubCategoryBox from "../common/categories/SubCategoryBox";
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
