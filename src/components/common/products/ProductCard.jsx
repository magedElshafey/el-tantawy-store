import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsCart } from "react-icons/bs";
import { AiOutlineEye, AiOutlineHeart } from "react-icons/ai";
import { FaHeart, FaStar } from "react-icons/fa";

const ProductCard = ({ data }) => {
  console.log("data from product card", data);
  const { t } = useTranslation();
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
        <div className="flex items-center gap-2 flex-wrap mb-3">
          <p>{t("colors")} :</p>
          <div className="flex-1">
            {data?.colors?.map((item, index) => (
              <p
                className=" text-nowrap"
                key={index}
                style={{
                  color: `${item?.name === "أبيض" ? "" : item?.hex}`,
                }}
              >
                {item?.name}
              </p>
            ))}
          </div>
        </div>
      ) : null}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="w-[30px] h-[30px] rounded-[50%] flex items-center justify-center text-white bg-redColor cursor-pointer duration-300 hover:scale-110">
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
