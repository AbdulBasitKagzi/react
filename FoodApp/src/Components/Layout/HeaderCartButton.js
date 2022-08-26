import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const ctxr = useContext(CartContext);

  const numberOfItems = ctxr.items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
}

export default HeaderCartButton;
