import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseDate) => {
    const newExpenseData = {
      // copying enteredExpenseData
      // enteredExpenseData will come from  expnense form
      ...enteredExpenseDate,

      // adding new value pair
      id: Math.random().toString(),
    };
    console.log(newExpenseData);
    props.onaddExpenseData(newExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
