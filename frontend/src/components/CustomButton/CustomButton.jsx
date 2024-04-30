import React from "react";
import styles from "./CustomButton.module.css";



function CustomButton({ text, bgColor, click, styling, type ,...props}) {
  return (
    <button
      className={`${styles.btn} ${styling} `}
      onClick={click}
      style={{ background:bgColor, ...props }}
      type={type}
    >
      {text}
    </button>
  );
}

export default CustomButton;
