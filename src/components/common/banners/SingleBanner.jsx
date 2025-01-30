import React from "react";

const SingleBanner = ({ src, alt, height }) => {
  return (
    <div
      className={`w-full  ${
        height ? height : "h-[130px] md:h-[200px] lg:h-[300px] xl:h-[400px]"
      }`}
    >
      <img alt={alt} src={src} className="w-full h-full" loading="lazy" />
    </div>
  );
};

export default SingleBanner;
