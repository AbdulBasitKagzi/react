import React, { useReducer } from "react";

import CartContext from "./cart-context";

// default cart state when no items are there in the cart
const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  // adding logic to add items to the cart
  // console.log(state.value);
  if (action.type === "ADD") {
    const updatedAmount =
    state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updateTotalAmount = state.totalAmount - existingCartItem.price;

    let updatedItems;
    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems=[...state.items]
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items:updatedItems,
      totalAmount:updateTotalAmount
    }
  }

  return defaultCartState;
};

function CartProvider(props) {
  // to get item to add to  the cart
  // we will use cartState to build cartContext object
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addCartItemHandler = (item) => {
    // this will dispatch an action which we will use in cartReducer function
    dispatchCartAction({ type: "ADD", item: item });
  };

  // to remove item from the cart
  const removeCartItemHandler = (id) => {
    // this will dispatch an action which we will use in cartReducer function
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  // context for cart model
  // to display items and amount in the cart model
  const cartContext = {
    // now we are managing this cartContext with cartState from the useReducer
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
