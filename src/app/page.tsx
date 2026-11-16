"use client";

import React, { useState } from "react";
import {
  Home as HomeIcon,
  Monitor,
  User,
  Mail,
  Download,
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  Moon,
  Sun,
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

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function GitlabIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="m23.6 9.58-1.54-4.75a.94.94 0 0 0-1.78 0l-1.54 4.75H5.26L3.72 4.83a.94.94 0 0 0-1.78 0L.4 9.58a1.27 1.27 0 0 0 .46 1.42L12 19.34l11.14-8.34a1.27 1.27 0 0 0 .46-1.42z" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

/* Monochrome Sumi-e Tech Icons matching the reference bar */
function TechIcon({ name, className = "w-9 h-9" }: { name: string; className?: string }) {
  switch (name) {
    case "Python":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969c0 6.18 3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.914 0zM8.708 1.85c.578 0 1.046.47 1.046 1.052 0 .581-.468 1.051-1.046 1.051-.579 0-1.046-.47-1.046-1.051 0-.582.467-1.052 1.046-1.052z" />
          <path d="M12.087 24c6.093 0 5.713-2.656 5.713-2.656l-.007-2.752h-5.814v-.826h8.121S24 18.211 24 12.031c0-6.18-3.403-5.96-3.403-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.451s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24zm3.206-1.85c-.579 0-1.046-.47-1.046-1.052 0-.581.467-1.051 1.046-1.051.578 0 1.046.47 1.046 1.051 0 .582-.468 1.052-1.046 1.052z" />
        </svg>
      );
    case "React":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className={className}>
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
        </svg>
      );
    case "Next.js":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12c2.124 0 4.12-.553 5.852-1.524L9.74 10.662v6.738H8.14V7.6h1.68l7.972 11.454A11.952 11.952 0 0 0 24 12c0-6.627-5.373-12-12-12zm3.86 14.8l-1.6-2.3V7.6h1.6v7.2z" />
        </svg>
      );
    case "Node.js":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12 1.85c-.57 0-1.14.15-1.64.44L3.36 6.33c-1.01.58-1.64 1.66-1.64 2.83v8.08c0 1.17.63 2.25 1.64 2.83l7 4.04c1.01.58 2.27.58 3.28 0l7-4.04c1.01-.58 1.64-1.66 1.64-2.83V9.16c0-1.17-.63-2.25-1.64-2.83l-7-4.04c-.5-.29-1.07-.44-1.64-.44zm-3.1 6.75h1.65l2.55 4.2v-4.2h1.5v7.2h-1.55l-2.65-4.35v4.35H8.9v-7.2zm6.4 0h2.4c1.1 0 1.85.65 1.85 1.65 0 .75-.45 1.3-1.1 1.45.8.15 1.3.75 1.3 1.6 0 1.15-.8 1.85-2.05 1.85H15.3v-6.55zm1.5 1.25v1.4h.75c.45 0 .7-.25.7-.7s-.25-.7-.7-.7h-.75zm0 2.55v1.5h.85c.5 0 .8-.25.8-.75s-.3-.75-.8-.75h-.85z" />
        </svg>
      );
    case "TypeScript":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M3 3h18v18H3V3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.96-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8zM13 11.25H8v1.5h1.64v6.5h1.72v-6.5H13v-1.5z" />
        </svg>
      );
    case "PostgreSQL":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className}>
          <ellipse cx="12" cy="5.5" rx="7.5" ry="3" />
          <path d="M4.5 5.5v6.5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V5.5" />
          <path d="M4.5 12v6.5c0 1.66 3.36 3 7.5 3s7.5-1.34 7.5-3V12" />
        </svg>
      );
    case "MongoDB":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M12.65 1.32c-.34-.6-.65-1.12-.65-1.12s-.31.52-.65 1.12C8.32 6.53 6.2 10.22 6.2 13.75c0 4.02 2.52 6.82 5.15 7.45l.15 2.6h1l.15-2.6c2.63-.63 5.15-3.43 5.15-7.45 0-3.53-2.12-7.22-5.15-12.43zM12 19.85V7.5c.35 0 .62 1.8.62 6.25 0 3.72-.27 6.1-.62 6.1z" />
        </svg>
      );
    case "Docker":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-2.95-5.43h2.12a.19.19 0 0 0 .19-.19V3.58a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .11.09.19.19.19m0 2.71h2.12a.19.19 0 0 0 .19-.19V6.3a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.87c0 .11.09.19.19.19m-2.93 0h2.12a.19.19 0 0 0 .19-.19V6.3a.19.19 0 0 0-.19-.19H8.1a.19.19 0 0 0-.19.19v1.87c0 .11.08.19.19.19m-2.96 2.72h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m2.96 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H8.1a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m2.93 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .1.09.19.19.19m-8.86 0H4.3a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H2.17a.19.19 0 0 0-.19.19v1.88c0 .1.08.19.19.19m21.46-.36c-.47-.32-1.56-.43-2.4-.28-.11-.82-.57-1.54-1.4-2.18l-.47-.37-.38.45c-.49.57-.73 1.37-.66 2.16.03.39.16.96.51 1.36-.35.19-1.05.44-1.98.42H.42l-.06.35c-.19 1.15-.19 4.74 2.13 7.5 1.77 2.1 4.41 3.17 7.87 3.17 7.49 0 13.03-3.44 15.61-9.69 1.02.02 2.06 0 2.79-1.38.05-.09.19-.36.25-.48l.1-.22-.48-.31z" />
        </svg>
      );
    case "Git":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
          <path d="M8.5 5.5 2 12l6.5 6.5 1.4-1.4L4.8 12l5.1-5.1-1.4-1.4zm7 0-1.4 1.4 5.1 5.1-5.1 5.1 1.4 1.4L22 12l-6.5-6.5z" />
        </svg>
      );
  }
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeFilter, setActiveFilter] = useState<"all" | "fullstack" | "data">("all");
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("thaysyohanacosta71@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const heroTechs = [
    "Python",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Git"
  ];

  const projects = [
    {
      id: "financiamento",
      category: "fullstack" as const,
      title: "Simulador & Calculadora de Financiamento Imobiliário",
      subtitle: "Next.js 16, React 19, TypeScript & Tailwind CSS 4",
      badge: "Full Stack / Front-End",
      platform: "GitHub",
      url: "https://github.com/Landoftha",
      description:
        "Aplicação web interativa (SPA/SSR) para simulação financeira comparativa entre modalidades SAC, MCMV e SBPE, cálculo de amortização extraordinária e comprometimento de renda em tempo real, com deploy contínuo na Vercel.",
      highlights: [
        "Simulação comparativa em tempo real entre tabelas SAC, MCMV e SBPE",
        "Cálculo de amortização extraordinária e impacto no prazo/saldo devedor",
        "Arquitetura componentizada com tipagem estrita em TypeScript",
        "Interface responsiva e deploy automatizado na Vercel"
      ],
      tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Vercel"]
    },
    {
      id: "cidades-esg",
      category: "fullstack" as const,
      title: "Cidades ESG Inteligentes (Back-End & DevOps)",
      subtitle: "Java 17, Spring Boot 3, PostgreSQL 15, Redis 7, Docker & GitHub Actions",
      badge: "Back-End & DevOps",
      platform: "GitHub",
      url: "https://github.com/Landoftha/desafio_devops1.0",
      description:
        "Base de API Spring Boot 3 com ambientes de desenvolvimento, staging e produção em Docker Compose (PostgreSQL 15, Redis 7 e proxy Nginx) e pipeline CI/CD no GitHub Actions que executa testes, gera a imagem Docker e publica no GitHub Container Registry.",
      highlights: [
        "Orquestração multi-ambiente (dev, staging e prod) com Docker Compose",
        "Persistência relacional em PostgreSQL 15, cache em Redis 7 e proxy reverso Nginx",
        "Pipeline CI/CD completo no GitHub Actions com publicação no GHCR",
        "Estrutura Java 17 / Spring Boot 3 com Spring Data JPA, Security e OpenAPI"
      ],
      tags: ["Java 17", "Spring Boot 3", "PostgreSQL 15", "Redis 7", "Docker", "Nginx", "GitHub Actions"]
    },
    {
      id: "sigma-body",
      category: "fullstack" as const,
      title: "Sigma Body Analytics (APIs REST & IA Generativa)",
      subtitle: "Python, OAuth 2.0, Google Fit REST API, Gemini 2.5 API & Looker Studio",
      badge: "APIs & IA Generativa",
      platform: "GitHub",
      url: "https://github.com/Landoftha/sigma-body-analytics",
      description:
        "Sistema automatizado que consome a API REST do Google Fit via OAuth 2.0 e integra a API multimodal Google Gemini 2.5 Flash para extração estruturada de dados (OCR/JSON) a partir de capturas de tela e consolidação analítica para Looker Studio.",
      highlights: [
        "Integração autenticada via OAuth 2.0 com a Google Fit REST API",
        "OCR multimodal inteligente com Google Gemini 2.5 Flash retornando JSON estruturado",
        "Higienização e unificação de séries temporais em um Master Dataset",
        "Integração direta com painel executivo de métricas no Looker Studio"
      ],
      tags: ["Python", "OAuth 2.0", "Google Fit REST API", "Gemini 2.5 API", "Looker Studio", "ETL"]
    },
    {
      id: "esg-nosql-pwa",
      category: "fullstack" as const,
      title: "Productivity Sheets (PWA) & Gestão ESG (NoSQL)",
      subtitle: "React 18, JavaScript, Node.js, MongoDB 6.0+ & Tailwind CSS",
      badge: "Web PWA & NoSQL",
      platform: "GitHub",
      url: "https://github.com/Landoftha/Nosql",
      description:
        "Desenvolvimento de aplicação PWA instalável com persistência offline e geração client-side de PDF (jsPDF), além de sistema de gestão ESG corporativa com modelagem de documentos aninhados e operações CRUD avançadas em MongoDB 6.0+.",
      highlights: [
        "Modelagem de coleções NoSQL orientadas a documentos aninhados em MongoDB",
        "Operações CRUD para rastreamento de emissões, consumo hídrico e auditorias ESG",
        "Interface web responsiva com persistência local e exportação dinâmica de PDF",
        "Foco em escalabilidade e velocidade de leitura/escrita"
      ],
      tags: ["React 18", "JavaScript", "Node.js", "MongoDB 6.0+", "Tailwind CSS", "jsPDF"]
    },
    {
      id: "screentime",
      category: "data" as const,
      title: "Screentime vs. Education: Rendimento Escolar no Brasil",
      subtitle: "Big Data (12M+ registros), Econometria de Painel, XGBoost & SHAP",
      badge: "Big Data & ML",
      platform: "GitLab",
      url: "https://gitlab.com/Landoftha/screentime_vs_Education",
      description:
        "Estudo empírico em larga escala integrando 4 bases públicas (SAEB, Censo Escolar, PeNSE e TIC Kids Online) com mais de 12 milhões de registros processados em chunks. Identificação do Paradoxo de Simpson ao controlar pelo nível socioeconômico (INSE, r = 0,875) e detecção de ponto de inflexão via SHAP.",
      highlights: [
        "Processamento distribuído em chunks de 12M+ registros governamentais com Pandas",
        "Reversão do Paradoxo de Simpson com controle socioeconômico e modelos de painel",
        "Modelagem com XGBoost e interpretabilidade SHAP Values (~2,5h/dia de inflexão)",
        "Artigo científico completo diagramado em formato IEEE (LaTeX e PDF)"
      ],
      tags: ["Python", "Pandas (12M+)", "XGBoost", "SHAP Values", "Econometria de Painel", "LaTeX"]
    },
    {
      id: "grao-nobre",
      category: "data" as const,
      title: "Grão Nobre: Plataforma Omnichannel de Business Analytics",
      subtitle: "Modelagem Dimensional Star Schema (Kimball), Python, SQL & Power BI (DAX)",
      badge: "Data Modeling & BI",
      platform: "GitHub",
      url: "https://github.com/Landoftha/grao-nobre-analytics",
      description:
        "Arquitetura completa de Business Intelligence para operação omnichannel (e-commerce e 3 lojas físicas). Modelagem dimensional Star Schema com 4 tabelas fato e 6 dimensões, gerador de dados sintéticos, dicionário de dados e medidas DAX para acompanhamento de KPIs.",
      highlights: [
        "Modelagem Star Schema (Kimball) separando Fatos (Vendas, Estoque, Marketing, Atendimento)",
        "Dicionário de dados completo e regras de negócio documentadas",
        "Medidas DAX e KPIs estratégicos (Ticket Médio, LTV, Giro de Estoque e Conversão)",
        "Pipeline em Python para geração e validação de dados omnichannel"
      ],
      tags: ["SQL", "Star Schema", "Power BI (DAX)", "Python", "ETL", "KPIs"]
    },
    {
      id: "egg-outlier",
      category: "data" as const,
      title: "Egg Outlier Detection (Visão Computacional & Redes Neurais)",
      subtitle: "OpenCV, Isolation Forest, Autoencoder (97,45% ROC-AUC) & MLP (92,71% Acc)",
      badge: "Computer Vision & AI",
      platform: "GitHub",
      url: "https://github.com/Landoftha/egg_outlier_detection",
      description:
        "Pipeline de controle de qualidade industrial combinando visão computacional (OpenCV), estatística clássica (IQR), Isolation Forest e redes neurais, alcançando 97,45% de ROC-AUC na detecção de anomalias com Autoencoder e 92,71% de acurácia com MLP (5-fold CV).",
      highlights: [
        "Extração de atributos morfológicos e de cor via OpenCV",
        "Comparativo rigoroso entre IQR, Isolation Forest e Autoencoder (97,45% ROC-AUC)",
        "Classificação supervisionada com MLPClassifier atingindo 92,71% em validação cruzada",
        "Visualizações diagnósticas e curva ROC para tomada de decisão industrial"
      ],
      tags: ["Python", "OpenCV", "Autoencoder", "Isolation Forest", "Scikit-Learn", "Computer Vision"]
    },
    {
      id: "fraude-evolve",
      category: "data" as const,
      title: "Detecção de Fraude Bancária & Evolve Churn MLOps",
      subtitle: "Estatística Inferencial, NeurIPS 2022 Suite, SQL, MLflow, Docker & Streamlit",
      badge: "Estatística & MLOps",
      platform: "GitHub",
      url: "https://github.com/Landoftha/EDA-Analise-de-Fraude",
      description:
        "Pesquisa empírica e inferência estatística em dados financeiros altamente desbalanceados (NeurIPS 2022 Bank Account Fraud Suite) com relatório técnico em PDF, somada a pipeline de Churn com engenharia de atributos em SQL, rastreamento no MLflow e deploy em Docker/Streamlit.",
      highlights: [
        "Análise exploratória e testes de hipóteses em bases financeiras desbalanceadas",
        "Avaliação de modelos focada em PR-AUC, Recall e mitigação de falsos positivos",
        "Rastreamento de experimentos de Machine Learning com MLflow e container Docker",
        "Relatório executivo e técnico detalhado em PDF"
      ],
      tags: ["Estatística Inferencial", "XGBoost", "SQL", "MLflow", "Docker", "Streamlit"]
    }
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const skillCategories = [
    {
      title: "Front-End & Web",
      icon: <Monitor className="w-5 h-5 text-[#9E2A2B]" />,
      skills: [
        "React.js",
        "Next.js (App Router & SSR)",
        "TypeScript",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Tailwind CSS",
        "PWA (Progressive Web Apps)",
        "Responsive Design"
      ]
    },
    {
      title: "Back-End & APIs",
      icon: <Code2 className="w-5 h-5 text-[#9E2A2B]" />,
      skills: [
        "Python",
        "Node.js",
        "Java 17",
        "Spring Boot 3 (JPA, Security)",
        "APIs RESTful & JSON",
        "OAuth 2.0 / JWT",
        "Swagger / OpenAPI",
        "Automação de Processos (ETL)"
      ]
    },
    {
      title: "Bancos de Dados, DevOps & Cloud",
      icon: <Database className="w-5 h-5 text-[#9E2A2B]" />,
      skills: [
        "PostgreSQL (Queries & Otimização)",
        "MongoDB (NoSQL & Agregações)",
        "Redis & SQL",
        "Docker & Docker Compose",
        "CI/CD (GitHub Actions)",
        "Nginx",
        "Git, GitHub & GitLab",
        "Vercel & Google Cloud (GCP)"
      ]
    },
    {
      title: "IA Generativa, Dados & Diferenciais",
      icon: <Sparkles className="w-5 h-5 text-[#9E2A2B]" />,
      skills: [
        "LLMs / Google Gemini API",
        "Visão Computacional (OpenCV, PyTorch)",
        "Machine Learning (XGBoost, Scikit-Learn)",
        "Power BI (DAX) & Looker Studio",
        "Star Schema (Kimball)",
        "Conformidade com LGPD",
        "Scrum & Kanban"
      ]
    }
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-[#161311] text-[#F5EDE0]"
          : "bg-[#F5EDE0] text-[#231B16] washi-texture"
      }`}
    >
      {/* ================= HERO + NAVBAR WRAPPER WITH SUMI-E WATERCOLOR ARTWORK ================= */}
      <div className="relative overflow-hidden border-b border-[#8C735B]/25">
        {/* Background Japanese Watercolor Image */}
        <div
          className={`absolute inset-0 bg-cover bg-no-repeat pointer-events-none transition-opacity duration-500 ${
            darkMode ? "opacity-20 invert hue-rotate-180" : "opacity-95"
          }`}
          style={{
            backgroundImage: "url('/hero-sumi-bg.jpg')",
            backgroundPosition: "-45px center"
          }}
        />

        {/* Soft gradient overlay so text is always crisp and readable */}
        <div
          className={`absolute inset-0 pointer-events-none ${
            darkMode
              ? "bg-gradient-to-r from-[#161311]/85 via-[#161311]/75 to-[#161311]/85"
              : "bg-gradient-to-r from-[#F5EDE0]/20 via-[#F5EDE0]/55 to-[#F5EDE0]/35"
          }`}
        />

        {/* ================= TOP NAVIGATION BAR (Matches Reference Mockup) ================= */}
        <header className="relative z-30 max-w-6xl mx-auto px-4 sm:px-8 pt-5 pb-4 border-b border-[#6E5641]/25">
          <div className="flex items-center justify-between gap-4">
            {/* Left Brand: Crimson Seal + Brush Script Name */}
            <a href="#inicio" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full bg-[#9E2A2B] flex items-center justify-center shadow-md shadow-[#9E2A2B]/30 group-hover:scale-105 transition-transform">
                <div className="absolute inset-1 rounded-full border border-[#F5EDE0]/70 border-dashed" />
                <span className="font-mono font-bold text-[#F5EDE0] text-base tracking-tighter">
                  &lt;/&gt;
                </span>
              </div>
              <div>
                <div
                  className={`font-brush text-2xl sm:text-3xl leading-none ${
                    darkMode ? "text-[#F5EDE0]" : "text-[#231B16]"
                  }`}
                >
                  Thays Yohana
                </div>
                <div
                  className={`text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase mt-1 ${
                    darkMode ? "text-[#D5C5B3]" : "text-[#4A3B31]"
                  }`}
                >
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
                {/* Crimson Brush Stroke Underline */}
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
                className={`flex items-center gap-2 transition-colors hover:text-[#9E2A2B] ${
                  darkMode ? "text-[#E6D7C3]" : "text-[#2D231C]"
                }`}
              >
                <Monitor className="w-4 h-4" />
                <span>Projetos</span>
              </a>
              <a
                href="#sobre"
                className={`flex items-center gap-2 transition-colors hover:text-[#9E2A2B] ${
                  darkMode ? "text-[#E6D7C3]" : "text-[#2D231C]"
                }`}
              >
                <User className="w-4 h-4" />
                <span>Sobre Mim</span>
              </a>
              <a
                href="#contato"
                className={`flex items-center gap-2 transition-colors hover:text-[#9E2A2B] ${
                  darkMode ? "text-[#E6D7C3]" : "text-[#2D231C]"
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Contato</span>
              </a>
            </nav>

            {/* Right Theme Toggle Pill */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                aria-label="Alternar tema claro ou escuro"
                className={`relative w-14 h-8 rounded-full p-1 transition-colors border cursor-pointer flex items-center ${
                  darkMode
                    ? "bg-[#2C241E] border-[#8C735B]/50 justify-end"
                    : "bg-[#E5D7C4]/90 border-[#8C735B]/50 justify-start"
                }`}
              >
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center shadow-sm transition-transform ${
                    darkMode
                      ? "bg-[#9E2A2B] text-[#F5EDE0]"
                      : "bg-[#FBF7F0] text-[#2D231C]"
                  }`}
                >
                  {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
                </span>
              </button>
            </div>
          </div>
        </header>

        {/* ================= HERO MAIN CONTENT (Matches Reference Mockup) ================= */}
        <section id="inicio" className="relative z-20 max-w-6xl mx-auto px-4 sm:px-8 pt-10 pb-12 lg:py-16">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-4 items-center">
            {/* Left / Center Text Column */}
            <div className="lg:col-span-8 lg:pl-44 xl:pl-52 text-center lg:text-left">
              <p className="font-brush text-2xl sm:text-3xl text-[#9E2A2B] mb-1">
                Olá, eu sou
              </p>

              <div className="relative inline-block">
                <h1
                  className={`font-brush text-5xl sm:text-6xl xl:text-7xl tracking-wide leading-tight ${
                    darkMode ? "text-[#F5EDE0]" : "text-[#231B16]"
                  }`}
                >
                  Thays Yohana
                </h1>
                {/* Organic Crimson Brush Underline */}
                <svg
                  viewBox="0 0 320 16"
                  className="w-4/5 h-4 text-[#9E2A2B] mx-auto lg:mx-0 mt-0.5 opacity-90"
                  fill="currentColor"
                >
                  <path d="M4 10 C85 2, 220 3, 316 9 C240 14, 90 12, 4 10 Z" />
                </svg>
              </div>

              <h2
                className={`font-serif-jp italic text-2xl sm:text-3xl font-medium mt-4 ${
                  darkMode ? "text-[#E6D7C3]" : "text-[#231B16]"
                }`}
              >
                Desenvolvedora Full Stack
              </h2>

              <p
                className={`font-serif-jp text-base sm:text-lg mt-4 max-w-lg mx-auto lg:mx-0 leading-relaxed ${
                  darkMode ? "text-[#D5C5B3]" : "text-[#3B2F26]"
                }`}
              >
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
                  href="/Curriculo_Thays_Yohana_FullStack_Junior.pdf"
                  download="Curriculo_Thays_Yohana_FullStack_Junior.pdf"
                  className={`whitespace-nowrap px-7 py-3.5 rounded-full border-2 font-serif-jp font-medium text-sm sm:text-base transition-all flex items-center gap-2.5 hover:translate-y-[-1px] ${
                    darkMode
                      ? "border-[#D5C5B3]/60 text-[#F5EDE0] hover:bg-[#F5EDE0]/10"
                      : "border-[#3B2F26]/70 text-[#231B16] bg-[#F5EDE0]/60 hover:bg-[#E8D9C5]/80"
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>Baixar Currículo</span>
                </a>
              </div>
            </div>

            {/* Right Column: Enso Ink Brush Circle + Portrait Photo + Sakura Blossoms */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-72 h-72 sm:w-84 sm:h-84 lg:w-92 lg:h-92 flex items-center justify-center">
                {/* Outer Sumi-e Enso Brush Ring SVG */}
                <svg
                  viewBox="0 0 400 400"
                  className={`absolute inset-0 w-full h-full pointer-events-none ${
                    darkMode ? "text-[#E6D7C3]" : "text-[#2B241F]"
                  }`}
                >
                  {/* Main thick enso brush stroke */}
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
                  {/* Secondary dry-brush texture ring */}
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

                {/* Portrait Image Inside the Enso Circle */}
                <div className="relative w-[81%] h-[81%] rounded-full overflow-hidden shadow-2xl border-4 border-[#E5D5C0]/80 bg-[#DFCGB5]">
                  <img
                    src="/foto/thays-yohana.jpg"
                    alt="Thays Yohana Costa - Desenvolvedora Full Stack"
                    className="w-full h-full object-cover object-[center_18%] scale-110 contrast-[1.05] brightness-[0.98] sepia-[0.14]"
                  />
                  {/* Warm washi paper tint & inner vignette so studio backdrop harmonizes with parchment */}
                  <div className="absolute inset-0 bg-[#E8D6BE]/25 mix-blend-multiply pointer-events-none" />
                  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_36px_rgba(43,35,29,0.35)] pointer-events-none" />
                </div>

                {/* Decorative Sakura Blossoms Overlapping Bottom-Left of Enso Frame */}
                <svg
                  viewBox="0 0 180 180"
                  className="absolute -bottom-3 -left-3 w-36 h-36 sm:w-44 sm:h-44 pointer-events-none drop-shadow-sm"
                >
                  {/* Branch */}
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
                  {/* Blossom 1 (Large) */}
                  <g transform="translate(55, 122)">
                    <circle cx="0" cy="-12" r="9" fill="#F4A6B0" />
                    <circle cx="11" cy="-4" r="9" fill="#F7B7C0" />
                    <circle cx="7" cy="10" r="9" fill="#F4A6B0" />
                    <circle cx="-7" cy="10" r="9" fill="#F7B7C0" />
                    <circle cx="-11" cy="-4" r="9" fill="#F4A6B0" />
                    <circle cx="0" cy="0" r="4.5" fill="#C84B58" />
                  </g>
                  {/* Blossom 2 */}
                  <g transform="translate(26, 86) scale(0.8)">
                    <circle cx="0" cy="-12" r="9" fill="#F7B7C0" />
                    <circle cx="11" cy="-4" r="9" fill="#F4A6B0" />
                    <circle cx="7" cy="10" r="9" fill="#F7B7C0" />
                    <circle cx="-7" cy="10" r="9" fill="#F4A6B0" />
                    <circle cx="-11" cy="-4" r="9" fill="#F7B7C0" />
                    <circle cx="0" cy="0" r="4.5" fill="#C84B58" />
                  </g>
                  {/* Blossom 3 */}
                  <g transform="translate(95, 145) scale(0.75)">
                    <circle cx="0" cy="-12" r="9" fill="#F4A6B0" />
                    <circle cx="11" cy="-4" r="9" fill="#F7B7C0" />
                    <circle cx="7" cy="10" r="9" fill="#F4A6B0" />
                    <circle cx="-7" cy="10" r="9" fill="#F7B7C0" />
                    <circle cx="-11" cy="-4" r="9" fill="#F4A6B0" />
                    <circle cx="0" cy="0" r="4.5" fill="#C84B58" />
                  </g>
                  {/* Floating Petals */}
                  <ellipse cx="15" cy="45" rx="6" ry="3.5" transform="rotate(-30 15 45)" fill="#E98A96" />
                  <ellipse cx="135" cy="160" rx="5.5" ry="3" transform="rotate(20 135 160)" fill="#F4A6B0" />
                </svg>
              </div>
            </div>
          </div>

          {/* ================= "MINHAS TECNOLOGIAS" BAR (Matches Reference Mockup) ================= */}
          <div className="mt-12 sm:mt-16 pt-4">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-[1px] w-24 sm:w-56 bg-[#4A3B31]/45" />
              <h3
                className={`font-serif-jp text-lg sm:text-xl font-medium tracking-wide ${
                  darkMode ? "text-[#F5EDE0]" : "text-[#231B16]"
                }`}
              >
                Minhas Tecnologias
              </h3>
              <div className="h-[1px] w-24 sm:w-56 bg-[#4A3B31]/45" />
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-6 sm:gap-4 max-w-5xl mx-auto justify-items-center">
              {heroTechs.map((tech) => (
                <div
                  key={tech}
                  className="flex flex-col items-center gap-2 group cursor-default"
                >
                  <div
                    className={`p-2.5 rounded-xl transition-transform group-hover:scale-110 group-hover:text-[#9E2A2B] ${
                      darkMode ? "text-[#E6D7C3]" : "text-[#2B231D]"
                    }`}
                  >
                    <TechIcon name={tech} className="w-9 h-9 sm:w-10 sm:h-10" />
                  </div>
                  <span
                    className={`font-serif-jp text-xs sm:text-sm font-medium ${
                      darkMode ? "text-[#D5C5B3]" : "text-[#2B231D]"
                    }`}
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* ================= PROJETOS EM DESTAQUE SECTION ================= */}
      <section id="projetos" className="py-16 md:py-24 px-4 sm:px-8 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9E2A2B] mb-2">
              <Code2 className="w-4 h-4" /> Portfólio Técnico
            </div>
            <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold">
              Projetos em Destaque
            </h2>
            <p
              className={`mt-2 text-sm sm:text-base max-w-2xl ${
                darkMode ? "text-[#C8B9A6]" : "text-[#524338]"
              }`}
            >
              Aplicações web Full Stack, APIs REST containerizadas com CI/CD, automações com IA Generativa e pipelines de Engenharia e Ciência de Dados.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "Todos (8)" },
              { id: "fullstack", label: "Full Stack, APIs & DevOps (4)" },
              { id: "data", label: "Dados, BI & IA (4)" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as "all" | "fullstack" | "data")}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-serif-jp font-medium transition-all cursor-pointer border ${
                  activeFilter === tab.id
                    ? "bg-[#9E2A2B] text-[#F5EDE0] border-[#9E2A2B] shadow-sm"
                    : darkMode
                    ? "bg-[#221D1A] text-[#D5C5B3] border-[#8C735B]/30 hover:border-[#9E2A2B]"
                    : "bg-[#EFE4D2] text-[#3B2F26] border-[#8C735B]/40 hover:border-[#9E2A2B]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className={`rounded-2xl p-6 sm:p-7 border transition-all flex flex-col justify-between shadow-sm hover:shadow-md ${
                darkMode
                  ? "bg-[#201B18] border-[#8C735B]/25 hover:border-[#9E2A2B]/60"
                  : "bg-[#FAF5EC]/90 border-[#8C735B]/35 hover:border-[#9E2A2B]/60"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#9E2A2B]/12 text-[#9E2A2B] border border-[#9E2A2B]/25">
                    {project.badge}
                  </span>
                  <span
                    className={`text-xs flex items-center gap-1.5 font-medium ${
                      darkMode ? "text-[#C8B9A6]" : "text-[#5C4B3E]"
                    }`}
                  >
                    {project.platform === "GitLab" ? (
                      <GitlabIcon className="w-3.5 h-3.5 text-[#9E2A2B]" />
                    ) : (
                      <GithubIcon className="w-3.5 h-3.5" />
                    )}
                    {project.platform}
                  </span>
                </div>

                <h3 className="font-serif-jp text-xl sm:text-2xl font-bold leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#9E2A2B] mt-1">
                  {project.subtitle}
                </p>

                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    darkMode ? "text-[#D5C5B3]" : "text-[#3B2F26]"
                  }`}
                >
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5 text-xs sm:text-sm">
                  {project.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
                      <span className={darkMode ? "text-[#E6D7C3]" : "text-[#2D231C]"}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#8C735B]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono border ${
                        darkMode
                          ? "bg-[#2C2520] text-[#E6D7C3] border-[#8C735B]/30"
                          : "bg-[#EFE4D2] text-[#3B2F26] border-[#8C735B]/30"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-serif-jp font-bold text-[#9E2A2B] hover:underline shrink-0"
                >
                  <span>Ver Repositório</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= SOBRE MIM, EXPERIÊNCIA & CURRÍCULO SECTION ================= */}
      <section
        id="sobre"
        className="py-16 md:py-24 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#8C735B]/25"
      >
        {/* Top Row: Resumo Profissional + Experiência na Ambulis */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Resumo + Experiência */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9E2A2B] mb-2">
                <FileText className="w-4 h-4" /> Trajetória & Experiência
              </div>
              <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold">
                Sobre Mim
              </h2>
              <p
                className={`mt-4 text-sm sm:text-base leading-relaxed ${
                  darkMode ? "text-[#D5C5B3]" : "text-[#3B2F26]"
                }`}
              >
                Desenvolvedora Full Stack Júnior graduada em <strong>Ciência de Dados pela FIAP (dez/2025)</strong> e estudante externa do <strong>Programa de Pós-Graduação em Computação Aplicada da UTFPR</strong>. Experiência prática no desenvolvimento de aplicações web modernas ponta a ponta utilizando <strong>React, Next.js, TypeScript, Tailwind CSS, Node.js, Python e Java (Spring Boot)</strong>, além de modelagem e otimização de bancos de dados <strong>PostgreSQL e MongoDB</strong>. Vivência profissional em integração de <strong>APIs REST</strong>, automação de fluxos de dados, containerização com <strong>Docker</strong>, pipelines <strong>CI/CD (GitHub Actions)</strong>, integração de <strong>IA Generativa (Google Gemini API)</strong> e adequação técnica à <strong>LGPD</strong>. Inglês avançado/fluente.
              </p>
            </div>

            {/* Experiência Profissional Card */}
            <div
              className={`rounded-2xl p-6 border ${
                darkMode
                  ? "bg-[#201B18] border-[#8C735B]/25"
                  : "bg-[#FAF5EC]/90 border-[#8C735B]/35"
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E2A2B] mb-2">
                <Briefcase className="w-4 h-4" /> Experiência Profissional
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-serif-jp text-xl font-bold">
                  Ambulis — Estagiária de Dados
                </h3>
                <span className="text-xs font-semibold text-[#9E2A2B]">
                  Agosto 2024 – Dezembro 2024 | Remoto
                </span>
              </div>

              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Desenvolvimento e Integração de APIs REST:</strong> Construiu e manteve integrações entre sistemas internos e serviços externos via APIs RESTful, automatizando fluxos de ingestão e sincronização de dados.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Bancos de Dados Relacionais (PostgreSQL):</strong> Realizou modelagem relacional, criação de índices e refatoração de consultas SQL complexas para otimizar o tempo de resposta da aplicação.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Bancos de Dados NoSQL (MongoDB):</strong> Modelou coleções orientadas a documentos e estruturou rotinas de inserção e consulta voltadas à alta disponibilidade e escalabilidade.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Segurança e Conformidade (LGPD):</strong> Implementou regras de proteção, anonimização e governança de dados sensíveis em conformidade com a Lei Geral de Proteção de Dados (LGPD).
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#9E2A2B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Análise e Automação:</strong> Desenvolveu scripts para processamento automatizado de dados operacionais, apoiando a tomada de decisão técnica e de negócios.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Formação Acadêmica, Prêmios, Certificações & Idiomas */}
          <div className="lg:col-span-5 space-y-6">
            {/* Formação Acadêmica */}
            <div
              className={`rounded-2xl p-6 border ${
                darkMode
                  ? "bg-[#201B18] border-[#8C735B]/25"
                  : "bg-[#FAF5EC]/90 border-[#8C735B]/35"
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E2A2B] mb-4">
                <GraduationCap className="w-4 h-4" /> Formação Acadêmica
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-[#9E2A2B] pl-3.5">
                  <div className="text-xs font-semibold text-[#9E2A2B]">
                    Ago 2025 – Atual | Em andamento
                  </div>
                  <div className="font-serif-jp font-bold text-sm sm:text-base mt-0.5">
                    Estudante Externa de Mestrado em Computação Aplicada
                  </div>
                  <div className={`text-xs mt-0.5 ${darkMode ? "text-[#C8B9A6]" : "text-[#5C4B3E]"}`}>
                    UTFPR — Universidade Tecnológica Federal do Paraná
                  </div>
                </div>

                <div className="border-l-2 border-[#9E2A2B] pl-3.5">
                  <div className="text-xs font-semibold text-[#9E2A2B]">
                    Fev 2024 – Dez 2025 | Concluído
                  </div>
                  <div className="font-serif-jp font-bold text-sm sm:text-base mt-0.5">
                    Graduação em Ciência de Dados (Data Science)
                  </div>
                  <div className={`text-xs mt-0.5 ${darkMode ? "text-[#C8B9A6]" : "text-[#5C4B3E]"}`}>
                    FIAP — Faculdade de Informática e Administração Paulista
                  </div>
                </div>

                <div className="border-l-2 border-[#8C735B]/50 pl-3.5">
                  <div className="text-xs font-semibold opacity-80">
                    2020 – 2022 | Concluído
                  </div>
                  <div className="font-serif-jp font-bold text-sm sm:text-base mt-0.5">
                    Ensino Médio Integrado ao Técnico em Administração
                  </div>
                  <div className={`text-xs mt-0.5 ${darkMode ? "text-[#C8B9A6]" : "text-[#5C4B3E]"}`}>
                    IFMT — Instituto Federal de Mato Grosso
                  </div>
                </div>
              </div>
            </div>

            {/* Prêmios, Certificações e Idiomas */}
            <div
              className={`rounded-2xl p-6 border ${
                darkMode
                  ? "bg-[#201B18] border-[#8C735B]/25"
                  : "bg-[#FAF5EC]/90 border-[#8C735B]/35"
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#9E2A2B] mb-3">
                <Award className="w-4 h-4" /> Prêmios, Certificações & Idiomas
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div>
                  <strong className="text-[#9E2A2B] block mb-1">Prêmios & Participações:</strong>
                  <p className={darkMode ? "text-[#D5C5B3]" : "text-[#3B2F26]"}>
                    • Menção Honrosa por Visualizações – <strong>NASA Pale Blue Dot Challenge (2023)</strong>
                    <br />
                    • <strong>NASA International Space Apps Challenge (2023)</strong>
                    <br />• <strong>Inova Essay Competition (2021)</strong>
                  </p>
                </div>

                <div className="pt-2 border-t border-[#8C735B]/20">
                  <strong className="text-[#9E2A2B] block mb-1">Certificações:</strong>
                  <p className={darkMode ? "text-[#D5C5B3]" : "text-[#3B2F26]"}>
                    Curso de Java (Rocketseat) • NLW IA (Rocketseat) • Python Essentials 2 (Cisco) • Degree Data Science (Alura) • Latin American Leadership Academy (LALA - VBL20)
                  </p>
                </div>

                <div className="pt-2 border-t border-[#8C735B]/20">
                  <strong className="text-[#9E2A2B] flex items-center gap-1.5 mb-1">
                    <Globe className="w-3.5 h-3.5" /> Idiomas:
                  </strong>
                  <p className={darkMode ? "text-[#D5C5B3]" : "text-[#3B2F26]"}>
                    Português (Nativo) • Inglês (Avançado / Fluente) • Espanhol (Intermediário) • Alemão (Básico)
                  </p>
                </div>
              </div>
            </div>
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
            {skillCategories.map((cat, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border ${
                  darkMode
                    ? "bg-[#201B18] border-[#8C735B]/25"
                    : "bg-[#FAF5EC]/90 border-[#8C735B]/35"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-3">
                  {cat.icon}
                  <h4 className="font-serif-jp font-bold text-base">
                    {cat.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${
                        darkMode
                          ? "bg-[#2C2520] text-[#E6D7C3] border-[#8C735B]/30"
                          : "bg-[#EFE4D2] text-[#2D231C] border-[#8C735B]/30"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTATO / FOOTER SECTION ================= */}
      <footer
        id="contato"
        className="py-16 px-4 sm:px-8 max-w-6xl mx-auto border-t border-[#8C735B]/25"
      >
        <div className="text-center max-w-2xl mx-auto">
          <p className="font-brush text-2xl text-[#9E2A2B]">Vamos conversar?</p>
          <h2 className="font-serif-jp text-3xl sm:text-4xl font-bold mt-1">
            Entre em Contato
          </h2>
          <p
            className={`mt-3 text-sm sm:text-base leading-relaxed ${
              darkMode ? "text-[#C8B9A6]" : "text-[#524338]"
            }`}
          >
            Disponível para oportunidades remotas ou presenciais em Curitiba, PR como Desenvolvedora Full Stack Júnior ou Analista de Dados Júnior.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3.5">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thaysyohanacosta71@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="brush-btn px-6 py-3 rounded-full bg-[#9E2A2B] hover:bg-[#822021] text-[#F5EDE0] font-serif-jp font-medium text-sm transition-all flex items-center gap-2"
            >
              <Mail className="w-4 h-4" /> Escrever no Gmail
            </a>

            <button
              onClick={handleCopyEmail}
              className={`px-5 py-3 rounded-full border font-serif-jp text-sm font-medium transition-all flex items-center gap-2 cursor-pointer ${
                darkMode
                  ? "bg-[#201B18] border-[#8C735B]/40 text-[#F5EDE0] hover:border-[#9E2A2B]"
                  : "bg-[#FAF5EC] border-[#8C735B]/50 text-[#231B16] hover:border-[#9E2A2B]"
              }`}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold">E-mail copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#9E2A2B]" />
                  <span>thaysyohanacosta71@gmail.com</span>
                </>
              )}
            </button>

            <a
              href="/Curriculo_Thays_Yohana_FullStack_Junior.pdf"
              download="Curriculo_Thays_Yohana_FullStack_Junior.pdf"
              className={`px-5 py-3 rounded-full border font-serif-jp text-sm font-medium transition-all flex items-center gap-2 ${
                darkMode
                  ? "bg-[#201B18] border-[#8C735B]/40 text-[#F5EDE0] hover:border-[#9E2A2B]"
                  : "bg-[#FAF5EC] border-[#8C735B]/50 text-[#231B16] hover:border-[#9E2A2B]"
              }`}
            >
              <Download className="w-4 h-4 text-[#9E2A2B]" />
              <span>Currículo PDF</span>
            </a>

            <a
              href="https://www.linkedin.com/in/thays-yohana"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-3 rounded-full border font-serif-jp text-sm font-medium transition-all flex items-center gap-2 ${
                darkMode
                  ? "bg-[#201B18] border-[#8C735B]/40 text-[#F5EDE0] hover:border-[#9E2A2B]"
                  : "bg-[#FAF5EC] border-[#8C735B]/50 text-[#231B16] hover:border-[#9E2A2B]"
              }`}
            >
              <LinkedinIcon className="w-4 h-4 text-[#9E2A2B]" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/Landoftha"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-3 rounded-full border font-serif-jp text-sm font-medium transition-all flex items-center gap-2 ${
                darkMode
                  ? "bg-[#201B18] border-[#8C735B]/40 text-[#F5EDE0] hover:border-[#9E2A2B]"
                  : "bg-[#FAF5EC] border-[#8C735B]/50 text-[#231B16] hover:border-[#9E2A2B]"
              }`}
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <a
              href="https://gitlab.com/Landoftha"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-5 py-3 rounded-full border font-serif-jp text-sm font-medium transition-all flex items-center gap-2 ${
                darkMode
                  ? "bg-[#201B18] border-[#8C735B]/40 text-[#F5EDE0] hover:border-[#9E2A2B]"
                  : "bg-[#FAF5EC] border-[#8C735B]/50 text-[#231B16] hover:border-[#9E2A2B]"
              }`}
            >
              <GitlabIcon className="w-4 h-4 text-[#9E2A2B]" />
              <span>GitLab</span>
            </a>
          </div>

          <div
            className={`mt-12 text-xs font-serif-jp ${
              darkMode ? "text-[#9C8C7A]" : "text-[#6E5A4B]"
            }`}
          >
            © 2026 Thays Yohana Costa • Curitiba, PR — Desenvolvido com Next.js, TypeScript & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}
