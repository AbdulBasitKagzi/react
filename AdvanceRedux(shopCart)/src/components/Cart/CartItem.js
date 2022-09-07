import classes from "./CartItem.module.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;
  const dispatch = useDispatch();

  const addtoCart = () => {
    dispatch(cartActions.addToCart({ title, id, price }));
  };

  const removefromCart = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${price.toFixed(2)}
          <span className={classes.itemprice}>(${total.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removefromCart}>-</button>
          <button onClick={addtoCart}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
