import { Navigate, Route, Routes } from "react-router-dom";
import ProfileViewer from "./ProfileViewer";
import ProfileEditor from "./ProfileEditor";

export default function Profile() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Navigate to="View" />} />
        <Route path="View" element={<ProfileViewer />} />
        <Route path="Edit" element={<ProfileEditor />} />
      </Routes>
    </div>
  );
}
