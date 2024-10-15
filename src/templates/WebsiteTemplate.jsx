import React from "react";
import { Outlet } from "react-router-dom";
import Meta from "../components/common/seo/Meta";
import { useGlobalContext } from "../context/GlobalContext";
const WebsiteTemplate = () => {
  const { data } = useGlobalContext();
  return (
    <div>
      <Meta
        title={data?.site?.name}
        desc={data?.site?.description}
        fav={data?.site?.fav_icon}
      />
      <div>{<Outlet />}</div>
    </div>
  );
};

export default WebsiteTemplate;
