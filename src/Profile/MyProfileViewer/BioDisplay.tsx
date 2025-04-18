import { Card } from "react-bootstrap";
import { User } from "../../Types/Types";

export default function BioDisplay({ user }: { user: User }) {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-bio" className="profile-card">
        <Card.Body>
          <Card.Title>Bio</Card.Title>
          <Card.Text>{user.bio}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
