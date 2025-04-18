import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Profile/reducer";
const store = configureStore({
  reducer: { userReducer },
});
export default store;
