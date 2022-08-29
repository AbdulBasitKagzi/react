import  { useState } from "react";

function UserInput(validateValue) {
  // state to take input
  const [enteredValue, setEnteredValue] = useState("");

  // state to check whether focus is there on input field or not
  const [isTouch, setISTouch] = useState(false);

  const valueISValid = validateValue(enteredValue);
  const hasError = !valueISValid && isTouch;

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const reset = () => {
    setEnteredValue("");
    setISTouch(false);
  };
  const inputBlurHandler = () => {
    setISTouch(true);
  };

  return {
    value: enteredValue,
    isValid: valueISValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
}

export default UserInput;
