import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Signin() {
  return (
    <div id="recipe-signin-screen">
      <h1>Welcome to Recipez</h1>
      <div id="recipe-signin">
        <h3>Sign in</h3>
        <Form.Control
          id="recipe-username"
          placeholder="username"
          className="mb-2"
        />
        <Form.Control
          id="recipe-password"
          placeholder="password"
          type="password"
          className="mb-2"
        />
        <Link
          id="recipe-signin-btn"
          to="/Feed"
          className="btn btn-primary w-100 mb-2"
        >
          Sign in
        </Link>
        <Link id="recipe-signup-link" to="/Signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
