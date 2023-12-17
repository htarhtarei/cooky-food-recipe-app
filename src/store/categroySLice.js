import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: [],
    mealByCategory: [],
    searchMeals: [],
    searchCategory: ''
}
export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        getCategory: (state, action) => {
            state.categories = action.payload
        },
        getMealByCatgory: (state, action) => {
            state.mealByCategory = action.payload
        },
        getSearchMeals: (state, action) => {
            state.searchMeals = action.payload
        },
        getSearchCat: (state, action) => {
            state.searchCategory = action.payload
        }

    }
})


export const { getCategory, getMealByCatgory, getSearchMeals, getSearchCat } =
categorySlice.actions;
export default categorySlice.reducer