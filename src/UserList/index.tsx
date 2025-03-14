import { Col, Row } from "react-bootstrap";
import UserCard from "./UserCard";
import ProfileNavigation from "../Profile/ProfileNavigation";

export default function UserList() {
  return (
    <div id="recipe-user-card-list">
      <Row>
        <Col md={6}>
          <UserCard />
        </Col>
        <Col md={6}>
          <UserCard />
        </Col>
        <Col md={6}>
          <UserCard />
        </Col>
        <Col md={6}>
          <UserCard />
        </Col>
        <Col md={6}>
          <UserCard />
        </Col>
        <Col md={6}>
          <UserCard />
        </Col>
        <Col md={6}>
          <UserCard />
        </Col>
        <Col md={6}>
          <UserCard />
        </Col>
        <Col md={6}>
          <UserCard />
        </Col>
        <Col md={6}>
          <UserCard />
        </Col>
        <Col md={6}>
          <UserCard />
        </Col>
        <Col md={6}>
          <UserCard />
        </Col>
      </Row>
      {/* Repeated any num of times */}
    </div>
  );
}
