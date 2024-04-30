import React from "react";
import styles from "./StoryBox.module.css";
import {StoryHandler} from '../index'
import { useNavigate } from "react-router-dom";
function StoryBox({
  width,
  text,
  click,
  heading,
  imgSrc,
  imgWidth,
  sectionId,
}) {
  
  return (
    <div>
      <div
        style={{ width: width, margin:"12px" }}
        onClick={StoryHandler(imgSrc)}
        className={styles.card}
        id={sectionId}
      >
        <img
          src={imgSrc}
          width={imgWidth}
          style={{
            background: imgSrc,
            filter:"70%"
          }}
        />
        <div className={styles.cardText} style={{ paddingInline: "1em" }}>
          <h3 className={styles.cardHeading}>{heading}</h3>
          <p className={styles.cardPara}>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default StoryBox;
