export type UserRole = "User";
export type UserAllergies =
  | "Tree Nuts"
  | "Peanuts"
  | "Gluten"
  | "Shellfish"
  | "Sesame"
  | "Almonds"
  | "Wheat"
  | "Dairy";

export const allAllergies: UserAllergies[] = [
  "Tree Nuts",
  "Peanuts",
  "Gluten",
  "Shellfish",
  "Sesame",
  "Almonds",
  "Wheat",
  "Dairy",
];

export type UserPreferences = "Vegan" | "Vegetarian";

export const allPreferences: UserPreferences[] = ["Vegan", "Vegetarian"];

export interface User {
  _id: string;
  name: string;
  username: string;
  bio: string;
  role: UserRole;
  allergies: UserAllergies[];
  preferences: UserPreferences[];
  following: string[];
  followers: string[];
}
