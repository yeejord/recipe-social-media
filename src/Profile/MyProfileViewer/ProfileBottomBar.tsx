import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { User } from "../../Types/Types";

export default function ProfileBottomBar({ user }: { user: User }) {
  return (
    <Row>
      <div
        id="recipe-profile-bottom"
        className="d-flex flex-row justify-content-between m-3"
      >
        <Link className="btn btn-danger btn-lg m-3" to="/Signin">
          Sign out
        </Link>
        <Link
          className="btn btn-warning btn-lg m-3"
          to={`/Profile/${user._id}/Edit`}
        >
          Edit
        </Link>
      </div>
    </Row>
  );
}
