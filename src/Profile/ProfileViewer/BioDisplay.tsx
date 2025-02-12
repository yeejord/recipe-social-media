import { Card } from "react-bootstrap";

export default function BioDisplay() {
  return (
    <div className="profile-card-holder">
      <Card id="recipe-profile-bio" className="profile-card">
        <Card.Body>
          <Card.Title>Bio</Card.Title>
          <Card.Text>
            Hello, it's me. I'm a human. Yep. That's right. This is definitely
            not just temp text. Otherwise this would just be lorum posum. And
            not real text. The fact that you are reading this shows that this
            can't just be temporary. No. Never. Couldn't be this.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
