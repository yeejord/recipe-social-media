import { Card } from "react-bootstrap";
import PreferenceIcon from "./PreferenceIcon";
import { User } from "../../Types/Types";

export default function AllergenDisplay({ user }: { user: User }) {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-allergens" className="profile-card">
        <Card.Body>
          <Card.Title>Allergies</Card.Title>
          <Card.Text>
            {user.allergies.map((allergen) => (
              <PreferenceIcon
                iconType="allergen"
                name={allergen}
                key={allergen}
              />
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
