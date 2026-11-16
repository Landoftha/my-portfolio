import React from "react";
import { TechIcon } from "./Icons";
import { HERO_TECHS } from "../data/portfolioData";

export function TechBar() {
  return (
    <div className="mt-12 sm:mt-16 pt-4">
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-[1px] w-24 sm:w-56 border-t theme-border" />
        <h3 className="font-serif-jp text-lg sm:text-xl font-medium tracking-wide theme-text-primary">
          Minhas Tecnologias
        </h3>
        <div className="h-[1px] w-24 sm:w-56 border-t theme-border" />
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-6 sm:gap-4 max-w-5xl mx-auto justify-items-center">
        {HERO_TECHS.map((tech) => (
          <div key={tech} className="flex flex-col items-center gap-2 group cursor-default">
            <div className="p-2.5 rounded-xl transition-transform group-hover:scale-110 group-hover:text-[#9E2A2B] theme-text-primary">
              <TechIcon name={tech} className="w-9 h-9 sm:w-10 sm:h-10" />
            </div>
            <span className="font-serif-jp text-xs sm:text-sm font-medium theme-text-secondary">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
