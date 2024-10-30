import React from "react";
import { IoClose } from "react-icons/io5";
import Search from "./Search";
const SearchPage = ({ showSearch, toggleShowSearch }) => {
  return (
    <div
      className={`fixed  left-0 w-screen h-screen duration-300 bg-white z-[5000] py-4 lg:hidden ${
        showSearch ? "top-0" : "top-[-400%]"
      }`}
    >
      <div className="container">
        <IoClose
          size={20}
          className=" cursor-pointer"
          onClick={toggleShowSearch}
        />
        <div className="mt-5">
          <Search toggleShowSearch={toggleShowSearch} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
