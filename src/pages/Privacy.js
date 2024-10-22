import React from "react";
import privacyImg from "../assets/سياسة-الخصوصية.png";
import SingleBanner from "../components/common/banners/SingleBanner";
import Spinner from "../components/common/loader/Spinner";
import { useQuery } from "react-query";
import { useTranslation } from "react-i18next";
import { getPrivacy } from "../services/static/getPrivacy";
const Privacy = () => {
  const { isLoading, data } = useQuery("privacy", getPrivacy);
  const { t } = useTranslation();
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <SingleBanner alt="faq" src={privacyImg} />
          <div className="container mt-4">
            <div className="mb-4 md:mb-6 lg:mb-8 xl:mb-12">
              <div className="w-full py-4 px-6 rounded-md bg-white shadow-md text-slate-500 leading-normal">
                <p className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold text-redColor mb-5">
                  {t("privacy and policy")}
                </p>
                <p>{data?.data?.data?.privacy}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Privacy;
