import { Card, Form, InputGroup } from "react-bootstrap";

export default function BioDisplay() {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-bio" className="profile-card">
        <Card.Body>
          <Card.Title>Bio</Card.Title>
          <Card.Text>
            <InputGroup className="mb-3">
              <Form.Control
                as="textarea"
                placeholder="Who I am ..."
                aria-label="Bio"
              />
            </InputGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
