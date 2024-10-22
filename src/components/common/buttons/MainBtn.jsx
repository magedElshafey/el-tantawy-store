import React from "react";
import { useTranslation } from "react-i18next";
const MainBtn = ({ text, action, type }) => {
  const { t } = useTranslation();
  return (
    <button
      type={type ? type : "submit"}
      onClick={action}
      className="w-full p-3 flex items-center justify-center bg-black text-white duration-300 hover:bg-white hover:text-black   hover:border hover:border-black"
    >
      {t(text)}
    </button>
  );
};

export default MainBtn;
