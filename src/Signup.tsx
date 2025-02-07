import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup">
      <h1>Sign up</h1>
      <Form.Control id="wd-username" placeholder="Username" className="mb-2" />
      <Form.Control
        id="wd-password"
        placeholder="Password"
        type="password"
        className="mb-2"
      />
      <Form.Control
        id="wd-password-confirm"
        placeholder="Confirm Password"
        type="password"
        className="mb-2"
      />
      <Link
        id="wd-signin-btn"
        to="/Kambaz/Account/Profile"
        className="btn btn-primary w-100 mb-2 bg-danger"
      >
        Sign up
      </Link>

      <br />
      <Link to="/Kambaz/Account/Signin" id="wd-signup-link">
        Sign in
      </Link>
    </div>
  );
}
