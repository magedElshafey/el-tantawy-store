import React, { useState } from "react";
import { useQuery } from "react-query";
import { getProductById } from "../services/product/getProductById";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ProductAssets from "../components/product/ProductAssets";
import ProductInfo from "../components/product/ProductInfo";
import ProductStaticContent from "../components/product/ProductStaticContent";
import ProductDescreption from "../components/product/ProductDescreption";
import useFaq from "../hooks/api/useFaq";
import { FaSpinner } from "react-icons/fa";
import Faq from "../components/common/faq/Faq";
import { useSelector } from "react-redux";
import SubmitProductReview from "../components/product/SubmitProductReview";
import ViewProductReviews from "../components/product/ViewProductReviews";
import ProductCard from "../components/common/products/ProductCard";
import ProductSlider from "../components/common/products/ProductSlider";
import { useGlobalContext } from "../context/GlobalContext";
import { getProductsByCategoryId } from "../services/product/getProductByCategoryId";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import FetchHandler from "../components/common/dataFetching/FetchHandler";
import { tabTitle } from "../utils/tabTitle";
import Meta from "../components/common/seo/Meta";
const ProductDetails = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const queryResult = useQuery(["product", id], () => getProductById(id), {
    enabled: !!id,
  });
  const { data } = queryResult;
  const { isLoading: loadingFaq, data: faq } = useFaq();
  const { isLogin } = useSelector((state) => state.authSlice);
  const { data: global } = useGlobalContext();
  const { isLoading: loadingRelatedProducts, data: relatedProducts } = useQuery(
    ["related-products", data?.data?.data?.product?.category_id],
    () => getProductsByCategoryId(data?.data?.data?.product?.category_id),
    {
      enabled: !!data?.data?.data?.product?.category_id,
    }
  );
  const [activeColor, setActiveColor] = useState(null);
  const handleActiveColorClick = (i) => setActiveColor(i);
  const [colorError, setColorError] = useState("");
  const handleAddToCart = () => {
    if (data?.data?.data.colors?.product.length > 1 && activeColor === null) {
      setColorError(t("you need to choose a color first"));
      return;
    } else {
      setColorError("");
      dispatch(
        addToCart({
          ...data?.data?.data?.product,
          selectedColor: data?.data?.data?.product?.colors[activeColor],
        })
      );
    }
  };
  return (
    <FetchHandler queryResult={queryResult}>
      <Meta title={tabTitle(data?.data?.data?.product?.name)} />
      <div className="container mt-4 mb-4 md:mb-6 lg:mb-8 xl:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          <ProductAssets
            imgs={data?.data?.data?.product?.images}
            alt={data?.data?.data?.product?.name}
          />
          <ProductInfo
            data={data?.data?.data?.product}
            handleActiveColorClick={handleActiveColorClick}
            colorError={colorError}
            handleAddToCart={handleAddToCart}
            activeColor={activeColor}
          />
          <ProductStaticContent />
        </div>
      </div>
      <div className="w-screen overflow-x-hidden py-5 flex items-center bg-graySection mb-4 md:mb-6 lg:mb-8 xl:mb-12">
        <div className="container">
          <ProductDescreption data={data?.data?.data?.product?.description} />
        </div>
      </div>
      <div className="container mb-4 md:mb-6 lg:mb-8 xl:mb-12">
        <div className="bg-white shadow-sm rounded-md p-3 border">
          <p className="pb-3 border-b mb-3 font-bold">
            {t("client's question about this product")}
          </p>
          {loadingFaq ? (
            <div className="w-full flex justify-center">
              <FaSpinner className="text-4xl text-redColor animate-spin" />
            </div>
          ) : (
            <Faq data={faq?.data?.data?.fqss} />
          )}
        </div>
      </div>
      <div className="w-screen overflow-x-hidden py-5 flex items-center bg-graySection mb-4 md:mb-6 lg:mb-8 xl:mb-12">
        <div className="container">
          <p className="pb-3 border-b mb-3 font-bold">
            {t("comments and reviews")}
          </p>
          {isLogin ? (
            <SubmitProductReview />
          ) : (
            <Link
              to="/login"
              className="block font-medium underline text-redColor mb-"
            >
              {t("you need to login to submit review")}
            </Link>
          )}
          <ViewProductReviews />
        </div>
      </div>
      <div className="container">
        <div className="my-4 md:my-6 lg:my-8 xl:my-12">
          <p className="mb-4 font-bold text-base md:text-md lg:text-lg xl:text-xl text-redColor">
            {t("always buy with")}
          </p>
          <ProductSlider data={global?.productsForYou} />
        </div>
        {loadingRelatedProducts ? (
          <div className="w-full flex justify-center my-4 md:my-6 lg:my-8 xl:my-12">
            <FaSpinner className="text-4xl text-redColor animate-spin" />
          </div>
        ) : (
          <div className="my-4 md:my-6 lg:my-8 xl:my-12">
            <p className="mb-4 font-bold text-base md:text-md lg:text-lg xl:text-xl text-redColor">
              {t("related products")}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
              {relatedProducts?.data?.data?.products?.map((item, index) => (
                <ProductCard key={index} data={item} />
              ))}
            </div>
          </div>
        )}
      </div>
    </FetchHandler>
  );
};

export default ProductDetails;
