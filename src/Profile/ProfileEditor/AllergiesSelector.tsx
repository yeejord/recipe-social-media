import { Card, Form } from "react-bootstrap";
import PreferenceIconEdit from "./PreferenceIconEdit";

export default function AllergiesSelector() {
  return (
    <div id="recipe-allergies-selector" className="profile-card-holder">
      <Card>
        <Card.Body>
          <Card.Title>Allergies</Card.Title>
          <Card.Text>
            <PreferenceIconEdit iconType="allergen" name="Tree Nuts" />
            <PreferenceIconEdit iconType="allergen" name="Peanuts" />
          </Card.Text>
          <Form.Control
            id="recipe-allergies"
            placeholder="Allergies"
            className="mb-2"
          />
        </Card.Body>
      </Card>
    </div>
  );
}
