import ExpenseItem from "./ExpenseItem";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const dummy_expenses = [
  {
    id: "e1",
    title: "Snacks",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Bike Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
const Expenses = () => {
  // to handle the year selected from dropdown
  const [filteredYear, setFilteredYear] = useState("2020");
  const changeFilteredYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // to handle dummy expense and new expense from the form
  const [expenses, setExpenses] = useState(dummy_expenses);
  const addExpenseHandler = (expense) => {
    // console.log("In Expenses");
    // console.log(expense);

    // this creates a new array and store it in expenses
    setExpenses([expense, ...expenses]);
  };

  // to filter data out based on year
  const filteredExpenses = expenses.filter((expense) => {
    // console.log("as", expense.date.getFullYear().toString());
    // console.log(filteredYear);
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="App">
      <NewExpense onaddExpenseData={addExpenseHandler} />
      <ExpenseFilter
        selected={filteredYear}
        onChangeHandler={changeFilteredYear}
      />

      {/* if first condition is true then data after && is posted */}
      {/* this is known as short circuiting */}
      {filteredExpenses.length === 0 && (
        <p
          style={{
            textAlign: "center",
            backgroundColor: "#a892ee",
            width: "auto",
            height: "80px",
            fontSize: "50px",
            color:"whiteSmoke"
          }}
        >
          No data available
        </p>
      )}

      {/* if first condition is true then data after && is posted */}
      {/* this is known as short circuiting */}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          );
        })}
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      /> */}
    </div>
  );
};

export default Expenses;
