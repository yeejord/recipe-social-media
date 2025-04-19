import { Card, Form, InputGroup } from "react-bootstrap";

export default function BioDisplay(
  {bio, setBio}: { bio: string; setBio: (val: string) => void;}) {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-bio" className="profile-card">
        <Card.Body>
          <Card.Title>Bio</Card.Title>
          <Card.Text>
            <InputGroup className="mb-3">
              <Form.Control
                as="textarea"
                value={bio}
                aria-label="Bio"
                onChange={(e) => {setBio(e.target.value);}}
              />
            </InputGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
