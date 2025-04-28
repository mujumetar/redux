import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  count: 0,
};

let counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incCount(state) {
      state.count++;
    },
    decCount(state) {
      state.count++;
    },
    resetCount(state) {
      state.count = 0;
    },
  },
});

export const {incCount , decCount, resetCount} = counterSlice.actions;
export default counterSlice.reducer