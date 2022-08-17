import "./ExpenseItem.css";
const ExpenseItem = (props) => {
  // to store month day and year separately
  const month = props.expenseDate.toLocaleString("hin", { month: "long" });
  const day = props.expenseDate.toLocaleString("en-GB", { day: "2-digit" });
  const year = props.expenseDate.getFullYear();
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>

      <div className="expense-item__description">
        <h2>{props.expenseTitle}</h2>
        <div className="expense-item__price">{props.expensePrice} Rs</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
