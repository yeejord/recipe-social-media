import { useState } from "react";
import { Card, Dropdown, Form } from "react-bootstrap";
import PreferenceIconEdit from "./PreferenceIconEdit";


export default function PreferencesSelector({
  preferences,
  setPreferences,
}: {
  preferences: string[];
  setPreferences: (newPrefs: string[]) => void;
}) {
  const [newPref, setNewPref] = useState<string>("");

  const options = ["Vegan", "Vegetarian", "Gluten‑Free", "Keto", "Paleo"];

  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-preferences" className="profile-card border-0">
        <Card.Body>
          <Card.Title>Preferences</Card.Title>
          <Card.Text>
            {preferences.map((pref) => (
              <PreferenceIconEdit
                iconType="preference"
                name={pref}
                key={pref}
                removeSelf={() =>
                  setPreferences(preferences.filter((p) => p !== pref))
                }
              />
            ))}
          </Card.Text>

          <Dropdown>
            <Dropdown.Toggle className="selector-dropdown">
              <Form.Control
                id="recipe-preferences-input"
                placeholder="Add Preference"
                className="mb-2"
                value={newPref}
                readOnly
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {options.map((opt) => (
                <Dropdown.Item
                  key={opt}
                  onClick={() => {
                    setNewPref(opt);
                    if (!preferences.includes(opt)) {
                      setPreferences([...preferences, opt]);
                    }
                  }}
                >
                  {opt}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}
