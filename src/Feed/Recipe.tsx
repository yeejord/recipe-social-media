import { Button, ListGroup } from "react-bootstrap";
import { FaStar } from "react-icons/fa";

export default function Recipes(){
    return(
        <div id="rs-recipe-list">
            <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="rs-recipe p-0 mb-5 fs-5 bg-secondary">
            <div className="p-3 ps-2 text-start border-gray d-flex justify-content-between align-items-center">
               <span>
                    Baked Ziti {"  "}
                    <FaStar style={{ color: "yellow"}} /> 
                    <FaStar style={{ color: "yellow"}} /> 
                    <FaStar style={{ color: "yellow"}} /> 
                    <FaStar style={{ color: "yellow"}} /> 
                    <FaStar style={{ color: "yellow"}} />
                </span>
              <img src="/images/baked-ziti.jpg" width={50}/>
            </div>
            <div className="fs-6 pb-2 ps-2 text-start">
                A cheesy baked pasta dish that can be adjusted to add sausage
            </div>
            <div className="pb-2 text-start ps-2"> 
                <Button className="bg-black border-0">See More Details</Button>
            </div>
          </ListGroup.Item>
        </ListGroup>
        </div>
    );
}