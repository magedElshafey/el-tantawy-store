import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState("");
  const [showDropDown, setShowDropDown] = useState(false);
  const handleKeywordChange = (e) => {
    const value = e.target.value;
    setKeyword(value);
    if (!keyword.trim()) {
      setShowDropDown(false);
    } else {
      setShowDropDown(true);
    }
  };
  return (
    <div className="relative  border border-black ">
      <div className="w-full flex items-center justify-between gap-8">
        <input
          className="flex-1 bg-transparent border-none focus:outline-none px-2"
          placeholder={t("search")}
          value={keyword}
          onChange={handleKeywordChange}
        />
        <button className="flex items-center justify-center bg-blackColor text-white w-12 h-12 font-bold">
          <CiSearch size={20} />
        </button>
      </div>
      <div
        className={` duration-300 absolute bottom-0 left-0 w-full p-3 rounded-md shadow-md z-50 ${
          showDropDown ? "block" : "hidden"
        }`}
      >
        <p>dfsdf</p>
      </div>
    </div>
  );
};

export default Search;
