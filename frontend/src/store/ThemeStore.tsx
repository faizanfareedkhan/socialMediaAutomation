// store/themeStore.ts
import { Theme } from "@/types/theme";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resetTheme: () => void;
}

const defaultTheme: Theme = {
  background: "#ffffff",
  text: "#000000",
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: defaultTheme,
      setTheme: (theme) => set({ theme }),
      resetTheme: () => set({ theme: defaultTheme }),
    }),
    {
      name: "theme-storage", // localStorage key
    },
  ),
);
