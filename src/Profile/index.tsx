import {
  Navigate,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import MyProfileViewer from "./MyProfileViewer";
import ProfileEditor from "./ProfileEditor";
import UserList from "../UserList";
import ProfileNavigation from "./ProfileNavigation";
import ProfileMyRecipes from "./MyProfileViewer/ProfileMyRecipes";
import ProfileMySaved from "./MyProfileViewer/ProfileMySaved";
import { useSelector } from "react-redux";
import * as client from "./client";
import { useEffect, useState } from "react";
import { User } from "../Types/Types";

export default function Profile() {
  console.log("Profile Page");
  const [filter, setFilter] = useState("view");
  const [allUsers, setAllUsers] = useState<User[]>();
  const { currentUser } = useSelector((state: any) => state.userReducer);
  // If there is no user id navigate to the current user
  const [user, setUser] = useState<User>();
  const { userid } = useParams();
  const navigate = useNavigate();
  console.log("currentUser = ");
  console.log(currentUser);
  // Fetches the user with the given user id (or the current user's id)
  const fetchUsers = async (id: string | undefined) => {
    console.log("Fetch Users");
    setAllUsers(await client.findAllUsers());
    if (!id) {
      navigate(`/profile/${currentUser._id}/View`);
      return;
    }
    console.log("Fetch User");
    // Fetch user if the user id is defined. Otherwise use
    // the curUser
    setUser(await client.findUserById(id));
  };
  useEffect(() => {
    fetchUsers(userid);
  }, [userid]);
  if (!user) {
    console.log("Could not find user");
    <p>Could not find user</p>;
    return;
  }
  console.log("Profile Page Bottom Code");
  const followers: User[] = (allUsers ?? []).filter(
    (u: any) => (user.followers ?? []).indexOf(u._id) > -1
  );
  const followings: User[] = (allUsers ?? []).filter(
    (u: any) => (user.following ?? []).indexOf(u._id) > -1
  );
  console.log("Profile Page End Code");
  return (
    <div>
      <h1>Profile</h1>
      <ProfileNavigation user={user} filter={filter} setFilter={setFilter} />
      <Routes>
        <Route path="" element={<Navigate to="View" />} />
        <Route path="View" element={<MyProfileViewer user={user} />} />
        <Route path="Edit" element={<ProfileEditor userid={user._id} />} />
        <Route path="Followers" element={<UserList users={followers} />} />
        <Route path="Following" element={<UserList users={followings} />} />
        <Route
          path="AllUsers"
          element={allUsers && <UserList users={allUsers} />}
        />
        <Route path="Favorites" element={<ProfileMySaved user={user} />} />
        <Route path="MyPosts" element={<ProfileMyRecipes user={user} />} />
      </Routes>
    </div>
  );
}
