"use client";

import React, { useState } from "react";
import {
  Monitor,
  Mail,
  Download,
  ArrowRight,
  Copy,
  Check,
  Award,
  GraduationCap,
  Briefcase,
  Code2,
  Database,
  Cpu,
  Sparkles,
  CheckCircle2,
  FileText,
  Globe
} from "lucide-react";
import { ThemeProvider } from "../components/ThemeProvider";
import { CursorTooltip, useCursorTooltip } from "../components/CursorTooltip";
import { Navbar } from "../components/Navbar";
import { HeroBackdrop } from "../components/HeroBackdrop";
import { EnsoPortrait } from "../components/EnsoPortrait";
import { TechBar } from "../components/TechBar";
import { ProjectCard } from "../components/ProjectCard";
import { SurfaceCard, SectionHeader, SkillTag } from "../components/SurfaceCard";
import { GithubIcon, GitlabIcon, LinkedinIcon } from "../components/Icons";
import {
  PROFILE_LINKS,
  PROJECTS,
  SKILL_CATEGORIES,
  AMBULIS_EXPERIENCE,
  EDUCATION_LIST,
  SkillCategoryItem
} from "../data/portfolioData";

function renderCategoryIcon(iconName: SkillCategoryItem["iconName"]) {
  switch (iconName) {
    case "monitor":
      return <Monitor className="w-5 h-5 text-[#9E2A2B]" />;
    case "code":
      return <Code2 className="w-5 h-5 text-[#9E2A2B]" />;
    case "database":
      return <Database className="w-5 h-5 text-[#9E2A2B]" />;
    case "sparkles":
      return <Sparkles className="w-5 h-5 text-[#9E2A2B]" />;
  }
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<"all" | "fullstack" | "data">("all");
  const [copied, setCopied] = useState(false);
  const { tooltip, onMouseMove, onMouseLeave } = useCursorTooltip("LinkedIn");

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredProjects =
    activeFilter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <ThemeProvider>
      {/* Floating Cursor Tooltip for LinkedIn */}
      <CursorTooltip tooltip={tooltip} />

      {/* ================= HERO + NAVBAR WRAPPER ================= */}
      <HeroBackdrop>
        <Navbar
          onLinkedInHoverMove={onMouseMove}
          onLinkedInHoverLeave={onMouseLeave}
        />

        {/* ================= HERO MAIN CONTENT ================= */}
        <section
          id="inicio"
          className="relative z-20 max-w-6xl mx-auto px-4 sm:px-8 pt-10 pb-12 lg:py-16"
        >
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-4 items-center">
            {/* Left / Center Text Column */}
            <div className="lg:col-span-8 lg:pl-44 xl:pl-52 text-center lg:text-left">
              <p className="font-brush text-2xl sm:text-3xl text-[#9E2A2B] mb-1">
                Olá, eu sou
              </p>

              <a
                href={PROFILE_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                className="relative inline-block group cursor-pointer"
              >
                <h1 className="font-brush text-5xl sm:text-6xl xl:text-7xl tracking-wide leading-tight theme-text-primary group-hover:text-[#9E2A2B] transition-colors">
                  Thays Yohana
                </h1>
                {/* Organic Crimson Brush Underline */}
                <svg
                  viewBox="0 0 320 16"
                  className="w-4/5 h-4 text-[#9E2A2B] mx-auto lg:mx-0 mt-0.5 opacity-90 group-hover:w-full transition-all duration-300"
                  fill="currentColor"
                >
                  <path d="M4 10 C85 2, 220 3, 316 9 C240 14, 90 12, 4 10 Z" />
                </svg>
              </a>

              <h2 className="font-serif-jp italic text-2xl sm:text-3xl font-medium mt-4 theme-text-primary">
                Desenvolvedora Full Stack
              </h2>

              <p className="font-serif-jp text-base sm:text-lg mt-4 max-w-lg mx-auto lg:mx-0 leading-relaxed theme-text-secondary">
                Construindo soluções escaláveis e inteligentes com código, dados e criatividade.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#projetos"
                  className="brush-btn whitespace-nowrap px-7 py-3.5 bg-[#9E2A2B] hover:bg-[#822021] text-[#F5EDE0] font-serif-jp font-medium text-sm sm:text-base transition-all flex items-center gap-2.5 hover:translate-y-[-1px]"
                >
                  <span className="font-mono font-bold text-xs">&lt;/&gt;</span>
                  <span>Ver Projetos</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={PROFILE_LINKS.resumePdf}
                  download="Curriculo_Thays_Yohana_FullStack_Junior.pdf"
                  className="theme-card whitespace-nowrap px-7 py-3.5 rounded-full border-2 font-serif-jp font-medium text-sm sm:text-base transition-all flex items-center gap-2.5 hover:translate-y-[-1px] hover:border-[#9E2A2B]"
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Currículo</span>
                </a>
              </div>
            </div>

            {/* Right Column: Reusable Enso Portrait Component */}
            <div className="lg:col-span-4 flex justify-center">
              <EnsoPortrait
                onLinkedInHoverMove={onMouseMove}
                onLinkedInHoverLeave={onMouseLeave}
              />
            </div>
          </div>

          {/* Reusable "Minhas Tecnologias" Bar */}
          <TechBar />
        </section>
      </HeroBackdrop>

      {/* ================= PROJETOS EM DESTAQUE SECTION ================= */}
      <section id="projetos" className="py-16 md:py-24 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            badgeIcon={<Code2 className="w-4 h-4" />}
            badgeText="Portfólio Técnico"
            title="Projetos em Destaque"
            description="Aplicações web Full Stack, APIs REST containerizadas com CI/CD, automações com IA Generativa e pipelines de Engenharia e Ciência de Dados."
          />

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Todos (8)" },
              { id: "fullstack", label: "Full Stack, APIs & DevOps (4)" },
              { id: "data", label: "Dados, BI & IA (4)" }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as "all" | "fullstack" | "data")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif-jp font-medium transition-all cursor-pointer border ${
                  activeFilter === tab.id
                    ? "bg-[#9E2A2B] text-[#F5EDE0] border-[#9E2A2B] shadow-sm"
                    : "theme-pill hover:border-[#9E2A2B]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ================= SOBRE MIM, EXPERIÊNCIA & CURRÍCULO SECTION ================= */}
      <section
        id="sobre"
        className="py-16 md:py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t theme-border"
      >
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Resumo + Experiência */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <SectionHeader
                badgeIcon={<FileText className="w-4 h-4" />}
                badgeText="Trajetória & Experiência"
                title="Sobre Mim"
              />
              <p className="mt-4 text-sm sm:text-base leading-relaxed theme-text-secondary">
                Desenvolvedora Full Stack Júnior graduada em <strong>Ciência de Dados pela FIAP (dez/2025)</strong> e estudante externa do <strong>Programa de Pós-Graduação em Computação Aplicada da UTFPR</strong>. Experiência prática no desenvolvimento de aplicações web modernas ponta a ponta utilizando <strong>React, Next.js, TypeScript, Tailwind CSS, Node.js, Python e Java (Spring Boot)</strong>, além de modelagem e otimização de bancos de dados <strong>PostgreSQL e MongoDB</strong>.
              </p>
              <p className="mt-3 text-sm sm:text-base leading-relaxed theme-text-secondary">
                Atuo com <strong>SDD (Spec-Driven Development / Desenvolvimento Orientado a Especificações)</strong> e arquiteturas de <strong>Sistemas Multi-Agentes (AI Agents, orquestração de LLMs, Google Gemini API e protocolo MCP)</strong>, combinando engenharia de software estruturada, integração de <strong>APIs REST</strong>, containerização com <strong>Docker</strong>, pipelines <strong>CI/CD (GitHub Actions)</strong> e conformidade técnica com a <strong>LGPD</strong>. Inglês avançado/fluente.
              </p>
            </div>

            {/* Experiência Profissional Card */}
            <SurfaceCard className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E2A2B] mb-2">
                <Briefcase className="w-4 h-4" /> Experiência Profissional
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-serif-jp text-xl font-bold">
                  {AMBULIS_EXPERIENCE.company} — {AMBULIS_EXPERIENCE.role}
                </h3>
                <span className="text-xs font-semibold text-[#9E2A2B]">
                  {AMBULIS_EXPERIENCE.period}
                </span>
              </div>

              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                {AMBULIS_EXPERIENCE.bullets.map((b, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
                    <span className="theme-text-secondary">
                      <strong className="theme-text-primary">{b.label}</strong> {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </SurfaceCard>
          </div>

          {/* Right Column: Formação Acadêmica, Prêmios, Certificações & Idiomas */}
          <div className="lg:col-span-5 space-y-6">
            <SurfaceCard className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E2A2B] mb-4">
                <GraduationCap className="w-4 h-4" /> Formação Acadêmica
              </div>
              <div className="space-y-4">
                {EDUCATION_LIST.map((edu, idx) => (
                  <div
                    key={idx}
                    className={`border-l-2 pl-3.5 ${
                      edu.active ? "border-[#9E2A2B]" : "theme-border"
                    }`}
                  >
                    <div
                      className={`text-xs font-semibold ${
                        edu.active ? "text-[#9E2A2B]" : "theme-text-muted"
                      }`}
                    >
                      {edu.period}
                    </div>
                    <div className="font-serif-jp font-bold text-sm sm:text-base mt-0.5">
                      {edu.title}
                    </div>
                    <div className="text-xs mt-0.5 theme-text-muted">
                      {edu.institution}
                    </div>
                  </div>
                ))}
              </div>
            </SurfaceCard>

            <SurfaceCard className="p-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E2A2B] mb-3">
                <Award className="w-4 h-4" /> Prêmios, Certificações & Idiomas
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <strong className="text-[#9E2A2B] block mb-1">Prêmios & Participações:</strong>
                  <p className="theme-text-secondary">
                    • Menção Honrosa por Visualizações – <strong>NASA Pale Blue Dot Challenge (2023)</strong>
                    <br />
                    • <strong>NASA International Space Apps Challenge (2023)</strong>
                    <br />• <strong>Inova Essay Competition (2021)</strong>
                  </p>
                </div>

                <div className="pt-2 border-t theme-border">
                  <strong className="text-[#9E2A2B] block mb-1">Certificações:</strong>
                  <p className="theme-text-secondary">
                    Curso de Java (Rocketseat) • NLW IA (Rocketseat) • Python Essentials 2 (Cisco) • Degree Data Science (Alura) • Latin American Leadership Academy (LALA - VBL20)
                  </p>
                </div>

                <div className="pt-2 border-t theme-border">
                  <strong className="text-[#9E2A2B] flex items-center gap-1.5 mb-1">
                    <Globe className="w-3.5 h-3.5" /> Idiomas:
                  </strong>
                  <p className="theme-text-secondary">
                    Português (Nativo) • Inglês (Avançado / Fluente) • Espanhol (Intermediário)
                  </p>
                </div>
              </div>
            </SurfaceCard>
          </div>
        </div>

        {/* Competências Técnicas (Hard Skills) Grid */}
        <div className="mt-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9E2A2B] mb-2">
            <Cpu className="w-4 h-4" /> Competências Técnicas
          </div>
          <h3 className="font-serif-jp text-2xl sm:text-3xl font-bold mb-6">
            Hard Skills Completas
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SKILL_CATEGORIES.map((cat) => (
              <SurfaceCard key={cat.id} className="p-5">
                <div className="flex items-center gap-2.5 mb-3">
                  {renderCategoryIcon(cat.iconName)}
                  <h4 className="font-serif-jp font-bold text-base">
                    {cat.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <SkillTag key={skill} label={skill} />
                  ))}
                </div>
              </SurfaceCard>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTATO / FOOTER SECTION ================= */}
      <footer
        id="contato"
        className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t theme-border"
      >
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-brush text-2xl text-[#9E2A2B]">Vamos conversar?</p>
          <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold mt-1">
            Entre em Contato
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed theme-text-muted">
            Disponível para oportunidades remotas ou híbridas em Curitiba, PR como Desenvolvedora Full Stack Júnior ou Analista de Dados Júnior.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <a
              href={PROFILE_LINKS.gmailCompose}
              target="_blank"
              rel="noopener noreferrer"
              className="brush-btn px-6 py-3 rounded-full bg-[#9E2A2B] hover:bg-[#822021] text-[#F5EDE0] font-serif-jp font-medium text-sm transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Escrever no Gmail
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="theme-card px-5 py-3 rounded-full border font-serif-jp text-sm font-medium transition-all flex items-center gap-2 cursor-pointer hover:border-[#9E2A2B]"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold">E-mail copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#9E2A2B]" />
                  <span>{PROFILE_LINKS.email}</span>
                </>
              )}
            </button>

            <a
              href={PROFILE_LINKS.resumePdf}
              download="Curriculo_Thays_Yohana_FullStack_Junior.pdf"
              className="theme-card px-5 py-3 rounded-full border font-serif-jp text-sm font-medium transition-all flex items-center gap-2 hover:border-[#9E2A2B]"
            >
              <Download className="w-4 h-4 text-[#9E2A2B]" />
              <span>Currículo PDF</span>
            </a>

            <a
              href={PROFILE_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-card px-5 py-3 rounded-full border font-serif-jp text-sm font-medium transition-all flex items-center gap-2 hover:border-[#9E2A2B]"
            >
              <LinkedinIcon className="w-4 h-4 text-[#9E2A2B]" />
              <span>LinkedIn</span>
            </a>

            <a
              href={PROFILE_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-card px-5 py-3 rounded-full border font-serif-jp text-sm font-medium transition-all flex items-center gap-2 hover:border-[#9E2A2B]"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href={PROFILE_LINKS.gitlab}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-card px-5 py-3 rounded-full border font-serif-jp text-sm font-medium transition-all flex items-center gap-2 hover:border-[#9E2A2B]"
            >
              <GitlabIcon className="w-4 h-4 text-[#9E2A2B]" />
              <span>GitLab</span>
            </a>
          </div>

          <div className="mt-12 text-xs font-serif-jp theme-text-muted">
            © 2026 Thays Yohana Costa • Curitiba, PR — Desenvolvido com Next.js, TypeScript & Tailwind CSS.
          </div>
        </div>
      </footer>
    </ThemeProvider>
  );
}
