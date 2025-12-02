import { useAuth } from "./useAuth";

type UseCanParams = {
  permissions?: string[];
  role: string[];
};

export function useCan({ role }: UseCanParams) {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return false;
  }

  if (role?.length > 0 && user?.role) {
    const hasAllRoles = role.some((r) => {
      return user.role === r;
    });

    if (!hasAllRoles) {
      return false;
    }
  }

  return true;
}
