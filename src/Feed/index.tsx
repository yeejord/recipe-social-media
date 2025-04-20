import { useEffect, useState } from "react";
import FeedControls from "./FeedControls";
import Recipes from "./Recipe/Recipes";
import * as client from "./client";
import { useSelector } from "react-redux";

export default function Feed() {
  const [filter, setFilter] = useState("feed");
  const [recipes, setRecipes] = useState();
  const [allRecipes, setAllRecipes] = useState();
  const { currentUser } = useSelector((state: any) => state.userReducer);

  const fetchFeed = async () => {
    setRecipes(await client.getFeed(currentUser._id));
    setAllRecipes(await client.getAllRecipes());
  };
  useEffect(() => {
    fetchFeed();
  }, [filter]);

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
      />
    </div>
  );
}
