export const profile = {
  name: "Gopikrishna Gummadidala",
  title: "Full Stack Software Engineer",
  location: "Germany",
  workAuthorization: "EU Permanent Residence",
  availability: "Available immediately",
  email: "gopikrishna.gummadidala@gmail.com",
  linkedin: "https://linkedin.com/in/gopikrishna-gummadidala",
  github: "https://github.com/GopiKrishnaGummadidala",
  resumeUrl: "/Gopikrishna-Gummadidala-CV.pdf",
  tagline:
    "13+ years building scalable enterprise applications across JavaScript and .NET — and, more recently, the AI agents that automate the work around them.",
  summary:
    "Full stack engineer specialized in cloud-native architecture and production AI agents built on top of LLMs like Claude and GPT. I lead cross-functional teams, favor clean, boring architecture (SOLID, DRY, KISS), and ship across REST, GraphQL, microservices, and IoT integrations.",
};

export const stats = [
  { value: "13+", label: "Years in production software" },
  { value: "50%", label: "Manual triage cut by an AI bug-tracking agent" },
  {
    value: "40–50%",
    label: "Load-time improvement, AngularJS → React/Angular",
  },
  { value: "3", label: "Microsoft certifications (MCP, MCSA, MCSD)" },
];

export const highlights = [
  {
    title: "AI Bug-Tracker Agent",
    period: "Softship",
    description:
      "Designed an autonomous agent that parses incoming tickets, reasons over the codebase, and drafts fixes — NestJS orchestration, Python for ticket parsing and model interfacing, powered by Claude and OpenAI. Cut manual bug-fix intervention by roughly half.",
    tags: ["Claude", "OpenAI", "NestJS", "Python", "LLM orchestration"],
  },
  {
    title: "AngularJS → Angular/React Migration",
    period: "Softship",
    description:
      "Led the migration of a legacy AngularJS enterprise app to Angular and React with TypeScript, cutting load time by ~40% and bundle size by ~60% without a feature freeze.",
    tags: ["Angular", "React", "TypeScript", "Performance"],
  },
  {
    title: "ssh-customize Framework",
    period: "Softship",
    description:
      "Architected a reusable UI-customization framework for Angular and React apps that lets administrators change visibility, enablement, and labeling at runtime — no redeploys, and UI customization decoupled from the release cycle.",
    tags: ["Angular", "React", "Framework design"],
  },
  {
    title: "Payments & Real-Time Integrations",
    period: "Value Momentum",
    description:
      "Integrated PayPal and Braintree for end-to-end payment processing, and built the real-time API bridge between GEICO's HISS platform and external insurance providers.",
    tags: [".NET Web API", "PayPal", "Braintree", "REST"],
  },
];

export const experience = [
  {
    company: "Softship GmbH",
    role: "Software Engineer",
    period: "Oct 2019 — Present",
    location: "Hamburg, Germany",
    context:
      "Enterprise software for international liner shipping · 120+ clients worldwide · WiseTech Global group",
    points: [
      "Migrated a legacy AngularJS application to Angular/React (TypeScript): ~40% faster load time, ~60% smaller bundle.",
      "Owned full-stack delivery of Lease Contract Management, Equipment Tracking, and Booking systems (.NET, C#, NestJS, Node.js).",
      "Designed and built an autonomous AI bug-tracking agent (OpenAI + Claude, NestJS orchestration, Python) — cut manual triage by ~50%.",
      "Delivered RESTful and GraphQL APIs on .NET Core with Elasticsearch and Redis for high-volume, multi-client datasets.",
      "Architected the ssh-customize framework for runtime UI customization across Angular and React apps.",
      "Introduced RabbitMQ-based messaging for decoupled microservice communication in high-availability environments.",
    ],
  },
  {
    company: "Value Momentum",
    role: "Senior Software Engineer",
    period: "Jul 2018 — Jul 2019",
    location: "Hyderabad, India",
    context:
      "Digital transformation for Property & Casualty insurance · 100+ global insurer clients",
    points: [
      "Integrated PayPal and Braintree REST APIs for secure end-to-end payment processing, including webhook handling and failure recovery.",
      "Built real-time RESTful integrations between GEICO's HISS platform and external insurance providers.",
      "Delivered .NET Core Web API features end-to-end into AWS, with SonarQube-driven code quality gates.",
    ],
  },
  {
    company: "Qualminds Technologies",
    role: "Senior Software Engineer",
    period: "Apr 2015 — Jul 2018",
    location: "Hyderabad, India",
    context: "Digital product engineering, startups to enterprise",
    points: [
      "Designed a multi-tenant SQL Server database layer for real-time vehicle inventory and dealer-specific content.",
      "Built OfferSites, a CMS that auto-generates dealer websites for OEM automotive clients, on ASP.NET, AngularJS, and Backbone.js.",
    ],
  },
  {
    company: "Glansa the Solution",
    role: "Software Engineer",
    period: "Feb 2014 — Mar 2015",
    location: "Hyderabad, India",
    context: "IoT, DevOps & cloud solutions",
    points: [
      "Sole developer on a Consumables Management System for a manufacturing client — full stack plus hardware integration (barcode scanners, printers) on ASP.NET, C#, and WCF.",
    ],
  },
  {
    company: "San Informatics India Pvt Ltd",
    role: "Software Engineer",
    period: "Jan 2013 — Jan 2014",
    location: "Hyderabad, India",
    context: "",
    points: ["software development"],
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "Angular",
      "NgXS",
      "React",
      "Redux",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PrimeNG",
    ],
  },
  {
    label: "Backend",
    skills: [
      ".NET / .NET Core",
      "C#",
      "ASP.NET Web API",
      "Node.js",
      "NestJS",
      "Python",
      "FastAPI",
      "Blazor",
    ],
  },
  {
    label: "Data",
    skills: [
      "SQL Server",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Entity Framework",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: ["Azure", "AWS", "GCP", "Docker", "Terraform", "CI/CD", "Git"],
  },
  {
    label: "AI & Integration",
    skills: ["Claude", "OpenAI", "MCP", "GraphQL", "RabbitMQ", "OAuth"],
  },
  {
    label: "Testing",
    skills: ["Playwright", "Cypress", "Jest", "NUnit", "Moq", "TDD"],
  },
];
