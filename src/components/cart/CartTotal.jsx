import React from "react";
import { useTranslation } from "react-i18next";
import MainBtn from "../common/buttons/MainBtn";
import { useDispatch } from "react-redux";
import { closeCart } from "../../store/cart";
import { useNavigate } from "react-router-dom";
const CartTotal = ({ totalPrice }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCheckoutClick = () => {
    dispatch(closeCart());
    navigate("/checkout");
  };
  return (
    <div className="mt-8 md:mt-12 lg:mt-20">
      <div className=" flex items-center justify-between font-bold">
        <p> {t("sub")}</p>
        <p>
          {totalPrice} {t("le")}
        </p>
      </div>
      <div className="my-8">
        <MainBtn text="checkout" action={handleCheckoutClick} />
      </div>
    </div>
  );
};

export default CartTotal;
