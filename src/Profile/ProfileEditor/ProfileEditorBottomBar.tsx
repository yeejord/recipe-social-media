import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProfileEditorBottomBar({
  userid,
  updateUser,
}: {
  userid: string;
  updateUser: () => void;
}) {
  return (
    <Row>
      <div
        id="recipe-profile-bottom"
        className="d-flex flex-row justify-content-between m-3"
      >
        <Link
          className="btn btn-danger btn-lg m-3"
          to={`/Profile/${userid}/View`}
        >
          Revert Changes
        </Link>
        <Button className="btn btn-warning btn-lg m-3" onClick={updateUser}>
          Save Changes
        </Button>
      </div>
    </Row>
  );
}
