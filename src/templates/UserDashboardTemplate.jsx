import React from "react";
import Meta from "../components/common/seo/Meta";
import { useGlobalContext } from "../context/GlobalContext";

const UserDashboardTemplate = () => {
  const { data } = useGlobalContext();

  return (
    <div>
      <Meta
        title={data?.site?.name}
        desc={data?.site?.description}
        fav={data?.site?.fav_icon}
      />
    </div>
  );
};

export default UserDashboardTemplate;
