import React from "react";
import { useQuery } from "react-query";
import Spinner from "../components/common/loader/Spinner";
import { getAboutData } from "../services/getAboutData";
import AboutCard from "../components/about/AboutCard";
const About = () => {
  const { isLoading, data } = useQuery("about-us", getAboutData);
  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container my-8">
          {data?.data?.data?.about?.map((item, index) => (
            <AboutCard key={index} data={item} num={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default About;
