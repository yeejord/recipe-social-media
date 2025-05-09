import { Button, Col, Row } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { updateRecipe } from "./../reducer";
import { useDispatch, useSelector } from "react-redux";
import * as client from "../client";

export default function EditRecipe() {
  const { recipeid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { recipes } = useSelector((state: any) => state.recipesReducer);
  const recipe = recipes.find((r: any) => r._id === recipeid);
  const [name, setName] = useState(recipe?.name || "");
  const [description, setDescription] = useState(recipe?.description || "");
  const [stars, setStars] = useState(recipe?.stars || 0);
  const [ingredients, setIngredients] = useState(recipe?.ingredients || "");
  const [steps, setSteps] = useState(recipe?.steps || "");
  const [link, setLink] = useState(recipe?.link || "");

  const handleUpdateRecipe = () => {
    const updatedRecipe = {
      _id: recipeid,
      name,
      description,
      stars,
      ingredients,
      steps,
      link,
    };
    dispatch(updateRecipe(updatedRecipe));
    client.updateRecipe(updatedRecipe);
    navigate("/Feed");
  };

  return (
    <div id="rs-new-recipe">
      <h1>Edit Recipe</h1>
      <Form.Group
        as={Row}
        className="mb-3 ms-1 me-1 text-nowrap"
        controlId="wd-assignment-name"
      >
        <Form.Label className="d-block">Recipe Name</Form.Label>
        <Col sm={12}>
          <Form.Control
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="recipe name"
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 ms-1 me-1" controlId="wd-textarea">
        <Form.Label className="d-block">Recipe Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        ></Form.Control>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="wd-points">
        <Form.Label column sm={2} className="text-end">
          Rating
        </Form.Label>
        <Col sm={10}>
          <Button
            onClick={() => setStars(1)}
            className={`me-2 btn ${
              stars === 1 ? "btn-primary" : "btn-secondary border-0"
            }`}
          >
            1 star
          </Button>
          <Button
            onClick={() => setStars(2)}
            className={`me-2 btn ${
              stars === 2 ? "btn-primary" : "btn-secondary border-0"
            }`}
          >
            2 stars
          </Button>
          <Button
            onClick={() => setStars(3)}
            className={`me-2 btn ${
              stars === 3 ? "btn-primary" : "btn-secondary border-0"
            }`}
          >
            3 stars
          </Button>
          <Button
            onClick={() => setStars(4)}
            className={`me-2 btn ${
              stars === 4 ? "btn-primary" : "btn-secondary border-0"
            }`}
          >
            4 stars
          </Button>
          <Button
            onClick={() => setStars(5)}
            className={`me-2 btn ${
              stars === 5 ? "btn-primary" : "btn-secondary border-0"
            }`}
          >
            5 stars
          </Button>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="wd-assignment-group">
        <Form.Label column sm={2} className="text-end">
          Ingredients
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            as="textarea"
            rows={6}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="ingredients"
          ></Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="wd-display-grade">
        <Form.Label column sm={2} className="text-end">
          Recipe Steps
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            as="textarea"
            rows={12}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="steps"
          ></Form.Control>
        </Col>
      </Form.Group>
      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={2} className="text-end">
          Link to Recipe{" "}
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="link goes here"
          ></Form.Control>
        </Col>
      </Form.Group>
      <hr />
      <div className="d-flex float-end">
        <Button
          onClick={handleUpdateRecipe}
          className="btn-primary border-0 me-1"
        >
          Update
        </Button>
        <Button
          className="bg-danger text-white border border-0 me-1"
          onClick={() => {
            navigate("/Feed");
          }}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}
