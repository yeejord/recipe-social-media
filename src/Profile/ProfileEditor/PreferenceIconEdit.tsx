import { Badge } from "react-bootstrap";
import { IoIosCloseCircle } from "react-icons/io";

export default function PreferenceIconEdit(props: {
  iconType: "allergen" | "preference";
  name: string;
}) {
  return (
    <Badge
      bg={props.iconType === "allergen" ? "danger" : "success"}
      className="recipe-profile-badge"
    >
      {props.name} <IoIosCloseCircle className="text-black" />
    </Badge>
  );
}
