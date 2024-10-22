import React from "react";
import { useTranslation } from "react-i18next";
import { myAccountLinks } from "../../../data/data";
import { NavLink } from "react-router-dom";
const UserDashboardNavlinks = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full overflow-x-auto text-nowrap flex items-center gap-3 md:gap-4 lg:gap-5 xl:gap-6 flex-nowrap">
      {myAccountLinks?.map((item, index) => (
        <NavLink
          className="text-base md:text-md lg:text-lg xl:text-xl font-medium pb-4 user-dashboard duration-300 hover:text-redColor hover:border-b hover:border-b-redColor"
          to={item?.path}
          key={index}
        >
          {t(item?.title)}
        </NavLink>
      ))}
    </div>
  );
};

export default UserDashboardNavlinks;
