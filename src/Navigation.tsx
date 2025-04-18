import { FormControl, InputGroup } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div
      id="rs-navigation"
      className="list-group rounded-0 position-fixed justify-content-center align-items-center
                d-flex flex-row w-100 top-0 start-0 bg-black"
      z-index={5}
    >
      <InputGroup size="sm" className="ms-4 me-4 bg-white" id="wd-search-bar">
        <InputGroup.Text>
          <FaMagnifyingGlass />
        </InputGroup.Text>
        <FormControl placeholder="Search..." />
      </InputGroup>
      <Link
        to="/Feed"
        id="rs-feed-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        Feed
      </Link>
      <Link
        to="/Profile/123"
        id="rs-profile-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        Profile
      </Link>
      <Link
        to="/NewRecipe"
        id="rs-new-recipe-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        New Recipe
      </Link>
      <Link
        to="/Signin"
        id="rs-sign-out-link"
        className="list-group-item text-center border-0 bg-black text-white"
      >
        Sign Out
      </Link>
    </div>
  );
}
