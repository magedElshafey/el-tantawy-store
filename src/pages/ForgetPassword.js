import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import Swal from "sweetalert2";
import LoadingBtn from "../components/common/buttons/LoadingBtn";
import MainBtn from "../components/common/buttons/MainBtn";
import MainInput from "../components/common/inputs/MainInput";
import { sendForgetPasswordCode } from "../services/auth/sendForgetPasswordCode";
import { useNavigate } from "react-router-dom";
const ForgetPassword = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  const navigate = useNavigate();
  const { isLoading, mutate } = useMutation(sendForgetPasswordCode, {
    onSuccess: (data) => {
      if (data?.data?.key === "success") {
        Swal.fire({
          icon: "success",
          title: data?.data?.msg,
        });
        localStorage.setItem("forget-password-email", JSON.stringify(email));
        navigate("/forget-password-otp");
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
    if (!email.trim()) {
      Swal.fire({
        icon: "error",
        title: t("email field is required"),
      });
      return;
    } else {
      const data = { email };
      mutate(data);
    }
  };
  return (
    <div className="container my-8">
      <div className="mb-5">
        <p className="text-md md:text-lg lg:text-xl font-bold mb-3 text-redColor">
          {t("Reset your password")}
        </p>
        <div className="flex items-center gap-1 text-slate-600">
          <p>{t("Do you have problem logging in?")}</p>
          <Link className=" font-semibold underline" to="contact">
            {t("contact us")}
          </Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full md:w-1/2">
        <p className="mb-3">
          {t(
            "It’s easy to forget. Enter your email (that you used to create your account) and we will send you a reset password link."
          )}
        </p>
        <div className="my-4">
          <MainInput
            type="email"
            label="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="w-full flex justify-center my-3">
          <div className="w-[180px]">
            {isLoading ? <LoadingBtn /> : <MainBtn type="submit" text="send" />}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
