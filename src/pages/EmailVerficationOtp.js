import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import OtpInput from "react-otp-input";
const EmailVerficationOtp = () => {
  const { t } = useTranslation("");
  const email = localStorage.getItem("active-email")
    ? JSON.parse(localStorage.getItem("active-email"))
    : null;
  const [otp, setOtp] = useState("");
  return (
    <div className="container my-8">
      <p className="text-md md:text-lg lg:text-xl font-bold mb-3 text-redColor">
        {t("Confirmation by email")}
      </p>
      <div className="flex items-center flex-wrap gap-2 mb-4">
        <p className="text-slate-600">{t("sentt")}</p>
        <p className="text-redColor underline font-semibold lowercase">
          {email}
        </p>
      </div>
      <p className="text-slate-600 mb-3 font-bold">{t("enter the code")} : </p>
      <form className="sans">
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
      </form>
    </div>
  );
};

export default EmailVerficationOtp;
