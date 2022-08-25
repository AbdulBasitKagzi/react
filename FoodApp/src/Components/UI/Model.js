import React from "react";
import classes from "./Model.module.css";

function Model(props) {
  return (
    <>
      <div className={classes.backdrop} onClick={props.hideCartHandler}></div>
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    </>
  );
}

export default Model;
