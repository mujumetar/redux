import { configureStore } from "@reduxjs/toolkit";
import  counterSlice from "./toolkit/counterSlice";


export const store = configureStore({
    reducer: counterSlice,
    
})