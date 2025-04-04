import { Card, Form, InputGroup } from "react-bootstrap";
import { User } from "../../Types/Types";

export default function BioDisplay({
  bio,
  setBio,
}: {
  bio: string;
  setBio: (b: string) => void;
}) {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-bio" className="profile-card">
        <Card.Body>
          <Card.Title>Bio</Card.Title>
          <Card.Text>
            <InputGroup className="mb-3">
              <Form.Control
                as="textarea"
                placeholder={bio}
                aria-label="Bio"
                onChange={(e) => setBio(e.target.value)}
              />
            </InputGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
