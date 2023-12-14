import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    value: [],
  },
  reducers: {
    addTodo: (state, action) => {
      if (state.value.find((x) => x.name == action.payload.name)) {
        state.value = state.value.filter((x) => x.name !== action.payload.name);
      }
      state.value.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.value = state.value.filter((x) => x.id !== action.payload);
    },
    editTodo:(state,action)=>{
      
    }
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
