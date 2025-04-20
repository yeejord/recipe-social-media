import { Row, Image, Card, InputGroup, Form } from "react-bootstrap";
import { FaCameraRetro } from "react-icons/fa";

export default function ProfileBasicInfoEditor({
  username,
  setUsername,
  name,
  setName,
}: {
  username: string;
  setUsername: (u: string) => void;
  name: string;
  setName: (n: string) => void;
}) {
  return (
    <div id="recipe-profile-basic-info">
      <Row>
        <div className="profile-card-holder">
          <Card className="p-2">
            <InputGroup className="mb-3" size="lg">
              <Form.Control
                placeholder="Name"
                aria-label="Name"
                defaultValue={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                defaultValue={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>
          </Card>
          <Row className="profile-image-holder">
            <div className="profile-image-edit-holder">
              <Image
                src="../../images/DetectiveClock.png"
                fluid
                roundedCircle
                className="profile-image-edit"
                id="recipe-profile-basic-info-image"
              />
              <FaCameraRetro className="fs-1 image-edit-cam text-black" />
            </div>

            <p>Insert image above</p>
          </Row>
        </div>
      </Row>
    </div>
  );
}
