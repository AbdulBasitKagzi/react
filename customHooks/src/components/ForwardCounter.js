import Card from "./Card";
import useCounter from "./hooks/use-counter";

const ForwardCounter = () => {
  // using a custom hook
  const counter = useCounter(true);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
