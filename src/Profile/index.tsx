import { Navigate, Route, Routes, useParams } from "react-router-dom";
import MyProfileViewer from "./MyProfileViewer";
import ProfileEditor from "./ProfileEditor";
import UserList from "../UserList";
import ProfileNavigation from "./ProfileNavigation";
import { useState } from "react";
import ProfileMyRecipes from "./MyProfileViewer/ProfileMyRecipes";
import ProfileMySaved from "./MyProfileViewer/ProfileMySaved";
import { useSelector } from "react-redux";

export default function Profile() {
  const { userid } = useParams();
  const { users } = useSelector((state: any) => state.profilesReducer); 
  const user = users.find((user:any) => user._id === userid);
  if (!user) {
    throw new Error("Could not find user");
  }
  const followers = users.filter((u:any) => user.followers.indexOf(u._id) > -1);
  const followings = users.filter((u:any) => user.following.indexOf(u._id) > -1);
  const [filter, setFilter] = useState("view");
  return (
    <div>
      <h1>Profile</h1>
      <ProfileNavigation user={user} filter={filter} setFilter={setFilter} />
      <Routes>
        <Route path="" element={<Navigate to="View" />} />
        <Route path="View" element={<MyProfileViewer user={user} />} />
        <Route path="Edit" element={<ProfileEditor userid={userid} />} />
        <Route path="Followers" element={<UserList users={followers} />} />
        <Route path="Following" element={<UserList users={followings} />} />
        <Route path="AllUsers" element={<UserList users={users} />} />
        <Route path="Favorites" element={<ProfileMySaved user={user} />} />
        <Route path="MyPosts" element={<ProfileMyRecipes user={user}/>} />
      </Routes>
    </div>
  );
}
