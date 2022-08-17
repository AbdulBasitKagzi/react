import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div className="App">
      <h1>Hello AbdulBasit</h1>
      <ExpenseItem
        expenseDate={new Date(2022, 7, 17)}
        expenseTitle={"Bike Insurance"}
        expensePrice={3000}
      />
    </div>
  );
}

export default App;
