import React, { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemform from "./MealItemform";

function MealItem({ meal }) {
  const ctx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    console.log(`${meal.price} Rs`);
    return ctx.addItem({
      id: meal.id,
      name: meal.name,
      amount: amount,
      price: meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{meal.price}.00 Rs</div>
      </div>
      <div>
        <MealItemform addToCartHandler={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
