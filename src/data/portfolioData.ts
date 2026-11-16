export type ProjectCategory = "fullstack" | "data";

export interface ProjectItem {
  id: string;
  category: ProjectCategory;
  title: string;
  subtitle: string;
  badge: string;
  platform: "GitHub" | "GitLab";
  url: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export interface SkillCategoryItem {
  id: string;
  title: string;
  iconName: "monitor" | "code" | "database" | "sparkles";
  skills: string[];
}

export interface EducationItem {
  period: string;
  title: string;
  institution: string;
  active?: boolean;
}

export const PROFILE_LINKS = {
  email: "thaysyohanacosta71@gmail.com",
  gmailCompose: "https://mail.google.com/mail/?view=cm&fs=1&to=thaysyohanacosta71@gmail.com",
  linkedin: "https://www.linkedin.com/in/thays-yohana",
  github: "https://github.com/Landoftha",
  gitlab: "https://gitlab.com/Landoftha",
  resumePdf: "/Curriculo_Thays_Yohana_FullStack_Junior.pdf"
};

export const HERO_TECHS = [
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

export const PROJECTS: ProjectItem[] = [
  {
    id: "financiamento",
    category: "fullstack",
    title: "Simulador & Calculadora de Financiamento Imobiliário",
    subtitle: "Next.js 16, React 19, TypeScript & Tailwind CSS 4",
    badge: "Full Stack / Front-End",
    platform: "GitHub",
    url: "https://github.com/Landoftha/calculadora-financiamento",
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
    category: "fullstack",
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
    category: "fullstack",
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
    category: "fullstack",
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
    category: "data",
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
    category: "data",
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
    category: "data",
    title: "Egg Outlier Detection (PyTorch, PatchCore & Visão Computacional)",
    subtitle: "MobileNetV3 + Spatial PatchCore, OpenCV, SDD (SPECS.md) & Calibração de Custo Industrial",
    badge: "Computer Vision & Deep Learning",
    platform: "GitHub",
    url: "https://github.com/Landoftha/egg_outlier_detection",
    description:
      "Sistema de inspeção visual avícola conduzido via SDD (SPECS.md) sobre 732 fotos autorais (divisão estrita por ovo físico, zero vazamento). Evoluiu de Autoencoder tabular (97,45% ROC-AUC) e PoC v1 (99,0% ROC-AUC) para um PatchCore espacial leve (MobileNetV3-Small, 191k parâmetros, ~2 MB) avaliado exclusivamente em trincas reais.",
    highlights: [
      "89,3% ROC-AUC (mediana em 25 splits por ovo físico) em trincas reais e 97,3% ROC-AUC (Recall 10/10) em teste externo",
      "Auto-normalização espacial intra-ovo para neutralizar falsos positivos da porosidade e pintinhas da casca",
      "Calibração por custo industrial (prevalência 3%, custo 20:1) reduzindo em -55% o prejuízo esperado",
      "Inferência de baixa latência em CPU: 22 ms/foto (1 núcleo) com modelo enxuto de ~2 MB"
    ],
    tags: ["PyTorch", "PatchCore", "MobileNetV3", "OpenCV", "One-Class Learning", "SDD (SPECS.md)"]
  },
  {
    id: "fraude-evolve",
    category: "data",
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

export const SKILL_CATEGORIES: SkillCategoryItem[] = [
  {
    id: "frontend",
    title: "Front-End & Web",
    iconName: "monitor",
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
    id: "backend",
    title: "Back-End, APIs & Engenharia",
    iconName: "code",
    skills: [
      "Python & Node.js",
      "Java 17 & Spring Boot 3",
      "APIs RESTful & JSON",
      "OAuth 2.0 / JWT & Swagger",
      "SDD (Spec-Driven Development)",
      "Automação de Processos (ETL)"
    ]
  },
  {
    id: "devops",
    title: "Bancos de Dados, DevOps & Cloud",
    iconName: "database",
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
    id: "ai-data",
    title: "IA Generativa, Multi-Agentes & Dados",
    iconName: "sparkles",
    skills: [
      "Sistemas Multi-Agentes (AI Agents & MCP)",
      "LLMs / Google Gemini API",
      "Engenharia de Prompt & Orquestração",
      "Visão Computacional (OpenCV, PyTorch)",
      "Machine Learning (XGBoost, Scikit-Learn)",
      "Power BI (DAX) & Looker Studio",
      "Star Schema (Kimball) & LGPD"
    ]
  }
];

export const AMBULIS_EXPERIENCE = {
  company: "Ambulis",
  role: "Estagiária de Dados",
  period: "Agosto 2024 – Dezembro 2024 | Remoto",
  bullets: [
    {
      label: "Desenvolvimento e Integração de APIs REST:",
      text: "Construiu e manteve integrações entre sistemas internos e serviços externos via APIs RESTful, automatizando fluxos de ingestão e sincronização de dados."
    },
    {
      label: "Bancos de Dados Relacionais (PostgreSQL):",
      text: "Realizou modelagem relacional, criação de índices e refatoração de consultas SQL complexas para otimizar o tempo de resposta da aplicação."
    },
    {
      label: "Bancos de Dados NoSQL (MongoDB):",
      text: "Modelou coleções orientadas a documentos e estruturou rotinas de inserção e consulta voltadas à alta disponibilidade e escalabilidade."
    },
    {
      label: "Segurança e Conformidade (LGPD):",
      text: "Implementou regras de proteção, anonimização e governança de dados sensíveis em conformidade com a Lei Geral de Proteção de Dados (LGPD)."
    },
    {
      label: "Análise e Automação:",
      text: "Desenvolveu scripts para processamento automatizado de dados operacionais, apoiando a tomada de decisão técnica e de negócios."
    }
  ]
};

export const EDUCATION_LIST: EducationItem[] = [
  {
    period: "Ago 2025 – Atual | Em andamento",
    title: "Estudante Externa de Mestrado em Computação Aplicada",
    institution: "UTFPR — Universidade Tecnológica Federal do Paraná",
    active: true
  },
  {
    period: "Fev 2024 – Dez 2025 | Concluído",
    title: "Graduação em Ciência de Dados (Data Science)",
    institution: "FIAP — Faculdade de Informática e Administração Paulista",
    active: true
  },
  {
    period: "2020 – 2022 | Concluído",
    title: "Ensino Médio Integrado ao Técnico em Administração",
    institution: "IFMT — Instituto Federal de Mato Grosso",
    active: false
  }
];
