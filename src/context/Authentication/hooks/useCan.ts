import { useContext } from "react";
import { AuthContext } from "../AuthContext";

type UseCanParams = {
  permissions?: string[];
  role: string[];
};

export function useCan({ role, permissions }: UseCanParams) {
  const { user, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return false;
  }

  //   if (permissions?.length > 0) {
  //     const hasAllPermissions = permissions.every((permission) => {
  //       return user.permissions.includes(permission);
  //     });

  //     if (!hasAllPermissions) {
  //       return false;
  //     }
  //   }

  if (role?.length > 0) {
    const hasAllRoles = role.some((role) => {
      return user.role.includes(role);
    });

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
