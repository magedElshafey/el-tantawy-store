import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MainInput from "../components/common/inputs/MainInput";
import usePasswordValidation from "../hooks/validation/usePasswordValidation";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import MainBtn from "../components/common/buttons/MainBtn";
import LoadingBtn from "../components/common/buttons/LoadingBtn";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { login, addToken, addMyData } from "../store/auth";
import { handleLogin } from "../services/auth/handleLogin";
const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    password,
    error: passwordError,
    handleChange: handlePasswordChange,
    setPassword,
  } = usePasswordValidation();
  const [email, setEmail] = useState("");
  const { isLoading, mutate } = useMutation(handleLogin, {
    onSuccess: (data) => {
      if (data?.data?.key) {
        Swal.fire({
          icon: "success",
          title: data?.data?.msg,
        });
        setEmail("");
        setPassword("");
        navigate("/my-account");
        dispatch(login());
        dispatch(addMyData(data?.data?.data));
        dispatch(addToken(data?.data?.data?.token));
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
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim() && !password.trim()) {
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
    } else if (passwordError) {
      return;
    } else {
      const data = {
        email,
        password,
        device_id: "wgsdaghawsghrwgherwgwgs",
      };
      mutate(data);
    }
  };
  return (
    <div className="container my-8">
      <div className="mb-5">
        <p className="text-md md:text-lg lg:text-xl font-bold mb-3 text-redColor">
          {t("Log in to your account")}
        </p>
        <p className=" text-slate-600">
          {t(
            "Get a more personalised experience where you don’t need to fill in your information every time"
          )}
        </p>
      </div>
      <form className="w-full md:w-1/2" onSubmit={handleSubmit}>
        <p className=" font-semibold mb-6">
          {t(
            "Log in or join el-tantawy today to benefit from a more personalized experience"
          )}
        </p>
        <div className="my-4">
          <MainInput
            type="email"
            label="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-4">
          <MainInput
            type="password"
            label="password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
          />
        </div>
        <div className="w-full flex justify-end">
          <Link to="/forget-password" className="text-slate-600 underline">
            {t("forget password ?")}
          </Link>
        </div>
        <div className="w-full flex justify-center my-3">
          <div className="w-[180px]">
            {isLoading ? (
              <LoadingBtn />
            ) : (
              <MainBtn type="submit" text="login" />
            )}
          </div>
        </div>
        <Link
          to="/regester"
          className=" border w-full md:w-[180px] mx-auto border-black bg-white text-black flex items-center justify-center p-3  duration-300 hover:bg-black hover:text-white hover:border-white"
        >
          {t("create account")}
        </Link>
      </form>
    </div>
  );
};

export default Login;
