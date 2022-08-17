import { useState } from "react";
import "./Expenseform.css";

const ExpenseForm = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  //   to handletitlechange
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  //to handleamountchange
  const onAmountChange = (event) => {
    setAmount(event.target.value);
  };

  //to handledatechange
  const onDateChange = (event) => {
    setDate(event.target.value);
  };

  //   to prevent form submit on button click
  const preventSubmit = (e) => {
    e.preventDefault();

    // to capture the values from the form
    const newExpense = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    console.log(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={preventSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Expense</label>
          <input type="text" value={title} onChange={onTitleChange} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            value={amount}
            onChange={onAmountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={onDateChange}
          />
        </div>
        <div className="new-expense__actions ">
          <button type="sumbit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
