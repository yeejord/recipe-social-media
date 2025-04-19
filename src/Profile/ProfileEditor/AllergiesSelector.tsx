import { useState } from "react";
import { Card, Dropdown, Form } from "react-bootstrap";
import PreferenceIconEdit from "./PreferenceIconEdit";

export default function AllergiesSelector({
  allergies,
  setAllergies,
}: {
  allergies: string[];
  setAllergies: (newAllergies: string[]) => void;
}) {
  const [newAllergy, setNewAllergy] = useState<string>("");

  const options = ["Tree Nuts", "Peanuts", "Wheat", "Dairy", "Shellfish"];

  return (
    <div id="recipe-allergies-selector" className="profile-card-holder">
      <Card>
        <Card.Body>
          <Card.Title>Allergies</Card.Title>
          <Card.Text>
            {allergies.map((allergen) => (
              <PreferenceIconEdit
                iconType="allergen"
                name={allergen}
                removeSelf={() =>
                  setAllergies(allergies.filter((a) => a !== allergen))
                }
                key={allergen}
              />
            ))}
          </Card.Text>

          <Dropdown>
            <Dropdown.Toggle className="selector-dropdown">
              <Form.Control
                id="recipe-allergy-input"
                placeholder="Add Allergy"
                className="mb-2"
                value={newAllergy}
                readOnly
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {options.map((opt) => (
                <Dropdown.Item
                  key={opt}
                  onClick={() => {
                    setNewAllergy(opt);
                    if (!allergies.includes(opt)) {
                      setAllergies([...allergies, opt]);
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