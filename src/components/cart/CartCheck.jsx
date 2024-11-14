import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import MainBtn from "../common/buttons/MainBtn";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
const CartCheck = ({ totalPrice, btnText, btnPath, action }) => {
  const { t } = useTranslation();
  const discount = 50;
  const navigate = useNavigate();
  const { isLogin } = useSelector((state) => state.authSlice);
  const handleNavigate = () => {
    if (isLogin) {
      navigate(btnPath);
    } else {
      Swal.fire({
        icon: "warning",
        title: t("you need to login"),
        showCancelButton: true,
        confirmButtonColor: "#de0712",
        cancelButtonColor: "#000",
        confirmButtonText: t("login"),
        cancelButtonText: t("cancel"),
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/login");
        } else {
          return;
        }
      });
    }
  };
  return (
    <div className="w-full border-2 py-6 px-5 rounded-md">
      <p className="text-base md:text-md lg:text-lg font-bold mb-6 md:mb-8">
        {t("cart total")}
      </p>
      <div className="w-full flex items-center justify-between pb-5 mb-2 border-b">
        <p className=" font-semibold">{t("total")} :</p>
        <p>
          {totalPrice} {t("le")}
        </p>
      </div>
      <div className="w-full  pb-5 mb-2 border-b">
        <p className=" font-semibold mb-3">{t("shipping")}</p>
        <p className="text-slate-500">
          {t("Shipping options will be updated during checkout.")}
        </p>
      </div>
      <div className="w-full flex items-center justify-between pb-5 mb-2 border-b">
        <p className=" font-semibold">{t("discount")} :</p>
        <p>
          {discount} {t("le")}
        </p>
      </div>
      <div className="w-full flex items-center justify-between pb-5 mb-2 border-b">
        <p className=" font-semibold">{t("total price after discount")} :</p>
        <p>
          {totalPrice - discount} {t("le")}
        </p>
      </div>
      <div className="w-full flex items-center justify-between my-6 md:my-8">
        <p className=" font-semibold">{t("net price")} :</p>
        <p className="text-base md:text-md lg:text-lg xl:text-xl font-bold">
          {totalPrice - discount} {t("le")}
        </p>
      </div>
      {btnText ? (
        <MainBtn action={action ? action : handleNavigate} text={btnText} />
      ) : null}
    </div>
  );
};

export default CartCheck;
