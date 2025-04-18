import { Card, Dropdown, Form } from "react-bootstrap";
import PreferenceIconEdit from "./PreferenceIconEdit";
import { allPreferences, UserPreferences } from "../../Types/Types";
import { useState } from "react";

export default function PreferencesSelector({
  preferences,
  setPreferences,
}: {
  preferences: UserPreferences[];
  setPreferences: (newPrefs: UserPreferences[]) => void;
}) {
  const notPrefs = allPreferences.filter((p) => preferences.indexOf(p) === -1);
  const [searchVal, setSearchVal] = useState<string>("");
  return (
    <div id="recipe-preferences-selector" className="profile-card-holder">
      <Card>
        <Card.Body>
          <Card.Title>Preferences</Card.Title>
          <Card.Text>
            {preferences.map((pref) => (
              <PreferenceIconEdit
                iconType="preference"
                name={pref}
                removeSelf={() => {
                  setPreferences(preferences.filter((p) => p !== pref));
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
                onChange={(e) => setSearchVal(e.target.value)}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {notPrefs
                .filter((p) =>
                  p.toLowerCase().includes(searchVal.toLowerCase())
                )
                .map((p) => (
                  <Dropdown.Item
                    onClick={(e) => setPreferences([...preferences, p])}
                  >
                    {p}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}
