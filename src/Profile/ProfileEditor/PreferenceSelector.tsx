import { Card, Form } from "react-bootstrap";
import PreferenceIconEdit from "./PreferenceIconEdit";

export default function PreferencesSelector() {
  return (
    <div id="recipe-preferences-selector" className="profile-card-holder">
      <Card>
        <Card.Body>
          <Card.Title>Preferences</Card.Title>
          <Card.Text>
            <PreferenceIconEdit iconType="preference" name="Vegan" />
            <PreferenceIconEdit iconType="preference" name="Vegetarian" />
          </Card.Text>
          <Form.Control
            id="recipe-preferences"
            placeholder="Preferences"
            className="mb-2"
          />
        </Card.Body>
      </Card>
    </div>
  );
}
