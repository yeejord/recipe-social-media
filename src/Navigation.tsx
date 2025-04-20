import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as userClient from "./Profile/client";
import { setCurrentUser } from "./Profile/reducer";

export default function Navigation() {
  const [searchVal, setSearchVal] = useState<string>("");
  console.log(`searchVal = ${searchVal}`);
  const { currentUser } = useSelector((state: any) => state.profilesReducer);
  const { pathname } = useLocation();
  const links = [
    { label: "Feed", path: "/Feed" },
    { label: "Profile", path: "/Profile" },
    { label: "New Recipe", path: "/NewRecipe" },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div
      id="rs-navigation"
      className="list-group rounded-0 position-fixed justify-content-center align-items-center
                d-flex flex-row w-100 top-0 start-0 bg-black"
      z-index={5}
    >
      <div className="ms-2 text-white">
        <h4>Recipez</h4>
      </div>
      <InputGroup size="sm" className="ms-4 me-4 bg-white" id="wd-search-bar">
        <InputGroup.Text>
          <FaMagnifyingGlass />
        </InputGroup.Text>
        <FormControl
          placeholder="Search..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <Link className="btn btn-primary" to={`Feed/${searchVal}`}>
          Search!
        </Link>
      </InputGroup>
      {links.map((link) => (
        <Link
          to={link.path}
          id="rs-feed-link"
          className={`list-group-item text-center border-0 bg-black text-white
          ${
            pathname.includes(link.path)
              ? "text-white bg-black text-decoration-underline"
              : "text-white bg-black"
          }`}
        >
          {link.label}
        </Link>
      ))}
      <Button
        variant={currentUser ? "danger" : "primary"}
        onClick={async () => {
          await userClient.signout();
          dispatch(setCurrentUser(null));
          navigate(`/Signin`);
        }}
      >
        {currentUser ? "Sign Out" : "Sign In"}
      </Button>
    </div>
  );
}
