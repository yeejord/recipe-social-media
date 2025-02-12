import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import RecipeList from "./RecipeList";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          {/* Temporary Routes */}
          <Route path="/" element={<Navigate to="/Signin" />} />
          <Route path="/Profile/*" element={<Profile />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/RecipeList" element={<RecipeList />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
