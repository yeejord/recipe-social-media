import { createSlice } from "@reduxjs/toolkit";
import { User } from "../Types/Types";
const initialState: { currentUser: User | null } = {
  currentUser: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});
export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
