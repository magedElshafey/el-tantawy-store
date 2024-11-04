import React from "react";
import Meta from "../components/common/seo/Meta";
import Header from "../layout/website/Header";
import Footer from "../layout/website/Footer";
import Lottie from "react-lottie";
import * as animationData from "../assets/Animation - 1730707580917.json";
import FixedBtn from "../components/common/buttons/FixedBtn";
import CartSidebar from "../components/cart/CartSidebar";
import CategoryHeader from "../layout/website/CategoryHeader";
import MainBtn from "../components/common/buttons/MainBtn";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const action = () => navigate("/");
  return (
    <div>
      <Meta />
      <FixedBtn />
      <CartSidebar />
      <Header />
      <CategoryHeader />
      <div className="container my-4 md:my-6 lg:my-8 xl:my-12">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <div className="w-full md:w-[350px] lg:w-[550px]">
            <Lottie isClickToPauseDisabled options={defaultOptions} />
          </div>
          <div className="flex items-center justify-center flex-wrap gap-4 text-nowrap">
            <div className="w-full md:w-[180px]">
              <MainBtn text="back to home" action={action} />
            </div>
            <div className="w-full md:w-[180px]">
              <button
                onClick={() => navigate(-1)}
                className="p-3 flex items-center justify-center bg-[#f3f3f3f3] w-full"
              >
                {t("back")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
