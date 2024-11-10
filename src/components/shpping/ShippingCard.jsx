import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAddress } from "../../store/shipping";
import { useLocation } from "react-router-dom";
const ShippingCard = ({ addressesPage }) => {
  const dispatch = useDispatch();
  const handleRemoveAddressClick = (v) => dispatch(removeAddress(v));
  const { addresses } = useSelector((state) => state.shippingSlice);
  const [activeIndex, setActiveIndex] = useState(null);
  const { pathname } = useLocation();
  useEffect(() => {
    if (addresses?.length === 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(null);
    }
  }, [addresses]);
  const handleActiveIndexClick = (v) => setActiveIndex(v);
  return (
    <div
      className={`w-full grid grid-cols-1 ${
        pathname === "/my-address"
          ? "md:grid-cols-2 lg:grid-cols-3"
          : "lg:grid-cols-2"
      }  gap-4 lg:gap-8 `}
    >
      {addresses?.map((item, index) => (
        <div
          className={`p-5 border rounded-md duration-300 bg-grayColor ${
            activeIndex === index && !addressesPage ? "border-redColor" : null
          }`}
        >
          <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
            <p>الإسم الأول :</p>
            <p className="font-bold">{item?.firstName}</p>
          </div>
          <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
            <p>الإسم الأخير :</p>
            <p className="font-bold">{item?.lastName}</p>
          </div>
          <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
            <p>رقم الهاتف :</p>
            <p className="font-bold">{item?.phone}</p>
          </div>
          <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
            <p>عنوان الشارع :</p>
            <p className="font-bold">{item?.address}</p>
          </div>
          <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
            <p>إسم المحافظة :</p>
            <p className="font-bold">{item?.government}</p>
          </div>
          <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
            <p>إسم المدينة :</p>
            <p className="font-bold">{item?.city}</p>
          </div>
          <div className="w-full flex items-center justify-between">
            {activeIndex === index || addressesPage ? (
              <div></div>
            ) : (
              <button
                className="border border-redColor px-6 py-2 flex items-center justify-center rounded-md text-redColor"
                onClick={() => handleActiveIndexClick(index)}
              >
                إشحن هنا
              </button>
            )}

            <div className="flex items-center gap-3 text-nowrap flex-wrap">
              <button className="text-blue-500">تعديل</button>
              <button
                onClick={() => handleRemoveAddressClick(item)}
                className="text-red-500"
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShippingCard;
