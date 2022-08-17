import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // to store month day and year separately
  return (
    <div className="expense-item">
      {/* passing a single prop mutiple time : 1) from app to ExpenseItem and the from E
        ExpenseItem to ExpenseDate */}
      <ExpenseDate expenseDate={props.expenseDate} />
      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">{props.expensePrice} Rs</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
