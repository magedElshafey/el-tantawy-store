import React from "react";

const SingleBanner = ({ src, alt, height }) => {
  return (
    <div
      className={`w-full  ${
        height ? height : "h-[100px] md:h-[200px] lg:h-[300px]"
      }`}
    >
      <img alt={alt} src={src} className="w-full h-full" loading="lazy" />
    </div>
  );
};

export default SingleBanner;
