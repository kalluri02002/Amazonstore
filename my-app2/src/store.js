import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feutures/productslice"
import cartReducer from "./feutures/cardslice"
export const globelstore =configureStore({
    reducer :{
        product:productReducer,
        cart:cartReducer
    }
})