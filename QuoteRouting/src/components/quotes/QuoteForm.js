import React from "react";
import { useRef, useState } from "react";
import { Prompt, useLocation } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const location = useLocation();

  console.log(location);
  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    // optional: Could validate here

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }
  const [isFocused, setIsFocused] = useState(false);
  const onFormFocused = () => {
    setIsFocused(true);
  };
  const finish = () => {
    setIsFocused(false);
  };
  return (
    <React.Fragment>
      <Prompt
        when={isFocused}
        message={(locatio) => "Are you sure you want to leave?"}
      />
      <Card>
        <form
          onFocus={onFormFocused}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Author</label>
            <input type="text" id="author" ref={authorInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button onClick={finish} className="btn">
              Add Quote
            </button>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default QuoteForm;
