import React from "react";
import todo from "../model/todo";

const TodoList: React.FC<{
  todo: todo[];

  deletetodo: (id: string) => void;
}> = (props) => {
  return (
    <div>
      <ul>
        {props.todo.map((item) => (
          <li key={item.id} onClick={props.deletetodo.bind(null, item.id)}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
