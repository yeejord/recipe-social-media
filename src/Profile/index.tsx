import { Navigate, Route, Routes } from "react-router-dom";
import MyProfileViewer from "./MyProfileViewer";
import ProfileEditor from "./ProfileEditor";
import UserList from "../UserList";
import ProfileNavigation from "./ProfileNavigation";
import RecipeList from "../RecipeList";
import * as db from "../Database";
import { User } from "../Types/Types";

export default function Profile() {
  const users = db.users as User[];
  const curUser: User = users[0];
  return (
    <div>
      <ProfileNavigation />
      <Routes>
        <Route path="" element={<Navigate to="View" />} />
        <Route path="View" element={<MyProfileViewer />} />
        <Route path="Edit" element={<ProfileEditor />} />
        <Route
          path="Followers"
          element={
            <UserList
              users={users.filter(
                (user: User) => curUser.followers.indexOf(user._id) > -1
              )}
            />
          }
        />
        <Route
          path="Following"
          element={
            <UserList
              users={users.filter(
                (user: User) => curUser.following.indexOf(user._id) > -1
              )}
            />
          }
        />
        <Route path="Favorites" element={<RecipeList />} />
        <Route path="MyPosts" element={<RecipeList />} />
      </Routes>
    </div>
  );
}
