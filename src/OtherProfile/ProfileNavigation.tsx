import { Nav } from "react-bootstrap";
import { User } from "../Types/Types";

export default function ProfileNavigation({ user }: { user: User }) {
  return (
    <Nav variant="pills" className="justify-content-around recipe-profile-nav">
      <Nav.Item>
        <Nav.Link href={`#/OtherProfile/${user._id}/View`}>User</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={`#/OtherProfile/${user._id}/Following`}>
          Following
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={`#/OtherProfile/${user._id}/Followers`}>
          Followers
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
