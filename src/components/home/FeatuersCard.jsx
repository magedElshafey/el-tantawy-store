import React from "react";

const FeatuersCard = ({ data }) => {
  console.log("data from feat", data);
  return (
    <div className="p-3 bg-grayColor rounded-lg flex flex-col items-center justify-center gap-2">
      <img alt={data.title} src={data.icon} className="w-[48px]" />
      <p className=" font-semibold text-redColor">{data?.title}</p>
      <p>{data?.description}</p>
    </div>
  );
};

export default FeatuersCard;
