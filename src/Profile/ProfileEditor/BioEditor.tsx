import { Card, Form, InputGroup } from "react-bootstrap";
import { User } from "../../Types/Types";

export default function BioDisplay({ user }: { user: User }) {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-bio" className="profile-card">
        <Card.Body>
          <Card.Title>Bio</Card.Title>
          <Card.Text>
            <InputGroup className="mb-3">
              <Form.Control
                as="textarea"
                value={user.bio}
                aria-label="Bio"
              />
            </InputGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
