import { Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ProfileBottomBar() {
  return (
    <Row>
      {/* Breaks so that the content can fully scroll */}
      <br />
      <br />
      <br />
      {/* bottom buttons */}
      <div
        id="recipe-profile-bottom"
        className="d-flex flex-row justify-content-between m-3 bg-secondary"
      >
        <Button variant="danger" className="m-3" size="lg">
          Sign out
        </Button>
        <Link className="btn btn-warning btn-lg m-3" to="/Profile/Edit">
          Edit
        </Link>
      </div>
    </Row>
  );
}
