import { Col, Row } from "react-bootstrap";
import RecipeCard from "./RecipeCard";

export default function RecipeList() {
  return (
    <div id="recipe-recipe-card-list">
      <Row>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
        <Col md={6}>
          <RecipeCard />
        </Col>
      </Row>
      {/* Repeated any num of times */}
    </div>
  );
}
