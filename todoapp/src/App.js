import { useState } from "react";
import TodoList from "./components/TodoList";
import Form from "./components/Form";
import "./App.css";

function App() {
  const list = [
    {
      id: Math.random().toString(),
      task: "Workout",
      date: new Date(2022, 2, 28),
    },
    {
      id: Math.random().toString(),
      task: "Prayer",
      date: new Date(2022, 3, 28),
    },
    {
      id: Math.random().toString(),
      task: "Study",
      date: new Date(2022, 3, 30),
    },
  ];
  const [todolist, setTodoList] = useState(list);
  const todoListHandler = (todoList) => {
    setTodoList((previousState) => {
      return [...previousState, todoList];
    });
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Form todoListHandler={todoListHandler} />
      <TodoList list={todolist} />
    </div>
  );
}

export default App;
