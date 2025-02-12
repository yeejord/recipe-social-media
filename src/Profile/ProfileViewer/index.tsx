import { Col, Row, Button } from "react-bootstrap";
import ProfileBottomBar from "./ProfileBottomBar";
import ProfileBasicInfo from "./ProfileBasicInfo";
import AllergenDisplay from "./AllergenDisplay";
import PreferencesDisplay from "./PreferencesDisplay";
import BioDisplay from "./BioDisplay";

export default function ProfileViewer() {
  return (
    <div id="recipe-profile">
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfo />
          <Row>
            <div className="d-flex flex-row justify-content-around m-3">
              <Button size="lg">Following</Button>
              <Button size="lg">Followers</Button>
            </div>
          </Row>
        </Col>
        <Col md={8}>
          <Row>
            <div className="d-flex flex-row justify-content-around m-3">
              <Button size="lg">Favorite Posts</Button>
              <Button size="lg">My Posts</Button>
            </div>
          </Row>
          <Row>
            <BioDisplay />
            <AllergenDisplay />
            <PreferencesDisplay />
          </Row>
        </Col>
      </Row>
      <ProfileBottomBar />
    </div>
  );
}
