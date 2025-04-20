import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./Profile/reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import * as client from "./Profile/client";
import { DatabaseUser } from "./Types/Types";

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [bio, setBio] = useState<string>("");
  const signup = async () => {
    if (password !== confirmPassword) return;
    const inputtedUser: DatabaseUser = {
      username,
      password,
      bio,
      _id: "",
      name,
      role: "User",
      allergies: [],
      preferences: [],
      savedRecipes: [],
    };
    const user = await client.signup(inputtedUser);
    if (!user) return;
    dispatch(setCurrentUser({ ...user, savedRecipes: [] }));
    navigate(`/Feed`);
  };
  return (
    <div>
      <h1>New here?</h1>
      <div id="recipe-signup">
        <h3>Sign up</h3>
        <Form.Control
          id="recipe-name"
          placeholder="Name"
          className="mb-2"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Form.Control
          id="recipe-username"
          placeholder="Username"
          className="mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Form.Control
          id="recipe-password"
          placeholder="Password"
          type="password"
          className="mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Form.Control
          id="recipe-password-confirm"
          placeholder="Confirm Password"
          type="password"
          className="mb-2"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Form.Control
          id="recipe-bio"
          placeholder="About me"
          className="mb-2"
          as="textarea"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Button
          id="recipe-signin-btn"
          onClick={signup}
          className="btn btn-primary w-100 mb-2 bg-danger"
        >
          Sign up
        </Button>

        <br />
        <Link to="/Signin" id="recipe-signup-link">
          Sign in
        </Link>
      </div>
    </div>
  );
}
