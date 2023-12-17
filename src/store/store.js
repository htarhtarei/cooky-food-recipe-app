import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "./categroySLice"
import ingredientReducer from "./ingredientSlice";

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        ingredient: ingredientReducer
    }
})