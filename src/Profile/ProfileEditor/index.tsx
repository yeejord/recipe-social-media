import { Button, Col, Row } from "react-bootstrap";
import ProfileBasicInfoEditor from "./ProfileBasicInfoEditor";
import BioEditor from "./BioEditor";
import AllergiesSelector from "./AllergiesSelector";
import PreferencesSelector from "./PreferenceSelector";

export default function ProfileEditor() {
  return (
    <div id="recipe-profile-editor">
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfoEditor />
          <Row>
            <div className="d-flex flex-row justify-content-around m-3">
              <Button size="lg" disabled>
                Following
              </Button>
              <Button size="lg" disabled>
                Followers
              </Button>
            </div>
          </Row>
        </Col>
        <Col md={8}>
          <Row>
            <div className="d-flex flex-row justify-content-around m-3">
              <Button size="lg" disabled>
                Favorite Posts
              </Button>
              <Button size="lg" disabled>
                My Posts
              </Button>
            </div>
          </Row>
          <Row>
            <BioEditor />
            <AllergiesSelector />
            <PreferencesSelector />
          </Row>
        </Col>
      </Row>
    </div>
  );
}
