import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./Profile/reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as client from "./Profile/client";

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const signin = async () => {
    const user = await client.signin({ username, password });
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate(`/Profile/${user._id}`);
  };
  return (
    <div id="recipe-signin-screen">
      <h1>Welcome to Recipez</h1>
      <div id="recipe-signin">
        <h3>Sign in</h3>
        <Form.Control
          id="recipe-username"
          placeholder="username"
          className="mb-2"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Control
          id="recipe-password"
          placeholder="password"
          type="password"
          className="mb-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          id="recipe-signin-btn"
          onClick={signin}
          className="btn btn-primary w-100 mb-2"
        >
          Sign in
        </Button>
        <Link id="recipe-signup-link" to="/Signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}
