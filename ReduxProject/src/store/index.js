// import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    decrement: (state) => {
      state.counter--;
    },
    increase: (state, action) => {
      state.counter = state.counter + action.payload;
    },
    toggle: (state) => {
      state.showCounter = !state.showCounter;
      state.counter = state.counter - state.counter;
    },
    increasebysamevalue: (state) => {
      state.counter = state.counter + state.counter;
    },
  },
});

// slice for authentication(login/logout)
const initAuthState = { isAuth: false };
const createAuth = createSlice({
  name: "authenticaton",
  initialState: initAuthState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logOut(state) {
      state.isAuth = false;
    },
  },
});

// reducer function
// const countReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "increase") {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === "toggle") {
//     state.counter = 0;
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   if (action.type === "increasebysamevalue") {
//     return {
//       counter: state.counter + state.counter,
//       showCounter: state.showCounter,
//     };
//   }
//   return state;
// };

// store

// const reducer = {
//   counter: createSlice.reducers,
// };

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: createAuth.reducer },
});

// actions will provide us action object like this : ({type:"some auto generated unique indentifier"})
// eg: ({type:"increment"})
export const counterActions = counterSlice.actions;
export const authActions = createAuth.actions;
export default store;
