"use client";

import React from "react";
import { useTheme } from "./ThemeProvider";
import { PROFILE_LINKS } from "../data/portfolioData";

interface EnsoPortraitProps {
  onLinkedInHoverMove: (e: React.MouseEvent<HTMLElement>) => void;
  onLinkedInHoverLeave: () => void;
}

export function EnsoPortrait({ onLinkedInHoverMove, onLinkedInHoverLeave }: EnsoPortraitProps) {
  const { darkMode } = useTheme();

  return (
    <a
      href={PROFILE_LINKS.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      title="LinkedIn"
      aria-label="Abrir perfil do LinkedIn de Thays Yohana"
      onMouseMove={onLinkedInHoverMove}
      onMouseLeave={onLinkedInHoverLeave}
      className="group relative w-72 h-72 sm:w-84 sm:h-84 lg:w-92 lg:h-92 flex items-center justify-center cursor-pointer"
    >
      {/* Soft crimson/sakura ambient glow on hover */}
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#9E2A2B]/35 via-[#F4A6B0]/25 to-transparent blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Outer Sumi-e Enso Brush Ring SVG */}
      <svg
        viewBox="0 0 400 400"
        style={{ color: "var(--enso-stroke)" }}
        className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-700 ease-out group-hover:rotate-6 group-hover:scale-[1.03]"
      >
        <circle
          cx="200"
          cy="200"
          r="174"
          fill="none"
          stroke="currentColor"
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray="960 140"
          transform="rotate(-25 200 200)"
          opacity="0.88"
        />
        <circle
          cx="200"
          cy="200"
          r="182"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeDasharray="180 40 90 30 240 60"
          transform="rotate(40 200 200)"
          opacity="0.55"
        />
        <circle
          cx="200"
          cy="200"
          r="165"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeDasharray="300 80 120 50"
          transform="rotate(140 200 200)"
          opacity="0.45"
        />
      </svg>

      {/* Portrait Image Inside the Enso Circle with Smooth Fade on Hover */}
      <div
        style={{
          borderColor: "var(--portrait-border)",
          backgroundColor: "var(--portrait-bg)"
        }}
        className="relative w-[81%] h-[81%] rounded-full overflow-hidden shadow-2xl border-4 transition-all duration-700 group-hover:border-[#9E2A2B]/80"
      >
        <img
          src="/foto/thays-yohana.jpg"
          alt="Thays Yohana Costa - Desenvolvedora Full Stack"
          className={`w-full h-full object-cover object-[center_18%] scale-110 contrast-[1.05] transition-all duration-700 ease-in-out group-hover:scale-[1.18] group-hover:opacity-70 group-hover:sepia-0 group-hover:brightness-105 ${
            darkMode ? "brightness-[0.9] sepia-[0.18]" : "brightness-[0.98] sepia-[0.14]"
          }`}
        />
        {/* Warm washi paper tint */}
        <div className="absolute inset-0 bg-[#E8D6BE]/25 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0 pointer-events-none" />
        {/* Smooth radial edge fade */}
        <div
          className={`absolute inset-0 rounded-full pointer-events-none transition-all duration-700 ${
            darkMode
              ? "shadow-[inset_0_0_52px_18px_rgba(22,19,17,0.82)] group-hover:shadow-[inset_0_0_65px_24px_rgba(158,42,43,0.45)]"
              : "shadow-[inset_0_0_42px_12px_rgba(58,45,35,0.38)] group-hover:shadow-[inset_0_0_60px_20px_rgba(158,42,43,0.38)]"
          }`}
        />
        {/* Smooth atmospheric fade overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#9E2A2B]/40 via-[#231B16]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      </div>

      {/* Decorative Sakura Blossoms Overlapping Bottom-Left of Enso Frame */}
      <svg
        viewBox="0 0 180 180"
        className="absolute -bottom-3 -left-3 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none drop-shadow-sm transition-transform duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-105"
      >
        <path
          d="M15 140 Q60 120 115 155"
          stroke="#3A2B22"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M45 128 Q35 95 20 75"
          stroke="#3A2B22"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <g transform="translate(55, 122)">
          <circle cx="0" cy="-12" r="9" fill="#F4A6B0" />
          <circle cx="11" cy="-4" r="9" fill="#F7B7C0" />
          <circle cx="7" cy="10" r="9" fill="#F4A6B0" />
          <circle cx="-7" cy="10" r="9" fill="#F7B7C0" />
          <circle cx="-11" cy="-4" r="9" fill="#F4A6B0" />
          <circle cx="0" cy="0" r="4.5" fill="#C84B58" />
        </g>
        <g transform="translate(26, 86) scale(0.8)">
          <circle cx="0" cy="-12" r="9" fill="#F7B7C0" />
          <circle cx="11" cy="-4" r="9" fill="#F4A6B0" />
          <circle cx="7" cy="10" r="9" fill="#F7B7C0" />
          <circle cx="-7" cy="10" r="9" fill="#F4A6B0" />
          <circle cx="-11" cy="-4" r="9" fill="#F7B7C0" />
          <circle cx="0" cy="0" r="4.5" fill="#C84B58" />
        </g>
        <g transform="translate(95, 145) scale(0.75)">
          <circle cx="0" cy="-12" r="9" fill="#F4A6B0" />
          <circle cx="11" cy="-4" r="9" fill="#F7B7C0" />
          <circle cx="7" cy="10" r="9" fill="#F4A6B0" />
          <circle cx="-7" cy="10" r="9" fill="#F7B7C0" />
          <circle cx="-11" cy="-4" r="9" fill="#F4A6B0" />
          <circle cx="0" cy="0" r="4.5" fill="#C84B58" />
        </g>
        <ellipse cx="15" cy="45" rx="6" ry="3.5" transform="rotate(-30 15 45)" fill="#E98A96" />
        <ellipse cx="135" cy="160" rx="5.5" ry="3" transform="rotate(20 135 160)" fill="#F4A6B0" />
      </svg>
    </a>
  );
}
