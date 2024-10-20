import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import MainInput from "../components/common/inputs/MainInput";
import usePasswordValidation from "../hooks/validation/usePasswordValidation";
import { Link } from "react-router-dom";
const Login = () => {
  const { t } = useTranslation();
  const {
    password,
    error: passwordError,
    handleChange: handlePasswordChange,
    setPassword,
  } = usePasswordValidation();
  const [email, setEmail] = useState("");
  return (
    <div className="container my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-7">
        <div>
          <p className="text-md md:text-lg lg:text-xl font-bold mb-3 text-redColor">
            {t("Log in to your account")}
          </p>
          <p className=" text-slate-600">
            {t(
              "Get a more personalised experience where you don’t need to fill in your information every time"
            )}
          </p>
        </div>
        <form>
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
          <Link
            to="/regester"
            className=" border w-full md:w-[180px] mx-auto border-black bg-white text-black flex items-center justify-center p-3 rounded-lg duration-300 hover:bg-black hover:text-white hover:border-white"
          >
            {t("create account")}
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
