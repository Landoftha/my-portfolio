"use client";

import React from "react";
import { Home as HomeIcon, Monitor, User, Mail } from "lucide-react";
import { ThemeToggle } from "./ThemeProvider";

export function Navbar() {
  return (
    <header className="relative z-30 max-w-6xl mx-auto px-4 sm:px-8 pt-5 pb-4 border-b theme-border">
      <div className="flex items-center justify-between gap-4">
        {/* Left Brand: Crimson Seal + Brush Script Name (Scrolls to top) */}
        <a
          href="#inicio"
          className="flex items-center gap-3.5 group"
        >
          <div className="relative w-12 h-12 rounded-full bg-[#9E2A2B] flex items-center justify-center shadow-md shadow-[#9E2A2B]/30 group-hover:scale-105 transition-transform">
            <div className="absolute inset-1 rounded-full border border-[#F5EDE0]/70 border-dashed" />
            <span className="font-mono font-bold text-[#F5EDE0] text-base tracking-tighter">
              &lt;/&gt;
            </span>
          </div>
          <div>
            <div className="font-brush text-2xl sm:text-3xl leading-none theme-text-primary group-hover:text-[#9E2A2B] transition-colors">
              Thays Yohana
            </div>
            <div className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mt-1 theme-text-secondary">
              Full Stack Developer
            </div>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-serif-jp">
          <a
            href="#inicio"
            className="relative flex items-center gap-2 font-semibold text-[#9E2A2B] py-1"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Início</span>
            <svg
              viewBox="0 0 100 10"
              className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#9E2A2B]"
              fill="currentColor"
            >
              <path d="M2 6 C30 2, 70 2, 98 6 C75 9, 25 8, 2 6 Z" />
            </svg>
          </a>
          <a
            href="#projetos"
            className="flex items-center gap-2 theme-text-primary transition-colors hover:text-[#9E2A2B]"
          >
            <Monitor className="w-4 h-4" />
            <span>Projetos</span>
          </a>
          <a
            href="#sobre"
            className="flex items-center gap-2 theme-text-primary transition-colors hover:text-[#9E2A2B]"
          >
            <User className="w-4 h-4" />
            <span>Sobre Mim</span>
          </a>
          <a
            href="#contato"
            className="flex items-center gap-2 theme-text-primary transition-colors hover:text-[#9E2A2B]"
          >
            <Mail className="w-4 h-4" />
            <span>Contato</span>
          </a>
        </nav>

        {/* Right Theme Toggle Pill */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
