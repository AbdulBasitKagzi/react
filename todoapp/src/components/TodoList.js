import React from "react";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <div className="list">
      {props.list.map((list) => {
        const Month = list.date.toLocaleString("en-GB", {
          month: "long",
        });
        const Day = list.date.toLocaleString("en-GB", { day: "2-digit" });
        const Year = list.date.getFullYear();

        return (
          <div key={list.id}>
            <div className="task">
              <p>
                {Month}, {Day},{Year}
              </p>

              <h3>{list.task}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
