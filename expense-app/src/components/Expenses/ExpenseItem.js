import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
// import { useState } from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Dhosa");
  // };

  return (
    <Card className="expense-item">
      {/* passing a single prop mutiple time : 1) from app to ExpenseItem and the from E
        ExpenseItem to ExpenseDate */}
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount} Rs</div>
      </div>
      
      {/* <button onClick={clickHandler}>Change title</button> */}
    </Card>
  );
};

export default ExpenseItem;
