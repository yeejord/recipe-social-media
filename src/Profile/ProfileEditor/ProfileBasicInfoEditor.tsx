import { Row, Image, Card, InputGroup, Form } from "react-bootstrap";
import { FaCameraRetro } from "react-icons/fa";
import { User } from "../../Types/Types";

export default function ProfileBasicInfoEditor({ user }: { user: User }) {
  return (
    <div id="recipe-profile-basic-info">
      <Row>
        <div className="profile-card-holder">
          <Card className="p-2">
            <div>
              <h5>Name</h5>
            </div>
            <InputGroup className="mb-3" size="lg">
              <Form.Control
                placeholder="Name"
                aria-label="Name"
                defaultValue={user.name}
              />
            </InputGroup>
            <div>
              <h5>Username</h5>
            </div>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Username"
                aria-label="Username"
                defaultValue={user.username}
              />
            </InputGroup>
          </Card>
        </div>
      </Row>
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
  );
}
