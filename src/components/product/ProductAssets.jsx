import React, { useState } from "react";

const ProductAssets = ({ imgs, alt }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndexClick = (index) => setActiveIndex(index);
  return (
    <div className="flex flex-col items-center">
      <img
        alt={alt}
        src={imgs[activeIndex]}
        className="max-w-full max-h-[200px]"
        loading="lazy"
      />
      {imgs?.length > 1 ? (
        <div className="flex items-center gap-2 flex-wrap">
          {imgs?.map((item, index) => (
            <div
              key={index}
              className="w-[50px] h-[50px] p-2 border flex items-center justify-center cursor-pointer"
              onClick={() => handleActiveIndexClick(index)}
            >
              <img
                alt={alt}
                src={item}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProductAssets;
