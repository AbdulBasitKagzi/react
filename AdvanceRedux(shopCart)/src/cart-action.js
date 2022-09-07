import { cartActions } from "./store/cart-slice";
import { uiActions } from "./store/ui-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://add-task-5a18d-default-rtdb.firebaseio.com/cartItem.json"
      );
      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();
      console.log(data);
      return data;
    };
    try {
      const cartData = await fetchData();
      console.log(cartData);
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: " Failed",
          message: "Fetching cart data failed",
        })
      );
    }
  };
};
