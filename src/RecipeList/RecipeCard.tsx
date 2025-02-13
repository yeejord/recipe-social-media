import { Card, Col, Container, Image, Row } from "react-bootstrap";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

export default function RecipeCard() {
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
                  className="profile-image bg-primary"
                  id="recipe-profile-basic-info-image"
                />
              </Container>
            </Col>
            <Col xs={6} xl={9}>
              <Card.Title className="text-center">
                <h1>Iraqi Date Cookies</h1>
              </Card.Title>
              <Card.Text className="text-center">
                Cookies topped with sesame seads and filled with date paste!
              </Card.Text>
              <Card.Text className="text-center">
                Rating:{" "}
                <span className="text-primary">
                  <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />{" "}
                  <IoIosStarOutline />
                </span>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
}
