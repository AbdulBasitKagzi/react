import React from "react";
import classes from "./Header.module.css";
import meals from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food App</h1>
        <HeaderCartButton showCartHandler={props.showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={meals} alt="Table full of food" />
      </div>
    </React.Fragment>
  );
}

export default Header;
