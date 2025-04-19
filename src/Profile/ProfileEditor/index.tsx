import { Col, Row } from "react-bootstrap";
import ProfileBasicInfoEditor from "./ProfileBasicInfoEditor";
import BioEditor from "./BioEditor";
import AllergiesSelector from "./AllergiesSelector";
import PreferencesSelector from "./PreferenceSelector";
import ProfileEditorBottomBar from "./ProfileEditorBottomBar";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "./reducer";
import { useState } from "react";

export default function ProfileEditor({userid,}: {userid: string | undefined;}) {
  const { users } = useSelector((state: any) => state.profilesReducer); 
  const curUser = users.find((u: any) => u._id === "123") ?? {
    _id: "123",
    name: "",
    username: "",
    bio: "",
    allergies: [],
    preferences: [],
  };   

  const dispatch = useDispatch();

  const [name, setName] = useState(curUser?.name || "");
  const [username, setUsername] = useState(curUser?.username || "");
  const [bio, setBio] = useState(curUser?.bio || "");
  const [allergies, setAllergies] = useState(curUser?.allergies || "");
  const [preferences, setPreferences] = useState(curUser?.preferences || "");

  const handleSave = () => {
    const updatedUser = {
      ...curUser,
      name,
      username,
      bio,
      allergies,
      preferences,
    };
  
    console.log("Saving changes... Dispatching user:", updatedUser);  // Log the user being dispatched
  
    dispatch(updateUser(updatedUser));
  };

  return (
    <div id="recipe-profile-editor">
      {userid !== curUser?._id && (
        <Navigate to={`/Profile/${curUser?._id}/Edit`} />
      )}
      <Row id="recipe-profile-main">
        <Col md={4}>
          <ProfileBasicInfoEditor name={name}
            setName={setName}
            username={username}
            setUsername={setUsername} />
        </Col>
        <Col md={8}>
          <Row>
            <BioEditor bio={bio} setBio={setBio} />
            <AllergiesSelector allergies={allergies} setAllergies={setAllergies}/>
            <PreferencesSelector preferences={preferences} setPreferences={setPreferences} />
          </Row> 
        </Col>
      </Row>
      <ProfileEditorBottomBar user={curUser} onSave={handleSave}/>
    </div>
  );
}
