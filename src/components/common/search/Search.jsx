import React from "react";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";

const Search = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full border border-black flex items-center justify-between gap-8">
      <input
        className="flex-1 bg-transparent border-none focus:outline-none px-2"
        placeholder={t("search")}
      />
      <button className="flex items-center justify-center bg-blackColor text-white w-12 h-12 font-bold">
        <CiSearch size={20} />
      </button>
    </div>
  );
};

export default Search;
