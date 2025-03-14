import { Navigate, Route, Routes } from "react-router-dom";
import MyProfileViewer from "./MyProfileViewer";
import ProfileEditor from "./ProfileEditor";
import UserList from "../UserList";
import ProfileNavigation from "./ProfileNavigation";
import RecipeList from "../RecipeList";

export default function Profile() {
  return (
    <div>
      <ProfileNavigation />
      <Routes>
        <Route path="" element={<Navigate to="View" />} />
        <Route path="View" element={<MyProfileViewer />} />
        <Route path="Edit" element={<ProfileEditor />} />
        <Route path="Followers" element={<UserList />} />
        <Route path="Following" element={<UserList />} />
        <Route path="Favorites" element={<RecipeList />} />
        <Route path="MyPosts" element={<RecipeList />} />
      </Routes>
    </div>
  );
}
