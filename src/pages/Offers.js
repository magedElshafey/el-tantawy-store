import React from "react";
import { getOffers } from "../services/offers/getAllOffers";
import { useQuery } from "react-query";
import SingleBanner from "../components/common/banners/SingleBanner";
import bannerImg from "../assets/عروض-الطنطااوي.png";
import ProductCard from "../components/common/products/ProductCard";
import { useGlobalContext } from "../context/GlobalContext";
import Filter from "../components/common/filter/Filter";
import { useTranslation } from "react-i18next";
import FetchHandler from "../components/common/dataFetching/FetchHandler";
import { tabTitle } from "../utils/tabTitle";
import Meta from "../components/common/seo/Meta";
const Offers = () => {
  const { t } = useTranslation();
  const queryResult = useQuery("offers", getOffers);
  const { data } = queryResult;
  const { data: global } = useGlobalContext();
  return (
    <FetchHandler queryResult={queryResult}>
      <Meta title={t("offers")} />
      <SingleBanner alt="offers" src={bannerImg} />
      <div className="container my-4 md:my-6 lg:my-8 xl:my-12">
        <div className="w-full flex gap-4">
          <div className="hidden lg:block sticky top-0 w-[300px] h-[300px]">
            <Filter categories={global.categories} />
          </div>
          <div className="flex-1">
            {data?.data?.data?.offers?.length ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {data?.data?.data?.offers?.map((item, index) => (
                  <ProductCard key={index} data={item} />
                ))}
              </div>
            ) : (
              <div className="font-bold text-redColor text-base md:text-md text-center lg:text-lg">
                {t("no offers now")}
              </div>
            )}
          </div>
        </div>
      </div>
    </FetchHandler>
  );
};

export default Offers;
