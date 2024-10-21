import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import createSlug from "../../../utils/createSlug";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { mainColors, priceList } from "../../../data/data";
const Filter = ({ categories }) => {
  const { t } = useTranslation();
  const [showCategories, setShowCategories] = useState(true);
  const toggleShowCategories = () => setShowCategories(!showCategories);
  const [showColors, setShowColors] = useState(true);
  const toggleShowColors = () => setShowColors(!showColors);
  const [activeColor, setActiveColor] = useState(null);
  const handleActiveColorClick = (id) => setActiveColor(id);
  const [showPriceList, setShowPriceList] = useState(true);
  const toggleShowPriceList = () => setShowPriceList(!showPriceList);
  return (
    <div
      style={{
        userSelect: "none",
      }}
      className="w-full bg-white shadow-lg p-4"
    >
      <p className="font-medium text-base md:text-md lg:text-lg xl:text-xl pb-2 border-b border-slate-600   text-gray-500 ">
        {t("shop with")}
      </p>
      <div className="w-full mt-5">
        {categories?.length ? (
          <>
            <div className="w-full flex items-center justify-between">
              <p className="text-base md:text-md lg:text-lg font-bold ">
                {t("categories")}
              </p>
              {showCategories ? (
                <IoIosArrowDown
                  size={20}
                  onClick={toggleShowCategories}
                  className=" cursor-pointer"
                />
              ) : (
                <IoIosArrowUp
                  size={20}
                  onClick={toggleShowCategories}
                  className=" cursor-pointer"
                />
              )}
            </div>
            {showCategories ? (
              <ul className="mt-3">
                {categories?.map((item, index) => (
                  <li key={index} className="mb-3">
                    <Link
                      key={index}
                      to={`/category/${createSlug(item?.name)}`}
                      state={{
                        categoryId: item?.id,
                        categoryName: item?.name,
                      }}
                      className=" duration-300 hover:underline"
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        ) : null}
        {mainColors?.length ? (
          <>
            <div className="w-full flex items-center justify-between mt-5">
              <p className="text-base md:text-md lg:text-lg font-bold ">
                {t("main colors")}
              </p>
              {showColors ? (
                <IoIosArrowDown
                  size={20}
                  onClick={toggleShowColors}
                  className=" cursor-pointer"
                />
              ) : (
                <IoIosArrowUp
                  size={20}
                  onClick={toggleShowColors}
                  className=" cursor-pointer"
                />
              )}
            </div>
            {showColors ? (
              <ul className="mt-3 flex items-center gap-1 flex-wrap">
                {mainColors?.map((item, index) => (
                  <li
                    onClick={() => handleActiveColorClick(item?.id)}
                    key={index}
                    className={`w-6 h-6 duration-300  border-2 border-slate-700  rounded-[50%] cursor-pointer ${
                      activeColor === item?.id ? "scale-125" : ""
                    }`}
                    style={{
                      backgroundColor: `${item?.color}`,
                    }}
                  ></li>
                ))}
              </ul>
            ) : null}
          </>
        ) : null}
        {priceList?.length ? (
          <>
            <div className="w-full flex items-center justify-between mt-5">
              <p className="text-base md:text-md lg:text-lg font-bold ">
                {t("price")}
              </p>
              {showPriceList ? (
                <IoIosArrowDown
                  size={20}
                  onClick={toggleShowPriceList}
                  className=" cursor-pointer"
                />
              ) : (
                <IoIosArrowUp
                  size={20}
                  onClick={toggleShowPriceList}
                  className=" cursor-pointer"
                />
              )}
            </div>
            {showPriceList ? (
              <ul className="mt-3 flex items-center gap-1 flex-wrap">
                {priceList?.map((item, index) => (
                  <li className="mb-3 flex items-center gap-2" key={index}>
                    <input type="radio" name="price" id={item?.title} />
                    <label htmlFor={item?.title}>{t(item.title)}</label>
                  </li>
                ))}
              </ul>
            ) : null}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Filter;
