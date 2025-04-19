import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./Feed/reducer";
import profilesReducer from "./Profile/ProfileEditor/reducer";
const store = configureStore({
  reducer: {
    recipesReducer,
    profilesReducer,
  },
});
export default store;
