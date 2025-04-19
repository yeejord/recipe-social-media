import { FaStar } from "react-icons/fa";
import { recipes } from "../Database";
import { useParams } from "react-router";
import "./RecipeViewer.css";
import { Card } from "react-bootstrap";

export default function RecipeViewer() {
  const { recipeid } = useParams();
  const recipe = recipes.find((r) => r._id === recipeid);
  if (recipe === undefined) {
    throw "Could not find recipe";
  }
  const description: string = recipe.description;
  const ingredients: string = (recipe as any).ingredients ?? "";
  const steps: string = (recipe as any).steps ?? "";
  const link: string = (recipe as any).link ?? "";
  return (
    <div>
      <Card className="recipe-viewer-background">
        <Card.Title>
          <h1>{recipe.name}</h1>
        </Card.Title>
        <Card.Text id="recipe-viewer-stars">
          <span className="ps-2">
            {Array.from({ length: recipe.stars }).map((_, index) => (
              <FaStar key={index} style={{ color: "yellow" }} />
            ))}
          </span>
        </Card.Text>
        {description && (
          <div>
            <Card.Body>
              <p>{description}</p>
            </Card.Body>
          </div>
        )}
        {ingredients && (
          <div>
            <Card.Title>
              <h3>Ingredients</h3>
            </Card.Title>
            <Card.Body>
              {ingredients.split("\n").map((line) => (
                <p key={line}>{line}</p>
              ))}
            </Card.Body>
          </div>
        )}
        {steps && (
          <div>
            <Card.Title>
              <h3>Recipe Steps</h3>
            </Card.Title>
            <Card.Body>
              {steps.split("\n").map((line) => (
                <p key={line}>{line}</p>
              ))}
            </Card.Body>
          </div>
        )}
        {link && (
          <div>
            <Card.Title>
              <h3>Recipe Link</h3>
            </Card.Title>
            <Card.Body>
              <a href={link}>{link}</a>
            </Card.Body>
          </div>
        )}
      </Card>
    </div>
  );
}
