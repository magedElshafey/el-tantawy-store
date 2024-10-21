import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/common/loader/Spinner";
import { getProductById } from "../services/product/getProductById";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductAssets from "../components/product/ProductAssets";
import ProductInfo from "../components/product/ProductInfo";
const ProductDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const { isLoading, data } = useQuery(
    ["product", id],
    () => getProductById(id),
    {
      enabled: !!id,
    }
  );
  console.log("data from product details", data?.data?.data);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container my-4">
          <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 lg:gap-6">
            <ProductAssets
              imgs={data?.data?.data?.product?.images}
              alt={data?.data?.data?.product?.name}
            />
            <ProductInfo data={data?.data?.data?.product} />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
