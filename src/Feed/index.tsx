import FeedControls from "./FeedControls";
import Recipes from "./Recipe/Recipe";

export default function Feed() {
    return(
        <div id="rs-feed">
            <h1>Feed</h1>
            <FeedControls />
            <Recipes />
        </div>
    );
}