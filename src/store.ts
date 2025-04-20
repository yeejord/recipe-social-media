import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./Feed/reducer";
import profilesReducer from "./Profile/ProfileEditor/reducer";
import userReducer from "./Profile/reducer";
const store = configureStore({
  reducer: {
    recipesReducer,
    profilesReducer,
    userReducer,
  },
});
export default store;
