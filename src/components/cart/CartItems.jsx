import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { increaseQTY, decreaseQTY, removeFromCart } from "../../store/cart";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { MdDeleteForever } from "react-icons/md";

const CartItems = ({ items }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <div>
      {items?.map((item, index) => (
        <div
          key={index}
          className={`mb-3 pb-3  ${
            index === items?.length - 1 ? "" : "border-b border-b-slate-300"
          }`}
        >
          <div className="flex items-center justify-between flex-col md:flex-row gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 flex items-center flex-col md:flex-row gap-2">
              <div className="w-[100px] h-[100px]">
                <img
                  alt={item?.name}
                  loading="lazy"
                  src={item?.image}
                  className="w-full h-full"
                />
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-2">{item?.name}</p>
                <div className="flex items-center gap-2 mb-3">
                  <p>{t("colors")} :</p>
                  <p
                    style={{
                      color: `${
                        item?.selectedColor
                          ? item?.selectedColor?.hex
                          : item?.colors[0]?.hex
                      }`,
                    }}
                  >
                    {item?.selectedColor
                      ? item?.selectedColor?.name
                      : item?.colors[0]?.name}
                  </p>
                </div>
                <div className="w-full p-3 flex items-center justify-center gap-5 border border-slate-300 rounded-md">
                  <FiPlus
                    size={15}
                    className=" cursor-pointer"
                    onClick={() => dispatch(increaseQTY(item))}
                  />
                  <p className="font-bold">{item?.quantity}</p>
                  <AiOutlineMinus
                    size={15}
                    className=" cursor-pointer"
                    onClick={() => dispatch(decreaseQTY(item))}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold mb-3">
                {item?.hasOffer
                  ? item?.offer?.priceAfterDiscount
                  : item?.discount
                  ? item.price_after_discount
                  : item.price}{" "}
                {t("le")} * {item.quantity}
              </p>
              <MdDeleteForever
                size={30}
                className=" cursor-pointer text-redColor"
                onClick={() => dispatch(removeFromCart(item))}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
