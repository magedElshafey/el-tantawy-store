import React from "react";
import wiget from "../../assets/widget.png";
import { useNavigate } from "react-router-dom";
const Widget = () => {
  const navigate = useNavigate();
  const handleWidgetNavigate = () => navigate("/shop");
  return (
    <div className="w-full h-[50px] overflow-hidden">
      <img
        src={wiget}
        alt="widget"
        loading="lazy"
        className="w-full h-full  object-cover  cursor-pointer"
        onClick={handleWidgetNavigate}
      />
    </div>
  );
};

export default Widget;
