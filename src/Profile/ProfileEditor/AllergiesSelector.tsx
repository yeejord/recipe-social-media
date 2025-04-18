import { Card, Dropdown, Form } from "react-bootstrap";
import PreferenceIconEdit from "./PreferenceIconEdit";
import { UserAllergies, allAllergies } from "../../Types/Types";
import { useState } from "react";

export default function AllergiesSelector({
  allergies,
  setAllergies,
}: {
  allergies: UserAllergies[];
  setAllergies: (allergies: UserAllergies[]) => void;
}) {
  const notAllergies = allAllergies.filter((a) => allergies.indexOf(a) === -1);
  const [searchVal, setSearchVal] = useState<string>("");
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
                removeSelf={() => {
                  setAllergies(
                    allergies.filter((a: UserAllergies) => a !== allergen)
                  );
                }}
                key={allergen}
              />
            ))}
          </Card.Text>
          <Dropdown>
            <Dropdown.Toggle className="selector-dropdown">
              <Form.Control
                id="recipe-allergies"
                placeholder="Allergies"
                className="mb-2"
                onChange={(e) => setSearchVal(e.target.value)}
              />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {notAllergies
                .filter((a) =>
                  a.toLowerCase().includes(searchVal.toLowerCase())
                )
                .map((a) => (
                  <Dropdown.Item
                    onClick={(e) => setAllergies([...allergies, a])}
                  >
                    {a}
                  </Dropdown.Item>
                ))}
            </Dropdown.Menu>
          </Dropdown>
        </Card.Body>
      </Card>
    </div>
  );
}
