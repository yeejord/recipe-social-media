import { Row, Image, Card, InputGroup, Form } from "react-bootstrap";

export default function ProfileBasicInfoEditor() {
  return (
    <div id="recipe-profile-basic-info">
      <Row>
        <div className="profile-card-holder">
          <Card className="p-2">
            <InputGroup className="mb-3" size="lg">
              <Form.Control
                placeholder="Name"
                aria-label="Name"
                defaultValue={"Name"}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                defaultValue={"username"}
              />
            </InputGroup>
          </Card>
        </div>
      </Row>
      <Row className="profile-image-holder">
        <Image
          src="../../images/DetectiveClock.png"
          fluid
          roundedCircle
          className="profile-image bg-primary"
          id="recipe-profile-basic-info-image"
        />
      </Row>
    </div>
  );
}
