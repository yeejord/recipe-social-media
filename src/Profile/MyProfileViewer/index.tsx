import { Col, Row } from "react-bootstrap";
import ProfileBottomBar from "./ProfileBottomBar";
import ProfileBasicInfo from "./ProfileBasicInfo";
import AllergenDisplay from "./AllergenDisplay";
import PreferencesDisplay from "./PreferencesDisplay";
import BioDisplay from "./BioDisplay";
import { User } from "../../Types/Types";
import { useSelector } from "react-redux";

export default function MyProfileViewer({ user }: { user: User }) {
  const { curUser } = useSelector((state: any) => state.userReducer);
  if (user._id === curUser._id) {
    user = curUser;
  }
  return (
    <div id="recipe-profile">
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfo user={user} />
        </Col>
        <Col md={8}>
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
