import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import {} from "../recipe.css";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      const savedRecipes = (await client.savedRecipesFor(currentUser._id)).map(
        (r: any) => r._id
      );
      dispatch(setCurrentUser({ ...currentUser, savedRecipes }));
    } catch (err: any) {
      console.error(err);
    }
    setPending(false);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  if (!pending) {
    return children;
  }
}
