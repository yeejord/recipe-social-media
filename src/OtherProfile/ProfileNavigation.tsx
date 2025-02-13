import { Nav } from "react-bootstrap";

export default function ProfileNavigation() {
  return (
    <Nav variant="pills" className="justify-content-around recipe-profile-nav">
      <Nav.Item>
        <Nav.Link href="#/OtherProfile/123/View">User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/OtherProfile/123/Following">Following</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/OtherProfile/123/Followers">Followers</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
