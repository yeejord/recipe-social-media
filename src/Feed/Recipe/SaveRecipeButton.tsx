import { Button } from "react-bootstrap";
import * as userClient from "../../Profile/client";

export default function SaveRecipeButton({
  recipeId,
  savedRecipes,
}: {
  recipeId: string;
  savedRecipes: any[];
}) {
  const isSaved = !!savedRecipes.find((r) => r._id === recipeId);
  return (
    (isSaved && (
      <Button onClick={() => userClient.unsaveRecipe(recipeId)}>Unsave</Button>
    )) ||
    (!isSaved && (
      <Button onClick={() => userClient.saveRecipe(recipeId)}>Save</Button>
    ))
  );
}
