import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsCart } from "react-icons/bs";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { FaHeart, FaStar } from "react-icons/fa";
import { addToCart } from "../../../store/cart";
import { useDispatch } from "react-redux";
const ProductCard = ({ data }) => {
  const { t } = useTranslation();
  const [activeColor, setActiveColor] = useState(null);
  const handleActiveColorClick = (i) => setActiveColor(i);
  const [colorError, setColorError] = useState("");
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (data?.colors?.length > 1 && activeColor === null) {
      setColorError(t("you need to choose a color first"));
      return;
    } else {
      setColorError("");
      dispatch(
        addToCart({
          ...data,
          selectedColor: data.colors[activeColor],
        })
      );
    }
  };
  return (
    <div className="border p-3 duration-300 hover:shadow-md">
      <img
        alt={data?.name}
        src={data?.image}
        loading="lazy"
        className="w-[95%] mx-auto"
      />
      {data?.rating?.sum ? (
        <div className="mb-3 flex items-center gap-1 flex-wrap text-redColor">
          <FaStar size={15} />
          <p>(${data?.rating?.avg})</p>
        </div>
      ) : (
        <div className="mb-3 flex items-center gap-1 flex-wrap text-redColor">
          <FaStar size={15} />
          <p>(5)</p>
        </div>
      )}
      <Link
        to={`/product/${data?.id}`}
        className=" inline-block font-semibold text-textColor mb-3 duration-300 hover:underline"
      >
        {data?.name?.substr(0, 20)}
        {data?.name?.length > 20 ? "..." : null}
      </Link>
      <div className="flex items-center gap-2 font-bold mb-3 text-nowrap flex-wrap">
        <p>
          {data?.hasOffer
            ? data?.offer?.priceAfterDiscount
            : data?.discount
            ? data.price_after_discount
            : data.price}{" "}
          {t("le")}
        </p>
        {data.discount && (
          <del className="text-redColor">
            {data.price} {t("le")}
          </del>
        )}
      </div>
      {data?.colors?.length ? (
        <div className="">
          <p className="font-semibold mb-2">{t("colors")} : </p>
          <div className="w-full flex items-center gap-2 flex-wrap mb-3">
            {data?.colors?.map((item, index) => (
              <p
                onClick={() => handleActiveColorClick(index)}
                key={index}
                className={`w-6 h-6 duration-300  border-2 border-slate-700  rounded-[50%] cursor-pointer ${
                  activeColor === index ? "scale-125" : ""
                }`}
                style={{
                  backgroundColor: `${item?.hex}`,
                }}
              ></p>
            ))}
          </div>
        </div>
      ) : null}
      <div className="flex items-center gap-2 flex-wrap">
        <div
          onClick={handleAddToCart}
          className="w-[30px] h-[30px] rounded-[50%] flex items-center justify-center text-white bg-redColor cursor-pointer duration-300 hover:scale-110"
        >
          <BsCart size={15} />
        </div>
        <Link
          to={`/product/${data?.id}`}
          className="w-[30px] h-[30px] rounded-[50%] flex items-center justify-center cursor-pointer text-white bg-black duration-300 hover:scale-110"
        >
          <AiOutlineEye size={15} />
        </Link>
        <div className="w-[30px] h-[30px] rounded-[50%] flex items-center justify-center cursor-pointer duration-300 hover:scale-110 bg-slate-600 text-white">
          {data?.is_wishlist ? (
            <FaHeart className="text-redColor" size={15} />
          ) : (
            <AiOutlineHeart size={15} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
