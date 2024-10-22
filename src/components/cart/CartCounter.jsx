import React from "react";
import { useTranslation } from "react-i18next";
const CartCounter = ({ itemsNumber }) => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-3 font-semibold">
      <p>{t("cart1")} : </p>
      <p>
        ({itemsNumber}) {t("products")}
      </p>
    </div>
  );
};

export default CartCounter;
