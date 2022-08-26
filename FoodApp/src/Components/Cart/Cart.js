import React, { useContext } from "react";
import CartContext from "../../store/cart-context";
import Model from "../UI/Model";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
// import styles from "../Layout/HeaderCartButton.module.css";

function Cart(props) {
  const ctx = useContext(CartContext);

  const isItemThere = ctx.items.length > 0;
  const totalAmount = `${ctx.totalAmount.toFixed(2)}`;

  const addCartItemHandler = (item) => {};
  const removeCartItemHandler = (id) => {};

  const CartItem = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={removeCartItemHandler.bind(null, item.id)}
          onAdd={addCartItemHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Model hideCartHandler={props.hideCartHandler}>
      <div>
        {CartItem}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.hideCartHandler}
          >
            Close
          </button>
          {isItemThere && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </Model>
  );
}

export default Cart;
