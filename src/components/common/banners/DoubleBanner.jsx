import React from "react";

const DoubleBanner = ({ img1, alt1, img2, alt2 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <img
        alt={alt1}
        src={img1}
        loading="lazy"
        className="w-full h-[200px] md:h-[300px] lg:h-[400px]"
      />
      <img
        alt={alt2}
        src={img2}
        loading="lazy"
        className="w-full h-[200px] md:h-[300px] lg:h-[400px]"
      />
    </div>
  );
};

export default DoubleBanner;
