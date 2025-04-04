import { Button } from "react-bootstrap";
import { CiBookmark } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa6";

export default function FeedControls() {
    return (
        <div id="rs-feed-controls" className="mb-4">
            <Button size="lg" className="me-1 border-0" id="wd-group-btn blue-bg">
                All
            </Button>
            <Button variant="secondary" size="lg" className="me-1" id="wd-assignment-btn">
                <FaRegNewspaper className="position-relative me-2" style={{ bottom: "1px" }} />
                My Recipes
            </Button>
            <Button variant="secondary" size="lg" className="me-1" id="wd-assignment-btn">
                <CiBookmark className="position-relative me-2" style={{ bottom: "1px" }} />
                Saved
            </Button>
        </div>
    );
}