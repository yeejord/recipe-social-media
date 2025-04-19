import { Navigate, Route, Routes, useParams } from "react-router-dom";
import MyProfileViewer from "./MyProfileViewer";
import ProfileEditor from "./ProfileEditor";
import UserList from "../UserList";
import ProfileNavigation from "./ProfileNavigation";
import RecipeList from "../RecipeList";
import { User } from "../Types/Types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState<User>();
  const { curUser } = useSelector((state: any) => state.userReducer);
  const navigate = useNavigate();
  const { userid } = useParams();
  if (!userid) {
    // If there is no user id navigate to the current user
    if (!!curUser) {
      navigate(`/profile/${curUser._id}`);
    }
  }

  // Fetches the user with the given user id (or the current user's id)
  const fetchUser = async (id: string | undefined) => {
    if (!id) {
      return;
    }
    setUser(await client.findUserById(id));
  };
  useEffect(() => {
    fetchUser(userid);
  }, [userid]);
  if (!user) {
    <p>Could not find user</p>;
    return;
  }
  const followers: User[] = []; //users.filter((u) => user.followers.indexOf(u._id) > -1);
  const followings: User[] = []; //users.filter((u) => user.following.indexOf(u._id) > -1);
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
