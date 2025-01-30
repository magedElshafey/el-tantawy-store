import React, { useState } from "react";
import UserDashboardNavlinks from "../components/common/userDashboard/UserDashboardNavlinks";
import userImg from "../assets/user-profile-icon-front-side-with-white-background.jpg";
import MainInput from "../components/common/inputs/MainInput";
import MainBtn from "../components/common/buttons/MainBtn";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { handleLogout } from "../services/auth/handleLogout";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/auth";
import usePasswordValidation from "../hooks/validation/usePasswordValidation";
import useTextInputValidation from "../hooks/validation/useTextInputValidation";
import useNumberInput from "../hooks/validation/useNumberInput";
import LoadingBtn from "../components/common/buttons/LoadingBtn";
import { tabTitle } from "../utils/tabTitle";
import Meta from "../components/common/seo/Meta";
const MyAccount = () => {
  const { t } = useTranslation();
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(handleLogout, {
    onSuccess: (data) => {
      if (data?.data?.key === "success") {
        Swal.fire({
          icon: "success",
          title: data?.data?.msg,
        }).then(() => {
          navigate("/");

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
  const handleLogoutClick = () => mutate();
  const {
    password,
    error: passwordError,
    handleChange: handlePasswordChange,
    setPassword,
  } = usePasswordValidation();
  const [email, setEmail] = useState("");
  const {
    value: name,
    error: nameError,
    handleChange: handleNameChange,
    setValue: setName,
  } = useTextInputValidation();
  const {
    value: phone,
    error: phoneError,
    handleChange: handlePhoneChange,
    setValue: setPhone,
  } = useNumberInput();
  const [user_name, setUserName] = useState("");
  const handleUserNameChange = (e) => setUserName(e.target.value);
  return (
    <div className="container mt-4">
      <Meta title={tabTitle("my-account")} />
      <UserDashboardNavlinks />
      <div className="my-4 md:my-6 lg:my-8 xl:my-12 bg-white shadow-md rounded-md p-5">
        <div className="flex items-center gap-4 flex-col md:flex-row mb-4 ">
          <div className="w-[100px] h-[100px] rounded-[50%]">
            <img
              alt={user?.name}
              src={userImg}
              className="w-full h-full rounded-[50%]"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="font-bold">{user?.name}</p>
            <p className="text-slate-500 lowercase">{user?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4">
          <div>
            <MainInput type="text" value={user?.name} label="name" />
          </div>
          <div>
            <MainInput type="text" value={user?.user_name} label="user name" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <div>
            <MainInput type="email" value={user?.email} label="email" />
          </div>
          <div>
            <MainInput type="number" value={"0" + user?.phone} label="phone" />
          </div>
        </div>
        <div className="w-full flex justify-center mb-8 lg:mb-12">
          <div className="w-full md:w-[180px]">
            <MainBtn text="save changes" />
          </div>
        </div>
        <p className="mb-4 font-bold text-redColor text-md md:text-lg lg:text-xl">
          {t("change password")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <div>
            <MainInput type="password" label="current password" />
          </div>
          <div>
            <MainInput type="password" label="new password" />
          </div>
        </div>
        <div className="w-full flex justify-center mb-8 lg:mb-12">
          <div className="w-full md:w-[180px]">
            <MainBtn text="change password" />
          </div>
        </div>
        <div className="w-full flex items-center justify-end flex-wrap gap-3">
          <button
            disabled={isLoading}
            onClick={handleLogoutClick}
            className="w-full md:w-[180px] flex items-center justify-center text-black bg-white border border-black p-3 duration-300 hover:bg-black hover:text-white hover:border-white"
          >
            {t("log out")}
          </button>
          <button className="w-full md:w-[180px] p-3 flex items-center justify-center text-white bg-redColor duration-300 hover:bg-white hover:text-redColor hover:border hover:border-redColor">
            {t("delete account")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
