import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../../components/common/search/Search";
import { FaCartArrowDown, FaHeart, FaUser, FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useGlobalContext } from "../../context/GlobalContext";
import userImg from "../../assets/user-profile-icon-front-side-with-white-background.jpg";
import { useMutation } from "react-query";
import { handleLogout } from "../../services/auth/handleLogout";
import Swal from "sweetalert2";
import { logout } from "../../store/auth";
import { openCart } from "../../store/cart";
import SearchPage from "../../components/common/search/SearchPage";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cartSlice);
  const { t } = useTranslation();
  const { data } = useGlobalContext();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const handleShowLangMenu = () => setShowLangMenu(!showLangMenu);
  const navigate = useNavigate();
  const handleWhishlistNavigate = () => navigate("/whishlist");
  const { isLogin } = useSelector((state) => state.authSlice);
  const handleUserIconClick = () => {
    navigate("/login");
  };
  const [showAuthMenu, setShowAuthMenu] = useState(false);
  const toggleShowAuthMenu = () => setShowAuthMenu(!showAuthMenu);
  const dispatch = useDispatch();
  const { isLoading, mutate } = useMutation(handleLogout, {
    onSuccess: (data) => {
      if (data?.data?.key === "success") {
        Swal.fire({
          icon: "success",
          title: data?.data?.msg,
        }).then(() => {
          navigate("/");
          setShowAuthMenu(false);
          dispatch(logout());
          window.location.reload();
        });
      } else {
        Swal.fire({
          icon: "error",
          title: data?.data?.msg,
        });
      }
    },
    onError: (data) => {
      Swal.fire({
        icon: "error",
        title: data?.data?.msg,
      });
    },
  });
  const [showSearch, setShowSearch] = useState(false);
  const toggleShowSearch = () => setShowSearch(!showSearch);
  const handleLogoutClick = () => mutate();
  return (
    <>
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
            <FaSearch
              size={20}
              className=" lg:hidden cursor-pointer"
              onClick={toggleShowSearch}
            />
            {/*lang menu*/}
            {/* <div className="relative">
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
          </div> */}
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
            <div
              id="cart-icon"
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => dispatch(openCart())}
            >
              <p className="text-sm font-bold text-redColor">
                {cartItems.length}
              </p>
              <FaCartArrowDown size={20} />
            </div>
            {/* auth*/}
            {isLogin ? (
              <div className="relative">
                <div
                  className="w-[40px] h-[40px] rounded-[50%] cursor-pointer"
                  onClick={toggleShowAuthMenu}
                >
                  <img
                    alt={"profile"}
                    src={userImg}
                    className="w-full h-full rounded-[50%]"
                  />
                </div>
                <ul
                  className={`duration-300 absolute top-[25px] bg-white left-0 z-50 min-w-[120px] ${
                    showAuthMenu ? "block" : "hidden"
                  } p-2 text-start rounded-md border`}
                >
                  <li
                    className=" cursor-pointer mb-3 w-fit"
                    onClick={() => {
                      navigate("/my-account");
                      setShowAuthMenu(false);
                    }}
                  >
                    {t("my account")}
                  </li>
                  <li
                    className={`${
                      isLoading ? "cursor-not-allowed" : "cursor-pointer"
                    }  w-fit`}
                    onClick={() => {
                      handleLogoutClick();
                      setShowAuthMenu(false);
                    }}
                  >
                    {t("log out")}
                  </li>
                </ul>
              </div>
            ) : (
              <FaUser
                size={20}
                className=" cursor-pointer"
                onClick={handleUserIconClick}
              />
            )}
          </div>
        </div>
      </div>
      <SearchPage showSearch={showSearch} toggleShowSearch={toggleShowSearch} />
    </>
  );
};

export default Header;
