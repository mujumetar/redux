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
  },
});

export const {incCount , decCount} = counterSlice.actions;
export default counterSlice.reducer