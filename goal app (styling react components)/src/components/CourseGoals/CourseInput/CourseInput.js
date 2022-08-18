import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  // use to provide dynamic css
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    // using condition to add dynamic css
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // using condition to add dynamic css
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      {/* added dynamic css based on the value of isValid variable, here css is coming from the css file */}
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>

        {/* added dynamic css based on the value of isValid variable */}
        <input
          type="text"
          style={{
            borderColor: !isValid ? "red" : "black",
            backgroundColor: !isValid ? "red" : "transparent",
          }}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
