import React from "react";
import Input from "./Input";
import classes from "./MealItemForm.module.css";

function MealItemform(props) {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
}

export default MealItemform;
