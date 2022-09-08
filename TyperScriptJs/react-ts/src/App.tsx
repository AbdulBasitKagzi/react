import React, { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import todo from "./model/todo";

function App() {
  const todos = [new todo("Learn React"), new todo("Learn React")];

  const [abdultodo, setTodo] = useState<todo[]>(todos);

  const addTodo = (enteredtext: string) => {
    const newTodo = new todo(enteredtext);
    setTodo((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const deleteTodo = (id: string) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div>
      <Todos item={abdultodo} deletetodo={deleteTodo} />
      <NewTodo addTodo={addTodo} />
    </div>
  );
}

export default App;
