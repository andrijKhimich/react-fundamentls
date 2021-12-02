import React from "react";
import styles from "./Button.module.scss";

const MyBtn = (props) => {
  
  return (
    <button className={styles.myBtn} onClick={props.onClick} >{props.btnTitle}</button>
  )
}

export default MyBtn;