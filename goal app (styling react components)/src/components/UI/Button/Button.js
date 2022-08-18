import React from "react";

// css is applied with the help of css modules
// for css modules to work filename should include module in it, for eg: button.module.css
import styles from "./Button.module.css";
// import "./Button.css";

const Button = (props) => {
  return (
    // and we need to add styles before the classname
    // classname should be added as below --
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
