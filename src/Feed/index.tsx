import { useState } from "react";
import FeedControls from "./FeedControls";
import Recipes from "./Recipe/Recipes";
import { useParams } from "react-router-dom";

export default function Feed() {
  const [filter, setFilter] = useState("feed");
  const { search } = useParams();

  return (
    <div id="rs-feed">
      <h1>Feed</h1>
      {search && <h3>Showing results for "{search}"</h3>}
      <FeedControls filter={filter} setFilter={setFilter} />
      <Recipes filter={filter} />
    </div>
  );
}
