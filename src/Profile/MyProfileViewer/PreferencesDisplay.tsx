import { Card } from "react-bootstrap";
import PreferenceIcon from "./PreferenceIcon";
import { User } from "../../Types/Types";

export default function PreferencesDisplay({ user }: { user: User }) {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-preferences" className="profile-card border-0">
        <Card.Body>
          <Card.Title>Preferences</Card.Title>
          <Card.Text>
            {user.preferences.map((pref) => (
              <PreferenceIcon iconType="preference" name={pref} key={pref} />
            ))}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
