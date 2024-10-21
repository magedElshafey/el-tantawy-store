import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../components/common/search/Search";
import {
  FaGlobe,
  FaCartArrowDown,
  FaHeart,
  FaUser,
  FaSearch,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useGlobalContext } from "../../context/GlobalContext";
const Header = () => {
  const { t, i18n } = useTranslation();
  const { data } = useGlobalContext();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const handleShowLangMenu = () => setShowLangMenu(!showLangMenu);
  const navigate = useNavigate();
  const handleWhishlistNavigate = () => navigate("/whishlist");
  const { isLogin } = useSelector((state) => state.authSlice);
  const handleUserIconClick = () => {
    if (isLogin) {
      navigate("/my-account");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="container bg-white ">
      <div className="flex items-center justify-between gap-8">
        <Link to="/">
          <img
            alt="logo"
            src={data?.site?.logo}
            className="w-[100px] h-[100px] md:w-[150px] md:h-[130px] "
          />
        </Link>
        <div className="hidden lg:block flex-1">
          <Search />
        </div>
        <div className="flex items-center gap-2 lg:gap-3 text-textColor">
          {/**search*/}
          <FaSearch size={20} className=" lg:hidden cursor-pointer" />
          {/*lang menu*/}
          <div className="relative">
            <FaGlobe
              onClick={handleShowLangMenu}
              size={20}
              className="cursor-pointer"
            />
            <ul
              className={`duration-300 absolute top-[25px] bg-white left-0 z-50 min-w-[120px] ${
                showLangMenu ? "block" : "hidden"
              } p-2 text-start rounded-md border`}
            >
              <li
                className=" cursor-pointer mb-3 w-fit"
                onClick={() => {
                  i18n.changeLanguage("ar");
                  setShowLangMenu(false);
                  window.location.reload();
                }}
              >
                {t("ar")}
              </li>
              <li
                className=" cursor-pointer  w-fit"
                onClick={() => {
                  i18n.changeLanguage("en");
                  setShowLangMenu(false);
                  window.location.reload();
                }}
              >
                {t("en")}
              </li>
            </ul>
          </div>
          {/*whish list*/}
          <div className="flex items-center gap-1">
            <p className="text-sm font-bold text-redColor">0</p>
            <FaHeart
              onClick={handleWhishlistNavigate}
              size={20}
              className="cursor-pointer"
            />
          </div>
          {/**cart */}
          <div className="flex items-center gap-1">
            <p className="text-sm font-bold text-redColor">0</p>
            <FaCartArrowDown
              onClick={handleWhishlistNavigate}
              size={20}
              className="cursor-pointer"
            />
          </div>
          {/* auth*/}
          <FaUser
            size={20}
            className=" cursor-pointer"
            onClick={handleUserIconClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
