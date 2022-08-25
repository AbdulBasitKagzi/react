import React from "react";
import Model from "../UI/Model";
import classes from "./CartItem.module.css";
// import styles from "../Layout/HeaderCartButton.module.css";

function CartItem(props) {
  const CartItem = (
    <ul className={classes["cart-items"]}>
      {[
        {
          id: "m1",
          name: "Biryani",
          amount: "2",
          price: 99.09,
        },
      ].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Model hideCartHandler={props.hideCartHandler}>
      <div>
        {CartItem}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>199.09</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.hideCartHandler}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </div>
    </Model>
  );
}

export default CartItem;
