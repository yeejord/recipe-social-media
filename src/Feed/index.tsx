import FeedControls from "./FeedControls";
import Recipes from "./Recipe/Recipes";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import * as userClient from "../Profile/client";
import { useEffect, useState } from "react";
import { User } from "../Types/Types";
import { setUsers } from "../Profile/reducer";

export default function Feed() {
  const [filter, setFilter] = useState("feed");
  const { search } = useParams();
  const dispatch = useDispatch();
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const fetchAllUsers = async () => {
    setAllUsers(await userClient.findAllUsers());
    console.log("Found all users");
    // Fetch user if the user id is defined. Otherwise use
    // the curUser
    dispatch(setUsers(allUsers));
  };
  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div id="rs-feed">
      <h1>Feed</h1>
      {search && <h3>Showing results for "{search}"</h3>}
      <FeedControls filter={filter} setFilter={setFilter} />
      <Recipes filter={filter} />
    </div>
  );
}
