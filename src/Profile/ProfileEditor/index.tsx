import { Button, Col, Row } from "react-bootstrap";
import ProfileBasicInfoEditor from "./ProfileBasicInfoEditor";
import BioEditor from "./BioEditor";
import AllergiesSelector from "./AllergiesSelector";
import PreferencesSelector from "./PreferenceSelector";
import ProfileEditorBottomBar from "./ProfileEditorBottomBar";

export default function ProfileEditor() {
  return (
    <div id="recipe-profile-editor">
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfoEditor />
        </Col>
        <Col md={8}>
          <Row>
            <div className="d-flex flex-row justify-content-around mt-3">
              <Button size="lg" disabled variant="outline-primary">
                Favorite Posts
              </Button>
              <Button size="lg" disabled variant="outline-primary">
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
      <ProfileEditorBottomBar />
    </div>
  );
}
