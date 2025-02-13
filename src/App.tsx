import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import RecipeList from "./RecipeList";
import OtherProfile from "./OtherProfile";
import NewRecipe from "./New Recipe";
import Feed from "./Feed";
import Navigation from "./Navigation";
import "./App.css";

export default function App() {
  return (
    <HashRouter>
      <div id="rs-App">
        <Navigation />
        <div className="rs-main-content-offset p-5">
          <Routes>
            {/* Temporary Routes */}
            <Route path="/" element={<Navigate to="/Signin" />} />
            <Route path="/Profile/*" element={<Profile />} />
            <Route path="/OtherProfile/*" element={<OtherProfile />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/RecipeList" element={<RecipeList />} />
            <Route path="/Feed" element={<Feed />} />
            <Route path="/NewRecipe" element={<NewRecipe />} />
          </Routes>
        </div>
      </div>
    </HashRouter>
  );
}
