import { Nav } from "react-bootstrap";
import { User } from "../Types/Types";
import db from "../Database";

export default function ProfileNavigation({ user }: { user: User }) {
  const users = db.users as User[];
  const curUser: User = users[0];
  return (
    <Nav variant="pills" className="justify-content-around recipe-profile-nav">
      <Nav.Item>
        <Nav.Link href={`#/Profile/${user._id}/View`} style={{ color: "black" }}>
          {curUser._id === user._id ? "Me" : user.name}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={`#/Profile/${user._id}/Following`} style={{ color: "black" }}>Following</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={`#/Profile/${user._id}/Followers`} style={{ color: "black" }}>Followers</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
