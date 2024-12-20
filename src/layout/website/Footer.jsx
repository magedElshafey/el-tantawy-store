import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import { useTranslation } from "react-i18next";
import { importantLinks } from "../../data/data";
import createSlug from "../../utils/createSlug";
const Footer = () => {
  const { data } = useGlobalContext();
  const { t } = useTranslation();
  return (
    <div className="bg-[#f9f9f9f9] w-full py-3 flex items-center">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-12">
          <div>
            <Link to="/">
              <img
                alt="logo"
                src={data?.site?.logo}
                className="w-[100px] h-[100px] md:w-[150px] md:h-[130px] "
              />
            </Link>
            <p className="text-nowrap">{data?.site?.slogan}</p>
          </div>
          <div>
            <p className="text-base lg:text-lg text-redColor font-semibold mb-2">
              {t("important links")}
            </p>
            <ul className="text-nowrap">
              {importantLinks?.map((item, index) => (
                <li className="mb-3" key={index}>
                  <Link
                    className="duration-300 hover:underline"
                    to={item?.path}
                  >
                    {t(item?.title)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-base lg:text-lg text-redColor font-semibold mb-2">
              {t("categories")}
            </p>
            <ul className="text-nowrap">
              {data?.categories?.map((item, index) => (
                <li className="mb-3" key={index}>
                  <Link
                    className="duration-300 hover:underline"
                    to={`/category/${createSlug(item?.name)}`}
                    state={{
                      categoryId: item?.id,
                      categoryName: item?.name,
                    }}
                  >
                    {t(item?.name)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-base lg:text-lg text-redColor font-semibold mb-2">
              {t("follow us")}
            </p>
            <ul className="flex items-center flex-wrap gap-3">
              {data?.socials?.map((item, index) => (
                <li key={index}>
                  <a href={item?.link} target="_blank" rel="noreferrer">
                    <img
                      alt={item?.name}
                      src={item?.icon}
                      className="w-[34px] h-[34px]"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
