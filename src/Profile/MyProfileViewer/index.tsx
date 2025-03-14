import { Col, Row } from "react-bootstrap";
import ProfileBottomBar from "./ProfileBottomBar";
import ProfileBasicInfo from "./ProfileBasicInfo";
import AllergenDisplay from "./AllergenDisplay";
import PreferencesDisplay from "./PreferencesDisplay";
import BioDisplay from "./BioDisplay";
import { Link } from "react-router-dom";
import * as db from "../../Database";
import { User } from "../../Types/Types";

export default function MyProfileViewer() {
  const users = db.users as User[];
  const curUser: User = users[0];
  return (
    <div id="recipe-profile">
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfo user={curUser} />
        </Col>
        <Col md={8}>
          <Row>
            <div className="d-flex flex-row justify-content-around m-3">
              <Link
                className="btn btn-primary btn-lg m-3"
                to="/Profile/Favorites"
              >
                Favorite Posts
              </Link>
              <Link
                className="btn btn-primary btn-lg m-3"
                to="/Profile/MyPosts"
              >
                My Posts
              </Link>
            </div>
          </Row>
          <Row>
            <BioDisplay user={curUser} />
            <AllergenDisplay user={curUser} />
            <PreferencesDisplay user={curUser} />
          </Row>
        </Col>
      </Row>
      <ProfileBottomBar />
    </div>
  );
}
