import { Navigate, Route, Routes } from "react-router-dom";
import OtherProfileViewer from "./OtherProfileViewer";
import UserList from "../UserList";
import RecipeList from "../RecipeList";
import ProfileNavigation from "./ProfileNavigation";
import { useParams } from "react-router-dom";
import { User } from "../Types/Types";
import * as db from "../Database";

export default function OtherProfile() {
  const { userid } = useParams();
  const users = db.users as User[];
  const curUser = users[0];
  const user = users.find((user) => user._id === userid);
  if (!user) {
    throw new Error("Could not find user");
  }
  const followers = users.filter((u) => user.followers.indexOf(u._id) > -1);
  const followings = users.filter((u) => user.following.indexOf(u._id) > -1);
  return (
    <div>
      {user._id === curUser._id && <Navigate to="/Profile/View" />}{" "}
      {/* Makes this go back to the user version of the profile viewer */}
      <ProfileNavigation user={user} />
      <Routes>
        <Route path="" element={<Navigate to="View" />} />
        <Route path="View" element={<OtherProfileViewer user={user} />} />
        <Route path="Followers" element={<UserList users={followers} />} />
        <Route path="Following" element={<UserList users={followings} />} />
        <Route path="Favorites" element={<RecipeList />} />
        <Route path="Posts" element={<RecipeList />} />
      </Routes>
    </div>
  );
}
