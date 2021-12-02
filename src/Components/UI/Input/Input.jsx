import React from "react";
import styles from "./Input.module.scss";

const MyInput = React.forwardRef((props, ref) => {

    return (
      <div className={styles.inputBox} >
        <input className={styles.myInput} ref={ref} {...props} />
      </div>
    )
  }
)

export default MyInput;