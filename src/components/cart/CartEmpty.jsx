import React from "react";
import MainBtn from "../common/buttons/MainBtn";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeCart } from "../../store/cart";
import { useTranslation } from "react-i18next";
import { FaShoppingBag } from "react-icons/fa";

const CartEmpty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const handleClick = () => {
    navigate("/shop");
    dispatch(closeCart());
  };
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <FaShoppingBag className="text-redColor" size={50} />
        <p className="text-slate-500">{t("your cart is empty")}</p>
        <MainBtn text="continu shopping" action={handleClick} />
      </div>
    </div>
  );
};

export default CartEmpty;
