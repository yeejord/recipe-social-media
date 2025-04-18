import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./Feed/reducer";
const store = configureStore({
  reducer: {
    recipesReducer,
  },
});
export default store;
