import { FetchUserAttributesOutput } from "aws-amplify/auth";
import { Role } from "../../types";
import { User } from "./AuthContext";

export const buildUserAttributes = (
  userAttributes: FetchUserAttributesOutput,
  isSignedIn: boolean
): User => {
  const {
    email,
    name,
    family_name,
    "custom:role": role,
    sub: userId,
  } = userAttributes;

  return {
    email: email || "",
    name: name || "",
    lastName: family_name || "",
    role: (role as Role) || Role.USER,
    user_id: userId,
    isSignedIn: isSignedIn,
  };
};
