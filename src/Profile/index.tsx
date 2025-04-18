import { Navigate, Route, Routes, useParams } from "react-router-dom";
import MyProfileViewer from "./MyProfileViewer";
import ProfileEditor from "./ProfileEditor";
import UserList from "../UserList";
import ProfileNavigation from "./ProfileNavigation";
import RecipeList from "../RecipeList";
import * as db from "../Database";
import { User } from "../Types/Types";

export default function Profile() {
  const { userid } = useParams();
  const users = db.users as User[];
  const user = users.find((user) => user._id === userid);
  if (!user) {
    throw new Error("Could not find user");
  }
  const followers = users.filter((u) => user.followers.indexOf(u._id) > -1);
  const followings = users.filter((u) => user.following.indexOf(u._id) > -1);
  return (
    <div>
      <ProfileNavigation user={user} />
      <Routes>
        <Route path="" element={<Navigate to="View" />} />
        <Route path="View" element={<MyProfileViewer user={user} />} />
        <Route path="Edit" element={<ProfileEditor userid={user._id} />} />
        <Route path="Followers" element={<UserList users={followers} />} />
        <Route path="Following" element={<UserList users={followings} />} />
        <Route path="Favorites" element={<RecipeList />} />
        <Route path="MyPosts" element={<RecipeList />} />
      </Routes>
    </div>
  );
}
