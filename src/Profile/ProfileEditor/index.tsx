import { Col, Row } from "react-bootstrap";
import ProfileBasicInfoEditor from "./ProfileBasicInfoEditor";
import BioEditor from "./BioEditor";
import AllergiesSelector from "./AllergiesSelector";
import PreferencesSelector from "./PreferenceSelector";
import ProfileEditorBottomBar from "./ProfileEditorBottomBar";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { UserAllergies, UserPreferences } from "../../Types/Types";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentUser } from "../reducer";

export default function ProfileEditor({ userid }: { userid: string }) {
  const { curUser } = useSelector((state: any) => state.userReducer);
  const [bio, setBio] = useState<string>(curUser.bio);
  const [username, setUsername] = useState<string>(curUser.username);
  const [name, setName] = useState<string>(curUser.name);
  const [allergies, setAllergies] = useState<UserAllergies[]>(
    curUser.allergies
  );
  const [preferences, setPreferences] = useState<UserPreferences[]>(
    curUser.preferences
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const updateUser = () => {
    dispatch(
      setCurrentUser({
        _id: userid,
        username: username,
        name: name,
        bio: bio,
        allergies: allergies,
        preferences: preferences,
      })
    );
    navigate(`/Profile/${userid}/View`);
  };
  return (
    <div id="recipe-profile-editor">
      {userid !== curUser._id && <Navigate to={`/Profile/${userid}/View`} />}
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfoEditor
            username={username}
            name={name}
            setUsername={setUsername}
            setName={setName}
          />
        </Col>
        <Col md={8}>
          <Row>
            <BioEditor bio={bio} setBio={setBio} />
            <AllergiesSelector
              allergies={allergies}
              setAllergies={setAllergies}
            />
            <PreferencesSelector
              preferences={preferences}
              setPreferences={setPreferences}
            />
          </Row>
        </Col>
      </Row>
      <ProfileEditorBottomBar updateUser={updateUser} userid={userid} />
    </div>
  );
}
