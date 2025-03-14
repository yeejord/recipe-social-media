import { Card } from "react-bootstrap";
import PreferenceIcon from "./PreferenceIcon";

export default function PreferencesDisplay() {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-preferences" className="profile-card">
        <Card.Body>
          <Card.Title>Preferences</Card.Title>
          <Card.Text>
            <PreferenceIcon iconType="preference" name="Vegan" />
            <PreferenceIcon iconType="preference" name="Vegetarian" />
            <PreferenceIcon iconType="preference" name="Omnivore" />
            <PreferenceIcon iconType="preference" name="Herbivore" />
            <PreferenceIcon iconType="preference" name="Carnivore" />
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
