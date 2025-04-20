import { Button } from "react-bootstrap";
import Recipes from "../../Feed/Recipe/Recipes";
import { useNavigate } from "react-router-dom";

export default function ProfileMyRecipes({user}: any) {
    const navigate = useNavigate();
    return (
        <div>
            <div className="mt-4 mb-4">
                <h4>My Recipes</h4>
            </div>
            <Recipes filter={"mine"} />
            <Button onClick={() => navigate(`/Profile/${user._id}/View`)}
                className="bg-danger text-white border border-0 me-1">
                Back to Profile</Button>
        </div>
    );
}