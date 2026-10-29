// index.js
export const servicesData = [
  {
    title: "Architecture & Backend",
    description:
      "Production systems designed from the domain model up. Clean Architecture and Domain-Driven Design on .NET 8 and PostgreSQL, with schemas, APIs, and authorization rules that stay maintainable as the product grows.",
    items: [
      {
        title: "Domain & Data Modeling",
        description: "(220+ Table Relational Model, EF Core Migrations, DDD)",
      },
      {
        title: "Backend Engineering",
        description: "(ASP.NET Core 8, REST APIs, SignalR, Hangfire, Serilog)",
      },
      {
        title: "Frontend Engineering",
        description: "(React 18, TypeScript, Vite, React Query, shadcn/ui)",
      },
    ],
  },
  {
    title: "AI & Document Intelligence",
    description:
      "AI that holds up in production: legal assistance, retrieval, and Arabic document processing built around traceability, human review, and safe fallback behavior.",
    items: [
      {
        title: "RAG & Retrieval",
        description: "(PostgreSQL / pgvector, LLM Integration, Provider Fallback)",
      },
      {
        title: "Arabic & Handwritten OCR",
        description: "(Document Classification, OCR Routing, Background Workers)",
      },
      {
        title: "AI Agents & Speech",
        description: "(Agent Runtimes, Multi-Model Routing, Speech-to-Text, TTS)",
      },
    ],
  },
  {
    title: "Multi-Tenancy & Security",
    description:
      "Tenant-aware authorization and least-privilege access, reviewed at every boundary before anything reaches production.",
    items: [
      {
        title: "Tenant Isolation & IAM",
        description: "(TenantId Boundaries, RBAC, Fine-Grained Permissions)",
      },
      {
        title: "Authentication",
        description: "(ASP.NET Identity, JWT, Refresh-Token Flows)",
      },
      {
        title: "Zero-Trust Access",
        description: "(Tailscale Grants, Key-Only SSH, Firewalling, PII Scrubbing)",
      },
    ],
  },
  {
    title: "Infrastructure & Release Engineering",
    description:
      "Linux production stacks I deploy and operate myself, with releases that back up first, health-check after, and roll back on failure.",
    items: [
      {
        title: "Linux & Containers",
        description: "(VPS, Docker Compose, Nginx, MinIO, systemd)",
      },
      {
        title: "CI/CD & Rollback",
        description: "(GitHub Actions, Pre-Deploy Backups, Health-Checked Rollback)",
      },
      {
        title: "Developer Platforms",
        description: "(Sandboxed Workspaces, Policy-Enforced Access, Per-Task PRs)",
      },
    ],
  },
];
export const projects = [
  {
    id: 1,
    name: "NTEA - Legal Topic Management Engine",
    image: "/assets/projects/ntea.svg",
    description:
      "Domain-driven legal workflow engine: Client, Client File, Topic, Case, Action, Documents, Sessions and Follow-ups, with Arabic normalization for search and dynamic criteria/rule resolution.",
    frameworks: [
      { id: 1, name: "ASP.NET Core 8" },
      { id: 2, name: "EF Core 8" },
      { id: 3, name: "PostgreSQL 17" },
      { id: 4, name: "React 18" },
      { id: 5, name: "TypeScript" },
    ],
  },
  {
    id: 2,
    name: "Lexi AI & Basira OCR - Legal Intelligence",
    image: "/assets/projects/lexi-basira.svg",
    description:
      "Production AI and document stack: legal assistance, Arabic and handwritten OCR, document classification, RAG retrieval, agent runtime, provider fallback, and speech workflows.",
    frameworks: [
      { id: 1, name: "RAG" },
      { id: 2, name: "pgvector" },
      { id: 3, name: "Arabic OCR" },
      { id: 4, name: "AI Agents" },
      { id: 5, name: "Hangfire" },
    ],
  },
  {
    id: 3,
    name: "Nibras Dev Platform - Secure Developer Environment",
    image: "/assets/projects/dev-platform.svg",
    description:
      "Ticket-driven internal platform: per-task workspaces, policy-enforced file access, sandboxed checks, diff review, and one pull request per accepted task, without exposing the proprietary codebase.",
    frameworks: [
      { id: 1, name: "Bash" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "systemd" },
      { id: 4, name: "Linux ACLs" },
      { id: 5, name: "GitHub API" },
    ],
  },
  {
    id: 4,
    name: "Multi-Model Engineering Orchestrator",
    image: "/assets/projects/orchestrator.svg",
    description:
      "Classifier-driven orchestrator that routes engineering tasks across coding models, with capability-based selection, reusable workflows, multi-agent handoffs, and verification gates.",
    frameworks: [
      { id: 1, name: "AI Agents" },
      { id: 2, name: "Multi-Model Routing" },
      { id: 3, name: "Review Gates" },
      { id: 4, name: "Project Memory" },
    ],
  },
  {
    id: 5,
    name: "Hesdor - Open-Source AI Coding CLI",
    image: "/assets/projects/hesdor.svg",
    description:
      "MIT-licensed AI coding CLI that works on any git repo with any LLM provider: OpenAI, Anthropic, OpenRouter, Groq, DeepSeek, Ollama, or LM Studio.",
    href: "https://www.npmjs.com/package/@dean_overlord/hesdor",
    frameworks: [
      { id: 1, name: "TypeScript" },
      { id: 2, name: "Node.js" },
      { id: 3, name: "npm" },
      { id: 4, name: "LLM Providers" },
    ],
  },
  {
    id: 6,
    name: "Lawyer Website - Arabic RTL Client Site",
    description:
      "Arabic-first (RTL) personal website for a Jordanian lawyer, delivered and live in production.",
    href: "https://mohammad-jhlawyer.vercel.app",
    image: "/assets/projects/jhlawyer.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "TypeScript" },
      { id: 3, name: "Vite" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "Arabic RTL" },
    ],
  },
  {
    id: 7,
    name: "IoT Sentinel - Network Security Scanner",
    description:
      "Python IoT network security scanner built on nmap: host discovery, port and service fingerprinting, and risk reporting.",
    href: "https://github.com/ksjxixi-gif/iot",
    image: "/assets/projects/iot-sentinel.svg",
    frameworks: [
      { id: 1, name: "Python" },
      { id: 2, name: "nmap" },
      { id: 3, name: "Network Security" },
    ],
  },
];
export const contact = {
  email: "hello@mohammadabukhadija.tech",
  phone: "+962 78 550 0580",
};
export const socials = [
  { name: "GitHub", href: "https://github.com/ksjxixi-gif" },
];
