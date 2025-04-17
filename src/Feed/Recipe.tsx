import { Button, ListGroup } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import * as db from "./../Database";
import "./feed.css";
import { useNavigate } from "react-router-dom";

export default function Recipes() {
  const recipes = db.recipes;
  const navigate = useNavigate();
  return (
    <div id="rs-recipe-list">
      {recipes.map((recipe) => (
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="rs-recipe p-0 mb-3 fs-5 rounded-3 blue-bg recipe-image">
            <div className="p-3 ps-2 text-start border-gray d-flex justify-content-between align-items-center">
              <div className="d-flex flex-column flex-grow-1">
                <span className="ps-2">
                  {recipe.name} {"  "}
                  {Array.from({ length: recipe.stars }).map((_, index) => (
                    <FaStar key={index} style={{ color: "yellow" }} />
                  ))}
                </span>
                <div className="fs-6 pb-3 ps-2 text-start">
                  {recipe.description}
                </div>
                <div className="text-start ps-2">
                  <Button
                    className="bg-secondary border-0"
                    onClick={() => {
                      navigate(`/Recipe/${recipe._id}`);
                    }}
                  >
                    See More Details
                  </Button>
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
