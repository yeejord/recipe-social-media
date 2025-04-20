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
  const [filter, setFilter] = useState("view");
  const [allUsers, setAllUsers] = useState<User[]>();
  const { currentUser } = useSelector((state: any) => state.userReducer);
  // If there is no user id navigate to the current user
  const [user, setUser] = useState<User>();
  const [followers, setFollowers] = useState<User[]>([]);
  const [followings, setFollowings] = useState<User[]>([]);
  const { userid } = useParams();
  const navigate = useNavigate();
  // Fetches the user with the given user id (or the current user's id)
  const fetchUsers = async (id: string | undefined) => {
    setAllUsers(await client.findAllUsers());
    if (!id) {
      navigate(`/profile/${currentUser._id}/View`);
      return;
    }
    // Fetch user if the user id is defined. Otherwise use
    // the curUser
    setUser(await client.findUserById(id));
    setFollowers(await client.followers(id));
    setFollowings(await client.following(id));
  };
  useEffect(() => {
    fetchUsers(userid);
  }, [userid, filter]);
  if (!user) {
    <p>Could not find user</p>;
    return;
  }
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
