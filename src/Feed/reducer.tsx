import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";

const initialState = {
    recipes: db.recipes, };

const recipeSlice = createSlice ({
    name: "recipes",
    initialState,
    reducers: {
        deleteRecipe: (state, { payload: recipeId}) => {
            state.recipes = state.recipes.filter(
                (r : any) => r._id != recipeId);
        },
        updateRecipe: (state, { payload: recipe }) => {
            state.recipes = state.recipes.map((r: any) =>
              r._id === recipe._id ? recipe : r
            ) as any;
          },
        editRecipe: (state, { payload: recipeId }) => {
            state.recipes = state.recipes.map((r: any) =>
              r._id === recipeId ? { ...r, editing: true } : r
            ) as any;
        },
      
    },
});

export const { deleteRecipe, editRecipe, updateRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;