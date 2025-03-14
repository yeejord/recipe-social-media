import { Button, Card, Dropdown, Form } from "react-bootstrap";
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
          <Dropdown>
            <Dropdown.Toggle className="selector-dropdown">
              <Form.Control
                id="recipe-allergies"
                placeholder="Allergies"
                className="mb-2"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}
