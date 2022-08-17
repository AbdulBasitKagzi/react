import "./Card.css";

const Card = (props) => {
  // the below variable is to specify to our card component to also use another classes for css
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
