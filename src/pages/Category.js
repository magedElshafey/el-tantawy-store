import React from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import Spinner from "../components/common/loader/Spinner";
import { getCategoryById } from "../services/categories/getCategoryById";
import CategorySlider from "../components/common/categories/CategorySlider";
const Category = () => {
  const location = useLocation();
  const categoryId = location.state?.categoryId;
  const { isLoading, data } = useQuery(
    ["category-details", categoryId],
    () => getCategoryById(categoryId),
    {
      enabled: !!categoryId,
    }
  );
  console.log("data from category details", data?.data?.data);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="my-5 container">
          <CategorySlider data={data?.data?.data?.categories} />
        </div>
      )}
    </>
  );
};

export default Category;
