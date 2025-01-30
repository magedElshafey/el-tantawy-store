import React from "react";
import { useLocation } from "react-router-dom";
import useBranches from "../hooks/api/useBranches";
import SingleBanner from "../components/common/banners/SingleBanner";
import { useTranslation } from "react-i18next";
import FetchHandler from "../components/common/dataFetching/FetchHandler";
import { tabTitle } from "../utils/tabTitle";
import Meta from "../components/common/seo/Meta";
const Branch = () => {
  const { t } = useTranslation();
  const queryResult = useBranches();
  const { data } = queryResult;
  const location = useLocation();
  const branchId = location.state?.branchId;
  const branch = data?.data?.data?.branches?.find(
    (item) => item?.id === branchId
  );

  return (
    <FetchHandler queryResult={queryResult}>
      <Meta title={tabTitle(branch?.government)} />
      <div className="container mt-4 mb-4 md:mb-6 lg:mt-8 xl:mt-12">
        <h1 className="text-md md:text-lg lg:text-xl xl:text-2xl font-bold mb-5 text-redColor">
          {branch?.government}
        </h1>
        <SingleBanner src={branch?.image} alt={branch?.government} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 xl:gap-12 my-4 md:my-6 lg:my-8 xl:my-12">
          <div>
            <h2 className="text-base md:text-md lg:text-lg xl:text-xl font-bold mb-5 text-redColor">
              {t("address")}
            </h2>
            <p className="mb-4">{branch?.address}</p>
            <div className="flex items-center gap-3 mb-4">
              <p className="font-bold">{t("phone")} :</p>
              <p>{branch?.phone}</p>
            </div>
            <h2 className="text-base md:text-md lg:text-lg xl:text-xl font-bold mb-5 text-redColor">
              {t("working hours")} :{" "}
            </h2>
            <p className="font-bold mb-2">السبت - الجمعة</p>
            <p>9 ص - 1 بعد منتصف الليل</p>
          </div>
          <div className="w-full h-[300px] md:h-[450px]">
            <iframe
              title={branch?.government}
              className="w-full h-full"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={branch?.map_link}
            ></iframe>
          </div>
        </div>
      </div>
    </FetchHandler>
  );
};

export default Branch;
