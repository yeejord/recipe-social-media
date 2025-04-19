import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";
import RecipeList from "./RecipeList";
import NewRecipe from "./Feed/Recipe/NewRecipe";
import Feed from "./Feed";
import Navigation from "./Navigation";
import { Provider } from "react-redux";
import store from "./store";
import EditRecipe from "./Feed/Recipe/EditRecipe";
import RecipeDetails from "./Feed/Recipe/RecipeDetails";

export default function App() {
  return (
    <HashRouter>
      <div id="rs-App">
        <Provider store={store}>
        <div className="mb-4">
          <Navigation z-index={5} />
        </div>
        <div className="rs-main-content-offset p-5">
          <Routes>
            {/* Temporary Routes */}
            <Route path="/" element={<Navigate to="/Feed" />} />
            <Route path="/Profile/:userid/*" element={<Profile />} />
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/RecipeList" element={<RecipeList />} />
            <Route path="/Feed" element={<Feed />} />
            <Route path="/NewRecipe" element={<NewRecipe />} />
            <Route path="/Feed/EditRecipe/:recipeid/*" element={<EditRecipe />} />
            <Route path="/Feed/RecipeDetails/:recipeid/*" element={<RecipeDetails />} />
          </Routes>
        </div>
        </Provider>
      </div>
    </HashRouter>
  );
}
