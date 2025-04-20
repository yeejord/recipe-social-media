import { FormControl, InputGroup } from "react-bootstrap";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function Navigation({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (searchVal: string) => void;
}) {
  const { pathname } = useLocation();
  const links = [
    { label: "Feed", path: "/Feed" },
    { label: "Profile", path: "/Profile" },
    { label: "New Recipe", path: "/NewRecipe" },
    { label: "Sign Out", path: "/Signin" },
  ];
  return (
    <div
      id="rs-navigation"
      className="list-group rounded-0 position-fixed justify-content-center align-items-center
                d-flex flex-row w-100 top-0 start-0 bg-black"
      z-index={5}
    >
      <div className="ms-2 text-white">
        <h4>Recipz</h4>
      </div>
      <InputGroup size="sm" className="ms-4 me-4 bg-white" id="wd-search-bar">
        <InputGroup.Text>
          <FaMagnifyingGlass />
        </InputGroup.Text>
        <FormControl
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
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
    </div>
  );
}
