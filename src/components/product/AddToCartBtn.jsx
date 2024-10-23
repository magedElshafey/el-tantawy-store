import React from "react";
import { useTranslation } from "react-i18next";
const AddToCartBtn = ({ handleAddToCart }) => {
  const { t } = useTranslation();
  return (
    <button
      onClick={handleAddToCart}
      className="w-full py-3 px-4 text-nowrap flex items-center justify-center bg-black text-white duration-300 hover:bg-redColor hover:text-white"
    >
      {t("add to cart")}
    </button>
  );
};

export default AddToCartBtn;
