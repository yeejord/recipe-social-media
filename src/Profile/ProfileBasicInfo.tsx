import { Row, Image, Card } from "react-bootstrap";

export default function ProfileBasicInfo() {
  return (
    <div id="recipe-profile-basic-info">
      <Row>
        <div className="profile-card-holder">
          <Card>
            <Card.Title className="text-center" id="recipe-profile-name">
              Name
            </Card.Title>
            <Card.Title className="text-center" id="recipe-profile-username">
              Username
            </Card.Title>
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
