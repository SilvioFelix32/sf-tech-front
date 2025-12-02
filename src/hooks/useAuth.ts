import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthStore } from "../stores/authStore";
import { SignInInput } from "aws-amplify/auth";

export const useAuth = () => {
  const router = useRouter();
  const { user, loading, checked, login: storeLogin, logOut: storeLogOut, checkAuth } = useAuthStore();

  useEffect(() => {
    if (!checked) {
      checkAuth();
    }
  }, [checked, checkAuth]);

  const login = async (credentials: SignInInput): Promise<void> => {
    await storeLogin(credentials);
  };

  const logOut = async (): Promise<void> => {
    await storeLogOut();
    router.push("/");
  };

  return {
    user,
    loading,
    login,
    logOut,
    isAuthenticated: !!user,
  };
};
