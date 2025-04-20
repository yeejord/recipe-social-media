import { createSlice } from "@reduxjs/toolkit";

const initialState: { recipes: any[]; feedIds: any[] } = {
  recipes: [],
  feedIds: [],
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    deleteRecipe: (state, { payload: recipeId }) => {
      state.recipes = state.recipes.filter((r: any) => r._id != recipeId);
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
    addRecipe: (state, { payload: newRecipe }) => {
      state.recipes.push(newRecipe);
    },
    setAllRecipes: (state, { payload: allRecipes }) => {
      state.recipes = allRecipes;
    },
    setFeedIds: (state, { payload: newFeedIds }) => {
      state.feedIds = newFeedIds;
    },
  },
});

export const {
  deleteRecipe,
  editRecipe,
  updateRecipe,
  addRecipe,
  setAllRecipes,
  setFeedIds,
} = recipeSlice.actions;
export default recipeSlice.reducer;
