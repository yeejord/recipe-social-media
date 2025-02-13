import { Badge } from "react-bootstrap";

export default function PreferenceIcon(props: {
  iconType: "allergen" | "preference";
  name: string;
}) {
  return (
    <Badge
      bg={props.iconType === "allergen" ? "danger" : "success"}
      className="recipe-profile-badge"
    >
      {props.name}
    </Badge>
  );
}
