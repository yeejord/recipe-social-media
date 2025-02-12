import { Row, Image, Card, InputGroup, Form } from "react-bootstrap";

export default function ProfileBasicInfoEditor() {
  return (
    <div id="recipe-profile-basic-info">
      <Row>
        <div className="profile-card-holder">
          <Card>
            <InputGroup className="mb-3">
              <Form.Control placeholder="Name" aria-label="Name" />
              <Form.Control placeholder="Username" aria-label="Username" />
            </InputGroup>
          </Card>
        </div>
      </Row>
      <Row className="profile-image-holder">
        <Image
          src="../../images/DetectiveClock.png"
          roundedCircle
          className="profile-image bg-primary"
          id="recipe-profile-basic-info-image"
        />
      </Row>
    </div>
  );
}
