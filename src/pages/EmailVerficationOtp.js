import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import OtpInput from "react-otp-input";
import MainBtn from "../components/common/buttons/MainBtn";
import LoadingBtn from "../components/common/buttons/LoadingBtn";
import { useMutation, useQuery } from "react-query";
import { emailVerfication } from "../services/auth/emailVerfication";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { resendEmailActivationCode } from "../services/auth/resendEmailActivationCode";
import img from "../assets/email-activationع.png";
import Meta from "../components/common/seo/Meta";
import { tabTitle } from "../utils/tabTitle";
const EmailVerficationOtp = () => {
  const { t } = useTranslation("");
  const navigate = useNavigate();
  const email = localStorage.getItem("active-email")
    ? JSON.parse(localStorage.getItem("active-email"))
    : null;
  const [otp, setOtp] = useState("");
  const { isLoading, mutate } = useMutation(emailVerfication, {
    onSuccess: (data) => {
      if (data?.data?.key === "success") {
        Swal.fire({
          icon: "success",
          title: data?.data?.msg,
        });
        localStorage.removeItem("active-email");

        navigate("/login");
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
    if (!otp.trim()) {
      return;
    } else {
      const data = {
        code: otp,
        email,
        device_id: "jfqkenbwfjkiadsasfds",
      };
      mutate(data);
    }
  };
  const {
    isLoading: loadingResend,
    data,
    refetch,
  } = useQuery(
    "resend-activation-code",
    () => resendEmailActivationCode(email),
    {
      enabled: false,
      onSuccess: (data) => {
        if (data?.data?.key === "success") {
          Swal.fire({
            icon: "success",
            title: data?.data?.msg,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: data?.data?.msg,
          });
        }
      },
    }
  );
  const handleResendClick = () => refetch();
  return (
    <div className="container my-8">
      <Meta title={tabTitle(t("email verification"))} />
      <div className="flex flex-col-reverse md:flex-row items-center  gap-6 md:gap-8 lg:gap-12">
        <div className="w-full md:w-1/2">
          <p className="text-md md:text-lg lg:text-xl font-bold mb-3 text-redColor">
            {t("Confirmation by email")}
          </p>
          <div className="flex items-center flex-wrap gap-2 mb-4">
            <p className="text-slate-600">{t("sentt")}</p>
            <p className="text-redColor underline font-semibold lowercase">
              {email}
            </p>
          </div>
          <p className="text-slate-600 mb-3 font-bold">
            {t("enter the code")} :{" "}
          </p>
          <form onSubmit={handleSubmit}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              inputType={"number"}
              shouldAutoFocus={false}
              skipDefaultStyles={true}
              inputStyle={{
                border: "2px solid #f9f9f9",
                borderRadius: "8px",
                width: "45px",
                padding: "8px",
                margin: "4px",
                textAlign: "center",
                direction: "ltr", // تحديد اتجاه الكتابة من اليسار إلى اليمين
              }}
              renderInput={(props) => <input {...props} dir="ltr" />}
            />
            <div className="my-6 w-full md:w-1/2 mx-auto">
              {isLoading ? (
                <LoadingBtn />
              ) : (
                <MainBtn type="submit" text="send" />
              )}
            </div>
          </form>
          <div className="mt-6 flex items-center gap-2">
            <p className="text-slate-600">{t("don't receive the code ?")}</p>
            <button
              onClick={handleResendClick}
              className={`underline text-redColor font-semibold ${
                loadingResend
                  ? "bg-opacity-40 cursor-not-allowed"
                  : "bg-opacity-100 cursor-pointer"
              }`}
              type="button"
            >
              {t("resend the code")}
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[200px] md:h-[300px] lg:h-[400px]">
          <img alt="login" src={img} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default EmailVerficationOtp;
