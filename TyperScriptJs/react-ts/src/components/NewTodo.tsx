import React, { useRef } from "react";

const NewTodo: React.FC<{ addTodo: (text: string) => void }> = (props) => {
  const inputText = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let enteredtext = inputText.current!.value;

    if (enteredtext.trim().length === 0) {
      return;
    }

    props.addTodo(enteredtext);
    inputText.current!.value = "";
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Todo</label>
        <input type="text" id="text" ref={inputText} />
        <button>Add todo</button>
      </form>
    </div>
  );
};

export default NewTodo;
