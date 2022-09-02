import classes from "./Counter.module.css";
import { counterActions } from "../store/index";
// custom hook provided by redux
import { useSelector, useDispatch } from "react-redux/es/exports";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  // useDispatch will give us function which is stored in dispatch and  dispatch can be used to disptach action

  const dispatch = useDispatch();

  // increment function to handle increment
  const incrementHandler = () => {
    // dispatch will dispatch an action which will be used in redux store to handle increment
    // counterActions.increment() will provide us action object like this : ({type:"some auto generated unique indentifier"})
    // eg: ({type:"increment"})
    dispatch(counterActions.increment());
  };

  // decrement function to handle deccrement
  const decrementHandler = () => {
    // dispatch will dispatch an action which will be used in redux store to handle increment
    // counterActions.increment() will provide us action object like this : ({type:"some auto generated unique indentifier"})
    // eg: ({type:"decrement"})
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    // here the amount which will be dispatched by the dispatcher is known as payload
    dispatch(counterActions.increase(5));
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };
  const increasebysamevalueHandler = () => {
    dispatch(counterActions.increasebysamevalue());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Incremet Counter</button>
      <button onClick={decrementHandler}>Decremet Counter</button>
      <button onClick={increaseHandler}>IncreaseBy 5</button>
      <button onClick={increasebysamevalueHandler}>IncreaseBysameValue</button>
    </main>
  );
};

export default Counter;
