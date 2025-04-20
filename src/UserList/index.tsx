import { Col, Row } from "react-bootstrap";
import UserCard from "./UserCard";
import { User } from "../Types/Types";

export default function UserList({ users }: { users: User[] }) {
  return (
    <div id="recipe-user-card-list">
      <Row>
        {users
          .filter((u) => u.role !== "Admin")
          .map((user) => (
            <Col md={6} key={user._id}>
              <UserCard user={user} key={user._id} />
            </Col>
          ))}
      </Row>
    </div>
  );
}
