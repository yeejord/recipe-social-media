import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { User } from "../Types/Types";

export default function UserCard({ user }: { user: User }) {
  return (
    <div>
      <Link to={`/OtherProfile/${user._id}/View`}>
        <Card className="recipe-user-card">
          <Card.Body>
            <Row>
              <Col xs={6} xl={3}>
                <Container>
                  <Image
                    fluid
                    src="../images/DetectiveClock.png"
                    roundedCircle
                    className="profile-image bg-primary"
                    id="recipe-profile-basic-info-image"
                  />
                </Container>
              </Col>
              <Col xs={6} xl={9}>
                <Card.Title className="text-center">
                  <h1>{user.name}</h1>
                </Card.Title>
                <Card.Text className="text-center">
                  <h3>{user.username}</h3>
                </Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
}
