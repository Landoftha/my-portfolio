"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";

export function HeroBackdrop({ children }: { children: React.ReactNode }) {
  const { darkMode } = useTheme();

  return (
    <div className="relative w-full overflow-hidden border-b theme-border">
      {/* Background Japanese Watercolor Image (Light Mode) */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none transition-opacity duration-700 ${
          darkMode ? "opacity-0" : "opacity-95"
        }`}
        style={{
          backgroundImage: "url('/hero-sumi-bg.jpg')"
        }}
      />

      {/* Background Japanese Watercolor Image (Dark Mode Nocturnal Scene) */}
      <div
        className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none transition-opacity duration-700 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: "url('/hero-sumi-dark-bg.jpg')"
        }}
      />

      {/* Soft gradient overlay so text is always crisp without hiding the artwork */}
      <div
        className={`absolute inset-0 pointer-events-none transition-colors duration-700 ${
          darkMode
            ? "bg-gradient-to-r from-transparent via-[#161311]/30 to-transparent"
            : "bg-gradient-to-r from-[#F5EDE0]/10 via-[#F5EDE0]/45 to-[#F5EDE0]/25"
        }`}
      />

      {children}
    </div>
  );
}
