import { createSlice } from "@reduxjs/toolkit";

export const caculatorSlice = createSlice({
  name: "calculator",
  initialState: {
    value: 0,
  },
  reducers: {
    calculator: (state, action) => {
      switch (action.payload.operator) {
        case "+":
          state.value = action.payload.num1 + action.payload.num2;
          break;
        case "-":
          state.value = action.payload.num1 - action.payload.num2;
          break;
        case "*":
          state.value = action.payload.num1 * action.payload.num2;
          break;
        case "/":
          if (action.payload.num2===0) {
            state.value="0 olmaz"
            
          }
          state.value = action.payload.num1 / action.payload.num2;
          break;
        default:
          break;
      }
    },
  },
});
export const { calculator } = caculatorSlice.actions;

export default caculatorSlice.reducer;
