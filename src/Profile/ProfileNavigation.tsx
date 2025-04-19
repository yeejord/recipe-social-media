import { Nav } from "react-bootstrap";
import { User } from "../Types/Types";
import { useSelector } from "react-redux";

export default function ProfileNavigation({ user }: { user: User }) {
  const { curUser } = useSelector((state: any) => state.userReducer);
  return (
    <Nav variant="pills" className="justify-content-around recipe-profile-nav">
      <Nav.Item>
        <Nav.Link href={`#/Profile/${user._id}/View`} id="View">
          {!!curUser && curUser._id === user._id ? "Me" : user.name}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={`#/Profile/${user._id}/Following`} id="Following">
          Following
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href={`#/Profile/${user._id}/Followers`} id="Followers">
          Followers
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
