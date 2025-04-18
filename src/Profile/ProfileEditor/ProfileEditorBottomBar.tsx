import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserAllergies, UserPreferences } from "../../Types/Types";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../reducer";
import { useNavigate } from "react-router-dom";

export default function ProfileEditorBottomBar({
  userId,
  username,
  name,
  bio,
  allergies,
  preferences,
}: {
  userId: string;
  username: string;
  name: string;
  bio: string;
  allergies: UserAllergies[];
  preferences: UserPreferences[];
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Row>
      <div
        id="recipe-profile-bottom"
        className="d-flex flex-row justify-content-between m-3"
      >
        <Link
          className="btn btn-danger btn-lg m-3"
          to={`/Profile/${userId}/View`}
        >
          Revert Changes
        </Link>
        <Button
          className="btn btn-warning btn-lg m-3"
          onClick={() => {
            dispatch(
              setCurrentUser({
                _id: userId,
                username: username,
                name: name,
                bio: bio,
                allergies: allergies,
                preferences: preferences,
              })
            );
            navigate(`/Profile/${userId}/View`);
          }}
        >
          Save Changes
        </Button>
      </div>
    </Row>
  );
}
