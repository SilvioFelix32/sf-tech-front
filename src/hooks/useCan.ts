import { useContext } from "react";
import { AuthContext } from "../context";

type UseCanParams = {
  permissions?: string[];
  role: string[];
};

export function useCan({ role }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  if (role?.length > 0) {
    const hasAllRoles = role.some((role) => {
      return user?.role?.includes(role);
    });

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
