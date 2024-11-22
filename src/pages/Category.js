import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/common/loader/Spinner";
import { getCategoryById } from "../services/categories/getCategoryById";
import CategorySlider from "../components/common/categories/CategorySlider";
import { useTranslation } from "react-i18next";
import ProductSlider from "../components/common/products/ProductSlider";
import Filter from "../components/common/filter/Filter";
import ProductCard from "../components/common/products/ProductCard";
const Category = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const categoryId = location.state?.categoryId;
  const categoryName = location.state?.categoryName;

  const { isLoading, data } = useQuery(
    ["category-details", categoryId],
    () => getCategoryById(categoryId),
    {
      enabled: !!categoryId,
    }
  );
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <div className="my-4 container">
            <h1 className="mb-6 text-redColor">{categoryName}</h1>
            {data?.data?.data?.categories?.length ? (
              <CategorySlider data={data?.data?.data?.categories} />
            ) : null}
          </div>
          {data?.data?.data?.productsForYou?.length ? (
            <div className="w-full overflow-x-hidden py-5 flex items-center bg-graySection my-4 md:my-6 lg:my-8 xl:my-12">
              <div className="container">
                <h3 className="mb-5">{t("customized")}</h3>
                <ProductSlider data={data?.data?.data?.productsForYou} />
              </div>
            </div>
          ) : null}
          {data?.data?.data?.mostSelling?.length ? (
            <div className="container my-4 md:my-6 lg:my-8 xl:my-12">
              <h3 className="mb-5">{t("best")}</h3>
              <ProductSlider data={data?.data?.data?.mostSelling} />
            </div>
          ) : null}
          {/* {data?.data?.data?.mostRated?.length ? (
            <div className="w-full overflow-x-hidden py-5 flex items-center bg-graySection my-4 md:my-6 lg:my-8 xl:my-12">
              <div className="container">
                <h3 className="mb-5">{t("rated")}</h3>
                <ProductSlider data={data?.data?.data?.mostRated} />
              </div>
            </div>
          ) : null} */}
          {data?.data?.data?.randomProducts?.length ? (
            <div className="container">
              <div className="w-full flex  gap-4 mb-5">
                <div className="hidden lg:block sticky top-0 w-[300px] h-[300px]">
                  <Filter categories={data?.data?.data?.categories} />
                </div>
                <div className="flex-1">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                    {data?.data?.data?.randomProducts?.map((item, index) => (
                      <ProductCard data={item} key={index} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      )}
    </>
  );
};

export default Category;
