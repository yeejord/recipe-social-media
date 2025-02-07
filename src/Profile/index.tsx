import { Col, Row, Image, Card, Button } from "react-bootstrap";
import AllergiesSelector from "./AllergiesSelector";
import PreferencesSelector from "./PreferenceSelector";

export default function Profile() {
  return (
    <div id="recipe-profile">
      <h1>Profile</h1>
      <Image src="../../public/images/DetectiveClock.png" roundedCircle />
      <Card>
        <Card.Title>Profile</Card.Title>
        {/* All account attributes */}
        <Row>
          <Col>
            <p className="float-end">Username:</p>
          </Col>
          <Col>Something</Col>
        </Row>
        <Row>
          <Col>
            <p className="float-end">Name:</p>
          </Col>
          <Col>Name Here</Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" className="float-end">
              Favorites
            </Button>
          </Col>
          <Col>
            <Button variant="secondary">My Posts</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="secondary" className="float-end">
              Following
            </Button>
          </Col>
          <Col>
            <Button variant="secondary">Followers</Button>
          </Col>
        </Row>
        <AllergiesSelector />
        <PreferencesSelector />
        <Row>
          <Col>
            <Button variant="warning" className="float-end">
              Edit
            </Button>
          </Col>
          <Col>
            <Button variant="danger">Signout</Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
