import React from "react";
import CartTable from "../components/cart/CartTable";
import { useSelector } from "react-redux";
import SingleBanner from "../components/common/banners/SingleBanner";
import banner from "../assets/عربية-التسوق.png";
import UserDashboardNavlinks from "../components/common/userDashboard/UserDashboardNavlinks";
import { tabTitle } from "../utils/tabTitle";
import Meta from "../components/common/seo/Meta";
const Whishlist = () => {
  const { cartItems } = useSelector((state) => state.cartSlice);
  return (
    <div>
      <Meta title={tabTitle("wishlist")} />
      <SingleBanner src={banner} alt="cart" />
      <div className="container mt-4 mb-4 md:mb-6 lg:mt-8 xl:mt-12">
        <div className="my-2 md:my-4 lg:my-6 xl:my-8">
          <UserDashboardNavlinks />
        </div>
        <CartTable cartItems={cartItems} />
      </div>
    </div>
  );
};

export default Whishlist;
