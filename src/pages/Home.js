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
import buyNow from "../assets/اشتري-دلوقتي-وادفع-بعدين.png";
import waitUs from "../assets/استنونا-كل-يوم.png";
import haram from "../assets/هرم-الطنطاوي-الرابع.png";
import atgawez from "../assets/عايزة-اتجوز.png";
import ProductLabel from "../components/product/ProductLabel";
const Home = () => {
  const { data } = useGlobalContext();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleOffersPageNavigate = () => navigate("/offers");
  const handlePrideOffersNavigate = () => navigate("/pride-offers");
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
      {/*offer products*/}
      <div className="container my-4 md:my-6 lg:my-8 xl:my-12">
        <div className="w-full flex justify-start lg:justify-end">
          <div className="w-[200px] mb-4 md:mb-6">
            <MainBtn
              text="show more offers"
              action={handleOffersPageNavigate}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {data?.maxOrderProducts?.slice(0, 12)?.map((item, index) => (
            <ProductCard data={item} key={index} />
          ))}
        </div>
      </div>
      {/*haram*/}
      <div className="mb-4 md:mb-6 lg:mb-8 xl:mb-12">
        <SingleBanner alt="el-tantawy" src={haram} />
      </div>

      {/**customized product */}
      <div className="container">
        <div className="my-4 md:my-6 lg:my-8 xl:my-12 ">
          <ProductSlider data={data?.productsForYou} />
        </div>
      </div>

      {/**main category slider*/}
      <div className="my-4 md:my-6 lg:my-8 xl:my-12 container text-md md:text-lg lg:text-xl xl:text-2xl text-center font-bold text-redColor">
        {t("browse by category")}
      </div>
      <div className="w-full my-4 md:my-6 lg:my-8 xl:my-12  bg-graySection  py-5 flex items-center ">
        <CategorySlider data={data?.categories} />
      </div>
      {/**customized product */}
      <div className="container">
        <div className="my-4 md:my-6 lg:my-8 xl:my-12 ">
          <p className="font-bold text-redColor text-md md:text-lg lg:text-xl xl:text-2xl mb-5">
            {t("customized")}
          </p>
          <ProductSlider data={data?.productsForYou} />
        </div>
      </div>
      {/**installment banner*/}
      <div className=" overflow-x-hidden my-4 md:my-6 lg:my-8 xl:my-12 ">
        <SingleBanner alt="installment" src={buyNow} />
      </div>
      {/** best seller */}
      <div className="container my-4 md:my-6 lg:my-8 xl:my-12 ">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {data?.shippingProducts?.slice(0, 12)?.map((item, index) => (
            <ProductCard key={index} data={item} />
          ))}
        </div>
      </div>
      {/**pride banner*/}
      <Link
        to="pride-offers"
        className="w-screen block overflow-x-hidden my-4 md:my-6 lg:my-8 xl:my-12"
      >
        <SingleBanner alt="atgawez" src={atgawez} />
      </Link>
      <div className="container my-4 md:my-6 lg:my-8 xl:my-12">
        <div className="w-full flex justify-start lg:justify-end">
          <div className="w-[200px] mb-4 md:mb-6">
            <MainBtn
              text="show more offers"
              action={handlePrideOffersNavigate}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
          {data?.maxOrderProducts?.slice(0, 12)?.map((item, index) => (
            <ProductCard data={item} key={index} />
          ))}
        </div>
      </div>
      {/**wait us*/}
      <div className="w-screen overflow-x-hidden my-4 md:my-6 lg:my-8 xl:my-12">
        <SingleBanner alt="wait" src={waitUs} />
      </div>
      {/**customized product */}
      <div className="container">
        <div className="my-4 md:my-6 lg:my-8 xl:my-12 ">
          <ProductSlider data={data?.productsForYou} />
        </div>
      </div>
      <div className="my-4 md:my-6 lg:my-8 xl:my-12">
        {data?.categories?.map((item, index) => (
          <div key={index} className="mb-4 md:mb-6 lg:mb-8 xl:mb-12">
            <ProductLabel item={item} products={data?.productsForYou} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
