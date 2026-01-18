import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: "white",
  setTheme: (newTheme) => {
    set({ theme: newTheme });
    document.documentElement.classList.remove("theme-white", "theme-black");
    document.documentElement.classList.add(`theme-${newTheme}`);
  },
}));
