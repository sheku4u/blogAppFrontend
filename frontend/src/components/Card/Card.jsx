import React from 'react'
import styles from "./Card.module.css"
import { Link } from 'react-router-dom'
function Card({imgSrc, text, imgWidth, width,click,sectionLink }) {
  
  return (
   
      <Link to={sectionLink}>
    <div style={{width:width,}} onClick={click} className={styles.card}>
      <img src={imgSrc} width={imgWidth}  style={{
        background:imgSrc, }} />
      <div className={styles.cardText}>
        {text}
      </div>
      </div>
      </Link>
    
  )
}

export default Card