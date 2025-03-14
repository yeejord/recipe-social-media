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
      <h1>New here?</h1>
      <div id="recipe-signup">
        <h3>Sign up</h3>
        <Form.Control id="recipe-name" placeholder="Name" className="mb-2" />
        <Form.Control
          id="recipe-username"
          placeholder="Username"
          className="mb-2"
        />
        <Form.Control
          id="recipe-password"
          placeholder="Password"
          type="password"
          className="mb-2"
        />
        <Form.Control
          id="recipe-password-confirm"
          placeholder="Confirm Password"
          type="password"
          className="mb-2"
        />
        <Form.Control
          id="recipe-bio"
          placeholder="About me"
          className="mb-2"
          as="textarea"
        />
        <Link
          id="recipe-signin-btn"
          to="/Profile"
          className="btn btn-primary w-100 mb-2 bg-danger"
        >
          Sign up
        </Link>
      </div>
      <br />
      <Link to="/Signin" id="recipe-signup-link">
        Sign in
      </Link>
    </div>
  );
}
