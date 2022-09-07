import { configureStore, createSlice } from "@reduxjs/toolkit";

const initital = { cartIsVisible: false, notification: null };

const uiSlice = createSlice({
  name: "ui",
  initialState: initital,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

// export const store = configureStore({
//   reducer: { ui: uiSlice.reducer },
// });

export const uiActions = uiSlice.actions;

export default uiSlice;
