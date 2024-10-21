import React from "react";
import { Outlet } from "react-router-dom";
import Meta from "../components/common/seo/Meta";
import { useGlobalContext } from "../context/GlobalContext";
import Header from "../layout/website/Header";
import Footer from "../layout/website/Footer";
import CategoryHeader from "../layout/website/CategoryHeader";
const WebsiteTemplate = () => {
  const { data } = useGlobalContext();
  return (
    <div>
      <Meta
        title={data?.site?.name}
        desc={data?.site?.description}
        fav={data?.site?.fav_icon}
      />
      <Header />
      <CategoryHeader />
      <div className="main">{<Outlet />}</div>
      <Footer />
    </div>
  );
};

export default WebsiteTemplate;
