import React, { useState } from "react";
import CartTable from "../components/cart/CartTable";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import CartCheck from "../components/cart/CartCheck";
import SingleBanner from "../components/common/banners/SingleBanner";
import banner from "../assets/عربية-التسوق.png";
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cartSlice);
  const { t } = useTranslation();
  const [copon, setCopon] = useState("");
  const handleCoponChange = (e) => {
    setCopon(e.target.value);
  };
  const totalPrice = cartItems.reduce((acc, product) => {
    acc += product.hasOffer
      ? +product.offer?.priceAfterDiscount * +product.quantity
      : product.discount
      ? +product.price_after_discount * +product.quantity
      : +product.price * +product.quantity;
    return acc;
  }, 0);
  return (
    <div>
      <SingleBanner src={banner} alt="cart" />
      <div className="container mt-4 mb-4 md:mb-6 lg:mt-8 xl:mt-12">
        <div className="w-full flex gap-4 md:gap-6 lg:gap-8 flex-col md:flex-row">
          <div className="w-full md:w-3/4">
            <CartTable cartItems={cartItems} />
            <div className="mt-4 md:mt-6 lg:mt-8  w-full flex items-center  flex-wrap gap-3">
              <input
                className="px-6 py-2 border border-redColor w-[44%] md:w-fit focus:outline-none rounded-sm"
                placeholder={t("kopon")}
                value={copon}
                onChange={handleCoponChange}
              />
              <button
                disabled={!copon.trim()}
                className={`px-6 py-2 flex items-center w-1/2 md:w-fit justify-center bg-black text-white duration-300  ${
                  !copon.trim()
                    ? "cursor-not-allowed bg-opacity-35"
                    : "bg-opacity-100 cursor-pointer hover:bg-white border border-black hover:text-black"
                }`}
              >
                {t("use the copon")}
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/4">
            <CartCheck totalPrice={totalPrice} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
