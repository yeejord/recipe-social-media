import { Badge, Card } from "react-bootstrap";

export default function AllergenDisplay() {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-allergens" className="profile-card">
        <Card.Body>
          <Card.Title>Allergies</Card.Title>
          <Card.Text>
            <Badge bg="danger" className="recipe-profile-badge">
              Tree Nuts
            </Badge>
            <Badge bg="danger" className="recipe-profile-badge">
              Shellfish
            </Badge>
            <Badge bg="danger" className="recipe-profile-badge">
              Sesame
            </Badge>
            <Badge bg="danger" className="recipe-profile-badge">
              Peanuts
            </Badge>
            <Badge bg="danger" className="recipe-profile-badge">
              Almonds
            </Badge>
            <Badge bg="danger" className="recipe-profile-badge">
              Wheat
            </Badge>
            <Badge bg="danger" className="recipe-profile-badge">
              Dairy
            </Badge>
            <Badge bg="danger" className="recipe-profile-badge">
              Food
            </Badge>
            <Badge bg="danger" className="recipe-profile-badge">
              Water
            </Badge>
            <Badge bg="danger" className="recipe-profile-badge">
              Oxygen
            </Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
