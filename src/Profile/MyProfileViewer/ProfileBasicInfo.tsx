import { Row, Image, Card } from "react-bootstrap";
import { User } from "../../Types/Types";

export default function ProfileBasicInfo({ user }: { user: User }) {
  return (
    <div id="recipe-profile-basic-info">
      <Row>
        <div className="profile-card-holder">
          <Card className="border-0">
            <Card.Title className="text-center" id="recipe-profile-name">
              {user.name}
            </Card.Title>
            <Card.Title className="text-center" id="recipe-profile-username">
              {user.username}
            </Card.Title>
          </Card>
        </div>
      </Row>
      <Row className="profile-image-holder d-flex justify-content-center">
        <Image
          src="../../images/DetectiveClock.png"
          fluid
          roundedCircle
          className="profile-image bg-primary w-50"
          id="recipe-profile-basic-info-image"
        />
      </Row>
    </div>
  );
}
