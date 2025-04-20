import { Button } from "react-bootstrap";
import { CiBookmark } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa6";
import { useSelector } from "react-redux";

export default function FeedControls({ filter, setFilter }: any) {

  const { currentUser } = useSelector((state: any) => state.profilesReducer);
  
  return (
    <div id="rs-feed-controls" className="mb-4">
      {currentUser && (<Button
        variant={filter === "feed" ? "primary" : "secondary"}
        size="lg"
        className={`me-1 border-0`}
        id="wd-group-btn"
        onClick={() => setFilter("feed")}
      >
        My Feed
      </Button>)}
      <Button
        variant={filter === "all" ? "primary" : "secondary"}
        size="lg"
        className={`me-1 border-0`}
        id="wd-group-btn"
        onClick={() => setFilter("all")}
      >
        All
      </Button>
      {currentUser && (<Button
        size="lg"
        variant={filter === "mine" ? "primary" : "secondary"}
        className={`position-relative me-2`}
        id="wd-assignment-btn"
        onClick={() => setFilter("mine")}
      >
        <FaRegNewspaper
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        My Recipes
      </Button>)}
      {currentUser && (<Button
        variant={filter === "saved" ? "primary" : "secondary"}
        size="lg"
        className={`position-relative me-2`}
        id="wd-assignment-btn"
        onClick={() => setFilter("saved")}
      >
        <CiBookmark
          className="position-relative me-2"
          style={{ bottom: "1px" }}
        />
        Saved
      </Button>)}
    </div>
  );
}
