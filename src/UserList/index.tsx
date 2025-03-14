import { Col, Row } from "react-bootstrap";
import UserCard from "./UserCard";
import { User } from "../Types/Types";

export default function UserList({ users }: { users: User[] }) {
  return (
    <div id="recipe-user-card-list">
      <Row>
        {users.map((user) => (
          <Col md={6}>
            <UserCard user={user} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
