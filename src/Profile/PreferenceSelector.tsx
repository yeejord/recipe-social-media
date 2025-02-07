import { Col, Form, Row } from "react-bootstrap";

export default function PreferencesSelector() {
  return (
    <div id="recipe-preferences-selector">
      <Row>
        <Col>
          <p className="float-end">Preferences:</p>
        </Col>
        <Col>
          <Form.Control
            id="recipe-preferences"
            placeholder="Preferences"
            className="mb-2"
          />
        </Col>
      </Row>
    </div>
  );
}
