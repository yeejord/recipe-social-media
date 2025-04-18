import { Nav } from "react-bootstrap";
import { User } from "../Types/Types";
import * as db from "../Database";

export default function ProfileNavigation({ user }: { user: User }) {
  const users = db.users as User[];
  const curUser: User = users[0];
  return (
    <Nav variant="pills" className="justify-content-around recipe-profile-nav">
      <Nav.Item>
        <Nav.Link href={`#/Profile/${user._id}/View`}>
          {curUser._id === user._id ? "Me" : user.name}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={`#/Profile/${user._id}/Following`}>Following</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={`#/Profile/${user._id}/Followers`}>Followers</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
