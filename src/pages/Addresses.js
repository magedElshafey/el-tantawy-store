import React from "react";
import SingleBanner from "../components/common/banners/SingleBanner";
import banner from "../assets/عربية-التسوق.png";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import ShippingForm from "../components/shpping/ShippingForm";
import ShippingCard from "../components/shpping/ShippingCard";
import MainBtn from "../components/common/buttons/MainBtn";
import { openAddressForm, closeAddressesForm } from "../store/shipping";
import { IoIosClose } from "react-icons/io";
import UserDashboardNavlinks from "../components/common/userDashboard/UserDashboardNavlinks";
const Addresses = () => {
  const dispatch = useDispatch();
  const handleAddAddressButtonClick = () => dispatch(openAddressForm());
  const handleCloseAddressForm = () => dispatch(closeAddressesForm());
  const { addresses, isAddressesFormOpen } = useSelector(
    (state) => state.shippingSlice
  );
  const { t } = useTranslation();
  return (
    <div>
      <SingleBanner src={banner} alt="cart" />
      <div className="container mt-4 mb-4 md:mb-6 lg:mt-8 xl:mt-12">
        <div className="my-2 md:my-4 lg:my-6 xl:my-8">
          <UserDashboardNavlinks />
        </div>
        {addresses?.length ? (
          <div>
            <ShippingCard addressesPage={true} />

            <div className="w-[180px] mt-8">
              <MainBtn
                text="+ add address"
                action={handleAddAddressButtonClick}
              />
            </div>
          </div>
        ) : (
          <div>
            <p className="text-base md:text-md lg:text-lg mb-4 font-bold text-redColor">
              {t("enter the shipping address")}
            </p>

            <ShippingForm inOverLay={false} />
          </div>
        )}
      </div>
      <div
        className={`duration-300 fixed left-0 ${
          isAddressesFormOpen ? "top-0" : "top-[-400%]"
        } w-screen h-screen bg-black bg-opacity-35 z-[2000] flex items-center justify-center`}
      >
        <div className="container">
          <div className="bg-white p-6 w-full md:w-[450px] lg:w-[650px] xl:w-[750px]  border mx-auto">
            <div
              className="mb-8 w-8 h-8 bg-redColor text-white cursor-pointer flex items-center justify-center"
              onClick={handleCloseAddressForm}
            >
              <IoIosClose size={20} />
            </div>
            <ShippingForm inOverLay={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addresses;
