import { createSlice } from "@reduxjs/toolkit";
import db from "../Database";

const initialState = {
    users: db.users, };

const userSlice = createSlice ({
    name: "users",
    initialState,
    reducers: {
        deleteUser: (state, { payload: userId}) => {
            state.users = state.users.filter(
                (u : any) => u._id != userId);
        },
        updateUser: (state, { payload: user }) => {
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
    },
});

export const { deleteUser, editUser, updateUser, addUser } = userSlice.actions;
export default userSlice.reducer;