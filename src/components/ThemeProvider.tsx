"use client";

import React, { createContext, useContext, useState } from "react";
import { Moon, Sun } from "lucide-react";

interface ThemeContextValue {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  darkMode: false,
  toggleTheme: () => {}
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div
        data-theme={darkMode ? "dark" : "light"}
        className="min-h-screen transition-colors duration-300 theme-page washi-surface"
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={darkMode ? "Mudar para modo claro" : "Mudar para modo escuro"}
      style={{ backgroundColor: "var(--bg-toggle)", borderColor: "var(--border-subtle)" }}
      className={`relative w-14 h-8 rounded-full p-1 transition-colors border cursor-pointer flex items-center ${
        darkMode ? "justify-end" : "justify-start"
      }`}
    >
      <span
        style={{ backgroundColor: "var(--bg-toggle-knob)" }}
        className={`w-6 h-6 rounded-full flex items-center justify-center shadow-sm transition-transform ${
          darkMode ? "text-[#F5EDE0]" : "text-[#2D231C]"
        }`}
      >
        {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
      </span>
    </button>
  );
}
