import React from "react";
import { useQuery } from "react-query";
import { getAboutData } from "../services/getAboutData";
import AboutCard from "../components/about/AboutCard";
import FetchHandler from "../components/common/dataFetching/FetchHandler";
import { tabTitle } from "../utils/tabTitle";
import Meta from "../components/common/seo/Meta";
import { useTranslation } from "react-i18next";
const About = () => {
  const queryResult = useQuery("about-us", getAboutData);
  const { data } = queryResult;
  const { t } = useTranslation();
  return (
    <FetchHandler queryResult={queryResult}>
      <Meta title={tabTitle(t("about"))} />
      <div className="container my-8">
        {data?.data?.data?.about?.reverse().map((item, index) => (
          <AboutCard key={index} data={item} num={index} />
        ))}
      </div>
    </FetchHandler>
  );
};

export default About;
