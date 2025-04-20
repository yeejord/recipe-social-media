import { ListGroup } from "react-bootstrap";
import { FaStar, FaTrash } from "react-icons/fa";
import { deleteRecipe } from "../reducer";
import "./../feed.css";
import { useDispatch, useSelector } from "react-redux";
import { FaPencil } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Recipes({ recipes, filter, allRecipes }: any) {
  const { currentUser } = useSelector((state: any) => state.userReducer);
  const dispatch = useDispatch();
  const [filteredRecipes, setFilteredRecipes] = useState<any[]>([]);

  useEffect(() => {
    switch (filter) {
      case "all":
        setFilteredRecipes(allRecipes);
        break;
      case "feed":
        setFilteredRecipes(recipes);
        break;
      case "mine":
        setFilteredRecipes(
          allRecipes.filter((recipe: any) => recipe.owner === currentUser._id)
        );
        break;
      case "saved":
        setFilteredRecipes(
          allRecipes.filter((recipe: any) =>
            currentUser?.savedRecipes?.includes(recipe._id)
          )
        );
        break;
    }
  }, [filter]);

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
                    <div className="btn">
                      <FaTrash
                        onClick={() => dispatch(deleteRecipe(recipe._id))}
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
