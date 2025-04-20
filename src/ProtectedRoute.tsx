import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function ProtectedRoute({
  children,
  userOnly = false,
}: {
  children: any;
  userOnly: boolean;
}) {
  const { currentUser } = useSelector((state: any) => state.profilesReducer);
  if (currentUser) {
    if (userOnly && currentUser.role !== "User") {
      return <p>Only Users can access this page</p>;
    }
    return children;
  } else {
    return <Navigate to="/Signin" />;
  }
}
