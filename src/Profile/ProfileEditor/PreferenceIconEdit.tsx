import { Badge } from "react-bootstrap";
import { IoIosCloseCircle } from "react-icons/io";

export default function PreferenceIconEdit(props: {
  iconType: "allergen" | "preference";
  name: string;
  removeSelf: () => void;
}) {
  return (
    <Badge
      bg={props.iconType === "allergen" ? "danger" : "success"}
      className="recipe-profile-badge"
    >
      {props.name}{" "}
      <IoIosCloseCircle onClick={props.removeSelf} className="text-black" />
    </Badge>
  );
}
