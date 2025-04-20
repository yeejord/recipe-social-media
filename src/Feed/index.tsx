import { useState } from "react";
import FeedControls from "./FeedControls";
import Recipes from "./Recipe/Recipes";
import { useParams } from "react-router-dom";

export default function Feed({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (newSearch: string) => void;
}) {
  const { searchVal } = useParams();
  if (!!searchVal) {
    setSearch(searchVal);
  }
  const [filter, setFilter] = useState("feed");

  return (
    <div id="rs-feed">
      <h1>Feed</h1>
      <FeedControls filter={filter} setFilter={setFilter} />
      <Recipes filter={filter} search={search} />
    </div>
  );
}
