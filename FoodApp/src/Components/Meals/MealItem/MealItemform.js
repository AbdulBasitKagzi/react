import React, { useRef, useState } from "react";
import Input from "./Input";
import classes from "./MealItemForm.module.css";

function MealItemform(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);

  const inputAmountRef = useRef();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = inputAmountRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber > 5 ||
      enteredAmountNumber < 1
    ) {
      setAmountIsValid(false);
      return;
    }
    props.addToCartHandler(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
        ref={inputAmountRef}
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

      {!amountIsValid && <p>Please Enter valid amount(1-5)</p>}
    </form>
  );
}

export default MealItemform;
