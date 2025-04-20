import { useEffect, useState } from "react";
import FeedControls from "./FeedControls";
import Recipes from "./Recipe/Recipes";
import * as client from "./client";
import * as userClient from "../Profile/client";
import { useSelector } from "react-redux";

export default function Feed({ search }: { search: string }) {
  const [filter, setFilter] = useState("feed");
  const [recipes, setRecipes] = useState();
  const [savedRecipes, setSavedRecipes] = useState();
  const [allRecipes, setAllRecipes] = useState();
  const { currentUser } = useSelector((state: any) => state.userReducer);

  const fetchFeed = async (search: string) => {
    setRecipes(await client.getFeed(currentUser._id, search));
    setAllRecipes(await client.getAllRecipes(search));
  };
  useEffect(() => {
    fetchFeed(search);
  }, [filter, search]);
  const fetchSavedRecipes = async (search: string) => {
    setSavedRecipes(await userClient.savedRecipesFor(currentUser._id, search));
    console.log("savedRecipes = ");
    console.log(savedRecipes);
  };
  useEffect(() => {
    fetchSavedRecipes(search);
  }, [search]);

  if (!recipes && !allRecipes) {
    return <p>No recipes loaded</p>;
  }

  return (
    <div id="rs-feed">
      <h1>Feed</h1>
      <FeedControls filter={filter} setFilter={setFilter} />
      <Recipes
        filter={filter}
        recipes={recipes ?? []}
        allRecipes={allRecipes ?? []}
        savedRecipes={savedRecipes ?? []}
      />
    </div>
  );
}
