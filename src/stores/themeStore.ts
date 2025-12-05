import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getCookie, setCookie } from "../services/cookie-service";

interface ThemeState {
  theme: string;
  setTheme: (theme: string) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: "light",

      setTheme: (theme: string) => {
        set({ theme });
        if (typeof window !== "undefined") {
          setCookie("color-theme", theme, { expires: 7, path: "/" });
        }
      },
    }),
    {
      name: "theme-storage",
      storage: {
        getItem: (_name) => {
          if (typeof window === "undefined") return null;
          const value = getCookie("color-theme");
          if (!value) return { state: { theme: "light" } };
          return { state: { theme: value } };
        },
        setItem: (_name, value) => {
          if (typeof window === "undefined") return;
          setCookie("color-theme", value.state.theme, { expires: 7, path: "/" });
        },
        removeItem: (_name) => {
          if (typeof window === "undefined") return;
          setCookie("color-theme", "light", { expires: 7, path: "/" });
        },
      },
    }
  )
);

