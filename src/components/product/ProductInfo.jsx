import React, { useState } from "react";
import { useTranslation } from "react-i18next";
const ProductInfo = ({ data }) => {
  const { t } = useTranslation();
  const [activeColor, setActiveColor] = useState(null);
  const handleActiveColorClick = (i) => setActiveColor(i);
  return (
    <div>
      <p className="text-base md:text-md lg:text-lg mb-3 font-medium text-redColor">
        {data?.name}
      </p>
      <div className="w-full flex items-center justify-between flex-col lg:flex-row gap-4 mb-3">
        <div>
          <p className="text-md md:text-lg lg:text-xl font-bold mb-2">
            {data?.hasOffer
              ? data?.offer?.priceAfterDiscount
              : data?.discount
              ? data.price_after_discount
              : data.price}{" "}
            {t("le")}
          </p>
          {data.discount && (
            <div className="flex items-center gap-2 flex-wrap text-nowrap">
              <p className="text-slate-500">{t("before offer")} : </p>
              <del className="text-redColor">
                {data.price} {t("le")}
              </del>
            </div>
          )}
        </div>
        <div>
          <p className="font-semibold text-slate-500 mb-2">{t("available")}</p>
          <div className="flex items-center gap-2">
            <p>{t("product code")} : </p>
            <p className=" font-semibold">{data?.code}</p>
          </div>
        </div>
      </div>
      {data?.colors?.length ? (
        <div className="">
          <p className="font-semibold mb-2">{t("colors")} : </p>
          <div className="w-full flex items-center gap-2 flex-wrap mb-3">
            {data?.colors?.map((item, index) => (
              <p
                onClick={() => handleActiveColorClick(index)}
                key={index}
                className={`w-6 h-6 duration-300  border-2 border-slate-700  rounded-[50%] cursor-pointer ${
                  activeColor === index ? "scale-125" : ""
                }`}
                style={{
                  backgroundColor: `${item?.hex}`,
                }}
              ></p>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProductInfo;
