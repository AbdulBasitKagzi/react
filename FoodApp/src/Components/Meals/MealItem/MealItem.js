import React from "react";
import classes from "./MealItem.module.css";
import MealItemform from "./MealItemform";

function MealItem({ meal }) {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{meal.price}</div>
      </div>
      <div>
        <MealItemform />
      </div>
    </li>
  );
}

export default MealItem;
