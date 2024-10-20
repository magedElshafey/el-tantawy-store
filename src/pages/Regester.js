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
      console.log("data from sign up", data);
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
    onError: (data) => {
      console.log("data from sign up error", data);
    },
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
        <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <div>
            <MainInput
              type="text"
              label="name"
              value={name}
              onChange={handleNameChange}
              error={nameError}
            />
          </div>
          <div>
            <MainInput
              type="text"
              label="user name"
              value={user_name}
              onChange={handleUserNameChange}
            />
          </div>
        </div>

        <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          <div>
            <MainInput
              type="number"
              label="phone"
              value={phone}
              onChange={handlePhoneChange}
              error={phoneError}
            />
          </div>
          <div>
            <MainInput
              type="email"
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 my-4">
          <MainInput
            type="password"
            label="password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
          />
        </div>

        <div className="w-full md:w-[180px]">
          {isLoading ? (
            <LoadingBtn />
          ) : (
            <MainBtn type="submit" text="create account" />
          )}
        </div>
      </form>
    </div>
  );
};

export default Regester;
