import { createSlice } from "@reduxjs/toolkit";

const initialCart = { items: [], totalQuantity: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState: initialCart,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalAmount: newItem.price,
          title: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.price = existingItem.price + newItem.price;
      }
      //   state.newquantity = state.newquantity + 1;
      //   state.newPrice = state.newPrice + 6;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id    );
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.price = existingItem.price - existingItem.price;
      }
    },
  },
});

// export const store1 = configureStore({
//   reducer: { a: addMinus.reducer },
// });

export const cartActions = cartSlice.actions;

export default cartSlice;
