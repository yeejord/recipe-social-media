import { Button, Col, Row } from "react-bootstrap";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { User } from "../../Types/Types";
import { setUsers } from "../../Profile/reducer";
import * as userClient from "../../Profile/client";

export default function RecipeDetails() {
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

  const { recipeid } = useParams();
  const navigate = useNavigate();
  const { recipes } = useSelector((state: any) => state.recipesReducer);
  const { currentUser } = useSelector((state: any) => state.profilesReducer);
  const recipe = recipes.find((r: any) => r._id === recipeid);
  const recipeOwner = allUsers.find((u: any) => u._id === recipe.owner);
  console.log("recipeOwner = ");
  console.log(recipeOwner);

  return (
    <div id="rs-new-recipe">
      <Row>
        <Col md={3} className="d-flex align-items-start justify-content-center">
          <img
            src="/images/baked-ziti.jpg"
            alt="Recipe"
            className="img-fluid rounded shadow"
          />
        </Col>
        <Col md={8}>
          <div
            className="mb-2"
            style={{ display: "flex", alignItems: "center", gap: "10px" }}
          >
            <h1>{recipe?.name}</h1>
            <div className="ms-3 d-flex align-items-center">
              {Array.from({ length: recipe?.stars || 0 }).map((_, index) => (
                <FaStar
                  key={index}
                  style={{ color: "gold", fontSize: "2rem" }}
                />
              ))}
            </div>
            {currentUser &&
              (currentUser._id === recipe.owner ||
                currentUser.role === "Admin") && (
                <Link
                  to={`/Feed/EditRecipe/${recipe?._id}`}
                  className="btn border-0"
                >
                  <FaPencil
                    style={{ cursor: "pointer", color: "blue" }}
                    title="Edit Recipe"
                    size={18}
                  />
                </Link>
              )}
          </div>
          <div className="text-muted mb-0">
            uploaded by{" "}
            <Link to={`/Profile/${recipe.owner}`}>
              {recipeOwner?.username ?? "Unknown User"}
            </Link>
          </div>
          <div className="mb-4">
            <h4>{recipe?.description}</h4>
          </div>

          <div className="mb-4">
            <h5>Ingredients needed:</h5>
            <div className="ms-4">
              <h6>{recipe?.ingredients || "n/a"}</h6>
            </div>
          </div>

          <div className="mb-4">
            <h5>Recipe Steps:</h5>
            <div className="ms-4">
              <h6>{recipe?.steps || "n/a"}</h6>
            </div>
          </div>

          <div className="mb-4">
            <h5>Link to Recipe:</h5>
            <div className="ms-4">
              <h6>{recipe?.link || "n/a"}</h6>
            </div>
          </div>
        </Col>
      </Row>
      <hr />
      <div className="d-flex float-end mt-4">
        <Button
          className="bg-danger text-white border border-0 me-1"
          onClick={() => navigate("/Feed")}
        >
          Back
        </Button>
      </div>
    </div>
  );
}
