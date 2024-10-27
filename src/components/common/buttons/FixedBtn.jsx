import React from "react";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useTranslation } from "react-i18next";
const FixedBtn = () => {
  const { data } = useGlobalContext();
  const { i18n } = useTranslation();
  const whatsapp = data?.socials?.find((item) => item?.name === "whatsapp");
  return (
    <div>
      {/*whatsapp*/}
      <div
        className={`fixed bottom-8 ${
          i18n.language === "ar" ? "right-6" : "left-6"
        }`}
      >
        <a href={whatsapp?.link} target="_blank" rel="noreferrer">
          <img
            alt={whatsapp?.name}
            src={whatsapp?.icon}
            className="w-[44px] h-[44px]"
          />
        </a>
      </div>
    </div>
  );
};

export default FixedBtn;
