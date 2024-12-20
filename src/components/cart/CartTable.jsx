import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQTY, decreaseQTY } from "../../store/cart";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { Link } from "react-router-dom";

const CartTable = ({ cartItems }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 text-center text-nowrap">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase">
              {t("product")}
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase">
              {t("product quantity")}
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase">
              {t("product price")}
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase">
              {t("total price")}
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase">
              {t("delete product")}
            </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100">
              <td className="px-6 py-4 border-gray-200 flex items-center gap-2">
                <img
                  className="w-12 h-12 rounded object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <Link to={`/product/${item.id}`} className="text-gray-700">
                  {item.name}
                </Link>
              </td>
              <td className="px-6 py-4 text-gray-700">
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => dispatch(decreaseQTY(item))}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <AiOutlineMinus />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => dispatch(increaseQTY(item))}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FiPlus />
                  </button>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-700">
                {item.hasOffer
                  ? item.offer.priceAfterDiscount
                  : item.discount
                  ? item.price_after_discount
                  : item.price}{" "}
                {t("le")}
              </td>
              <td className="px-6 py-4 text-gray-700">
                {(item.hasOffer
                  ? item.offer.priceAfterDiscount
                  : item.discount
                  ? item.price_after_discount
                  : item.price) * item.quantity}
                {t("le")}
              </td>
              <td className="px-6 py-4">
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="text-red-600 hover:text-red-800 font-semibold"
                >
                  {t("delete")}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
