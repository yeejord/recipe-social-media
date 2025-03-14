import { Card, Dropdown, Form } from "react-bootstrap";
import PreferenceIconEdit from "./PreferenceIconEdit";
import { User } from "../../Types/Types";

export default function AllergiesSelector({ user }: { user: User }) {
  return (
    <div id="recipe-allergies-selector" className="profile-card-holder">
      <Card>
        <Card.Body>
          <Card.Title>Allergies</Card.Title>
          <Card.Text>
            {user.allergies.map((allergen) => (
              <PreferenceIconEdit
                iconType="allergen"
                name={allergen}
                removeSelf={() => {
                  console.log(`Remove ${allergen}`);
                }}
              />
            ))}
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
              <Dropdown.Item>Tree Nuts</Dropdown.Item>
              <Dropdown.Item>Peanuts</Dropdown.Item>
              <Dropdown.Item>Wheat</Dropdown.Item>
              <Dropdown.Item>Dairy</Dropdown.Item>
              <Dropdown.Item>Shellfish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}
