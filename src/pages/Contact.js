import React from "react";
import DoubleBanner from "../components/common/banners/DoubleBanner";
import img1 from "../assets/contact-01.avif";
import img2 from "../assets/contact-02.avif";
import { useGlobalContext } from "../context/GlobalContext";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { data } = useGlobalContext();
  const { t } = useTranslation();
  const facebookLink = data?.socials?.find(
    (item) => item?.name === "facebook"
  )?.link;
  return (
    <div className="container mt-4">
      <div className="mb-4 md:mb-6 lg:mb-8 xl:mb-12">
        <DoubleBanner
          img1={img1}
          img2={img2}
          alt1="contact-1"
          alt2="contact-2"
        />
      </div>
      <div className="flex flex-wrap items-center justify-between mb-4 md:mb-6 lg:mb-8 xl:mb-12">
        <a
          href={`mailto:${data?.email}`}
          target="_blank"
          className="bg-black p-3 px-5  rounded-md text-white flex items-center justify-center "
          rel="noreferrer"
        >
          {t("email us")}
        </a>
        <a
          href={facebookLink}
          target="_blank"
          className="bg-black p-3 px-5  rounded-md text-white flex items-center justify-center w-[190px] "
          rel="noreferrer"
        >
          {t("chat with us")}
        </a>
      </div>
      <div className="flex items-center justify-between mb-4 md:mb-6 lg:mb-8 xl:mb-12">
        <p className="font-bold flex items-center gap-2">
          <p>{t("hotline")} :</p>
          <p dir="ltr">{data?.site?.hotLine}</p>
        </p>
        <div>
          <p className="font-bold mb-2">{t("follow us on")}</p>
          <ul className="flex items-center flex-wrap gap-3">
            {data?.socials?.map((item, index) => (
              <a key={index} href={item?.path} target="_blank" rel="noreferrer">
                <img
                  alt={item?.name}
                  src={item?.icon}
                  className="w-[34px] h-[34px]"
                />
              </a>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
