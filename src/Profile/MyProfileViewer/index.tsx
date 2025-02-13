import { Col, Row, Button } from "react-bootstrap";
import ProfileBottomBar from "./ProfileBottomBar";
import ProfileBasicInfo from "./ProfileBasicInfo";
import AllergenDisplay from "./AllergenDisplay";
import PreferencesDisplay from "./PreferencesDisplay";
import BioDisplay from "./BioDisplay";
import { Link } from "react-router-dom";

export default function MyProfileViewer() {
  return (
    <div id="recipe-profile">
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfo />
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
