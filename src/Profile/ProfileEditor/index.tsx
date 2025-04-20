import { Col, Row } from "react-bootstrap";
import ProfileBasicInfoEditor from "./ProfileBasicInfoEditor";
import BioEditor from "./BioEditor";
import AllergiesSelector from "./AllergiesSelector";
import PreferencesSelector from "./PreferenceSelector";
import ProfileEditorBottomBar from "./ProfileEditorBottomBar";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { useState } from "react";
import * as client from "./../client";

export default function ProfileEditor({
  userid,
}: {
  userid: string | undefined;
}) {
  const { currentUser } = useSelector((state: any) => state.userReducer);

  const dispatch = useDispatch();

  const [name, setName] = useState(currentUser?.name || "");
  const [username, setUsername] = useState(currentUser?.username || "");
  const [bio, setBio] = useState(currentUser?.bio || "");
  const [allergies, setAllergies] = useState(currentUser?.allergies);
  const [preferences, setPreferences] = useState(currentUser?.preferences);

  const handleSave = async () => {
    const updatedUser = {
      ...currentUser,
      name,
      username,
      bio,
      allergies,
      preferences,
    };
    await client.updateUser(updatedUser);

    console.log("Saving changes... Dispatching user:", updatedUser); // Log the user being dispatched

    dispatch(setCurrentUser(updatedUser));
  };

  return (
    <div id="recipe-profile-editor">
      {userid !== currentUser?._id && (
        <Navigate to={`/Profile/${currentUser?._id}/Edit`} />
      )}
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfoEditor
            name={name}
            setName={setName}
            username={username}
            setUsername={setUsername}
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
      <ProfileEditorBottomBar user={currentUser} onSave={handleSave} />
    </div>
  );
}
