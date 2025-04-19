import { Col, Row } from "react-bootstrap";
import ProfileBottomBar from "./ProfileBottomBar";
import ProfileBasicInfo from "./ProfileBasicInfo";
import AllergenDisplay from "./AllergenDisplay";
import PreferencesDisplay from "./PreferencesDisplay";
import BioDisplay from "./BioDisplay";
import { Link } from "react-router-dom";
import db from "../../Database";
import { User } from "../../Types/Types";
import { useSelector } from "react-redux";

export default function MyProfileViewer({ user }: { user: User }) {
  const { users } = useSelector((state: any) => state.profilesReducer); 
  const curUser = users.find((u: any) => u._id === user._id) ?? {
    _id: "123",
    name: "",
    username: "",
    bio: "",
    allergies: [],
    preferences: [],
  };   
  return (
    <div id="recipe-profile">
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfo user={user} />
        </Col>
        <Col md={8}>
          <Row>
            <div className="flex-row justify-content-around m-3">
              <Link
                className="btn btn-primary btn-lg m-3"
                to={`/Profile/${user._id}/MyPosts`}
              >
                My Recipes
              </Link>
              <Link
                className="btn btn-primary btn-lg m-3"
                to={`/Profile/${user._id}/Favorites`}
              >
                My Saved
              </Link>
            </div>
          </Row>
          <Row>
            <BioDisplay user={user} />
            <AllergenDisplay user={user} />
            <PreferencesDisplay user={user} />
          </Row>
        </Col>
      </Row>
      {curUser._id === user._id && <ProfileBottomBar user={user} />}
    </div>
  );
}
