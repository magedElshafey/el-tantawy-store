import React, { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { CiSearch } from "react-icons/ci";
import { useQuery } from "react-query";
import { getAllProducts } from "../../../services/product/getAllProducts";
import _ from "lodash";
import { Link } from "react-router-dom";
const Search = ({ toggleShowSearch }) => {
  const { t } = useTranslation();
  const [keyword, setKeyword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const handleKeyWordChange = (e) => {
    setKeyword(e.target.value);
    debounceSearch(e.target.value);
  };
  const debounceSearch = useCallback(
    _.debounce((value) => {
      if (value.trim()) {
        setShowDropdown(true);
        refetch();
      } else {
        setShowDropdown(false);
      }
    }, 500),
    []
  );
  const { isLoading, data, refetch } = useQuery(
    ["products", keyword],
    () => getAllProducts(keyword),
    {
      enabled: false,
    }
  );
  return (
    <div className="relative  border border-black ">
      <div className="w-full flex items-center justify-between gap-8">
        <input
          className="flex-1 bg-transparent border-none focus:outline-none px-2"
          placeholder={t("search")}
          value={keyword}
          onChange={handleKeyWordChange}
        />
        <button className="flex items-center justify-center bg-blackColor text-white w-12 h-12 font-bold">
          <CiSearch size={20} />
        </button>
      </div>
      {showDropdown && (
        <div className="absolute w-full mt-2 top-[35px] left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto z-10">
          {isLoading ? (
            <div className="flex justify-center items-center p-4">
              <div className="w-6 h-6 border-4 border-redColor border-t-transparent border-solid rounded-full animate-spin"></div>
            </div>
          ) : (
            <ul>
              {data?.data?.data?.products.length ? (
                data?.data?.data?.products?.map((item) => (
                  <li
                    key={item.id}
                    className="p-2 hover:bg-gray-100 cursor-pointer"
                  >
                    <Link
                      onClick={() => {
                        setShowDropdown(false);
                        setKeyword("");
                        if (toggleShowSearch) {
                          toggleShowSearch();
                        }
                      }}
                      to={`/product/${item?.id}`}
                      className="block w-full"
                    >
                      {item?.name}
                    </Link>
                  </li>
                ))
              ) : (
                <li className="p-2 text-gray-500">{t("No results found")}</li>
              )}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
