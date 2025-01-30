import React from "react";
import MainBtn from "../components/common/buttons/MainBtn";
import LoadingBtn from "../components/common/buttons/LoadingBtn";
import MainInput from "../components/common/inputs/MainInput";
import { useMutation } from "react-query";
import { useTranslation } from "react-i18next";
import { resetPassword } from "../services/auth/resetPassword";
import Swal from "sweetalert2";
import usePasswordValidation from "../hooks/validation/usePasswordValidation";
import { useNavigate } from "react-router-dom";
import { tabTitle } from "../utils/tabTitle";
import Meta from "../components/common/seo/Meta";
const NewPassword = () => {
  const email = localStorage.getItem("forget-password-email")
    ? JSON.parse(localStorage.getItem("forget-password-email"))
    : null;
  const code = localStorage.getItem("forget-password-code")
    ? JSON.parse(localStorage.getItem("forget-password-code"))
    : null;
  const navigate = useNavigate();
  const { t } = useTranslation();
  const {
    password,
    handleChange: handlePasswordChange,
    setPassword,
    error: passwordError,
  } = usePasswordValidation();
  const { isLoading, mutate } = useMutation(resetPassword, {
    onSuccess: (data) => {
      if (data?.data?.key === "success") {
        Swal.fire({
          icon: "success",
          title: data?.data?.msg,
        });
        navigate("/login");
        localStorage.removeItem("forget-password-email");
        localStorage.removeItem("forget-password-code");
        setPassword("");
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
    if (!password.trim()) {
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
        code,
        password,
      };
      mutate(data);
    }
  };
  return (
    <div className="container my-8">
      <Meta title={tabTitle("new password")} />
      <div className="mb-5">
        <p className="text-md md:text-lg lg:text-xl font-bold mb-3 text-redColor">
          {t("change your password")}
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
            type="password"
            label="new password"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
          />
        </div>

        <div className="w-full flex justify-center my-3">
          <div className="w-[200px]">
            {isLoading ? (
              <LoadingBtn />
            ) : (
              <MainBtn type="submit" text="change password" />
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPassword;
