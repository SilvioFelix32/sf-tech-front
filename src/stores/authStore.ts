import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../services/auth";
import { authService } from "../services/auth.service";
import { SignInInput } from "aws-amplify/auth";
import { syncUserWithDb } from "../services/user-sync.service";

interface AuthState {
  user: User | null;
  loading: boolean;
  checked: boolean;
  login: (credentials: SignInInput) => Promise<void>;
  logOut: () => Promise<void>;
  checkAuth: () => Promise<void>;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setChecked: (checked: boolean) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      loading: true,
      checked: false,

      setUser: (user) => set({ user }),
      setLoading: (loading) => set({ loading }),
      setChecked: (checked) => set({ checked }),

      checkAuth: async () => {
        const { checked, loading } = get();
        if (checked || loading) return;

        set({ loading: true });

        if (typeof window === "undefined") {
          set({ loading: false, checked: true });
          return;
        }

        try {
          if (!authService.isAuthenticated()) {
            set({ user: null, loading: false, checked: true });
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
              set({ user: null, loading: false, checked: true });
              return;
            }
          }

          const userData = await authService.getUserDataFromToken();
          if (userData) {
            set({ user: userData, loading: false, checked: true });
            return;
          }

          const hasValidSession = await authService.checkAuthSession();
          if (hasValidSession) {
            const currentUser = await authService.getCurrentUser();
            if (currentUser) {
              set({ user: currentUser, loading: false, checked: true });
            } else {
              set({ user: null, loading: false, checked: true });
            }
          } else {
            set({ user: null, loading: false, checked: true });
          }
        } catch (error) {
          console.error("Erro ao verificar autenticação:", error);
          set({ user: null, loading: false, checked: true });
        }
      },

      login: async (credentials: SignInInput) => {
        try {
          if (authService.isAuthenticated()) {
            const userData = await authService.getUserDataFromToken();
            if (userData && userData.user_id) {
              set({ user: userData, checked: true });
              syncUserWithDb(userData.user_id).catch((error) => {
                console.error("Erro ao sincronizar usuário:", error);
              });
            }
            return;
          }

          const result = await authService.signIn(credentials);

          if (result.isSignedIn) {
            const userData = await authService.getUserDataFromToken();
            if (userData && userData.user_id) {
              set({ user: userData, checked: true });
              syncUserWithDb(userData.user_id).catch((error) => {
                console.error("Erro ao sincronizar usuário:", error);
              });
            }
          } else {
            const userStatus = result.nextStep?.signInStep || "";
            set({
              user: {
                userStatus: `Status: ${userStatus}, " Você precisa confirmar a sua senha"`,
              } as User,
              checked: true,
            });
          }
        } catch (error: unknown) {
          const errorMessage =
            error instanceof Error ? error.message : "Erro ao fazer login";
          throw new Error(errorMessage);
        }
      },

      logOut: async () => {
        try {
          await authService.signOut();
          set({ user: null, checked: false });
        } catch (error) {
          console.error("Erro ao fazer logout:", error);
          throw error;
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
    }
  )
);

