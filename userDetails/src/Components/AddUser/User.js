import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import { useState, useRef } from "react";
import styles from "./User.module.css";

const Users = (props) => {
  // states to handle username and age
  const [enterValue, setEnterValue] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState();

  // to prevent refresh on click and managing states
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("ref", nameRef);
    if (enterValue.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid name and age",
      });
      return;
    }
    // + is added to make enterAge value a number
    if (+enterAge < 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter valid age (age > 0)",
      });
      return;
    }
    // console.log(enterValue, enterAge);
    props.onAddUser(enterValue, enterAge);
    setEnterValue("");
    setEnterAge("");
  };

  // const empty the error state
  const errorHandler = () => {
    setError(null);
  };

  // to handle state--username
  const usernameChangeHandler = (e) => {
    setEnterValue(e.target.value);
    // console.log("ere", enterValue);
  };

  // to handle state--age
  const ageChangeHandler = (e) => {
    setEnterAge(e.target.value);
    // console.log("ere", enterAge);
  };

  const nameRef = useRef();
  const ageRef = useRef();
  return (
    <>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enterValue}
            onChange={usernameChangeHandler}
            ref={nameRef}
          ></input>

          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enterAge}
            onChange={ageChangeHandler}
            ref={ageRef}
          ></input>

          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default Users;
