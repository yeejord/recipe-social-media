import { Button, Row } from "react-bootstrap";

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
        <Button variant="warning" className="m-3" size="lg">
          Edit
        </Button>
      </div>
    </Row>
  );
}
