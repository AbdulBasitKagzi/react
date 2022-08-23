import { React, useState } from "react";

const Form = (props) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const todoList = {
      id: Math.random().toString(),
      task: task,
      date: new Date(date),
    };
    console.log(todoList);
    props.todoListHandler(todoList);

    setTask("");
    setDate("");
  };
  const TaskHandler = (e) => {
    setTask(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Task</label>
        <input type="text" value={task} onChange={TaskHandler}></input>
      </div>
      <div>
        <label>Date</label>
        <input type="date" value={date} onChange={dateHandler}></input>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Form;
