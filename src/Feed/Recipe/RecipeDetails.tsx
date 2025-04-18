import { Button, Col, Row } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import db from "../../Database";
import { FaStar } from "react-icons/fa";

export default function RecipeDetails() {
    const { recipeid } = useParams();
    const navigate = useNavigate();
    const recipe = db.recipes.find((r: any) => r._id === recipeid);

    return (
        <div id="rs-new-recipe">
            <Row>
                <Col md={3} className="d-flex align-items-start justify-content-center">
                    <img
                        src="/images/baked-ziti.jpg"
                        alt="Recipe"
                        className="img-fluid rounded shadow"
                    />
                </Col>
                <Col md={8}>
                    <div className="mb-2" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <h1>{recipe?.name}</h1>
                        <div className="ms-3 d-flex align-items-center">
                            {Array.from({ length: recipe?.stars || 0 }).map((_, index) => (
                                <FaStar key={index} style={{ color: "gold", fontSize: "2rem" }} />
                            ))}
                        </div>
                    </div>

                    <div className="mb-4">
                        <h4>{recipe?.description}</h4>
                    </div>

                    <div className="mb-4">
                        <h5>Ingredients needed:</h5>
                        <div className="ms-4">
                            <h6>{recipe?.ingredients || "n/a"}</h6>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5>Recipe Steps:</h5>
                        <div className="ms-4">
                            <h6>{recipe?.steps || "n/a"}</h6>
                        </div>
                    </div>

                    <div className="mb-4">
                        <h5>Link to Recipe:</h5>
                        <div className="ms-4">
                            <h6>{recipe?.link || "n/a"}</h6>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
            <div className="d-flex float-end mt-4">
                <Button className="bg-danger text-white border border-0 me-1"
                     onClick={() => navigate("/Feed")}>
                     Back
                 </Button>
            </div>
        </div>
        
    );
};