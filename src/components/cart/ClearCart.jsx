import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../store/cart";
import { useTranslation } from "react-i18next";
const ClearCart = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleClick = () => dispatch(clearCart());
  return (
    <button
      onClick={handleClick}
      className="w-full mt-3 bg-redColor text-white p-3 flex items-center justify-center duration-300 hover:bg-white hover:text-redColor hover:border hover:border-redColor"
    >
      {t("clear")}
    </button>
  );
};

export default ClearCart;
