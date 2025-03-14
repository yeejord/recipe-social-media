import { Button, Col, Row } from "react-bootstrap";
import ProfileBasicInfoEditor from "./ProfileBasicInfoEditor";
import BioEditor from "./BioEditor";
import AllergiesSelector from "./AllergiesSelector";
import PreferencesSelector from "./PreferenceSelector";
import ProfileEditorBottomBar from "./ProfileEditorBottomBar";
import * as db from "../../Database";
import { User } from "../../Types/Types";

export default function ProfileEditor() {
  const users = db.users as User[];
  const curUser: User = users[0];
  return (
    <div id="recipe-profile-editor">
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfoEditor user={curUser} />
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
            <BioEditor user={curUser} />
            <AllergiesSelector user={curUser} />
            <PreferencesSelector user={curUser} />
          </Row>
        </Col>
      </Row>
      <ProfileEditorBottomBar />
    </div>
  );
}
