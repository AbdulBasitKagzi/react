const ExpenseDate = ({ expenseDate }) => {
  const month = expenseDate.toLocaleString("hin", { month: "long" });
  const day = expenseDate.toLocaleString("en-GB", { day: "2-digit" });
  const year = expenseDate.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
    </div>
  );
};

export default ExpenseDate;
