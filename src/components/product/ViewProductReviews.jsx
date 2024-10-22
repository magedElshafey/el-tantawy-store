import React from "react";
import { reviews } from "../../data/data";
import { useTranslation } from "react-i18next";
const ViewProductReviews = () => {
  const { t } = useTranslation();
  return (
    <>
      {reviews?.length ? (
        <>
          {reviews?.map((item, index) => (
            <div key={index} className="flex items-center gap-3 mb-4">
              <img
                alt={item?.name}
                src={item?.img}
                loading="lazy"
                className="w-12 h-12 rounded-[50%] "
              />
              <div className="flex gap-4 md:gap-12">
                <div className="flex-1">
                  <p className="font-bold text-redColor mb-3">{item?.name}</p>
                  <p className="text-slate-500">{item?.review}</p>
                </div>
                <p>{item?.date}</p>
              </div>
            </div>
          ))}
        </>
      ) : (
        <p className="font-semibold">{t("norev")}</p>
      )}
    </>
  );
};

export default ViewProductReviews;
