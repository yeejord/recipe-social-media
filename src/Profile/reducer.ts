import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  curUser: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.curUser = action.payload;
    },
  },
});
export const { setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
