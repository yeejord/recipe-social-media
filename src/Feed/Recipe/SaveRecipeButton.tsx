import { Button } from "react-bootstrap";
import * as userClient from "../../Profile/client";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "../../Profile/reducer";

export default function SaveRecipeButton({ recipeId }: { recipeId: string }) {
  const { currentUser } = useSelector((state: any) => state.profilesReducer);
  const dispatch = useDispatch();
  const saved = currentUser.savedRecipes || [];
  const saveRecipe = (id: string) => {
    if (!currentUser) return;

    const updatedSaved = saved.includes(recipeId)
      ? saved.filter((id: string) => id !== recipeId)
      : [...saved, recipeId];

    dispatch({
      type: "users/updateUser",
      payload: { ...currentUser, savedRecipes: updatedSaved },
    });
    dispatch(setCurrentUser({ ...currentUser, savedRecipes: updatedSaved }));
    userClient.saveRecipe(id);
  };
  const unsaveRecipe = (id: string) => {
    if (!currentUser) return;

    const updatedSaved = saved.filter((id: string) => id !== recipeId);

    dispatch({
      type: "users/updateUser",
      payload: { ...currentUser, savedRecipes: updatedSaved },
    });
    dispatch(setCurrentUser({ ...currentUser, savedRecipes: updatedSaved }));
    userClient.unsaveRecipe(id);
  };
  const isSaved = !!saved.find((r: any) => r._id === recipeId);
  return (
    (isSaved && (
      <Button onClick={() => unsaveRecipe(recipeId)}>Unsave</Button>
    )) ||
    (!isSaved && <Button onClick={() => saveRecipe(recipeId)}>Save</Button>)
  );
}
