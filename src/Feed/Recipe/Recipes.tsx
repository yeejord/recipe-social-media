import { ListGroup } from "react-bootstrap";
import { FaBookmark, FaRegBookmark, FaStar, FaTrash } from "react-icons/fa";
import { deleteRecipe, setAllRecipes, setFeedIds } from "../reducer";
import "./../feed.css";
import { useDispatch, useSelector } from "react-redux";
import { FaPencil } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";
import * as client from "../client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "../../Profile/reducer";
import * as userClient from "../../Profile/client";

export default function Recipes({ filter }: { filter: string }) {
  const { search } = useParams();
  const { recipes, feedIds } = useSelector(
    (state: any) => state.recipesReducer
  );
  const { currentUser } = useSelector((state: any) => state.profilesReducer);
  const dispatch = useDispatch();
  const [searchedRecipes, setSearchedRecipes] = useState<any[]>([]);

  const fetchFeed = async (search: string) => {
    const fetchedRecipes = await client.getAllRecipes();
    if (!!currentUser) {
      const recipesFeedIds = (
        await client.getFeed(currentUser._id, search)
      ).map((r: any) => r._id);
      dispatch(setFeedIds(recipesFeedIds));
    }
    dispatch(setAllRecipes(fetchedRecipes));
    console.log("Try get search");
    setSearchedRecipes(await client.getAllRecipes(search));
  };
  useEffect(() => {
    fetchFeed(search ?? "");
  }, [filter, search]);

  const filteredRecipes = (search ? searchedRecipes : recipes).filter(
    (recipe: any) => {
      if (filter === "feed") return feedIds.includes(recipe._id);
      if (filter === "mine") return recipe.owner === currentUser._id;
      if (filter === "saved")
        return currentUser?.savedRecipes?.includes(recipe._id);
      return true;
    }
  );

  const toggleSaveRecipe = (recipeId: string) => {
    if (!currentUser) return;

    const saved = currentUser.savedRecipes || [];
    const wasSaved = saved.includes(recipeId);
    const updatedSaved = wasSaved
      ? saved.filter((id: string) => id !== recipeId)
      : [...saved, recipeId];

    dispatch({
      type: "users/updateUser",
      payload: { ...currentUser, savedRecipes: updatedSaved },
    });
    dispatch(setCurrentUser({ ...currentUser, savedRecipes: updatedSaved }));
    if (wasSaved) {
      userClient.unsaveRecipe(recipeId);
    } else {
      userClient.saveRecipe(recipeId);
    }
  };

  const deleteRecipeButton = (recipe: any) => {
    dispatch(deleteRecipe(recipe._id));
  };

  return (
    <div id="rs-recipe-list">
      {filteredRecipes
        .slice()
        .reverse()
        .map((recipe: any) => (
          <ListGroup className="rounded-0" id="wd-modules">
            <ListGroup.Item className="rs-recipe p-0 mb-3 fs-5 rounded-3 blue-bg recipe-image">
              <div className="p-3 ps-2 text-start border-gray d-flex justify-content-between align-items-center">
                <div className="d-flex flex-column flex-grow-1">
                  <span className="ps-2">
                    {recipe.name} {"  "}
                    <div className="box">
                      <div className="item">
                        {Array.from({ length: recipe.stars }).map(
                          (_, index) => (
                            <FaStar key={index} style={{ color: "yellow" }} />
                          )
                        )}
                      </div>
                    </div>
                  </span>
                  <div className="fs-6 pb-3 ps-2 text-start">
                    {recipe.description}
                  </div>
                  <div className="text-start ps-2">
                    <Link
                      to={`/Feed/RecipeDetails/${recipe._id}`}
                      className="btn bg-secondary border-0 me-2"
                    >
                      See More Details
                    </Link>
                    {currentUser &&
                      (currentUser._id === recipe.owner ||
                        currentUser.role === "Admin") && (
                        <>
                          <div className="btn">
                            <FaTrash
                              onClick={() => deleteRecipeButton(recipe)}
                              style={{ cursor: "pointer", color: "red" }}
                              title="Delete Recipe"
                              size={18}
                            />
                          </div>
                          <Link
                            to={`/Feed/EditRecipe/${recipe._id}`}
                            className="btn border-0"
                          >
                            <FaPencil
                              style={{ cursor: "pointer", color: "blue" }}
                              title="Edit Recipe"
                              size={18}
                            />
                          </Link>
                        </>
                      )}
                    {currentUser && (
                      <button
                        className="btn border-0"
                        onClick={() => toggleSaveRecipe(recipe._id)}
                        title={
                          currentUser?.savedRecipes?.includes(recipe._id)
                            ? "Unsave Recipe"
                            : "Save Recipe"
                        }
                      >
                        {currentUser?.savedRecipes?.includes(recipe._id) ? (
                          <FaBookmark
                            size={18}
                            style={{ color: "dodgerblue" }}
                          />
                        ) : (
                          <FaRegBookmark size={18} style={{ color: "gray" }} />
                        )}
                      </button>
                    )}
                  </div>
                </div>
                <img
                  src="/images/baked-ziti.jpg"
                  alt="Recipe"
                  className="ms-3"
                  style={{ width: "100px", height: "auto", objectFit: "cover" }}
                />
              </div>
            </ListGroup.Item>
          </ListGroup>
        ))}
    </div>
  );
}
