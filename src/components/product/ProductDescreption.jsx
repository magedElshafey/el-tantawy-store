import React from "react";
import { useTranslation } from "react-i18next";
const ProductDescreption = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div>
      <p className=" font-bold mb-3 text-base md:text-md lg:txt-lg xl:text-xl">
        {t("product descreption")}
      </p>

      <div dangerouslySetInnerHTML={{ __html: data }} />
    </div>
  );
};

export default ProductDescreption;
