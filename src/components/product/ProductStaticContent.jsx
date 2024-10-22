import React from "react";
import { productStaticInfo } from "../../data/data";
import { useTranslation } from "react-i18next";
const ProductStaticContent = () => {
  const { t } = useTranslation();
  return (
    <div className="py-3 px-6 rounded-md bg-graySection">
      {productStaticInfo?.map((item, index) => (
        <div key={index} className="mb-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-[50%] bg-redColor text-white flex items-center justify-center">
            <p>{item?.icon}</p>
          </div>
          <div>
            <p className="font-bold mb-2">{t(item?.title)}</p>
            <p>{t(item?.desc)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductStaticContent;
