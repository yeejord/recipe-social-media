import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { User } from "../../Types/Types";

export default function ProfileEditorBottomBar({ user }: { user: User }) {
  return (
    <Row>
      <div
        id="recipe-profile-bottom"
        className="d-flex flex-row justify-content-between m-3"
      >
        <Link
          className="btn btn-danger btn-lg m-3"
          to={`/Profile/${user._id}/View`}
        >
          Revert Changes
        </Link>
        <Link
          className="btn btn-warning btn-lg m-3"
          to={`/Profile/${user._id}/View`}
        >
          Save Changes
        </Link>
      </div>
    </Row>
  );
}
