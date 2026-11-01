// index.js
export const servicesData = [
  {
    title: "Architecture & Backend",
    description:
      "Production systems designed from the domain model up: Clean Architecture and DDD on .NET 10 and PostgreSQL, with schemas, APIs, and authorization rules that stay maintainable as the product grows.",
    items: [
      { title: "Domain & data modeling", description: "186-table relational model, EF Core migrations, DDD" },
      { title: "Backend engineering", description: "ASP.NET Core on .NET 10, 715 REST endpoints, SignalR, Hangfire" },
      { title: "Frontend engineering", description: "React 18, TypeScript, Vite, React Query, shadcn/ui" },
    ],
  },
  {
    title: "AI & Document Intelligence",
    description:
      "AI that holds up in production: legal assistance, retrieval, and Arabic document processing built around traceability, human approval, and safe fallback behavior.",
    items: [
      { title: "RAG & retrieval", description: "PostgreSQL / pgvector, LLM integration, provider fallback" },
      { title: "Arabic & handwritten OCR", description: "Document classification, OCR routing, background workers" },
      { title: "AI agents & speech", description: "Agent runtimes, human approval gates, speech-to-text, TTS" },
    ],
  },
  {
    title: "Forward Deployed Engineering",
    description:
      "Working directly with the people who use the system: legal teams, clients, and operators. I turn their real workflows into software, deploy it into their environment, and stay on it until it works in production.",
    items: [
      { title: "Requirements to systems", description: "Legal-domain workflows into domain models, schemas, and APIs" },
      { title: "Client delivery", description: "Arabic-first client sites and platforms, shipped and live" },
      { title: "On-site infrastructure", description: "Repurposed office hardware, Proxmox VMs, Tailscale access" },
      { title: "Production support", description: "Root-cause analysis across UI, APIs, data, and networks" },
    ],
  },
  {
    title: "Infrastructure & Operations",
    description:
      "Linux production stacks I deploy and operate myself, from virtual machines and networking to releases that back up first, health-check after, and roll back on failure.",
    items: [
      { title: "Linux & containers", description: "VPS, Docker Compose, Nginx, MinIO, systemd" },
      { title: "Networking & virtualization", description: "TCP/IP, DNS, reverse proxying, Tailscale, Proxmox VMs" },
      { title: "CI/CD & rollback", description: "GitHub Actions with change detection, pre-deploy backups, rollback" },
      { title: "Developer platforms", description: "Offline sandboxes, policy-enforced file access, per-task PRs" },
    ],
  },
];
// Outermost layer first.
export const securityLayers = [
  {
    layer: "network",
    summary: "Zero-trust access: developers reach only the dev host; production and admin tools sit on a private network.",
    controls: ["Tailscale identity grants", "Tailnet-only admin tools", "Nginx reverse proxy"],
  },
  {
    layer: "host",
    summary: "Hardened Linux hosts with key-only access, firewalling, and active ban rules.",
    controls: ["Key-only SSH", "iptables / UFW", "Fail2ban", "Log monitoring"],
  },
  {
    layer: "identity",
    summary:
      "Short-lived sessions with rotating refresh tokens stored only as hashes. Replaying an old token revokes its whole family, and access changes apply on the next request.",
    controls: ["Rotating refresh tokens", "Replay detection", "Instant revocation", "No account enumeration"],
  },
  {
    layer: "application",
    summary:
      "Fail-closed authorization: all 715 endpoints declare an access rule, the API refuses to start if one doesn't, and golden files fail the build if access ever widens.",
    controls: ["One deny-wins resolver", "Plan & delegation ceilings", "Tenant isolation", "CSP, HSTS, CSRF"],
  },
  {
    layer: "ai",
    summary:
      "AI agents propose, people approve: every mutating action needs a one-time approval bound to the exact tool and arguments, and retrieval never leaves the caller's firm.",
    controls: ["Human approval gate", "Tenant-scoped retrieval", "Prompt-injection defenses", "Grounded answers only"],
  },
  {
    layer: "data",
    summary: "Development runs on a PII-scrubbed copy of production, not on real client data.",
    controls: ["PII scrubbing", "Pre-deploy backups", "Migration safety review"],
  },
  {
    layer: "release",
    summary: "Production deploys only from main, through a manually triggered, CI-gated workflow.",
    controls: ["GitHub Actions gates", "Health-checked rollback", "Change-detection CI", "Offline test sandbox"],
  },
  {
    layer: "verification",
    summary: "Final technical review gate for all developer work; verified end to end, not just in the UI.",
    controls: ["2,634 automated tests", "Full-platform review", "Design reviews", "Root-cause analysis"],
  },
];
export const projects = [
  {
    id: 1,
    name: "NTEA",
    tagline: "Legal topic management engine",
    image: "/assets/projects/ntea.svg",
    description:
      "Domain-driven legal workflow engine: Client, Client File, Topic, Case, Action, Documents, Sessions and Follow-ups, with Arabic normalization for search and dynamic criteria/rule resolution.",
    frameworks: [".NET 10", "EF Core", "PostgreSQL 17", "React 18", "TypeScript"],
  },
  {
    id: 2,
    name: "Lexi AI & Basira OCR",
    tagline: "Legal intelligence & document systems",
    image: "/assets/projects/lexi-basira.svg",
    description:
      "Production AI and document stack: legal assistance, Arabic and handwritten OCR, document classification, and RAG retrieval. Mutating AI actions need a one-time human approval, retrieval stays inside the caller's firm, and there is no answer without a verified source.",
    frameworks: ["RAG", "pgvector", "Arabic OCR", "AI Agents", "Human-in-the-loop"],
  },
  {
    id: 3,
    name: "Nibras Dev Platform",
    tagline: "Secure developer environment",
    image: "/assets/projects/dev-platform.svg",
    description:
      "Platform for working with developers without exposing the codebase: every ticket gets a private, watermarked workspace so a leak is traceable, files fall into four access tiers, tests run in an offline read-only sandbox, and a merge passes only on a hash of exactly the files that were tested.",
    frameworks: ["Bash", "Node.js", "systemd sandbox", "Tailscale", "GitHub API"],
  },
  {
    id: 8,
    name: "Secure Shared Dev Environment",
    tagline: "Zero-trust infrastructure",
    image: "/assets/projects/zero-trust-env.svg",
    description:
      "Shared development environment on repurposed office hardware: a Proxmox-hosted Ubuntu VM behind Tailscale identity grants, so developers reach only the dev host and production is unreachable. Key-only SSH, host firewalling, and a PII-scrubbed PostgreSQL 17 copy of production.",
    frameworks: ["Proxmox", "Tailscale", "Ubuntu", "PostgreSQL 17", "UFW"],
  },
  {
    id: 9,
    name: "Central Archive Review",
    tagline: "System design review",
    image: "/assets/projects/archive-review.svg",
    description:
      "Reviewed a proposed central archive design against the real codebase and replaced it with a leaner one: 2 new tables instead of 5, no parallel services, no dual-read migration, and durable background jobs, delivered as a 6-phase plan with negative tests mapped to all 22 acceptance criteria.",
    frameworks: ["System Design", "Design Review", "PostgreSQL", "Hangfire", "SHA-256"],
  },
  {
    id: 4,
    name: "Engineering Orchestrator",
    tagline: "Multi-model AI infrastructure",
    image: "/assets/projects/orchestrator.svg",
    description:
      "Classifier-driven orchestrator that routes engineering tasks across coding models, with capability-based selection, reusable workflows, multi-agent handoffs, and verification gates.",
    frameworks: ["AI Agents", "Multi-Model Routing", "Review Gates", "Project Memory"],
  },
  {
    id: 5,
    name: "Hesdor",
    tagline: "Open-source AI coding CLI",
    image: "/assets/projects/hesdor.svg",
    description:
      "MIT-licensed AI coding CLI that works on any git repo with any LLM provider: OpenAI, Anthropic, OpenRouter, Groq, DeepSeek, Ollama, or LM Studio.",
    href: "https://www.npmjs.com/package/@dean_overlord/hesdor",
    frameworks: ["TypeScript", "Node.js", "npm", "LLM Providers"],
  },
  {
    id: 6,
    name: "Lawyer Website",
    tagline: "Arabic RTL client site",
    image: "/assets/projects/jhlawyer.jpg",
    description:
      "Arabic-first (RTL) personal website for a Jordanian lawyer, delivered and live in production.",
    href: "https://mohammad-jhlawyer.vercel.app",
    frameworks: ["React", "TypeScript", "Vite", "Tailwind CSS", "Arabic RTL"],
  },
  {
    id: 7,
    name: "IoT Sentinel",
    tagline: "Network security scanner",
    image: "/assets/projects/iot-sentinel.svg",
    description:
      "Python IoT network security scanner built on nmap: host discovery, port and service fingerprinting, and risk reporting.",
    href: "https://github.com/ksjxixi-gif/iot",
    frameworks: ["Python", "nmap", "Network Security"],
  },
];
export const contact = {
  email: "hello@mohammadabukhadija.tech",
  phone: "+962 78 550 0580",
};
export const socials = [
  { name: "GitHub", href: "https://github.com/ksjxixi-gif" },
];
