import React from "react";
import privacyImg from "../assets/سياسة-الخصوصية.png";
import SingleBanner from "../components/common/banners/SingleBanner";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import { getPrivacy } from "../services/static/getPrivacy";
import FetchHandler from "../components/common/dataFetching/FetchHandler";
import Meta from "../components/common/seo/Meta";
import { tabTitle } from "../utils/tabTitle";
const Privacy = () => {
  const queryResult = useQuery("privacy", getPrivacy);
  const { data } = queryResult;
  const { t } = useTranslation();
  return (
    <FetchHandler queryResult={queryResult}>
      <Meta title={tabTitle("privacy and policy")} />
      <SingleBanner alt="faq" src={privacyImg} />
      <div className="container mt-4">
        <div className="mb-4 md:mb-6 lg:mb-8 xl:mb-12">
          <div className="w-full py-4 px-6 rounded-md bg-white shadow-md text-slate-700 leading-loose">
            <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold text-redColor mb-5">
              {t("privacy and policy")}
            </p>
            <p>{data?.data?.data?.privacy}</p>
          </div>
        </div>
      </div>
    </FetchHandler>
  );
};

export default Privacy;
