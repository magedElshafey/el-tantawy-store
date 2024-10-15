import React from "react";
import style from "./spinner.module.css";
const Spinner = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
