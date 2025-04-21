import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  currentUser: null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, { payload: userId }) => {
      state.users = state.users.filter((u: any) => u._id != userId);
    },
    updateUser: (state, { payload: user }) => {
      console.log("Updating user:", user);
      state.users = state.users.map((u: any) =>
        u._id === user._id ? user : u
      ) as any;
    },
    editUser: (state, { payload: userId }) => {
      state.users = state.users.map((u: any) =>
        u._id === userId ? { ...u, editing: true } : u
      ) as any;
    },
    addUser: (state, { payload: newUser }) => {
      state.users.push(newUser);
    },
    setUsers: (state, { payload: allUsers }) => {
      state.users = allUsers;
    },
    addRecipeToUser: (state, { payload }) => {
      const { userId, recipe } = payload;
      state.users = state.users.map((u: any) =>
        u._id === userId ? { ...u, recipes: [...(u.recipes || []), recipe] } : u
      );
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const {
  deleteUser,
  editUser,
  updateUser,
  addUser,
  addRecipeToUser,
  setCurrentUser,
  setUsers,
} = userSlice.actions;
export default userSlice.reducer;
