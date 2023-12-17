import { createSlice } from "@reduxjs/toolkit"

const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState: {
        ingerdientData: [],
        theme: false
    },
    reducers: {
        getIngredientData: (state, action) => {
            state.ingerdientData = action.payload
        },
        getTheme: (state, action) => {
            state.theme = action.payload
        }
    }
})

export const { getIngredientData, getTheme } = ingredientSlice.actions;
export default ingredientSlice.reducer