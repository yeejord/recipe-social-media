import { useState } from "react";
import FeedControls from "./FeedControls";
import Recipes from "./Recipe/Recipes";

export default function Feed() {
  const [filter, setFilter] = useState("feed");

  return (
    <div id="rs-feed">
      <h1>Feed</h1>
      <FeedControls filter={filter} setFilter={setFilter} />
      <Recipes filter={filter} />
    </div>
  );
}
