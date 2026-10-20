"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  ExternalLink,
  Brain,
  Database,
  BarChart3,
  Cpu,
  ShieldAlert,
  Sparkles,
  Layers,
  FileText,
  Activity,
  Coffee,
  CheckCircle2,
  Code2,
  Workflow
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

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("thaysyohanacosta71@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const featuredProjects = [
    {
      id: "screentime",
      title: "Screentime vs. Education: Impacto no Rendimento Escolar",
      subtitle: "Big Data, Econometria de Painel e Causal Machine Learning",
      platform: "GitLab",
      platformUrl: "https://gitlab.com/Landoftha/screentime_vs_Education",
      badge: "Big Data & Causal ML",
      badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      accentGlow: "from-orange-500/20 to-amber-500/5",
      metrics: [
        { label: "Microdados", value: "12M+ registros" },
        { label: "Bases Federais", value: "SAEB, Censo, PeNSE, TIC" },
        { label: "Modelagem", value: "AR-Panel + XGBoost + SHAP" },
      ],
      description:
        "Estudo empírico em larga escala integrando quatro bases federais para investigar a causalidade entre tempo de exposição a telas e notas de aprendizagem no Brasil. Superação do Paradoxo de Simpson através de modelos dinâmicos de painel e identificação do limiar crítico de 2.5h/dia via interpretabilidade SHAP.",
      tags: ["Big Data (12M)", "XGBoost", "SHAP Values", "Regressão de Painel", "Paradoxo de Simpson", "Python", "LaTeX"],
      highlights: [
        "Pipeline em chunks para processamento de 12 milhões de microdados históricos",
        "Detecção do Paradoxo de Simpson ao controlar pelo estrato socioeconômico (INSE)",
        "Projeções de cenários para 2025/2027 com modelo autorregressivo de efeitos fixos",
        "Artigo científico completo estruturado e diagramado em LaTeX"
      ],
      icon: <Brain className="w-6 h-6 text-orange-400" />,
      primaryLink: {
        label: "Ver no GitLab",
        url: "https://gitlab.com/Landoftha/screentime_vs_Education",
        icon: <GitlabIcon className="w-4 h-4 text-orange-400" />
      }
    },
    {
      id: "sigma-body",
      title: "Sigma Body Analytics: Pipeline Multimodal de Saúde",
      subtitle: "Engenharia de Dados End-to-End, Google Fit API e Gemini Vision OCR",
      platform: "GitHub",
      platformUrl: "https://github.com/Landoftha/sigma-body-analytics",
      badge: "Multimodal AI & Wearables",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      accentGlow: "from-emerald-500/20 to-teal-500/5",
      metrics: [
        { label: "Visão IA", value: "Gemini 2.5 Flash" },
        { label: "Integração API", value: "Google Fit OAuth2" },
        { label: "Analytics", value: "Looker Studio" },
      ],
      description:
        "Pipeline automatizado de engenharia de dados que unifica métricas de cardio via Google Fit API e processa treinos de força a partir de capturas de tela usando Visão Computacional com Gemini 2.5 Flash. Consolidação de múltiplas fontes em um Master Dataset normalizado para inteligência esportiva e dashboards de performance.",
      tags: ["Python 3.13", "Gemini Vision AI", "Google Fit API", "Looker Studio", "Feature Engineering", "OAuth2"],
      highlights: [
        "Extração automatizada de treinos cardiovasculares via Google Fit REST API",
        "OCR inteligente com modelo de visão multimodal Gemini para screenshots do Samsung Health",
        "Classificação e agrupamento automático de grupos musculares e intensidade",
        "Merge inteligente e geração de base analítica pronta para Looker Studio"
      ],
      icon: <Activity className="w-6 h-6 text-emerald-400" />,
      primaryLink: {
        label: "Ver no GitHub",
        url: "https://github.com/Landoftha/sigma-body-analytics",
        icon: <GithubIcon className="w-4 h-4" />
      }
    },
    {
      id: "grao-nobre",
      title: "Grão Nobre: Plataforma Omnichannel de Business Analytics",
      subtitle: "Modelagem Dimensional Star Schema para E-commerce e Lojas Físicas",
      platform: "GitHub",
      platformUrl: "https://github.com/Landoftha/grao-nobre-analytics",
      badge: "Data Modeling & BI",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      accentGlow: "from-amber-500/20 to-orange-500/5",
      metrics: [
        { label: "Arquitetura", value: "Star Schema (Kimball)" },
        { label: "Canais", value: "E-com + 3 Lojas Físicas" },
        { label: "Dimensões", value: "Clientes, Estoque, Vendas" },
      ],
      description:
        "Plataforma completa de Business Analytics para uma rede de cafés especiais operando em e-commerce nacional e 3 cafeterias físicas (Curitiba, SP e Florianópolis). Modelagem dimensional estruturada em Star Schema com tabelas de fatos e dimensões para acompanhamento de estoque, conversão de marketing e KPIs financeiros.",
      tags: ["Data Modeling", "Star Schema", "ETL", "Python", "SQL", "Análise de Negócio", "KPIs"],
      highlights: [
        "Modelagem dimensional com separação estrita de Fatos (Vendas, Marketing, Atendimento, Estoque)",
        "Gerador de dados sintéticos de alta fidelidade com sazonalidade e regras de negócio",
        "Estrutura de dicionário de dados (Data Dictionary) e regras de negócio documentadas",
        "Pronto para integração com camadas de visualização e previsão de demanda"
      ],
      icon: <Coffee className="w-6 h-6 text-amber-400" />,
      primaryLink: {
        label: "Ver no GitHub",
        url: "https://github.com/Landoftha/grao-nobre-analytics",
        icon: <GithubIcon className="w-4 h-4" />
      }
    },
    {
      id: "fraude",
      title: "Detecção de Fraudes Bancárias com Inferência Estatística",
      subtitle: "Pesquisa Empírica e Comparação de Modelos em Dados Desbalanceados",
      platform: "GitHub",
      platformUrl: "https://github.com/Landoftha/EDA-Analise-de-Fraude",
      badge: "Estatística & Risco",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      accentGlow: "from-blue-500/20 to-indigo-500/5",
      metrics: [
        { label: "Benchmark", value: "NeurIPS 2022 Suite" },
        { label: "Desafio", value: "Alta Assimetria / Imbalance" },
        { label: "Modelos", value: "XGBoost, Random Forest" },
      ],
      description:
        "Pesquisa empírica e benchmarking de algoritmos de machine learning para detecção de fraudes em transações de cartões e contas correntes. Análise exploratória e inferencial rigorosa das distribuições para equilibrar o trade-off entre precisão e taxa de falsos positivos na mitigação de risco financeiro.",
      tags: ["Estatística Inferencial", "Machine Learning", "Detecção de Anomalias", "EDA", "Risk Analytics"],
      highlights: [
        "Avaliação comparativa de datasets canônicos e o suite NeurIPS 2022",
        "Tratamento de dados desbalanceados e otimização de métricas focadas em Recall e PR-AUC",
        "Módulos desacoplados para cálculo estatístico, geração de gráficos e modelagem",
        "Notebook interativo para reprodução das análises e testes de hipóteses"
      ],
      icon: <ShieldAlert className="w-6 h-6 text-blue-400" />,
      primaryLink: {
        label: "Ver no GitHub",
        url: "https://github.com/Landoftha/EDA-Analise-de-Fraude",
        icon: <GithubIcon className="w-4 h-4" />
      }
    }
  ];

  const secondaryProjects = [
    {
      title: "Predicting Medicine for Cancer Treatment",
      desc: "Machine Learning e Bioinformática para resposta terapêutica em tratamentos oncológicos.",
      tags: ["Python", "Jupyter", "Healthcare ML"],
      url: "https://github.com/Landoftha/Predicting-Medicine-for-Cancer-Treatment"
    },
    {
      title: "Sales & Performance Dashboard",
      desc: "Aplicação analítica para monitoramento de KPIs de vendas e projeções de faturamento.",
      tags: ["Python", "Dashboards", "Data Viz"],
      url: "https://github.com/Landoftha/SalesDashboard"
    },
    {
      title: "DataViz: Anime Preferences Analytics",
      desc: "Análise exploratória personalizada com dados de entretenimento e hábitos de consumo.",
      tags: ["Python", "Pandas", "Visualização"],
      url: "https://github.com/Landoftha/DataViz"
    }
  ];

  const skillCategories = [
    {
      category: "Ciência de Dados & Machine Learning",
      icon: <Brain className="w-5 h-5 text-sky-400" />,
      skills: ["Python", "Pandas", "NumPy", "Scikit-Learn", "XGBoost", "SHAP (XAI)", "Estatística Inferencial", "Modelagem de Painel Econométrico"]
    },
    {
      category: "Engenharia de Dados & Arquitetura",
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      skills: ["Modelagem Dimensional (Star Schema)", "Processamento em Chunks (Big Data)", "REST APIs (Google Fit)", "Docker", "Git / GitHub / GitLab"]
    },
    {
      category: "Inteligência Artificial Multimodal",
      icon: <Sparkles className="w-5 h-5 text-purple-400" />,
      skills: ["Google Gemini Vision (OCR)", "Engenharia de Prompts", "Extração de Dados Não Estruturados", "TensorFlow / CNNs"]
    },
    {
      category: "Visualização & Business Intelligence",
      icon: <BarChart3 className="w-5 h-5 text-emerald-400" />,
      skills: ["Looker Studio", "Matplotlib / Seaborn", "Plotly", "LaTeX (Artigos Científicos)", "KPIs de Negócio & Varejo"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 antialiased selection:bg-sky-500/20 selection:text-sky-300">
      {/* Background Decorative Gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-[30%] right-[10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[130px]" />
      </div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#070b14]/80 border-b border-white/[0.06]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 flex items-center justify-center font-bold text-white text-sm shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
              TY
            </div>
            <span className="font-semibold tracking-tight text-slate-200 group-hover:text-white transition-colors">
              Thays Yohana
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="#projetos" className="hover:text-white transition-colors">Projetos</a>
            <a href="#habilidades" className="hover:text-white transition-colors">Habilidades</a>
            <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <a
              href="https://github.com/Landoftha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub de Thays Yohana"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://gitlab.com/Landoftha"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitLab de Thays Yohana"
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
            >
              <GitlabIcon className="w-5 h-5 text-orange-400" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thaysyohanacosta71@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 border border-sky-500/20 transition-all hover:scale-[1.02]"
            >
              <Mail className="w-3.5 h-3.5" /> Falar comigo (Gmail)
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-28 md:pb-24 px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 mb-6">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Disponível para oportunidades em Ciência de Dados</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
            Dados que contam histórias.{" "}
            <span className="bg-gradient-to-r from-sky-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Decisões com impacto real.
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed">
            Olá, sou a <strong className="text-white font-semibold">Thays Yohana Costa</strong>. Sou cientista de dados e analytics engineer, com foco em <strong>pesquisa causal com Big Data</strong>, <strong>IA multimodal (Visão Computacional & LLMs)</strong> e modelagem analítica ponta a ponta.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projetos"
              className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2 hover:translate-y-[-1px]"
            >
              <Layers className="w-4 h-4" /> Ver Projetos em Destaque
            </a>
            <a
              href="https://github.com/Landoftha"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] font-medium text-sm transition-all flex items-center gap-2 hover:translate-y-[-1px]"
            >
              <GithubIcon className="w-4 h-4" /> GitHub (@Landoftha)
            </a>
            <a
              href="https://gitlab.com/Landoftha"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] font-medium text-sm transition-all flex items-center gap-2 hover:translate-y-[-1px]"
            >
              <GitlabIcon className="w-4 h-4 text-orange-400" /> GitLab (@Landoftha)
            </a>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm">
            <div className="p-3">
              <div className="text-2xl font-bold text-sky-400">12M+</div>
              <div className="text-xs text-slate-400 mt-0.5">Microdados Analisados</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-purple-400">End-to-End</div>
              <div className="text-xs text-slate-400 mt-0.5">Pipelines de Dados</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-emerald-400">Multimodal</div>
              <div className="text-xs text-slate-400 mt-0.5">Vision AI & Wearables</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-amber-400">FIAP</div>
              <div className="text-xs text-slate-400 mt-0.5">Formada em Ciência de Dados</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projetos" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <Workflow className="w-4 h-4" /> Casos Reais & Portfólio
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Projetos em Destaque
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Desenvolvidos com base em problemas autênticos de mercado e pesquisa científica, evitando datasets genéricos e priorizando arquiteturas completas.
          </p>
        </div>

        <div className="space-y-8">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-white/[0.08] hover:border-white/[0.18] transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Subtle top glow */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.accentGlow} opacity-0 group-hover:opacity-100 transition-opacity`} />

              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  {/* Badge & Platform */}
                  <div className="flex flex-wrap items-center gap-2.5 mb-3">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${project.badgeColor}`}>
                      {project.badge}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      {project.platform === "GitLab" ? (
                        <GitlabIcon className="w-3.5 h-3.5 text-orange-400" />
                      ) : (
                        <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                      )}
                      {project.platform}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-sky-300/80 mt-1">
                    {project.subtitle}
                  </p>

                  {/* 2-Sentence Impact Description (Matt Chapman's Rule) */}
                  <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] text-slate-300 text-sm sm:text-[15px] leading-relaxed">
                    {project.description}
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-5 space-y-2">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Destaques Metodológicos:
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
                      {project.highlights.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Metrics Card & Link Column */}
                <div className="lg:w-72 shrink-0 flex flex-col justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                      Métricas & Escala
                    </div>
                    <div className="space-y-3">
                      {project.metrics.map((metric, idx) => (
                        <div key={idx} className="border-b border-white/[0.04] pb-2 last:border-b-0 last:pb-0">
                          <div className="text-[11px] text-slate-400">{metric.label}</div>
                          <div className="text-sm font-semibold text-white mt-0.5">{metric.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <a
                      href={project.primaryLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 border border-white/[0.1] hover:border-white/[0.2]"
                    >
                      {project.primaryLink.icon}
                      {project.primaryLink.label}
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 ml-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Secondary Projects Grid */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-sky-400" /> Outros Repositórios e Explorações
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secondaryProjects.map((p, idx) => (
              <a
                key={idx}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.06] hover:border-white/[0.12] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-sm text-white group-hover:text-sky-300 transition-colors">
                      {p.title}
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
            <Cpu className="w-4 h-4" /> Stack Tecnológica
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Habilidades & Tecnologias
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
            Ferramentas utilizadas no dia a dia para modelagem matemática, arquitetura de pipelines e deploy de modelos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-white/[0.05] border border-white/[0.08]">
                  {cat.icon}
                </div>
                <h3 className="font-semibold text-base text-white">
                  {cat.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/[0.04] text-slate-200 border border-white/[0.05]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-16 md:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400 mb-2">
              <FileText className="w-4 h-4" /> Background & Trajetória
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Sobre Mim
            </h2>
            <div className="mt-6 space-y-4 text-slate-300 text-base leading-relaxed">
              <p>
                Sou graduada em <strong>Ciência de Dados pela FIAP</strong>, com sólida atuação prática em análise exploratória, inferência estatística, engenharia de dados e machine learning aplicado.
              </p>
              <p>
                Acredito que o verdadeiro valor da ciência de dados não está em construir modelos complexos de forma isolada, mas sim em <strong>compreender a mecânica do negócio ou do fenômeno estudado</strong> — seja decifrando relações sociodemográficas em 12 milhões de microdados governamentais ou orquestrando dados multimodais de visão computacional para inteligência de performance física.
              </p>
              <p>
                Estou constantemente explorando a intersecção entre <strong>Modelagem Estatística Clássica</strong> e <strong>IA Generativa/Multimodal (LLMs & Vision AI)</strong>, focando em automação de tarefas cognitivas e produtos de dados escaláveis.
              </p>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Educação & Foco</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-xs text-sky-400 font-medium">Graduação (Concluída)</div>
                <div className="text-sm font-semibold text-white mt-1">Ciência de Dados</div>
                <div className="text-xs text-slate-400 mt-0.5">FIAP — Faculdade de Informática e Administração Paulista</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                <div className="text-xs text-purple-400 font-medium">Áreas de Pesquisa & Interesse</div>
                <div className="text-sm font-semibold text-white mt-1">Econometria Causal & Visão Computacional</div>
                <div className="text-xs text-slate-400 mt-0.5">Modelos de Painel, Interpretabilidade SHAP, Multimodal AI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section / Footer */}
      <footer id="contato" className="py-16 px-4 sm:px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Vamos conversar?
          </h2>
          <p className="mt-3 text-slate-400 text-sm leading-relaxed">
            Seja para oportunidades profissionais, projetos em Ciência de Dados ou trocar ideias sobre tecnologia e pesquisa, fique à vontade para me enviar uma mensagem.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=thaysyohanacosta71@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-sky-500/20 hover:translate-y-[-1px]"
            >
              <Mail className="w-4 h-4" /> Escrever no Gmail
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] text-sm font-medium transition-all flex items-center gap-2 hover:translate-y-[-1px] cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-semibold">E-mail copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-300" />
                  <span>thaysyohanacosta71@gmail.com</span>
                </>
              )}
            </button>
            <a
              href="https://github.com/Landoftha"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] text-sm font-medium transition-all flex items-center gap-2"
            >
              <GithubIcon className="w-4 h-4" /> GitHub
            </a>
            <a
              href="https://gitlab.com/Landoftha"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white border border-white/[0.1] text-sm font-medium transition-all flex items-center gap-2"
            >
              <GitlabIcon className="w-4 h-4 text-orange-400" /> GitLab
            </a>
          </div>

          <div className="mt-16 text-xs text-slate-500">
            © 2026 Thays Yohana Costa. Desenvolvido com Next.js & Tailwind CSS.
          </div>
        </div>
      </footer>
    </div>
  );
}
