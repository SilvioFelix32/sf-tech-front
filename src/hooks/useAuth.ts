import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { authService } from "../services/auth.service";
import { removeCookie } from "../services/cookie-service";
import { SignInInput } from "aws-amplify/auth";
import { User } from "../services/auth";

interface AuthState {
  user: User | null;
  loading: boolean;
  checked: boolean;
}

const globalAuthState: AuthState = {
  user: null,
  loading: true,
  checked: false,
};

const listeners = new Set<(state: AuthState) => void>();
let checkPromise: Promise<void> | null = null;

const updateGlobalState = (updates: Partial<AuthState>) => {
  Object.assign(globalAuthState, updates);
  listeners.forEach((listener) => listener({ ...globalAuthState }));
};

const clearAuthState = () => {
  updateGlobalState({
    user: null,
    loading: false,
    checked: true,
  });
  removeCookie("nextauth.token");
  removeCookie("user");
};

const checkAuth = async (): Promise<void> => {
  if (globalAuthState.checked) {
    return;
  }

  if (checkPromise) {
    await checkPromise;
    return;
  }

  checkPromise = (async () => {
    try {
      updateGlobalState({ loading: true });

      if (typeof window === "undefined") {
        updateGlobalState({
          loading: false,
          checked: true,
        });
        return;
      }

      if (!authService.isAuthenticated()) {
        clearAuthState();
        return;
      }

      const token = authService.getToken();
      if (token && authService.isTokenExpired(token)) {
        console.info("Token expirado, tentando atualizar...");
        try {
          await authService.refreshSession();
          console.info("Token atualizado com sucesso!");
        } catch (error) {
          console.error("Erro ao tentar atualizar o token", error);
          clearAuthState();
          return;
        }
      }

      const userData = await authService.getUserDataFromToken();
      if (userData) {
        updateGlobalState({
          user: userData,
          loading: false,
          checked: true,
        });
        return;
      }

      const hasValidSession = await authService.checkAuthSession();
      if (hasValidSession) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          updateGlobalState({
            user: currentUser,
            loading: false,
            checked: true,
          });
        } else {
          clearAuthState();
        }
      } else {
        clearAuthState();
      }
    } catch (error) {
      console.error("Erro ao verificar autenticação:", error);
      clearAuthState();
    } finally {
      checkPromise = null;
    }
  })();

  await checkPromise;
};

export const useAuth = () => {
  const [localState, setLocalState] = useState<AuthState>({ ...globalAuthState });
  const router = useRouter();

  useEffect(() => {
    const listener = (state: AuthState) => {
      setLocalState({ ...state });
    };

    listeners.add(listener);
    setLocalState({ ...globalAuthState });

    if (!globalAuthState.checked) {
      checkAuth();
    }

    return () => {
      listeners.delete(listener);
    };
  }, []);

  const login = useCallback(async (credentials: SignInInput): Promise<void> => {
    try {
      if (authService.isAuthenticated()) {
        const userData = await authService.getUserDataFromToken();
        if (userData) {
          updateGlobalState({
            user: userData,
            checked: true,
          });
        }
        return;
      }

      const result = await authService.signIn(credentials);
      
      if (result.isSignedIn) {
        const userData = await authService.getUserDataFromToken();
        if (userData) {
          updateGlobalState({
            user: userData,
            checked: true,
          });
        }
      } else {
        const userStatus = result.nextStep?.signInStep || "";
        updateGlobalState({
          user: {
            userStatus: `Status: ${userStatus}, " Você precisa confirmar a sua senha"`,
          } as User,
          checked: true,
        });
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : "Erro ao fazer login";
      throw new Error(errorMessage);
    }
  }, []);

  const logOut = useCallback(async (): Promise<void> => {
    try {
      await authService.signOut();
      updateGlobalState({
        user: null,
        checked: false,
      });
      router.push("/");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
      throw error;
    }
  }, [router]);

  return {
    user: localState.user,
    loading: localState.loading,
    login,
    logOut,
    isAuthenticated: !!localState.user,
  };
};

