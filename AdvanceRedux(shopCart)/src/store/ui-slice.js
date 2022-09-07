import { configureStore, createSlice } from "@reduxjs/toolkit";

const initital = { cartIsVisible: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initital,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

// export const store = configureStore({
//   reducer: { ui: uiSlice.reducer },
// });

export const uiActions = uiSlice.actions;

export default uiSlice;
