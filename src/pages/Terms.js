import React from "react";
import termsImg from "../assets/الشروط-والاحكام.png";
import SingleBanner from "../components/common/banners/SingleBanner";
import { useQuery } from "react-query";
import { getTerms } from "../services/static/getTerms";
import { useTranslation } from "react-i18next";
import FetchHandler from "../components/common/dataFetching/FetchHandler";
import { tabTitle } from "../utils/tabTitle";
import Meta from "../components/common/seo/Meta";
const Terms = () => {
  const queryResult = useQuery("terms", getTerms);
  const { data } = queryResult;
  const { t } = useTranslation();
  return (
    <FetchHandler queryResult={queryResult}>
      <Meta title={tabTitle("terms")} />
      <SingleBanner alt="faq" src={termsImg} />
      <div className="container mt-4">
        <div className="mb-4 md:mb-6 lg:mb-8 xl:mb-12">
          <div className="w-full py-4 px-6 rounded-md bg-white shadow-md text-slate-700 leading-loose">
            <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold text-redColor mb-5">
              {t("applay terms and conditions")}
            </p>
            <p>{data?.data?.data?.terms}</p>
          </div>
        </div>
      </div>
    </FetchHandler>
  );
};

export default Terms;
