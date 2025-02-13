import { Navigate, Route, Routes } from "react-router-dom";
import OtherProfileViewer from "./OtherProfileViewer";
import UserList from "../UserList";
import RecipeList from "../RecipeList";
import ProfileNavigation from "./ProfileNavigation";

export default function OtherProfile() {
  return (
    <div>
      <ProfileNavigation />
      <Routes>
        <Route path="" element={<Navigate to="View" />} />
        <Route path=":userid/View" element={<OtherProfileViewer />} />
        <Route path=":userid/Followers" element={<UserList />} />
        <Route path=":userid/Following" element={<UserList />} />
        <Route path=":userid/Favorites" element={<RecipeList />} />
        <Route path=":userid/Posts" element={<RecipeList />} />
      </Routes>
    </div>
  );
}
