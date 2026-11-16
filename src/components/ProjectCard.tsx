import React from "react";
import { CheckCircle2, ExternalLink } from "lucide-react";
import { ProjectItem } from "../data/portfolioData";
import { GithubIcon, GitlabIcon } from "./Icons";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Abrir repositório do projeto ${project.title} no ${project.platform}`}
      className="group theme-card rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-[#9E2A2B]/80 cursor-pointer"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#9E2A2B]/12 text-[#9E2A2B] border border-[#9E2A2B]/25">
            {project.badge}
          </span>
          <span className="theme-pill px-2.5 py-1 rounded-full text-xs flex items-center gap-1.5 font-semibold border transition-all group-hover:bg-[#9E2A2B] group-hover:text-[#F5EDE0] group-hover:border-[#9E2A2B]">
            {project.platform === "GitLab" ? (
              <GitlabIcon className="w-3.5 h-3.5" />
            ) : (
              <GithubIcon className="w-3.5 h-3.5" />
            )}
            <span>{project.platform}</span>
            <ExternalLink className="w-3 h-3 opacity-75 group-hover:opacity-100" />
          </span>
        </div>

        <h3 className="font-serif-jp text-xl sm:text-2xl font-bold leading-snug group-hover:text-[#9E2A2B] transition-colors">
          {project.title}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-[#9E2A2B] mt-1">
          {project.subtitle}
        </p>

        <p className="mt-3 text-sm leading-relaxed theme-text-secondary">
          {project.description}
        </p>

        <ul className="mt-4 space-y-1.5 text-xs sm:text-sm">
          {project.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
              <span className="theme-text-primary">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 pt-4 border-t theme-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="theme-pill px-2.5 py-0.5 rounded-md text-[11px] font-mono border"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 text-xs font-serif-jp font-bold text-[#9E2A2B] group-hover:translate-x-0.5 transition-transform shrink-0">
          <span>Ver Repositório</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </span>
      </div>
    </a>
  );
}
