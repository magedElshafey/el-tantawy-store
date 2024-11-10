import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAddress, editAddress } from "../../store/shipping";
import { IoIosClose } from "react-icons/io";
import { useLocation } from "react-router-dom";
import useTextInputValidation from "../../hooks/validation/useTextInputValidation";
import useNumberInput from "../../hooks/validation/useNumberInput";
import MainInput from "../common/inputs/MainInput";
import MainSelect from "../common/inputs/MainSelect";
import MainBtn from "../common/buttons/MainBtn";
import Swal from "sweetalert2";
const ShippingCard = ({ addressesPage }) => {
  const dispatch = useDispatch();
  const handleRemoveAddressClick = (v) => dispatch(removeAddress(v));
  const { addresses } = useSelector((state) => state.shippingSlice);
  const [activeIndex, setActiveIndex] = useState(null);
  const { pathname } = useLocation();
  const [showEditForm, setShowEditForm] = useState(false);
  const toggleShowEditForm = () => setShowEditForm(!showEditForm);
  useEffect(() => {
    if (addresses?.length === 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(null);
    }
  }, [addresses]);
  const handleActiveIndexClick = (v) => setActiveIndex(v);
  const {
    value: firstName,
    error: firstNameError,
    handleChange: handleFirstNameChange,
    setValue: setFirstName,
  } = useTextInputValidation();
  const {
    value: lastName,
    error: lastNameError,
    handleChange: handleLastNameChange,
    setValue: setLastName,
  } = useTextInputValidation();
  const {
    value: phone,
    error: phoneError,
    handleChange: handlePhoneChange,
    setValue: setPhone,
  } = useNumberInput();
  const [address, setAddress] = useState("");
  const handleAddressChange = (e) => setAddress(e.target.value);
  const [government, setGovernment] = useState("");
  const handleGovernmentChange = (opt) => setGovernment(opt?.id);
  const [city, setCity] = useState("");
  const handleCityChange = (opt) => setCity(opt.id);
  const governments = [
    {
      id: 1,
      name: "الدقهلية",
    },
    {
      id: 2,
      name: "الإسكندرية",
    },
    {
      id: 3,
      name: "القاهرة",
    },
    {
      id: 4,
      name: "الجيزة",
    },
    {
      id: 5,
      name: "أسوان",
    },
  ];
  const cities = [
    {
      id: 1,
      name: "طلخا",
    },
    {
      id: 2,
      name: "المنصورة",
    },
    {
      id: 3,
      name: "محطة الرمل",
    },
    {
      id: 4,
      name: "الخيرية",
    },
    {
      id: 5,
      name: "كيما",
    },
  ];
  return (
    <>
      <div
        className={`w-full grid grid-cols-1 ${
          pathname === "/my-address"
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "lg:grid-cols-2"
        }  gap-4 lg:gap-8 `}
      >
        {addresses?.map((item, index) => (
          <div
            className={`p-5 border rounded-md duration-300 bg-grayColor ${
              activeIndex === index && !addressesPage ? "border-redColor" : null
            }`}
          >
            <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
              <p>الإسم الأول :</p>
              <p className="font-bold">{item?.firstName}</p>
            </div>
            <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
              <p>الإسم الأخير :</p>
              <p className="font-bold">{item?.lastName}</p>
            </div>
            <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
              <p>رقم الهاتف :</p>
              <p className="font-bold">{item?.phone}</p>
            </div>
            <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
              <p>عنوان الشارع :</p>
              <p className="font-bold">{item?.address}</p>
            </div>
            <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
              <p>إسم المحافظة :</p>
              <p className="font-bold">{item?.government}</p>
            </div>
            <div className="flex items-center gap-2 mb-5 text-nowrap flex-wrap">
              <p>إسم المدينة :</p>
              <p className="font-bold">{item?.city}</p>
            </div>
            <div className="w-full flex items-center justify-between">
              {activeIndex === index || addressesPage ? (
                <div></div>
              ) : (
                <button
                  className="border border-redColor px-6 py-2 flex items-center justify-center rounded-md text-redColor"
                  onClick={() => handleActiveIndexClick(index)}
                >
                  إشحن هنا
                </button>
              )}

              <div className="flex items-center gap-3 text-nowrap flex-wrap">
                <button onClick={toggleShowEditForm} className="text-blue-500">
                  تعديل
                </button>
                <button
                  onClick={() => handleRemoveAddressClick(item)}
                  className="text-red-500"
                >
                  حذف
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`duration-300 fixed left-0 ${
          showEditForm ? "top-0" : "top-[-400%]"
        } w-screen h-screen bg-black bg-opacity-35 z-[2000] flex items-center justify-center`}
      >
        <div className="container">
          <div className="bg-white p-6 w-full md:w-[450px] lg:w-[650px] xl:w-[750px]  border mx-auto">
            <div
              className="mb-8 w-8 h-8 bg-redColor text-white cursor-pointer flex items-center justify-center"
              onClick={toggleShowEditForm}
            >
              <IoIosClose size={20} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6 lg:mb-8">
              <div>
                <MainInput
                  type="text"
                  label="first name"
                  onChange={handleFirstNameChange}
                  error={firstNameError}
                  value={
                    firstName ? firstName : addresses[activeIndex]?.firstName
                  }
                />
              </div>
              <div>
                <MainInput
                  type="text"
                  label="last name"
                  error={lastNameError}
                  value={lastName ? lastName : addresses[activeIndex]?.lastName}
                  onChange={handleLastNameChange}
                />
              </div>
              <div>
                <MainInput
                  type="number"
                  label="phone"
                  value={phone ? phone : addresses[activeIndex]?.phone}
                  onChange={handlePhoneChange}
                  error={phoneError}
                />
              </div>
              <div>
                <MainInput
                  type="text"
                  label="address street"
                  value={address ? address : addresses[activeIndex]?.address}
                  onChange={handleAddressChange}
                />
              </div>
              <div>
                <MainSelect
                  options={governments}
                  value={
                    government
                      ? governments?.find((item) => item?.id === government)
                          ?.name
                      : addresses[activeIndex]?.government
                  }
                  onSelect={handleGovernmentChange}
                  label="government name"
                />
              </div>
              <div>
                <MainSelect
                  options={cities}
                  value={
                    city
                      ? cities?.find((item) => item?.id === city)?.name
                      : addresses[activeIndex]?.city
                  }
                  onSelect={handleCityChange}
                  label="city name"
                />
              </div>
            </div>
            <div className="w-full flex justify-center">
              <div className="w-[200px]">
                <MainBtn
                  text="edit"
                  action={() => dispatch(editAddress(addresses[activeIndex]))}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingCard;
