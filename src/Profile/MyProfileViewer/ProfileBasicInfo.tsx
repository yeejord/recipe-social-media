import { Row, Image, Card } from "react-bootstrap";
import { User } from "../../Types/Types";

export default function ProfileBasicInfo({ user }: { user: User }) {
  return (
    <div id="recipe-profile-basic-info">
      <Row>
        <div className="profile-card-holder">
          <Card>
            <Card.Title className="text-center" id="recipe-profile-name">
              {user.name}
            </Card.Title>
            <Card.Title className="text-center" id="recipe-profile-username">
              {user.username}
            </Card.Title>
          </Card>
        </div>
      </Row>
    </div>
  );
}
