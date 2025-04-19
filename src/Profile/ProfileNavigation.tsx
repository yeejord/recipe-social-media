import { Button, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function ProfileNavigation({ user, filter, setFilter}: any) {
  const { users } = useSelector((state: any) => state.profilesReducer); 
  const curUser = users.find((u: any) => u._id === user._id) ?? {
    _id: "123",
    name: "",
    username: "",
    bio: "",
    allergies: [],
    preferences: [],
  };   
  return (
    <Nav>
      <Nav.Item className="me-2">
        <Button size="lg"
        variant={filter === "view" ? "primary" : "secondary"}
        href={`#/Profile/${user._id}/View`}
        className="w-100"
        onClick={() => setFilter("view")}>
      {curUser._id === user._id ? "Me" : user.name}
    </Button>
    </Nav.Item>
      <Nav.Item className="me-2">
        <Button size="lg"
          variant={filter === "following" ? "primary" : "secondary"}
          href={`#/Profile/${user._id}/Following`}
          className="w-100"
          onClick={() => setFilter("following")}
        >
          Following
        </Button>
      </Nav.Item>
      <Nav.Item className="me-2">
        <Button size="lg"
          variant={filter === "followers" ? "primary" : "secondary"}
          href={`#/Profile/${user._id}/Followers`}
          className="w-100"
          onClick={() => setFilter("followers")}
        >
          Followers
        </Button>
      </Nav.Item>
      <Nav.Item className="me-2">
        <Button size="lg"
          variant={filter === "all" ? "primary" : "secondary"}
          href={`#/Profile/${user._id}/AllUsers`}
          className="w-100"
          onClick={() => setFilter("all")}
        >
          All Users
        </Button>
      </Nav.Item>
    </Nav>
  );
}
