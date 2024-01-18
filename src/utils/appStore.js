import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//build store
const appStore = configureStore({
    //add slices
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;