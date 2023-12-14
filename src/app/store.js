import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import todoReducer from "../features/todoSlice";
import calculatorReducer from "../features/calculatorSlice";
export default configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
    calculator:calculatorReducer,
  },
});
