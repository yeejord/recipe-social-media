import { Badge, Card } from "react-bootstrap";

export default function PreferencesDisplay() {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-preferences" className="profile-card">
        <Card.Body>
          <Card.Title>Preferences</Card.Title>
          <Card.Text>
            <Badge bg="success" className="recipe-profile-badge">
              Vegan
            </Badge>
            <Badge bg="success" className="recipe-profile-badge">
              Vegetarian
            </Badge>
            <Badge bg="success" className="recipe-profile-badge">
              Omnivore
            </Badge>
            <Badge bg="success" className="recipe-profile-badge">
              Herbivore
            </Badge>
            <Badge bg="success" className="recipe-profile-badge">
              Carnivore
            </Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
