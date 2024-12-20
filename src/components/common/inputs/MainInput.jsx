import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const MainInput = ({
  label,
  value,
  type,
  placeholder,
  onChange,
  hint,
  error,
  border,
  bg,
  hintColor,
  height,
  ...otherProps
}) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  return (
    <div>
      <label className="block mb-1 text-textColor text-md font-medium">
        {t(label)}
      </label>
      <div
        className={`w-full p-3  relative ${
          border ? border : "border border-[#9399A3]"
        } ${
          bg ? `${bg} border-none` : "bg-white"
        } rounded-xl  flex items-center justify-between gap-2 ${
          height ? height : ""
        }`}
      >
        <input
          id={t(label)}
          placeholder={t(placeholder)}
          type={
            type === "password" && showPassword
              ? "text"
              : type === "password" && !showPassword
              ? "password"
              : type
          }
          value={value}
          onChange={onChange}
          className="border-none focus:outline-none flex-1 bg-transparent"
          {...otherProps}
        />
        {type === "password" ? (
          showPassword ? (
            <FaEye
              size={20}
              className=" cursor-pointer"
              onClick={toggleShowPassword}
            />
          ) : (
            <FaEyeSlash
              size={20}
              className=" cursor-pointer"
              onClick={toggleShowPassword}
            />
          )
        ) : null}
      </div>
      {error ? <div className="my-2 text-sm text-red-600">{error}</div> : null}
    </div>
  );
};

export default MainInput;
