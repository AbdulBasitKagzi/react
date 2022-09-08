import React from "react";
import todo from "../model/todo";
import TodoList from "./TodoList";

// setting up function prop with typescript
const Todos: React.FC<{ item: todo[]; deletetodo: (id: string) => void }> = (
  props
) => {
  return (
    <div>
      <TodoList todo={props.item} deletetodo={props.deletetodo} />
    </div>
  );
};

export default Todos;
