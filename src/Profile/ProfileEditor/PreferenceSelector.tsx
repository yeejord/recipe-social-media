import { Card, Dropdown, Form } from "react-bootstrap";
import PreferenceIconEdit from "./PreferenceIconEdit";
import { User } from "../../Types/Types";

export default function PreferencesSelector({ user }: { user: User }) {
  return (
    <div id="recipe-preferences-selector" className="profile-card-holder">
      <Card>
        <Card.Body>
          <Card.Title>Preferences</Card.Title>
          <Card.Text>
            {user.preferences.map((pref) => (
              <PreferenceIconEdit
                iconType="preference"
                name={pref}
                removeSelf={() => {
                  console.log(`Remove ${pref}`);
                }}
                key={pref}
              />
            ))}
          </Card.Text>
          <Dropdown>
            <Dropdown.Toggle className="selector-dropdown">
              <Form.Control
                id="recipe-preferences"
                placeholder="Preferences"
                className="mb-2"
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item>Vegan</Dropdown.Item>
              <Dropdown.Item>Vegetarian</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}
