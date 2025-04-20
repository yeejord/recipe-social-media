import { Button, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function ProfileEditorBottomBar({
  user,
  onSave,
}: {
  user: any;
  onSave: () => void;
}) {
  const navigate = useNavigate();

  return (
    <Row>
      <div
        id="recipe-profile-bottom"
        className="d-flex flex-row blue-bg justify-content-between m-3"
      >
        <Link
          className="btn btn-danger btn-lg m-3"
          to={`/Profile/${user._id}/View`}
        >
          Cancel Changes
        </Link>
        <Button
          className="btn-warning btn-lg m-3"
          onClick={() => {
            console.log("Save Changes clicked");
            onSave();
            navigate(`/Profile/${user._id}/View`);
          }}
        >
          Save Changes
        </Button>
      </div>
    </Row>
  );
}
