import { Card } from "react-bootstrap";
import PreferenceIcon from "./PreferenceIcon";

export default function AllergenDisplay() {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-allergens" className="profile-card">
        <Card.Body>
          <Card.Title>Allergies</Card.Title>
          <Card.Text>
            <PreferenceIcon iconType="allergen" name="Tree Nuts" />
            <PreferenceIcon iconType="allergen" name="Shellfish" />
            <PreferenceIcon iconType="allergen" name="Sesame" />
            <PreferenceIcon iconType="allergen" name="Peanuts" />
            <PreferenceIcon iconType="allergen" name="Almonds" />
            <PreferenceIcon iconType="allergen" name="Wheat" />
            <PreferenceIcon iconType="allergen" name="Dairy" />
            <PreferenceIcon iconType="allergen" name="Food" />
            <PreferenceIcon iconType="allergen" name="Water" />
            <PreferenceIcon iconType="allergen" name="Oxygen" />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
