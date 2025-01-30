import React from "react";
import SingleBanner from "../components/common/banners/SingleBanner";
import banner from "../assets/عربية-التسوق.png";
import { useTranslation } from "react-i18next";
import { IoStorefrontSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import createSlug from "../utils/createSlug";
import useBranches from "../hooks/api/useBranches";
import { tabTitle } from "../utils/tabTitle";
import Meta from "../components/common/seo/Meta";
import FetchHandler from "../components/common/dataFetching/FetchHandler";
const Branches = () => {
  const queryResult = useBranches();
  const { data } = queryResult;
  const { t } = useTranslation();
  return (
    <FetchHandler queryResult={queryResult}>
      <Meta title={tabTitle(t("branches"))} />
      <div>
        <SingleBanner src={banner} alt="branches" />
        <div className="container mt-4 mb-4 md:mb-6 lg:mt-8 xl:mt-12">
          <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold mb-5 text-redColor">
            {t("choose branche")}
          </h1>
          <p className="text-slate-600">
            {t("choose branch for more details")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 my-4 md:my-6 lg:my-8 xl:my-12">
            {data?.data?.data?.branches?.reverse().map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <IoStorefrontSharp size={50} />
                <Link
                  className="text-base md:text-md lg:text-lg font-bold duration-300 hover:underline hover:text-redColor"
                  state={{
                    branchId: item?.id,
                  }}
                  to={`/branches/${createSlug(item?.government)}`}
                >
                  {item?.government}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FetchHandler>
  );
};

export default Branches;
