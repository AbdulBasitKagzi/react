import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";
import { fetchCartData } from "./cart-action";

let notificationStatus = true;
function App() {
  const cartItem = useSelector((state) => state.cart);
  const cart = useSelector((state) => state.ui.cartIsVisible);
  const notification = useSelector((state) => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending to database",
          message: "Success",
        })
      );
      const response = await fetch(
        "https://add-task-5a18d-default-rtdb.firebaseio.com/cartItem.json",
        {
          method: "PUT",
          body: JSON.stringify(cartItem),
        }
      );
      if (!response.ok) {
        throw new Error("Errpr");
      }
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Sent to database",
          message: "Success",
        })
      );
    };

    if (notificationStatus) {
      notificationStatus = false;
      return;
    }
    if (cartItem.changed) {
      fetchData().catch((err) => {
        dispatch(
          uiActions.showNotification({
            status: "error",
            title: " Error Sending to database",
            message: "Error",
          })
        );
      });
    }
  }, [cartItem, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {cart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
