import { Row, Col } from "react-bootstrap";
import { Button, Form, FormControl, FormSelect, InputGroup} from "react-bootstrap";


export default function NewRecipe(){
    return (
        <div id="rs-new-recipe">
            <h1>New Recipe</h1>
            <Form.Group as={Row} className="mb-3 text-nowrap" controlId="wd-assignment-name">
              <Form.Label className="d-block">
              Recipe Name
              </Form.Label>
              <Col sm={12}>
                <Form.Control placeholder="name"/>
              </Col>
              
          </Form.Group>
          <Form.Group as={Row} className="mb-3 ms-1 me-1" controlId="wd-textarea">
              <Form.Label className="d-block"> Recipe</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="description">
              </Form.Control>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="wd-points">
              <Form.Label column sm={2} className="text-end">
              Rating
              </Form.Label>
              <Col sm={10}>
              <Button className="bg-secondary border-0 me-2">1 star</Button>
              <Button className="bg-secondary border-0 me-2">2 stars</Button>
              <Button className="bg-secondary border-0 me-2">3 stars</Button>
              <Button className="bg-secondary border-0 me-2">4 stars</Button>
              <Button className="bg-secondary border-0 me-2">5 stars</Button>
              </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="wd-assignment-group">
            <Form.Label column sm={2} className="text-end">
              Ingredients
              </Form.Label>
            <Col sm={10}>
            <Form.Control as="textarea" rows={6} placeholder="ingredients">
              </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="wd-display-grade">
            <Form.Label column sm={2} className="text-end">
              Recipe Steps
              </Form.Label>
            <Col sm={10}>
            <Form.Control as="textarea" rows={12} placeholder="steps">
            </Form.Control>
            </Col>
          </Form.Group>
          <Form.Group as={Row}>
            <Form.Label as="legend" column sm={2} className="text-end">
                Link to Recipe </Form.Label>
            <Col sm={10}>
                <Form.Control placeholder="link goes here"></Form.Control>
            </Col>
          </Form.Group>
          <hr />
          <div className="d-flex float-end">
            <Button className="bg-danger text-white border border-0 me-1">Post</Button>
            <Button className="bg-secondary text-black border border-0 me-1">Cancel</Button>
            <Button className="bg-secondary text-black border border-0 me-1">Clear</Button>
          </div>
        </div>
    )
};