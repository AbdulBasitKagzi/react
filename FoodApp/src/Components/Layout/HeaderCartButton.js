import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const ctxr = useContext(CartContext);
  const [value, setValue] = useState(false);
  const numberOfItems = ctxr.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${value ? classes.bump : ""}`;
  useEffect(() => {
    if (ctxr.items.length === 0) {
      return;
    }

    setValue(true);
    const timer = setTimeout(() => {
      setValue(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [ctxr.items]);
  return (
    <button className={btnClasses} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
