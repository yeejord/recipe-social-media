import { Col, Form, Row } from "react-bootstrap";

export default function AllergiesSelector() {
  return (
    <div id="recipe-allergies-selector">
      <Row>
        <Col>
          <p className="float-end">Allergies:</p>
        </Col>
        <Col>
          <Form.Control
            id="recipe-allergies"
            placeholder="Allergies"
            className="mb-2"
          />
        </Col>
      </Row>
    </div>
  );
}
