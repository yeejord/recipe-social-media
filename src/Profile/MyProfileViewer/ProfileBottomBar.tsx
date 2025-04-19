import { Button, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../../Types/Types";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import * as client from "../client";

export default function ProfileBottomBar({ user }: { user: User }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate(`/Signin`);
  };
  return (
    <Row>
      <div
        id="recipe-profile-bottom"
        className="d-flex flex-row justify-content-between m-3"
      >
        <Button className="btn btn-danger btn-lg m-3" onClick={signout}>
          Sign out
        </Button>
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
