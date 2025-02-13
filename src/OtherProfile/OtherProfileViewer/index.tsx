import { Col, Row } from "react-bootstrap";
import ProfileBasicInfo from "../../Profile/MyProfileViewer/ProfileBasicInfo";
import { Link } from "react-router-dom";
import BioDisplay from "../../Profile/MyProfileViewer/BioDisplay";
import AllergenDisplay from "../../Profile/MyProfileViewer/AllergenDisplay";
import PreferencesDisplay from "../../Profile/MyProfileViewer/PreferencesDisplay";

export default function OtherProfileViewer() {
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
                Posts
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
    </div>
  );
}
