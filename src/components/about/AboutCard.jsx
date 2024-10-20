import React from "react";

const AboutCard = ({ data, num }) => {
  return (
    <div
      className={`flex items-center  gap-6 md:gap-8 lg:gap-12 my-6  ${
        num % 2 === 0
          ? "flex-col md:flex-row"
          : " flex-col-reverse md:flex-row-reverse"
      }`}
    >
      <div className="w-full md:w-1/2 h-[200px] md:h-[300px] lg:h-[400px]">
        <img
          alt={data?.title}
          src={data?.image}
          loading="lazy"
          className="w-full h-full"
        />
      </div>
      <div className="w-full md:w-1/2">
        <p className=" font-semibold mb-3 text-md lg:text-lg text-redColor">
          {data?.title}
        </p>
        <p className="text-textColor leading-relaxed">{data?.description}</p>
      </div>
    </div>
  );
};

export default AboutCard;
