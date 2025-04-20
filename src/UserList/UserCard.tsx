import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { User } from "../Types/Types";
import { deleteUser } from "../Profile/reducer";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

export default function UserCard({ user }: { user: User }) {
  const { users } = useSelector((state: any) => state.profilesReducer); 
  const curUser = users.find((u: any) => u._id === user._id) ?? {
    _id: "123",
    name: "",
    username: "",
    bio: "",
    allergies: [],
    preferences: [],
  };   

  const dispatch = useDispatch();

  return (
    <div>
        <Card className="recipe-user-card">
          <Card.Body>
            <Row>
              <Col xs={6} xl={3}>
                <Container>
                  <Image
                    fluid
                    src="../images/DetectiveClock.png"
                    roundedCircle
                    className="profile-image bg-primary"
                    id="recipe-profile-basic-info-image"
                  />
                </Container>
              </Col>
              <Col xs={6} xl={9}>
              <Link to={`/Profile/${user._id}/View`}>
                  <Card.Title className="text-center">
                    <h1>{curUser?.name}</h1>
                  </Card.Title>
                  <Card.Text className="text-center">
                    <h3>{curUser?.username}</h3>
                  </Card.Text>
                </Link>
                <Row className="justify-content-center">
                  <Col xs="auto">
                    <div className="d-inline-flex align-items-center btn p-1"
                      onClick={() => dispatch(deleteUser(curUser._id))}>
                      <FaTrash
                        style={{ cursor: "pointer", color: "red" }}
                        title="Delete User"
                        size={18}
                      />
                      <span className="ms-2 text-danger">Delete User</span>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
    </div>
  );
}
