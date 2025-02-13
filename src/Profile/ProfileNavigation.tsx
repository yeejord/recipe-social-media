import { Nav } from "react-bootstrap";

export default function ProfileNavigation() {
  return (
    <Nav variant="pills" className="justify-content-around recipe-profile-nav">
      <Nav.Item>
        <Nav.Link href="#/Profile/View">Me</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Profile/Following">Following</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#/Profile/Followers">Followers</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
