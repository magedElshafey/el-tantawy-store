import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeCart } from "../../store/cart";
import { IoMdClose } from "react-icons/io";
import CartCounter from "./CartCounter";
import CartItems from "./CartItems";
import CartEmpty from "./CartEmpty";
import CartTotal from "./CartTotal";
import ClearCart from "./ClearCart";
const CartSidebar = () => {
  const { isCartOpen, cartItems } = useSelector((state) => state.cartSlice);
  const dispatch = useDispatch();
  const totalPrice = cartItems.reduce((acc, product) => {
    acc += product.hasOffer
      ? +product.offer?.priceAfterDiscount * +product.quantity
      : product.discount
      ? +product.price_after_discount * +product.quantity
      : +product.price * +product.quantity;
    return acc;
  }, 0);
  return (
    <div
      className={`fixed py-4 px-5 top-0 h-screen overflow-y-scroll bg-white shadow-lg w-[95%] md:w-[400px] lg:w-[500px] duration-300 z-50 ${
        isCartOpen ? "left-0" : "left-[-300%]"
      }`}
    >
      <div className="flex items-center justify-between mb-5">
        <CartCounter itemsNumber={cartItems?.length} />
        <IoMdClose
          size={20}
          className=" duration-300 cursor-pointer hover:scale-125"
          onClick={() => dispatch(closeCart())}
        />
      </div>
      {cartItems?.length ? (
        <>
          <CartItems items={cartItems} />
          <CartTotal totalPrice={totalPrice} />
          <ClearCart />
        </>
      ) : (
        <CartEmpty />
      )}
    </div>
  );
};

export default CartSidebar;
