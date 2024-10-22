import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Faq = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleActiveIndexClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div
      style={{
        userSelect: "none",
      }}
    >
      {data?.map((item, index) => (
        <div
          key={index}
          className={`pb-2 ${index === 0 ? "" : "mt-3"}  border-b ${
            index === data.length - 1 ? "border-b-0" : ""
          }`}
        >
          <div
            onClick={() => handleActiveIndexClick(index)}
            className="flex items-center justify-between cursor-pointer text-slate-500"
          >
            <p>{item?.question}</p>
            {activeIndex === index ? (
              <IoIosArrowUp size={30} />
            ) : (
              <IoIosArrowDown size={30} />
            )}
          </div>
          {activeIndex === index ? (
            <div className="mt-3 leading-relaxed">{item?.answer}</div>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default Faq;
