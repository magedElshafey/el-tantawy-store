import React from "react";
import { useGlobalContext } from "../context/GlobalContext";
import CategoriesBannersSlider from "../components/home/CategoriesBannersSlider";
import FeatuersCard from "../components/home/FeatuersCard";
import CategorySlider from "../components/common/categories/CategorySlider";
import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import ProductCard from "../components/common/products/ProductCard";
import MainBtn from "../components/common/buttons/MainBtn";
import ProductSlider from "../components/common/products/ProductSlider";
import SingleBanner from "../components/common/banners/SingleBanner";
import offerBanner from "../assets/بانر-العروض.png";
import buyNow from "../assets/اشتري-دلوقتي-ادفع بعدين.png";
import waitUs from "../assets/استنونا-كل-يوم.png";
const Home = () => {
  const { data } = useGlobalContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleShopPageNavigate = () => navigate("/shop");
  return (
    <>
      <CategoriesBannersSlider data={data?.banners} />
      {/**features*/}
      <div className="container">
        <div className="my-4 md:my-6 lg:my-8 xl:my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {data?.features?.map((item, index) => (
            <FeatuersCard key={index} data={item} />
          ))}
        </div>
      </div>

      {/**offer banner*/}
      <Link
        to="offers"
        className="w-screen overflow-x-hidden my-4 md:my-6 lg:my-8 xl:my-12"
      >
        <SingleBanner
          alt="offer"
          src={offerBanner}
          height="h-[70px] md:h-[100px] lg:h-[200px]"
        />
      </Link>
      <div className="container">
        {/*most popular products*/}
        <div className="my-4 md:my-6 lg:my-8 xl:my-12">
          <div className="flex items-center justify-between gap-3 flex-wrap text-nowrap mb-3">
            <p className="font-bold text-redColor text-md md:text-lg lg:text-xl xl:text-2xl">
              {t("Most popular products")}
            </p>
            <div className="w-[200px]">
              <MainBtn
                text="show more products"
                action={handleShopPageNavigate}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
            {data?.maxOrderProducts?.slice(0, 12)?.map((item, index) => (
              <ProductCard data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      {/**installment banner*/}
      <div className=" overflow-x-hidden my-4 md:my-6 lg:my-8 xl:my-12 ">
        <SingleBanner
          alt="installment"
          src={buyNow}
          height="h-[35px] md:h-[100px]"
        />
      </div>
      <div className="container">
        {/**customized product */}
        <div className="my-4 md:my-6 lg:my-8 xl:my-12 ">
          <p className="font-bold text-redColor text-md md:text-lg lg:text-xl xl:text-2xl mb-5">
            {t("customized")}
          </p>
          <ProductSlider data={data?.productsForYou} />
        </div>
      </div>
      {/**main category slider*/}
      <div className="w-full  bg-graySection  py-5 flex items-center my-4 md:my-6 lg:my-8 xl:my-12">
        <CategorySlider data={data?.categories} />
      </div>
      <div className="container my-4 md:my-6 lg:my-8 xl:my-12 ">
        <p className="font-bold text-redColor text-md md:text-lg lg:text-xl xl:text-2xl mb-5">
          {t("best")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {data?.shippingProducts?.slice(0, 12)?.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </div>
      </div>
      <div className="w-screen overflow-x-hidden my-4 md:my-6 lg:my-8 xl:my-12">
        <SingleBanner alt="wait" src={waitUs} />
      </div>
    </>
  );
};

export default Home;
