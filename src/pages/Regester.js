import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MainInput from "../components/common/inputs/MainInput";
import usePasswordValidation from "../hooks/validation/usePasswordValidation";
import useTextInputValidation from "../hooks/validation/useTextInputValidation";
import { Link, useNavigate } from "react-router-dom";
import useNumberInput from "../hooks/validation/useNumberInput";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import { regester } from "../services/auth/regester";
import MainBtn from "../components/common/buttons/MainBtn";
import LoadingBtn from "../components/common/buttons/LoadingBtn";
import regesterImg from "../assets/register.png";
const Regester = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
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
  const { isLoading, mutate } = useMutation(regester, {
    onSuccess: (data) => {
      if (data?.data?.key === "success") {
        Swal.fire({
          icon: "success",
          title: data?.data?.msg,
        });
        localStorage.setItem("active-email", JSON.stringify(email));
        navigate("/verfiy-email");
        setName("");
        setUserName("");
        setPhone("");
        setEmail("");
        setPassword("");
      } else {
        Swal.fire({
          icon: "error",
          title: data?.data?.msg,
        });
      }
    },
    onError: (data) => {},
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name.trim() &&
      !user_name.trim() &&
      !phone.trim() &&
      !email.trim() &&
      !password.trim()
    ) {
      return;
    } else if (!name.trim()) {
      Swal.fire({
        icon: "error",
        title: t("name field is required"),
      });
      return;
    } else if (!user_name.trim()) {
      Swal.fire({
        icon: "error",
        title: t("user name field is required"),
      });
      return;
    } else if (!phone.trim()) {
      Swal.fire({
        icon: "error",
        title: t("phone field is required"),
      });
      return;
    } else if (!email.trim()) {
      Swal.fire({
        icon: "error",
        title: t("email field is required"),
      });
      return;
    } else if (!password.trim()) {
      Swal.fire({
        icon: "error",
        title: t("password field is required"),
      });
      return;
    } else if (nameError || phoneError || passwordError) {
      return;
    } else {
      const data = {
        name,
        user_name,
        email,
        password,
        phone,
        lang: i18n.language,
      };
      mutate(data);
    }
  };
  return (
    <div className="container my-8">
      <div className="flex flex-col-reverse md:flex-row items-center  gap-6 md:gap-8 lg:gap-12">
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <p className="text-md md:text-lg lg:text-xl font-bold mb-3 text-redColor">
              {t("create an El-Tantawy Account")}
            </p>
            <p className=" font-semibold mb-6">
              {t(
                "From your profile, you will find all information connected to your account. And it’s free to join!"
              )}
            </p>
            <p className=" text-slate-600 flex items-center gap-1">
              <p>{t("Already have an account?")}</p>
              <Link to="/login" className=" underline">
                {t("login")}
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <MainInput
                type="text"
                label="name"
                value={name}
                onChange={handleNameChange}
                error={nameError}
              />
            </div>
            <div className="my-4">
              <MainInput
                type="text"
                label="user name"
                value={user_name}
                onChange={handleUserNameChange}
              />
            </div>

            <div className="my-4">
              <MainInput
                type="number"
                label="phone"
                value={phone}
                onChange={handlePhoneChange}
                error={phoneError}
              />
            </div>
            <div className="my-4">
              <MainInput
                type="email"
                label="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <MainInput
              type="password"
              label="password"
              value={password}
              onChange={handlePasswordChange}
              error={passwordError}
            />

            <div className="my-6 w-full md:w-1/2 mx-auto">
              {isLoading ? (
                <LoadingBtn />
              ) : (
                <MainBtn type="submit" text="create account" />
              )}
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/2 h-[200px] md:h-[300px] lg:h-[400px]">
          <img alt="login" src={regesterImg} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Regester;
